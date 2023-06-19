<template>
  <Navbar />
</template>
<script>
import Navbar from "@/components//NavBar.vue";
export default {
  name: "Home",
  components: { Navbar },
  data() {
    return {
      cards: [],
    };
  },
  mounted() {
    fatch("http://localhost:3000")
      .then((res) => res.json())
      .then((data) => (this.cards = data[0]))
      .catch((err) => console.log(err.message));
  },
};
document.documentElement.dir = "rtl";
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900;1000&display=swap");

:root {
  --main-color: #5165fd;
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

nav {
  display: flex;
  justify-content: space-between;
  padding: 10px 65px;
  align-items: center;
  position: relative;
  top: 0;
  left: 0;
  border-bottom: 1px solid #00000063;
  box-shadow: 0px 10px 40px #868181;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
