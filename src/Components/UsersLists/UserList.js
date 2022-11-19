import Card from '../Card/Card'
import './UserList.css'
const UserList = (props) => {
  const datas = props.datas
  return (
    <Card className="lists">
      <h2 className="heading">Total contacts: {datas.length}</h2>
      {datas.map((data) => (
        <div className="control-list" key={data.id}>
          <img src="../images/1.png" alt="profile" />
          <div className="details">
            <p className="user-name">{data.fullname}</p>
            <p className="user-age">{data.age}</p>
          </div>
        </div>
      ))}
    </Card>
  )
}
export default UserList
