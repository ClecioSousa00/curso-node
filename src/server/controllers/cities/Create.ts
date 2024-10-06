/* eslint-disable @typescript-eslint/ban-types */
import * as yup from 'yup'
import { Request, Response } from 'express'
import { validation } from '../../shared/middlewares'

type Cities = {
  name: string
  estado: string
}

const CitiesSchema: yup.ObjectSchema<Cities> = yup.object({
  name: yup.string().required().min(3),
  estado: yup.string().required().min(3),
})

export const createValidation = validation(() => ({ body: CitiesSchema }))

export const create = async (req: Request<{}, {}, Cities>, res: Response) => {
  console.log(req.body)

  res.status(200).send('Create city')
}
