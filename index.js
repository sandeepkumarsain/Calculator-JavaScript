
        let input1 = document.querySelector(".input");
        let input2 = document.querySelector(".input2");
        let btn = document.querySelector("#button");
        let select = document.querySelector("#select");
        let para = document.querySelector(".para")


        btn.addEventListener("click", event => {
            let num1 = parseFloat(input1.value);
            let num2 = parseFloat(input2.value);
            let operation = select.value;
            let result;

            switch (operation) {

            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                result = num1 / num2;
                break;
            default:
                alert("Please select a valid");
                return;
            }

            para.innerHTML=  result
        });
    