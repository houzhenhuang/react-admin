/// <reference types="react-scripts" />

declare global {

  interface IResponse<T = {}> {
    isSuccess: boolean,
    message?: string,
    code: string,
    data: T
  }

  interface AppRoute {
    index?: boolean,
    path: string,
    fullPath: string,
    isAuth: boolean,
    element?: JSX.Element,
    children?: AppRoute[]
  }

}

export { };