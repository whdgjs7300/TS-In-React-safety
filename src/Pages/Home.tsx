import { useState, useEffect } from "react";
import { useMyStore } from "../store/countryInfoList";
import SearchModal from "../components/SearchModal";
import useDebounce from "../useDebounce";
import { useNavigate } from "react-router-dom";
import MainTitle from "../components/MainTitle";

const Home = () => {
    const [searchCountry, setSearchCountry] = useState<string>('없음');
    const [showModal, setShowModal]= useState<boolean>(false);

    const debounceValue = useDebounce(searchCountry, 500);

    const countryList = useMyStore(state => state.countryList)
    
    const countryAction = useMyStore(state => state.Action)
    const navigate = useNavigate();
    
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        // searchContry의 업데이트 된 값을 전달 한 데이터 호출
        setTimeout(() => {
            navigate(`/country/${searchCountry}`);
        }, 800); // 디바운스 값 호출 시간보다 뒤에 페이지 이동()
        
    };

    // onchange 될 때마다 바로 검색결과를 보여주고 싶으면 수정해야할 함수
    // 이전 값을 리턴하는 
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value.trim();
        // 스페이스바를 누르거나 빈값일 때도 기본 api 데이터가 호출되는 것을 방지
    if (inputValue !== '') {
        setSearchCountry(inputValue);
        setShowModal(true);
    }
    };
    
    useEffect(()=>{
        if(debounceValue == '') {
            return;
        }
        countryAction(debounceValue);
    },[debounceValue ])

    

    return ( 
        <div className="home_container" >
            <MainTitle/>
            
            <h1>나라를 검색 및 클릭 해주세요 </h1>
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                onChange={(e)=>handleInputChange(e)}
                
            />
            <button type="submit">검색</button>
            </form>
            {/* 모달 창에 데이터를 나타낼 부분 */}
            {showModal && countryList &&(
                <SearchModal countryList={countryList}/>
            )}
            
            
        </div>
    );
}

export default Home;