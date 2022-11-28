export const ensureAllFields = (
  email: string,
  username: string,
  password: string,
  repeatPassword: string
): boolean => {
  let allValid = true

  if (
    email.length === 0 ||
    username.length === 0 ||
    password.length === 0 ||
    repeatPassword.length === 0
  ) {
    return false
  }

  return allValid
}

export const validateEmail = (email: string = ""): boolean => {
  let isValid = true
  let reg = /^[A-Za-z\d]+[@][A-Za-z]+\.[a-z]+$/g

  if (email.length > 0) {
    if (reg.test(email)) {
      isValid = true
    } else {
      isValid = false
    }
  } else {
    return true
  }
  return isValid
}

export const validateUsername = (username: string): boolean => {
  let isValid = true

  if (username.length >= 6) {
    isValid = true
  } else if (username.length < 6) {
    isValid = false
  } else if (username.length == 0) {
    return true
  }

  return isValid
}

export const validatePassword = (password: string): boolean => {
  let isValid = true

  if (password.length >= 8) {
    if (checkForUppercase(password) && checkForNumber(password)) {
      isValid = true
    } else {
      isValid = false
    }
  } else {
    isValid = false
  }

  return isValid
}

export const validateRePass = (
  password: string,
  repeatPassword: string
): boolean => {
  let isValid = true

  if (password !== repeatPassword) {
    isValid = false
  }

  return isValid
}

// Functions below used for password validation
function checkForUppercase(pass: string) {
  //checks if password has atleast 1 uppercase char
  let hasUpper = false
  for (let i = 0; i < pass.length; i++) {
    if (pass.charAt(i) == pass.charAt(i).toUpperCase()) {
      hasUpper = true
    }
  }
  return hasUpper
}
function checkForNumber(pass: string) {
  //check if password has atleast 1 number
  let hasNum = false
  for (let i = 0; i < pass.length; i++) {
    let current = pass.charAt(i)
    if (Number(current)) {
      hasNum = true
    }
  }
  return hasNum
}
