const express = require("express");
const router = express.Router();
const helper_board = require("../controller/Chelper_board");

// /helper/mainHelper 메인페이지 게시판 최신순 5개 보여주기
router.get("/mainHelper", helper_board.read_few_helper_board);

// /helper 전체 게시판 불러오기
router.get("/", helper_board.read_helper_board);

// /helper 게시판 생성
router.post("/", helper_board.create_helper_board);

// /helper/:boardId 상세페이지
router.get("/:boardId", helper_board.read_one_helper_board);

// /helper/:boardId 게시판 수정
router.patch("/:boardId", helper_board.update_helper_board);

// /helper/:boardId 게시판 삭제
router.delete("/:boardId", helper_board.delete_helper_board);

// /helper/:boardId/hit 게시판 조회수 올리기
router.post("/:boardId/hit", helper_board.hit_helper_board);

// /helper/:boardId/like 게시판 좋아요 올리기
router.post("/:boardId/like", helper_board.helper_board_like);

module.exports = router;
