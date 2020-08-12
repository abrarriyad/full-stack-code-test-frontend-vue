<template>
  <div class="container">
    <div class="card">
      <div class="card-content">
        <h1 class="title">Login</h1>
        <div class="field">
          <div class="control has-icons-left">
            <input
              class="input is-primary"
              type="text"
              placeholder="username"
              v-model="user.username"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </div>
        </div>

        <div class="field">
          <div class="control has-icons-left">
            <input
              class="input is-primary"
              type="password"
              placeholder="password"
              v-model="user.password"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-key"></i>
            </span>
          </div>
        </div>

        <article v-if="showAlert" class="message is-danger">
          <div class="message-header">
            <p>Login Failed</p>
            <button @click="showAlert=false" class="delete" aria-label="delete"></button>
          </div>
          <div class="message-body">
            {{errorMsg}}
          </div>
        </article>

        <div class="field is-grouped">
          <div class="control">
            <button @click="login" class="button is-success">Login</button>
          </div>
          <div class="control">
            <button class="button is-link is-light">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      showAlert: false,
      errorMsg: "",
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("retrieveToken", this.user)
        .then((success) => {
          this.$router.push("/services");
        })
        .catch((error) => {
          this.errorAlert(error);
        });
    },
    errorAlert(message) {
      this.showAlert = true;
      this.errorMsg = message;
    },
  },
};
</script>

<style scoped>
</style>