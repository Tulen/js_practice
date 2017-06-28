function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false
    }
  }
  return true
}

function firstNPrimes(n) {
  let prime_array = []
  let prime_counter = 2
  while (n > prime_array.length) {
    if (isPrime(prime_counter)) {
      prime_array.push(prime_counter);
    }
    prime_counter++;
  }
  return prime_array
}

function sumOfNPrimes(n) {
  let output_sum = 0
  let prime_array = firstNPrimes(n)
  for (let i = 0; i < prime_array.length; i++) {
    output_sum += prime_array[i];
  }
  return output_sum
}

console.log(sumOfNPrimes(0));
console.log(sumOfNPrimes(1));
console.log(sumOfNPrimes(4));
