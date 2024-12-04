const assert = require("assert")
const input = require("./string.ts")
let part1 = require("./Part1.ts")
let part2 = require("./Part2.ts")

let inputTest: string =input.inputTest

describe("Advent Calendar", function () {
  describe("NullIt", function () {
    it("should return 18", function () {
      var result =
        part1.CeresSearch(
          inputTest
        )
      assert.equal(
        result,
        18
      )
    })
  })
  describe("NullIt", function () {
    it("should return 9", function () {
      var result =
        part2.CeresSearch(
          inputTest
        )
      assert.equal(
        result,
        9
      )
    })
  })
  
})
