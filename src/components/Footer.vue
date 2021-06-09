<template>
    <div class="footer-area footer-padding ">
            <div class="container">
                <div class="row d-flex justify-content-between">
                    <div class="logo col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div class="single-footer-caption mb-50">
                            <div class="single-footer-caption mb-30">
                                <!-- logo -->
                                <div class="footer-logo">
                                        <img
                                            src="https://storage-asset.msi.com/global/picture/features/VGA/GTX1650/Gaming/gaming-x-logo.png"
                                            height="40"
                                            width="150"
                                            alt=""
                                            loading="lazy"
                                        />
                                </div>
                                <div class="footer-tittle pt-3">
                                    <div class="footer-pera p-2">
                                        <p> To offer an online, cost effective, quality , service orientated purchasing method.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="links2 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div class="single-footer-caption mb-50">
                            <div class="footer-tittle">
                                <h4>Quick Links</h4>
                                <ul>
                                    <li><router-link class="nav-link" to="/"><a>Home</a></router-link></li>
                                    <!-- <li><router-link class="nav-link" to="/products"><a>Products</a></router-link></li> -->
                                     <li><router-link class="nav-link" to="/AllProducts"><a>Products</a></router-link></li>
                                      <li><router-link class="nav-link" to="/About"><a>About Us</a></router-link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class=" links1 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div class="single-footer-caption mb-50">
                            <div class="footer-tittle">
                                <h4>New Products</h4>
                                <ul class="pb-3">
                                   <li><router-link class="nav-link" to="/AllProducts"><a>Laptops</a></router-link></li>
                                   <li><router-link class="nav-link" to="/AllProducts"><a>Gaming Chairs</a></router-link></li>
                                   <li><router-link class="nav-link" to="/AllProducts"><a>Game Consoles</a></router-link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div class="single-footer-caption mb-50">
                            <div class="footer-tittle">
                                <h4>Support</h4>
                                <ul class="pt-2">
                                    <li class="pt-1"><b-icon  class="m-1" icon="telephone-fill"></b-icon> +38344111258 </li>
                                    <li class="pt-1"><b-icon class="m-1" icon="inbox-fill"></b-icon>onlineshop@support.com</li>
                                    <li class="pt-1"><b-icon class="m-1" icon="geo-alt-fill"></b-icon>Magjistralja Prishtine-Shkup km.6</li>
                                    <div class="icons">
                                    <li class="pt-1"><a href="https://www.facebook.com/"><b-icon class="h2 mb-2 m-2" icon="facebook" variant="primary"></b-icon></a>
                                    <a href="https://www.instagram.com/"><b-icon class="h2 mb-2 m-2" icon="instagram" variant="danger"></b-icon></a>
                                    <a href="https://www.gmail.com/"><b-icon class="h2 mb-2 m-2" icon="google" variant="success"></b-icon></a>
                                    </li>
                                    </div>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>


<style scoped>
.icons{
    width: 100%;
}
h4{
    color: darkslateblue;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

    
@media only screen and (min-width: 1200px) and (max-width: 1600px) {
    .footer-padding {
        padding-top: 50px;
        /* padding-bottom: 20px */
    }
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {
    .footer-padding {
        padding-top: 25px;
        /* padding-bottom: 18px */
    }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
    .footer-padding {
        padding-top: 25px;
        /* padding-bottom: 18px */
    }
}

@media only screen and (min-width: 576px) and (max-width: 767px) {
    .footer-padding {
        padding-top: 25px;
        /* padding-bottom: 25px */
    }
}

@media (max-width: 575px) {
    .footer-padding {
        padding-top: 25px;
        /* padding-bottom: 25px */
    }
}

.footer-padding2 {
    padding-bottom: 20px
}

@media only screen and (min-width: 1200px) and (max-width: 1600px) {
    .footer-padding2 {
        padding-bottom: 25px
    }
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {
    .footer-padding2 {
        padding-bottom: 18px
    }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
    .footer-padding2 {
        padding-bottom: 18px
    }
    .links1{
        display: none;
    }
}

@media only screen and (min-width: 576px) and (max-width: 767px) {
    .footer-padding2 {
        padding-bottom: 18px
    }
    .links1, .links2{
         display: none;
    }
}

@media (max-width: 575px) {
    .footer-padding2 {
        padding-bottom: 18px
    }
    
    .links1, .links2, .logo{
         display: none;
    }
}

.message_submit_form:focus {
    outline: none
}

a {
    color: #635c5c
}

a:hover {
    color: #C21003
}

a:focus,
a:hover,
.portfolio-cat a:hover,
.footer -menu li a:hover {
    text-decoration: none
}

a,
button {
    outline: medium none
}

li{
    list-style-type: none;
}

.footer-area .footer-pera p {
    color: #868c98;
    font-size: 16px;
    margin-bottom: 50px;
    line-height: 1.8
}

.footer-area .footer-pera.footer-pera2 p {
    padding: 0
}
.bg-color{
        
        background-color: rgb(56,62,66);
    }
</style>