const express = require("express");
const router = express.Router();
const helper_comment = require("../controller/Chelper_comment");

// /helper/:boardId/comment 각 게시판 별 댓글 불러오기
router.get("/:boardId/comment", helper_comment.read_helper_comment);

// /helper/:boardId/comment 각 게시판 별 댓글달기
router.post("/:boardId/comment", helper_comment.create_helper_comment);

// /helper/:boardId/comment/:commentId 댓글 수정하기
router.patch(
  "/:boardId/comment/:commentId",
  helper_comment.update_helper_comment
);

// /helper/:boardId.comment/:commentId 댓글 삭제하기
router.delete(
  "/:boardId/comment/:commentId",
  helper_comment.delete_helper_comment
);

module.exports = router;
