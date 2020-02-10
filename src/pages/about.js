import React from 'react'
import Layout from '../components/layout'
var about_Nbd = [
    "Nature’s Beauty Drop (NBD) was created to provide natural Organic handmade & herbal products that are not only beautiful but gentle on the environment. Our products are handmade with all natural ingredients that everyone can use: Men, Women,Boys,Girls & including babies.",
    "Our luxurious ,natural products are 100 % vegan and cruelty free.Hand crafted in small batches with  organic oils , botanicals , pure essential oils, rare clays. Inspired by the magic and beauty of nature.Each product is unique and artistically crafted with love for cosmetics that's good for you and the planet.",
    "My passion for health and my intimate love of nature has inspired me to creat handmade soaps , body & skin ,Hair care the old fashion way . I once read that we should not put anything on our skin that we would not eat and I’ve applied that motto into my life passion, creating all natural products . I am dedicated to crafting fresh products that have nourishing and healing qualities that literally feed your skin using only the best ingredients that nature has to offer.we use oils known for their nourishing qualities such as olive oil, almond oil, coconut oil, castor oil, Cocoa butter, sheabutter, Avocado oil and many more."

];
var mission_Benefit = [
    {
        mission: "Our mission is to help human live to provide a wide range of high quality beauty products which are made up of purely herbal ingredients derived from nature and cultures.",
        benefit: "We are highly engaged in exclusive range of Beauty Products. These are available in direct contact with the clients.Moreover, we ensure that we strictly test our range on several parameters of quality."
    }
];
var benefit__Points = [
    "Checked for purity",
    "Tested against harmful reactants",
    "No animal testing"
];

export default (props) => {
    return <Layout>
        <div className=" bg-light h-100 p-md-5">
            <h2 className="about_title">Who We Are ?</h2>
            {about_Nbd.map((value, index) => (
                <p className="text-secondary  about_para" key={index}>{value}</p>
            ))}
            <div className="d-flex ">
                <div class="mt-5 ">
                    <h2 className="about_title">Our Mission :</h2>
                    {mission_Benefit.map(value => <p className="text-secondary  about_para">{value.mission}</p>)}
                </div>
                <div className="mt-5 ml-3">
                    <h2 className="about_title">Benefits :</h2>
                    {mission_Benefit.map(value => <p className="text-secondary about_para">{value.benefit}</p>)}
                    <ul className="text-secondary">
                        {benefit__Points.map((value, index) => (
                            <li key={index}>{value}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

    </Layout >
} 