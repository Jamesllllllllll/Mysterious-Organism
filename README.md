# Mysterious Organism

## Project for Codecademy

### Project Goals

> **Context:** You’re part of a research team that has found a new mysterious organism at the bottom of the ocean near hydrothermal vents. Your team names the organism, Pila aequor (P. aequor), and finds that it is only comprised of 15 DNA bases. The small DNA samples and frequency at which it mutates due to the hydrothermal vents make P. aequor an interesting specimen to study. However, P. aequor cannot survive above sea level and locating P. aequor in the deep sea is difficult and expensive. Your job is to create objects that simulate the DNA of P. aequor for your research team to study.
> 
> As you progress through the steps, use the terminal and `console.log()` statements to check the output of your loops and functions. 
> 
> Starter code for `returnRandBase()` and `mockUpStrand()` is included.

The first step was to create a Factory Function that creates an object with two key:values - A number (I think for simple enumeration) and a "DNA strand" which is an array of 15 values, which are each a random letter from the available set **D G C T**.

I used a Factory Function example from Codecademy:

```
const dogFactory = (name, age, breed) => {
  return {
    name: name,
    age: age,
    breed: breed,
    bark() {
      console.log('Woof!');  
    }
  };
};
```

It was easy to see where the starter functions should go.

It took some time to figure out which variables to store the index, the value of the index, etc. In the end, a simple `while` loop was enough to randomly choose a new 'base' to insert into the array.

I used a lot of console.log() statements on different variables at certain stages to make sure the values were moving correctly.

***

### Next step:

- [x] Write `compareDNA()` that compares *"the current pAequor's .dna with the passed in pAequor's .dna and compute how many bases are identical and in the same locations."* The function does not return anything, but prints a message that states the percentage of the DNA the two objects have in common.

- [x] *"P. aequor have a likelier chance of survival if their DNA is made up of at least 60% 'C' or 'G' bases.*

*In the returned object of pAequorFactory(), add another method .willLikelySurvive().*

*.willLikelySurvive() returns true if the object’s .dna array contains at least 60% 'C' or 'G' bases. Otherwise, .willLikelySurvive() returns false."*

- [x] *"With the factory function set up, your team requests that you create 30 instances of pAequor that can survive in their natural environment. Store these instances in an array for your team to study later."*

