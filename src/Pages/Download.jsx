import React, { useEffect, useState } from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { getAllDownloadResumeApi } from '../services/apiService'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend);

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  maxHeight: "80vh",
  overflow: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Download() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
   const [label,setLabel] = useState([])
  const [value, setValue] = useState([])
  const colorPallete = ['#50bed9','#4c270c','#b1734c', '#b6b098','#7f4112','#8dbdc9']
  const backgroundColor = label.map((value,index) => colorPallete[index%colorPallete.length])
 
  
  const [downloadList, setDownloadList] = useState([])
  console.log(downloadList);
  const data = {
    labels  : label,
    datasets : [
      {
        label : 'Download Count',
        data :value,
        backgroundColor
      }
    ]
  }

  useEffect(() => {
    getAllDownloads()
   
  }, [])

  const getAllDownloads = async () => {
    const result = await getAllDownloadResumeApi()
    setDownloadList(result.data)
     const output = {}
     result.data.forEach(item => {
      const currentJob = item.jobRole
      if(currentJob in output){
        output[currentJob] += 1
      }else{
        output[currentJob] = 1
      }
     })
     setLabel(Object.keys(output))
     setValue(Object.values(output))
  }

  return (
    <div className='container my-5'>
      <div className='d-flex justify-content-between align-items-center'>
        <h3>Downloaded Resume History</h3>
        <button onClick={handleOpen} className='btn text-light' style={{backgroundColor : '#6B5546'}} >View in chart</button>
      </div>
      <p className='mt-3 fs-3 fw-semibold text-primary'>Total downloaded resume from our site is <span className='fw-bolder text-danger'> {downloadList.length}</span></p>
      <div className='row my-5'>
          {
            downloadList?.length > 0 ? 
             downloadList?.map(resume => (
              <div className="col-lg-4">
            <div className = "rounded shadow p-3">
            <h6>Reviewed at : {resume.timestamp}</h6>
            <div className='mt-4 text-center'>
             <Link to={`/resume/${resume?.resumeId}`}> <img className='w-50' src={resume?.resumeImg} alt="resume" style = {{height : "300px"}} /></Link>
            </div>
          </div>
          </div>
             ))
            :
            <div> no resumes downloaded</div>
          }
      </div>
      {/* Modal */}
      <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
   
    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{backgroundColor : '#6B5546', width : '100%', padding :  '10px', color : 'white'}}>
      CV Count by job role
    </Typography>
     <div className='text-center'><Pie data ={data}/></div>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    This chart provides an overview of the number of cv downloads associated with different job on the website. It helps visualize the demand and engagement for CV's across various career categories, making it easier to identify which job role attracts the highest  number  of downloads. By comparing downloads counts across roles , the chart can provide useful insights into user preferences and the popularity of different career oppurtunities on the  platform.
    </Typography>
  </Box>
</Modal>
    </div>
  )
}

export default Download
