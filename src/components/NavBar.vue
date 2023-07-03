<template>
  <nav>
    <div class="col-se">
      <a href="" class="button">تطوع معنا</a>
      <a href="" class="se">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        <p>بحث</p>
      </a>
    </div>
    <div class="col-menu">
      <router-link to="/home">الرئيسية</router-link>
      <router-link to="/about">من نحن</router-link>
      <router-link to="/Emailus">راسلنا</router-link>
    </div>
    <font-awesome-icon icon="bars" class="bar" v-on:click="toggleNav" />
    <img src="../assets/الجريدة-1.png" alt="" />
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
nav {
  display: flex;
  justify-content: space-between;
  padding: var(--padding);
  height: 85px;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 1px solid #00000063;
  box-shadow: 0px 10px 40px #868181;
  width: 100%;
  z-index: 1000;
  background-color: white;
}

nav .col-se {
  width: 30%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 40px;
}

nav .col-se .button {
  width: 40%;
  background-color: var(--main-color);
  color: white !important;
  font-size: 16px;
  padding: 5px 10px;
  border: none;
  border-radius: 2px;
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
