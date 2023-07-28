// 국가별 정보 리스트 페이지

import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Country = () => {
    const navigate = useNavigate();
    const {countryNM }   = useParams();
    const [countryTag, setCountryTag] = useState<string>('');
    
    
    return ( 
        <div>
            "{countryNM}"의 정보들 입니다.
            <Link to='/basicinfo' state={countryNM}>여행정보</Link>
            <Link to='/permit' state={countryNM}>입국허가</Link>
            <Link to='/safety' state={countryNM}>안전공지</Link>
            <Link to='/contact' state={countryNM}>현지연락</Link>
            
        </div>
    );
}

export default Country;