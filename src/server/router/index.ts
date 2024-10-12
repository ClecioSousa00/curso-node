import { Router } from 'express'
import { CitiesController } from '../controllers'

const router = Router()

router.get('/', (_, res) => {
  res.status(202).send('Hello World!!!!!')
})

router.get(
  '/cities',
  CitiesController.getAllValidation,
  CitiesController.getAll,
)

router.get(
  '/cities/:id',
  CitiesController.getCityIdValidation,
  CitiesController.getCityId,
)

router.put(
  '/cities/:id',
  CitiesController.updateCityIdValidation,
  CitiesController.updateCityId,
)

router.post(
  '/cities',
  CitiesController.createValidation,
  CitiesController.create,
)

router.delete(
  '/cities/:id',
  CitiesController.deleteValidation,
  CitiesController.deleteCity,
)

export { router }
