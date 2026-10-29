import React, { useEffect, useRef, useState } from 'react'
import { FaFileDownload, FaBackward } from 'react-icons/fa'
import Edit from '../Components/Edit'
import { Link, useParams } from 'react-router-dom'
import { IoDocument } from 'react-icons/io5'
import { IoMdRefresh } from 'react-icons/io'
import Preview from '../Components/Preview'
import { viewResumeApi } from '../services/apiService'
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

function View() {
  const previewRef = useRef()
  const [resume, setResume] = useState()
  const {id} = useParams()

  useEffect(() => {
    getResumeDetails()
  }, [])
  const getResumeDetails = async () => {
    const response = await viewResumeApi(id)
    if(response.status === 200){
      setResume(response.data);
    }
  }
   const generatePDF = async() => {
        const previewTag = previewRef.current
        const canvas = await html2canvas(previewTag)
        const pdf = new jsPDF()
        const imageWidth = pdf.internal.pageSize.getWidth()
        const imageHeight = pdf.internal.pageSize.getHeight()
        pdf.addImage(canvas, "PNG", 0, 0, imageWidth, imageHeight)
        pdf.save("resume.pdf")
      }
  return (
    <div className='container my-5'>
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          {/* Navigation icons */}
         <div className='d-flex justify-content-center align-items-center'>
            {/* Download */}
            <button onClick={generatePDF} style={{color : "#6B5546" }} className='btn mx-2'><FaFileDownload />Download CV</button>
            {/* Edit */}
            <Edit resumeDetails = {resume} setResumeDetails ={setResume} />
            {/* All resume */}
            {/* <Link style={{color : "#6B5546" }}  to={'/all-resumes'} className='btn mx-2' ><IoDocument /> All Resumes</Link> */}
            {/* Download history */}
            {/* <Link style={{color : "#6B5546" }} to={'/downloads'}  className='btn mx-2'><IoMdRefresh /> Download History</Link> */}
            {/* Back */}
             <Link style={{color : "#6B5546" }} to={'/resume-details'}  className='btn mx-2'><FaBackward />Previous</Link>
         </div>
        </div>
        <div ref={previewRef} className='p-5'>
          <Preview resumeDetails={resume}/>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  )
}

export default View
