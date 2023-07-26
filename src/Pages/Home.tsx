import { useState, useEffect } from "react";
import { useYourStore } from "../store/safetyByContryList";
import { useMyStore } from "../store/contryInfoList";



const Home = () => {
    const [searchContry, setSearchContry] = useState<string>('');

    const [showModal, setShowModal]= useState<boolean>(false);

    const contryList = useMyStore(state => state.contryList)
    const contryAction = useMyStore(state => state.Action)
    console.log(contryList);


    // 
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // searchContry의 업데이트 된 값을 전달 한 데이터 호출
        contryAction(searchContry);
        setShowModal(true);
    };

    // onchange 될 때마다 바로 검색결과를 보여주고 싶으면 수정해야할 함수
    const handleSearch = (searchValue: string) => {
        setSearchContry(searchValue);

    };
    
    useEffect(()=>{
        if(searchContry === '') {
            return;
        }
        contryAction(searchContry);
    },[])


    return ( 
        <div>
            {/* 검색 상자 */}
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={searchContry}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="국가 이름을 입력해주세요!"
            />
            <button type="submit">검색</button>
            </form>
            {/* 모달 창에 데이터를 나타낼 부분 */}
            {showModal && contryList &&(
                <div>
                    {/* 여기에 모달 창에 나타낼 데이터를 매핑하여 렌더링하는 로직을 추가하세요 */}
                    {contryList?.map((item,i) => (
                        <div key={i}>{item?.countryName}</div>
                    ))}
                </div>
            )}
            
            
        </div>
    );
}

export default Home;