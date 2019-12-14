import React , {useState , useEffect} from 'react'
import PayFortheRoom from '../Footer/PayFortheRoom2'

export default function Payroom({match}) {

    const [state, setstate] = useState({});

    useEffect(() => {
        const GetPrice = async () => {
           try {
            const response = await fetch(`http://www.mocky.io/v2/${match.params.id}`)
            const resultat = await response.json();
            setstate(resultat);
           } catch (error) {
               console.log(error);
           }

        
        
    }
    

        GetPrice();
    }, [match.params.id])
   
    

    return (
        <div>
            <div className="Payroom-header">
                <img src="https://images.pexels.com/photos/462368/pexels-photo-462368.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="CardCredit" />
                <div className="Premium-header-image">
                    <h1>Payment
                    <div className="Premium-bar-fantesie"/>
                    </h1>
                </div>
            </div>
            <PayFortheRoom 
            price1={state.price1}
            price={state.price}
            />
        </div>
    )
}
