<template>
  <div class="container">
    <div class="section">
      <div class="field has-addons">
        <div class="control">
          <input class="input" type="text" placeholder="Search" />
        </div>
        <div class="control">
          <a class="button is-primary is-outlined">Search</a>
        </div>
      </div>
      <div class="table-container">
        <table class="table is-bordered is-hoverable is-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Url</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(service,index) in services" :key="index">
              <td>{{service.id}}</td>
              <td>{{service.name}}</td>
              <td>{{service.url}}</td>
              <td>{{service.status}}</td>
              <td>
                <button
                  @click="updateServices(service.id)"
                  class="button is-primary is-outlined is-light is-small"
                >Edit</button>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="buttons">
          <button @click="toggle = true" class="button is-primary is-outlined">
            <span>Add Services</span>
            <span class="icon is-small">
              <i class="fas fa-plus"></i>
            </span>
          </button>
          <button @click="alert = true" class="button is-danger is-outlined">
            <span>Delete</span>
            <span class="icon is-small">
              <i class="fas fa-times"></i>
            </span>
          </button>
        </div>

        <div v-if="toggle">
          <div class="field">
            <div class="control">
              <input class="input" type="text" placeholder="Service Name" v-model="service.name" />
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input class="input" type="text" placeholder="Url" v-model="service.url" />
            </div>
          </div>
          <div class="field is-grouped">
            <div class="control">
              <button @click="createService" class="button is-primary">Create</button>
            </div>
            <div class="control">
              <button @click="toggle=false" class="button is-link is-light">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="alert" class="notification is-danger is-light">
      Do you want to delete all
      <strong>Services</strong>?
      <button @click="deleteServices" class="button is-outlined is-danger">Yes</button>
      <button @click="alert = false" class="button is-link is-success">No</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";
export default {
  created() {
    this.$store
      .dispatch("getServices")
      .then((success) => {
        console.log("get services status: ", success);
      })
      .catch((error) => {
        console.log("get services status: ", error);
      });
  },
  data() {
    return {
      toggle: false,
      alert: false,
      service: {
        name: "",
        url: "",
      },
    };
  },
  computed: {
    ...mapState(["token", "services", "allServices"]),
  },
  methods: {
    createService() {
      this.$store
        .dispatch("createService", this.service)
        .then((success) => {
          this.toggle = false;

          (this.service.name = ""),
            (this.service.url = ""),
            this.$store
              .dispatch("getServices")
              .then((success) => {
                console.log("List updated status: ", success);
              })
              .catch((error) => {
                console.log("List updated status: ", error);
              });
        })
        .catch((error) => {
          console.log("create service status: ", error);
        });
    },

    deleteServices() {
      this.$store
        .dispatch("deleteServices")
        .then((success) => {
          console.log("Delete service status: ", success);

          this.$store
            .dispatch("getServices")
            .then((success) => {
              console.log("List updated status: ", success);
            })
            .catch((error) => {
              console.log("List updated status: ", error);
            });
        })
        .catch((error) => {
          console.log("Delete service status: ", error);
        });
      this.alert = false;
    },

    updateServices(serviceId) {
      this.$store
        .dispatch("updateServices", serviceId)
        .then((success) => {
          console.log("Service Updated: ", success);
        })
        .catch((error) => {
          console.log("Service Updated: ", error);
        });
    },
  },
};
</script>

<style scoped>
</style>