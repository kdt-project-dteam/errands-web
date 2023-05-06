const Errands = require('../models');
const { Op } = require('sequelize');
// Access => Errands.User_info or Helper_board etc

// ======= User sign =======
// 로그인
exports.userLogin = async (req, res) => {
  try {
    const result = await Errands.User_info.findOne({
      where: {
        user_id: req.body.user_id,
        user_pw: req.body.user_pw,
      },
    });
    if (result != null) {
      console.log(result.dataValues.user_name);
      req.session.user_name = result.dataValues.user_name;
      req.session.user_type = result.dataValues.user_type;
      console.log(req.session.user_name);
      console.log(req.session.user_type);
      res.send(true);
    } else {
      res.send(false);
    }
  } catch (err) {
    res.send(err);
  }
};

// ID 중복 검사
exports.checkUserId = async (req, res) => {
  try {
    const result = await Errands.User_info.findOne({
      where: { user_id: { [Op.eq]: req.body.user_id } },
    });
    console.log(result);
    if (!result) {
      return res.send(true);
    }
    return res.send(false);
  } catch (err) {
    res.send(err);
  }
};

// 닉네임 중복검사
exports.checkUserName = async (req, res) => {
  try {
    const result = await Errands.User_info.findOne({
      where: { user_name: { [Op.eq]: req.body.user_name } },
    });
    console.log(result);
    if (!result) {
      return res.send(true);
    }
    return res.send(false);
  } catch (err) {
    res.send(err);
  }
};

// 회원가입
exports.userRegister = async (req, res) => {
  try {
    const result = await Errands.User_info.findOne({
      where: { user_id: req.body.user_id },
    });
    console.log(result);
    if (!result) {
      Errands.User_info.create({
        user_id: req.body.user_id,
        user_pw: req.body.user_pw,
        user_name: req.body.user_name,
        user_type: req.body.user_type,
      });
    }
  } catch (err) {
    res.send(err);
  }
};

// 로그아웃
exports.userLogout = async (req, res) => {
  try {
    await req.session.destroy((err) => {
      if (err) {
        throw err;
      }
      req.session;
      res.send(true);
    });
  } catch (err) {
    res.send(err);
  }
};

// ======= Wanter_board =======
// 매인페이지에 5개 보여주기 deadline순 5개
exports.read_few_wanter_board = async (req, res) => {
  try {
    const result = await Errands.Wanter_board.findAll({
      order: [['wanter_board_dead_line', 'desc']],
      limit: 5,
    });
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};

// 전체 다 보여주기
exports.read_wanter_board = async (req, res) => {
  try {
    const result = await Errands.Wanter_board.findAll({
      order: [['wanter_board_date', 'asc']],
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
    const [result] = await Errands.Wanter_board.create({
      wanter_board_writer: req.body.user_name,
      wanter_board_title: req.body.wanter_board_title,
      wanter_board_content: req.body.wanter_board_content,
      wanter_board_place: req.body.wanter_board_place,
      wanter_board_dead_line: req.body.wanter_board_dead_line,
      wanter_board_done: false,
    });
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};

// 게시물 수정
exports.update_wanter_board = async (req, res) => {
  try {
    const auth = await Errands.User_info.findOne({
      attributes: ['user_name'],
      where: { user_name: { [Op.eq]: req.session.user_name } },
    });
    console.log(auth);
    if (auth.dataValues.user_name == req.session.user_name) {
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
    } else {
      res.send('작성자만 수정할 수 있습니다');
    }
  } catch (err) {
    res.send(err);
  }
};

// 게시물 삭제
exports.delete_wanter_board = async (req, res) => {
  try {
    const auth = await Errands.User_info.findOne({
      attributes: ['user_name'],
      where: { user_name: { [Op.eq]: req.session.user_name } },
    });
    if (auth.dataValues.user_name == req.session.user_name) {
      const result = Errands.Wanter_board.destroy({
        where: { wanter_board_id: { [Op.eq]: req.params.boardId } },
      });
      if (!result) {
        return res.send(false);
      }
      res.send(true);
    } else {
      res.send('작성자만 삭제할 수 있습니다');
    }
  } catch (err) {
    res.send(err);
  }
};

// ======= Wanter_comment =======
// 댓글 보여주기
exports.read_wanter_comment = async (req, res) => {
  try {
    const result = await Errands.Wanter_comment.findAll();
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};

// 댓글 생성
exports.create_wanter_comment = async (req, res) => {
  try {
    const result = await Errands.Wanter_comment.create({
      wanter_comment_board_id: req.params.boardId,
      wanter_comment_writer: req.session.user_name,
      wanter_comment_content: req.body.wanter_comment_content,
    });
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};

// 댓글 수정
exports.update_wanter_comment = async (req, res) => {
  try {
    const auth = await Errands.User_info.findOne({
      attributes: ['user_name'],
      where: { user_name: { [Op.eq]: req.session.user_name } },
    });
    if (auth.dataValues.user_name == req.session.user_name) {
      const [result] = Errands.Wanter_comment.update(
        {
          wanter_comment_content: req.body.wanter_comment_content,
        },
        {
          where: {
            wanter_comment_id: { [Op.eq]: req.params.commentId },
            wanter_comment_board_id: { [Op.eq]: req.params.boardId },
          },
        }
      );
      if (result === 0) {
        return res.send(false);
      }
      res.send(true);
    } else {
      res.send('작성자만 삭제할 수 있습니다');
    }
  } catch (err) {
    res.send(err);
  }
};

// 댓글 삭제
exports.delete_wanter_comment = async (req, res) => {
  try {
    const auth = await Errands.User_info.findOne({
      attributes: ['user_name'],
      where: { user_name: { [Op.eq]: req.session.user_name } },
    });
    if (auth.dataValues.user_name == req.session.user_name) {
      const result = Errands.Wanter_comment.destroy({
        where: {
          wanter_comment_id: { [Op.eq]: req.params.commentId },
          wanter_comment_board_id: { [Op.eq]: req.params.boardId },
        },
      });
      if (!result) {
        return res.send(false);
      }
      res.send(true);
    } else {
      res.send('작성자만 댓글 삭제할 수 있습니다');
    }
  } catch (err) {
    res.send(err);
  }
};

// ======= Helper_board =======
// 최신5개만 가져오기
exports.read_few_helper_board = async (req, res) => {
  try {
    const result = await Errands.Helper_board.findAll({
      order: [['helper_board_date', 'asc']],
      limit: 3,
    });
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};

// 전체 다 가져오기
exports.read_helper_board = async (req, res) => {
  try {
    const result = await Errands.Helper_board.findAll({
      helper_board_writer: req.session.user_name,
      helper_board_title: req.body.helper_board_title,
      helper_board_content: req.body.helper_board_content,
      helper_board_place: req.body.helper_board_place,
      helper_board_done: false,
    });
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};

// 게시물 하나만 가져오기
exports.read_one_helper_board = async (req, res) => {
  try {
    const result = await Errands.Helper_board.findOne({
      where: { helper_board_id: { [Op.eq]: req.params.boardId } },
    });
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};

// 게시물 생성
exports.create_helper_board = async (req, res) => {
  try {
    const result = await Errands.Helper_board.create({
      helper_board_writer: req.session.user_name,
      helper_board_title: req.body.helper_board_title,
      helper_board_content: req.body.helper_board_content,
      helper_board_place: req.body.helper_board_place,
      helper_board_done: false,
    });
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};

// 게시물 수정
exports.update_helper_board = async (req, res) => {
  try {
    const auth = await Errands.User_info.findOne({
      attributes: ['user_name'],
      where: { user_name: { [Op.eq]: req.session.user_name } },
    });
    if (auth.dataValues.user_name == req.session.user_name) {
      const [result] = Errands.Helper_board.update(
        {
          helper_board_title: req.body.helper_board_title,
          helper_board_content: req.body.helper_board_content,
          helper_board_place: req.body.helper_board_place,
          helper_board_done: req.body.done,
        },
        {
          where: { helper_board_id: { [Op.eq]: req.params.boardId } },
        }
      );
      if (result === 0) {
        return res.send(false);
      }
      res.send(true);
    } else {
      res.send('작성자만 수정할 수 있습니다');
    }
  } catch (err) {
    res.send(err);
  }
};

// 게시물 삭제
exports.delete_helper_board = async (req, res) => {
  try {
    const auth = await Errands.User_info.findOne({
      attributes: ['user_name'],
      where: { user_name: { [Op.eq]: req.session.user_name } },
    });
    if (auth.dataValues.user_name == req.session.user_name) {
      const result = Errands.Helper_board.destroy({
        where: { helper_board_id: { [Op.eq]: req.params.boardId } },
      });
      if (!result) {
        return res.send(false);
      }
      res.send(true);
    } else {
      res.send('작성자만 삭제할 수 있습니다');
    }
  } catch (err) {
    res.send(err);
  }
};

// ======= Helper_comment =======
// 댓글 보여주기
exports.read_helper_comment = async (req, res) => {
  try {
    const result = await Errands.Helper_comment.findAll({
      //
    });
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};

// 댓글 생성
exports.create_helper_comment = async (req, res) => {
  try {
    const result = await Errands.Helper_comment.create({
      helper_comment_board_id: req.params.boardId,
      helper_comment_writer: req.session.user_name,
      helper_comment_content: req.body.helper_comment_content,
    });
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};

// 댓글 수정
exports.update_helper_comment = async (req, res) => {
  try {
    const auth = await Errands.User_info.findOne({
      attributes: ['user_name'],
      where: { user_name: { [Op.eq]: req.session.user_name } },
    });
    if (auth.dataValues.user_name == req.session.user_name) {
      const [result] = Errands.Helper_comment.update(
        {
          helper_comment_content: req.body.helper_comment_content,
        },
        {
          where: {
            helper_comment_id: { [Op.eq]: req.params.commentId },
            helper_comment_board_id: { [Op.eq]: req.params.boardId },
          },
        }
      );
      if (result === 0) {
        return res.send(false);
      }
      res.send(true);
    } else {
      res.send('작성자만 수정할 수 있습니다');
    }
  } catch (err) {
    res.send(err);
  }
};

// 댓글 삭제
exports.delete_helper_comment = async (req, res) => {
  try {
    const auth = await Errands.User_info.findOne({
      attributes: ['user_name'],
      where: { user_name: { [Op.eq]: req.session.user_name } },
    });
    if (auth.dataValues.user_name == req.session.user_name) {
      const result = Errands.Helper_comment.destroy({
        where: {
          helper_comment_id: { [Op.eq]: req.params.commentId },
          helper_comment_board_id: { [Op.eq]: req.params.boardId },
        },
      });
      if (!result) {
        return res.send(false);
      }
      res.send(true);
    } else {
      res.send('작성자만 삭제할 수 있습니다');
    }
  } catch (err) {
    res.send(err);
  }
};

// ======= Notice Board =======

// 메인페이지 몇 개만 불러오기 일단 만듬
exports.read_few_notice = async (req, res) => {
  try {
    const result = await Errands.Notice.findAll({
      order: [['notice_date', 'desc']],
      limit: 5,
    });
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};

// 전체 불러오기
exports.read_notice = async (req, res) => {
  try {
    const result = await Errands.Notice.findAll({
      order: [['wanter_board_date', 'asc']],
    });
  } catch (err) {
    res.send(err);
  }
};

// 하나만 불러오기
exports.read_one_notice = async (req, res) => {
  try {
    const result = await Errands.Notice.findOne({
      where: { notice_id: { [Op.eq]: req.params.boardId } },
    });
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};

// 공지 생성
exports.create_notice = async (req, res) => {
  try {
    const auth = await Errands.User_info.findOne({
      attributes: ['user_type'],
      where: { user_type: { [Op.eq]: req.session.user_type } },
    });
    if (auth.dataValues.user_type == 'root') {
      const result = Errands.Notice.create({
        notice_writer: req.session.user_name,
        notice_title: req.body.notice_title,
        notice_content: req.body.notice_content,
      });

      res.send(result);
    } else {
      res.send('생성 권한이 없습니다');
    }
  } catch (err) {
    res.send(err);
  }
};

// 공지 수정
exports.update_notice = async (req, res) => {
  try {
    const auth = await Errands.User_info.findOne({
      attributes: ['user_type'],
      where: { user_type: { [Op.eq]: req.session.user_type } },
    });
    if (auth.dataValues.user_type == 'root') {
      const [result] = Errands.Notice.update(
        {
          notice_title: req.body.notice_title,
          notice_content: req.body.notice_content,
        },
        { where: { notice_id: { [Op.eq]: req.params.boardId } } }
      );
      if (result === 0) {
        return res.send(false);
      }
      res.send(true);
    } else {
      res.send('수정 권한이 없습니다');
    }
  } catch (err) {
    res.send(err);
  }
};

// 공지 삭제
exports.delete_notice = async (req, res) => {
  try {
    const auth = await Errands.User_info.findOne({
      attributes: ['user_type'],
      where: { user_type: { [Op.eq]: req.session.user_type } },
    });
    if (auth.dataValues.user_type == 'root') {
      const result = Errands.Notice.destroy({
        where: { notice_id: { [Op.eq]: req.params.boardId } },
      });
      if (!result) {
        return res.send(false);
      }
      res.send(true);
    } else {
      res.send('삭제 권한이 없습니다');
    }
  } catch (err) {
    res.send(err);
  }
};
