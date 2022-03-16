import { useState, useContext, useEffect } from 'react';
import { Context } from '../../utils/Context';
import axios from 'axios';

import {
    ContainerInput,
    InputGitUser,
    ButtonSearch
} from './styled'




export const Input = () => {

    const [user, setUser] = useState('')
    const { dataUser, setDataUser } = useContext(Context)

    function getUser(e) {
        const handleInput = e.target.value;
        setUser(handleInput);
    }

    function searchUser() {
        axios.get(`https://api.github.com/users/${user}`)
            .then(res => {
                setDataUser(res.data)
                setUser('')
                console.log(dataUser)
            })
            .catch(e => alert(dataUser))
    }

    return (
        <ContainerInput>
            <InputGitUser placeholder='digite aqui um usuario' onChange={getUser} value={user} />
            <ButtonSearch onClick={searchUser} >Procurar</ButtonSearch>
        </ContainerInput>
    )
}