<template>
  <div class="container features">
    <br />
    <div class="img-fluid col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <img
        src="https://www.sytong2013.com/template/sytong/static/picture/Contact-Us-Banner.jpg"
        height="100%"
        width="100%"
        alt=""
      />
    </div>
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <p class="p-3" id="contactParagraph">Please write to us using the form below.</p>
        </div>
    <div class="row">
      
      <div class="outline pt-1 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <ul class="pt-2">
          <li class="pt-2">
            <b-icon class="m-1" icon="telephone-fill"></b-icon> +38344111258
          </li>
          <li class="pt-2">
            <b-icon class="m-1" icon="inbox-fill"></b-icon
            >onlineshop@support.com
          </li>
          <li class="pt-2">
            <b-icon class="m-1" icon="geo-alt-fill"></b-icon>Magjistralja
            Prishtine-Shkup km.6
          </li>
          <div class="icons">
            <li class="pt-2">
              <a href="https://www.facebook.com/"
                ><b-icon
                  class="h2 mb-2 m-2"
                  icon="facebook"
                  variant="primary"
                ></b-icon
              ></a>
              <a href="https://www.instagram.com/"
                ><b-icon
                  class="h2 mb-2 m-2"
                  icon="instagram"
                  variant="danger"
                ></b-icon
              ></a>
              <a href="https://www.gmail.com/"
                ><b-icon
                  class="h2 mb-2 m-2"
                  icon="google"
                  variant="success"
                ></b-icon
              ></a>
            </li>
          </div>
        </ul>
      </div>
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
        
        <form @submit="onSubmit">
          <div class="form-group p-2">
            <input
              type="text"
              class="form-control"
              placeholder="Name"
              v-model="contacts.name"
            />
          </div>
          <div class="form-group p-2">
            <input
              type="email"
              class="form-control"
              placeholder="Email"
              v-model="contacts.email"
            />
          </div>
          <div class="form-group p-2">
            <textarea
              class="form-control"
              rows="4"
              placeholder="Enter your concern"
              v-model="contacts.description"
            ></textarea>
          </div>
          <input type="submit" class="btn p-2" value="Send" id="sendcontact" />
        </form>
      </div>
    </div>
    
  </div>
</template>
<script>
/* eslint-disable */
import axios from "axios";
import router from "@/router";
export default {
  name: "CreateContacts",
  data() {
    return {
      contacts: {},
    };
  },
  methods: {
    onSubmit() {
      axios
        .post(`http://localhost:4000/contacts`, this.contacts)
        .then((response) => {
          //console.log(response);
          router.push({
            name: "home",
            //params: { id: response.data._id }
          });
        });
    },
  },
};
</script>

<style scoped>
li{
    list-style-type: none;
}

.img-fluid {
  max-width: 100%;
  max-height: 100%;
}

#sendcontact {
  background-color: darkslateblue;
  color: white;
  transition: 0.8s ease;
}
#sendcontact:hover {
  background-color: black;
  color: white;
}
#contactParagraph {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;
  color: darkslateblue;
  font-size: 2rem;
}
</style>