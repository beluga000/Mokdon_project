# Mokdon : 목돈 만들기 금융 플랫폼
<hr>
❓ Problem : 적금 및 예금 상품 정보는 찾을 수 있지만 내가 목표하는 목돈을 만들기 위해서는 어떤 상품을 가입해야하는지 알 수 없다.<br>
❗️ Idea : 금융권 내 적금 및 예금 상품을 사용자의 목표금액과 월 납입 가능 금액을 기반으로 알맞은 상품을 추천해주는건 어떨까?<br>
💯 Solution : 국민, 우리, 신한, 신협 등 금융권 내 적금 및 예금 데이터를 수집해서 사용자의 연령대, 자녀여부, 취약계층 여부 등 상황에 맞는 상품 추천과 함께 만기 예상금액과 세금 등 맞춤형 정보 제공
<br>
<br>


![스크린샷 2024-08-19 오후 6 47 59](https://github.com/user-attachments/assets/1375c53d-c500-4430-90d3-f5402f5f6fe9)




## 주요 기능
- 상품 조회 : 적금 및 예금 상품 조회
- 조건 검색 : 은행 / 기간 / 상품유형에 따라 원하는 상품 리스트업 가능
- 맞춤형 적금 추천 : 목표금액, 목표기간(필수입력) / 월 납입 가능 금액, 청년여부, 취약계층 여부, 자녀여부, 사업자여부, 군복무여부(선택입력) 등 입력된 정보를 바탕으로 최고금리 기준으로 상품 조합 제공
- 상품 만기 금액 계산 : 원금 합계, 세전 이자, 이자과세, 세후수령액 등 상품에 대한 모든 요소 계산
- 신용카드 조회 : 신한, 현대, 삼성, 국민, 롯데, 하나, 농협, 기업, BC 등 9개 카드사 신용카드 정보 제공
- 신용카드 조건 검색 : 카드사 / 전월실적 / 연회비 / 혜택 등 원하는 조건에 따른 신용카드 리스트업 가능

## 기술 스택
- Front
  - Javascript, VueJS, Quasar<br>
- Back
  - Go, Fiber
- DB
  - MongoDB

## 개발 기간
- 2024.06 ~ 2024.07
## ERD


![스크린샷 2024-08-19 오후 6 38 08](https://github.com/user-attachments/assets/bd9e3e4c-b63b-44d5-ae79-3020d4c37f98)


## 주요 서비스 화면

#### 적금 추천
<img width="1252" alt="mokdon2" src="https://github.com/user-attachments/assets/c76876eb-7920-4411-b292-4d7ca3c0c184">
<img width="1248" alt="mokdon3" src="https://github.com/user-attachments/assets/a403a3ca-ae4f-4b73-b3d4-9a311478cc6d">

#### 적금 조회
<img width="1422" alt="mokdon4" src="https://github.com/user-attachments/assets/488147df-b84b-4d28-8768-db60d689445f">
<img width="1421" alt="mokdon5" src="https://github.com/user-attachments/assets/9d3f1f44-cd06-419e-9c9f-bbd8df167837">
<img width="1418" alt="mokdon6" src="https://github.com/user-attachments/assets/d3762201-a1d6-4a22-b743-e32a3b830456">

#### 신용카드 조회
<img width="1425" alt="mokdon7" src="https://github.com/user-attachments/assets/0a736fb0-f530-437a-935e-d9fed12167d6">
<img width="1426" alt="mokdon8" src="https://github.com/user-attachments/assets/c68d41d4-fe3c-4670-86d7-4d8855ad14bc">
<img width="1421" alt="mokdon9" src="https://github.com/user-attachments/assets/4833365a-9717-4b8b-b65f-8b4e5e2059b9">
