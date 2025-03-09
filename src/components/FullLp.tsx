import "./index.css"

import Header       from "./Header";
import Hero         from "./Hero";
import Service      from "./Service";
import About        from "./About";
import Features     from "./Features";
import Pricing      from "./Pricing";
import Faq          from "./Faq";
import Cta          from "./Cta";
import Footer from "./Footer";

export const FullLp = ()=>{
    return(
        <>
            <Header/>
            <main>
                <article>
                    <Hero/>
                    <Service/>
                    <Pricing/>
                    <About/>
                    <Features/>
                    <Faq/>
                    <Cta/>
                </article>
            </main>
            <Footer/>
        </>
    )
}

export default FullLp;