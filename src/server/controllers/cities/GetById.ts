/* eslint-disable @typescript-eslint/ban-types */
import * as yup from 'yup'
import { Request, Response } from 'express'
import { validation } from '../../shared/middlewares'
import { StatusCodes } from 'http-status-codes'

type ParamProps = {
  id?: number
}

const CitiesSchema: yup.ObjectSchema<ParamProps> = yup.object({
  id: yup.number().integer().required().moreThan(0),
})

export const getCityIdValidation = validation(() => ({ params: CitiesSchema }))

export const getCityId = async (req: Request<ParamProps>, res: Response) => {
  console.log(req.params)

  res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('get city by id')
}
