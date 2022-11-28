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
    e.target.className = ""
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
    e.target.className = ""
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
    e.target.className = ""
    fieldsValid.valid = true
  }
  // if (password !== repeatPassword) {
  //   e.target.className = "inputError"
  //   fieldsValid.valid = false
  // } else {
  //   e.target.className = ""
  //   fieldsValid.valid = true
  // }
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
    e.target.className = ""
    fieldsValid.valid = true
  }
}

export default {
  state: readonly(state),
  setEmail,
  setUsername,
  setPassword,
  setRepeatPass,
}
