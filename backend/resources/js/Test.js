import * as validator from './Validator';

function testAdd(value1, value2) {
  validator.typeCheck(() => {
    validator.assert(validator.isInts(value1, value2) || validator.isStrings(value1, value2),
      'testAdd arguments type');
    validator.assert(arguments.length === 2, 'testAdd arguments length');
  });
  return value1 + value2;
};

function test1(value1, value2) {
  validator.typeCheck(() => {
    [[value1, value2], validator.isInts, validator.isStrings];
  })
  return 'test1Result';
};

function test2(value1, value2) { // eslint-disable-line
  validator.typeCheck(() => {
    [validator.arrayFrom(arguments), validator.isInts, validator.isStrings];
  });
  return 'test2Result';
};

const test3 = (value1, value2) => {
  validator.typeCheck(() => {
    [[value1, value2], validator.isInts, validator.isStrings];
  });
  return 'test3Result';
};

const test4 = (...args) => {
  validator.typeCheck(() => [args, validator.isInts, validator.isStrings]);
  const [value1, value2] = args; // eslint-disable-line
  return 'test4Result';
}

// -----------------------
// 動作確認
// -----------------------
export const Test = () => {
  console.info('test', testAdd(1, 2));
  console.info('test', testAdd('a', 'b'));

  console.info('test', test1(1, 'abc'));
  console.info('test', test2(1, 'abc'));
  console.info('test', test3(1, 'abc'));
  console.info('test', test4(1, 'abc'));
};
