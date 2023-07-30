function fibonacci(num) {
  if (num === 0) {
    return 0;
  }

  // Create an array to store previously calculated Fibonacci numbers
  const memo = [0, 1];

  function calculateFibonacci(n) {
    // If the Fibonacci number is already calculated, return it from the memo array
    if (memo[n] !== undefined) {
      return memo[n];
    }

    // Otherwise, calculate the Fibonacci number and store it in the memo array
    memo[n] = calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
    return memo[n];
  }

  // Call the recursive function to calculate the num-th Fibonacci number
  return calculateFibonacci(num);
}

// Test the function
const num = 10; // Replace this with any value between 0 and 50
const result = fibonacci(num);
console.log(`The ${num}-th Fibonacci number is: ${result}`);


module.exports = fibonacci;
