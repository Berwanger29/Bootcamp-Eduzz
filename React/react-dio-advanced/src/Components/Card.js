import { useContext, useState } from 'react'
import { ThemeContex } from '../Theme';

const Card = () => {
    const theme = useContext(ThemeContex);
    console.log('theme:values', theme);


    const [var1, setVar1] = useState(theme.background);
    const [var2, setVar2] = useState(theme.color);
    function change() {

        console.log(var1)
        console.log(var2)
        if (var1 == var2) {
            setVar1(var2)
            setVar2(var1);
        } else {
            setVar2(var1)
            setVar1(var2)
        }
    }
    return (
        <div>
            <button
                onClick={change}
                style={{
                    background: theme.background, color: theme.color
                }}
            >
                Trocar cor
            </button>
        </div>
    )
}

export default Card;