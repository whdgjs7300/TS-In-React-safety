import styled from "styled-components";
import { useParams, Navigate, useLocation } from "react-router-dom";
import Country from "../Pages/Country";
import { useEffect } from "react";
import { useMyStore } from "../store/countryInfoList";
import Loading from "../components/Loading";

// 경고 창 스타일
const WarningContainer = styled.div`
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
    padding: 20px;
    border: 1px solid #ccc;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    text-align: center;
`;

const OKButton = styled.button`
  margin-top: 10px; /* 버튼 위에 여백을 줘서 간격을 조절 */
`;

const CountryPrivate = () => {
    
    const {countryNM } = useParams();
    const {countryList, loading }= useMyStore((state) => ({
        countryList : state.countryList,
        loading : state.loading,
    }))
    const countryAction = useMyStore(state => state.Action)
    
    console.log(countryList);
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
        const goBack = () => {
            window.history.back();
        };
        // 경고 창 표시
        return (
            <>
        <WarningContainer>
            <p>해당 나라는 없습니다.</p>
            <OKButton onClick={goBack}>뒤로가기</OKButton>
        </WarningContainer>
            </>
        
        );
    }

    return <Country />;
};

export default CountryPrivate;