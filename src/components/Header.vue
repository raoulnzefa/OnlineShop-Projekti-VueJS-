<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand class="px-3"
        ><img
          src="https://storage-asset.msi.com/global/picture/features/VGA/GTX1650/Gaming/gaming-x-logo.png"
          height="40"
          width="150"
          alt=""
          loading="lazy"
      /></b-navbar-brand>

       <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item
            ><router-link class="nav-link" to="/">
              <a>Home</a>
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link class="nav-link" to="/AllProducts">
              <a>Products</a>
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link class="nav-link" to="/about">
              <a>About Us</a>
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link class="nav-link" to="/contact">
              <a>Contact Us</a>
            </router-link>
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav>
          <b-nav-item-dropdown text="Users" right>
            <b-dropdown-item>
              <router-link class="nav-link" to="/users-list">
                <a>Users List</a>
              </router-link>
              </b-dropdown-item>
            <b-dropdown-item>
              <router-link class="nav-link" to="/add-user">
                <a>Add User</a>
              </router-link>
              </b-dropdown-item>
                <b-dropdown-item>
              <router-link class="nav-link" to="/products">
                <a>Add Products</a>
              </router-link>
              </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
         <b-nav-item class="bullet ml-auto">
       <ul class="navbar-nav">
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
             <a class="bg-color">Login</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="register">
             <a>Register</a>
            </router-link>
          </li>
        </template>
       </ul>
        </b-nav-item> 
              </b-collapse>

         
       
    </b-navbar>
    
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
  computed: {
    ...mapGetters({
      // map `this.user` to `this.$store.getters.user`
      user: "user",
    }),
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "Home",
          });
        });
    },
  },
};
</script>

<style scoped>
.bullet{
  list-style-type: none;
}
span{
  color: #c60021 !important;
}

@media (max-width: 575.98px) {
  .display {
  align-items: center;
  }
}
.bg-color, .show {
  background-color: rgb(56, 62, 66);
}
a, span {
  color: #c60021 !important;
}
dropdown-menu dropdown-menu-right{
  background-color: darkgray;
}

</style>