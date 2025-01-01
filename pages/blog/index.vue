<script setup>
import { onMounted, computed } from 'vue'
import $ from 'jquery';
import axios from "axios";

useSeoMeta({
    title: 'Capital Key Lending Blog - Expert Insights on Real Estate Financing',
    ogTitle: 'Capital Key Lending Blog - Expert Insights on Real Estate Financing',
    description: "Stay ahead in the real estate market with Capital Key Lending's expert insights and latest trends. Read our blog to enhance your knowledge and make informed investment decisions.",
    ogDescription: "Stay ahead in the real estate market with Capital Key Lending's expert insights and latest trends. Read our blog to enhance your knowledge and make informed investment decisions.",
});


onMounted(() => {
    const navElement = document.getElementById('nav');

    if (navElement) {
        navElement.classList.remove('active');
    }

    getCategories();
    getArticles();

})


function formatLaravelDateToDDMMYYYY(laravelDate) {
    const date = new Date(laravelDate);
    if (isNaN(date.getTime())) {
        throw new Error("Invalid date string provided.");
    }

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}

const searchTimeOut = ref(null);
const categories = ref([]);
const articlesObject = ref({});
const category_id = ref(null);
const search = ref(null);
const loader = ref(false);
const website = 'capitalkeylending';


function onSelectCategory(id) {
    console.log('onSelectCategory ==== ' + id);
    category_id.value = category_id.value === id ? null : id;
    getArticles();
}

function onSearch() {
    console.log('onSearch')

    if(searchTimeOut.value) {
        clearTimeout(searchTimeOut.value)
    }

    searchTimeOut.value = setTimeout(() => {

        getArticles();

    }, 2000)

}

function getCategories () {
    console.log('getCategories')

    axios.get(`https://lobster-app-cphe8.ondigitalocean.app/api/website/${website}/categories`)
        .then((response) => {
            console.log('then')
            console.dir(response);
            categories.value = response.data;
        })
        .catch((error) => {
            console.log('error')
            console.dir(error);
        })
        .finally(() => {
            console.log('finally')
        })


}


function getArticles () {
    console.log('getArticles')

    const data = {
        'category_id': category_id.value,
        'search': search.value
    };

    loader.value = true;

    axios.get(`https://lobster-app-cphe8.ondigitalocean.app/api/website/${website}/articles`, { params: data })
        .then((response) => {
            console.log('then')
            console.dir(response);
            articlesObject.value = response.data;
        })
        .catch((error) => {
            console.log('error')
            console.dir(error);
        })
        .finally(() => {
            console.log('finally')
            loader.value = false;
        })


}

</script>


<template>
    <section class="blog-section">
        <div class="container">
            <div class="blog-heading">
                <h1 class="common-heading">Blog</h1>
            </div>


            <div class="row">

                <div class="col-12">


                    <input class="form-control" type="search" v-model="search" placeholder="Search here" @keyup="onSearch()" style="max-width: calc(100% - 50px);}">

                    <template v-if="categories.length > 0">

                        <div class="mt-4">

                            <template v-for="category in categories">
                                <span @click="onSelectCategory(category.id)" :class="['blog-tab ms-2', {'selected': category_id === category.id} ]">{{ category.name }}</span>
                            </template>
                        </div>


                    </template>

                </div>

            </div>


            <template v-if="loader">

                <div class="row">


                    <div class="col-12">


                        <div class="blog-searching">

                            <div class="spinner-grow text-dark" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>


                        </div>


                    </div>

                </div>

            </template>

            <template v-else>


                <template v-if="articlesObject.data && articlesObject.data.length > 0">


                    <div class="blog-images">

                        <template v-for="single_article in articlesObject.data">

                            <div class="blog-card">
                                <NuxtLink class="post-card-img" :to="`/blog/${single_article.slug}`">
                                    <img :src="single_article.image" alt="Blog Image" class="blog-image">
                                </NuxtLink>

                                <div class="blog-content">
                                    <NuxtLink :to="`/blog/${single_article.slug}`" style="text-decoration: unset" class="blog-title">{{ single_article.title }}</NuxtLink>
                                    <p class="blog-description">{{ single_article.description }}</p>
                                    <p class="blog-author">Admin – {{ formatLaravelDateToDDMMYYYY(single_article.created_at) }}</p>
                                </div>
                            </div>

                        </template>

                    </div>

                </template>


            </template>

        </div>
    </section>

</template>