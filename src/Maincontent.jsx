import React from 'react'
import './Maincontent.css'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import VideoCameraFrontOutlinedIcon from '@mui/icons-material/VideoCameraFrontOutlined';
import Middlebar from './Middlebar';
import Bottombar from './Bottombar';

const Maincontent = () => {
  return (
    <div>
      <div className='main-content' >
        <div className="top">
          <div className="text">
            <div className="arrow">
           &lt;
            </div>
            <div className="text-text">Basic Mathematics 101</div>
          </div>
          <div className="top-icons">
            <div className="logo1"><PhoneOutlinedIcon/></div>
            <div style={{marginRight:'40px'}}>Call Teacher</div>
            <div className="logo2"><VideoCameraFrontOutlinedIcon/></div>
            <div>Support</div>
          </div>
        </div>
        <div className="middle"><Middlebar/></div>
        <div className="bottom"><Bottombar/></div>
      </div>
    </div>
  )
}

export default Maincontent
 