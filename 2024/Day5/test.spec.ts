const assert = require("assert")
const input = require("./string.ts")
let part1 = require("./Part1.ts")
let part2 = require("./Part2.ts")

let inputTest: string = `47|53
97|13
97|61
97|47
75|29
61|13
75|53
29|13
97|29
53|29
61|53
97|53
61|29
47|13
75|47
97|75
47|61
75|61
47|29
75|13
53|13

75,47,61,53,29
97,61,53,29,13
75,29,13
75,97,47,61,53
61,13,29
97,13,75,29,47`

describe("Advent Calendar", function () {
  // describe("NullIt", function () {
  //   it("should return 143", function () {
  //     var result =
  //       part1.PrintQueue(
  //         inputTest
  //       )
  //     assert.equal(
  //       result,
  //       143
  //     )
  //   })
  // })
  describe("NullIt", function () {
    it("should return 123", function () {
      var result =
        part2.PrintQueue(
          inputTest
        )
      assert.equal(
        result,
        123
      )
    })
  })
  
})
