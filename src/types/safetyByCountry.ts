
// 타입 정의 store
export  interface CountryInfo {
    basic: string; // 기본 정보 (예: "Location: Southeast Asia, 65 degrees east longitude, 33 degrees north latitude\nㅇ Capital: Kabul\nㅇ Area: 652,000 km (three times the size of the Korean Peninsula)\n...")
    continent: string; // 대륙 정보 (예: "Asia/Pacific")
    countryEnName: string; // 나라의 영문 이름 (예: "Afghanistan")
    countryName: string; // 나라의 한글 이름 (예: "아프가니스탄")
    id: number; // 나라의 고유 ID (예: 284)
    imgUrl: string; // 이미지 URL
    wrtDt: string; // 작성 날짜 (예: "2011-08-08")
}
