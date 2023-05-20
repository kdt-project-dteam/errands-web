![image](https://github.com/kdt-project-dteam/errands-web/assets/96116158/1c838431-7d9c-46c6-bdc2-77c1041dc274)

# 풀스택 웹 프로젝트 - 심부릉🚗

Live Link : [http://52.62.33.115/](http://52.62.33.115/)

Github Repository : https://github.com/kdt-project-dteam/errands-web

## 심부름 커뮤니티 플랫폼

### 개요

몸이아프거나 거동이불편하거나 현재 해야하는 일을 진행하기 힘든 사람들을 위한 **커뮤니티 플랫폼**

---

### 페이지 사용 및 기능 영상

**소개** 페이지, **메인** 페이지

**AOS 라이브러리** 사용하여 애니매이션 구현

**Custom Card Design**

![image](https://github.com/kdt-project-dteam/errands-web/assets/96116158/f5e17ea4-c832-46c7-9cdd-0facc7cad2a7)

**게시글 목록 조회**, **페이지네이션** 구현

r**edux store에 저장된 게시글 배열** 슬라이싱후 페이지네이션 구현

![image](https://github.com/kdt-project-dteam/errands-web/assets/96116158/ece6d372-9799-4b22-8eb1-b67b43774b88)

게시판 **글 쓰기** 기능

**다음 주소 찾기 Open API** 사용

![ezgif.com-video-to-gif (3).gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/095cf8ca-f91a-41da-81e4-29b1b424234a/ezgif.com-video-to-gif_(3).gif)

유저 목록 **조회 및 추천** 기능

**API DOCS** 참고 백엔드 로직 연결

![ezgif.com-video-to-gif (4).gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b0443b75-f430-4be8-8f61-14a648ea2876/ezgif.com-video-to-gif_(4).gif)

**프로필 사진 변경** 기능

**multer**를 이용하여 **react public 폴더**에 사진 업로드

**DB에 저장된 public 경로 바탕**으로 사진 랜더링

![ezgif.com-video-to-gif (5).gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/61d79fd3-e4a3-4443-9d9e-41c1adaa114c/ezgif.com-video-to-gif_(5).gif)

**404 페이지, 마이페이지 본인 작성글 조회, 회원탈퇴** 기능

**react-router-dom 사용**, 페이지 라우팅 구현

![ezgif.com-video-to-gif (6).gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d6f116e7-d5bb-4b4d-a396-1953c8677d18/ezgif.com-video-to-gif_(6).gif)

**게시판 상세 조회, Kakao Map AP**I 사용

**주소찾기 Open AP**I를 사용하여 **DB**에 저장된 데이터 ex) 서울시 강남구 강남대로 324-2

**Kakao Map API**를 사용하여 **String 데이터**를 **좌표로 Parsing**후 지도에 마커표시 

![ezgif.com-video-to-gif (7).gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9c24927d-7e9d-4596-96c5-b5bd7c84bde3/ezgif.com-video-to-gif_(7).gif)

**댓글** 기능

**게시글 테이블**과 **댓글 테이블** 분리 및 **moment.js** 활용 **timestamp 통일**

![ezgif.com-video-to-gif (8).gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2b07fa7a-8e59-460d-92de-95a3802ee39a/ezgif.com-video-to-gif_(8).gif)

### 팀 내 역할

- 기본적인 **아키텍쳐 설계**
- 프론트엔드 **redux store 로직 작성 및 전역상태관리**
- **주소찾기 API, 카카오 MAP, 카카오 SocialLogin, 외부 API 연동작업**
- **UI 구상 및 DB데이터 화면에 랜더**
- **팀 노션 정리**

### 일일 개발 내역 : 프론트엔드

- 5/2 **기본 폴더구조, MVC백엔드 폴더구성** 후 github에 organization 생성
- 5/3 메인페이지 **레이아웃 구성 및 노션** 작성
- 5/4 **redux-thunk로 비동기처리, 메인페이지 비동기로직** 연결
- 5/5 **게시판 ui 수정 및 재배치** 메인페이지 레이아웃 재구성
- 5/6 **redux 구조 재배치 및 게시판 crud 기능구현**, **게시판 상세페이지** 작업.
- 5/8 **유저랭킹페이지 구성, 로컬스토리지 로그인정보** 저장
- 5/10 sweetalert2 도입 및 **페이지 redux 스토어** 연결
- 5/11 메인페이지 레이아웃 재구성 및 재배치, **조회수, 추천수 api 연동** 작업
- 5/12 **Kakao map api, Kakao Login api 연결 및 회원가입 정보 DB연동**
- 5/13 메인페이지 카드 **디자인 변경 , 반응형 작업, 게시물 삭제** 구현
- 5/14 **최종 확인**작업

---

### ERD 모형도

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/eb4d44dd-0614-4809-8a09-240df82b8dfa/Untitled.png)

### 페이지 흐름도

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1f0a559d-efbc-4300-9108-c6c4f476b84b/Untitled.png)

## 사용 기술
<div align=left>
  FrontEnd
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=react&logoColor=white">
  <br/>
  BackEnd
  <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"> 
<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
  <br/>
  server
  <img src="https://img.shields.io/badge/amazonaws-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white">
<img src="https://img.shields.io/badge/nginx-009639?style=for-the-badge&logo=amazonaws&logoColor=white">
  </div>
  
### Frontend

- Reactjs
- redux-toolkit ( 상태관리 )
- redux-thunk ( 비동기처리를 전역상태관리하기 위해 도입 )
- react-router-dom
- sass
- axios ( 비동기 통신 )
- moment js ( 시간포맷을 일치시키기 위해 사용 )
- react-loader-spinner ( 로딩처리 위한 라이브러리 )
- kakao map api ( 카카오 지도 )
- kakao login api ( 카카오 로그인 )
- daum-postcode ( 카카오 우편번호 api )
- AOS ( 애니메이션 라이브러리 )
- SwiperJS ( 슬라이드 라이브러리 )
- SweetAlert2 ( alert 창 라이브러리 )

### Backend

- Nodejs express (MVC Pattern)
- Mysql
- Sequelize
- cors
- Session
- multer

## 페이지 흐름도
![image](https://github.com/kdt-project-dteam/errands-web/assets/96116158/554e8ae8-7173-417d-85cf-c159052523e2)

## DB ERD 모형도
![image](https://github.com/kdt-project-dteam/errands-web/assets/96116158/a4549957-0d3c-4ae4-9784-4f008f27202c)

## api docs
간략하게 정리해서 올리기
https://www.notion.so/6b5dfbba146246c0bae01cc3b77f67f9?pvs=4

## 2주간 개인 개발 내역 정리
간략하게 정리해서 올리기
https://www.notion.so/84af8d9e88d844d4a3b943145f1b92d5?pvs=4




