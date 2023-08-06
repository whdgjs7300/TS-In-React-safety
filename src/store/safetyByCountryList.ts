import { create } from 'zustand';
import axios from 'axios';
import { SafeByCountryList } from '../types/safetyByCountry';

const API_KEY=process.env.REACT_APP_API_KEY

interface SafeByContry {
    safeByContryList: SafeByCountryList[]; 
    loading : boolean;
    Action: (searchContry :string) => Promise<void>; // 비동기 함수 타입 Promise객체
}


// 비동기 데이터를 가져오는 로직(공공데이터 API - 나라별 안전공지) 

export const useMyStore = create<SafeByContry>((set)=>({
    safeByContryList: [],
    loading : true,
    Action: async (searchContry) => {
        try {
            set({loading : true})
            const response = await axios.get(`https://apis.data.go.kr/1262000/CountrySafetyService3/getCountrySafetyList3?serviceKey=${API_KEY}&returnType=JSON&numOfRows=10&cond[country_nm::EQ]=${searchContry}&pageNo=1`);
            const data = response.data;

            set({ safeByContryList: data.data });
            set({ loading: false });
        } catch (error) {
            set({ loading: false });
            console.error('Error fetching data:', error);
        }
    },
}));