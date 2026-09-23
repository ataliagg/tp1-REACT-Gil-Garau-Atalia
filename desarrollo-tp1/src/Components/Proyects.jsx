import { useState } from "react"

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

    const [proyecto, setProyectos] = useState ([proyectos])

    return (
        <div>
            {proyectos.map((proyecto) => (
                <div>
                <h4>{proyecto.nombre} </h4>
                <p>{proyecto.descripcion}</p>
                <a href={proyecto.link}> Ver proyecto </a>
                </div> ))}
        </div>        
    )
}

export default Proyects 