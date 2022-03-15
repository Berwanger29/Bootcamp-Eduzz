import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import {
    ContainerInput,
    InputGitUser,
    ButtonSearch
} from './styled'

let baseURL = 'https://api.github.com/users/';


export const Input = () => {

    const [user, setUser] = useState(null)
    const [data, setData] = useState(null)

    function getUser(e){
        const handleInput = e.target.value;
        setUser(handleInput);
    }


    function searchUser(){
        axios.get(`${baseURL}${user}`)
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