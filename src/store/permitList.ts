import { create } from 'zustand';
import axios from 'axios';
import { PermitList } from '../types/safetyByCountry';


const REACT_API_KEY="9V%2BSdKNbzQD7oIQPHdDdlKZz0%2BPj1gnzDGKeS%2B8GWk2LHpSkDx5Ig%2F7u6wKopPZEf9brLck%2Bz3z81NapmasU%2Fg%3D%3D";

interface Permit {
    permitList: PermitList[]; // 현재 any로 설정되어 있으므로 실제 데이터 타입에 맞게 수정해야 합니다.
    loading : boolean;
    Action: (searchContry  :string) => Promise<void>; // 비동기 함수 타입 Promise객체
}


// 비동기 데이터를 가져오는 로직(공공데이터 API - 국가별 입국허가) 


export const useMyStore = create<Permit>((set)=>({
    permitList: [],
    loading : true,
    Action: async (searchContry) => {
        // 비동기 데이터 가져오는 로직을 구현합니다.
        try {
            set({loading : true})
            const response = await axios.get(`https://apis.data.go.kr/1262000/EntranceVisaService2/getEntranceVisaList2?serviceKey=${REACT_API_KEY}&returnType=JSON&numOfRows=10&pageNo=1&cond[country_nm::EQ]=${searchContry}`);
            const data = response.data.data;
        // 검색결과가 1개가 나올 땐 배열로 반환하지 않아 map 함수 실행 오류를 방지하기 위한 변수
            const dataArray = Array.isArray(data) ? data : [data];
        
            set({ permitList : dataArray});
            set({ loading: false });
        } catch (error) {
            set({ loading: false });
            console.error('데이터를 불러오지 못했습니다.:', error);
        }
    },
}));
