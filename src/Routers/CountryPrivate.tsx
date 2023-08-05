import styled from "styled-components";
import { useParams, Navigate, useLocation } from "react-router-dom";
import Country from "../Pages/Country";
import { useEffect } from "react";
import { useMyStore } from "../store/countryInfoList";

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

    // 라우터 미스 방지
    
    
    
    const countryList = useMyStore(state => state.countryList)
    
    
    console.log(countryList)
    
     // 'countryNM'이 'none'이거나 'countryList'가 null인 경우
    if (countryList && countryList[0] == undefined) {
        const goBack = () => {
            window.history.back();
        };
        // 경고 창 표시
        return (
        <WarningContainer>
            <p>해당 나라는 없습니다.</p>
            <OKButton onClick={goBack}>뒤로가기</OKButton>
        </WarningContainer>
        );
    }

    return <Country />;
};

export default CountryPrivate;