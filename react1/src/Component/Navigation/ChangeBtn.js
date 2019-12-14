import React , {useState} from 'react'
import BtnStatus from './BtnStatus'
import ListStatus from './ListStatus'

export default function ChangeBtn() {
    const [state, setstate] = useState(true)
   
    function onSeeMore (){
         setstate(false)
    }


    let ChangeStatus;

    if(state){
        ChangeStatus = <BtnStatus onClick={onSeeMore}/>
    } else{
        ChangeStatus = <ListStatus />
    }

    return (
        <div>
            {ChangeStatus}
        </div>
    )
}
