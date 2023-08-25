<template>
  <Navbar />
  <Footer />
</template>
<script>
import Navbar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Home",
  components: { Navbar, Footer },
  data() {
    return {};
  },
};
document.documentElement.dir = "rtl";
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900;1000&display=swap");

* {
  box-sizing: border-box !important;
}

:root {
  --main-color: #5165fd;
  --text-color: #383838;
  --padding: 0px 60px;
  --text-gradient: linear-gradient(to right, #5367ff, #e553ff);
}

#app {
  font-family: "Cairo", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul,
li {
  margin: 0 !important;
  list-style-type: none !important;
}

a {
  text-decoration: none !important;
  color: black !important;
}
</style>
