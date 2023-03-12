const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * 4)];
};
  
// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Factory function that creates an object with speciesNum and dna
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      let newBase = returnRandBase();
      let changeBase = Math.floor(Math.random() * 15); // this.dna.length should work better than 15
      while (newBase === dna[changeBase]) {
        newBase = returnRandBase();
      }
      dna[changeBase] = newBase;
    },
    compareDNA(compareSpecimen) {
      let inCommon = 0;
      for (let i = 0; i < dna.length; i++){
        if (this.dna[i] === compareSpecimen.dna[i]) {
          inCommon++;
        }
      }
      inCommon = ((inCommon / dna.length) * 100);
      console.log(`Specimen #${specimenNum} and specimen #${compareSpecimen.specimenNum} have ${inCommon.toFixed(2)}% DNA in common.`);
    },
    willLikelySurvive() {
      let t = 0
      for (let i = 0; i < dna.length; i++) {
        if (this.dna[i] === "C" || this.dna[i] === "G") {
          t++;
        }
      }
      if ((t / dna.length) >= .6) {
        return true;
      } else {
        return false;
      }
    }
  }
};

console.log("\n");

// Create and store 30 instances of pAequor in an array that can survive in their natural environment

let thirtySpecimens = [];
let i = 1;

while (i <= 30) {
  temp = pAequorFactory(i, mockUpStrand());
  if (temp.willLikelySurvive() === true) {
    thirtySpecimens.push(temp);
  i++;
  }
}

console.log(`***** Create 30 specimens that are likely to survive: *****\n\n`)

console.log(thirtySpecimens);

console.log(`\n\n***** Compare two specimens: *****\n\n`);

let compare1 = (Math.floor(Math.random() * 30) + 1);
let compare2 = (Math.floor(Math.random() * 30) + 1);

do {
  compare2 = (Math.floor(Math.random() * 30) + 1);
} while (compare1 === compare2);

console.log(thirtySpecimens[compare1].compareDNA(thirtySpecimens[compare2]));

console.log(`\n\n***** Mutate a specimen: *****`);
console.log(`\n(change just one DNA base)\n\n`);

console.log(thirtySpecimens[compare1]);
console.log(thirtySpecimens[compare1].mutate());
console.log(thirtySpecimens[compare1]);

console.log("\n\n");

console.log(`Just for fun, compare specimen #${thirtySpecimens[compare1].specimenNum} and #${thirtySpecimens[compare2].specimenNum} again after mutation:\n`)
console.log(thirtySpecimens[compare1].compareDNA(thirtySpecimens[compare2]));

console.log("\n\n");


