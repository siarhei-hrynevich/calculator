const output = document.querySelector('span')
const equalButton = document.querySelector('.equal-button')
const resetButton = document.querySelector('.action-button')
const inverseButton = document.querySelectorAll('.action-button')[1]
const numberButton = document.querySelectorAll('.number-button')
const operationButton = document.querySelectorAll('.operation-button')
const decimalButton = document.querySelector('.decim-button')
let operationFlag = false
let decimalFlag = false

equalButton.addEventListener("click", function () {

    output.innerHTML = output.innerHTML.replace("÷", "/")
    output.innerHTML = output.innerHTML.replace("×", "*")
    output.innerHTML = output.innerHTML.replace("%", "*100/")
    output.innerHTML = eval(output.innerHTML)
    if(output.innerHTML=="NaN"){
        alert("error")
        output.innerHTML = ""
    }
    operationFlag = false
})

resetButton.addEventListener("click", function () {
    output.innerHTML = 0
    operationFlag = false
    decimalFlag = false
})

inverseButton.addEventListener("click", function () {
    output.innerHTML = parseFloat(output.innerHTML) * (-1)
})

for (let i = 0; i < numberButton.length; i++) {
    let number = numberButton[i]
    number.addEventListener("click", function () {
        if (output.innerHTML === "0") {
            output.innerHTML = number.innerHTML
        } else {
            output.innerHTML += number.innerHTML
        }
    })
}

for (let j = 0; j < operationButton.length; j++) {
    let operation = operationButton[j]
    operation.addEventListener("click", function () {
        if (operationFlag) {

        } else {
            output.innerHTML += operation.innerHTML
            operationFlag = true
            decimalFlag = false
        }
    })
}

decimalButton.addEventListener("click", function () {
    if (decimalFlag) {

    } else {
        output.innerHTML += decimalButton.innerHTML
        decimalFlag = true
    }


})

