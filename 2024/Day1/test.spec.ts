const assert = require("assert")
const input = require("./string.ts")
let part1 = require("./Part1.ts")
let part2 = require("./Part2.ts")

let inputTest: string = input.inputTest

describe("Advent Calendar", function () {
  describe("HistorianHysteria", function () {
    it("should return 11", function () {
      var result =
        part1.HistorianHysteria(
          inputTest
        )
      assert.equal(
        result,
        11
      )
    })
  })

  describe("HistorianHysteria2", function () {
    it("should return 31", function () {
      var result =
        part2.HistorianHysteria(
          inputTest
        )
      assert.equal(
        result,
        31
      )
    })
  })
})
