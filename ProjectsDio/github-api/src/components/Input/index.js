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
    const {url, setURL} = useContext(Context)

    function getUser(e) {
        const handleInput = e.target.value;
        setUser(handleInput);
    }


    function searchUser() {
        axios.get(url+user)
            .then(apiData => console.log(apiData))
            .catch(e => console.log('ERROR' + e))
    }

    return (
        <ContainerInput>
            <InputGitUser placeholder='digite aqui um usuario' onChange={getUser} value={user} />
            <ButtonSearch onClick={searchUser} >Procurar</ButtonSearch>
        </ContainerInput>
    )
}