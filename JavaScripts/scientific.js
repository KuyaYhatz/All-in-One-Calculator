console.log("✅ scientific.js loaded");

/*==========================================================
 * SCIENTIFIC CALCULATOR
 * FUTURISTIC AQUA SYSTEM
 *==========================================================*/

function loadScientificCalculator(canvas) {

    console.log("⚡ Loading Scientific Calculator...");

    if (!canvas) {
        canvas = document.getElementById("canvas");
    }

    if (!canvas) {
        console.error("❌ Scientific Calculator canvas not found");
        return;
    }

    canvas.innerHTML = `

        <div class="sci-container">

            <!--================================================
                HEADER
            =================================================-->

            <div class="sci-header">

                <div class="sci-header-icon">
                    ⚡
                </div>

                <div class="sci-header-info">

                    <span class="sci-system-label">
                        SCIENTIFIC COMPUTATION SYSTEM
                    </span>

                    <h1>
                        SCIENTIFIC CALCULATOR
                    </h1>

                    <p>
                        Advanced mathematical and scientific
                        calculation engine.
                    </p>

                </div>

                <div class="sci-system-status">
                    <span class="sci-status-dot"></span>
                    SYSTEM ONLINE
                </div>

            </div>


            <!--================================================
                MAIN GRID
            =================================================-->

            <div class="sci-main-grid">


                <!--================================================
                    CALCULATOR
                =================================================-->

                <section class="sci-calculator-panel">


                    <!-- DISPLAY -->

                    <div class="sci-display-panel">

                        <div class="sci-display-top">

                            <span id="sciMemoryIndicator">
                                M
                            </span>

                            <span id="sciAngleIndicator">
                                DEG
                            </span>

                            <span>
                                SCI
                            </span>

                        </div>


                        <div
                            id="sciExpression"
                            class="sci-expression"
                        >
                            0
                        </div>


                        <div
                            id="sciDisplay"
                            class="sci-display"
                        >
                            0
                        </div>

                    </div>


                    <!-- ANGLE / MEMORY -->

                    <div class="sci-control-row">

                        <button
                            class="sci-control-btn sci-angle-active"
                            data-angle="DEG"
                            onclick="sciSetAngleMode('DEG')"
                        >
                            DEG
                        </button>

                        <button
                            class="sci-control-btn"
                            data-angle="RAD"
                            onclick="sciSetAngleMode('RAD')"
                        >
                            RAD
                        </button>

                        <button
                            class="sci-control-btn"
                            data-angle="GRAD"
                            onclick="sciSetAngleMode('GRAD')"
                        >
                            GRAD
                        </button>

                        <button
                            class="sci-memory-btn"
                            onclick="sciMemoryClear()"
                        >
                            MC
                        </button>

                        <button
                            class="sci-memory-btn"
                            onclick="sciMemoryRecall()"
                        >
                            MR
                        </button>

                        <button
                            class="sci-memory-btn"
                            onclick="sciMemoryAdd()"
                        >
                            M+
                        </button>

                        <button
                            class="sci-memory-btn"
                            onclick="sciMemorySubtract()"
                        >
                            M−
                        </button>

                        <button
                            class="sci-memory-btn"
                            onclick="sciMemoryStore()"
                        >
                            MS
                        </button>

                    </div>


                    <!-- BASIC KEYBOARD -->

                    <div class="sci-keyboard">

                        <button
                            class="sci-key sci-function"
                            onclick="sciClear()"
                        >
                            AC
                        </button>

                        <button
                            class="sci-key sci-function"
                            onclick="sciBackspace()"
                        >
                            DEL
                        </button>

                        <button
                            class="sci-key sci-function"
                            onclick="sciPercentage()"
                        >
                            %
                        </button>

                        <button
                            class="sci-key sci-operator"
                            onclick="sciAppendOperator('/')"
                        >
                            ÷
                        </button>


                        <button
                            class="sci-key"
                            onclick="sciAppendNumber('7')"
                        >
                            7
                        </button>

                        <button
                            class="sci-key"
                            onclick="sciAppendNumber('8')"
                        >
                            8
                        </button>

                        <button
                            class="sci-key"
                            onclick="sciAppendNumber('9')"
                        >
                            9
                        </button>

                        <button
                            class="sci-key sci-operator"
                            onclick="sciAppendOperator('*')"
                        >
                            ×
                        </button>


                        <button
                            class="sci-key"
                            onclick="sciAppendNumber('4')"
                        >
                            4
                        </button>

                        <button
                            class="sci-key"
                            onclick="sciAppendNumber('5')"
                        >
                            5
                        </button>

                        <button
                            class="sci-key"
                            onclick="sciAppendNumber('6')"
                        >
                            6
                        </button>

                        <button
                            class="sci-key sci-operator"
                            onclick="sciAppendOperator('-')"
                        >
                            −
                        </button>


                        <button
                            class="sci-key"
                            onclick="sciAppendNumber('1')"
                        >
                            1
                        </button>

                        <button
                            class="sci-key"
                            onclick="sciAppendNumber('2')"
                        >
                            2
                        </button>

                        <button
                            class="sci-key"
                            onclick="sciAppendNumber('3')"
                        >
                            3
                        </button>

                        <button
                            class="sci-key sci-operator"
                            onclick="sciAppendOperator('+')"
                        >
                            +
                        </button>


                        <button
                            class="sci-key sci-function"
                            onclick="sciToggleSign()"
                        >
                            ±
                        </button>

                        <button
                            class="sci-key"
                            onclick="sciAppendNumber('0')"
                        >
                            0
                        </button>

                        <button
                            class="sci-key"
                            onclick="sciDecimal()"
                        >
                            .
                        </button>

                        <button
                            class="sci-key sci-equals"
                            onclick="sciCalculate()"
                        >
                            =
                        </button>

                    </div>


                    <!-- ADVANCED FUNCTIONS -->

                    <div class="sci-function-grid">

                        <button
                            class="sci-function-key"
                            onclick="sciSquare()"
                        >
                            x²
                        </button>

                        <button
                            class="sci-function-key"
                            onclick="sciCube()"
                        >
                            x³
                        </button>

                        <button
                            class="sci-function-key"
                            onclick="sciPowerPrompt()"
                        >
                            xʸ
                        </button>

                        <button
                            class="sci-function-key"
                            onclick="sciSquareRoot()"
                        >
                            √x
                        </button>

                        <button
                            class="sci-function-key"
                            onclick="sciCubeRoot()"
                        >
                            ∛x
                        </button>

                        <button
                            class="sci-function-key"
                            onclick="sciNthRootPrompt()"
                        >
                            ʸ√x
                        </button>

                        <button
                            class="sci-function-key"
                            onclick="sciReciprocal()"
                        >
                            1/x
                        </button>

                        <button
                            class="sci-function-key"
                            onclick="sciScientificNotation()"
                        >
                            ×10ⁿ
                        </button>

                        <button
                            class="sci-function-key"
                            onclick="sciFactorialCurrent()"
                        >
                            n!
                        </button>

                        <button
                            class="sci-function-key"
                            onclick="sciConstant('pi')"
                        >
                            π
                        </button>

                        <button
                            class="sci-function-key"
                            onclick="sciConstant('e')"
                        >
                            e
                        </button>

                        <button
                            class="sci-function-key"
                            onclick="sciConstant('phi')"
                        >
                            φ
                        </button>

                    </div>


                </section>


                <!--================================================
                    SIDE FUNCTIONS
                =================================================-->

                <aside class="sci-side-panel">


                    <!-- TRIGONOMETRY -->

                    <div class="sci-module">

                        <div class="sci-module-title">
                            📐 TRIGONOMETRY
                        </div>

                        <div class="sci-module-grid">

                            <button onclick="sciTrig('sin')">
                                sin
                            </button>

                            <button onclick="sciTrig('cos')">
                                cos
                            </button>

                            <button onclick="sciTrig('tan')">
                                tan
                            </button>

                            <button onclick="sciTrig('asin')">
                                sin⁻¹
                            </button>

                            <button onclick="sciTrig('acos')">
                                cos⁻¹
                            </button>

                            <button onclick="sciTrig('atan')">
                                tan⁻¹
                            </button>

                        </div>

                    </div>


                    <!-- HYPERBOLIC -->

                    <div class="sci-module">

                        <div class="sci-module-title">
                            ∿ HYPERBOLIC
                        </div>

                        <div class="sci-module-grid">

                            <button onclick="sciHyperbolic('sinh')">
                                sinh
                            </button>

                            <button onclick="sciHyperbolic('cosh')">
                                cosh
                            </button>

                            <button onclick="sciHyperbolic('tanh')">
                                tanh
                            </button>

                            <button onclick="sciHyperbolic('asinh')">
                                sinh⁻¹
                            </button>

                            <button onclick="sciHyperbolic('acosh')">
                                cosh⁻¹
                            </button>

                            <button onclick="sciHyperbolic('atanh')">
                                tanh⁻¹
                            </button>

                        </div>

                    </div>


                    <!-- LOGARITHMIC -->

                    <div class="sci-module">

                        <div class="sci-module-title">
                            ∑ LOG / EXP
                        </div>

                        <div class="sci-module-grid">

                            <button onclick="sciUnaryMath('log10')">
                                log₁₀
                            </button>

                            <button onclick="sciUnaryMath('ln')">
                                ln
                            </button>

                            <button onclick="sciUnaryMath('exp')">
                                eˣ
                            </button>

                            <button onclick="sciUnaryMath('pow10')">
                                10ˣ
                            </button>

                            <button onclick="sciLogBasePrompt()">
                                logₓ(y)
                            </button>

                        </div>

                    </div>


                    <!-- COMBINATORICS -->

                    <div class="sci-module">

                        <div class="sci-module-title">
                            🔢 COMBINATORICS
                        </div>

                        <div class="sci-module-grid">

                            <button onclick="sciFactorialCurrent()">
                                n!
                            </button>

                            <button onclick="sciPermutationPrompt()">
                                nPr
                            </button>

                            <button onclick="sciCombinationPrompt()">
                                nCr
                            </button>

                        </div>

                    </div>


                    <!-- ALGEBRA -->

                    <div class="sci-module">

                        <div class="sci-module-title">
                            ∑ ALGEBRA ENGINE
                        </div>

                        <div class="sci-module-grid">

                            <button onclick="sciLinearEquationPrompt()">
                                Linear
                            </button>

                            <button onclick="sciQuadraticPrompt()">
                                Quadratic
                            </button>

                            <button onclick="sciPolynomialPrompt()">
                                Polynomial
                            </button>

                            <button onclick="sciEvaluateVariablePrompt()">
                                Evaluate x
                            </button>

                        </div>

                    </div>


                    <!-- FRACTIONS -->

                    <div class="sci-module">

                        <div class="sci-module-title">
                            ½ FRACTION ENGINE
                        </div>

                        <div class="sci-module-grid">

                            <button onclick="sciFractionToDecimalPrompt()">
                                → Decimal
                            </button>

                            <button onclick="sciDecimalToFractionPrompt()">
                                → Fraction
                            </button>

                            <button onclick="sciSimplifyFractionPrompt()">
                                Simplify
                            </button>

                            <button onclick="sciMixedNumberPrompt()">
                                Mixed
                            </button>

                        </div>

                    </div>


                </aside>

            </div>


            <!--================================================
                HISTORY
            =================================================-->

            <section class="sci-history-panel">

                <div class="sci-history-header">

                    <span>
                        CALCULATION HISTORY
                    </span>

                    <button
                        onclick="sciClearHistory()"
                    >
                        CLEAR HISTORY
                    </button>

                </div>

                <div
                    id="sciHistory"
                    class="sci-history"
                >
                    No calculations yet.
                </div>

            </section>


        </div>
    `;

    sciUpdateDisplay();
    sciUpdateMemoryIndicator();

    console.log("✅ Scientific Calculator loaded successfully");
}


/*==========================================================
 * STATE
 *==========================================================*/

let sciCurrentInput = "0";
let sciExpression = "";
let sciMemory = 0;
let sciAngleMode = "DEG";
let sciHistoryData = [];


/*==========================================================
 * DISPLAY
 *==========================================================*/

function sciUpdateDisplay() {

    const display =
        document.getElementById("sciDisplay");

    const expression =
        document.getElementById("sciExpression");

    if (display) {
        display.textContent = sciCurrentInput;
    }

    if (expression) {
        expression.textContent =
            sciExpression || "0";
    }

}


/*==========================================================
 * BASIC INPUT
 *==========================================================*/

function sciAppendNumber(number) {

    if (
        sciCurrentInput === "0" ||
        sciCurrentInput === "Error"
    ) {
        sciCurrentInput = number;
    }

    else {
        sciCurrentInput += number;
    }

    sciUpdateDisplay();
}


function sciDecimal() {

    if (!sciCurrentInput.includes(".")) {
        sciCurrentInput += ".";
    }

    sciUpdateDisplay();
}


function sciAppendOperator(operator) {

    if (sciCurrentInput === "Error") {
        return;
    }

    sciExpression =
        sciCurrentInput + " " + operator;

    sciCurrentInput = "0";

    sciUpdateDisplay();
}


function sciToggleSign() {

    const value =
        Number(sciCurrentInput);

    if (!Number.isFinite(value)) {
        return;
    }

    sciCurrentInput =
        String(value * -1);

    sciUpdateDisplay();
}


function sciPercentage() {

    const value =
        Number(sciCurrentInput);

    sciCurrentInput =
        String(value / 100);

    sciUpdateDisplay();
}


/*==========================================================
 * BASIC CALCULATION
 *==========================================================*/

function sciCalculate() {

    try {

        let expression =
            sciExpression;

        if (!expression) {
            return;
        }

        const operator =
            expression.slice(-1);

        const left =
            Number(
                expression.slice(0, -1).trim()
            );

        const right =
            Number(sciCurrentInput);

        if (
            !Number.isFinite(left) ||
            !Number.isFinite(right)
        ) {
            throw new Error("Invalid number");
        }

        let result;

        switch (operator) {

            case "+":
                result = left + right;
                break;

            case "-":
                result = left - right;
                break;

            case "*":
                result = left * right;
                break;

            case "/":

                if (right === 0) {
                    throw new Error("Division by zero");
                }

                result = left / right;
                break;

            default:
                throw new Error("Invalid operator");

        }

        sciAddHistory(
            `${left} ${operator} ${right}`,
            result
        );

        sciCurrentInput =
            sciFormatResult(result);

        sciExpression = "";

        sciUpdateDisplay();

    }

    catch (error) {

        sciCurrentInput = "Error";
        sciExpression = "";

        sciUpdateDisplay();

    }

}


/*==========================================================
 * CLEAR / DELETE
 *==========================================================*/

function sciClear() {

    sciCurrentInput = "0";
    sciExpression = "";

    sciUpdateDisplay();
}


function sciBackspace() {

    if (
        sciCurrentInput.length <= 1 ||
        sciCurrentInput === "Error"
    ) {
        sciCurrentInput = "0";
    }

    else {

        sciCurrentInput =
            sciCurrentInput.slice(0, -1);

    }

    sciUpdateDisplay();
}


/*==========================================================
 * ANGLE MODE
 *==========================================================*/

function sciSetAngleMode(mode) {

    sciAngleMode = mode;

    document
        .querySelectorAll(".sci-control-btn")
        .forEach(button => {

            button.classList.remove(
                "sci-angle-active"
            );

            if (
                button.dataset.angle === mode
            ) {
                button.classList.add(
                    "sci-angle-active"
                );
            }

        });

    const indicator =
        document.getElementById(
            "sciAngleIndicator"
        );

    if (indicator) {
        indicator.textContent = mode;
    }

}


function sciToRadians(value) {

    if (sciAngleMode === "DEG") {
        return value * Math.PI / 180;
    }

    if (sciAngleMode === "GRAD") {
        return value * Math.PI / 200;
    }

    return value;
}


function sciFromRadians(value) {

    if (sciAngleMode === "DEG") {
        return value * 180 / Math.PI;
    }

    if (sciAngleMode === "GRAD") {
        return value * 200 / Math.PI;
    }

    return value;
}


/*==========================================================
 * POWER & ROOTS
 *==========================================================*/

function sciSquare() {

    const value =
        Number(sciCurrentInput);

    sciSetResult(
        value * value,
        `${value}²`
    );
}


function sciCube() {

    const value =
        Number(sciCurrentInput);

    sciSetResult(
        Math.pow(value, 3),
        `${value}³`
    );
}


function sciPowerPrompt() {

    const base =
        Number(sciCurrentInput);

    const exponent =
        Number(
            prompt("Enter exponent:")
        );

    if (!Number.isFinite(exponent)) {
        return;
    }

    sciSetResult(
        Math.pow(base, exponent),
        `${base}^${exponent}`
    );
}


function sciSquareRoot() {

    const value =
        Number(sciCurrentInput);

    if (value < 0) {
        sciShowError();
        return;
    }

    sciSetResult(
        Math.sqrt(value),
        `√${value}`
    );
}


function sciCubeRoot() {

    const value =
        Number(sciCurrentInput);

    sciSetResult(
        Math.cbrt(value),
        `∛${value}`
    );
}


function sciNthRootPrompt() {

    const value =
        Number(sciCurrentInput);

    const root =
        Number(
            prompt("Enter root:")
        );

    if (
        !Number.isFinite(root) ||
        root === 0
    ) {
        return;
    }

    if (
        value < 0 &&
        Number.isInteger(root) &&
        root % 2 === 0
    ) {
        sciShowError();
        return;
    }

    const result =
        value < 0
            ? -Math.pow(-value, 1 / root)
            : Math.pow(value, 1 / root);

    sciSetResult(
        result,
        `${root}√${value}`
    );
}


function sciReciprocal() {

    const value =
        Number(sciCurrentInput);

    if (value === 0) {
        sciShowError();
        return;
    }

    sciSetResult(
        1 / value,
        `1/${value}`
    );
}


function sciScientificNotation() {

    const value =
        Number(sciCurrentInput);

    sciCurrentInput =
        value.toExponential(6);

    sciUpdateDisplay();
}


/*==========================================================
 * TRIGONOMETRY
 *==========================================================*/

function sciTrig(type) {

    const value =
        Number(sciCurrentInput);

    let result;

    switch (type) {

        case "sin":
            result =
                Math.sin(
                    sciToRadians(value)
                );
            break;

        case "cos":
            result =
                Math.cos(
                    sciToRadians(value)
                );
            break;

        case "tan":
            result =
                Math.tan(
                    sciToRadians(value)
                );
            break;

        case "asin":
            result =
                sciFromRadians(
                    Math.asin(value)
                );
            break;

        case "acos":
            result =
                sciFromRadians(
                    Math.acos(value)
                );
            break;

        case "atan":
            result =
                sciFromRadians(
                    Math.atan(value)
                );
            break;

        default:
            return;

    }

    sciSetResult(
        result,
        `${type}(${value})`
    );
}


/*==========================================================
 * HYPERBOLIC
 *==========================================================*/

function sciSinh(x) {

    return (
        Math.exp(x) -
        Math.exp(-x)
    ) / 2;

}


function sciCosh(x) {

    return (
        Math.exp(x) +
        Math.exp(-x)
    ) / 2;

}


function sciTanh(x) {

    return sciSinh(x) /
        sciCosh(x);

}


function sciHyperbolic(type) {

    const value =
        Number(sciCurrentInput);

    let result;

    switch (type) {

        case "sinh":
            result = sciSinh(value);
            break;

        case "cosh":
            result = sciCosh(value);
            break;

        case "tanh":
            result = sciTanh(value);
            break;

        case "asinh":
            result =
                Math.asinh(value);
            break;

        case "acosh":

            if (value < 1) {
                sciShowError();
                return;
            }

            result =
                Math.acosh(value);

            break;

        case "atanh":

            if (
                value <= -1 ||
                value >= 1
            ) {
                sciShowError();
                return;
            }

            result =
                Math.atanh(value);

            break;

        default:
            return;

    }

    sciSetResult(
        result,
        `${type}(${value})`
    );
}


/*==========================================================
 * LOGARITHMIC / EXPONENTIAL
 *==========================================================*/

function sciUnaryMath(type) {

    const value =
        Number(sciCurrentInput);

    let result;

    switch (type) {

        case "log10":

            if (value <= 0) {
                sciShowError();
                return;
            }

            result =
                Math.log10(value);

            break;

        case "ln":

            if (value <= 0) {
                sciShowError();
                return;
            }

            result =
                Math.log(value);

            break;

        case "exp":

            result =
                Math.exp(value);

            break;

        case "pow10":

            result =
                Math.pow(10, value);

            break;

        default:
            return;

    }

    sciSetResult(
        result,
        `${type}(${value})`
    );
}


function sciLogBasePrompt() {

    const x =
        Number(
            prompt("Enter logarithm base:")
        );

    const y =
        Number(
            prompt("Enter value y:")
        );

    if (
        !Number.isFinite(x) ||
        !Number.isFinite(y) ||
        x <= 0 ||
        x === 1 ||
        y <= 0
    ) {
        sciShowError();
        return;
    }

    const result =
        Math.log(y) / Math.log(x);

    sciSetResult(
        result,
        `log_${x}(${y})`
    );
}


/*==========================================================
 * CONSTANTS
 *==========================================================*/

function sciConstant(type) {

    let value;
    let name;

    switch (type) {

        case "pi":

            value = Math.PI;
            name = "π";

            break;

        case "e":

            value = Math.E;
            name = "e";

            break;

        case "phi":

            value =
                (1 + Math.sqrt(5)) / 2;

            name = "φ";

            break;

        default:
            return;

    }

    sciCurrentInput =
        String(value);

    sciExpression = name;

    sciUpdateDisplay();
}


/*==========================================================
 * FACTORIAL
 *==========================================================*/

function sciFactorial(n) {

    if (
        !Number.isInteger(n) ||
        n < 0
    ) {
        throw new Error(
            "Factorial requires non-negative integer"
        );
    }

    if (n > 170) {
        throw new Error(
            "Number too large"
        );
    }

    let result = 1;

    for (
        let i = 2;
        i <= n;
        i++
    ) {
        result *= i;
    }

    return result;
}


function sciFactorialCurrent() {

    const value =
        Number(sciCurrentInput);

    try {

        const result =
            sciFactorial(value);

        sciSetResult(
            result,
            `${value}!`
        );

    }

    catch {

        sciShowError();

    }

}


/*==========================================================
 * PERMUTATION
 *==========================================================*/

function sciPermutation(n, r) {

    if (
        !Number.isInteger(n) ||
        !Number.isInteger(r) ||
        n < 0 ||
        r < 0 ||
        r > n
    ) {
        throw new Error("Invalid nPr");
    }

    return (
        sciFactorial(n) /
        sciFactorial(n - r)
    );

}


function sciPermutationPrompt() {

    const n =
        Number(
            prompt("Enter n:")
        );

    const r =
        Number(
            prompt("Enter r:")
        );

    try {

        const result =
            sciPermutation(n, r);

        sciSetResult(
            result,
            `${n}P${r}`
        );

    }

    catch {

        sciShowError();

    }

}


/*==========================================================
 * COMBINATION
 *==========================================================*/

function sciCombination(n, r) {

    if (
        !Number.isInteger(n) ||
        !Number.isInteger(r) ||
        n < 0 ||
        r < 0 ||
        r > n
    ) {
        throw new Error("Invalid nCr");
    }

    return (
        sciFactorial(n) /
        (
            sciFactorial(r) *
            sciFactorial(n - r)
        )
    );

}


function sciCombinationPrompt() {

    const n =
        Number(
            prompt("Enter n:")
        );

    const r =
        Number(
            prompt("Enter r:")
        );

    try {

        const result =
            sciCombination(n, r);

        sciSetResult(
            result,
            `${n}C${r}`
        );

    }

    catch {

        sciShowError();

    }

}


/*==========================================================
 * FRACTION ENGINE
 *==========================================================*/

function sciGCD(a, b) {

    a = Math.abs(a);
    b = Math.abs(b);

    while (b !== 0) {

        const temp = b;

        b = a % b;
        a = temp;

    }

    return a;
}


function sciSimplifyFraction(numerator, denominator) {

    if (denominator === 0) {
        throw new Error(
            "Zero denominator"
        );
    }

    const divisor =
        sciGCD(
            numerator,
            denominator
        );

    return {

        numerator:
            numerator / divisor,

        denominator:
            denominator / divisor

    };

}


function sciFractionToDecimalPrompt() {

    const numerator =
        Number(
            prompt("Numerator:")
        );

    const denominator =
        Number(
            prompt("Denominator:")
        );

    if (
        !Number.isFinite(numerator) ||
        !Number.isFinite(denominator) ||
        denominator === 0
    ) {
        sciShowError();
        return;
    }

    const result =
        numerator / denominator;

    sciSetResult(
        result,
        `${numerator}/${denominator}`
    );
}


function sciDecimalToFractionPrompt() {

    const decimal =
        Number(
            prompt("Enter decimal:")
        );

    if (!Number.isFinite(decimal)) {
        sciShowError();
        return;
    }

    const result =
        sciDecimalToFraction(decimal);

    sciCurrentInput =
        `${result.numerator}/${result.denominator}`;

    sciExpression =
        `${decimal} → fraction`;

    sciUpdateDisplay();

    sciAddHistory(
        String(decimal),
        `${result.numerator}/${result.denominator}`
    );
}


function sciDecimalToFraction(decimal) {

    const sign =
        decimal < 0 ? -1 : 1;

    decimal =
        Math.abs(decimal);

    const tolerance =
        1e-10;

    let numerator = 1;
    let denominator = 1;

    let bestNumerator = 0;
    let bestDenominator = 1;
    let bestError = Infinity;

    for (
        let d = 1;
        d <= 10000;
        d++
    ) {

        const n =
            Math.round(decimal * d);

        const error =
            Math.abs(
                decimal - n / d
            );

        if (error < bestError) {

            bestError = error;

            bestNumerator = n;
            bestDenominator = d;

        }

        if (error < tolerance) {
            break;
        }

    }

    numerator =
        bestNumerator * sign;

    denominator =
        bestDenominator;

    return sciSimplifyFraction(
        numerator,
        denominator
    );
}


function sciSimplifyFractionPrompt() {

    const numerator =
        Number(
            prompt("Numerator:")
        );

    const denominator =
        Number(
            prompt("Denominator:")
        );

    try {

        const result =
            sciSimplifyFraction(
                numerator,
                denominator
            );

        sciCurrentInput =
            `${result.numerator}/${result.denominator}`;

        sciExpression =
            "Simplified Fraction";

        sciUpdateDisplay();

    }

    catch {

        sciShowError();

    }

}


function sciMixedNumberPrompt() {

    const numerator =
        Number(
            prompt("Numerator:")
        );

    const denominator =
        Number(
            prompt("Denominator:")
        );

    if (
        !Number.isInteger(numerator) ||
        !Number.isInteger(denominator) ||
        denominator === 0
    ) {
        sciShowError();
        return;
    }

    const whole =
        Math.trunc(
            numerator / denominator
        );

    const remainder =
        Math.abs(
            numerator % denominator
        );

    const result =
        `${whole} ${remainder}/${Math.abs(denominator)}`;

    sciCurrentInput = result;
    sciExpression = "Mixed Number";

    sciUpdateDisplay();
}


/*==========================================================
 * ALGEBRA
 *==========================================================*/

function sciLinearEquationPrompt() {

    const a =
        Number(
            prompt("Enter coefficient a for ax + b = 0:")
        );

    const b =
        Number(
            prompt("Enter coefficient b:")
        );

    if (
        !Number.isFinite(a) ||
        !Number.isFinite(b) ||
        a === 0
    ) {
        sciShowError();
        return;
    }

    const x =
        -b / a;

    sciCurrentInput =
        `x = ${sciFormatResult(x)}`;

    sciExpression =
        `${a}x + ${b} = 0`;

    sciUpdateDisplay();

    sciAddHistory(
        `${a}x + ${b} = 0`,
        `x = ${sciFormatResult(x)}`
    );
}


function sciQuadraticPrompt() {

    const a =
        Number(prompt("Coefficient a:"));

    const b =
        Number(prompt("Coefficient b:"));

    const c =
        Number(prompt("Coefficient c:"));

    if (
        !Number.isFinite(a) ||
        !Number.isFinite(b) ||
        !Number.isFinite(c) ||
        a === 0
    ) {
        sciShowError();
        return;
    }

    const discriminant =
        b * b - 4 * a * c;

    if (discriminant < 0) {

        const real =
            -b / (2 * a);

        const imaginary =
            Math.sqrt(-discriminant) /
            (2 * a);

        sciCurrentInput =
            `x = ${sciFormatResult(real)} ± ${sciFormatResult(imaginary)}i`;

    }

    else {

        const x1 =
            (-b + Math.sqrt(discriminant)) /
            (2 * a);

        const x2 =
            (-b - Math.sqrt(discriminant)) /
            (2 * a);

        sciCurrentInput =
            `x₁=${sciFormatResult(x1)}, x₂=${sciFormatResult(x2)}`;

    }

    sciExpression =
        `${a}x² + ${b}x + ${c} = 0`;

    sciUpdateDisplay();
}


function sciPolynomialPrompt() {

    const coefficients =
        prompt(
            "Enter coefficients separated by commas.\n" +
            "Example: 1,5,6 for x² + 5x + 6"
        );

    if (!coefficients) {
        return;
    }

    const values =
        coefficients
            .split(",")
            .map(Number);

    if (
        values.some(
            value => !Number.isFinite(value)
        )
    ) {
        sciShowError();
        return;
    }

    const degree =
        values.length - 1;

    let polynomial = "";

    values.forEach(
        (coefficient, index) => {

            const power =
                degree - index;

            if (coefficient === 0) {
                return;
            }

            if (polynomial && coefficient > 0) {
                polynomial += " + ";
            }

            if (coefficient < 0) {
                polynomial += " - ";
            }

            const absolute =
                Math.abs(coefficient);

            if (
                absolute !== 1 ||
                power === 0
            ) {
                polynomial += absolute;
            }

            if (power > 0) {

                polynomial += "x";

                if (power > 1) {
                    polynomial += `^${power}`;
                }

            }

        }
    );

    sciCurrentInput =
        polynomial || "0";

    sciExpression =
        "Polynomial";

    sciUpdateDisplay();
}


function sciEvaluateVariablePrompt() {

    const expression =
        prompt(
            "Enter expression using x.\nExample: 2*x^2 + 3*x + 1"
        );

    const x =
        Number(
            prompt("Enter value of x:")
        );

    if (
        !expression ||
        !Number.isFinite(x)
    ) {
        return;
    }

    try {

        const safeExpression =
            expression
                .replace(/\^/g, "**")
                .replace(/\bx\b/g, `(${x})`);

        const result =
            Function(
                `"use strict"; return (${safeExpression});`
            )();

        if (!Number.isFinite(result)) {
            throw new Error();
        }

        sciSetResult(
            result,
            `${expression}, x=${x}`
        );

    }

    catch {

        sciShowError();

    }
}


/*==========================================================
 * MEMORY
 *==========================================================*/

function sciMemoryClear() {

    sciMemory = 0;

    sciUpdateMemoryIndicator();
}


function sciMemoryRecall() {

    sciCurrentInput =
        String(sciMemory);

    sciUpdateDisplay();
}


function sciMemoryAdd() {

    const value =
        Number(sciCurrentInput);

    if (Number.isFinite(value)) {
        sciMemory += value;
    }

    sciUpdateMemoryIndicator();
}


function sciMemorySubtract() {

    const value =
        Number(sciCurrentInput);

    if (Number.isFinite(value)) {
        sciMemory -= value;
    }

    sciUpdateMemoryIndicator();
}


function sciMemoryStore() {

    const value =
        Number(sciCurrentInput);

    if (Number.isFinite(value)) {
        sciMemory = value;
    }

    sciUpdateMemoryIndicator();
}


function sciUpdateMemoryIndicator() {

    const indicator =
        document.getElementById(
            "sciMemoryIndicator"
        );

    if (indicator) {

        indicator.textContent =
            sciMemory !== 0
                ? "M"
                : "M";

        indicator.classList.toggle(
            "sci-memory-active",
            sciMemory !== 0
        );

    }
}


/*==========================================================
 * RESULT
 *==========================================================*/

function sciSetResult(
    result,
    expression
) {

    if (
        typeof result !== "number" ||
        !Number.isFinite(result)
    ) {
        sciShowError();
        return;
    }

    sciAddHistory(
        expression,
        result
    );

    sciCurrentInput =
        sciFormatResult(result);

    sciExpression =
        expression;

    sciUpdateDisplay();
}


function sciShowError() {

    sciCurrentInput = "Error";
    sciExpression = "";

    sciUpdateDisplay();
}


function sciFormatResult(value) {

    if (
        !Number.isFinite(value)
    ) {
        return "Error";
    }

    if (
        Math.abs(value) >= 1e12 ||
        (
            Math.abs(value) > 0 &&
            Math.abs(value) < 1e-9
        )
    ) {
        return value.toExponential(8);
    }

    return Number(
        value.toPrecision(12)
    ).toString();
}


/*==========================================================
 * HISTORY
 *==========================================================*/

function sciAddHistory(
    expression,
    result
) {

    sciHistoryData.unshift({
        expression,
        result
    });

    if (sciHistoryData.length > 30) {
        sciHistoryData.pop();
    }

    sciRenderHistory();
}


function sciRenderHistory() {

    const history =
        document.getElementById(
            "sciHistory"
        );

    if (!history) {
        return;
    }

    if (sciHistoryData.length === 0) {

        history.innerHTML =
            "No calculations yet.";

        return;
    }

    history.innerHTML =
        sciHistoryData
            .map(item => `

                <div class="sci-history-item">

                    <span>
                        ${sciEscapeHTML(
                            item.expression
                        )}
                    </span>

                    <strong>
                        ${sciEscapeHTML(
                            String(item.result)
                        )}
                    </strong>

                </div>

            `)
            .join("");

}


function sciClearHistory() {

    sciHistoryData = [];

    sciRenderHistory();
}


function sciEscapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/*==========================================================
 * GLOBAL REGISTRATION
 *==========================================================*/

window.loadScientificCalculator =
    loadScientificCalculator;

window.sciSetAngleMode =
    sciSetAngleMode;

window.sciAppendNumber =
    sciAppendNumber;

window.sciDecimal =
    sciDecimal;

window.sciAppendOperator =
    sciAppendOperator;

window.sciCalculate =
    sciCalculate;

window.sciClear =
    sciClear;

window.sciBackspace =
    sciBackspace;

window.sciToggleSign =
    sciToggleSign;

window.sciPercentage =
    sciPercentage;

window.sciSquare =
    sciSquare;

window.sciCube =
    sciCube;

window.sciPowerPrompt =
    sciPowerPrompt;

window.sciSquareRoot =
    sciSquareRoot;

window.sciCubeRoot =
    sciCubeRoot;

window.sciNthRootPrompt =
    sciNthRootPrompt;

window.sciReciprocal =
    sciReciprocal;

window.sciScientificNotation =
    sciScientificNotation;

window.sciTrig =
    sciTrig;

window.sciHyperbolic =
    sciHyperbolic;

window.sciUnaryMath =
    sciUnaryMath;

window.sciLogBasePrompt =
    sciLogBasePrompt;

window.sciConstant =
    sciConstant;

window.sciFactorialCurrent =
    sciFactorialCurrent;

window.sciPermutationPrompt =
    sciPermutationPrompt;

window.sciCombinationPrompt =
    sciCombinationPrompt;

window.sciFractionToDecimalPrompt =
    sciFractionToDecimalPrompt;

window.sciDecimalToFractionPrompt =
    sciDecimalToFractionPrompt;

window.sciSimplifyFractionPrompt =
    sciSimplifyFractionPrompt;

window.sciMixedNumberPrompt =
    sciMixedNumberPrompt;

window.sciLinearEquationPrompt =
    sciLinearEquationPrompt;

window.sciQuadraticPrompt =
    sciQuadraticPrompt;

window.sciPolynomialPrompt =
    sciPolynomialPrompt;

window.sciEvaluateVariablePrompt =
    sciEvaluateVariablePrompt;

window.sciMemoryClear =
    sciMemoryClear;

window.sciMemoryRecall =
    sciMemoryRecall;

window.sciMemoryAdd =
    sciMemoryAdd;

window.sciMemorySubtract =
    sciMemorySubtract;

window.sciMemoryStore =
    sciMemoryStore;

window.sciClearHistory =
    sciClearHistory;


console.log(
    "✅ Scientific Calculator functions registered"
);