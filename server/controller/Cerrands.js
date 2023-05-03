const Errands = require("../models");
// Access => Errands.UserInfo

// User related
exports.register = (req, res) => {};

exports.loginUser = (req, res) => {
  Errands.UserInfo.findOne({
    where: {
      id: req.body.userid,
      pw: req.body.pw,
    },
  }).then((result) => {
    console.log(result);
  });
};

// Board
exports.showAllBoards = (req, res) => {
  //   Errands.Board.findAll().then((result) => {
  //   });
};

exports.createBoard = (req, res) => {};

exports.updateBoard = (req, res) => {};

exports.deleteBoard = (req, res) => {};

// Meeting
exports.showAllMeetings = (req, res) => {};

exports.createMeetings = (req, res) => {};

exports.updateMeeting = (req, res) => {};

exports.deleteMeeting = (req, res) => {};

// Comment
exports.showAllComment = (req, res) => {};

exports.createComment = (req, res) => {};

exports.updateComment = (req, res) => {};

exports.deleteComment = (req, res) => {};
