import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useMyStore } from "../store/specialTripList";
import Loading from "../components/Loading";
import NoData from "../components/NoData";


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


    return ( 
        <>
        {
            loading ? <Loading /> : (
                specialTripList.length === 0 ? (
                    // specialTripList 값이 []일 때, NoData 컴포넌트 호출
                    <NoData />
                ) : (
                    <div className="container">
                        <h1>{specialTripList[0]?.country_nm}({specialTripList[0]?.continent_nm})</h1>
                        <div className="specialtrip_box">
                            <p>위험지역은 이 나라의 "{specialTripList[0]?.region_ty || "없음"}" 이며</p>
                            <p>"{specialTripList[0]?.evacuate_rcmnd_remark || "없음"}"에 계신다면 철수를 권고합니다.</p>
                            <a href={specialTripList[0]?.dang_map_download_url}>위험지도경로 다운로드</a>
                        </div>
                    </div>
                )
            )
        }
    </>
        
    );
}

export default SpecialTrip;