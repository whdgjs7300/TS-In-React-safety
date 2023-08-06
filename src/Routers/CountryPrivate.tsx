
import { useParams, Navigate, useLocation } from "react-router-dom";
import Country from "../Pages/Country";
import { useEffect } from "react";
import { useMyStore } from "../store/countryInfoList";
import Loading from "../components/Loading";
import CountryChoice from "../components/CountryChoice";
import NoData from "../components/NoData";



const CountryPrivate = () => {
    
    const {countryNM } = useParams();
    const {countryList, loading }= useMyStore((state) => ({
        countryList : state.countryList,
        loading : state.loading,
    }))
    const countryAction = useMyStore(state => state.Action)
    
    useEffect(()=>{
        if (countryNM) {
        countryAction(countryNM);
        }
    },[countryNM])

     // 데이터가 로드 중이면 'Loading...'을 표시하도록 설정
    if (loading) {
        return <Loading />;
    }
     // 검색창이 초기값 '없음' 이거나 아무값이나 입력하면 실행시키는 함수
     // countryLis는 검색값에 비동기호출을 하기떄문에 데이터 호출결과가
     // countryList && countryList[0] == undefined 일 때  
    if (countryList && countryList[0] == undefined) {
        // 경고 창 표시
        return (
            <NoData/>
        );
    }
    // 'countryList'가 여러 개인 경우 CountryChoice 컴포넌트 렌더링
    if (countryList.length > 1) {
        return (
            <CountryChoice countryList={countryList} countryNM={countryNM} />
        );
    }
    return <Country/>;
};

export default CountryPrivate;