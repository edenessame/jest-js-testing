/**
 * @jest-environment jsdom
 */

const buttonClick = require("../button");

/**
 * boiler plate script for writing test
 * fs allows us to open and read and write files, create the reference
 * then use the reference to read the contents of the html file and store it in the variable fileContents
 * then attach it to the dom, recomended way of doing it= open/write/close
 *  */ 
beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("DOM tests", () => {
    test("Expects content to change", () => {
        buttonClick();
        expect(document.getElementById("par")
            .innerHTML).toEqual("You Clicked");
    });
    test("h1 should exist", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1);
    });
});