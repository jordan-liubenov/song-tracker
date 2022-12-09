export class BrowserUtils {
  public static getCookies(): string[] {
    const allCookies: string[] = document.cookie.split(";")
    for (let i = 0; i < allCookies.length; i++) {
      allCookies[i] = allCookies[i].trimEnd()
      allCookies[i] = allCookies[i].trimStart()
    }
    return allCookies
  }

  public static extractUsername(allCookies: string[]): string | undefined {
    let username: string | undefined
    for (let i = 0; i < allCookies.length; i++) {
      const current: string[] = allCookies[i].split("=")
      if (current[0] === "username") {
        username = current[1]
        break
      }
    }
    return username
  }

  public static extractToken(allCookies: string[]): string | undefined {
    let token: string | undefined
    for (let i = 0; i < allCookies.length; i++) {
      const current: string[] = allCookies[i].split("=")
      if (current[0] === "token") {
        token = current[1]
        break
      }
    }
    allCookies.sort()
    return token
  }
}
