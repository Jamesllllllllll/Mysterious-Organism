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
      console.log(`changeBase variable index: ${changeBase}`);
      console.log(`Old base: ${dna[changeBase]}`);
      while (newBase === dna[changeBase]) {
        newBase = returnRandBase();
      }
      dna[changeBase] = newBase;
      console.log(`New base: ${newBase}`);
      console.log(`Changed base: ${changeBase}\n`);
    },
  }
};

const specimenNum = 1;
const newPA = pAequorFactory(specimenNum, mockUpStrand());

console.log("\n");

console.log(newPA);

console.log("\n");

newPA.mutate();

console.log("After mutating:\n");
console.log(newPA);

console.log("\n\n");


