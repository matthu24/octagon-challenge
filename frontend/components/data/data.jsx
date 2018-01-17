import React from 'react';

class Data extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchAllUsers()
  }

  render(){
    return(
      <div className='table-container'>
        <table className= 'table'>
          <tbody >
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Zip</th>
            <th>State</th>
          </tr>
          {
            this.props.users.map((user,id) =>
              <tr key={id}>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>{user.zip}</td>
                <td>{user.state}</td>
              </tr>)
          }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Data;
