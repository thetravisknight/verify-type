export class VerifyType {

  isString(s: any) {
    try {
      if (typeof s === 'string' || s instanceof String) {
				return true
			}
      return false;
    } catch (error) {
      return false;
    }
  }

  isNumber(n: any) {
    try {
      if (typeof n === 'number') {
				return true
			}
      return false;
    } catch (error) {
      return false;
    }
  }

  isArray(a: any) {
    try {
      if (Array.isArray(a)) {
				return true
			}
      return false;
    } catch (error) {
      return false;
    }
  }

  isEmptyArray(a: any) {
    if(this.isArray(a) && !a.length) {
      return true;
    }
    return false;
  }

}
