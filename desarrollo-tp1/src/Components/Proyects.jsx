import { useState } from "react"
import "../css/Proyects.css"

const Proyects = () => {

    let proyectos = [{
        nombre: 'MJ Cleaning Solutions',
        descripcion: 'Pagina web de una empresa de limpieza de EEUU',
        link: 'https://mjcleaningsolution.com/'
    },
    {
        nombre: 'Redes de Seguridad NOA',
        descripcion: 'Pagina web de una empresa que instala redes de seguridad',
        link: 'https://redesdeseguridadnoa.com/'
    }
    ]

    const [proyecto, setProyectos] = useState([proyectos])

    const [verProyec, setVerProyect] = useState(false)
    const handleClick = () => {
        setVerProyect(!verProyec)
    }

    return (
        <div>
            <br />
            <button type="button" className="button" onClick={handleClick}>
                {verProyec ? "Cerrar" : "Ver proyectos"}
            </button>

            <div className="cuadro">

                {verProyec === true ? (proyectos.map((proyecto) => (
                    <div key={proyecto.nombre} className="proyectos">
                        <h2 style={{ color: '#d0c18b' }}> {proyecto.nombre} </h2>
                        <p style={{color: "black"}}> {proyecto.descripcion} </p>
                        <a style={{color: "#d0c18b"}}href={proyecto.link}> Ver proyecto </a>
                    </div>))
                ) : null}
            </div>

            <br />

        </div>
    )

}
export default Proyects;