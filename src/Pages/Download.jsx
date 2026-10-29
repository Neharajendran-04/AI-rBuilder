import React from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { Link } from 'react-router-dom'

function Download() {
  return (
    <div className='container my-5'>
      <div className='d-flex justify-content-between align-items-center'>
        <h3>Downloaded Resume History</h3>
        <Link to={'/resume-details'} ><IoMdArrowRoundBack className = 'me-2'/>Back</Link>
      </div>
      <div className='row my-5'>
          <div className="col-lg-4">
            <div style={{height : '350px'}} className = "rounded shadow p-3">
            <h6>Reviewed at : Time stamp</h6>
            <div className='mt-4 text-center'>
             <Link to={'/resume/:id'}> <img className='w-50' src="https://template.canva.com/EAGIzZzlHCg/3/0/1131w-krkiJPv9338.jpg" alt="resume" /></Link>
            </div>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Download
