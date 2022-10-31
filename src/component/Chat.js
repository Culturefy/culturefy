

import * as React from 'react';
import { useEffect, useState } from 'react'
import { useRef } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import './Chat.css'
import chatuser from '../assets/user2.jpg'
import SendIcon from '@mui/icons-material/Send';

//Live Chat
import { v4 as uuid } from 'uuid'
import AgoraRTM from 'agora-rtm-sdk'

let APP_ID = '864f3aa345f64a85a264321d9844edaa'
let CHANNEL_NAME = 'dpp';

let client = AgoraRTM.createInstance(APP_ID)
let uid = uuid();


export default function SwipeableTemporaryDrawer() {


  const [text, setText] = useState('');
  const [channel, setChannel] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesRef = useRef(null)



  useEffect(() => {
    const connect = async () => {
      await client.login({ uid, token: null });
      const channel = await client.createChannel(
        CHANNEL_NAME
      );
      await channel.join();
      channel.on('ChannelMessage', (message, memberID) => {
        setMessages((currentMessages) => [
          ...currentMessages,
          {
            uid: memberID,
            text: message.text,
          },
        ]);
      });
      setChannel(channel);
      return channel;
    };
    const connection = connect();
    return () => {
      const logout = async () => {
        const channel = await connection;
        await channel.leave();
        await client.logout();
      }
      logout();
    }

  }, []);

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


  const submitHandler = (e) => {
    e.preventDefault();
    if (text === '') return;
    channel.sendMessage({
      text,
      type: 'text',
    });
    setMessages((currentMessages) => [
      ...currentMessages,
      {
        uid,
        text,
      },
    ]);
    setText('');
  };
  return (
    <div className='chat_main'>
      {['bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <div className='chat_box' onClick={toggleDrawer(anchor, true)}>
            <Button

            >Chat</Button>
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="b">
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}

              onOpen={toggleDrawer(anchor, true)}
              className="drawer"
            >
              {/* {list(anchor)} */}

              <div className="a" sx={{ position: "relative" }}>
                <Box

                  role="presentation"

                >
                  <div className="chatbox_body">
                    <div className="chatbox_header"
                      onClose={toggleDrawer(anchor, false)}
                      onClick={toggleDrawer(anchor, false)}
                      onKeyDown={toggleDrawer(anchor, false)}
                    >
                      <h3>Chat</h3>
                      <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className="chatbox_chat">
                      {/* {messages.map((message, index) => (
                        <div key={index} className='message'>
                          {message.uid === uid && (<div className='user_self'><span>You</span> :  {message.text}</div>
                          )}
                          {message.uid !== uid && (<div className='user_them'><span>User</span>: {message.text}</div>
                          )}
                        </div>
                      ))} */}


                      {
                        messages.map((message, index) => (
                          <div key={index} className='message'>
                            {message.uid === uid && (
                              <div className="send_message">
                                <div className="chatuser">
                                  <img src={chatuser} alt="" />
                                </div>
                                <div className="chat_send_message">
                                  <div className="chat_user_name">
                                    <h6>Bimby</h6>
                                    <p>just Now</p>
                                  </div>
                                  <div className="chat_user_message">
                                    <p><span>You :</span>{message.text}</p>
                                  </div>
                                  <div className="chat_replay">
                                    <p>Replay</p>
                                    <i class="fa-solid fa-thumbs-up"></i>
                                  </div>
                                </div>
                              </div>
                            )}
                            {message.uid !== uid && (
                            
                      <div className="receive_message">
                      <div className="chatuser">
                        <img src={chatuser} alt="" />
                      </div>
                      <div className="chat_send_message">
                        <div className="chat_user_name">
                          <h6>Bimby</h6>
                          <p>just Now</p>
                        </div>
                        <div className="chat_user_message">
                          <p><span>Other :</span> {message.text} </p>
                        </div>
                        <div className="chat_replay">
                          <p>Replay</p>
                          <i class="fa-solid fa-thumbs-up"></i>
                        </div>
                      </div>
                    </div>
                            )}
                          </div>
                        ))
                      }
                      
                    </div>

      

                  </div>
                  <div className="send_message_input">
                    <form action="" onSubmit={submitHandler}>
                      <input type="text"
                        
                        placeholder='Write Something..'
                        onChange={(e)=>setText(e.target.value)}
                        value={text}
                      />
                      <button type='submit'>Send</button>
                    </form>
                  </div>
                </Box>
              </div>

            </SwipeableDrawer>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

