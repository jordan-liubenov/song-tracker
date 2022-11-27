import { reactive, readonly } from "vue"

interface StateStore {
  email: string
  username: string
  password: string
}

const state: StateStore = reactive({
  email: "",
  username: "",
  password: "",
})

// Reducers (state-setters)
const setEmail = (email: string): void => {
  state.email = email
}

const setUsername = (username: string): void => {
  state.username = username
}

const setPassword = (password: string): void => {
  state.password = password
}

export default {
  state: readonly(state),
  setEmail,
  setUsername,
  setPassword,
}
