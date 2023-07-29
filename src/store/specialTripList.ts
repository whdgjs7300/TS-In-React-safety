import { create } from 'zustand';
import axios from 'axios';
import { SafeByCountryList } from '../types/safetyByCountry';

const REACT_API_KEY="9V%2BSdKNbzQD7oIQPHdDdlKZz0%2BPj1gnzDGKeS%2B8GWk2LHpSkDx5Ig%2F7u6wKopPZEf9brLck%2Bz3z81NapmasU%2Fg%3D%3D";

interface SpecialTrip {
    specialTripList: any[]; // 현재 any로 설정되어 있으므로 실제 데이터 타입에 맞게 수정해야 합니다.
    Action: (searchContry :string) => Promise<void>; // 비동기 함수 타입 Promise객체
}


// 비동기 데이터를 가져오는 로직(공공데이터 API - 나라별 안전공지) 

export const useMyStore = create<SpecialTrip>((set)=>({
    specialTripList: [],
    Action: async (searchContry) => {
        try {
            const response = await axios.get(`https://apis.data.go.kr/1262000/SptravelWarningService2/getSptravelWarningList2?serviceKey=${REACT_API_KEY}&returnType=JSON&numOfRows=10&cond[country_nm::EQ]=${searchContry}&pageNo=1`);
            const data = response.data;
            set({ specialTripList : data.data });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    },
}));