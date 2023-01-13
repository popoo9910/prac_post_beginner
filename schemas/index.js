const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

/*
    function connect () {

    }
*/
// promise
const connect = () => {
  mongoose
    .connect(
      "mongodb+srv://asher:gusals8665@cluster0.qpns7vs.mongodb.net/tttt?retryWrites=true&w=majority"
    )
    .then(() => {
      // 성공했을 때 동작하는 부분
      console.log("MongoDB Connection Success");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connect;
