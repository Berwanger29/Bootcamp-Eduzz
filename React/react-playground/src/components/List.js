

const List = ({ todoList }) => {
    return (
        <ul>
            {todoList.map(item => (<li>{item}</li>))}
        </ul>
    )
}

export default List;