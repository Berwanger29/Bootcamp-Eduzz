import { useContext } from 'react';
import { Context } from '../../utils/Context';
import {
    ContainerProjects
} from './styled'

export const Projects = () => {
    let { dataUser } = useContext(Context);

    if (dataUser == null) {
        return <></>
    }
    else
        return (
            <ContainerProjects>
                <p>Projects</p>
            </ContainerProjects>
        )
}