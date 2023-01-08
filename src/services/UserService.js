import axios from 'axios'

export class UserService {
   static users = [];

   static getAllUsers () {
     const dataURL = 'https://jsonplaceholder.typicode.com/users'
     return axios.get(dataURL)
   }

   static getUser (UserId) {
     const dataURL = `https://jsonplaceholder.typicode.com/users/${UserId}`
     return axios.get(dataURL)
   }
}
