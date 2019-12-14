import React, { Component } from 'react'
import ChatMessage from './ChatMessage'
import shortid from 'shortid'
import InfiniteScroll from 'react-infinite-scroller'


const Data = [
    {
        id: shortid.generate(),
        User: 'Cardorel',
        text: 'How we can help you?'
    },
    {
        id: shortid.generate(),
        User: 'Cardorel',
        text: 'Hello, You are welcome to UkrafiK Hotel!',
    }
]

export default class ChatCompo extends Component {
    constructor(props){
        super(props);
        this.state={
            username: "", 
            message: Data,
        }
    }

    

    Username =  (e) => {
         this.setState({
             username: e.target.value
         })
         
    }

     handleSubmit = (e) =>{
        e.preventDefault();
        
        const NewMessage = {
            id: shortid.generate(),
            User: "You",
            text: this.state.username
        }
        

        const UpdateMessage = [NewMessage , ...this.state.message]
        console.log(UpdateMessage)

        if(this.state.username === "" || this.state.username === " " || this.state.username === "  " || this.state.username === "   " )
             return;
        else 
        {
            this.setState({
                message: UpdateMessage,
                username: "",
    
            })
        }

    }

   

    loadFunc = () => {
        return;
    }

    CloseChat = () =>{
         this.props.CloseChat()
    }


  render() {
      const Chat_Close = this.props.Chat ? "Chat-position" : "Chat-opacity"
    return (
        <form onSubmit={this.handleSubmit} >
            <div className={Chat_Close}>
                <div className="Chat-Container">
                    <div className="Chat-row">
                        <div className="Chat-support" >
                            <span><i className="far fa-comment-alt"/></span>
                            <h4>Live chat </h4>
                            <span className="Close-chat" onClick={this.CloseChat}>X</span>
                        </div>
                        <div style={{ height: "200px" , overflowY: "auto" , overflowX: "hidden"}} ref={(ref) => this.scrollParentRef = ref}>
                            <InfiniteScroll
                                pageStart={1}
                                loadMore={this.loadFunc}
                                hasMore={true || false}
                               // loader={}
                                useWindow={false}
                                getScrollParent={() => this.scrollParentRef}
                            >
                                    <ChatMessage Val={this.state.message} />
                            </InfiniteScroll>
                        </div>
                       <div className="Input-class">
                          <input 
                          style={{marginTop: "40px"}} 
                          type="text" value={this.state.username} 
                          onChange={this.Username} 
                          name="text" 
                          />
                       </div>
                    </div>
                </div>
            </div>
        </form>
    )
  }
}
