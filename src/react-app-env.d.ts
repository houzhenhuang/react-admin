/// <reference types="react-scripts" />

declare global {

  interface IResponse<T = {}> {
    isSuccess: boolean,
    message?: string,
    code: string,
    data: T
  }
}

export { };