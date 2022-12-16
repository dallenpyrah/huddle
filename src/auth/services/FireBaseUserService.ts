import { AxiosInstance } from 'axios'
import pino from 'pino'
import IUserModel from '../models/IUserModel'
import { inject, injectable } from 'inversify'
import { TYPES } from '../../../inversify/types'
import type { IAxiosService } from '../service-interfaces/IAxiosService'
import { IFireBaseUserService } from '../service-interfaces/IFireBaseService'

@injectable()
export class FireBaseUserService implements IFireBaseUserService {
  private readonly axiosService: IAxiosService
  private readonly logger: pino.Logger = pino()
  private readonly axios: AxiosInstance

  constructor (@inject(TYPES.AxiosService) axiosService: IAxiosService) {
    this.axiosService = axiosService
    this.axios = axiosService.getAxiosInstance()
  }

  async getUserByFireBaseId (fireBaseUserId: string): Promise<IUserModel> {
    try {
      const user = await this.axios.get<IUserModel>(`/firebase/${fireBaseUserId}`)
      return user.data
    } catch (error) {
      this.logger.error(error)
      throw error
    }
  }
}