import { checkArticleUrl } from "../src/client/js/urlChecker";

// define global variables
var validUrl = "https://jamesclear.com/saying-no";
var invalidUrl = "Article";
// start unit testing using several senarios
describe("Testing the check url functionality", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("Testing the checkArticleUrl() function", () => {
            expect(checkArticleUrl(validUrl)).toBeTruthy();
        }),
        test("Testing the checkArticleUrl() function", () => {
            expect(checkArticleUrl(invalidUrl)).toBeFalsy();
        }),
        test("Testing the checkArticleUrl() function", () => {
            expect(checkArticleUrl(invalidUrl)).toBeDefined();
        }),
        test("Testing the checkArticleUrl() function", () => {
            expect(checkArticleUrl(validUrl)).toBeDefined();
        })

});