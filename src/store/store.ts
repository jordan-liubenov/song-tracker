import {
  validateEmail,
  validatePassword,
  validateRePass,
  validateUsername,
} from "@/utils/registerUtils"
import { reactive, readonly } from "vue"

interface StateStore {
  // Register
  email: string
  username: string
  password: string
  repeatPassword: string

  // Login
  usernameLogin: string
  passwordLogin: string
}

const state: StateStore = reactive({
  email: "",
  username: "",
  password: "",
  repeatPassword: "",
  usernameLogin: "",
  passwordLogin: "",
})

// Reducers (state-setters)

// Register Form:
const setEmail = (
  e: any,
  email: string,
  fieldsValid: { valid: boolean }
): void => {
  state.email = email
  if (!validateEmail(email)) {
    e.target.className = "inputError"
    fieldsValid.valid = false
  } else {
    e.target.className = "inputSuccess"
    fieldsValid.valid = true
  }
}
const setUsername = (
  e: any,
  username: string,
  fieldsValid: { valid: boolean }
): void => {
  state.username = username
  if (!validateUsername(username)) {
    e.target.className = "inputError"
    fieldsValid.valid = false
  } else {
    e.target.className = "inputSuccess"
    fieldsValid.valid = true
  }
}
const setPassword = (
  e: any,
  password: string,
  fieldsValid: { valid: boolean },
  repeatPassword: string
): void => {
  state.password = password
  if (!validatePassword(password)) {
    e.target.className = "inputError"
    fieldsValid.valid = false
  } else {
    e.target.className = "inputSuccess"
    fieldsValid.valid = true
  }
}
const setRepeatPass = (
  e: any,
  rePass: string,
  password: string,
  fieldsValid: { valid: boolean }
): void => {
  state.repeatPassword = rePass
  if (!validateRePass(password, rePass)) {
    e.target.className = "inputError"
    fieldsValid.valid = false
  } else {
    e.target.className = "inputSuccess"
    fieldsValid.valid = true
  }
}

// Login form
const setUsernameLogin = (e: any, username: string): void => {
  state.usernameLogin = username
  // TODO add request service which checks for existing user with this username
}
const setPasswordLogin = (e: any, password: string): void => {
  state.passwordLogin = password
  // TODO add request service which checks for existing user with this username and checks if password is correct
}

export default {
  state: readonly(state),
  setEmail,
  setUsername,
  setPassword,
  setRepeatPass,
  setUsernameLogin,
  setPasswordLogin,
}
