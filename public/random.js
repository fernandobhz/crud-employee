/* eslint-disable */

const randomNamesGenerator = {
  firstNames: [
    'Vinicius',
    'Talita',
    'Maria',
    'João',
    'José',
    'Marcos'
  ],
  middleNames: [
    'Costa',
    'Araújo',
    'Rodrigues',
    'Pereira',
    'Soares'
  ],
  lastNames: [
    'Pires',
    'Alves',
    'Álvares',
    'Moreira',
    'Ferreira'
  ],
  generate:function(quantity){

    if ( ! quantity )
      quantity = 1;

    var maxNames = this.firstNames.length * this.middleNames.length * this.lastNames.length;
    if (quantity > maxNames) {
      throw "Quantity greater than possible matches. Possible matches: "+maxNames;
    }
    var names = [];
    while ( names.length < quantity ) {
      var name = "";
      var first = Math.floor( Math.random() * this.firstNames.length );
      name+= this.firstNames[first];
      var middle = Math.floor( Math.random() * this.middleNames.length );
      name+= " "+this.middleNames[middle];
      var last = Math.floor( Math.random() * this.lastNames.length );
      name+= " "+this.lastNames[last];
      
      if (names.indexOf(name)==-1) {
        names.push(name);
      }
    }

    if ( quantity == 1) return names[0]
    else return names;
  }
};

function randomNames(qtd) {
  return 'TESTING: ' + randomNamesGenerator.generate(qtd);
}

function randomIntegers(digits) {
  return Math.round(Math.random() * 10 ** (digits - 1), 0);
}

try {
  exports.names = randomNames;
  exports.intergers = randomIntegers;
} catch(err) {

}
