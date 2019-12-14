import React , {Component}  from 'react';
import './App.css';
import Header from './Header';
import Footer from './Component/Header/Footer';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading : true
    }
  }
  componentDidMount(){
        setTimeout(() => {
          this.setState({isLoading: false})
        }, 3000);
  }
  
  render(){
    if(this.state.isLoading)
    {
      return <div className="loader"></div>
    }
  return (
   <div className="Ukrafrik-hotel-container">
     <div className="Ukr-show-content">
        <span role="img" aria-label="image">😢 sorry , we are working for the responsive site and you can use  just a big screen :)</span>
     </div>
       <div className="Ukrafrik-hotel-content">
        <Header/>
        <Footer/>
       </div>
   </div>
  );
  }
}

export default App;
