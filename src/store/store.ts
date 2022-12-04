import { RegisterUtils } from "@/utils/registerUtils"
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
  if (!RegisterUtils.validateEmail(email)) {
    e.target.className = "inputError"
    fieldsValid.valid = false
  } else {
    e.target.className = "inputSuccess"
    fieldsValid.valid = true
  }
  if (email.length == 0) {
    fieldsValid.valid = false
    e.target.className = ""
  }
}
const setUsername = (
  e: any,
  username: string,
  fieldsValid: { valid: boolean }
): void => {
  state.username = username
  if (!RegisterUtils.validateUsername(username)) {
    e.target.className = "inputError"
    fieldsValid.valid = false
  } else {
    e.target.className = "inputSuccess"
    fieldsValid.valid = true
  }
  if (username.length == 0) {
    fieldsValid.valid = false
    e.target.className = ""
  }
}
const setPassword = (
  e: any,
  password: string,
  fieldsValid: { valid: boolean },
  repeatPassword: string
): void => {
  state.password = password
  if (!RegisterUtils.validatePassword(password)) {
    e.target.className = "inputError"
    fieldsValid.valid = false
  } else {
    e.target.className = "inputSuccess"
    fieldsValid.valid = true
  }
  if (password.length == 0) {
    fieldsValid.valid = false
    e.target.className = ""
  }
}
const setRepeatPass = (
  e: any,
  rePass: string,
  password: string,
  fieldsValid: { valid: boolean }
): void => {
  state.repeatPassword = rePass
  if (!RegisterUtils.validateRePass(password, rePass)) {
    e.target.className = "inputError"
    fieldsValid.valid = false
  } else {
    e.target.className = "inputSuccess"
    fieldsValid.valid = true
  }
  if (rePass.length == 0) {
    fieldsValid.valid = false
    e.target.className = ""
  }
}

// Login form
const setUsernameLogin = (e: any, username: string): void => {
  state.usernameLogin = username
}
const setPasswordLogin = (e: any, password: string): void => {
  state.passwordLogin = password
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
