import axios from "axios";

export default axios.create({
  baseURL:'https://api.rawg.io/api',
  params: {
    key:'8816dc1ade8c4109ba2c825ebe6ff011'
  }
})