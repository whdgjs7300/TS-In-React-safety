import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useMyStore } from "../store/safetyByCountryList";

const Safety = () => {
    const location = useLocation();
    const countryNM = location.state;

    const safeByContryList = useMyStore(state => state.safeByContryList);
    const safetyAction = useMyStore(state => state.Action);

    useEffect(()=>{
        safetyAction(countryNM);
    },[])
    console.log(countryNM);

    return ( 
        <div>
            {
                safeByContryList?.map((item,i)=> (
                    <div key={i}>
                        <h2>{item.title} ({item.ctgy_nm})</h2>
                        <p dangerouslySetInnerHTML={{ __html: item.txt_origin_cn}}></p>
                    </div>
                ))
            }
        </div>
    );
}

export default Safety;