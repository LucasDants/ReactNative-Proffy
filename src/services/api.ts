import axios from 'axios'
// endereço do expo no navegador + porta do back
const api = axios.create({ baseURL: 'http://IPV4:3333'})

export default api;