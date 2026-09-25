import Imagen from "../assets/foto.jpg";
import "../css/Hero.css";

const Hero = () => {
    return (
        <div id="inicio" className="hero">
            <br/>
            <img src={Imagen} alt="Foto de Precentacion" className="img"/>
            <div className="texto">
            <br/>
            <br/>
            <h1>Atalia Trinidad, Gil Garau.</h1>   
            <h4> Estudiante de programacion en la universidad UTN </h4>
            <h4> Legajo: 63396</h4>
            <h4> Edad: 19 años </h4>
            <br/>
            </div>
        </div>
    )
}
export default Hero