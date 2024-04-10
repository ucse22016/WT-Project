const Data = [
 {
    question: "Loans from money lenders are",
    a: "With High rate of interest",
    b: "No proper accounting",
    c: "No transparency",
    d: "All of above",
    correct_answer: "d"
 },
 {
    question: "Life insurance means",
    a: "Insurance of human",
    b: "Insurance of life of human and Cattle",
    c: "Insurance of Life of Machines",
    d: "All of above",
    correct_answer: "a"
 },
 {
    question: "Bank Pass Book is",
    a: "Issued by Bank",
    b: "Contains transaction details of Bank account",
    c: "Shows balance in account",
    d: "All of above",
    correct_answer: "d"
 },
 {
    question: "Currency notes are issued by",
    a: "RBI",
    b: "NABARD",
    c: "Public sector banks",
    d: "Central Government",
    correct_answer: "a"
 },
 {
    question: "What is RuPay Debit Card?",
    a: "Domestic debit card",
    b: "Introduced by National Payments Corporation of India",
    c: "Accepted at all ATMs & PoS machines",
    d: "All of above",
    correct_answer: "d"
 },
 {
    question: "RTGS stands for",
    a: "Real Time Gross Settlement ",
    b: "Ready Time Gross Settlement ",
    c: "Ready Time Grocery Settlement",
    d: "None of Above",
    correct_answer: "a"
 },
 {
    question: "In Recurring Deposits,",
    a: "a fixed sum is deposited every month",
    b: "period of deposit is a fixed tenure",
    c: "interest is paid at FDR rate",
    d: "All of above",
    correct_answer: "d"
 },
 {
    question: "NEFT stands for",
    a: "National Electric Fund Transfer",
    b: "National Electronic Fund Transfer",
    c: "National Electrical Fund Transfer",
    d: "None of Above",
    correct_answer: "b"
 },
 {
    question: "PAN means",
    a: "A kind of utensil",
    b: "Primary Account Number",
    c: "Permanent Account Number",
    d: "None of above",
    correct_answer: "c"
 },
 {
    question: "Under PMSBY, accidental death claim is available for:",
    a: "Rs.1 lac",
    b: "Rs.2 lac",
    c: "Rs.3 lac",
    d: "None of above",
    correct_answer: "b"
 }
];

const quiz = document.querySelector(".quizbody");
const answer_element = document.querySelectorAll(".answer");
const question = document.getElementById("question");
const conductorel = document.querySelector(".quizconductor");
const Detailel = document.querySelector(".details");
const liel = document.querySelector("ul li");

const a_txt = document.getElementById("a_txt");
const b_txt = document.getElementById("b_txt");
const c_txt = document.getElementById("c_txt");
const d_txt = document.getElementById("d_txt");
const Submit = document.getElementById("btn");

let current = 0;
let score = 0;

load();

function load() {
 deselect();
 const currentData = Data[current];
 question.innerText = currentData.question;
 a_txt.innerText = currentData.a;
 b_txt.innerText = currentData.b;
 c_txt.innerText = currentData.c;
 d_txt.innerText = currentData.d;
 Detailel.innerHTML = `<p>${current + 1} of ${Data.length}</p>`;
}


function deselect() {
 answer_element.forEach((answer_element) => {
  answer_element.checked = false;
 });
}


function Selected() {
 let answer;
 answer_element.forEach((answer_elements) => {
  if (answer_elements.checked) {
   answer = answer_elements.id;
  }
 });
 return answer;
}

Submit.addEventListener("click", function () {
 const answers = Selected();

 if (answers) {
  if (answers === Data[current].correct_answer) {
   score++;
  }
  next();
 }
});


function next() {
 current++;

 if (current < Data.length) {
  load();
 } else {
  quiz.innerHTML = `<h2>You answered ${score}/${Data.length} question correctly</h2>
    <button type="button" onclick="location.reload()">Reload</button>
    `;
 }
}
