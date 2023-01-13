const express = require("express");
const app = express();
const port = 9000;

// mongodb connect
const connect = require("./schemas/index.js");
connect();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// router
const postRouter = require("./routes/post.js");
app.use("/api", postRouter);
/*
    router.('/post')
*/

app.listen(port, () => {
  console.log("서버가 열렸습니다.");
});
