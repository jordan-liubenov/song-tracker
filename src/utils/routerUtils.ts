import { BrowserUtils } from "./browserUtils"
import { Url } from "./urlAddresses"

export class RouterUtils {
  public static isAuthenticated(): boolean {
    let isAuth: boolean = false

    return isAuth
  }

  public static isLoggedIn(): boolean {
    let isLogged: boolean = true

    const cookies: string[] = BrowserUtils.getCookies()
    const token: string | undefined = BrowserUtils.extractToken(cookies)

    if (!token) {
      return false
    }

    return isLogged
  }

  public static async verifyToken() {
    const cookies: string[] = BrowserUtils.getCookies()
    const token: string | undefined = BrowserUtils.extractToken(cookies)

    try {
      const req = await fetch(Url.authenticate, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Auth-Token": token as string,
        },
      })
      const res = await req.json()
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }
}
