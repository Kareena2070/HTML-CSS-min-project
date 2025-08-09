const style = document.createElement("style")
document.head.append(style)
style.textContent = `

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body{
    background-color:  #f2e9e4;
    }
    .calculator{
        display: flex;
        justify-content: center;
        align-items: center;
    
    }
    .cal-body{
        margin: 3rem  0;
        width: 35rem;
        height: 45rem;
        background-color:rgb(67, 74, 80);
        border-radius:  1rem;
    }

    .cal-header{
        background-color: #e9ecef;
        height: 4rem;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
    }

    .cal-store{
        background-color:#ced4da;
        height: 10rem;
    }

    .cal-input{
        width: 100%;
        height: 4rem
    }
    
    .cal-button{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;
        padding: 2rem
    }
    button{
        padding: 1rem;
        border-radius: 0.5rem;
    }
    
`



// calculator body
const main = document.createElement("main")
main.classList.add("calculator")
const cal_body = document.createElement("div")
cal_body.classList.add("cal-body")
document.body.append(main)
main.append(cal_body)
const cal_header = document.createElement("div")
cal_header.classList.add("cal-header")
const cal_store = document.createElement("div")
cal_store.classList.add("cal-store")
const cal_input = document.createElement("input")
cal_input.classList.add("cal-input")
const cal_button = document.createElement("div")
cal_button.classList.add("cal-button")

cal_body.append(cal_header, cal_store, cal_input, cal_button)

// calculator buttons
const clear = document.createElement("button")
clear.innerText = "C"
const blackit_left = document.createElement("button")
blackit_left.textContent = "("
const blackit_right = document.createElement("button")
blackit_right.textContent = ")"
const ans = document.createElement("button")
ans.textContent = "="
const num7 = document.createElement("button")
num7.textContent = 7
const num8 = document.createElement("button")
num8.textContent = 8
const num9 = document.createElement("button")
num9.textContent = 9
const num4 = document.createElement("button")
num4.textContent = 4
const num5 = document.createElement("button")
num5.textContent = 5
const num6 = document.createElement("button")
num6.textContent = 6
const num1 = document.createElement("button")
num1.textContent = 1
const num2 = document.createElement("button")
num2.textContent = 2
const num3 = document.createElement("button")
num3.textContent = 3
const zero = document.createElement("button")
zero.textContent = 0
const divi = document.createElement("button")
divi.textContent = "÷"
const mul = document.createElement("button")
mul.textContent = "x"
const sub = document.createElement("button")
sub.textContent = "-"
const add = document.createElement("button")
add.textContent = "+"
const dot = document.createElement("button")
dot.textContent = "·"
const percen = document.createElement("button")
percen.textContent = "%"

cal_button.append(clear,blackit_left, blackit_right, ans,num1, num2, num3, num4, num5, num6, num7, num8, num9,zero, divi, mul, sub, add, dot, percen )







