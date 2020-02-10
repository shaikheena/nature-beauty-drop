import React from 'react'
import Layout from '../components/layout'
const product_Img = require("../images/product.jpg")
export default () => {
    return <Layout>
        <div className="row ml-3 mt-3">
            <div className="col-4">
                <div class=" text-center py-2 border shadow  mb-2 ">
                    <img src={product_Img} alt="image-1 " class="img__intro__product " />
                    <div class="mt-4">
                        <h3 class="Cosmetic__soap "> <a href="#" class="nav-var text-dark">Facial Gels</a>
                        </h3>
                        <p>₹50 <span class="text-secondary ml-2"><del> ₹70</del></span></p>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
}