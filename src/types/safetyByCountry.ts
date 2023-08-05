
// 타입 정의 store

// 나라별 기본정보 데이터 타입 
// 이 데이터들만 키값들이 달라서 타입 좁히기 X
export  interface CountryInfoList {
        basic: string; // 기본 정보 (예: "Location: Southeast Asia, 65 degrees east longitude, 33 degrees north latitude\nㅇ Capital: Kabul\nㅇ Area: 652,000 km (three times the size of the Korean Peninsula)\n...")
        continent: string; // 대륙 정보 (예: "Asia/Pacific")
        countryEnName : string; // 나라 영어 이름
        countryName: string; // 나라의 한글 이름 (예: "아프가니스탄")
        id: number; // 나라의 고유 ID (예: 284)
        imgUrl: string; // 이미지 URL
}


// 공통된 타입 선언해서 사용 - 타입 재사용
type CommonDataType  = {
        continent_nm: string;
        country_nm: string;
        title : string;
        txt_origin_cn: string;
        written_dt: string;
}

// 나라별 안전공지 데이터 타입
export interface SafeByCountryList extends CommonDataType {
        ctgy_nm : string;
}

// 나라별 현지 연락처 데이터 타입
export interface ContactList extends CommonDataType {
        contact_remark: string; 
};

// 출국전 외교부 공지사항 데이터 타입
export interface NoticeList extends CommonDataType{
        file_download_url : string;

}

// 특별여행경보 데이터 타입
export interface SpecialTripList extends CommonDataType {
        dang_map_download_url: string;
        evacuate_rcmnd_remark: null | string;
        flag_download_url: string;
        map_download_url: string;
        region_ty: null | string;
}

// 입국허가 데이터 타입
export interface PermitList extends CommonDataType {
        dplmt_pspt_visa_cn: string;
        gnrl_pspt_visa_cn: string;
        have_yn: string;
        nvisa_entry_evdc_cn: string;
        remark: string;
}