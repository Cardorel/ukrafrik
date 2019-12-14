import React  from 'react'

export default function Modal(props) {
  
  

  return (
    <div  className="Modal">
         <span className="close-Modal" onClick={props.closeModal}>X</span>
      <div className="Modal-contenaire">
           <div className="Modal-content">
                   <i className="far fa-check-circle"/>
                   Thank you !
           </div>
      </div>
    </div>
  )
}
