
// 타입 정의 store

// 나라별 기본정보 데이터 타입 
export  interface CountryInfo {
        basic: string; // 기본 정보 (예: "Location: Southeast Asia, 65 degrees east longitude, 33 degrees north latitude\nㅇ Capital: Kabul\nㅇ Area: 652,000 km (three times the size of the Korean Peninsula)\n...")
        continent: string; // 대륙 정보 (예: "Asia/Pacific")
        countryEnName: string; // 나라의 영문 이름 (예: "Afghanistan")
        countryName: string; // 나라의 한글 이름 (예: "아프가니스탄")
        id: number; // 나라의 고유 ID (예: 284)
        imgUrl: string; // 이미지 URL
        wrtDt: string; // 작성 날짜 (예: "2011-08-08")
}

// 나라별 안전공지 데이터 타입
export interface SafeByCountryList {
        continent_cd: string;
        continent_eng_nm: string;
        continent_nm: string;
        country_eng_nm: string;
        country_iso_alp2: string;
        country_nm: string;
        ctgy_nm: string;
        file_download_url: string;
        file_path: string | null;
        sfty_notice_id: string;
        title: string;
        txt_origin_cn: string;
        wrt_dt: string; // "2023-06-09" 형식의 날짜 데이터
}
