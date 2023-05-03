const express = require("express");
const router = express.Router();
const controller = require("../controller/Cerrands");

// POST - register
router.post("/register", controller.register);

// POST - Login
router.post("/login", controller.loginUser);

// GET - show all boards
router.get("/boards", controller.showAllBoards);

// POST - create board
router.post("/board", controller.createBoard);

// PATCH - board
router.patch("/board/:board_id", controller.updateBoard);

// DELETE - board
router.delete("/board/:board_id", controller.deleteBoard);

// GET - show all meeting
router.get("/meetings", controller.showAllMeetings);

// POST - create meeting
router.post("/meeting", controller.createMeeting);

// PATCH - meeting
router.patch("/meeting/:meeting_id", controller.updateMeeting);

// DELETE - meeting
router.delete("/meeting/:meeting_Id", controller.deleteMeeting);

// GET - show comment
router.get("/comments/:board_id", controller.showComment);

// POST - create comment
router.post("/comment/:board_id", controller.createComment);

// PATCH - comment
router.patch("/comment/:comment_id", controller.updateComment);

// DELETE - comment
router.delete("/comment/:comment_id", controller.deleteComment);

module.exports = router;
