interface UrlAddresses {
  register: string
  login: string
  authenticate: string
}

export const Url: UrlAddresses = {
  register: "http://localhost:5000/register",
  login: "http://localhost:5000/login",
  authenticate: "http://localhost:5000/authenticate",
}
