
import {  useParams } from "react-router-dom";

import { useMyStore } from "../store/countryInfoList";
import { useEffect } from "react";
import Loading from "../components/Loading";

const Info = () => {
    
    const {countryNM} = useParams();
    
    const {countryInfoList, loading }= useMyStore((state)=> ({
        countryInfoList : state.countryList,
        loading : state.loading
    }));
    const countryInfoAction = useMyStore(state=> state.Action);
    
    
    useEffect(()=>{
        // nullish 병합 연산자로 countryNM이 undefined일 때 빈 값 반환
        if ( countryNM !== undefined)
        countryInfoAction(countryNM); 
    },[])
    const basicInfo = countryInfoList[0]?.basic;

    
    return ( 
        <>
            {
                loading ? <Loading/> :
                <div className="container">
                <h1>{countryInfoList[0]?.countryName}({countryInfoList[0]?.continent})</h1>
                <img style={{width: "275px", height :"275px" }}
                src={countryInfoList[0]?.imgUrl}  />
                <div className="country_basic_info"
                dangerouslySetInnerHTML={{ __html: basicInfo }}>
                </div>
                
            </div>
            }
        </>
        
        
    );
}

export default Info;