/* eslint-disable @typescript-eslint/ban-types */
import * as yup from 'yup'
import { Request, Response } from 'express'
import { validation } from '../../shared/middlewares'
import { StatusCodes } from 'http-status-codes'

type ParamProps = {
  id?: number
}

type BodyProps = {
  name: string
}

const CitiesSchemaParams: yup.ObjectSchema<ParamProps> = yup.object({
  id: yup.number().integer().required().moreThan(0),
})

const CitiesSchemaBody: yup.ObjectSchema<BodyProps> = yup.object({
  name: yup.string().required().min(3),
})

export const updateCityIdValidation = validation(() => ({
  params: CitiesSchemaParams,
  body: CitiesSchemaBody,
}))

export const updateCityId = async (
  req: Request<ParamProps, {}, BodyProps>,
  res: Response,
) => {
  console.log(req.params)
  console.log(req.body)

  res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('update city')
}
