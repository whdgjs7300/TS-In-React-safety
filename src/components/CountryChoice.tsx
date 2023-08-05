
import { Link, useNavigate } from "react-router-dom";
import { CountryInfoList } from "../types/safetyByCountry";


interface CountryProps { 
    countryList : CountryInfoList[],
    countryNM? : string,
}

const CountryChoice = ({countryList, countryNM}: CountryProps) => {
    const navigate = useNavigate();

    const toCountry = (countryName : string) => {
        const url = `/country/${countryName}`;
        navigate(url);
    }

    return ( 
        <div >
            <h1>"{countryNM}" 로 검색한 국가들 입니다.</h1> 
            <div className="btn_container">
            {
            countryList && countryList.map((item, i)=>(
                <button className="country_btn"
                key={i} onClick={() => toCountry(item?.countryName)}>
                        {item?.countryName}
                    </button>

                ) )
            }
            </div>
            
        </div>
    );
}

export default CountryChoice;