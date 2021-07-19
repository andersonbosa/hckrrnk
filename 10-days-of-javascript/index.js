#!/usr/bin/env node

/**
 * @link https://www.hackerrank.com/challenges/js10-switch/leaderboard
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
