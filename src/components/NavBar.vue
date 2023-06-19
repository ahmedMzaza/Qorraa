<template>
  <nav>
    <div class="col-4">
      <a href="">تطوع معنا</a>
      <a href="">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        <p>بحث</p>
      </a>
    </div>

    <!--  <router-link to="/home">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/Emailus">EmailUs</router-link> -->
  </nav>
  <router-view />
</template>
<script>
export default {
  name: "Navbar",
};
</script>
<style></style>
