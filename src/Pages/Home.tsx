import { useState, useEffect, useMemo } from "react";
import { useMyStore } from "../store/countryInfoList";
import SearchModal from "../components/SearchModal";
import { debounce } from 'lodash';
import useDebounce from "../useDebounce";

const Home = () => {
    const [searchCountry, setSearchCountry] = useState<string>('없음');
    const [showModal, setShowModal]= useState<boolean>(false);

    const debounceValue = useDebounce(searchCountry);

    const countryList = useMyStore(state => state.countryList)
    const countryAction = useMyStore(state => state.Action)
    

    console.log(debounceValue);
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // searchContry의 업데이트 된 값을 전달 한 데이터 호출
        if (searchCountry.trim() !== '') {
            countryAction(debounceValue);
            setShowModal(true);
        }
        
    };

    // onchange 될 때마다 바로 검색결과를 보여주고 싶으면 수정해야할 함수
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchCountry(e.target.value);
        setShowModal(true);
    };
    
    useEffect(()=>{
        if (!searchCountry) {
            return ;
        }
        countryAction(debounceValue);
    },[debounceValue])


    return ( 
        <div className="home_container">
            <h1>여행 가실 나라를 검색해주세요 !</h1>
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                
                onChange={(e)=>handleInputChange(e)}
                placeholder="국가 이름을 입력해주세요!"
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