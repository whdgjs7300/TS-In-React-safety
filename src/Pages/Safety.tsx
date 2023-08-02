import { useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useMyStore } from "../store/safetyByCountryList";
import Loading from "../components/Loading";

const Safety = () => {
    
    const {countryNM} = useParams();

    const {safeByContryList, loading} = useMyStore((state) =>({
        safeByContryList : state.safeByContryList,
        loading : state.loading,
    }));
    const safetyAction = useMyStore(state => state.Action);

    useEffect(()=>{
        if ( countryNM !== undefined)
        safetyAction(countryNM);
    },[])
    console.log(safeByContryList);

    return ( 
        <>  {
                loading ? <Loading/> :
                <div className="container">
                <h1>{safeByContryList[0]?.country_nm}({safeByContryList[0]?.continent_nm})</h1>
            {
                safeByContryList?.map((item,i)=> (
                    <div className="safety_box"
                    key={i}>
                        <h2> {item.ctgy_nm}</h2>
                        <p dangerouslySetInnerHTML={{ __html: item.txt_origin_cn}}></p>
                    </div>
                ))
            }
                </div>
            }
            
        </>
        
    );
}

export default Safety;