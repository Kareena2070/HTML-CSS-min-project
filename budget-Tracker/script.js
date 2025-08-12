const style = document.createElement("style");
style.textContent = `
    * {
        padding: 0;
        margin: 0;
    }
    body {
        background-color: #fdf0d5;
        margin-top: 3rem;
        text-align: center;
    }
    h1 {
        margin: 1rem 40rem;
        font-size: 4rem;
        
    }
    
    button {
      padding: 8px 12px;
      margin: 5px;
      background: #333;
      color: white;
      border: none;
      cursor: pointer;
    }
    
    button:hover {
      background: #555;
    }

    input {
        padding: 1em;
    }
`;

const div = document.createElement("div");

const heading = document.createElement("h1");
heading.textContent = "💰 Budget Tracker";

const input = document.createElement("input");
input.placeholder = "Enter amount";

const btnIncome = document.createElement("button")
btnIncome.textContent = "Add Income"
const btnExpense = document.createElement("button")
btnExpense.textContent = "Add Expense"

const balance = document.createElement("h2")
balance.textContent = "Current balance: ₹0"

div.append(input, btnIncome, btnExpense, balance);
document.head.append(style);
document.body.append(heading, div);

