function loadNumberSystem(canvas) {

    canvas.innerHTML = `

        <div class="ns-future-page">

            <!-- =========================================
                 LEFT SIDE : NUMBER SYSTEM CONVERTER
            ========================================== -->

            <div class="ns-calc-panel">

                <div class="ns-calc-header">

                    <span class="ns-header-line"></span>

                    <div>

                        <h1>
                            Number System
                        </h1>

                        <p>
                            Conversion System
                        </p>

                    </div>

                    <span class="ns-header-line"></span>

                </div>


                <!-- FROM -->

                <div class="ns-selector-box">

                    <label>
                        FROM
                    </label>

                    <select id="nsFromSystem">

                        <option value="binary">
                            Binary
                        </option>

                        <option value="decimal">
                            Decimal
                        </option>

                        <option value="octal">
                            Octal
                        </option>

                        <option value="hexadecimal">
                            Hexadecimal
                        </option>

                    </select>

                </div>


                <!-- NUMBER -->

                <div class="ns-input-group">

                    <label>
                        ENTER NUMBER
                    </label>

                    <input
                        type="text"
                        id="nsNumberInput"
                        placeholder="Enter number..."
                        autocomplete="off"
                    >

                </div>


                <!-- TO -->

                <div class="ns-selector-box">

                    <label>
                        CONVERT TO
                    </label>

                    <select id="nsToSystem">

                        <option value="decimal">
                            Decimal
                        </option>

                        <option value="binary">
                            Binary
                        </option>

                        <option value="octal">
                            Octal
                        </option>

                        <option value="hexadecimal">
                            Hexadecimal
                        </option>

                    </select>

                </div>


                <!-- BUTTON -->

                <button
                    id="nsCalculateButton"
                    class="ns-calculate-button"
                >

                    <span>
                        CONVERT
                    </span>

                    <span class="ns-button-arrow">
                        →
                    </span>

                </button>


                <!-- RESULT -->

                <div class="ns-result-box">

                    <div class="ns-result-label">
                        CONVERTED RESULT
                    </div>

                    <div id="nsResultValue">
                        —
                    </div>

                </div>


                <!-- ERROR -->

                <div
                    id="nsErrorMessage"
                    class="ns-error-message"
                >
                </div>

            </div>


            <!-- =========================================
                 RIGHT SIDE : SOLVING PROCESS
            ========================================== -->

            <div class="ns-solution-panel">

                <div class="ns-solution-header">

                    <span class="ns-status-light"></span>

                    <div>

                        <h2>
                            Number System Analysis
                        </h2>

                        <p>
                            Conversion & Solving Process
                        </p>

                    </div>

                </div>


                <!-- CONVERSION FORMULA -->

                <div class="ns-info-card">

                    <div class="ns-card-label">
                        CONVERSION METHOD
                    </div>

                    <div
                        id="nsFormulaDisplay"
                        class="ns-formula-display"
                    >
                        Select a number system
                        and enter a value.
                    </div>

                </div>


                <!-- SOLVING PROBLEM -->

                <div class="ns-info-card">

                    <div class="ns-card-label">
                        SOLVING PROBLEM
                    </div>

                    <div
                        id="nsProblemDisplay"
                        class="ns-problem-display"
                    >
                        Waiting for input...
                    </div>

                </div>


                <!-- STEP BY STEP -->

                <div class="ns-info-card ns-steps-card">

                    <div class="ns-card-label">
                        STEP-BY-STEP SOLUTION
                    </div>

                    <div id="nsStepsDisplay">

                        <div class="ns-empty-step">

                            <span>
                                01
                            </span>

                            Waiting for conversion...

                        </div>

                    </div>

                </div>


                <!-- FINAL ANSWER -->

                <div class="ns-final-answer">

                    <div class="ns-card-label">
                        FINAL ANSWER
                    </div>

                    <div id="nsFinalAnswer">
                        —
                    </div>

                </div>

            </div>

        </div>

    `;


    startNumberSystem();

}

function startNumberSystem() {

    console.log(
        "Number System Converter Started"
    );


    const calculateButton =
        document.getElementById(
            "nsCalculateButton"
        );


    if (!calculateButton) {

        console.log(
            "Number System elements not found!"
        );

        return;

    }


    calculateButton.onclick =
        function() {

            calculateNumberSystem();

        };


    updateNumberSystemFormula();

}

function calculateNumberSystem() {

    const fromSystem =
        document.getElementById(
            "nsFromSystem"
        ).value;


    const toSystem =
        document.getElementById(
            "nsToSystem"
        ).value;


    const input =
        document.getElementById(
            "nsNumberInput"
        ).value.trim();


    const errorDisplay =
        document.getElementById(
            "nsErrorMessage"
        );


    errorDisplay.innerHTML = "";


    if (input === "") {

        showNumberSystemError(
            "Please enter a number."
        );

        return;

    }


    // =========================================
    // VALIDATE INPUT
    // =========================================

    if (
        !validateNumberSystemInput(
            input,
            fromSystem
        )
    ) {

        return;

    }


    // =========================================
    // SAME SYSTEM
    // =========================================

    if (fromSystem === toSystem) {

        const formatted =
            formatNumberSystem(
                input,
                fromSystem
            );


        showNumberSystemSolution({

            from: getSystemName(fromSystem),

            to: getSystemName(toSystem),

            input: input,

            result: formatted,

            steps: [

                `The number is already in ${getSystemName(fromSystem)}.`,

                `${input} → ${formatted}`,

                `No base conversion is required.`

            ]

        });


        return;

    }


    // =========================================
    // CONVERT TO DECIMAL FIRST
    // =========================================

    const decimalValue =
        convertToDecimal(
            input,
            fromSystem
        );


    if (
        decimalValue === null ||
        !Number.isSafeInteger(decimalValue)
    ) {

        showNumberSystemError(
            "The number is too large to process safely."
        );

        return;

    }


    // =========================================
    // DECIMAL TO TARGET
    // =========================================

    const result =
        convertFromDecimal(
            decimalValue,
            toSystem
        );


    showNumberSystemSolution({

        from: getSystemName(fromSystem),

        to: getSystemName(toSystem),

        input: input,

        decimal: decimalValue,

        result: result,

        steps:
            createNumberSystemSteps(
                input,
                fromSystem,
                toSystem,
                decimalValue,
                result
            )

    });

}

function validateNumberSystemInput(
    input,
    system
) {

    let pattern;


    switch(system) {

        case "binary":

            pattern = /^[01]+$/;

            break;


        case "decimal":

            pattern = /^\d+$/;

            break;


        case "octal":

            pattern = /^[0-7]+$/;

            break;


        case "hexadecimal":

            pattern = /^[0-9a-fA-F]+$/;

            break;


        default:

            return false;

    }


    if (!pattern.test(input)) {

        let systemName =
            getSystemName(system);


        showNumberSystemError(

            `Invalid ${systemName} number. ` +
            `Please check the allowed digits.`

        );


        return false;

    }


    return true;

}

function convertToDecimal(
    value,
    system
) {

    let base;


    switch(system) {

        case "binary":
            base = 2;
            break;

        case "decimal":
            base = 10;
            break;

        case "octal":
            base = 8;
            break;

        case "hexadecimal":
            base = 16;
            break;

        default:
            return null;

    }


    return parseInt(
        value,
        base
    );

}

function convertFromDecimal(
    value,
    system
) {

    let base;


    switch(system) {

        case "binary":
            base = 2;
            break;

        case "decimal":
            base = 10;
            break;

        case "octal":
            base = 8;
            break;

        case "hexadecimal":
            base = 16;
            break;

        default:
            return null;

    }


    return value
        .toString(base)
        .toUpperCase();

}

function createNumberSystemSteps(
    input,
    fromSystem,
    toSystem,
    decimalValue,
    result
) {

    const fromName =
        getSystemName(fromSystem);


    const toName =
        getSystemName(toSystem);


    let steps = [];


    // =========================================
    // BINARY → DECIMAL
    // =========================================

    if (
        fromSystem === "binary" &&
        toSystem === "decimal"
    ) {

        steps.push(
            `Convert Binary to Decimal`
        );


        steps.push(
            `${input}₂`
        );


        steps.push(
            createBinaryDecimalExpansion(
                input
            )
        );


        steps.push(
            `Decimal = ${decimalValue}`
        );


        return steps;

    }


    // =========================================
    // OCTAL → DECIMAL
    // =========================================

    if (
        fromSystem === "octal" &&
        toSystem === "decimal"
    ) {

        steps.push(
            `Convert Octal to Decimal`
        );


        steps.push(
            `${input}₈`
        );


        steps.push(
            createBaseExpansion(
                input,
                8
            )
        );


        steps.push(
            `Decimal = ${decimalValue}`
        );


        return steps;

    }


    // =========================================
    // HEX → DECIMAL
    // =========================================

    if (
        fromSystem === "hexadecimal" &&
        toSystem === "decimal"
    ) {

        steps.push(
            `Convert Hexadecimal to Decimal`
        );


        steps.push(
            `${input}₁₆`
        );


        steps.push(
            createBaseExpansion(
                input,
                16
            )
        );


        steps.push(
            `Decimal = ${decimalValue}`
        );


        return steps;

    }


    // =========================================
    // DECIMAL → BINARY
    // =========================================

    if (
        fromSystem === "decimal" &&
        toSystem === "binary"
    ) {

        return createDivisionSteps(
            decimalValue,
            2,
            result,
            "Binary"
        );

    }


    // =========================================
    // DECIMAL → OCTAL
    // =========================================

    if (
        fromSystem === "decimal" &&
        toSystem === "octal"
    ) {

        return createDivisionSteps(
            decimalValue,
            8,
            result,
            "Octal"
        );

    }


    // =========================================
    // DECIMAL → HEX
    // =========================================

    if (
        fromSystem === "decimal" &&
        toSystem === "hexadecimal"
    ) {

        return createDivisionSteps(
            decimalValue,
            16,
            result,
            "Hexadecimal"
        );

    }


    // =========================================
    // OTHER CONVERSIONS
    // =========================================

    steps.push(
        `Step 1: Convert ${fromName} to Decimal.`
    );


    steps.push(
        `Decimal = ${decimalValue}`
    );


    steps.push(
        `Step 2: Convert Decimal to ${toName}.`
    );


    steps.push(
        `Result = ${result}`
    );


    return steps;

}

function createBinaryDecimalExpansion(
    binary
) {

    const digits =
        binary.split("");


    const parts = [];


    for (
        let i = 0;
        i < digits.length;
        i++
    ) {

        const power =
            digits.length - 1 - i;


        const digit =
            digits[i];


        parts.push(
            `${digit} × 2^${power}`
        );

    }


    return parts.join(" + ");

}

function createBaseExpansion(
    value,
    base
) {

    const digits =
        value.toUpperCase().split("");


    const parts = [];


    for (
        let i = 0;
        i < digits.length;
        i++
    ) {

        const power =
            digits.length - 1 - i;


        const digit =
            digits[i];


        const numericDigit =
            parseInt(
                digit,
                base
            );


        parts.push(
            `${numericDigit} × ${base}^${power}`
        );

    }


    return parts.join(" + ");

}

function createDivisionSteps(
    decimalValue,
    base,
    result,
    systemName
) {

    let steps = [];


    steps.push(
        `Convert Decimal to ${systemName}`
    );


    let current =
        decimalValue;


    let remainders = [];


    while (current > 0) {

        const quotient =
            Math.floor(
                current / base
            );


        const remainder =
            current % base;


        const remainderDisplay =
            remainder.toString(base)
            .toUpperCase();


        steps.push(
            `${current} ÷ ${base} = ` +
            `${quotient} remainder ${remainderDisplay}`
        );


        remainders.push(
            remainderDisplay
        );


        current =
            quotient;

    }


    steps.push(
        `Read the remainders from bottom to top.`
    );


    steps.push(
        `${result} (${systemName})`
    );


    return steps;

}

function getSystemName(system) {

    switch(system) {

        case "binary":
            return "Binary";

        case "decimal":
            return "Decimal";

        case "octal":
            return "Octal";

        case "hexadecimal":
            return "Hexadecimal";

        default:
            return "Unknown";

    }

}

function formatNumberSystem(
    value,
    system
) {

    if (
        system === "hexadecimal"
    ) {

        return value
            .toUpperCase();

    }


    return value;

}

function showNumberSystemError(
    message
) {

    document.getElementById(
        "nsErrorMessage"
    ).innerHTML =
        `⚠ ${message}`;


    document.getElementById(
        "nsResultValue"
    ).innerHTML =
        "—";


    document.getElementById(
        "nsFinalAnswer"
    ).innerHTML =
        "—";

}

function showNumberSystemSolution(
    data
) {

    const problem =
        document.getElementById(
            "nsProblemDisplay"
        );


    const steps =
        document.getElementById(
            "nsStepsDisplay"
        );


    const finalAnswer =
        document.getElementById(
            "nsFinalAnswer"
        );


    const result =
        document.getElementById(
            "nsResultValue"
        );


    const formula =
        document.getElementById(
            "nsFormulaDisplay"
        );


    // =========================================
    // RESULT
    // =========================================

    result.innerHTML =
        data.result;


    finalAnswer.innerHTML =
        data.result;


    // =========================================
    // FORMULA
    // =========================================

    formula.innerHTML = `

        ${data.from}
        →
        ${data.to}

        <br><br>

        <span>
            Number System Base Conversion
        </span>

    `;


    // =========================================
    // PROBLEM
    // =========================================

    problem.innerHTML = `

        <strong class="ns-type-highlight">

            ${data.input}

        </strong>

        <br><br>

        Convert

        <strong>
            ${data.from}
        </strong>

        to

        <strong>
            ${data.to}
        </strong>

    `;


    // =========================================
    // STEPS
    // =========================================

    let stepsHTML = "";


    data.steps.forEach(
        function(step, index) {

            const number =
                String(index + 1)
                .padStart(2, "0");


            stepsHTML += `

                <div class="ns-solution-step">

                    <span class="ns-step-number">
                        ${number}
                    </span>

                    <div class="ns-step-content">

                        <small>
                            STEP ${number}
                        </small>

                        <strong>
                            ${step}
                        </strong>

                    </div>

                </div>

            `;

        }
    );


    steps.innerHTML =
        stepsHTML;

}

function updateNumberSystemFormula() {

    const from =
        document.getElementById(
            "nsFromSystem"
        );


    const to =
        document.getElementById(
            "nsToSystem"
        );


    const formula =
        document.getElementById(
            "nsFormulaDisplay"
        );


    if (
        !from ||
        !to ||
        !formula
    ) {

        return;

    }


    const fromName =
        getSystemName(from.value);


    const toName =
        getSystemName(to.value);


    formula.innerHTML = `

        ${fromName}
        →
        ${toName}

        <br><br>

        <span>
            Base ${getSystemBase(from.value)}
            → 
            Base ${getSystemBase(to.value)}
        </span>

    `;

}

function startNumberSystem() {

    console.log(
        "Number System Converter Started"
    );


    const calculateButton =
        document.getElementById(
            "nsCalculateButton"
        );


    const fromSelect =
        document.getElementById(
            "nsFromSystem"
        );


    const toSelect =
        document.getElementById(
            "nsToSystem"
        );


    if (!calculateButton) {

        console.log(
            "Number System elements not found!"
        );

        return;

    }


    calculateButton.onclick =
        function() {

            calculateNumberSystem();

        };


    fromSelect.onchange =
        function() {

            updateNumberSystemFormula();

        };


    toSelect.onchange =
        function() {

            updateNumberSystemFormula();

        };


    updateNumberSystemFormula();

}

function getSystemBase(system) {

    switch(system) {

        case "binary":
            return 2;

        case "decimal":
            return 10;

        case "octal":
            return 8;

        case "hexadecimal":
            return 16;

        default:
            return "?";

    }

}