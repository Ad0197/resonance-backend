import { isEmail } from 'class-validator'
import Sendgrid from '@sendgrid/mail'
import { Arg, Query } from 'type-graphql'
import { genEmail } from './mailer-sendgrid.utils'
import { getConnection } from '../../services/service'
import FurnitureService from '../../services/furniture.service'
Sendgrid.setApiKey(process.env.SENDGRID_APIKEY!)

export default class MailerSendGridResolver {
    @Query(() => Boolean)
  async requestMoreInfo (@Arg('email') email: string, @Arg('idProduct') idProduct: string): Promise<Boolean> {
    const resp = isEmail(email)
    if (resp) {
      try {
        const service = new FurnitureService(getConnection())
        const furniture = await service.findById(idProduct)
        // Promise.all([Sendgrid.send(genEmail(email, furniture)), Sendgrid.send(genEmail('techpirates@resonance.nyc', furniture))])
        await Promise.all([Sendgrid.send(genEmail(email, furniture))])
      } catch (error) {
        console.log(error)
        return false
      }
      return true
    }
    return false
  }
}
