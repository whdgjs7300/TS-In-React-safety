import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useMyStore } from "../store/specialTripList";


const SpecialTrip = () => {
    const location = useLocation();
    const countryNM = location.state;

    const specialTripList = useMyStore(state=> state.specialTripList);
    const specialTripAction = useMyStore(state => state.Action);

    useEffect(()=>{
        specialTripAction(countryNM);
    },[])
    console.log(specialTripList)

    return ( 
        <div>
            <h1>{specialTripList[0]?.country_nm}({specialTripList[0]?.continent_nm})</h1>
            <p>위험지역은 이나라의 "{specialTripList[0]?.region_ty}" 이며</p>
            <p>"{specialTripList[0]?.evacuate_rcmnd_remark}"에 계신다면 철수를 권고합니다.</p>
            <a href={specialTripList[0]?.dang_map_download_url}>위험지도경로 다운로드 </a>
        </div>
    );
}

export default SpecialTrip;