import React, { useState , useEffect } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import Reserved from './Reserved';
import ModalPict from './ModalPict'
import ModalPict2 from './ModalPict2'
import ModalPict3 from './ModalPict3'
import ImageContent from './ImageContent'


export default function PremiumContent() {
  
    const [state , setstate] = useState([])
    const [reserved, setreserved] = useState(false)
    const [modal, setmodal] = useState(false)
    const [modal1 , setmodal1] = useState(false)
    const [modal2 , setmodal2] = useState(false)

 
    useEffect(() => {          
    const Getdata = async () => {
        const data = await fetch("http://www.mocky.io/v2/5dcb60f433000075cf3df394")
        const state = await data.json();

        setstate(state);
    }

        Getdata();
    }, [])


    function openModal(id){
        document.body.classList.add('Remove-scroll');
        if(id){
          setmodal(true);
        }
    }

    function openModal2(id){
        document.body.classList.add('Remove-scroll');
        if(id){
          setmodal1(true);
        }
    }

    function CloseModal (){
        document.body.classList.remove('Remove-scroll');
        setmodal(false)
    }

    
    function openModal3 (id){
        document.body.classList.add('Remove-scroll');
        if(id){
          setmodal2(true);
        }
    }

    function CloseModal2 (){
        document.body.classList.remove('Remove-scroll');
        setmodal2(false)
    }

    function CloseModal1(){
        document.body.classList.remove('Remove-scroll');
        setmodal1(false)
    }

    function ShowReserved (){
        setreserved(true)
    }

    const RoomList = state.map(list => (
        <div key={list.id} className="Premium-List">
              <ImageContent
              openModal={() => openModal(list.id === "5dcb4a0733000075cf3df352")}
               openModal2={()=> openModal2(list.id === "5dcb603e33000057c33df393")}
               openModal3={()=> openModal3(list.id === "5dcb4b39330000d7a93df355")}
               image={list.image}
               price={list.price}
               id={list.id}
               ShowReserved={ShowReserved}
               reserve={list.reserve}
               text={list.text}
              />
            <div className="Premium-plus-right">
                <Tabs defaultIndex={1} >
                        <TabList>
                            <Tab>
                                <h4>Room features</h4>
                            </Tab>
                            <Tab>
                                <h4>Property amenities</h4>
                            </Tab>
                            <Tab>
                                <h4>About This Room</h4>
                            </Tab>
                        </TabList>
                        <TabPanel>
                            <ul>
                            <li><i className="fas fa-bed" />{list.list1}</li>
                            <li><i className="fas fa-bed" />{list.list2}</li>
                            <li><i className="fas fa-bed" />{list.list3}</li>
                            <li><i className="fas fa-utensils" />{list.list4}</li>
                            <li><i className="fas fa-utensils" />{list.list5}</li>
                            <li><i className="fas fa-tv" />{list.list6}</li>
                            <li><i className="fas fa-bed" />{list.list7}</li>
                            <li><i className="fas fa-bed" />{list.list8}</li>
                            <li><i className="fas fa-bed" />{list.list9}</li>
                            </ul>
                        </TabPanel>
                        <TabPanel>
                            <ul>
                            <li><i className="fas fa-car" />{list.list10}</li>
                            <li><i className="fas fa-paw" />{list.list11}</li>
                            <li><i className="fas fa-car" />{list.list12}</li>
                            <li><i className="fas fa-wifi" />{list.list13}</li>
                            <li><i className="fab fa-accessible-icon" />{list.list14}</li>
                            <li><i className="fas fa-taxi" />{list.list15}</li>
                            <li><i className="fas fa-bed" />{list.list16}</li>
                            <li><i className="fas fa-utensils" />{list.list17}</li>
                            <li><i className="fas fa-glass-whiskey" />{list.list18}</li>
                            <li><i className="fas fa-concierge-bell" />{list.list19}</li>
                            <li><i className="fas fa-concierge-bell" />{list.list20}</li>
                            <li><i className="far fa-newspaper" />{list.list21}</li>
                            <li><i className="far fa-clock" />{list.list22}</li>
                            <li><i className="fas fa-shoe-prints" />{list.list23}</li>
                            </ul>
                        </TabPanel>
                        <TabPanel>
                                <h2>{list.name}</h2>
                                <ul>
                                    <li className="Premium-List-about">{list.about}</li>
                                </ul>

                        </TabPanel>
                </Tabs>
            </div>
        </div>
    ))

    return (
        <div>
           <div>
                {RoomList}
           </div>
            {reserved && <Reserved/>}
            {}
            <ModalPict 
            modal={modal}
            CloseModal={CloseModal}
           />
           <ModalPict2
           modal={modal1}
           CloseModal={CloseModal1}
           />
           <ModalPict3
           modal={modal2}
           CloseModal={CloseModal2}
           />
        </div>
    )
}
