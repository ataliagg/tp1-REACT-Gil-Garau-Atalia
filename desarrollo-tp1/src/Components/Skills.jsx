import { useState } from "react"

const Skills = () => {
    const [habilidades, setHabilidades] = useState(["C#", "HTML", "CSS", "React", "MySQL"])

    return (

        <div>
            <h3>Skills</h3>

            {habilidades.map((habilidad) => (<p>{habilidad}</p>))}
            <br />
        </div>
    )
}

export default Skills 