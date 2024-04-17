import axios from 'axios'

const getData = async (url) => {
  try {
    const res = await axios.get(url)
    return res.data

  } catch (error) {

    if (error.response) {
      throw new Error(`Request failed with status ${error.response.status}: ${error.response.statusText}`)
    } else {
      throw new Error('Request failed: Network Error')
    }

  }
}

export default getData
