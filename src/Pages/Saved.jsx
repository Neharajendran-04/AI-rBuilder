import React from 'react'
import { MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'

function Saved() {
  return (
    <div className='container d-flex flex-column align-items-center justify-content-center my-5'>
      <h1>All Saved Resume</h1>  
        <table className="table table-hover table-stripped my-5">
          <thead>
            <tr className='table-dark'>
              <th>#</th>
              <th>Resume</th>
              <th>Job role</th>
              <th>...</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td><Link to={'/resume/:id'}>Name</Link></td>
              <td>job</td>
              <td>
                <button className='btn fs-5 text-secondary'><MdDelete /></button>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}

export default Saved
