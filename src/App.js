import UserList from './Components/UsersLists/UserList'
const contacts = [
  {
    id: 1,
    img: '1.png',
    fullname: 'Jess Yates',
    age: '29',
  },
  {
    id: 2,
    img: '2.png',
    fullname: 'Jess Yates',
    age: '29',
  },
  {
    id: 3,
    img: '3.jpeg',
    fullname: 'Tom Hans',
    age: '29',
  },
  {
    id: 4,
    img: '4.jpeg',
    fullname: 'Jess Yates',
    age: '29',
  },
  {
    id: 5,
    img: '1.png',
    fullname: 'Jess Yates',
    age: '29',
  },
]
function App() {
  return (
    <div className="App">
      <UserList datas={contacts} />
    </div>
  )
}

export default App
