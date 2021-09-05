"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);
var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);

_dotenv2.default.config()

const { PORT, DATABASE } = process.env

_mongoose2.default.connect(String(DATABASE))

const api = _express2.default.call(void 0, )

api.use(_express2.default.json())
api.use(_cors2.default.call(void 0, ))
api.use(_routes2.default)

api.listen(PORT, () => {
  console.log(`API Running on PORT:${PORT}`)
})

exports. default = api
