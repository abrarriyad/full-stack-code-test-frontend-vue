<template>
  <div class="container">
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/">
            <span class="icon is-small is-left">
              <i class="fas fa-home"></i>
            </span>
            <h4 class="ml-1">Home</h4>
          </router-link>
          <router-link
            v-if="this.$store.getters.isLoggedIn"
            class="navbar-item has-icon-left"
            to="/services"
          >Services</router-link>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <router-link
                v-if="!this.$store.getters.isLoggedIn"
                class="button is-primary"
                to="/register"
              >
                <strong>Register</strong>
              </router-link>
              <router-link
                v-if="!this.$store.getters.isLoggedIn"
                class="button is-primary"
                to="/login"
              >
                <span class="icon is-small is-left">
                  <i class="fas fa-sign-in-alt"></i>
                </span>

                <h4>Login</h4>
              </router-link>
              <!-- <router-link
                v-if="this.$store.getters.isLoggedIn"
                to="/"
                class="button is-primary has-icons-left"
              >
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
                <h4>{{username}}</h4>
              </router-link> -->
              <router-link
                v-if="this.$store.getters.isLoggedIn"
                class="button is-primary"
                to="/logout"
              >
                <span class="icon is-small is-left">
                  <i class="fas fa-sign-out-alt"></i>
                </span>

                <h4>Logout</h4>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
// import { mapState } from "vuex";
export default {
  // computed: {
  //   ...mapState(["username"]),
  // },
};
</script>

<style lang="sass" src="bulma">
</style>>

</style>