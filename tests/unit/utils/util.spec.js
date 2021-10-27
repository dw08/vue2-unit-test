import utils from "@/utils/util";

jest.useFakeTimers();

describe('util.js unit test', () => {
  it("test debounce not to be triggered", () => {
    const fn = jest.fn();
    const fnDebounce = utils.debounce(fn);
    for (let i = 0; i < 3; i++) {
      fnDebounce()
    }
    expect(fn).toBeCalledTimes(0);
  });
  it("test debounce wait 1000ms to be triggered", () => {
    const fn = jest.fn();
    const fnDebounce = utils.debounce(fn);
    for (let i = 0; i < 3; i++) {
      fnDebounce()
    }
    jest.advanceTimersByTime(1000);
    fnDebounce();
    expect(fn).toBeCalledTimes(1);
  });
  it("test debounce wait 1000ms not to be triggered", () => {
    const fn = jest.fn();
    const fnDebounce = utils.debounce(fn, 2000);
    for (let i = 0; i < 3; i++) {
      fnDebounce()
    }
    jest.advanceTimersByTime(1000);
    fnDebounce();
    expect(fn).toBeCalledTimes(0);
  });
  it("test debounce wait 2000ms to be triggered", () => {
    const fn = jest.fn();
    const fnDebounce = utils.debounce(fn, 2000);
    for (let i = 0; i < 3; i++) {
      fnDebounce()
    }
    jest.advanceTimersByTime(2000);
    fnDebounce();
    expect(fn).toBeCalledTimes(1);
  });
});