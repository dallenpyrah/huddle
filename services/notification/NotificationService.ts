import { AxiosInstance } from 'axios'
import pino from 'pino'
import NotificationModel from '../../models/notification/INotificationModel'

export default class NotificationService {
  private readonly axiosService: AxiosInstance
  private readonly logger: pino.Logger = pino()

  constructor (axiosService: AxiosInstance) {
    this.axiosService = axiosService
  }

  async getUserNotifications (fireBaseUserId: string): Promise<NotificationModel[]> {
    try {
      const notifications = await this.axiosService.get<NotificationModel[]>(`/notifications/${fireBaseUserId}`)
      return notifications.data
    } catch (error) {
      this.logger.error(error)
      throw error
    }
  }
}