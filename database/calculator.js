function startCalculator(){

    console.log("Calculator Started");

    let expression = "";

    const screen = document.getElementById("screen");

    const formula = document.getElementById("formula");
    const problem = document.getElementById("problem");
    const steps = document.getElementById("steps");
    const answer = document.getElementById("answer");

    if(!screen){
        console.log("Screen not found!");
        return;
    }


    const buttons = document.querySelectorAll(".modern-calculator-page .btn");

    console.log("Buttons Found:", buttons.length);


    buttons.forEach(button => {

        button.onclick = function(){

            let value = this.dataset.value;

            console.log(value);


            // =========================
            // CLEAR
            // =========================

            if(value === "AC"){

                expression = "";

                screen.value = "0";

                formula.innerHTML = "Waiting for calculation...";

                problem.innerHTML =
                    "Enter numbers and operators using the calculator.";

                steps.innerHTML = `
                    <div class="empty-step">
                        <span>01</span>
                        Waiting for calculation...
                    </div>
                `;

                answer.innerHTML = "—";

                return;
            }


            // =========================
            // BACKSPACE
            // =========================

            else if(value === "⌫"){

                expression = expression.slice(0, -1);

            }


            // =========================
            // EQUAL
            // =========================

            else if(value === "="){

                if(expression === ""){
                    return;
                }

                try{

                    let originalExpression = expression;

                    let result = eval(expression);

                    expression = result.toString();

                    screen.value = expression;


                    // Update solution
                    showCalculation(
                        originalExpression,
                        result
                    );

                }

                catch{

                    expression = "";

                    screen.value = "Error";

                    formula.innerHTML = "Invalid formula";

                    problem.innerHTML =
                        "The expression could not be calculated.";

                    steps.innerHTML = `
                        <div class="error-step">
                            Invalid mathematical expression.
                        </div>
                    `;

                    answer.innerHTML = "Error";
                }

            }


            // =========================
            // OTHER BUTTONS
            // =========================

            else{

                expression += value;

            }


            screen.value = expression || "0";

        };

    });

}

function showCalculation(expression, result){

    const formula = document.getElementById("formula");
    const problem = document.getElementById("problem");
    const steps = document.getElementById("steps");
    const answer = document.getElementById("answer");


    if(!formula || !problem || !steps || !answer){
        return;
    }


    // Convert symbols for display
    let displayExpression = expression
        .replace(/\*/g, " × ")
        .replace(/\//g, " ÷ ")
        .replace(/\+/g, " + ")
        .replace(/-/g, " − ");


    // Formula detection
    let detectedFormula = "Arithmetic Operation";


    if(expression.includes("+")){
        detectedFormula = "Addition: a + b";
    }

    else if(expression.includes("-")){
        detectedFormula = "Subtraction: a − b";
    }

    else if(expression.includes("*")){
        detectedFormula = "Multiplication: a × b";
    }

    else if(expression.includes("/")){
        detectedFormula = "Division: a ÷ b";
    }

    else if(expression.includes("%")){
        detectedFormula = "Percentage";
    }


    // Formula
    formula.innerHTML = `
        <span class="formula-main">
            ${detectedFormula}
        </span>
    `;


    // Problem
    problem.innerHTML = `
        <span class="problem-expression">
            ${displayExpression}
        </span>
    `;


    // Step by step
    steps.innerHTML = `

        <div class="solution-step">
            <span>01</span>

            <div>
                <small>INPUT EXPRESSION</small>
                <strong>${displayExpression}</strong>
            </div>
        </div>


        <div class="solution-step">
            <span>02</span>

            <div>
                <small>CALCULATE</small>
                <strong>${displayExpression}</strong>
            </div>
        </div>


        <div class="solution-step">
            <span>03</span>

            <div>
                <small>RESULT</small>
                <strong>${result}</strong>
            </div>
        </div>

    `;


    // Final Answer
    answer.innerHTML = result;

}