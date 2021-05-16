<template>
 <!-- Navbar -->
<nav class="navbar navbar-expand-lg  bg-color">
  <!-- Container wrapper -->
  <div class="container-fluid">
    <!-- Toggle button -->
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    <!-- Collapsible wrapper -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!-- Navbar brand -->
      <a class="navbar-brand mt-2 mt-lg-0" href="#">
        <img
          src="https://storage-asset.msi.com/global/picture/features/VGA/GTX1650/Gaming/gaming-x-logo.png"
          height="40"
          width="150"
          alt=""
          loading="lazy"
        />
      </a>
      <!-- Left links -->
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <router-link class="nav-link" to="/">
          <a>Home</a>
            </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/products">
          <a>Products</a>
            </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">
          <a>About Us</a>
            </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/users-list" >
            <a>Users</a>
          </router-link>
        </li>
        
      </ul>
      <!-- Left links -->
    </div>
    
    <div class="d-flex align-items-center">
       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
         <template v-if="user.loggedIn">
          <li class="nav-item">
            <a class="nav-link">{{user.data.displayName}}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click.prevent="signOut()">Log Out!</a>
          </li>
        </template>
          <template v-else>
          <li class="nav-item">
            <router-link class="nav-link" to="login">
             <a>Login</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="register">
             <a>Register</a>
            </router-link>
          </li>
        </template>
       </ul>
      
    </div>
  
  </div>

</nav>

</template>

<script>
import { mapGetters } from "vuex"
import firebase from "firebase"
export default {
  computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "Home"
          });
        });
    }
  }
};
</script>

<style scoped>
    nav{
        width: 1200px;
        margin-left: auto;
        margin-right: auto;
        
    }
    .bg-color{
        
        background-color: rgb(56,62,66);
    }
    a{
        color: #C60021!important;
    }
</style>