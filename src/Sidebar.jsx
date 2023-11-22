import React from 'react'
import './Sidebar.css'
import SortOutlinedIcon from '@mui/icons-material/SortOutlined';
import NotificationAddOutlinedIcon from '@mui/icons-material/NotificationAddOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
const Sidebar = () => {
  return (
    <div>
      <div className="main-sidebar">
        <div className="icons">
            <div className="cname"></div>
            <div className="stats logos"><SortOutlinedIcon/></div>
            <div className="notification logos"><NotificationAddOutlinedIcon/><div className="notification-dot"></div></div>
            <div className="compass logos"><ExploreOutlinedIcon/></div>
            <div className="board logos"><PendingActionsOutlinedIcon/></div>
            <div className="eye logos"><RemoveRedEyeOutlinedIcon/></div>
            <div className="people logos"><PeopleOutlineOutlinedIcon/></div>
            <div className="graph logos"><EqualizerOutlinedIcon/></div>
        </div>
        <div className="profile">
            
        </div>
      </div>
    </div>
  )
}

export default Sidebar
