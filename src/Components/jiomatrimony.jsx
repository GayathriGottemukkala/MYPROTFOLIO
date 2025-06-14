import React from 'react';

const JiomatrimonyVideoPage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Jio Matrimony Demo Video</h1>
      <video width="80%" controls autoPlay>
         <source
          src="https://res.cloudinary.com/dnltkjnu8/video/upload/v1749884232/projectVID_1_yjlr7v.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default JiomatrimonyVideoPage;
