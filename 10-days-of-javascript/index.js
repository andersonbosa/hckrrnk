#!/usr/bin/env node

/**
 * @see https://www.hackerrank.com/challenges/js10-switch/problem
 */
// function day2 (s = 'potato') {
//   /** @sol_1 */
//   switch (s.charAt(0)) {
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//       return 'A'
//     case 'b':
//     case 'c':
//     case 'd':
//     case 'f':
//     case 'g':
//       return 'B'
//     case 'h':
//     case 'j':
//     case 'k':
//     case 'l':
//     case 'm':
//       return 'C'
//     default:
//       return 'D'
//   }

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
// function day3 (a = 2) {
//   /*
//    * Complete the isPositive function.
//    * If 'a' is positive, return "YES".
//    * If 'a' is 0, throw an Error with the message "Zero Error"
//    * If 'a' is negative, throw an Error with the message "Negative Error"
//    */
//   if (a === 0) {
//     throw new Error('Zero Error')
//   } else if (a < 0) {
//     throw new Error('Negative Error')
//   }
//   return a > 0 && 'YES'
// }

// /**
//  * @see https://www.hackerrank.com/challenges/js10-arrays/problem
//  */
// function day3 () {
//   const nums = [4, 3, 99, 2, 5, 3, 5, 100]
//   const greaterToLowerDeduplicated = Array.from(
//     new Set(
//       nums.sort((l, r) => r - l)
//     )
//   )
//   return greaterToLowerDeduplicated[1]
// }

// /**
//  * @see 
//  */
// function day4 (a = 3, b = 4) {
//   // return {
//   //   length: a,
//   //   width: b,
//   //   perimeter: (a + b) * 2,
//   //   area: a * b
//   // }

//   const objects = [
//     { x: 1, y: 2 },
//     { x: 3, y: 3 }, /* return x===y */
//     { x: 4, y: 3 },
//     { x: 5, y: 4 },
//     { x: 7, y: 3 },
//   ]
//   return Object.keys(objects)
//     .reduce((totalCount, objKey) => {
//       const matchCondition = Number(objects[objKey].x) === Number(objects[objKey].y)
//       if (matchCondition) {
//         totalCount.push(objects[objKey])
//       }
//       return totalCount
//     }, []).length
// }

/**
 * @see https://www.hackerrank.com/challenges/js10-inheritance/problem
 * @see https://salesforce.stackexchange.com/questions/290816/lwc-constructor-error-must-call-super-constructor-in-derived-class-before-ac#290817
 * @see https://javascript.info/class-inheritance
 */
// function day5 () {
//   class Rectangle {
//     constructor(w, h) {
//       this.w = w
//       this.h = h
//     }
//   }

//   Rectangle.prototype.area = function closedScopeFunctionArea () {
//     return this.w * this.h
//   }

//   class Square extends Rectangle {
//     constructor(w) {
//       super()
//       this.w = w
//       this.h = w
//     }
//   }
//   return new Square(2).area()
// }

/**
 * @day8
 * @see https://www.hackerrank.com/challenges/js10-create-a-button
 */

function day5 () {
  // literals[0] // the area
  // literals[1] // the perimeter
  var [ A, P ] = [ 140, 48 ]
  var doBhaskara = sign => {
    calcBase = sign === '+' ? P + Math.sqrt( Math.pow(P, 2) - 16 * A ) : P - Math.sqrt( Math.pow(P, 2) - 16 * A )
    return calcBase/4
  }
  var signs = [ '-', '+' ]
  var sidesBySign = signs.map(doBhaskara)
  // const [x, y] = sides(`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`);
  var area = sidesBySign.reduce((total, side) => total ? total * side : side, 0)
  var perimeter = sidesBySign.reduce((perimeter, side) => side ? side + perimeter : perimeter, 0)
}
