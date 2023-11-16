import axios from 'axios'
interface IData {
  lookup: String;
  sessionKey: String;
}

export async function getData({ lookup, sessionKey }: IData){
  let data = await axios.post(`https://api-preview.seon.io/`, {
    port: "80",
    body: {
      data: lookup,
      session: sessionKey
    }
  })
  return data.data
}
