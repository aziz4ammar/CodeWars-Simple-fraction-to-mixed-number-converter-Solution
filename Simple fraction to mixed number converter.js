function mixedFraction(s){
    // Parsing the numerator and denominator from the input string
    let [numerator, denominator] = s.split('/').map(Number);
    
    if (denominator === 0) {
      throw new Error("ZeroDivisionError: Denominator cannot be zero.");
    }
  
    if (numerator === 0) {
      return "0";
    }
  
    // Checking if the fraction is negative
    let isNegative = false;
    if (numerator < 0 && denominator > 0 || numerator > 0 && denominator < 0) {
      isNegative = true;
    }
  
    // Converting the numerator and denominator to positive values
    numerator = Math.abs(numerator);
    denominator = Math.abs(denominator);
  
    // Getting the whole number part of the mixed number
    let wholeNumber = Math.floor(numerator / denominator);
  
    // Getting the remaining numerator after subtracting the whole number part
    numerator = numerator % denominator;
  
    // Simplifying the fraction
    let gcd = findGCD(numerator, denominator);
    numerator = numerator / gcd;
    denominator = denominator / gcd;
  
    // Constructing the mixed number string
    let result = "";
    if (wholeNumber > 0) {
      result += wholeNumber;
    }
    if (numerator > 0) {
      if (result !== "") {
        result += " ";
      }
      result += numerator + "/" + denominator;
    }
  
    if (isNegative) {
      result = "-" + result;
    }
  
    return result;
  }
  
  // Helper function to find the greatest common divisor (GCD)
  function findGCD(a, b) {
    if (b === 0) {
      return a;
    }
    return findGCD(b, a % b);
  }
  