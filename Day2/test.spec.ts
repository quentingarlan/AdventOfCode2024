const assert = require("assert")
const input = require("./string.ts")
let part1 = require("./Part1.ts")
let part2 = require("./Part2.ts")

let inputTest: string = input.inputTest

describe("Advent Calendar", function () {
  describe("RedNose", function () {
    it("should return 2", function () {
      var result =
        part1.RedNose(
          inputTest
        )
      assert.equal(
        result,
        2
      )
    })
  })


  describe("Advent Calendar", function () {
    describe("RedNose", function () {
      it("should return 4", function () {
        var result =
          part2.RedNose(
            inputTest
          )
        assert.equal(
          result,
          4
        )
      })
    })
})
