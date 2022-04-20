import {createStore} from 'vuex'
import {User} from '@/models/User'
import {storage} from '@/storage/localStorage'

const mockedData: User[] = [User.create('Igor', '88005553535')]

const store = createStore({
  state: {
    users: storage.getUsers()
  },
  getters: {
    getUsers: state => state.users
  },
  mutations: {
    ADD_USER: (state, payload) => {
      const newUsers = state.users.concat(payload)
      state.users = newUsers
      storage.saveUsers(newUsers)
    },
    EDIT_USER: (state, payload) => {
      const idx = state.users.findIndex((it: User) => it.id === payload.id)
      let newUsers: User[] = state.users

      if (idx !== -1) {
        newUsers = [...newUsers.slice(0, idx), payload, ...newUsers.slice(idx + 1)]
      } else {
        newUsers.concat(payload)
      }

      state.users = newUsers
      storage.saveUsers(newUsers)
    },
    REMOVE_USER: (state, payload) => {
      const idx = state.users.findIndex((it: User) => it.id === payload.id)
      state.users.splice(idx, 1)
      storage.saveUsers(state.users)
    }
  },
  actions: {
    ADD_USER: (context, payload) => {
      context.commit('ADD_USER', payload)
    },
    EDIT_USER: (context, payload) => {
      console.log(2)
      context.commit('EDIT_USER', payload)
    },
    REMOVE_USER: (context, payload) => {
      context.commit('REMOVE_USER', payload)
    }
  },
  modules: {}
})

export {store}
