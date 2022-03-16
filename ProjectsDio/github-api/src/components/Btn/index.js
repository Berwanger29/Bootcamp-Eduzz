import { Button } from "./styled"

export const Btn = ({text, pressed, onClickFunc})=>{
    return(
        <Button pressed={pressed} onClick={onClickFunc}>
            {text}
        </Button>
    )
}