<template>
  <nav class="z-3 w-100 shadow bg-white fixed-top">
    <div
      class="row w-100 m-0 d-flex justify-content-between align-items-center"
    >
      <div
        class="col-se col d-flex justify-content-between align-items-center p-0 m-0 position-relative"
      >
        <a href="" class="button w-50 border-0 rounded h6 text-white py-1 px-2"
          >تطوع معنا</a
        >
        <a href="" class="se w-50 d-flex">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
          <p>بحث</p>
        </a>
      </div>
      <div class="col-menu col">
        <router-link to="/home">الرئيسية</router-link>
        <router-link to="/about">من نحن</router-link>
        <router-link to="/Emailus">راسلنا</router-link>
      </div>
      <font-awesome-icon icon="bars" class="bar" v-on:click="toggleNav" />
      <div class="col">
        <img src="../assets/الجريدة-1.png" alt="" />
      </div>
    </div>
  </nav>
  <div class="sec-nav" :class="{ active: isNavOpen }">
    <ul>
      <li><router-link to="/home">الرئيسية</router-link></li>
      <li><router-link to="/about">من نحن</router-link></li>
      <li><router-link to="/home">راسلنا</router-link></li>
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
  display: flex;
  width: 58%;
  height: 34px;
  align-items: center;
  justify-content: start;
  gap: 10px;
  border: 0.5px solid #b3b2b2;
  padding: 0 8px 0 0;
  border-radius: 2px;
  background-color: #eee;
  color: #777 !important;
}

nav .col-se .se p {
  margin: 0;
}

nav .col-menu {
  width: 50%;
  color: var(--text-color);
  gap: 75px;
  display: flex;
  justify-content: start;
  font-size: 20px;
  font-weight: 400;
  align-items: center;
  padding: 0 60px;
}

nav a.router-link-exact-active {
  color: var(--main-color) !important;
}

nav .bar {
  font-size: 32px;
}

@media (max-width: 1000px) {
  nav {
    padding: 0 25px !important;
  }
}

@media (max-width: 940px) {
  nav .col-menu {
    padding: 0 !important;
  }
}

@media (max-width: 800px) {
  nav .col-menu {
    padding: 0 !important;
    gap: 50px !important;
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
    display: none;
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
    display: none;
  }

  .sec-nav {
    display: none !important;
  }
}
</style>
