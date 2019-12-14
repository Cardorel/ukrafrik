import React , {useState,useEffect} from 'react'
import SlidePremiumImage from './SlidePremiumImage'
import Reserved from '../Navigation/Reserved';
import PayFortheRoom from '../Footer/PayFortheRoom';




export default function RoomDetails({ match }) {
    const [state, setstate] = useState({
        image: {}
    });

    const [Premium, setPremium] = useState(false);
    const [check, setcheck] = useState(false);

  

    useEffect(() => {
      
        const Fetch  = async () => {
            try {
                const response = await fetch(`http://www.mocky.io/v2/${match.params.id}`)
                const state = await response.json();
                setstate(state)
            } catch (error) {
                console.log(error);
                
            }
            
        }

       Fetch();
       
    }, [match.params.id]);

    
    function ShowReserved (){
       setcheck(true)
    }

    function ShowAllImagePremium ()
    {
         setPremium(true);
    }
    
    return (
        <div>
            <div className="RoomDetail-container">
                <div className="Room-detail-home-image">
                    <img src={state.url} alt={state.id} />
                </div>
                <div className="Premium-header-image">
                    <h1>
                        {state.title}
                        <div className="Premium-bar-fantesie" />
                    </h1>
                </div>
                <div className="Room-detail-position-element">
                    <p className="Room-detail-para">{state.Description}</p>
                    <div className="Room-detail-row">
                        <div className="Room-detail-col">
                            <img src={state.url} onClick={ShowAllImagePremium} alt={state.id} />
                            <div className="Premium-plus-left-btn">
                                <button onClick={ShowReserved}>Reserved</button>
                            </div>
                        </div>
                        <div className="Room-detail-col">
                            <ul>
                                <li><i className="fas fa-bed" />{state.chara1}</li>
                                <li><i className="fas fa-tv" />{state.chara2}</li>
                                <li><i className="fas fa-share-square" />{state.chara3}</li>
                                <li><i className="fas fa-fan" />{state.chara4}</li>
                                <li><i className="fas fa-phone-volume" />{state.chara5}</li>
                                <li><i className="fas fa-music" />{state.Chara6}</li>
                                <li><i className="fas fa-coffee" />{state.chara7}</li>
                                <li><i className="fas fa-person-booth" />{state.chara8}</li>
                                <li><i className="fas fa-toilet" />{state.chara9}</li>
                                <li><i className="fas fa-prescription-bottle" />{state.chara10}</li>
                                <li><i className="fas fa-smoking-ban" />{state.chara11}</li>
                                <li><i className="fas fa-broom" />{state.chara12}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="Room-detail-check-pay">
                    {check && <Reserved/>}
                </div>
                <div className="Room-detail-under-image">
                    {Premium &&  <SlidePremiumImage 
                      state1={state.image.url1} 
                      state2={state.image.url2}
                      state3={state.image.url3}
                      />
                    }
                </div>
                <PayFortheRoom
                 price={state.Price}
                 price1={state.Price1}
                />
            </div>
        </div>
    )
}
