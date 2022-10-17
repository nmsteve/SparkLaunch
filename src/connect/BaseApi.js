import axios from "axios"

const BaseApi = axios.create({

  baseURL: "https://sparklaunch-backend.herokuapp.com/sale/",

})

export default BaseApi
