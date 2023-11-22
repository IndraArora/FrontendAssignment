import React from "react";
import "./Bottombar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import VideoCameraBackOutlinedIcon from "@mui/icons-material/VideoCameraBackOutlined";
import MicNoneOutlinedIcon from "@mui/icons-material/MicNoneOutlined";
import ScreenShareOutlinedIcon from "@mui/icons-material/ScreenShareOutlined";
import DuoOutlinedIcon from "@mui/icons-material/DuoOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import VideoPlayer from "./Videoplayer";

const Bottombar = () => {
  return (
    <div>
      <div className="main-bottombar">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 bottombar-first">
              <div className="profile1"><span>Ridhi</span></div>
              <div className="profile2"><span>Mrs.Kaur</span></div>
              <div className="buttons">
                <div className="camera">
                  <div className="blogo">
                    <VideoCameraBackOutlinedIcon />
                  </div>
                  <div>Cam</div>
                </div>
                <div className="mic">
                  <div className="blogo">
                    <MicNoneOutlinedIcon />
                  </div>
                  <div>Mic</div>
                </div>
                <div className="share">
                  <div className="blogo">
                    <ScreenShareOutlinedIcon />
                  </div>
                  <div>Share</div>
                </div>
                <div className="chat">
                  <div className="blogo">
                    <DuoOutlinedIcon />
                  </div>
                  <div>Chat</div>
                </div>
                <div className="leave">
                  <div className="blogo">
                    <LogoutOutlinedIcon />
                  </div>
                  <div>Leave</div>
                </div>
              </div>
            </div>
            <div className="col-md-9" style={{marginTop:'20px'}}>
              <VideoPlayer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottombar;
