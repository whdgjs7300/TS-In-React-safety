import { useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useMyStore } from "../store/specialTripList";
import Loading from "../components/Loading";


const SpecialTrip = () => {
    
    const {countryNM} = useParams();

    const {specialTripList, loading }= useMyStore((state)=> ({
        specialTripList : state.specialTripList,
        loading : state.loading,
    }));
    const specialTripAction = useMyStore(state => state.Action);

    useEffect(()=>{
        if(countryNM !== undefined)
        specialTripAction(countryNM);
    },[])
    console.log(specialTripList)

    return ( 
        <>
            {
                loading ? <Loading/> :
                <div className="container">
                <h1>{specialTripList[0]?.country_nm}({specialTripList[0]?.continent_nm})</h1>
                <div className="specialtrip_box">
                
                <p>위험지역은 이나라의 "{specialTripList[0]?.region_ty}" 이며</p>
                <p>"{specialTripList[0]?.evacuate_rcmnd_remark}"에 계신다면 철수를 권고합니다.</p>
                <a href={specialTripList[0]?.dang_map_download_url}>위험지도경로 다운로드 </a>
                </div>
                
                </div>
            }
        </>
        
    );
}

export default SpecialTrip;