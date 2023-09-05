
import './App.css'
import axios from "axios";
import {useState} from "react";
import JoinToMeeting from "./component/JoinMeeting.jsx";
import RecordingTable from "./component/RecordingTable.jsx";
import CopyButton from "./component/CopyButton.jsx";

function App() {

    const [roomCreateResponse, setRoomCreateResponse] = useState('');
    const [roomAdminJoinReqResponse, setRoomAdminJoinReqResponse] = useState('');
    const [roomAdminJoinToken, setRoomAdminJoinToken] = useState('')
    const [roomUserJoinReqResponse, setRoomUserJoinReqResponse] = useState('');
    const [roomUserJoinToken, setRoomUserJoinToken] = useState('')
    const [showIframe, setShowIframe] = useState(false);
    const [fetchRecordingResponse, setFetchRecordingResponse] = useState('');

    const createRoom = async () => {
        try {
            const url = 'http://localhost:3000/auth/room/create';
            const headers = {
                'Content-Type': 'application/json',
                'API-KEY': 'APINzxz0Nvf46q',
                'HASH-SIGNATURE': 'lHYEuj1RVIJfCBAuqP3bWIREgXBdg3apDlzu',
            };

            const requestBody = {
                "room_id": "room01",
                "metadata": {
                    "room_title": "DKYC POC room",
                    "welcome_message": "Welcome to DKYC POC room",
                    "room_features": {
                        "allow_webcams": true,
                        "mute_on_start": false,
                        "allow_screen_share": true,
                        "allow_rtmp": true,
                        "admin_only_webcams": false,
                        "allow_view_other_webcams": true,
                        "allow_view_other_users_list": false,
                        "allow_polls": true,
                        "room_duration": 0,
                        "recording_features": {
                            "is_allow": true,
                            "is_allow_cloud": true,
                            "is_allow_local": true,
                            "enable_auto_cloud_recording": false
                        },
                        "chat_features": {
                            "allow_chat": true,
                            "allow_file_upload": true
                        },
                        "shared_note_pad_features": {
                            "allowed_shared_note_pad": true
                        },
                        "whiteboard_features": {
                            "allowed_whiteboard": true
                        },
                        "external_media_player_features": {
                            "allowed_external_media_player": true
                        },
                        "waiting_room_features": {
                            "is_active": true
                        },
                        "breakout_room_features": {
                            "is_allow": true,
                            "allowed_number_rooms": 2
                        },
                        "display_external_link_features": {
                            "is_allow": true
                        },
                        "ingress_features": {
                            "is_allow": true
                        },
                        "speech_to_text_translation_features": {
                            "is_allow": true,
                            "is_allow_translation": true
                        },
                        "end_to_end_encryption_features": {
                            "is_enabled": false
                        }
                    },
                    "default_lock_settings": {
                        "lock_microphone": false,
                        "lock_webcam": false,
                        "lock_screen_sharing": true,
                        "lock_whiteboard": true,
                        "lock_shared_notepad": true,
                        "lock_chat": false,
                        "lock_chat_send_message": false,
                        "lock_chat_file_share": false,
                        "lock_private_chat": false
                    }
                }
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
            setRoomCreateResponse(data);
            console.log(data);
        } catch (error) {
            console.log(error.message);

        }
    };

    const endMeeting = async () => {
        try {
            const url = 'http://localhost:3000/auth/room/endRoom';
            const headers = {
                'Content-Type': 'application/json',
                'API-KEY': 'APINzxz0Nvf46q',
                'HASH-SIGNATURE': 'lHYEuj1RVIJfCBAuqP3bWIREgXBdg3apDlzu',
            };

            const requestBody = {
                "room_id": "room01",
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
            setRoomCreateResponse(data);
            console.log(data);
        } catch (error) {
            console.log(error.message);

        }
    };
const createAdminRoomJoinRequest = async () => {
        try {
            const url = 'http://localhost:3000/auth/room/getJoinToken';
            const headers = {
                'Content-Type': 'application/json',
                'API-KEY': 'APINzxz0Nvf46q',
                'HASH-SIGNATURE': 'lHYEuj1RVIJfCBAuqP3bWIREgXBdg3apDlzu',
            };

            const requestBody = {
                "room_id": "room01",
                "user_info": {
                    "name": "DKYC Admin",
                    "user_id": "00001",
                    "is_admin": true,
                    "is_hidden": false,
                    "user_metadata": {
                        "profile_pic": "https://www.pexels.com/photo/man-smiling-behind-wall-220453/",
                        "lock_settings": {
                            "lock_microphone": false,
                            "lock_webcam": false,
                            "lock_screen_sharing": true,
                            "lock_chat": false,
                            "lock_chat_send_message": false,
                            "lock_chat_file_share": false
                        }
                    }
                }
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
            setRoomAdminJoinReqResponse(data);
            setRoomAdminJoinToken(data.token)
            console.log(data);
            console.log(data.token)
        } catch (error) {
            console.log(error.message);
        }
    };
const createUserRoomJoinRequest = async () => {
        try {
            const url = 'http://localhost:3000/auth/room/getJoinToken';
            const headers = {
                'Content-Type': 'application/json',
                'API-KEY': 'APINzxz0Nvf46q',
                'HASH-SIGNATURE': 'lHYEuj1RVIJfCBAuqP3bWIREgXBdg3apDlzu',
            };

            const requestBody = {
                "room_id": "room01",
                "user_info": {
                    "name": "Test user",
                    "user_id": "053",
                    "is_admin": false,
                    "is_hidden": false,
                    "user_metadata": {
                        "profile_pic": "https://www.pexels.com/photo/man-smiling-behind-wall-220453/",
                        "lock_settings": {
                            "lock_microphone": false,
                            "lock_webcam": false,
                            "lock_screen_sharing": true,
                            "lock_chat": false,
                            "lock_chat_send_message": false,
                            "lock_chat_file_share": false
                        }
                    }
                }
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
            setRoomUserJoinReqResponse(data);
            setRoomUserJoinToken(data.token)
            console.log(data);
            console.log(data.token)
        } catch (error) {
            console.log(error.message);
        }
    };


    const fetchRecoring = async () => {
        try {
            const url = 'http://localhost:3000/auth/recording/fetch';
            const headers = {
                'Content-Type': 'application/json',
                'API-KEY': 'APINzxz0Nvf46q',
                'HASH-SIGNATURE': 'lHYEuj1RVIJfCBAuqP3bWIREgXBdg3apDlzu',
            };

            const requestBody = {
                "room_ids": ["room01"],
                "from": 0,
                "limit": 20,
                "order_by": "DESC"
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
            setFetchRecordingResponse(data);
            console.log(data);
        } catch (error) {
            console.log(error.message);

        }
    };

    const handleButtonClick = () => {
        setShowIframe(true);
    };



  return (
    <>

      <h1>Welcome to DKYC POC </h1>
      <div className="card">
        <button onClick={createRoom}>
          Create a room
        </button>
          <button onClick={endMeeting}>
          End Meeting
        </button>
          <button onClick={fetchRecoring}>
              Fetch Recordings
          </button>
          {roomCreateResponse.status === true  ?
              <div style={{display: "flex", flexDirection: "column", }}>
                  <h4> Room Created</h4>
                  <button onClick={createAdminRoomJoinRequest} style={{marginBottom: 20}}>
                      Create Admin Room Join Request
                  </button>
                  <button onClick={createUserRoomJoinRequest} style={{marginBottom: 20}}>
                      Create User Room Join Request
                  </button>
                  {
                      roomAdminJoinReqResponse.status === true ?
                          <>
                              <h4>{roomAdminJoinReqResponse.msg}</h4>
                              <button onClick={handleButtonClick}>
                                Admin  Join to Meeting
                              </button>
                              {
                                  showIframe && <JoinToMeeting roomJoinToken={roomAdminJoinToken}/>
                              }
                          </>

                          :
                          <h4>{roomAdminJoinReqResponse.msg}</h4>
                  }
              </div>
              :  <h4>{roomCreateResponse.msg}</h4>}
          <div>
              {
                  roomUserJoinReqResponse.status === true ?
                      <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                          <CopyButton  textToCopy={`https://dkyc-poc.digis.lk/?access_token=${roomUserJoinToken}`}/>
                      </div>
                      :
                      <h4>{roomUserJoinReqResponse.msg}</h4>
              }
          </div>
          <div>
              {
                  fetchRecordingResponse.status === true ?
                      <>
                          <div>
                              <h1>React Table Example</h1>
                              <RecordingTable recordings={fetchRecordingResponse.result.recordings_list} />
                          </div>
                      </>

                      :
                      <h4>{fetchRecordingResponse.msg}</h4>
              }
          </div>
      </div>
    </>
  )
}

export default App
