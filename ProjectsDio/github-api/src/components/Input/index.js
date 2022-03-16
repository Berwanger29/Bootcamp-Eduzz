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

    const { setDataUser, setUserRepos, setUserStar } = useContext(Context);

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
                    .catch(err => console.log(err))
                axios.get(`https://api.github.com/users/Berwanger29/starred{/owner}{/repo}`)
                    .then(res => {
                        setUserStar(res.data)
                    })
                    .catch(err => console.log(err))
            })
            .catch(e => alert(e))
            setUser('')
    }

    return (
        <ContainerInput>
            <InputGitUser placeholder='digite aqui um usuario' onChange={getUser} value={user} />
            <ButtonSearch onClick={searchUser} >Procurar</ButtonSearch>
        </ContainerInput>
    )
}