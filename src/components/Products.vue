<template>

<div class="container features">
    <div class="row">
  <h1>Add a Product</h1>
</div>
<br>
  <div class="row">

    <div class="col-lg-12 col-md-12 col-sm-12">
    <form @submit="onSubmit">
      <div class="form-group p-2">
        <input type="text" class="form-control" placeholder="Product Name" id="name">
      </div>
      <div class="form-group p-2">
        <textarea class="form-control" rows="4" placeholder="Product Description" id="description"></textarea>
      </div>
      <!-- <div class="form-group">
        <input type="text" class="form-control" placeholder="Image" v-model="products.image">
      </div> -->
      <div class="form-group p-2">
        <!-- <label for="picture" >Picture</label> -->
        <input type="file" id="image" name="image"  class="form-control-file"  @change="onFileChange" >
      </div>
      <div class="form-group p-2">
        <input type="number" class="form-control" placeholder="Price" id="price">
      </div>
      <input type="submit" class="btn" value="Save" id="sendcontact">
    </form>
    </div>
    </div>
</div>
</template>
<script>
/* eslint-disable */
import axios from 'axios'
export default {
  name: 'CreateProducts',
  data () {
    return {
      products:{},
    }
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      
      console.log(file);
    },
    onSubmit (evt) {
      evt.preventDefault();
      var bodyFormData = new FormData();
      
      let image = document.getElementById("image");
      bodyFormData.set("name", document.getElementById("name").value);
      bodyFormData.set("price", document.getElementById("price").value);
      bodyFormData.set("description", document.getElementById("description").value);
      bodyFormData.append("image", image.files[0]);
      
      axios.post(`http://localhost:4000/products`, bodyFormData)
      .then(response => {
        //console.log(response);
        this.$router.push({
          name: 'home',
          //params: { id: response.data._id }
        })
        })
      
    }
  }
}
</script>

<style scoped>
h1{
  color: darkslateblue;
}

.container{
  padding:5%;
}
#sendcontact{
  background-color:darkslateblue;
  padding-left:10%;
  padding-right:10%;
  color:white;
  transition: 1.0s ease;
}
#sendcontact:hover{
  background-color: darkblue;
  padding-left:10%;
  padding-right:10%;
  color:white;
}
</style>
