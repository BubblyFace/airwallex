export const createService = (configs: {
    [key: string]: {
        url: string,
        method: 'POST' | 'GET' | 'PUT' | 'DELETE' | string
    }
}): {[key: string]: (params: any) => Promise<any>} => {
    return Object.entries(configs).reduce((service, req) => {
        const [key, config] = req
        service[key] = async function(params: any = {}) {
            const res = await fetch(config.url, {
                method: config.method,
                body: JSON.stringify(params)
            })

            if(res?.status === 200) {
                return res
            } else {
                throw new Error(res?.statusText)
            }
        }
        return service
    }, {} as any)
}