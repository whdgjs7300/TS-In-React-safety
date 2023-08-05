
import { Link } from "react-router-dom";
import { CountryInfoList } from "../types/safetyByCountry";


interface CountryProps { 
    countryList : CountryInfoList[],
    
}

const CountryChoice = ({countryList}: CountryProps) => {

    return ( 
        <div>
            나라 선택 컴포넌트
            {
            countryList && countryList.map((item, i)=>(
                <Link key={i}
                to={`country/${item?.countryName}`}>
                    {item?.countryName}
                </Link>

                ) )
            }
        </div>
    );
}

export default CountryChoice;