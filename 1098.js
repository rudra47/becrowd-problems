// Sequence IJ 4

for (let i = 0; i <= 2; i += 0.2) {
   for (let j = 1; j <= 3; j++) {
      if (Number.isInteger(i) || i.toFixed(1) % 1 === 0) {   
         console.log(`I=${Math.round(i)} J=${Math.round(i+j)}`);
      }else{
         console.log(`I=${i.toFixed(1)} J=${(i+j).toFixed(1)}`);
      }
   }
}


// Make a program that prints the sequence like the following example.

// Input
// This problem doesn't have input.

// Output
// Print the sequence like the example below.

//	Output Sample
// I=0 J=1
// I=0 J=2
// I=0 J=3
// I=0.2 J=1.2
// I=0.2 J=2.2
// I=0.2 J=3.2
// .....
// I=2 J=?
// I=2 J=?
// I=2 J=?