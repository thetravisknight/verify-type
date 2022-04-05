import { vt } from '../index';
test('VT', () => {
	expect(vt.isString("Singer, Writer")).toBe(true);
	expect(vt.isString("")).toBe(true);
	expect(vt.isString(true)).toBe(false);
	expect(vt.isString(["1", "2", "3"])).toBe(false);
	expect(vt.isString(undefined)).toBe(false);
});
