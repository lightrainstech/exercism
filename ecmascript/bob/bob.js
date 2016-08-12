//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Bob {

  hey(message) {

    return (message.toUpperCase() === message && message.toLowerCase() !== message) ? 'Whoa, chill out!' : ((message.charAt(message.length - 1) === '?') ? 'Sure.' : (message.trim().length == 0) ? 'Fine. Be that way!' : 'Whatever.');

  }
}

export default Bob;

