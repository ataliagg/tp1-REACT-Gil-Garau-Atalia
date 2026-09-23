import Header from "../Components/Header";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Proyects from "../Components/Proyects";
import Footer from "../Components/Footer";

const Home = ({habilidades, proyectos}) => {
    return (
        <div>
            <Header />
            <Hero />
            <About />
            <Skills habilidades={habilidades}/>
            <Proyects proyectos={proyectos}/>
            <Footer />
        </div>
    )
}

export default Home