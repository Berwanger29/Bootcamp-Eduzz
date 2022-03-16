import { useContext, useState } from 'react';

import { Btn } from '../Btn';
import { Context } from '../../utils/Context';
import { Project } from '../Project'


import {
    ContainerProjects,
    ListProjects,
    WrapperBtn
} from './styled'



export const Projects = () => {
    let { dataUser, userRepos } = useContext(Context);

    const [isRepoPressed, setIsRepoPressed] = useState(0);
    const [isStarredPressed, setIsStarredPressed] = useState(0);

    const [search, setSearch] = useState(0);

    function getRepos(e) {
        e.preventDefault();

        setIsRepoPressed(1)
        setIsStarredPressed(0)
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
                <WrapperBtn>
                    <Btn text={'Repositories'} onClickFunc={getRepos} pressed={isRepoPressed} />
                    <Btn text={'Starred'} onClickFunc={getStarred} pressed={isStarredPressed} />
                </WrapperBtn>

                {
                    isRepoPressed ?
                        (
                            <ListProjects>
                                {userRepos.map(item => <Project id={item.id} nome={item.name} />)}
                            </ListProjects>
                        )
                        :
                        (
                            <p>starred</p>
                        )
                }


            </ContainerProjects>
        )
}