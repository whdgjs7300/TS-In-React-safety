import { useState, useEffect } from "react";

import { useMyStore } from "../store/countryInfoList";



const Home = () => {
    const [searchCountry, setSearchCountry] = useState<string>('');
    const [showModal, setShowModal]= useState<boolean>(false);

    const countryList = useMyStore(state => state.countryList)
    const contryAction = useMyStore(state => state.Action)
    console.log(countryList);

    
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // searchContry의 업데이트 된 값을 전달 한 데이터 호출
        contryAction(searchCountry);
        setShowModal(true);
    };

    // onchange 될 때마다 바로 검색결과를 보여주고 싶으면 수정해야할 함수
    const handleSearch = (searchValue: string) => {
        setSearchCountry(searchValue);

    };
    
    useEffect(()=>{
        if(searchCountry === '') {
            return;
        }
        contryAction(searchCountry);
    },[])


    return ( 
        <div>
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={searchCountry}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="국가 이름을 입력해주세요!"
            />
            <button type="submit">검색</button>
            </form>
            {/* 모달 창에 데이터를 나타낼 부분 */}
            {showModal && countryList &&(
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
            )}
            
            
        </div>
    );
}

export default Home;