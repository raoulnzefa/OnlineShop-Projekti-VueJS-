<template>
    
    <b-container class="bv-example-row pt-3" >
                <b-row>
                    <b-col v-for="product in productfields" v-bind:key="product._id" class="col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
                    <b-col class="single-new-pro mb-30 text-center">
                      <b-col class="product-img">
                        <!-- <img src="../assets/mercedes2.jpg" class="imagediv"/> -->
                        <img :src="`http://localhost:5000/images/${product.image}`" class="imagediv">
                      </b-col>
                        <b-row class="product-caption">
                                <h5 class="titulli">{{ product.name }}</h5>
                                <p class="price">{{product.price}}.00 <span class="euro">Euro</span> </p>
                            
                            <b-col class="pb-3">
                                <!-- <b-button class="btn" id="buttonres" href="#/reservations" squared><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-check" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                                    </svg>
                                    Rezervo -->
                                <b-button  class="btn-danger">
                               <!-- <b-button v-b-modal.modal-1> -->
                                 Add to Cart</b-button>

                            
                            </b-col>
                        </b-row>
                    </b-col>
                    </b-col>
                </b-row>
            </b-container>
             

</template>

<script>
/* eslint-disable */
import axios from 'axios'
  export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        productfields:{},
        products: {},
      }
    },
    created () {
    axios.get(`http://localhost:4000/products`)
    .then(response => {
      this.productfields = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      },
      onSubmit (evt) {
      evt.preventDefault()
      axios.post(`http://localhost:4000/products`, this.products)
      .then(function (response) {
        console.log(response);
        })
      
    }
  }
  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media (max-width: 575.98px) {
  .bv-example-row {
     display: block;
  width: 190px;
  height: auto;
  padding: 5px;
  }
}

.product-img{
  border: 1px solid lightgrey;
  padding: 7px;

  background-color: white;
  border-radius: 3%;
}
.titulli{
  color: #C60021;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: bold;
  font-size: 1.5rem;
}
.price{
  color: black;
  font-size: 1.2rem;
}
.euro{
  font-size: 1rem;
  color: gray;
}
.single-new-pro .product-img {
    overflow: hidden;
    margin-bottom: 15px
}

.single-new-pro .product-img img {
    width: 100%;
    transform: scale(1);
    -webkit-transition: all .4s ease-out 0s;
    -moz-transition: all .4s ease-out 0s;
    -ms-transition: all .4s ease-out 0s;
    -o-transition: all .4s ease-out 0s;
    transition: all .4s ease-out 0s
}
.single-product .product-img {
    position: relative;
    overflow: hidden
}

.text-center{text-align:center!important}
</style>
