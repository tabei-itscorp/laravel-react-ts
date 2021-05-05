export const assert = function(value, message) {
  if (typeof message === 'undefined' || message === null) {
    message = '';
  }
  if (value !== true) {
    throw new Error(message);
  }
};

export const isArray = function(value) {
  return Object.prototype.toString.call(value) === '[object Array]';
};

export const isType = function(checkFunc, argsArray) {
  assert(arguments.length >= 1);
  assert(typeof checkFunc == 'function');
  assert(isArray(argsArray));

  const l = argsArray.length;
  if (l === 0) {
    return false;
  } if (l === 1) {
    return checkFunc(argsArray[0]);
  }
  for (let i = 0; i < l; i++) {
    if (!checkFunc(argsArray[i])) {
      return false;
    }
  }
  return true;
};

export const arrayFrom = function(argsObj) {
  return Array.prototype.slice.call(argsObj);
};

export const isNumber = function(value) {
  //※isFinite()：値が有限か無限か
  return typeof value === 'number' && isFinite(value);
};

export const isInt = function(value) {
  if (!isNumber(value)) {
    return false;
  }
  //※Math.round()：四捨五入してもっとも近似の整数を返す
  return Math.round(value) === value;
};

export const isInts = function(value) { // eslint-disable-line
  return isType(isInt, arrayFrom(arguments));
};

export const isString = function(value) {
  return typeof value === 'string';
};

export const isStrings = function(value) { // eslint-disable-line
  return isType(isString, arrayFrom(arguments));
};

export const isFunction = function(value) {
  return typeof value === 'function';
};

//---

export const stringQuote = function(value) {
  return isString(value) ? `'${value}'` : value.toString();
};

const typeCheckMode = true;
export const typeCheck = (func) => {
  if (typeCheckMode) {
    const result = func();
    if (Array.isArray(result)) {
      const args = result[0];
      assert(result.length - 1 === args.length, 'typeCheck arguments length');
      for (let i = 1; i < result.length; i++) {
        assert(isFunction(result[i]), 'typeCheck arguments not function');
        assert(result[i](args[i-1]), `typeCheck ${result[i].name}(${stringQuote(args[i-1])})`);
      }
    }
  }
};