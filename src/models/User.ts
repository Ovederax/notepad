import {Guid} from 'guid-typescript'

export class User {
  id: string | number
  username: string
  phone: string

  constructor(id: string, username: string, phone: string) {
    this.id = id
    this.username = username
    this.phone = phone
  }

  static create(username: string, phone: string) {
    return new User(Guid.create().toString(), username, phone)
  }
}
