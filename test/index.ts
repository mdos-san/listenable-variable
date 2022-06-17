import tap from "tap";
import ListenableVar from "../src";

let cb1Counter = 0;
let cb2Counter = 0;

const cb1 = (newValue: number) => cb1Counter = newValue;
const cb2 = (newValue: number) => cb2Counter = newValue;

const [getValue, setValue, listenValue] = ListenableVar(42);
listenValue(cb1);
const removeCb2 = listenValue(cb2);

tap.equal(42, cb1Counter, "Should call cb imediatly");
tap.equal(42, cb2Counter, "Should call cb imediatly");

setValue(21);

tap.equal(21, cb1Counter, "Should update when new value is set");
tap.equal(21, cb2Counter, "Should update when new value is set");

removeCb2();
setValue(1995);

tap.equal(1995, cb1Counter, "Should update when new value is set");
tap.equal(21, cb2Counter, "Should not update when unsubscribed");

tap.equal(1995, getValue(), "Should be able to get value");

