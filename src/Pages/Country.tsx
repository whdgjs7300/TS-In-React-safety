// 국가별 정보 리스트 페이지
import React from "react";
import { Link, useParams } from "react-router-dom";



const Country = () => {
    
    const {countryNM } = useParams();
    

    // 만약 countryNM에 괄호로 감싸진 값이 있다면, 괄호 안의 값을 제거
    // \s*: 0개 이상의 공백 문자 (whitespace)를 찾습니다.
    // \(.*\): 괄호로 감싸진 모든 문자열을 찾습니다.
    const extractedCountryName = countryNM?.replace(/\s*\(.*\)/, '') || countryNM;

    // 미국만 이름이 미합중국 일때 다른 페이지에 데이터가 출력이 되어 수정하는 코드
    const modifiedCountryName = extractedCountryName === "미국" ? "미합중국" : extractedCountryName;
    
    
    return ( 
        <div className="link_container">
            <h1>"{extractedCountryName}"의 정보들 입니다.</h1>
            
            <Link className="link_btn" to={`/basicinfo/${countryNM}`} >기본정보</Link>
            <Link className="link_btn" to='/notice'>공지사항</Link>
            <Link className="link_btn" to={`/permit/${modifiedCountryName}`} >입국허가</Link>
            <Link className="link_btn" to={`/safety/${countryNM}`} >안전공지</Link>
            <Link className="link_btn" to={`/contact/${modifiedCountryName}`} >현지연락</Link>
            <Link className="link_btn" to={`/specialtrip/${modifiedCountryName}`} >특별여행</Link>
        </div>
    );
}

export default React.memo(Country);