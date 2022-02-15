<template>
  <div id="app">
    <router-view :key="$route.path"/>
  </div>
</template>

<style lang="scss">
 @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");

 :root {
   --font: Roboto, sans-serif;
   --textColor: #374961;
   --linkActiveColor: #41b783;
   padding: 0;
   margin: 0;
   box-sizing: border-box;
 }

 #app {
   font-family: var(--font);
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: var(--textColor);
   margin-top: 20%;

   .logo {
     width: 200px;
   }
 }
</style>
