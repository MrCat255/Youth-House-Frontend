<template>
  <router-view/>
  <footer-component/>
</template>

<script>
import FooterComponent from "@/components/FooterComponent";

export default {
  name: 'App',
  components: {
    FooterComponent,
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  height: max-content;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
label {
  cursor: pointer;
  user-select: none;
}
label * {
  cursor: pointer;
  user-select: none;
}
ul li {
  list-style: none;
}
button {
  cursor: pointer;
}
</style>
