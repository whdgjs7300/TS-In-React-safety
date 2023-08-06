import {  useParams } from "react-router-dom";
import { useEffect } from "react";
import { useMyStore } from "../store/permitList";
import Loading from "../components/Loading";
import NoData from "../components/NoData";

const Permit = () => {
    
    const {countryNM} = useParams();

    const {permitList, loading} = useMyStore((state) => ({
        permitList : state.permitList,
        loading : state.loading,
    }));
    const permitAction = useMyStore(state => state.Action);
    
    useEffect(()=>{
        if(countryNM !== undefined)
        permitAction(countryNM);
    },[])
    console.log(permitList)

    return (  
        <>
            {
                loading ? <Loading /> : (
                    permitList.length === 0 ? (
                        // permitList 값이 []일 때, NoData 컴포넌트 호출
                        <NoData />
                    ) : (
                        <div className="container">
                            <div className="permit_box">
                                <h1>{permitList[0].country_nm}</h1>
                                <p>여권소지여부 : {permitList[0].have_yn}</p>
                                <p>일반여권 입국허가 내용 : {permitList[0].gnrl_pspt_visa_cn}</p>
                                <p>관용여권 입국허가 내용 : {permitList[0].dplmt_pspt_visa_cn}</p>
                                <p>무비자 입국근거 내용 : {permitList[0].nvisa_entry_evdc_cn}</p>
                                <p>비고 : {permitList[0].remark || "내용 없음"}</p>
                            </div>
                        </div>
                    )
                )
            }
        </>
        
    );
}

export default Permit;