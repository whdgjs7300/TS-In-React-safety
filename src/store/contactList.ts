import { create } from 'zustand';
import axios from 'axios';
import { ContactList } from '../types/safetyByCountry';

const API_KEY=process.env.REACT_APP_API_KEY

interface Contact {
    contactList: ContactList[]; // 현재 any로 설정되어 있으므로 실제 데이터 타입에 맞게 수정해야 합니다.
    loading : boolean;
    Action: (searchContry  :string) => Promise<void>; // 비동기 함수 타입 Promise객체
}


// 비동기 데이터를 가져오는 로직(공공데이터 API - 국가별 연락처 정보) 
// Home화면의 검색결과를 인자값으로 받아와 해당 국가명 호출 함수

export const useMyStore = create<Contact>((set)=>({
    contactList: [],
    loading : true,
    Action: async (searchContry) => {
        // 비동기 데이터 가져오는 로직을 구현합니다.
        try {
            // 항상 set을 통해 상태값 업데이트 해야함
            set({loading : true})

            const response = await axios.get(`https://apis.data.go.kr/1262000/LocalContactService2/getLocalContactList2?serviceKey=${API_KEY}&returnType=JSON&numOfRows=10&cond[country_nm::EQ]=${searchContry}&pageNo=1`);
            const data = response.data.data;
    
            set({ contactList: data});
            set({ loading: false });
        } catch (error) {
            set({ loading: false });
            console.error('데이터를 불러오지 못했습니다.:', error);
        }
    },
}));

