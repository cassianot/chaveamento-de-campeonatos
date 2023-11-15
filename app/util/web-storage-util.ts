export class WebStorageUtil {
  static get(key: string): any {
    return JSON.parse(window.localStorage.getItem(key)!);
  }

  static set(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
}