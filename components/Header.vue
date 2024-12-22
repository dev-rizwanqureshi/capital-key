<script setup>

import { ref } from 'vue';


const navOpen = ref(false);


function clickNav() {

    navOpen.value = navOpen.value === false ? true : false

}

</script>

<template>
    <header id="navigation" :class="[{'nav-open': navOpen}]">
        <div class="container">
            <div class="header-wrapper">
                <ul class="mb-0">
                    <li><a href="/" class="active">Home</a></li>
                    <li><a href="/#about-us">About</a></li>
                    <li><a href="/#loan-program">Programs</a></li>
                    <li><a href="/#broker">Brokers</a></li>
                </ul>
                <div class="logo-name">
                    <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M7.35793 16.1621H1.33781L2.64023 8.34758C1.08784 7.68394 0 6.14294 0 4.34787C0 1.94661 1.94661 0 4.34787 0C6.74913 0 8.69574 1.94661 8.69574 4.34787C8.69574 6.14294 7.6079 7.68394 6.05551 8.34758L7.35793 16.1621Z"
                            fill="#222222" />
                    </svg>
                    <h3>CAPITAL KEY <br> LENDING</h3>
                </div>
                <div class="navbar-user-link">
                    <a href="/investors" class="navbar-link">Investors</a>
                    <a href="/blog" class="navbar-link">Blog</a>
                    <a href="/apply" class="dark-btn">APPLY HERE</a>
                </div>
                <div class="hamburger">
                    <div class="close-btn cursor-pointer" v-if="navOpen">
                        <span  @click="clickNav()"><img src="~/assets/images/close.png" alt=""></span>
                    </div>
                    <span class="cursor-pointer" v-else @click="clickNav()">
                        <img src="~/assets/images/hamburger.png" alt="">
                    </span>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped></style>
