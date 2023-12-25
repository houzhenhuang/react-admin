/// <reference types="react-scripts" />

declare module '*.module.less' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "./App.module.less"

declare global {

  interface IResponse<T = {}> {
    isSuccess: boolean,
    message?: string,
    code: string,
    data: T
  }

}

export { };