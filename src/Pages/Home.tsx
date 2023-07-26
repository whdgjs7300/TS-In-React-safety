import { useState, useEffect } from "react";
import { useYourStore } from "../store/safetyByContryList";



const Home = () => {
    const [searchContry, setSearchContry] = useState<string>('');

    const safeByContryList = useYourStore(state=>state.safeByContryList);
    const safeByContryListAction = useYourStore(state=>state.yourAction)
    console.log(safeByContryList);

    useEffect(()=>{
        safeByContryListAction();
    },[]);

    // 검색어가 변경될 때마다 호출되는 함수로, 여기서 API를 호출하여 데이터를 가져올 수 있습니다.
    const handleSearch = (searchValue: string) => {
        setSearchContry(searchValue);
        // 여기서 API를 호출하고, 검색어와 관련된 데이터를 safeByContryList 스토어에 저장하는 로직을 추가하세요.
        // 예를 들면 useYourStore의 yourAction 함수를 사용하여 데이터를 업데이트할 수 있습니다.
        // useYourStore.getState().yourAction(...);
    };


    // 모달 창 토글 함수
    const toggleModal = () => {
        // 모달 창을 열거나 닫는 로직을 추가하세요.
    };

    return ( 
        <div>
            {/* 검색 상자 */}
            <input
                type="text"
                value={searchContry}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="검색어를 입력하세요"
            />
            {/* 모달 창에 데이터를 나타낼 부분 */}
            {safeByContryList.length > 0 && (
                <div>
                    {/* 여기에 모달 창에 나타낼 데이터를 매핑하여 렌더링하는 로직을 추가하세요 */}
                    {safeByContryList.map((item) => (
                        <div key={item.id}>{item.title}</div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;