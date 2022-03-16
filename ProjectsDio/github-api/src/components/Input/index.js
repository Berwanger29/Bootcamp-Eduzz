import { useState, useContext } from 'react';
import { Context } from '../../utils/Context';
import axios from 'axios';

import {
    ContainerInput,
    InputGitUser,
    ButtonSearch
} from './styled'




export const Input = () => {

    const [user, setUser] = useState('')

    const { setDataUser, setUserRepos } = useContext(Context);

    function getUser(e) {
        const handleInput = e.target.value;
        setUser(handleInput);
    }

    function searchUser() {
        axios.get(`https://api.github.com/users/${user}`)
            .then(res => {
                setDataUser(res.data)

                axios.get(`https://api.github.com/users/${user}/repos`)
                    .then(res => {
                        setUserRepos(res.data)
                    })
                    .catch(err => alert(err))
            })
            .catch(e => alert(e))
    }

    return (
        <ContainerInput>
            <InputGitUser placeholder='digite aqui um usuario' onChange={getUser} value={user} />
            <ButtonSearch onClick={searchUser} >Procurar</ButtonSearch>
        </ContainerInput>
    )
}