import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useMyStore } from "../store/permitList";

const Permit = () => {
    const location = useLocation();
    const countryNM = location.state;

    const permitList = useMyStore(state => state.permitList);
    const permitAction = useMyStore(state => state.Action);
    
    useEffect(()=>{
        permitAction(countryNM);
    },[])
    console.log(permitList)

    return (  
        <div >
            <h1>{permitList[0]?.country_nm}</h1>
            <p>여권소지여부 : {permitList[0]?.have_yn}</p>
            <p>일반여권 입국허가 내용 : {permitList[0]?.gnrl_pspt_visa_cn}</p>
            <p>관용여권 입국허가 내용 : {permitList[0]?.dplmt_pspt_visa_cn}</p>
            <p>무비자 입국근거 내용 : {permitList[0]?.nvisa_entry_evdc_cn}</p>
            <p>비고 : {permitList[0]?.remark || "내용 없음"}</p>
        </div>
    );
}

export default Permit;