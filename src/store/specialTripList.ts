import { create } from 'zustand';
import axios from 'axios';
import { SpecialTripList } from '../types/safetyByCountry';

const API_KEY=process.env.REACT_APP_API_KEY

interface SpecialTrip {
    specialTripList: SpecialTripList[]; // 현재 any로 설정되어 있으므로 실제 데이터 타입에 맞게 수정해야 합니다.
    loading : boolean;
    Action: (searchContry :string) => Promise<void>; // 비동기 함수 타입 Promise객체
}


// 비동기 데이터를 가져오는 로직(공공데이터 API - 나라별 특별여행 공지) 

export const useMyStore = create<SpecialTrip>((set)=>({
    specialTripList: [],
    loading : true,
    Action: async (searchContry) => {
        try {
            set({loading : true})
            const response = await axios.get(`https://apis.data.go.kr/1262000/SptravelWarningService2/getSptravelWarningList2?serviceKey=${API_KEY}&returnType=JSON&numOfRows=10&cond[country_nm::EQ]=${searchContry}&pageNo=1`);
            const data = response.data;

            set({ specialTripList : data.data });
            set({ loading: false });
        } catch (error) {
            set({ loading: false });
            console.error('Error fetching data:', error);
        }
    },
}));