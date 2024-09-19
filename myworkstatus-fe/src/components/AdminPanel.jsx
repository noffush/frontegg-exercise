import { useState } from 'react'


function AdminPanel({ user }) {

  return (
    <div>
      <p>Hello { user.name }{ user.status ? `, You are ${user.status}` : ''}</p>
      <Status></Status>
      <hr></hr>
      <EmployeesList></EmployeesList>

    </div>
  )
}

export default AdminPanel;
