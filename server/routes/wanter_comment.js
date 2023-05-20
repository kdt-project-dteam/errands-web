const express = require("express");
const router = express.Router();
const wanter_comment = require("../controller/Cwanter_comment");

// /wanter/:boardId/comment 게시판 별 댓글 불러오기
router.get("/:boardId/comment", wanter_comment.read_wanter_comment);

// /wanter/:boardId/comment 댓글 생성
router.post("/:boardId/comment", wanter_comment.create_wanter_comment);

// /wanter/:boardId/comment/:comment 댓글 수정
router.patch(
  "/:boardId/comment/:commentId",
  wanter_comment.update_wanter_comment
);

// /wanter/:boardId/comment/:comment 댓글 삭제
router.delete(
  "/:boardId/comment/:commentId",
  wanter_comment.delete_wanter_comment
);

module.exports = router;
