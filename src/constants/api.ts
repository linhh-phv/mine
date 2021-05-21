import IO from 'socket.io-client';

export const URL = 'https://pure-citadel-01944.herokuapp.com';
// export const URL = 'http://172.16.0.223:5000';
// export const URL = 'http://192.168.1.239:5000';
export const IP_HOST = '192.168.1.239';
export const PORT = '5000';
export const socketConnect = IO(`${URL}`, {
  forceNew: true,
});
