

   //sessionStorage封装
   export function sessionStorageFetch(key) {
    return JSON.parse(window.sessionStorage.getItem(key)||'[]')
}
// export function sessionStorageFetch(key) {
//     return window.sessionStorage.getItem(key)||'[]'
// }
  
  export function sessionStorageSave (key,items) {
    window.sessionStorage.setItem(key,JSON.stringify(items))
  }
  
  export function sessionStorageDelete(key) {
    window.sessionStorage.removeItem(key)
  }
  
  
  //localStorage封装
  export function localStorageFetch(key) {
    return JSON.parse(window.localStorage.getItem(key)||'[]')
  }
  
  export function localStorageSave (key,items) {
    window.localStorage.setItem(key,JSON.stringify(items))
  }
  
  export function localStorageDelete(key) {
    window.localStorage.removeItem(key)
  }