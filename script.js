let expression = "0";
let answer = "0"
        function updateDisplay() {
            document.getElementById('expression').value = expression;
        }

        function clearInput() {
            expression = "0";
            updateDisplay();
        }

        function backSpace() {
            if (expression.length === 1) {
                expression = "0";
            } else {
                expression = expression.slice(0, -1);
            }
            updateDisplay();
        }

        function handleInput(value) {
            if (expression === "0") {
                expression = value;
            } else {
                expression += value;
            }
            updateDisplay();
        }

          function operate() {
            try{
                const result = eval(expression);
                answer = result.toString();
                console.log(result)
                console.log(result.toString())
                expression = result.toString();
                updateDisplay();
            }catch(error){
                clearInput()
            }
        }
