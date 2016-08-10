class Transcriptor {

  toRna(dna){
    let dnaArray = [...dna];
    return dnaArray.map(this.translater).join('');
  }

  translater(nucleotide){
    var translations = {
      A: 'U',
      T: 'A',
      C: 'G',
      G: 'C'
    };
    return translations[nucleotide];
  }
}

export default Transcriptor;
