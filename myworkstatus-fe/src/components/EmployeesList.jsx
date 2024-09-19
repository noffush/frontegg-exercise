import { useState } from 'react'


function EmployeesList({ user }) {

  return (
    <div>
      <p>List of employees</p>
      <div>
        <input></input> { /* name filter */}
        <select></select> { /* status filter */}
      </div>
      <table></table>
    </div>
  )
}

export default EmployeesList;
