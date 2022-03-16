import {
    NumbersSubContainer,
    NumbersLabel,
    Numbers
} from './styled'

export const StatsNumber = ({label, numberData}) => {
    return (
        <NumbersSubContainer>
            <NumbersLabel>{label}</NumbersLabel>
            <Numbers>{numberData}</Numbers>
        </NumbersSubContainer>
    )
}