import { vt } from '../index';
test('VT', () => {
	expect(vt.isString("Singer, Writer")).toBe(true);
	expect(vt.isString("")).toBe(true);
	expect(vt.isString(true)).toBe(false);
	expect(vt.isString(["1", "2", "3"])).toBe(false);
	expect(vt.isString(undefined)).toBe(false);

	expect(vt.isNumber("Singer, Writer")).toBe(false);
	expect(vt.isNumber("")).toBe(false);
	expect(vt.isNumber(true)).toBe(false);
	expect(vt.isNumber(["1", "2", "3"])).toBe(false);
	expect(vt.isNumber(undefined)).toBe(false);
	expect(vt.isNumber(1)).toBe(true);
	expect(vt.isNumber(63.55842)).toBe(true);
	expect(vt.isNumber(-884.4845516)).toBe(true);

	expect(vt.isArray("Singer, Writer")).toBe(false);
	expect(vt.isArray("")).toBe(false);
	expect(vt.isArray(true)).toBe(false);
	expect(vt.isArray(["1", "2", "3"])).toBe(true);
	expect(vt.isArray(undefined)).toBe(false);
	expect(vt.isArray(1)).toBe(false);
});
