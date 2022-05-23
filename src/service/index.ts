import { config } from "./config"
import { createService } from "./createService"

const service = createService(config)

export const Service = {
    request: async (params: any) => {
        return service.request({
            name: params?.fullName,
            email: params?.email
        })  
    }

}