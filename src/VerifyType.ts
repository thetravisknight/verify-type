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

}
