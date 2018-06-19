import NetworkApi from '../commons/NetworkApi';
import {endpoints} from '../commons/config';

export const fetchCards = (page,itemCount,callback) => {
    NetworkApi.getWithOutParams(endpoints.fetchCardUrl(page,itemCount),NetworkApi.getDefaultHeaders(),(err,res) => {
        callback(err,res);
    });
}
