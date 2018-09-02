let assert = require('assert');
let validator = require('../index');
let isPostalCodeLocales = require('../lib/isPostalCode').locales;
const isAlphaLocales = require('../lib/isAlpha').locales;
const isAlphanumericLocales = require('../lib/isAlphanumeric').locales;
const isMobilePhoneLocales = require('../lib/isMobilePhone').locales;
const isFloatLocales = require('../lib/isFloat').locales;

describe('Exports', () => {
  it('should export validators', () => {
    assert.equal(typeof validator.isEmail, 'function');
    assert.equal(typeof validator.isAlpha, 'function');
  });

  it('should export sanitizers', () => {
    assert.equal(typeof validator.toBoolean, 'function');
    assert.equal(typeof validator.toFloat, 'function');
  });

  it('should export the version number', () => {
    /* eslint-disable global-require */
    assert.equal(
      validator.version, require('../package.json').version,
      'Version number mismatch in "package.json" vs. "validator.js"'
    );
    /* eslint-enable global-require */
  });

  it('should export isPostalCode\'s supported locales', () => {
    assert.ok(isPostalCodeLocales instanceof Array);
    assert.ok(validator.isPostalCodeLocales instanceof Array);
  });

  it('should export isAlpha\'s supported locales', () => {
    assert.ok(isAlphaLocales instanceof Array);
    assert.ok(validator.isAlphaLocales instanceof Array);
  });

  it('should export isAlphanumeric\'s supported locales', () => {
    assert.ok(isAlphanumericLocales instanceof Array);
    assert.ok(validator.isAlphanumericLocales instanceof Array);
  });

  it('should export isMobilePhone\'s supported locales', () => {
    assert.ok(isMobilePhoneLocales instanceof Array);
    assert.ok(validator.isMobilePhoneLocales instanceof Array);
  });

  it('should export isFloat\'s supported locales', () => {
    assert.ok(isFloatLocales instanceof Array);
    assert.ok(validator.isFloatLocales instanceof Array);
  });
});
