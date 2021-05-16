<template>
 
<div class="aboutus">
    <div class="about-details ">
        <div class="container">
            <div class="row">
                <div class=" col-lg-6">
                    <div class="about-details-cap mb-50 p-4">
                        <h4>Our Mission</h4>
                        <p>
                            To offer an online, easy to use, cost effective, quality guaranteed, service orientated stationery purchasing method for school goers, personal and small business. Locally based service and community responsibility, coupled with purchasing convenience are the cornerstones of our business model.
                        </p>
                    </div>
                    
                    <div class="about-details-cap mb-50 p-4">
                        <h4>Our Vision</h4>
                        <p>
                            To become the national online stationery shopping portal of choice, while maintaining a localised service offering.
                        </p>
                        <p>  To create social responsibility programmes with our customers to uplift the local communities we operate in by donating the products to educate and enhance their future. To sponsor at least 1 local underprivileged school goer with fundamental stationery throughout their studies.</p>
                    </div>
                </div>
                <div class="col-lg-6 pt-4 map img-fluid">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2937.6209566262937!2d21.12899141586645!3d42.584567179172396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549d539fe9170f%3A0x96a018472c30145!2sGjirafa%2C%20Inc!5e0!3m2!1sen!2s!4v1621186396607!5m2!1sen!2s" height="100%" width="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>                </div>
            </div>
        </div>
    </div>
    
    <div class="shop-method-area m-5">
        <div class="container p-4 m-2">
            <div class="method-wrapper">
                <div class="row d-flex justify-content-between">
                    <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="single-method mb-40">
                            <b-icon class="h2 mb-2 m-3" icon="cart-check-fill" variant="danger"></b-icon> 
                            <h6>Free Shipping Method</h6>

                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="single-method mb-40">
                           <b-icon class="h2 mb-2 m-3" icon="shield-shaded" variant="danger"></b-icon>  
                            <h6>Secure Payment System</h6>

                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="single-method mb-40">
                            <b-icon class="h2 mb-2 m-3" icon="hourglass-split" variant="danger"></b-icon>  
                            <h6>24/7 Assistance</h6>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Shop Method End-->
</div>
</template>

<style scoped>
.aboutus{
     width: 1200px;
        margin-left: auto;
        margin-right: auto;
}
.map{
    border: 1px solid black;
}
.img-fluid{
    max-height: 100%;
    max-width: 100%;
}
.shop-method-area{
    border: 1px solid darkred;
}
    
.about-details .about-details-cap h4 {
    font-size: 30px;
    font-family: "Josefin Sans", sans-serif;
    font-weight: 700;
    margin-bottom: 30px;
    color: #000a2d;
    display: inline-block;
    position: relative;
    padding-left: 68px
}

.about-details .about-details-cap h4::before {
    position: absolute;
    content: "";
    width: 54px;
    height: 2px;
    background: #eb566c;
    top: 0;
    left: 0px;
    top: 50%;
    transform: translateY(-50%)
}

.about-details .about-details-cap p {
    color: #464d65;
    font-size: 14px
}

.about_us .about_us_video {
    position: relative
}

.about_us .about_us_content h5 {
    font-size: 20px;
    color: #ff2020;
    font-weight: 400
}


</style>