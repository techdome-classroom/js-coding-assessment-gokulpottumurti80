function decodeTheRing(message, pattern) {
  const memo = {};  // Memoization cache

  function match(mIdx, pIdx) {
      // Check if this sub-problem was already solved
      const key = `${mIdx},${pIdx}`;
      if (key in memo) return memo[key];

      // If both message and pattern are fully processed
      if (mIdx === message.length && pIdx === pattern.length) return true;

      // If pattern is used up but message isn't, or vice versa
      if (pIdx === pattern.length) return false;

      // Handle '*' in pattern
      if (pattern[pIdx] === '*') {
          // '*' matches 0 or more characters:
          // Either move on in the pattern, or match it with a character in message
          if (match(mIdx, pIdx + 1) || (mIdx < message.length && match(mIdx + 1, pIdx))) {
              memo[key] = true;
              return true;
          }
      }
      // Handle '?' in pattern (matches exactly one character)
      else if (pattern[pIdx] === '?' || (mIdx < message.length && pattern[pIdx] === message[mIdx])) {
          if (match(mIdx + 1, pIdx + 1)) {
              memo[key] = true;
              return true;
          }
      }

      // No match found
      memo[key] = false;
      return false;
  }

  return match(0, 0);  // Start recursion from the beginning of both strings
}

module.exports = decodeTheRing;
