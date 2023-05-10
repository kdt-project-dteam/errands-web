const Errands = require("../models");
const { Op } = require("sequelize");

// ======= Wanter_board =======
// 매인페이지에 5개 보여주기 deadline순 5개
exports.read_few_wanter_board = async (req, res) => {
  try {
    const result = await Errands.Wanter_board.findAll({
      order: [["wanter_board_dead_line", "desc"]],
      limit: 5,
    });
    console.log(req.session);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};

// 전체 다 보여주기
exports.read_wanter_board = async (req, res) => {
  try {
    const result = await Errands.Wanter_board.findAll({
      order: [["wanter_board_date", "asc"]],
    });
    res.send(result);

    //
  } catch (err) {
    res.send(err);
  }
};

// 게시물 하나만 보여주기
exports.read_one_wanter_board = async (req, res) => {
  try {
    const result = await Errands.Wanter_board.findOne({
      where: { wanter_board_id: { [Op.eq]: req.params.boardId } },
    });
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};

// 게시물 생성
exports.create_wanter_board = async (req, res) => {
  try {
    if (!req.session.user_info) {
      res.send("로그인하시오");
    } else {
      const [result] = await Errands.Wanter_board.create({
        wanter_board_writer: req.body.user_name,
        wanter_board_title: req.body.wanter_board_title,
        wanter_board_content: req.body.wanter_board_content,
        wanter_board_place: req.body.wanter_board_place,
        wanter_board_dead_line: req.body.wanter_board_dead_line,
        wanter_board_done: false,
      });
      res.send(result);
    }
  } catch (err) {
    res.send(err);
  }
};

// 게시물 수정
exports.update_wanter_board = async (req, res) => {
  try {
    if (!req.session.user_info) {
      res.send("로그인하시오");
    } else {
      const auth = await Errands.Wanter_board.findOne({
        attributes: ["wanter_board_writer"],
        where: { wanter_board_id: { [Op.eq]: req.params.boardId } },
      });
      if (
        auth.dataValues.wanter_board_writer !== req.session.user_info_user_name
      ) {
        res.send("작성자만 수정가능");
      } else {
        const [result] = Errands.Wanter_board.update(
          {
            wanter_board_title: req.body.wanter_board_title,
            wanter_board_content: req.body.wanter_board_place,
            wanter_board_place: req.body.wanter_board_place,
            wanter_board_done: req.body.done,
          },
          { where: { wanter_board_id: { [Op.eq]: req.params.boardId } } }
        );
        if (result === 0) {
          return res.send(false);
        }
        res.send(true);
      }
    }
  } catch (err) {
    res.send(err);
  }
};

// 게시물 삭제
exports.delete_wanter_board = async (req, res) => {
  try {
    if (!req.session.user_info) {
      res.send("로그인하세욤");
    } else {
      const auth = await Errands.Wanter_board.findOne({
        attributes: ["wanter_board_writer"],
        where: { wanter_board_id: { [Op.eq]: req.params.boardId } },
      });
      if (
        auth.dataValues.wanter_board_writer !== req.session.user_info.user_name
      ) {
        res.send("작성자만 삭제 가능");
      } else {
        const result = Errands.Wanter_board.destroy({
          where: {
            wanter_board_id: { [Op.eq]: req.params.boardId },
          },
        });
        if (!result) {
          return res.send(false);
        }
        res.send(true);
      }
    }
  } catch (err) {
    res.send(err);
  }
};

// 조회수 up
exports.hit_wanter_board = async (req, res) => {
  try {
    const result = await Errands.Wanter_board.increment(
      { wanter_board_hit: 1 },
      { where: { wanter_board_id: { [Op.eq]: req.params.boardId } } }
    );
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};
