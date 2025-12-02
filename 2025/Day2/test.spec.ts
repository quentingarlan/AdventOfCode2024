const assert = require("assert")
const input = require("./string.ts")
let part1 = require("./Part1.ts")
let part2 = require("./Part2.ts")

let inputTest: string = input.inputTest

describe("Advent Calendar", function () {
  describe("GiftShop", function () {
    it("should return 1227775554", function () {
      var result =
        part1.GiftShop(
          inputTest
        )
      assert.equal(
        result,
        1227775554
      )
    })
  })

  describe("GiftShop2", function () {
    it("should return 4174379265", function () {
      var result =
        part2.GiftShop(
          inputTest
        )
      assert.equal(
        result,
        4174379265
      )
    })
  })
})
