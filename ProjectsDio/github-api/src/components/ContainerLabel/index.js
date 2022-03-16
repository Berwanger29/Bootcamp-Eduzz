import {
    Container,
    Label,
    LabelContent
} from "./styled"


export const ContainerLabel = ({ label, textData }) => {

    if(!textData){
        return <></>
    }

    return (
        <Container>
            <Label>{label} :</Label>
            <LabelContent>{textData}</LabelContent>
        </Container>
    )
}