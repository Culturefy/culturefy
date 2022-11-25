import * as React from 'react';
import { useEffect, useState } from 'react'
import { useRef } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import './Chat.css'
import chatuser from '../assets/user2.jpg'
import SendIcon from '@mui/icons-material/Send';
import ScrollableFeed from 'react-scrollable-feed'
import List from '@mui/material/List';

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

  console.log(messages,"message")
  const [like, setLike] = useState(false)
  const [ time,settime] = useState('')
  const messagesRef = useRef(null)

  console.log(text,"date")


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
            time:message.time
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

  const getdata = () =>{
    var currentdate = new Date();
    var datetime =  currentdate.getHours() + ":"
      + currentdate.getMinutes() 

      settime(datetime)
  }

  const changehandler = (e) =>{
    setText(e.target.value)
    getdata()
  }

  const submitHandler = (e) => {
    console.log("click")
   
   
     

    
    e.preventDefault();
    if (text === '') return;
    channel.sendMessage({

      text,
      time,
      type: 'text',
    });
    setMessages((currentMessages) => [
      ...currentMessages,
      {
        uid,
        text,
        time,
      },
    ]);
    setText('');
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
    </Box>
  );
  return (
    <div className='chat_main'>
      {['bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <div className='chat_box' onClick={toggleDrawer(anchor, true)} onClose={toggleDrawer(anchor, false)}>
            <Button>Chat</Button>
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onOpen={toggleDrawer(anchor, true)}
            className="drawer"
          >
            {/* {list(anchor)} */}


            {/* <Box role="presentation"> */}
            <div className="chatbox_body">
              <div className="chatbox_header"
                onClose={toggleDrawer(anchor, false)}
                onClick={toggleDrawer(anchor, false)}
                onKeyDown={toggleDrawer(anchor, false)}
              >
                <div className='chatsec_active'>
                  <h3 >Chat</h3>
                  <div className="chat_user_active">

                  </div>
                </div>
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>

              <div className="chatbox_chat">
                <ScrollableFeed>


                  {
                    messages.map((message, index) => (
                   
                      <div key={index} className='message'>
                        {console.log(message.uid ,"zdD")}
                        {message.uid === uid && (
                          <div className="send_message">
                            <div className="chatuser">
                              <img src={chatuser} alt="" />
                            </div>
                            <div className="chat_send_message">
                              <div className="chat_user_name">
                                <h6>User</h6>
                                <p>{message.time}</p>
                              </div>
                              <div className="chat_user_message">
                                <p><span>You :</span>{message.text}</p>
                              </div>
                              <div className="chat_replay">
                                <p>Replay</p>
                                <i class="fa-solid fa-thumbs-up" color='red'></i>
                              </div>
                            </div>
                          </div>
                        )}
                        {message.uid !== uid && (

                          <div className="receive_message">
                            <div className='receive_message_ch'>
                              <div className="chatuser">
                                <img src={chatuser} alt="" />
                              </div>
                              <div className="chat_send_message">
                                <div className="chat_user_name">
                                  <h6>Others</h6>
                                  <p>{message.time}</p>
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
                          </div>
                        )}
                      </div>
                    ))
                  }
                </ScrollableFeed>
              </div>
            </div>
            <div className="send_message_input">
              <form action="" onSubmit={submitHandler}>
                <input type="text"
                  placeholder='Write Something..'
                  onChange={changehandler}
                  value={text}
                  className="chat_send_input"
                />
              </form>
            </div>
          </SwipeableDrawer>
        </React.Fragment>

      ))}
    </div>
  );
}

