import { useContext, useState } from 'react';
import { Context } from '../../utils/Context';
import { Btn } from '../Btn';
import {
    ContainerProjects
} from './styled'



export const Projects = () => {
    let { dataUser } = useContext(Context);

    const [isRepoPressed, setIsRepoPressed] = useState(1);
    const [isStarredPressed, setIsStarredPressed] = useState(0);

    function getRepos(e) {
        e.preventDefault();
        setIsRepoPressed(1)
        setIsStarredPressed(0)

        console.log('repo')
    }

    function getStarred(e) {
        e.preventDefault();
        setIsStarredPressed(1)
        setIsRepoPressed(0)

        console.log('starred')
    }

    if (dataUser == null) {
        return <></>
    }
    else
        return (
            <ContainerProjects>
                <Btn text={'Repositories'} onClickFunc={getRepos}  pressed={isRepoPressed} />
                <Btn text={'Starred'} onClickFunc={getStarred} pressed={isStarredPressed}/>
            </ContainerProjects>
        )
}