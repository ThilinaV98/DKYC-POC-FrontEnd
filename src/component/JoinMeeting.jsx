import React from 'react';

const JoinToMeeting = ({ roomJoinToken }) => {
    return (
        <div>
            <iframe
                title="DKYC Meeting"
                width="500"
                height="500"
                src={`https://dkyc-poc.digis.lk/?access_token=${roomJoinToken}`}
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default JoinToMeeting;
