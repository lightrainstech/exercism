class Hamming {

    compute(a,b) {

        if (a.length === b.length) {
          var aArray = [...a];
          var bArray = [...b];
          var ham = 0;
          for (var index = 0; index < aArray.length; index++) {
            ham = (aArray[index] != bArray[index]) ? ham + 1 : ham;
          }
          return ham;
        } else {
          throw new Error(`DNA strands must be of equal length.`);
        }
    }

}

export default Hamming;

