import React, {useState} from 'react';
import DownloadRecordings from "./DownloadRecordings.jsx";

const RecordingTable = ({ recordings }) => {


    const createDownloadToken = async (rcId) => {

        try {
            const url = 'http://localhost:3000/auth/recording/getDownloadToken';
            const headers = {
                'Content-Type': 'application/json',
                'API-KEY': 'APINzxz0Nvf46q',
                'HASH-SIGNATURE': 'lHYEuj1RVIJfCBAuqP3bWIREgXBdg3apDlzu',
            };

            const requestBody = {
                "record_id": rcId
            };

            const response = await fetch(url, {
                method: 'POST',
                headers,
                body: JSON.stringify(requestBody),
            });
            // const response = await axios.post(url, requestBody, { headers });

            if (!response.ok) {
                throw new Error('Request failed');
            }


            const data = await response.json();
            console.log(data);
            handleDownloadClick(data.token)
        } catch (error) {
            console.log(error.message);

        }
    };

    // const download = async ({ dToken }) => {
    //     try {
    //         const url = `https://dkyc-poc.digis.lk/download/recording/${dToken}`;
    //
    //         const headers = {
    //             'Content-Type': 'application/json',
    //             'API-KEY': 'APINzxz0Nvf46q',
    //             'HASH-SIGNATURE': 'lHYEuj1RVIJfCBAuqP3bWIREgXBdg3apDlzu',
    //         };
    //
    //         // const response = await fetch(url, );
    //         const response = await fetch(url, {
    //             method: 'GET',
    //             headers,
    //         });
    //
    //         if (response.ok) {
    //             const result = await response.json();
    //             console.log(result);
    //         } else {
    //             throw new Error('Failed to fetch data');
    //         }
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

        const handleDownloadClick = (dToken) => {

            fetch(`https://dkyc-poc.digis.lk/download/recording/${dToken}`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.blob();
                })
                .then((blob) => {
                    const url = window.URL.createObjectURL(blob);

                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'video.mp4';
                    document.body.appendChild(a);
                    a.click();

                    window.URL.revokeObjectURL(url);
                })
                .catch((error) => {
                    console.error('Error downloading video:', error);
                });
        };

    return (
        <div>
            <h2>Recording List</h2>
            <table>
                <thead>
                <tr>
                    <th>Record ID</th>
                    <th>Room ID</th>
                    <th>File Path</th>
                    <th>File Size</th>
                    <th>Creation Time</th>
                    <th>Room Creation Time</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {recordings.map((recording) => (
                    <tr key={recording.record_id}>
                        <td>{recording.record_id}</td>
                        <td>{recording.room_id}</td>
                        <td>{recording.file_path}</td>
                        <td>{recording.file_size}</td>
                        <td>{recording.creation_time}</td>
                        <td>{recording.room_creation_time}</td>
                        <td>{<button onClick={() =>createDownloadToken(recording.record_id)}>Download</button>}</td>
                    </tr>
                ))}
                </tbody>
            </table>

        </div>
    );
};

export default RecordingTable;