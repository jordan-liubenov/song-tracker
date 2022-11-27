import {
  validateEmail,
  validatePassword,
  validateRePass,
  validateUsername,
} from "@/utils/registerUtils"
import { reactive, readonly } from "vue"

interface StateStore {
  email: string
  username: string
  password: string
  repeatPassword: string
}

const state: StateStore = reactive({
  email: "",
  username: "",
  password: "",
  repeatPassword: "",
})

// Reducers (state-setters)

// Register Form:
const setEmail = (e: any, email: string): void => {
  state.email = email
  if (!validateEmail(email)) {
    e.target.className = "inputError"
  } else {
    e.target.className = ""
  }
}
const setUsername = (e: any, username: string): void => {
  state.username = username
  if (!validateUsername(username)) {
    e.target.className = "inputError"
  } else {
    e.target.className = ""
  }
  if (username.length === 0) {
    e.target.className = "inputError"
  }
}
const setPassword = (e: any, password: string): void => {
  state.password = password
  if (!validatePassword(password)) {
    e.target.className = "inputError"
  } else {
    e.target.className = ""
  }
}
const setRepeatPass = (e: any, rePass: string, password: string): void => {
  state.repeatPassword = rePass
  if (!validateRePass(password, rePass)) {
    e.target.className = "inputError"
  } else {
    e.target.className = ""
  }
}

export default {
  state: readonly(state),
  setEmail,
  setUsername,
  setPassword,
  setRepeatPass,
}
