import React from 'react'
import './MiddleBar.css'
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import PresentToAllOutlinedIcon from '@mui/icons-material/PresentToAllOutlined';
import SourceOutlinedIcon from '@mui/icons-material/SourceOutlined';
import MovieFilterOutlinedIcon from '@mui/icons-material/MovieFilterOutlined';
const Middlebar = () => {
  return (
    <div>
      
      <div className="middlebar-maincontent">
        <div className="mblogo1" style={{display:'flex', gap:'5px' , opacity:'0.5' , fontWeight:'600'}}>
            <div className="l1"><DevicesOutlinedIcon/></div>
            <div className="l1text">Classroom</div>
        </div>
        <div className="mblogo2" style={{display:'flex', gap:'5px' , opacity:'0.6' , fontWeight:'600'}}>
            <div className="l2">
                <AssignmentOutlinedIcon/>
            </div>
            <div className="l2text">
                Whiteboard
            </div>
        </div>
        <div className="mblogo3" style={{display:'flex', gap:'5px', opacity:'0.6' , fontWeight:'600'}}>
            <div className="l3"><OndemandVideoOutlinedIcon/></div>
            <div className="l3text">Videos</div>
        </div>
        <div className="mblogo4" style={{display:'flex', gap:'5px', opacity:'0.6' , fontWeight:'600'}}>
            <div className="l4"><PresentToAllOutlinedIcon/></div>
            <div className="l4text">Slide Show</div>
        </div>
        <div className="mblogo5" style={{display:'flex', gap:'5px', opacity:'0.6' , fontWeight:'600'}}>
            <div className="l5"><SourceOutlinedIcon/></div>
            <div className="l5text">Documents</div>
        </div>
        <div className="mblogo6" style={{display:'flex' , gap:'5px', opacity:'0.6' , fontWeight:'600'}}>
            <div className="l6"><MovieFilterOutlinedIcon/></div>
            <div className="l6text">Doc.Cam</div>
        </div>
      </div>
    </div>
  )
}

export default Middlebar
