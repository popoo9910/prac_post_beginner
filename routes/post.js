const express = require("express");
const router = express.Router();

/*
    상대경로
    경로의 기준이 (시작점) 현재 파일의 위치
    폴더 하나를 올라갈려면 ../
    현재 자신 파일의 위치랑 같은 위치에 있을때는 ./
*/
const Post = require("../schemas/post.js");

/*
    localhost:9000/api/posts
*/
router.get("/posts", async (req, res) => {
  Post.find({})
    .exec()
    .then((postList) => {
      res.status(200).json({ postList });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ err });
    });
});

/*
    1. Post method를 사용한다.
    2. 고객이 body로 넘긴 정보를 json 형태로 받아온다.
    3. 그 형태를 post schema에 맞게 저장해준다.

    클라이언트에서 데이터를 보내는 모양
    ajax({
        type: POST,
        data: { title, users, password, contents }
    })
*/
router.post("/posts", async (req, res) => {
  // 2
  // const title = req.body.title;
  // const users = req.body.users;
  // const password = req.body.password;
  // const contents = req.body.contents;
  //객체구조 분해할당
  const { title, users, password, contents } = req.body;

  Post.create({ title, users, password, contents })
    .then(() => {
      res.status(200).json({ message: "게시글을 작성하였습니다." });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ err, message: "게시글 작성에 실패했습니다." });
    });
});

module.exports = router;
