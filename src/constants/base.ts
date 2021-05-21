export interface IError {
  message: string;
  code: number;
  data?: any;
}

export interface IActionCallback<T> {
  onSuccess?: (data?: T, message?: string) => void;
  onFail?: (error?: IError) => void;
}
