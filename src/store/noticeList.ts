import { create } from 'zustand';
import axios from 'axios';
import { NoticeList } from '../types/safetyByCountry';


const API_KEY=process.env.REACT_APP_API_KEY
// 사용하는 인터페이스와 가져오는 데이터 타입 네이밍이 같으면 오류남..
interface Notice {
    noticeList: NoticeList[]; // 현재 any로 설정되어 있으므로 실제 데이터 타입에 맞게 수정해야 합니다.
    loading : boolean;
    Action: () => Promise<void>; // 비동기 함수 타입 Promise객체
}


// 비동기 데이터를 가져오는 로직(공공데이터 API - 출국전 공지사항) 


export const useMyStore = create<Notice>((set)=>({
    noticeList: [],
    loading : true,
    Action: async () => {
        // 비동기 데이터 가져오는 로직을 구현합니다.
        try {
            set({loading : true})
            const response = await axios.get(`https://apis.data.go.kr/1262000/NoticeService2/getNoticeList2?serviceKey=${API_KEY}&returnType=JSON&numOfRows=10&pageNo=1`);
            const data = response.data.data;
        // 검색결과가 1개가 나올 땐 배열로 반환하지 않아 map 함수 실행 오류를 방지하기 위한 변수
            const dataArray = Array.isArray(data) ? data : [data];
        
            set((state) => ({ ...state, noticeList: data }));
            set({ loading: false });
        } catch (error) {
            set({ loading: false });
            console.error('데이터를 불러오지 못했습니다.:', error);
        }
    },
}));
