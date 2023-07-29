// 국가별 정보 리스트 페이지

import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Country = () => {
    const navigate = useNavigate();
    const {countryNM }   = useParams();
    const [countryTag, setCountryTag] = useState<string>('');
    
    
    return ( 
        <div className="link_container">
            <h1>"{countryNM}"의 정보들 입니다.</h1>
            
            <Link className="link_btn" to='/basicinfo' state={countryNM}>기본정보</Link>
            <Link className="link_btn" to='/notice' state={countryNM}>공지사항</Link>
            <Link className="link_btn" to='/permit' state={countryNM}>입국허가</Link>
            <Link className="link_btn" to='/safety' state={countryNM}>안전공지</Link>
            <Link className="link_btn" to='/contact' state={countryNM}>현지연락</Link>
            <Link className="link_btn" to='/specialtrip' state={countryNM}>특별여행</Link>
        </div>
    );
}

export default Country;