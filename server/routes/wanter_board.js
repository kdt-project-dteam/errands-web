const express = require("express");
const router = express.Router();
const wanter_board = require("../controller/Cwanter_board");

// /wanter 전체 게시판 불러오기
router.get("/", wanter_board.read_wanter_board);

// /wanter/mainWanter 메인 화면에 마감 임박순으로 상위5개 불러오기
router.get("/mainWanter", wanter_board.read_few_wanter_board);

// /wanter/:boardId 게시판 상세페이지
router.get("/:boardId", wanter_board.read_one_wanter_board);

// /wanter 게시판 생성하기
router.post("/", wanter_board.create_wanter_board);

// /wanter/:boardId 게시판 수정
router.patch("/:boardId", wanter_board.update_wanter_board);

// /wanter/:boardId 게시판 삭제
router.delete("/:boardId", wanter_board.delete_wanter_board);

// /wanter/:boardId/hit 게시판 조회수 올리기
router.post("/:boardId/hit", wanter_board.hit_wanter_board);

// /wanter/:boardId/like 게시판 좋아요 올리기
router.post("/:boardId/like", wanter_board.wanter_board_like);

// /wanter/:boardId/done 구인글에 대하여 완료여부
router.patch("/:boardId/done", wanter_board.done_wanter_board);

// search
router.get("/search/:boardType/:optionValue", wanter_board.search_board);

module.exports = router;
