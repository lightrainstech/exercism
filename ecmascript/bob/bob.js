//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Bob {
  isQuestion(message) { return message.charAt(input.length - 1) === '?'; }

  hey(message) {
    if (isQuestion(message)){
      return 'Sure.';
    }
    return 'Whatever.';
  }
}

export default Bob;

