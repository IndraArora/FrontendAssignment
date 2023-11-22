import React from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = () => {
  // Provide the full YouTube video URL
  const videoUrl = 'https://youtu.be/JbhBdOfMEPs?si=YbemhzkCRtlC2hQI';

  // Extract the video ID using the URL object
  const url = new URL(videoUrl);
  const videoId = url.pathname.substring(1); // Remove the leading '/'

  const opts = {
    height: '590',
    width: '910',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default VideoPlayer;
