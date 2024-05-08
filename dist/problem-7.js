"use strict";
const logString = (str) => {
    if (typeof str === "string") {
        return str;
    }
    if (typeof str !== "string") {
        throw new Error("Input is not a string.");
    }
};
console.log(logString("Hello, TypeScript!"));
// console.log(logString(42))
