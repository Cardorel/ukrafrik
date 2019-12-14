import React , {Component} from 'react';
import './Chat.css'
import ChatCompo from './ChatCompo';



export default class Chat extends Component {
    constructor(props){
        super(props);
        this.state = {
            Close: false,
            Chat: true
        }
    }

    OpenChat = () => {
        this.setState({
            Close:!this.state.Close
        })
        this.setState({
            Chat: true
        })
    }

    CloseChat = () =>{
        this.setState({
            Chat: false
        })
   }


    render() {
        return (
            <div className="component-chat">
                <div className="Chat-component">
               
                 <i 
                 className="fas fa-comments" 
                 onClick = {this.OpenChat} 
                 />
                 
                </div>
               
                   { this.state.Close && <ChatCompo
                        Close={this.state.Close}
                        Chat={this.state.Chat}
                        CloseChat={this.CloseChat}
                    />}
            </div>
        )
    }
}
