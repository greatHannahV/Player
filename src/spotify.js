import axios from 'axios'

const authEndpoint = 'https://accounts.spotify.com/authorize?'
const clientId = `89e76c79b9444691b3aeca0894a0aebf`
const redirectUri = 'http://localhost:5173/'
const scopes = ['user-library-read', 'playlist-read-private']

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  '%20',
)}&response_type=token&show_dialog=true`

export const apiClient = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
})

export const setClientToken = (token) => {
  apiClient.interceptors.request.use(async function (config) {
    config.headers.Authorization = 'Bearer ' + token
    return config
  })
}
