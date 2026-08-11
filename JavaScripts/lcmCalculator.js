function loadLCM(canvas) {

    canvas.innerHTML = `

        <div class="lcm-future-page">

            <!-- =========================================
                 LEFT SIDE : LCM CALCULATOR
            ========================================== -->

            <div class="lcm-calc-panel">

                <div class="lcm-calc-header">

                    <span class="lcm-header-line"></span>

                    <div>
                        <h1>LCM Calculator</h1>
                        <p>Least Common Multiple System</p>
                    </div>

                    <span class="lcm-header-line"></span>

                </div>


                <!-- INPUT AREA -->

                <div class="lcm-input-area">

                    <div class="lcm-input-group">

                        <label for="lcmInputA">
                            NUMBER A
                        </label>

                        <input
                            type="number"
                            id="lcmInputA"
                            placeholder="Enter first number"
                            min="1"
                        >

                    </div>


                    <div class="lcm-input-group">

                        <label for="lcmInputB">
                            NUMBER B
                        </label>

                        <input
                            type="number"
                            id="lcmInputB"
                            placeholder="Enter second number"
                            min="1"
                        >

                    </div>

                </div>


                <!-- CALCULATE BUTTON -->

                <button
                    class="lcm-calculate-btn"
                    id="lcmCalculateBtn"
                >
                    <span>CALCULATE LCM</span>
                    <span class="lcm-arrow">→</span>
                </button>


                <!-- RESULT -->

                <div class="lcm-result-display">

                    <div class="lcm-result-label">
                        CALCULATION RESULT
                    </div>

                    <div id="lcmResultValue">
                        —
                    </div>

                </div>


                <div id="lcmErrorMessage"
                     class="lcm-error-message">
                </div>

            </div>


            <!-- =========================================
                 RIGHT SIDE : SOLVING PROCESS
            ========================================== -->

            <div class="lcm-solution-panel">

                <div class="lcm-solution-header">

                    <span class="lcm-status-light"></span>

                    <div>

                        <h2>LCM Analysis</h2>

                        <p>
                            Mathematical Solving System
                        </p>

                    </div>

                </div>


                <!-- FORMULA -->

                <div class="lcm-info-card">

                    <div class="lcm-card-label">
                        FORMULA
                    </div>

                    <div
                        id="lcmFormulaDisplay"
                        class="lcm-formula-display"
                    >
                        LCM(a,b) =
                        <span>│a × b│</span>
                        /
                        <span>GCD(a,b)</span>
                    </div>

                </div>


                <!-- SOLVING PROBLEM -->

                <div class="lcm-info-card">

                    <div class="lcm-card-label">
                        SOLVING PROBLEM
                    </div>

                    <div
                        id="lcmProblemDisplay"
                        class="lcm-problem-display"
                    >
                        Enter two positive integers
                        to begin.
                    </div>

                </div>


                <!-- STEP BY STEP -->

                <div class="lcm-info-card lcm-steps-card">

                    <div class="lcm-card-label">
                        STEP-BY-STEP SOLUTION
                    </div>

                    <div id="lcmStepsDisplay">

                        <div class="lcm-empty-step">

                            <span>01</span>

                            Waiting for calculation...

                        </div>

                    </div>

                </div>


                <!-- FINAL ANSWER -->

                <div class="lcm-final-answer">

                    <div class="lcm-card-label">
                        FINAL ANSWER
                    </div>

                    <div id="lcmFinalAnswer">
                        —
                    </div>

                </div>

            </div>

        </div>

    `;


    // Start LCM Calculator
    startLCMCalculator();

}

function startLCMCalculator() {

    console.log("LCM Calculator Started");


    const inputA =
        document.getElementById("lcmInputA");

    const inputB =
        document.getElementById("lcmInputB");

    const calculateButton =
        document.getElementById("lcmCalculateBtn");


    if (
        !inputA ||
        !inputB ||
        !calculateButton
    ) {

        console.log(
            "LCM Calculator elements not found!"
        );

        return;

    }


    calculateButton.onclick = function() {

        performLCMCalculation();

    };

}

function calculateLCMGCD(a, b) {

    a = Math.abs(a);
    b = Math.abs(b);


    while (b !== 0) {

        let temporary = b;

        b = a % b;

        a = temporary;

    }


    return a;

}

function performLCMCalculation() {

    const inputA =
        document.getElementById("lcmInputA");

    const inputB =
        document.getElementById("lcmInputB");


    const resultDisplay =
        document.getElementById("lcmResultValue");

    const errorDisplay =
        document.getElementById("lcmErrorMessage");


    const numberA =
        parseInt(inputA.value);

    const numberB =
        parseInt(inputB.value);


    // Clear previous error

    errorDisplay.innerHTML = "";


    // =========================================
    // VALIDATION
    // =========================================

    if (
        isNaN(numberA) ||
        isNaN(numberB)
    ) {

        resultDisplay.innerHTML = "—";

        errorDisplay.innerHTML =
            "⚠ Please enter two numbers.";

        return;

    }


    if (
        numberA <= 0 ||
        numberB <= 0
    ) {

        resultDisplay.innerHTML = "—";

        errorDisplay.innerHTML =
            "⚠ Please enter positive numbers only.";

        return;

    }


    // =========================================
    // GCD
    // =========================================

    const gcdValue =
        calculateLCMGCD(
            numberA,
            numberB
        );


    // =========================================
    // LCM
    // =========================================

    const lcmValue =
        Math.abs(
            (numberA * numberB) /
            gcdValue
        );


    // =========================================
    // DISPLAY RESULT
    // =========================================

    resultDisplay.innerHTML =
        lcmValue;


    // =========================================
    // SHOW SOLUTION
    // =========================================

    showLCMSolution(
        numberA,
        numberB,
        gcdValue,
        lcmValue
    );

}

function showLCMSolution(
    numberA,
    numberB,
    gcdValue,
    lcmValue
) {

    const problemDisplay =
        document.getElementById(
            "lcmProblemDisplay"
        );


    const stepsDisplay =
        document.getElementById(
            "lcmStepsDisplay"
        );


    const finalAnswer =
        document.getElementById(
            "lcmFinalAnswer"
        );


    // =========================================
    // SOLVING PROBLEM
    // =========================================

    problemDisplay.innerHTML = `

        <span class="lcm-number-highlight">
            ${numberA}
        </span>

        and

        <span class="lcm-number-highlight">
            ${numberB}
        </span>

    `;


    // =========================================
    // STEP BY STEP
    // =========================================

    stepsDisplay.innerHTML = `

        <div class="lcm-solution-step">

            <span class="lcm-step-number">
                01
            </span>

            <div class="lcm-step-content">

                <small>
                    FIND GCD
                </small>

                <strong>
                    GCD(${numberA}, ${numberB})
                    = ${gcdValue}
                </strong>

            </div>

        </div>


        <div class="lcm-solution-step">

            <span class="lcm-step-number">
                02
            </span>

            <div class="lcm-step-content">

                <small>
                    APPLY LCM FORMULA
                </small>

                <strong>
                    LCM =
                    (${numberA} × ${numberB})
                    ÷ ${gcdValue}
                </strong>

            </div>

        </div>


        <div class="lcm-solution-step">

            <span class="lcm-step-number">
                03
            </span>

            <div class="lcm-step-content">

                <small>
                    MULTIPLY
                </small>

                <strong>
                    ${numberA * numberB}
                    ÷ ${gcdValue}
                </strong>

            </div>

        </div>


        <div class="lcm-solution-step">

            <span class="lcm-step-number">
                04
            </span>

            <div class="lcm-step-content">

                <small>
                    FINAL CALCULATION
                </small>

                <strong>
                    ${lcmValue}
                </strong>

            </div>

        </div>

    `;


    // =========================================
    // FINAL ANSWER
    // =========================================

    finalAnswer.innerHTML =
        lcmValue;

}