import { CountryInfo } from "../types/safetyByCountry";

interface SearchModalProps { 
    countryList : CountryInfo[],
    
}

const SearchModal = ({countryList} : SearchModalProps) => {

    return ( 
        <div>
            
                    {/* 모달 창에 나타낼 데이터를 매핑하여 렌더링하는 로직 */}
                    {/* 검색결과가 1개일땐 데이터가 배열로 감싸지지 않아 
                    Array.isArray()로 배열의 형태로 만들었기 때문에 아래의 로직으로
                    조건식 사용
                    */
                        countryList?.[0] === undefined ? (
                        <h2>해당 국가는 없습니다.</h2>
                        ) : (
                            countryList?.map((item, i) => (
                            <div key={i}>{item?.countryName}</div>
                        ))
                        )
                        }
                
        </div>
    );
}

export default SearchModal;