<template>
  <nav class=" xl-px-4 z-3 w-100 shadow d-flex align-items-center bg-white fixed-top">
    <div class="row w-100 m-0 d-flex justify-content-between align-items-center">
      <div class="col-se gap-2 col d-flex justify-content-between align-items-center p-0 m-0 position-relative">
        <a class="button w-50 border-0 rounded h6 text-white py-2 m-0 px-2">تطوع معنا</a>
        <a href="" style="height:35.2px"
          class="se gap-2 w-50 d-flex align-items-center justify-content-start   pe-2 py-1 desplay-6  rounded  bg-body-tertiary  text-secondary">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
          <p class="m-0">بحث</p>
        </a>
      </div>
      <div class="col-menu col-6 col-lg d-flex align-items-center justify-content-center pe-5 fw-normal fs-5  py-0">
        <router-link to="/home">الرئيسية</router-link>
        <router-link to="/about">من نحن</router-link>
        <router-link to="/Emailus">راسلنا</router-link>
      </div>
      <div class="bar col d-flex align-items-center justify-content-start  fs-1 ">
        <font-awesome-icon icon="bars" v-on:click="toggleNav" />
      </div>
      <div class="col d-flex justify-content-end">
        <img src="../assets/الجريدة-1.png" alt="" />
      </div>
    </div>
  </nav>
  <div class="sec-nav " :class="{ active: isNavOpen }">
    <ul>
      <li><router-link to="/home">الرئيسية</router-link></li>
      <li><router-link to="/about">من نحن</router-link></li>
      <li><router-link to="/Emailus">راسلنا</router-link></li>
    </ul>
    <div class="button">
      <a href="">تطوع معنا</a>
    </div>
  </div>
  <router-view />
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      isNavOpen: false,
    };
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    },
  },
};
</script>
<style scoped>
.sec-nav ul li {
  transition: 0.5s;
}

.sec-nav ul li:hover {
  transform: translateX(-10px);
}

nav {
  padding: var(--padding);
  height: 85px;
  border-bottom: 1px solid #00000063;
}

nav .col-se .button {
  background-color: var(--main-color);
}

nav .col-se .se {
  border: 0.5px solid #b3b2b2;
}

nav .col-menu {

  color: var(--text-color);
  gap: 75px;
}

nav a.router-link-exact-active {
  color: var(--main-color) !important;
}

@media (max-width: 1000px) {
  nav {
    padding: 0 25px !important;
  }
}

@media (max-width: 940px) {
  nav .col-menu {
    padding: 0 !important;
    gap: 25px !important;
  }
}

@media (max-width: 800px) {
  nav .col-menu {
    padding: 0 !important;

  }

  nav .col-se .se {
    display: none !important;
  }

  nav .col-se .button {
    width: 100% !important;
  }
}

@media (max-width: 600px) {
  nav .col-menu {
    display: none !important;
  }

  nav .col-se {
    display: none !important;
  }

  nav .col-se .button {
    display: none;
  }

  .sec-nav {
    width: 100%;
    height: 240px;
    display: flex;
    position: fixed;
    top: 85px;
    background-color: white;
    flex-direction: column;
    align-items: start;
    gap: 20px;
    padding: 10px 30px;
    opacity: 0;
    transform: translateY(-25%);
    transition: transform 0.3s, opacity 0.1s;
    z-index: -500;
  }

  .sec-nav.active {
    opacity: 1 !important;
    transform: translateY(0) !important;
    z-index: 100;
  }

  .sec-nav ul {
    padding: 0 !important;
    display: flex;
    flex-direction: column;
    gap: 25px;
    align-items: start;
    font-size: 20px;
  }

  .sec-nav .button {
    width: 155px;
    display: flex;
    color: white !important;
    background-color: var(--main-color);
    font-size: 16px;
    margin-left: 20px;
    height: 30px;
    border: none;
    justify-content: center;
    align-items: center;
  }

  .sec-nav .button a {
    color: white !important;
  }
}

@media (min-width: 600px) {
  nav .bar {
    display: none !important;
  }

  .sec-nav {
    display: none !important;
  }
}
</style>
