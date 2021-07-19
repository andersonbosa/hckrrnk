#!/usr/bin/env node

/**
 * @see https://www.hackerrank.com/challenges/js10-switch/problem
 */
function day2 (s = 'potato') {
  /** @sol_1 */
  switch (s.charAt(0)) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      return 'A'
    case 'b':
    case 'c':
    case 'd':
    case 'f':
    case 'g':
      return 'B'
    case 'h':
    case 'j':
    case 'k':
    case 'l':
    case 'm':
      return 'C'
    default:
      return 'D'
  }

  /** @sol_2 */
  // const mappedGroups = {
  //   A: 'aeiou',
  //   B: 'bcdfg',
  //   C: 'hjklm',
  //   D: 'npqrstvwxyz'
  // }
  // return Object.keys(mappedGroups).reduce((foundGroup, groupKey) => {
  //   const firstCharacter = s.charAt(0)
  //   if (mappedGroups[groupKey].includes(firstCharacter)) {
  //     foundGroup = groupKey
  //   }
  //   return foundGroup || ''
  // }, '')
}

/**
 * @see https://www.hackerrank.com/challenges/js10-throw/problem
 */
function day3 (a = 2) {
  /*
   * Complete the isPositive function.
   * If 'a' is positive, return "YES".
   * If 'a' is 0, throw an Error with the message "Zero Error"
   * If 'a' is negative, throw an Error with the message "Negative Error"
   */
  if (a === 0) {
    throw new Error('Zero Error')
  } else if (a < 0) {
    throw new Error('Negative Error')
  }
  return a > 0 && 'YES'
}

/**
 * @see https://www.hackerrank.com/challenges/js10-inheritance/problem
 * @see https://salesforce.stackexchange.com/questions/290816/lwc-constructor-error-must-call-super-constructor-in-derived-class-before-ac#290817
 * @see https://javascript.info/class-inheritance
 */
function day5 () {
  class Rectangle {
    constructor (w, h) {
      this.w = w
      this.h = h
    }
  }

  Rectangle.prototype.area = function closedScopeFunctionArea () {
    return this.w * this.h
  }

  class Square extends Rectangle {
    constructor (w) {
      super() 
      this.w = w
      this.h = w
    }
  }
  return new Square(2).area()
}
