import React , {useState , useEffect} from 'react'
import {Link} from 'react-router-dom'

export default function ConferenceNav() {
    const [state, setstate] = useState([]);

    useEffect(() => {
         
        async function GetConf (){
            const data = await fetch("http://www.mocky.io/v2/5dd320e2330000e9c97a4018")
            const response = await data.json();

            setstate(response);
        }
        GetConf();
    }, [])
 
    return (
        <div>
            {state.map(data => (
                <div key={data.id} className="Confer-data-container">
                    <div className="Confer-data-content">
                        <h2>{data.title}</h2>
                       <div className="Confer-data-img">
                          <Link to={`/Conference/Halls/${data.id}`}>
                                 <img src={data.image} alt={data.id} />
                          </Link>
                       </div>
                        <div className="Confer-data-para">
                            <p className="capacity-para">{data.capacity}</p>
                            <span className="capacity-span">{data.number}</span>
                            <div className="Confer-bar-center"></div>
                            <p className="area-para">Area</p>
                            <span className="area-span">{data.Area}</span>
                        </div>
                        <hr />
                    </div>
                </div>
            ))}
        </div>
    )
}
