export class validateBase {

  _errors = {};

  setError(param: string, msg: string): void {
    this._errors[param] = msg;
  }

  errorInfo() {
    if (Object.keys(this._errors).length) {
      return {
        "response_action": "errors",
        "errors": this._errors
      }
    }
    return null;
  }
}
