import React from 'react'
//import shortid from 'shortid'


export default class ChatMessage extends React.Component {
  
    render() {
        const Chat_message_txt = "Chat-message-text";
        //const Chat_message_text_1 = "Chat-message-text-1";
        const {Val} = this.props;
        return (
            <div className="Chat-message">
                {Val.map((data) => {
                    return(
                      <div key={data.id} className="Message-chat" >
                          <p className="Chat-message-user">{data.User}</p>
                          <p className={Chat_message_txt}>{data.text}</p>
                      </div>
                    )
                })}
            </div>
        )
    }
}


