import * as create from './Create'
import * as getAll from './GetAll'
import * as getCityId from './GetById'
import * as updateCityId from './UpdateById'
import * as deleteCityById from './DeleteById'

export const CitiesController = {
  ...create,
  ...getAll,
  ...getCityId,
  ...updateCityId,
  ...deleteCityById,
}
