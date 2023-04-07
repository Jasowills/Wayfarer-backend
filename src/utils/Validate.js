class Validate {
  /**
   * Check if provided email has a valid email address formatting
   * @param {string} email - email address to be validated
   * @returns {boolean} - true is email is properly formatted, false if otherwise
   */
  static isEmail(email) {
    const re = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/ig;
    return re.test(email);
  }

  static isValidParamsLength(param, length) {
    return param.length <= length;
  }

  static checkEmpty(input) {
    const re = /^\s*$/;
    return re.test(input);
  } 

  static containsNumber(name) {
    const re = /\d/;
    return re.test(name);
  }

  static validImage(image) {
    const re = /\.(jpg|jpeg|png|gif)\s*$/i;
    return re.test(image);
  }
  
  static isMatchingPassword(password, confirmPassword) {
    return password === confirmPassword;
  }

  static isNumber(item) {
    const re = /^[-+]?\d*$/;
    return re.test(item);
  }

  static isValidDestination(destination) {
    const re = /^[a-zA-Z']+(\s[a-zA-Z']+)?$/;
    return re.test(destination);
  }
}

export default Validate;
