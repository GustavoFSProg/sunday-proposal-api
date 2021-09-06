import Router from 'express'
import userController from './controllers/userController'

const routes = Router()

routes.get('/', userController.getAll)
// routes.get('/get-email', userController.getByEmail)
routes.get('/get-id/:id', userController.getById)
routes.post('/register', userController.register)
routes.put('/update/:id', userController.update)
// routes.delete('/delete/:id', userController.deleteOne)

export default routes
