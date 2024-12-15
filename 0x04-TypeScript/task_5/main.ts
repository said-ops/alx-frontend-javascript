// Define the MajorCredits and MinorCredits interfaces
interface MajorCredits {
    credits: number;
    brand: "MajorCredits";
  }
  
  interface MinorCredits {
    credits: number;
    brand: "MinorCredits";
  }
  
  // Function to sum MajorCredits
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      brand: "MajorCredits",
    };
  }
  
  // Function to sum MinorCredits
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      brand: "MinorCredits",
    };
  }
  
  // Example usage:
  const major1: MajorCredits = { credits: 20, brand: "MajorCredits" };
  const major2: MajorCredits = { credits: 15, brand: "MajorCredits" };
  
  const minor1: MinorCredits = { credits: 10, brand: "MinorCredits" };
  const minor2: MinorCredits = { credits: 5, brand: "MinorCredits" };
  
  console.log("Sum of Major Credits:", sumMajorCredits(major1, major2)); // { credits: 35, brand: 'MajorCredits' }
  console.log("Sum of Minor Credits:", sumMinorCredits(minor1, minor2)); // { credits: 15, brand: 'MinorCredits' }
  