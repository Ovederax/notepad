import {User} from '@/models/User'

const USERS = 'USERS'

type Storage = {
  getUsers: () => User[]
  saveUsers: (users: User[]) => void
}

const initLocalStorage = (): Storage => {
  const getUsers = (): User[] => {
    if (localStorage && localStorage.getItem) {
      return JSON.parse(localStorage.getItem(USERS) || '[]')
    }
    return []
  }

  const saveUsers = (users: User[]) => {
    if (localStorage && localStorage.setItem) {
      try {
        localStorage.setItem(USERS, JSON.stringify(users))
      } catch (e) {
        console.warn(e)
      }
    }
  }

  return {
    getUsers,
    saveUsers
  }
}

export const storage = initLocalStorage()
