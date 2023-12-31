import { create } from 'zustand';
import axios from 'axios';
import { CountryInfoList } from '../types/safetyByCountry';

const API_KEY=process.env.REACT_APP_API_KEY

interface ContryInfo {
    countryList: CountryInfoList[]; // 현재 any로 설정되어 있으므로 실제 데이터 타입에 맞게 수정해야 합니다.
    loading : boolean;
    Action: (searchContry  :string) => Promise<void>; // 비동기 함수 타입 Promise객체
}


// 비동기 데이터를 가져오는 로직(공공데이터 API - 국가별 기본정보) 
// Home화면의 검색결과를 인자값으로 받아와 해당 국가명 호출 함수



export const useMyStore = create<ContryInfo>((set)=>({
    countryList: [],
    loading : true,
    Action: async (searchContry) => {
        // 비동기 데이터 가져오는 로직을 구현합니다.
        try {
            set({loading : true})
            const response = await axios.get(`https://apis.data.go.kr/1262000/CountryBasicService/getCountryBasicList?serviceKey=${API_KEY}&numOfRows=10&pageNo=1&countryName=${searchContry}`);
            const data = response.data.response.body.items.item;
        // 검색결과가 1개가 나올 땐 배열로 반환하지 않아 map 함수 실행 오류를 방지하기 위한 변수
            const dataArray = Array.isArray(data) ? data : [data];
        
            set({ countryList: dataArray});
            set({ loading: false });
        } catch (error) {
            set({ loading: false });
            console.error('데이터를 불러오지 못했습니다.:', error);
        }
    },
}));


