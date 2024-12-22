
<script setup>
import { onMounted } from 'vue'
import axios from "axios";


const route = useRoute();
const slug = route.params.slug;


useSeoMeta({
    title: 'Pacific Legacy Capital',
    ogTitle: 'Pacific Legacy Capital',
})

const notFound = ref(false);
const articlesObject = ref({});
const loader = ref(true);

onMounted(() => {


    axios.get(`https://lobster-app-cphe8.ondigitalocean.app/api/article/${slug}`, )
        .then((response) => {
            console.log('then')
            console.dir(response);
            articlesObject.value = response.data;


            useSeoMeta({
                title: response.data.title + ' | Pacific Legacy Capital',
                ogTitle: response.data.title + ' | Pacific Legacy Capital',
                description: response.data.description,
                ogDescription: response.data.description,
            })


        })
        .catch((error) => {
            console.log('error')
            console.dir(error);
            notFound.value = true
        })
        .finally(() => {
            console.log('finally')
            loader.value = false;
        })

})


</script>


<template>


    <template v-if="loader">

        <div class="blog-searching-slug">

            <div class="spinner-grow text-dark" role="status">
                <span class="sr-only">Loading...</span>
            </div>


        </div>

    </template>

    <template v-else>

        <template v-if="notFound">


            <div class="header-deal-funding">
                <span class="blog-content-heading">404 Not Found</span>
            </div>

        </template>

        <template v-else-if="articlesObject">

            <div class="page-container" style="margin-top: 200px; margin-bottom: 20px">

                <div class="post-page" >

                    <h2>{{ articlesObject.title }}</h2>

                    <img class="post-image" :src="articlesObject.image" :alt="articlesObject.title" />



                    <div v-html="articlesObject.contentData"></div>

                </div>

            </div>

        </template>

    </template>

</template>

<style>

.post-page {
    max-width: 800px;
    margin: 0 auto;
    color: #333;
    padding: 30px;
    color: #333;
    background-color: #fff;
    border: 2px solid rgba(27, 102, 222, 1);
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.post-page h1 {
    font-size: 2em;
    color: rgba(27, 102, 222, 1);
    margin-bottom: 20px;
}

.post-page h2 {
    font-size: 1.5em;
    color: rgba(27, 102, 222, 1);
    margin-top: 30px;
    margin-bottom: 15px;
}

.post-page p {
    font-size: 1em;
    line-height: 1.6;
    margin-bottom: 20px;
}

.post-page ul, .post-page ol {
    margin-left: 20px;
    margin-bottom: 20px;
}

.post-page li {
    margin-bottom: 10px;
    font-size: 1em;
}

.post-page li strong {
    color:  rgba(27, 102, 222, 1);
}

.post-page a {
    color: rgba(27, 102, 222, 1);
    text-decoration: none;
}

.post-page a:hover {
    text-decoration: underline;
}


.blog-searching-slug {
    height: calc(100vh - 240px);
    display: flex;
    justify-content: center;
    align-items: center;
}

.blog-searching-slug .spinner-grow {
    width: 200px;
    height: 200px;
}

.sr-only {
    display: none;
}
.post-image {
    width: 100%;
    max-height: 400px;
    object-fit: cover;
    display: inline-block;
    margin-bottom: 20px;
}

img {
    max-width: 100%;
    max-height: 80vh;
    object-fit: contain;
}


</style>
