const express = require("express");
const router = express.Router();
const user_info = require("../controller/Cuser_info");

const multer = require("multer");
const path = require("path");
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "../client/public/userImg/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, Date.now() + ext);
    },
  }),
  limits: { fileSize: 1 * 1024 * 1024 }, // 1mb제한해둠
});

// /user/login 로그인
router.post("/login", user_info.user_login);

// /user/register 회원가입
router.post("/register", user_info.user_register);

// /user/checkId 아이디 중복여부
router.post("/checkId", user_info.user_check_id);

// /user/checkName 닉네임 중복여부
router.post("/checkName", user_info.user_check_name);

// /user/logout
router.post("/logout", user_info.user_logout);

// /user/:user 회원 탈퇴
router.delete("/:user", user_info.user_withdraw);

// /user/:user 회원 정보 수정
router.patch("/user/:user", user_info.user_update);

// /user 회원 정보 받아오기
router.get("/", user_info.user_list);

// /user/mainUser
router.get("/mainUser", user_info.user_main);

// /user/:user 유저가 입력한 정보 받아오기
router.get("/:user", user_info.user_detail);

// /user/:user/like
router.post("/:user/like", user_info.user_like);

// /user/wanter|helper  유저가 작성한 목록보기
router.post("/wanter", user_info.user_write_wanter);

router.post("/helper", user_info.user_write_helper);

// /user/:user/img 프로필 이미지 저장
router.post(
  "/:user/img",
  uploadDetail.single("user_img", user_info.set_user_img)
);

module.exports = router;
