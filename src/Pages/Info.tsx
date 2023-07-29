
import { useLocation } from "react-router-dom";

import { useMyStore } from "../store/countryInfoList";
import { useEffect } from "react";

const Info = () => {
    const location = useLocation();
    const countryNM = location.state;
    
    const countryInfoList = useMyStore(state=> state.countryList);
    const countryInfoAction = useMyStore(state=> state.Action);
    
    
    useEffect(()=>{
        // nullish 병합 연산자로 countryNM이 undefined일 때 빈 값 반환
        countryInfoAction(countryNM); 
    },[])

    console.log(countryInfoList);

    return ( 
        <div>
            <h1>{countryInfoList[0]?.countryName}({countryInfoList[0]?.continent})</h1>
            <img src={countryInfoList[0]?.imgUrl}  />
            <div dangerouslySetInnerHTML={{ __html: countryInfoList[0]?.basic }}>
            </div>
            
        </div>
        
    );
}

export default Info;