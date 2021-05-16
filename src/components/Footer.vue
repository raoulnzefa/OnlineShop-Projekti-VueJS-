<template>
    <div class="footer-area footer-padding ">
            <div class="container">
                <div class="row d-flex justify-content-between">
                    <div class="col-xl-3 col-lg-3 col-md-5 col-sm-6">
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
                                <div class="footer-tittle">
                                    <div class="footer-pera pt-3">
                                        <p> To offer an online, cost effective, quality , service orientated purchasing method.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-3 col-md-3 col-sm-5">
                        <div class="single-footer-caption mb-50">
                            <div class="footer-tittle">
                                <h4>Quick Links</h4>
                                <ul>
                                    <li><router-link class="nav-link" to="/"><a>Home</a></router-link></li>
                                    <!-- <li><router-link class="nav-link" to="/products"><a>Products</a></router-link></li> -->
                                     <li><a>Products</a></li>
                                      <li><router-link class="nav-link" to="/About"><a>About Us</a></router-link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-7">
                        <div class="single-footer-caption mb-50">
                            <div class="footer-tittle ">
                                <h4>New Products</h4>
                                <ul >
                                    <li class="pt-1"><a>Laptops</a></li>
                                    <li class="pt-1"><a>Gaming Chairs</a></li>
                                    <li class="pt-1"><a> Game Consoles</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-5 col-sm-7">
                        <div class="single-footer-caption mb-50">
                            <div class="footer-tittle">
                                <h4>Support</h4>
                                <ul class="pt-2">
                                    <li class="pt-1"><b-icon icon="telephone-fill"></b-icon> +38344111258 </li>
                                    <li class="pt-1"><b-icon icon="inbox-fill"></b-icon>onlineshop@support.com</li>
                                    <li class="pt-1"><b-icon icon="geo-alt-fill"></b-icon>Magjistralja Prishtine-Shkup km.6</li>
                                    <li class="pt-1"><b-icon class="h2 mb-2 m-3" icon="facebook" variant="primary"></b-icon>
                                    <b-icon class="h2 mb-2 m-3" icon="instagram" variant="danger"></b-icon>
                                    <b-icon class="h2 mb-2 m-3" icon="google" variant="success"></b-icon>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>


<style scoped>
.footer-area{
     width: 1200px;
        margin-left: auto;
        margin-right: auto;
}
    
@media only screen and (min-width: 1200px) and (max-width: 1600px) {
    .footer-padding {
        padding-top: 50px;
        padding-bottom: 20px
    }
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {
    .footer-padding {
        padding-top: 25px;
        padding-bottom: 18px
    }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
    .footer-padding {
        padding-top: 25px;
        padding-bottom: 18px
    }
}

@media only screen and (min-width: 576px) and (max-width: 767px) {
    .footer-padding {
        padding-top: 25px;
        padding-bottom: 25px
    }
}

@media (max-width: 575px) {
    .footer-padding {
        padding-top: 25px;
        padding-bottom: 25px
    }
}

.footer-padding2 {
    padding-bottom: 40px
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
}

@media only screen and (min-width: 576px) and (max-width: 767px) {
    .footer-padding2 {
        padding-bottom: 18px
    }
}

@media (max-width: 575px) {
    .footer-padding2 {
        padding-bottom: 18px
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