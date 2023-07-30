// 국가별 정보 리스트 페이지

import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Country = () => {
    const navigate = useNavigate();
    const {countryNM }   = useParams();
    const [countryTag, setCountryTag] = useState<string>('');
    
    // 만약 countryNM에 괄호로 감싸진 값이 있다면, 괄호 안의 값을 제거
    // \s*: 0개 이상의 공백 문자 (whitespace)를 찾습니다.
    // \(.*\): 괄호로 감싸진 모든 문자열을 찾습니다.
    const extractedCountryName = countryNM?.replace(/\s*\(.*\)/, '') || countryNM;
    
    return ( 
        <div className="link_container">
            <h1>"{extractedCountryName}"의 정보들 입니다.</h1>
            
            <Link className="link_btn" to='/basicinfo' state={countryNM}>기본정보</Link>
            <Link className="link_btn" to='/notice' state={countryNM}>공지사항</Link>
            <Link className="link_btn" to='/permit' state={extractedCountryName}>입국허가</Link>
            <Link className="link_btn" to='/safety' state={extractedCountryName}>안전공지</Link>
            <Link className="link_btn" to='/contact' state={extractedCountryName}>현지연락</Link>
            <Link className="link_btn" to='/specialtrip' state={extractedCountryName}>특별여행</Link>
        </div>
    );
}

export default Country;