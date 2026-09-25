import { useState } from "react"
import "../css/Skills.css"

const Skills = () => {
    const [habilidades, setHabilidades] = useState(["C#", "HTML", "CSS", "React", "MySQL"])

    return (

        <div id="habilidades">
            <h4 style={{ color: '#ddd5b8' }}>Habilidades: </h4>
            <br/>
            <div className="habilidades">
                {habilidades.map((habilidad) => (<p className="lista" key={habilidad}> {habilidad} </p>))}
            </div>
            <br/>
        </div>
    )
}

export default Skills 