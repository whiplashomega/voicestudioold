<template>
    <b-navbar toggleable="xl" class="site-header sticky-top py-1" type="dark">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_collapse">
      <div class="container d-flex flex-column flex-xl-row justify-content-between">
        <div>
          <router-link to="/">Home</router-link>
        </div>
        <div>
          <router-link to="/contact">Contact Me</router-link>
        </div>
        <div>
          <router-link to="/schedule">Schedule Lessons</router-link>
        </div>
        <div>
          <router-link to="/pay">Pay</router-link>
        </div>
        <div>
          <router-link to="/map">Get Directions</router-link>
        </div>
        <div>
          <router-link to="/about">About Me</router-link>
        </div>
      </div><!-- /.container-fluid -->
    </b-collapse>
  </b-navbar>
</template>
<script src="./navigation.js"></script>
<style lang="scss" src="./navigation.scss"></style>
