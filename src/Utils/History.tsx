import { createBrowserHistory } from 'history';
  
export const browserHistory = createBrowserHistory()
 
export function push(targetUrl: string) {
    browserHistory.push(targetUrl)
}
  
export function redirect(targetUrl: string) {
    browserHistory.replace(targetUrl)
}
  
export function reload() {
    window.location.reload()
}
 
export default browserHistory