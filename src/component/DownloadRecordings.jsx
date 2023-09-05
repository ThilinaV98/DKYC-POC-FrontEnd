import React from 'react';

const DownloadRecordings = ({ dToken }) => {
    return (
        <div>
            <iframe
                title="Recording Download"
                width=""
                height=""
                src={`https://dkyc-poc.digis.lk/download/recording/${dToken}`}
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default DownloadRecordings;
