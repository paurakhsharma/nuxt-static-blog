<template>
  <div class='container font-sans text-black'>
    <div class='flex justify-between items-center'>
      <h1 class="pt-8 mb-8 text-2xl">
        <nuxt-link to="/" class="text-black no-underline hover:text-grey-darkest">My simple blog</nuxt-link>
      </h1>
      <div class='flex'>
        <div class="mr-6"><nuxt-link class="nav text-black no-underline" to="/about">About</nuxt-link></div>
        <div><nuxt-link class="nav text-black no-underline" to="/team">Team</nuxt-link></div>
      </div>
    </div>
    <div class="border-b border-solid border-grey mb-8"></div>
    <nuxt />
  </div>
</template>


<style>
 .container-inner {
   max-width: 650px;
 }

 .nav.nuxt-link-active {
   font-weight: bold;
   text-decoration: underline;
 }
</style>

