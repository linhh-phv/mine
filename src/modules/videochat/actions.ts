import {IActionCallback} from '../../constants/base';
import {socketConnect, IP_HOST, PORT} from '../../constants/api';
// import Peer from 'react-native-peerjs';

import {ActionTypes, IActionJoinChatPayload, IActionJoinChat} from './index';

// socketConnect.on('connection', () => console.log('connected client'));
// const peerServer = new Peer(undefined, {
//   host: IP_HOST,
//   secure: false,
//   // port: PORT,
//   path: '/mypeer',
// });


// const peerServer = new Peer();
// peerServer.on('error', console.log);
export function joinChatAction(
  payload: IActionJoinChatPayload,
): IActionJoinChat {
  const roomId = 'gdfggdfgdfg43tergdfgdf';
  // peerServer.on('open', (userId: any) => {
  //   console.log('call ne')

  //   socketConnect.emit('join-room', {userId, roomId});
  // });
  // socketConnect.on('user-connected', (userId: any) => {
  //   connectNewUser(userId, payload, null);
  // });
  // peerServer.on('call', (call: any) => {
  //   call.answer(payload);
  //   call.on('stream', (stream: any) => {
  //     return {
  //       type: ActionTypes.ADD_STREAM,
  //       payload: stream,
  //     };
  //   });
  // });
  return {
    type: ActionTypes.MY_STREAM,
    payload,
  };
}
// function connectNewUser(
//   id: any,
//   stream: IActionJoinChatPayload,
//   dispatch: any,
// ) {
//   const call = peerServer.call(id, stream);
// }
