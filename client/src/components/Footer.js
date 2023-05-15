import React from "react";
import "../css/footer.scss";

export default function Footer() {
  return (
    <>
      <div className="Footer">
        <div className="Footer1">
          <div>심부릉</div>
          <div>개인정보처리방침</div>
          <div>이용약관</div>
          <div>고객센터</div>
        </div>
        <hr />
        <div className="Footer2">
          <div>
            (주)심부릉 | 대표 : 홍길동 | 사업자 번호 : 123-45-6789 | 통신 판매업
          </div>
          <div>전화번호 : 070-1234-5678</div>
          <div>주소 : 서울특별시 마포구</div>
        </div>
      </div>
    </>
  );
}
