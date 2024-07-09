function countPrimeNumbers() {
  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }

  let primeCount = 0;
  for (let i = 2; i <= 100; i++) {
    if (isPrime(i)) {
      primeCount++;
    }
  }
  return primeCount;
}

const start = performance.now();
const primeCount = countPrimeNumbers();
const end = performance.now();

console.log(
  `Execution time of printing countPrimeNumbers was ${
    end - start
  } milliseconds.`
);
