"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _userController = require('./controllers/userController'); var _userController2 = _interopRequireDefault(_userController);

const routes = _express2.default.call(void 0, )

routes.get('/', _userController2.default.getAll)
routes.get('/get-email', _userController2.default.getByEmail)
routes.post('/register', _userController2.default.register)
routes.put('/update/:id', _userController2.default.update)
routes.delete('/delete/:id', _userController2.default.deleteOne)

exports. default = routes
