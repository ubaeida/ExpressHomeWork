const responseMessage = require("./responseMessage");

const serverError = (res) => {
  return res.send(responseMessage.errorResponse("sever Error !"));
};

const success = (res, msg, data = []) => {
  return res.send(responseMessage.successResponse(msg, data));
};

const failedWithMessage = (res, msg) => {
  return res.send(responseMessage.errorResponse(msg));
};

module.exports = {
  serverError,
  success,
  failedWithMessage
};
