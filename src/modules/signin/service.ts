import {IUser} from '../../constants/user';
import {IActionLoginPayload} from './index';

export const loginApi = async (username: string, password: string) => {
  try {
    let response;
    if (username === '' && password === '') {
      response = {
        name: 'Lih ne',
        token: '000',
        id: '1',
      };
      return {
        result: response,
      };
    } else
      return {
        error: {
          message: 'Sai pass',
          code: -1,
        },
      };
  } catch (error) {
    return {
      error: {
        error: {
          message: 'oops...',
          code: -1,
        },
      },
    };
  }
};
export const logoutApi = async (id: string) => {
  try {
    const response = {token: '', id: id};
    return {
      result: response,
    };
  } catch (error) {
    return {
      error: {
        message: 'oops...',
        code: -1,
      },
    };
  }
};
