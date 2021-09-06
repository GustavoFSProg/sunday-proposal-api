import UserModel from '../models/UserModel'
import { Request, Response } from 'express'
import md5 from 'md5'

async function register(req: Request, res: Response) {
  try {
    await UserModel.create({
      name: req.body.name,
      email: req.body.email,
      password: md5(req.body.password, process.env.SECRET as string & { asBytes: true }),
    })

    return res.status(201).send({ msg: 'user registered with succes!' })
  } catch (error) {
    return res.status(400).json({ msg: 'ERROR!!!' })
  }
}

async function getAll(req: Request, res: Response) {
  try {
    const data = await UserModel.find()

    return res.status(201).send(data)
  } catch (error) {
    return res.status(400).send({ msg: 'Deu Error!' })
  }
}

async function getByEmail(req: Request, res: Response) {
  try {
    const data = await UserModel.findOne({ email: req.body.email })

    return res.status(201).send({ data })
  } catch (error) {
    return res.status(400).send({ msg: 'Deu Error!' })
  }
}

async function getById(req: Request, res: Response) {
  try {
    const data = await UserModel.findById(req.params.id)

    return res.status(201).send(data)
  } catch (error) {
    return res.status(400).send({ msg: 'Deu Error!' })
  }
}

async function update(req: Request, res: Response) {
  try {
    await UserModel.findByIdAndUpdate(req.params.id, {
      $set: {
        name: req.body.name,
        email: req.body.email,
        password: md5(req.body.password, process.env.SECRET as string & { asBytes: true }),
      },
    })

    return res.status(201).send({ msg: 'user registered with succes!' })
  } catch (error) {
    return res.status(400).json({ msg: 'ERROR!!!' })
  }
}

async function deleteOne(req: Request, res: Response) {
  try {
    await UserModel.findByIdAndRemove(req.params.id)

    return res.status(201).send({ msg: 'User Deleted' })
  } catch (error) {
    return res.status(400).send({ msg: 'Deu Error!' })
  }
}

export default { update, getById, register, getAll, getByEmail, deleteOne }
