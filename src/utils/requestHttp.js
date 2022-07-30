import { http } from "../services/httpService"

export async function GET_Data(url, setState) {
  try {
    const { data } = await http.get(url)
    data && setState(data)
  } catch (error) {
    console.log(error)
  }
}