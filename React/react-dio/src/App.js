import Item from './components/Item'
import Card from './components/Card';

const App = () => {
  return (
    <>
      <h1>Lista</h1>
      <ul>
        <li>
          <Item texto='Item 1' />
        </li>
        <li>
          <Item texto='Item 2' />
        </li>
        <li>
          <Item texto='Item 3' />
        </li>
      </ul>
      <Card />
    </>
  )
}

export default App;