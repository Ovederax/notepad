import {createStore} from 'vuex'
import {User} from '@/models/User'
import {storage} from '@/storage/localStorage'

const mockedData: User[] = [new User('Igor', '88005553535')]

const store = createStore({
  state: {
    users: storage.getUsers()
  },
  getters: {
    getUsers: state => state.users
  },
  mutations: {
    ADD_USERS: (state, payload) => {
      const newUsers = state.users.concat(payload)
      state.users = newUsers
      storage.saveUsers(newUsers)
    },
    REMOVE_USER: (state, payload) => {
      state.users.splice(payload.id, 1)
      storage.saveUsers(state.users)
    }
  },
  actions: {
    ADD_USERS: (context, payload) => {
      context.commit('ADD_USERS', payload)
    },
    REMOVE_USER: (context, payload) => {
      context.commit('REMOVE_USER', payload)
    }
  },
  modules: {}
})

export {store}
