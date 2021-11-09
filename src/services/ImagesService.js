import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { imageDB } from "./AxiosService"

const apiKey = 'giALP1TO6sxp2YHdT0SBzfdhmMx2cY5x4CilhGGu'

class ImagesService {

  async getImage(date) {
    const res = await imageDB.get(`apod?api_key=giALP1TO6sxp2YHdT0SBzfdhmMx2cY5x4CilhGGu&date=${date}`)
    logger.log(res.data)
    AppState.apod = res.data
  }
}

export const imagesService = new ImagesService()