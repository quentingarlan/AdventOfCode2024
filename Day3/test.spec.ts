const assert = require("assert")
const input = require("./string.ts")
let part1 = require("./Part1.ts")
let part2 = require("./Part2.ts")

let inputTest: string = input.inputTest

describe("Advent Calendar", function () {
  describe("NullIt", function () {
    it("should return 161", function () {
      var result =
        part1.NullIt(
          inputTest
        )
      assert.equal(
        result,
        161
      )
    })
  })
  describe("NullIt", function () {
    it("should return 48", function () {
      var result =
        part2.NullIt(
          inputTest
        )
      assert.equal(
        result,
        48
      )
    })
  })
  
})
