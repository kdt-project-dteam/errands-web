const express = require("express");
const router = express.Router();
const controller = require("../controller/Cerrands");

// /api/xxxx
// ======= User sign =======
router.post("/login", controller.userLogin);

router.post("/register", controller.userRegister);

router.post("/logout", controller.userLogout);

// router.post("/checkId", controller.checkUserId);

// router.post("/checkName", controller.checkUserName);

// ======= Wanter_board =======
router.get("/mainWanter", controller.read_few_wanter_board);

router.get("/wanter", controller.read_wanter_board);

router.get("/wanter/:boardId", controller.read_one_wanter_board);

router.post("/wanter/:boardId", controller.create_wanter_board);

router.patch("/wanter/:boardId", controller.update_wanter_board);

router.delete("/wanter/:boardId", controller.delete_wanter_board);

// ======= Wanter_comment =======
router.get("/wanter/:boardId/comment", controller.read_wanter_comment);

router.post(
  "/wanter/:boardId/comment/:commentId",
  controller.create_wanter_comment
);

router.patch(
  "/wanter/:boardId/comment/:commentId",
  controller.update_wanter_comment
);

router.delete(
  "/wanter/:boardId/comment/:commentId",
  controller.delete_wanter_comment
);

// ======= Helper_board =======
router.get("/mainHelper", controller.read_few_helper_board);

router.get("/helper", controller.read_helper_board);

router.get("/helper/:boardId", controller.read_one_helper_board);

router.post("/helper/:boardId", controller.create_helper_board);

router.patch("/helper/:boardId", controller.update_helper_board);

router.delete("/helper/:boardId", controller.delete_helper_board);

// ======= Helper_comment =======
router.get("/helper/:boardId/comment", controller.read_helper_comment);

router.post(
  "/helper/:boardId/comment/:commentId",
  controller.create_helper_comment
);

router.patch(
  "/helper/:boardId/comment/:commentId",
  controller.update_helper_comment
);

router.delete(
  "/helper/:boardId/comment/:commentId",
  controller.delete_helper_comment
);

// ======= Notice Board =======
router.get("/mainNotice", controller.read_few_notice);

router.get("/notice", controller.read_notice);

router.get("/notice/:boardId", controller.read_one_notice);

router.post("/notice/:boardId", controller.create_notice);

router.patch("/helper/:boardId", controller.update_notice);

router.delete("/notice/:boardId", controller.delete_notice);

module.exports = router;
