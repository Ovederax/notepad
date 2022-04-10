import {Guid} from 'guid-typescript'

export class User {
  id: string | number
  username: string
  phone: string

  constructor(username: string, phone: string) {
    this.id = Guid.create().toString()
    this.username = username
    this.phone = phone
  }
}
