const mortgageAmount = document.querySelector("#amount");
const mortgageTerm = document.querySelector("#term");
const interestRate = document.querySelector("#rate");

const error = document.querySelectorAll(".error");

const resultEmpty = document.querySelector(".empty");
const resultFull = document.querySelector(".not-empty");

const monthlyRepayTextResult = document.querySelector(".result-box > h1");
const repayTextResult = document.querySelector(".result-box > h3");

const calculate = document.querySelector("form");

mortgageAmount.addEventListener("input", () => {
  console.log(`amount: ${mortgageAmount.value}`);
});
mortgageTerm.addEventListener("input", () => {
  console.log(`term: ${mortgageTerm.value}`);
});
interestRate.addEventListener("input", () => {
  console.log(`rate: ${interestRate.value}`);
});
calculate.addEventListener("submit", (e) => {
  e.preventDefault();
  let repayment = calculateRepayment();
  let repaymentInterest = calculateRepaymentInterestOnly();
  console.log(repayment);
  console.log(repaymentInterest);
  resultEmpty.classList.add("hidden");
  resultFull.classList.remove("hidden");
  monthlyRepayTextResult.textContent = repayment;
  repayTextResult.textContent = repaymentInterest;
});

if (mortgageAmount.length == 0) {
  console.log("field is required");
  error.classList.remove("hidden");
}
if (mortgageTerm.length == 0) {
  console.log("field is required");
  error.classList.remove("hidden");
}
if (interestRate.length == 0) {
  console.log("field is required");
  error.classList.remove("hidden");
}

function calculateRepayment() {
  const amount = mortgageAmount.value;
  const term = mortgageTerm.value * 12;
  const rate = interestRate.value;
  const interestResult = amount * (1 + rate / 100);
  const result = interestResult / term;
  /*console.log(result);*/
  return result;
}

function calculateRepaymentInterestOnly() {
  const amount = mortgageAmount.value;
  const rate = interestRate.value;
  const result = amount * (1 + rate / 100);
  /*console.log(result);*/
  return result;
}
