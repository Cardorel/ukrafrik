import React , {useState , useEffect} from 'react'
import ConferenceImageSlider from './ConferenceImageSlider'
import ConferenceBtnEvent from './ConferenceBtnEvent';

export default function ConferenceRequestById({match}) {

    const [state, setstate] = useState({});
    const [request, setrequest] = useState({});

    useEffect(() => {
       
        const GetData = async () => {
           try {
            const data = await fetch(`http://www.mocky.io/v2/${match.params.id}`)
            const resultat = await data.json();
            setstate(resultat.url);
            setrequest(resultat);
           } catch (error) {
            const data = await fetch("http://www.mocky.io/v2/5dd6cbf53200009444888d47")
            const resultat = await data.json();
            setstate(resultat.url);
            setrequest(resultat);
           }
        }

        GetData();
    }, [match.params.id])

    return (
        <div>
            <div className="Confer-request-id-container">
                <div className="Confer-request-id-content">
                    <div className="Request-container">
                        <div className="Request-event-header">
                            <div className="Request-event-bar-top"></div>
                            <h3>{request.title}</h3>
                            <div className="Request-event-bar-botton"></div>
                        </div>
                    </div>
                    <div className="Confer-request-id-imag">
                        <ConferenceImageSlider
                            image1={state.url1}
                            image2={state.url2}
                            image3={state.url3}
                            image4={state.url4}
                        />
                    </div>
                    <div className="Confer-request-id-width-70">
                        <div className="Confer-request-id-para">
                            <p>{request.text}</p>
                        </div>
                        <div className="Confer-request-id-row">
                            <div className="Confer-request-id-col">
                                <p>Area</p>
                                <span>{request.Area}</span>
                            </div>
                        <div className="Confer-request-id-col">
                            <p>{request.capacity}</p>
                            <span>{request.number}</span>
                        </div>
                        </div>
                        <ConferenceBtnEvent />
                        <hr />
                        <div className="Confer-request-id-down">
                            <h4>{request.Equipment}</h4>
                            <div className="Confer-request-id-Equipmnt-row">
                                <div className="Confer-request-id-Equipment-col">
                                    <p>- {request.Speaker}</p>
                                    <p>- {request.multimedia}</p>
                                    <p>- {request.chart}</p>
                                    <p>- {request.micro}</p>
                                    <p>- {request.wall}</p>
                                </div>
                            </div>
                        </div>
                        <div className="Confer-hr">
                            <hr/>
                        </div>
                        <div className="Confer-request-additionnal">
                            <h4>{request.additionnal}</h4>
                            <div className="Confer-request-additionnel-col">
                                <p>- {request.addi1}</p>
                                <p>- {request.add2}</p>
                                <p>- {request.add3}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
