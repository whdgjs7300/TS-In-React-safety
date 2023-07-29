import { create } from 'zustand';
import axios from 'axios';
import { ContactList } from '../types/safetyByCountry';

const REACT_API_KEY="9V%2BSdKNbzQD7oIQPHdDdlKZz0%2BPj1gnzDGKeS%2B8GWk2LHpSkDx5Ig%2F7u6wKopPZEf9brLck%2Bz3z81NapmasU%2Fg%3D%3D";

interface Contact {
    contactList: ContactList[]; // 현재 any로 설정되어 있으므로 실제 데이터 타입에 맞게 수정해야 합니다.
    Action: (searchContry  :string) => Promise<void>; // 비동기 함수 타입 Promise객체
}


// 비동기 데이터를 가져오는 로직(공공데이터 API - 국가별 연락처 정보) 
// Home화면의 검색결과를 인자값으로 받아와 해당 국가명 호출 함수

export const useMyStore = create<Contact>((set)=>({
    contactList: [],
    Action: async (searchContry) => {
        // 비동기 데이터 가져오는 로직을 구현합니다.
        try {
            const response = await axios.get(`https://apis.data.go.kr/1262000/LocalContactService2/getLocalContactList2?serviceKey=${REACT_API_KEY}&returnType=JSON&numOfRows=10&cond[country_nm::EQ]=${searchContry}&pageNo=1`);
            const data = response.data.data;
        
            set({ contactList: data});
        } catch (error) {
            console.error('데이터를 불러오지 못했습니다.:', error);
        }
    },
}));

