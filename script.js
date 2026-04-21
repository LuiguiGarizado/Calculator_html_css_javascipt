const num1Input = document.getElementById("num1");
const signInput = document.getElementById("sign");
const num2Input = document.getElementById("num2");
const resultInput = document.getElementById("result");

const buttons = document.getElementsByClassName("btn");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    const valuebutton = this.textContent;

    if (this.id === "c") {
      num1Input.value = "";
      signInput.value = "";
      num2Input.value = "";
      resultInput.value = "";
    }

    else if (this.id === "delete") {
      if (resultInput.value !== "") {
        num1Input.value = "";
        signInput.value = "";
        num2Input.value = "";
        resultInput.value = "";
      }
      else if (num2Input.value !== "") {
        num2Input.value = num2Input.value.slice(0, -1);
      }
      else if (signInput.value !== "") {
        signInput.value = "";
      }
      else {
        num1Input.value = num1Input.value.slice(0, -1);
      }
    }

    else if (this.id === "equal") {
      if (
        num1Input.value !== "" &&
        signInput.value !== "" &&
        num2Input.value !== ""
      ) {
        const number1 = parseFloat(num1Input.value);
        const number2 = parseFloat(num2Input.value);

        var finalresult = 0;

        if (signInput.value === "+") {
          finalresult = number1 + number2;
        } else if (signInput.value === "-") {
          finalresult = number1 - number2;
        } else if (signInput.value === "*") {
          finalresult = number1 * number2;
        } else if (signInput.value === "/") {
          // Evitamos dividir por cero
          if (number2 === 0) {
            finalresult = "Error";
          } else {
            finalresult = number1 / number2;
          }
        }

        resultInput.value = finalresult;
      }
    }

    else if (
      valuebutton === "+" ||
      valuebutton === "-" ||
      valuebutton === "*" ||
      valuebutton === "/"
    ) {
      if (num1Input.value !== "" && resultInput.value === "") {
        signInput.value = valuebutton;
      }
    }

    else {
      if (resultInput.value !== "") {
        num1Input.value = valuebutton;
        signInput.value = "";
        num2Input.value = "";
        resultInput.value = "";
      }
      else if (signInput.value === "") {
        num1Input.value = num1Input.value + valuebutton;
      }
      else {
        num2Input.value = num2Input.value + valuebutton;
      }
    }
  };
}
