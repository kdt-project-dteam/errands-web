import "../css/backgroundImage.scss";
export default function FirstPage() {
  return (
    <>
      <div className="backgroundImage">
        <img src="/img/backgroundImage.jpg" alt="배경사진"></img>
        <div className="errand">
          <div className="title">심부릉</div>
          <div className="explain">
            <div>심부릉을 통해 심부름을 빠르고 안전하게 실시하세요!</div>
            <div>빠른 심부름 서비스</div>
            <button>
              <a href="/main">바로가기</a>
            </button>
          </div>
        </div>
      </div>
      <div className="ourService">
        <div className="Title">Our Service</div>
        <div className="Service">
          <img className="img1" src="/img/img1.png" alt="Photo" />
          <div className="content">
            <div className="innerContent1">심부릉의 편리함</div>
            <div className="innerContent2">
              몸이 불편거나 해야할 일을 수행할 수 없을 때, 심부릉이
              해결해줍니다. 일과 행복을 함께 즐길 수 있는 심부릉의 특별함을
              느껴보세요!
            </div>
          </div>
        </div>
        <div className="Service">
          <img className="img2" src="/img/img2.jpg" alt="Photo" />
          <div className="content">
            <div className="innerContent1">심부릉의 특별함</div>
            <div className="innerContent2">
              심부릉은 심부름 글 하나하나를 놓치지 않기 위해 마감기한이 얼마
              남지 않은 심부름글은 따로 제공해주는 서비스를 운영하고 있습니다.
              심부릉을 통해 심부름을 놓치지 마세요!
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
