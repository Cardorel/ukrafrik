import React, {useState , useEffect} from 'react';
import './Home.css'
import {Link} from 'react-router-dom'
import HomeNav from './HomeNav'
import {Transition} from 'react-transition-group'

const HomeHeader = () => {
    const [state, setstate] = useState(false);
    const [transition, settransition] = useState(false);

    useEffect(() => {
       settransition(true);
    }, [])




    function openText (){
        setstate(true)
    }

    return (
        <div className="Home-container">
            <Transition timeout={1500}  in={transition} appear>
                {(status) => <div className={`my-node-${status}`}>
                    <div className="Home-header">
                        <h1>Welcome Home To UkrafriK Hotel</h1>
                        <p>...a deliciously romantic Vermont experience!</p>
                    </div>            
                    <div className="Bars-down"></div>
                </div>
                }
            </Transition> 

            <Transition timeout={2500} in={transition} appear>
                {(status) => <div className={`my-node-${status}`}>
                    <div className="Home-content-text">
                        <p>
                            A romantic, luxurious, and affordable Ukraine vacation destination, this 19-room bed and breakfast in Northern Vermont caters to adult getaways, relaxing escapes, honeymoons, celebrations, and fun-filled vacations. Enjoy <Link to="/Premiumplus">luxe accommodations </Link> with a variety of décor styles, including traditional, American country, modern, and transitional. All rooms have private baths, some to include lavish double whirlpool or hydromassage tubs for two, or oversized spa showers.
                </p>
                        <p>
                            Most rooms and suites feature working fireplaces and glorious views of the White Mountains. By design, you will not find the distraction of in-room telephones or televisions. However, there are two guest telephone rooms available. Free wireless Internet access can be found in the common areas and some guest rooms. If you wish to cuddle up and enjoy a movie, we have a few 15” DVD players available. Choose a movie from our DVD collection or bring your own. Lauded for not only its fine accommodations, UkrafriK Hotel is also well known for its brilliant service, unparalleled warm hospitality, outstanding innovative cuisine, and comfortably relaxing environs, including a cozy full-service Irish-style pub.
                </p>
                        {!state && <button onClick={openText}>Read More...</button>}
                        {state && <div className="Home-content-read-n">
                            <h3 style={{ margin: " 10px 0" }} >Exceptional Dining</h3>
                            <p>
                                Dining is a key part of any vacation experience. At Rabbit Hill Inn, great pride is taken to present outstanding cuisine and attentive service in a comfortable, unpretentious atmosphere. Each morning, enjoy a bountiful candlelit breakfast. Begin with a variety of freshly baked treats, homemade granola, fruits, yogurts, and juices. What follows, is your choice of two hearty hot entrees.
                </p>
                            <p>
                                Mid-day, don’t miss out on the heavenly house made pastries served between 2:00 – 5:00 pm. Match that up with a perfect cup of tea or coffee. In summer months, iced tea and lemonade are also available. Remember, all this deliciousness is at no additional charge.
                </p>
                            <p>
                                After a full day of adventure, there is no reason to drive away searching for a perfect dining experience. Rabbit Hill Inn is noted as one of Vermont’s best restaurants. Unwind and savor outstanding creative cuisine in our relaxed and comfortable candlelit dining room. Our award-winning chef team presents innovative frequently changing menus featuring highly seasonal, local ingredients. Our Snooty Fox Pub offers a full bar, local craft beers, and a carefully selected wine list.
                </p>
                            <h3 style={{ margin: " 10px 0" }}>Explore the Northeast Kiev and his surroundings </h3>
                            <p>
                                In addition to the inn’s 15 acres of lush gardens and trails, this ideal location offers a near-endless variety of activities year ‘round. UkrafriK Hotel is conveniently located on the border of Kiev. Seasonal fun includes downhill skiing at Cannon Mountain, Burke Mountain, Loon or Bretton Woods. Try snowshoeing, cross-country skiing, ice skating, snowmobiling, and private horse-drawn sleigh rides. In warmer seasons, you’ll find the best hiking and biking trails Ukraine. Enjoy great fishing, canoeing, kayaking, swimming, and golfing at three nearby courses.
                </p>
                        </div>
                        }
                    </div>
                </div>
                }
            </Transition>
            <Transition timeout={3500} in={transition} appear>
                {(status) => <div className={`my-node-${status}`}>
                    <HomeNav />
                </div>
                }
            </Transition>
        </div>
    );
}

export default HomeHeader;
