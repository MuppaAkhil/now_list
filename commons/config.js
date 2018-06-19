//Configure the endpoint base url for lower and production environments
export const config = {
      baseUrl:'http://192.168.1.3:3000/v1/'  
}
//endpoints builder
export const endpoints = {
    fetchCardUrl:  (page,itemCount) => {
        return `${config.baseUrl}fetchCards?page=${page}&itemCount=${itemCount}`;
    }
}
