import { useState } from "react";
import ProyectsCards from "../Components/ProjectsCard"

const Projects = ({proyectos}) => {

return (
    <div>
        <ProyectsCards proyectos={proyectos}/>
    </div>
)
}
export default Projects