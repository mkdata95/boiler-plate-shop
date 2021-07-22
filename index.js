const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const { User } = require("./models/User");
const config = require("./config/key");

//어플리케이션 /x-www-from-urlencoded//
app.use(express.urlencoded({ extended: true }));

//어플리케이션/json//
app.use(express.json());

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Mongodb와 연결되었습니다."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
  yarn;
});

app.post("/register", function (req, res) {
  // 회원 가입 할때 필요한 저옵들을 client에서 가져오면
  // 그것들을 데이터 베이스에 넣어준다.

  const user = new User(req.body);

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
