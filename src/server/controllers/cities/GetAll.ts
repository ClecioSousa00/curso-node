/* eslint-disable @typescript-eslint/ban-types */
import * as yup from 'yup'
import { Request, Response } from 'express'
import { validation } from '../../shared/middlewares'
import { StatusCodes } from 'http-status-codes'

type QueryProps = {
  page?: number
  limit?: number
  filter?: string
}

const CitiesSchema: yup.ObjectSchema<QueryProps> = yup.object({
  page: yup.number().moreThan(0),
  limit: yup.number().moreThan(0),
  filter: yup.string().optional(),
})

export const getAllValidation = validation(() => ({ query: CitiesSchema }))

export const getAll = async (
  req: Request<{}, {}, {}, QueryProps>,
  res: Response,
) => {
  console.log(req.query)

  res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('get all cities')
}
