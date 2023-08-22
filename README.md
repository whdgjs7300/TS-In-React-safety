# 전 세계 여행 정보 및 안전성 확인 웹사이트

## 프로젝트 링크
https://jongheons-countryinfo.netlify.app/


### 메인 이미지
<img width="827" alt="스크린샷 2023-08-06 오후 5 44 44" src="https://github.com/whdgjs7300/TS-In-React-safety/assets/112137464/28f8d284-821c-41d9-994f-8075d0e02b23">



## 프로젝트 설명

타입스크립트 적용 프로젝트 

타입스크립트의 타입 선언, 타입 확장, 타입 좁히기 

세계 국가별 기본정보와, 국가별 치안 및 안전 정보, 특별 여행 경보, 입국 절차 등 을 확인할 수 있는 웹 사이트 

### **■ 웹사이트 동작**

1. Home 화면 내에서 사용자가 원하는 나라 이름을 검색 및 클릭하여 정보 페이지로 이동할 수 있다.
2. 정보 확인 페이지는 기본정보, 공지사항, 입국허가, 안전공지, 현지연락, 특별여행 6개의 버튼으로 구성되어 있다.
3. 각 정보확인 페이지에서 원하는 정보를 얻을 수 있다.

---

### **■ 웹사이트 기능**

- 검색 별 나라 정보 API 호출
- React-Spring 을 이용한 메인 화면 타이틀 애니메이션 적용
- Router를 이용한 페이지 이동
- PrivateRouter를 이용한 조건부 컴포넌트 렌더링(검색한 나라가 많을 경우, 검색한 결과에 데이터가 없을 경우)

## 진행하는 과정에 어려웠던 점

1. 디바운스 최적화(검색 기능)

onChange 함수로 인해 검색창에 텍스트를 입력할 때마다 useEffect 내부에 Action 함수가 실행이 되어 무분별하게 API 호출을 하고 있었다. 

그래서 검색 후 딜레이를 줘 무분별한 API 호출을 막아야 겠다는 생각이 들어 구글링을 통해 Debounce를 활용 하는 법을 학습을 한 후 적용을 했다. 

라이브러리로 쉽게 사용하는 법도 있지만 직접 컴포넌트 화를 시켜 기능을 구현하였으며 적용을 한 결과 딜레이 시간 후에 마지막 검색 KeyWord의 Action 함수가 useEffect 내에서 동작 하였다. 

2. 타입스크립트 공통된 타입 선언 및 확장

공공데이터 API에서 6개의 각각의 다른 데이터 들을 호출을 해서 쓰고 있었는데 타입스크립트를 이용한 프로젝트가 처음이다보니 타입을 어떤 폴더에 어떻게 구성을 해야하며, 공통된 타입들은 재선언해서 재사용을 하고 싶었는데 구성에 어려움을 느꼈었다. 

현업에서 사용하는 타입스크립트라는 유뷰브 강의를 보며 6개의 데이터 중 공통된 key 값들의 타입을 새로 선언하여 extends를 이용하여 나머지 데이터 타입들에 상속받아 사용해 해결하였다.  

3. Private Router

라우터로 Country 페이지로 이동하기 전에 Private Router 컴포넌트를 만들어서 조건부 실행을 했다.

 홈 화면에서 나라이름을 검색한 후 버튼을 클릭하거나 Enter를 치고 나라 검색결과가 많으면 나라를 선택 할 수있는 컴포넌트, 텍스트가 빈값이거나, 결과 값이 없으면 “검색 결과가 없습니다”라고 표시하는 컴포넌트, 마지막으로 검색결과가 하나일 경우 6개의 정보를 얻을 수 있는 컴포넌트를 보여주려 했다. 

과정에서 컴포넌트가 재 로드 될 때 마다 비동기 호출의 실행이 되어 데이터의 초기값이 undefined가 떠 무분별하게 경고 창이 떴다가 데이터가 호출이 되면 사라지는 경우를 반복했다.

해결을 위해 로딩스피너를 활용하여 데이터가 호출이 될때까지 로딩 컴포넌트를 실행하였고 그 이후 다른 조건부렌더링이 실행되게 코드를 수정하여 문제를 해결 하였다.

### 진행을 하면서 느낀 점

타입스크립트의 엄격한 타입 시스템에 적응 하고자 강의를 듣고 바로 토이프로젝트를 개발하였다.

자바스크립트의 개발환경에 익숙하다 타입스크립트로 개발을 진행하다보니 처음에는 타입의 구조, 타입 시스템을 지원하는 라이브러리 등 사용과정에 어려움을 겪었지만 친절하게도(?) 타입스크립트 환경 내에서 에러를 바로바로 가르켜줘 하나하나 타입을 재선언 하고 수정하면서 감을 많이 잡을 수 있었던 좋은 경험이 된 프로젝트였다. 타입의 구성, 타입을 좁혀가는 과정이 매우 흥미롭게 다가온 경험을 했다.
