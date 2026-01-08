import Header from "../layout/Header";
import Hero from "../elements/hero/Hero";
import Features from "../elements/features/Features"
import Pricing from "../elements/pricing/Pricing"
import Walkthrough from "../elements/walkthrough/Walkthrough"
import Questions from "../elements/questions/Questions"
import Reviews from "../elements/reviews/Reviews"
import Footer from "../layout/Footer"

export default function HomePage(){
    return (
        <>
            <Header/>
            <Hero/>
            <Features/>
            <Walkthrough/>
            <Pricing/>
            <Questions/>
            <Reviews/>
            <Footer/>
        </>
    )
}