import { useContext, useState } from 'react';

import { Btn } from '../Btn';
import { Context } from '../../utils/Context';
import { Project } from '../Project'


import {
    ContainerProjects,
    ListProjects
} from './styled'



export const Projects = () => {
    let { dataUser } = useContext(Context);

    const [isRepoPressed, setIsRepoPressed] = useState(0);
    const [isStarredPressed, setIsStarredPressed] = useState(0);

    const [projectRepo, setProjectRepo] = useState(null);
    const [projectStar, setProjectStar] = useState(null);

    const [search, setSearch] = useState(0);

    function getRepos(e) {
        e.preventDefault();

        setIsRepoPressed(1)
        setIsStarredPressed(0)

        setProjectRepo(dataUser.repos_url)
    }

    function getStarred(e) {
        e.preventDefault();

        setIsStarredPressed(1)
        setIsRepoPressed(0)


    }

    if (!dataUser) {
        return <></>
    }
    else
        return (
            <ContainerProjects>
                <Btn text={'Repositories'} onClickFunc={getRepos} pressed={isRepoPressed} />
                <Btn text={'Starred'} onClickFunc={getStarred} pressed={isStarredPressed} />

                {/* <ListProjects>
                    {projectRepo.map(item=> <Project id={item.id} nome={item.name}/>)}
                </ListProjects> */}
            </ContainerProjects>
        )
}