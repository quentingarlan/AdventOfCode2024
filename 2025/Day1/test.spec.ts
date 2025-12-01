const assert = require("assert")
const input = require("./string.ts")
let part1 = require("./Part1.ts")
let part2 = require("./Part2.ts")

let inputTest: string = input.inputTest

describe("Advent Calendar", function () {
  describe("SecretEntrance", function () {
    it("should return 3", function () {
      var result =
        part1.SecretEntrance(
          inputTest
        )
      assert.equal(
        result,
        3
      )
    })
  })

  describe("SecretEntrance2", function () {
    it("should return 6", function () {
      var result =
        part2.SecretEntrance(
          inputTest
        )
      assert.equal(
        result,
        6
      )
    })
  })
})
