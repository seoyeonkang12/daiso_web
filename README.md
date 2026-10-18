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
- **주요 기술 :** React, React Router DOM

## 🛠️ 기술 스택

- **Frontend :** HTML, CSS, JavaScript, React
- **Routing :** React Router DOM
- **State Management :** Redux Toolkit, React Redux
- **Styling :** styled-components, Bootstrap, React Bootstrap
- **Library :** Swiper, React Icons

## 🎯 프로젝트 목표

- React Router를 활용한 페이지 구성 및 라우팅 구현
- Redux Toolkit 기반 장바구니·위시리스트 상태 관리
- 상품 데이터 분리 및 사용자 인터랙션 구현

## ✨ 주요 기능

### 1. 메인 페이지
- 메인 비주얼 및 주요 상품 콘텐츠 구성
- 다이소 PICK, 카테고리 랭킹, 신상품 등 주요 영역 배치
- 주요 상품 페이지로 연결되는 탐색 동선 구성

<!-- 메인 페이지 스크린샷 삽입 -->

### 2. 상품 목록 및 카테고리
- 카테고리별 상품 목록 구성
- 상품 카드 컴포넌트를 활용한 반복 UI 구현
- 신상품 및 추천 상품 콘텐츠 제공

### 3. 상품 상세 페이지
- 상품 이미지 전환 및 상세 정보 펼치기
- 리뷰 정렬 및 페이지네이션 구현
- 배송 유형 선택 및 안내 정보 제공

<!-- 상세 페이지 GIF 삽입 -->

### 4. 장바구니 및 위시리스트
- 상품 추가·삭제 및 수량 변경
- 전체·개별 상품 선택 및 일괄 삭제
- 선택 상품 기준 결제 금액과 배송비 계산

<!-- 장바구니 추가 삭제 GIF 삽입 -->

### 5. 로그인 및 페이지 이동
- React Router를 활용한 페이지 간 이동
- sessionStorage 기반 로그인 상태 확인 및 로그아웃

## 💻 핵심 코드 구현

### 1. Redux Toolkit을 활용한 장바구니 상태 관리

Redux Toolkit을 활용해 장바구니 상품을 관리하고, 동일 상품의 중복 추가를 방지하도록 구현했습니다.

**💡 셀프 코드 리뷰**
- `findIndex()`로 동일 상품이 있는지 확인
- 기존 상품이면 수량 증가
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

장바구니에서 선택한 상품의 가격과 수량을 기준으로 상품 금액과 배송비를 계산하도록 구현했습니다.

**💡 셀프 코드 리뷰**
- `includes()`로 선택 상품을 판별하고 `reduce()`로 금액 합산
- 3만 원 이상 구매 시 배송비 무료 처리
- 상품 금액과 배송비를 합산해 최종 결제 금액 계산

~~~javascript
const totalProductPrice = cartItems.reduce((sum, item) => {
  if(checkedIds.includes(item.id)) {
    return sum + ((item.price || 0) * (item.count || 0));
  } return sum;
}, 0);

const deliveryPrice = totalProductPrice >= 30000 || totalProductPrice === 0 ? 0 : 3000;
const totalPayPrice = totalProductPrice + deliveryPrice;
~~~

### 3. React Router를 활용한 상품 상세 페이지

URL의 상품 ID를 가져와 해당 상품의 데이터를 연결하고, 상품별 상세 페이지를 구성했습니다.

**💡 셀프 코드 리뷰**
- `useParams()`로 URL의 상품 ID 가져오기
- `find()`로 해당 ID와 일치하는 상품 데이터 탐색
- `useState()`와 `useRef()`를 활용해 상세 페이지의 인터랙션 구현

~~~javascript
const {id} = useParams();

const product = productData.products?.find(
  (item) => item.id === parseInt(id)
);
~~~

### 4. 상품 데이터 분리 및 관리

상품 정보와 카테고리 데이터를 `productData.js`로 분리해 여러 페이지에서 활용할 수 있도록 구성했습니다.

**💡 셀프 코드 리뷰**
- 상품 정보와 카테고리 데이터를 별도 파일로 관리
- 상품별 이미지, 가격, 리뷰 등 필요한 데이터 구성
- 상품 ID를 기준으로 상세 페이지 데이터 연결

~~~javascript
const productData = {
  category: [
    {id: 'single', label: '자취 필수템'},
    {id: 'house', label: '집꾸미기 아이템'},
    {id: 'conven', label: '가성비 생활템'},
    {id: 'popular', label: '요즘 인기있는 아이템'},
  ],

  products: [
    {
      id: 1,
      category: ['single', 'clean'],
      image: process.env.PUBLIC_URL + '/images/clean_01.jpg', 
      title: '배수구망 시트 30매입',
      price: 1000,
      tags: ['택배', '픽업', '오늘'],
      date: '2026-04-28',
      sales: 4500,
      inventory: 45,
      likes: 666,
      shares: 28,
    },
  ],
};
~~~

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
│       ├── About.js
│       ├── Cart.js
│       ├── Category.js
│       ├── Home.js
│       ├── Login.js
│       ├── New.js
│       ├── Notice.js
│       ├── Pick.js
│       ├── ProductDetail.js
│       ├── Soldout.js
│       ├── Wish.js
│       ├── home.module.css
│       ├── store.js
│       ├── style.css
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   ├── index.js
└── package-lock.json
└── package.json
```

## 📝 프로젝트 회고

React Router를 활용해 여러 페이지를 구성하고, 상품 데이터를 각 화면에 연결하며 쇼핑몰의 페이지 구조와 데이터 흐름을 익혔습니다.

특히 Redux Toolkit으로 장바구니 상태를 관리하면서 상품 수량과 선택 여부에 따른 결제 금액이 일관되게 반영되도록 구현했습니다. 이를 통해 공유 상태의 변화가 화면과 계산 결과에 반영되는 과정을 이해하고, 데이터 흐름을 고려한 기능 구현 경험을 쌓았습니다.
