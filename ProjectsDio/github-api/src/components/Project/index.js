import { ProjectItem } from "./styled"

export const Project = ({id, nome})=>{
    return(
        <ProjectItem>
            <p>{id}</p>
            <p>{nome}</p>
        </ProjectItem>
    )
}