import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'

const router = Router()
router.get('/', (_, res) => {
  res.status(StatusCodes.ACCEPTED).send('Hello Word!!!!!')
})
export { router }
