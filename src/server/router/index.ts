import { Router } from 'express'
import { CitiesController } from '../controllers'

const router = Router()

router.get('/', (_, res) => {
  res.status(202).send('Hello World!!!!!')
})

router.post('/cities', CitiesController.create)

export { router }
