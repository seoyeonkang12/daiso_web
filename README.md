# 🛒 DAISO — 다이소 쇼핑몰 리뉴얼

> **다이소, 발견하는 재미**
>
> 상품 탐색부터 장바구니, 위시리스트까지 편리하게 이용할 수 있도록 제작한 다이소 쇼핑몰 리뉴얼 프로젝트입니다. React를 활용해 페이지를 구성하고, 상품 카테고리와 신상품 등 주요 콘텐츠를 효율적으로 탐색할 수 있도록 UI를 설계했습니다.

🔗 [DAISO 웹사이트 바로가기](https://seoyeonkang12.github.io/daiso_web/)

## 📌 프로젝트 개요

다이소 쇼핑몰의 상품 탐색 경험을 개선하는 것을 목표로 진행한 웹사이트 리뉴얼 프로젝트입니다. 상품과 콘텐츠를 목적에 따라 구분하고, 주요 페이지를 직관적으로 탐색할 수 있도록 화면을 구성했습니다.

- **프로젝트 유형 :** 개인 프로젝트
- **개발 기간 :** 2026.09 ~ 2026.09 (약 8일)
- **담당 역할 :** 기획, UI 디자인, React 개발
- **주요 기술 :** React, React Router, styled-components, Bootstrap

## 🛠️ 기술 스택

- **Frontend :** React, JavaScript, HTML, CSS
- **Routing :** React Router DOM
- **State Management :** Redux Toolkit, React Redux
- **Styling :** styled-components, Bootstrap, React Bootstrap
- **UI Library :** Swiper, React Icons
- 
## 🎯 프로젝트 목표

- React Router를 활용한 페이지 구성 및 라우팅 구현
- Redux Toolkit 기반 장바구니·위시리스트 상태 관리
- 상품 데이터 분리 및 사용자 인터랙션 구현

## ✨ 주요 기능

### 1. 메인 페이지
- 메인 비주얼 및 주요 상품 콘텐츠 구성
- 다이소 PICK, 카테고리 랭킹, 신상품 등 주요 영역 배치
- 주요 상품 페이지로 연결되는 탐색 동선 구성

### 2. 상품 목록 및 카테고리
- 카테고리별 상품 목록 구성
- 상품 카드 컴포넌트를 활용한 반복 UI 구현
- 신상품 및 추천 상품 콘텐츠 제공

### 3. 상품 상세 페이지
- 상품 이미지 전환 및 상세 정보 펼치기
- 리뷰 정렬 및 페이지네이션 구현
- 배송 유형 선택 및 안내 정보 제공

### 4. 장바구니 및 위시리스트
- 상품 추가·삭제 및 수량 변경
- 전체·개별 상품 선택 및 일괄 삭제
- 선택 상품 기준 결제 금액과 배송비 계산

### 5. 로그인 및 페이지 이동
- React Router를 활용한 페이지 간 이동
- sessionStorage 기반 로그인 상태 확인 및 로그아웃

## 💻 핵심 코드 구현

### 1. Redux Toolkit을 활용한 상태 관리

장바구니와 위시리스트 상태를 `Redux Toolkit`으로 관리하여 여러 페이지에서 상품 데이터를 공유하도록 구현했습니다.

**💡 셀프 코드 리뷰**
- `findIndex()`로 동일 상품이 있는지 확인
- 이미 담긴 상품이면 수량 증가
- 새 상품이면 배열 앞에 추가

~~~javascript
addItem(state, action) {
  const index = state.findIndex((findId)=>
  findId.id === action.payload.id);

  if(index > -1){
    state[index].count++;
  } else {
    state.unshift(action.payload);
  }
},
~~~

### 2. 선택 상품 기준 결제 금액 계산

선택한 상품만 합산하고, 결제 금액에 따라 배송비가 반영되도록 구현했습니다.

**💡 셀프 코드 리뷰**
- filter와 reduce를 활용한 선택 상품 금액 계산
- 전체 선택 및 개별 선택 상태 관리
- 30,000원 이상 무료배송, 미만 3,000원 배송비 적용

~~~
~~~

### 3. React Router를 활용한 상품 상세 페이지

URL의 상품 ID를 기준으로 상품 데이터를 연결하고, 상세 페이지 내 다양한 인터랙션을 구현했습니다.

**💡 셀프 코드 리뷰**
- useParams를 활용한 URL 파라미터 조회
- useState를 활용한 이미지 전환 및 상세 정보 표시
- useRef를 활용한 상세 정보·리뷰·배송 안내 영역 이동
- 리뷰 정렬 및 페이지네이션 구현



### 4. 상품 데이터 분리 및 관리

상품 정보, 카테고리, 배너, 상세 이미지, 리뷰 데이터를 productData.js에 분리하여 관리했습니다.

**💡 셀프 코드 리뷰**
- 상품 정보와 리뷰 데이터를 객체 및 배열로 구성
- process.env.PUBLIC_URL을 활용한 이미지 경로 관리
- 상품 ID를 기준으로 상세 페이지 데이터 연결



## 📂 프로젝트 폴더 구조

```text
daiso/
├── public/
│   ├── images/
├── src/
│   ├── components/
│       ├── Tab.js
│   ├── data/
│       ├── productData.js
│       ├── userData.js
│   ├── pages/
│       ├── Cart.js
│       ├── Category.js
│       ├── Home.js
│       ├── Login.js
│       ├── ProductDetail.js
│       ├── Wish.js
│       ├── home.module.css
│       ├── store.js
│       ├── style.css
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
└── package-lock.json
└── package.json
```

## 📝 프로젝트 회고

React 기반으로 쇼핑몰을 구현하며 페이지를 컴포넌트 단위로 나누고, 라우팅을 통해 화면을 구성하는 방법을 경험했습니다. 또한 상품 콘텐츠와 공통 UI를 구조화하며, 여러 페이지로 이루어진 웹사이트를 효율적으로 설계하는 과정의 중요성을 배웠습니다.
