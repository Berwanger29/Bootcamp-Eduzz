import { useContext } from "react";
import { Context } from "../../utils/Context";

import {
    HeaderUser,
    ImageUser,
    Avatar,
    Description,
    NumbersContainer,
} from "./styled";

import { ContainerLabel } from "../ContainerLabel";
import { StatsNumber } from "../StatsNumber";

export const Header = () => {

    let { dataUser } = useContext(Context);

    if (dataUser == null) {
        return <></>
    }
    else

        return (
            <HeaderUser>
                <ImageUser>
                    <Avatar src={dataUser.avatar_url} />
                </ImageUser>

                <Description>
                    <ContainerLabel label={'Nome'} textData={dataUser.name} />
                    <ContainerLabel label={'Localização'} textData={dataUser.location} />
                    <ContainerLabel label={'Empresa'} textData={dataUser.company} />
                    <ContainerLabel label={'Blog'} textData={dataUser.blog} />
                    <ContainerLabel label={'Email'} textData={dataUser.email} />
                </Description>

                <NumbersContainer>
                    <StatsNumber label={'Seguidores'} numberData={dataUser.followers} />
                    <StatsNumber label={'Seguindo'} numberData={dataUser.followers} />
                    <StatsNumber label={'Gists'} numberData={dataUser.public_gists} />
                    <StatsNumber label={'Repos'} numberData={dataUser.public_repos} />
                </NumbersContainer>
            </HeaderUser>
        )
}
