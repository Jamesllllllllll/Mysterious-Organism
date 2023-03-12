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
      let changeBase = Math.floor(Math.random() * 15);
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
        console.log(`Will likely survive.`);
        return true;
      } else {
        console.log(`Not likely to survive.`);
        return false;
      }
    }
  }
};

console.log("\n");

// Make one specimen
let specimenNum = 1;
const newPA = pAequorFactory(specimenNum, mockUpStrand());

// Make another specimen
specimenNum++;
const newPA2 = pAequorFactory(specimenNum, mockUpStrand());

console.log(newPA);
console.log(newPA.willLikelySurvive())
console.log(newPA2);
console.log(newPA2.willLikelySurvive());

console.log(newPA.compareDNA(newPA2));

// Function that compares the values of each element in an array 
// with the elements of the same index in another array

/* Loop through an array:

for (let i = 0; i < array.length; i++){
  console.log(array[i]);
}

*/

console.log("\n\n");


