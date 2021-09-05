"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _UserModel = require('../models/UserModel'); var _UserModel2 = _interopRequireDefault(_UserModel);

var _md5 = require('md5'); var _md52 = _interopRequireDefault(_md5);

async function register(req, res) {
  try {
    await _UserModel2.default.create({
      name: req.body.name,
      email: req.body.email,
      password: _md52.default.call(void 0, req.body.password, process.env.SECRET ),
    })

    return res.status(201).send({ msg: 'user registered with succes!' })
  } catch (error) {
    return res.status(400).json({ msg: 'ERROR!!!' })
  }
}

async function getAll(req, res) {
  try {
    const data = await _UserModel2.default.find()

    return res.status(201).send({ data })
  } catch (error) {
    return res.status(400).send({ msg: 'Deu Error!' })
  }
}

async function getByEmail(req, res) {
  try {
    const data = await _UserModel2.default.findOne({ email: req.body.email })

    return res.status(201).send({ data })
  } catch (error) {
    return res.status(400).send({ msg: 'Deu Error!' })
  }
}

async function update(req, res) {
  try {
    await _UserModel2.default.findByIdAndUpdate(req.params.id, {
      $set: {
        name: req.body.name,
        email: req.body.email,
        password: _md52.default.call(void 0, req.body.password, process.env.SECRET ),
      },
    })

    return res.status(201).send({ msg: 'user registered with succes!' })
  } catch (error) {
    return res.status(400).json({ msg: 'ERROR!!!' })
  }
}

async function deleteOne(req, res) {
  try {
    await _UserModel2.default.findByIdAndRemove(req.params.id)

    return res.status(201).send({ msg: 'User Deleted' })
  } catch (error) {
    return res.status(400).send({ msg: 'Deu Error!' })
  }
}

exports. default = { update, register, getAll, getByEmail, deleteOne }
