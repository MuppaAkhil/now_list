import axios from 'axios';
import StringConstants from './StringConstants.js';


const NetworkApi = {

  requesttimeout: 30000,
  
  messages: {
    'ECONNABORTED': 'Request timed out.',
    404: 'Service Not Found',
  },

  createErrorObject: (errType, message) => {
    return {
      errType,
      message
    };
  },

  getDefaultHeaders: () => {
    let defaultHeaders = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    return defaultHeaders;
  },

  getWithOutParams: (route, headers, callback) => {
    return NetworkApi.xhrValidate(route, null, 'get', headers, callback);
  },

  getWithParams: (route, params, headers, callback) => {
    return NetworkApi.xhrValidate(route, params, 'get', headers, callback);
  },

  put: (route, params, headers, callback) => {
    return NetworkApi.xhrValidate(route, params, 'put', headers, callback);
  },

  post: (route, params, headers, callback) => {
    return NetworkApi.xhrValidate(route, params, 'post', headers, callback);
  },

  delete: (route, params, headers, callback) => {
    return NetworkApi.xhrValidate(route, params, 'delete', headers, callback);
  },

  retry: (config, callback) => {
    return NetworkApi.xhr(config, callback);
  },

  xhrValidate: async (routeurl, params, methodType, headers, callback) => {
    let config = {
          method:methodType,
          url:routeurl,
          data: params,
          headers: headers ? headers : NetworkApi.getDefaultHeaders(),
          timeout: NetworkApi.requesttimeout,
    };
    NetworkApi.xhr(config, callback);
  },

  xhr: (config, callback) => {
    axios(config).then((response) => {
        callback(null, response.data);
      }).catch((error) => {
        callback(NetworkApi.getErrorObject(error), null);
      });
  },

  getErrorObject: (error) => {
    let errorobject = {};
    const {response={}} = error;
    let msg = NetworkApi.messages[response.status];

    // For Timeout Error From App Axios call
    if ( response.code === 'ECONNABORTED'){
      msg = NetworkApi.messages.ECONNABORTED;
    }
    errorobject = msg ? new Error(msg) : new Error('Something Went Wrong');
    return errorobject;
  }
};
module.exports = NetworkApi;
