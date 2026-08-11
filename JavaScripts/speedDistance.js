function loadSTD(canvas) {

    canvas.innerHTML = `

        <div class="std-future-page">

            <!-- =========================================
                 LEFT SIDE : STD CALCULATOR
            ========================================== -->

            <div class="std-calc-panel">

                <div class="std-calc-header">

                    <span class="std-header-line"></span>

                    <div>

                        <h1>
                            Speed • Time • Distance
                        </h1>

                        <p>
                            Motion Calculation System
                        </p>

                    </div>

                    <span class="std-header-line"></span>

                </div>


                <!-- CALCULATION TYPE -->

                <div class="std-selector-box">

                    <label>
                        SELECT CALCULATION
                    </label>

                    <select id="stdCalcSelector">

                        <option value="distance">
                            Find Distance
                        </option>

                        <option value="speed">
                            Find Speed
                        </option>

                        <option value="time">
                            Find Time
                        </option>

                    </select>

                </div>


                <!-- DYNAMIC INPUTS -->

                <div
                    id="stdInputContainer"
                    class="std-input-container"
                >
                </div>


                <!-- CALCULATE -->

                <button
                    id="stdCalculateButton"
                    class="std-calculate-button"
                >

                    <span>
                        CALCULATE
                    </span>

                    <span class="std-button-arrow">
                        →
                    </span>

                </button>


                <!-- RESULT -->

                <div class="std-result-box">

                    <div class="std-result-label">
                        CALCULATION RESULT
                    </div>

                    <div id="stdResultValue">
                        —
                    </div>

                </div>


                <!-- ERROR -->

                <div
                    id="stdErrorMessage"
                    class="std-error-message"
                >
                </div>

            </div>


            <!-- =========================================
                 RIGHT SIDE : SOLUTION
            ========================================== -->

            <div class="std-solution-panel">

                <div class="std-solution-header">

                    <span class="std-status-light"></span>

                    <div>

                        <h2>
                            Motion Analysis
                        </h2>

                        <p>
                            Mathematical Solving System
                        </p>

                    </div>

                </div>


                <!-- FORMULA -->

                <div class="std-info-card">

                    <div class="std-card-label">
                        FORMULA
                    </div>

                    <div
                        id="stdFormulaDisplay"
                        class="std-formula-display"
                    >
                        Select a calculation
                        to display its formula.
                    </div>

                </div>


                <!-- SOLVING PROBLEM -->

                <div class="std-info-card">

                    <div class="std-card-label">
                        SOLVING PROBLEM
                    </div>

                    <div
                        id="stdProblemDisplay"
                        class="std-problem-display"
                    >
                        Enter values and calculate
                        to begin.
                    </div>

                </div>


                <!-- STEP-BY-STEP -->

                <div class="std-info-card std-steps-card">

                    <div class="std-card-label">
                        STEP-BY-STEP SOLUTION
                    </div>

                    <div id="stdStepsDisplay">

                        <div class="std-empty-step">

                            <span>01</span>

                            Waiting for calculation...

                        </div>

                    </div>

                </div>


                <!-- FINAL ANSWER -->

                <div class="std-final-answer">

                    <div class="std-card-label">
                        FINAL ANSWER
                    </div>

                    <div id="stdFinalAnswer">
                        —
                    </div>

                </div>

            </div>

        </div>

    `;


    startSTDCalculator();

}

function startSTDCalculator() {

    console.log(
        "Speed Time Distance Calculator Started"
    );


    const selector =
        document.getElementById(
            "stdCalcSelector"
        );


    const calculateButton =
        document.getElementById(
            "stdCalculateButton"
        );


    if (
        !selector ||
        !calculateButton
    ) {

        console.log(
            "STD Calculator elements not found!"
        );

        return;

    }


    // Load default calculation

    updateSTDInputs();


    // Change calculation type

    selector.onchange = function() {

        updateSTDInputs();

    };


    // Calculate

    calculateButton.onclick = function() {

        performSTDCalculation();

    };

}

function updateSTDInputs() {

    const type =
        document.getElementById(
            "stdCalcSelector"
        ).value;


    const inputContainer =
        document.getElementById(
            "stdInputContainer"
        );


    const formulaDisplay =
        document.getElementById(
            "stdFormulaDisplay"
        );


    let inputHTML = "";


    // =========================================
    // FIND DISTANCE
    // =========================================

    if (type === "distance") {

        inputHTML = `

            <div class="std-input-group">

                <label>
                    SPEED
                </label>

                <input
                    type="number"
                    id="stdDistanceSpeed"
                    placeholder="Speed (km/h)"
                    min="0"
                >

            </div>


            <div class="std-input-group">

                <label>
                    TIME
                </label>

                <input
                    type="number"
                    id="stdDistanceTime"
                    placeholder="Time (hours)"
                    min="0"
                >

            </div>

        `;


        formulaDisplay.innerHTML = `

            Distance = Speed × Time

            <br><br>

            <span>
                d = v × t
            </span>

        `;

    }


    // =========================================
    // FIND SPEED
    // =========================================

    else if (type === "speed") {

        inputHTML = `

            <div class="std-input-group">

                <label>
                    DISTANCE
                </label>

                <input
                    type="number"
                    id="stdSpeedDistance"
                    placeholder="Distance (km)"
                    min="0"
                >

            </div>


            <div class="std-input-group">

                <label>
                    TIME
                </label>

                <input
                    type="number"
                    id="stdSpeedTime"
                    placeholder="Time (hours)"
                    min="0"
                >

            </div>

        `;


        formulaDisplay.innerHTML = `

            Speed = Distance ÷ Time

            <br><br>

            <span>
                v = d ÷ t
            </span>

        `;

    }


    // =========================================
    // FIND TIME
    // =========================================

    else if (type === "time") {

        inputHTML = `

            <div class="std-input-group">

                <label>
                    DISTANCE
                </label>

                <input
                    type="number"
                    id="stdTimeDistance"
                    placeholder="Distance (km)"
                    min="0"
                >

            </div>


            <div class="std-input-group">

                <label>
                    SPEED
                </label>

                <input
                    type="number"
                    id="stdTimeSpeed"
                    placeholder="Speed (km/h)"
                    min="0"
                >

            </div>

        `;


        formulaDisplay.innerHTML = `

            Time = Distance ÷ Speed

            <br><br>

            <span>
                t = d ÷ v
            </span>

        `;

    }


    inputContainer.innerHTML =
        inputHTML;


    // Reset previous result

    document.getElementById(
        "stdResultValue"
    ).innerHTML = "—";


    document.getElementById(
        "stdFinalAnswer"
    ).innerHTML = "—";


    document.getElementById(
        "stdProblemDisplay"
    ).innerHTML =
        "Enter values and calculate to begin.";


    document.getElementById(
        "stdStepsDisplay"
    ).innerHTML = `

        <div class="std-empty-step">

            <span>01</span>

            Waiting for calculation...

        </div>

    `;


    document.getElementById(
        "stdErrorMessage"
    ).innerHTML = "";

}

function performSTDCalculation() {

    const type =
        document.getElementById(
            "stdCalcSelector"
        ).value;


    const resultDisplay =
        document.getElementById(
            "stdResultValue"
        );


    const errorDisplay =
        document.getElementById(
            "stdErrorMessage"
        );


    errorDisplay.innerHTML = "";


    // =========================================
    // FIND DISTANCE
    // =========================================

    if (type === "distance") {

        const speed =
            Number(
                document.getElementById(
                    "stdDistanceSpeed"
                ).value
            );


        const time =
            Number(
                document.getElementById(
                    "stdDistanceTime"
                ).value
            );


        if (
            speed <= 0 ||
            time <= 0
        ) {

            showSTDError(
                "Please enter valid positive values."
            );

            return;

        }


        const distance =
            speed * time;


        resultDisplay.innerHTML =
            `${distance.toFixed(2)} km`;


        showSTDSolution({

            type: "Distance",

            problem: `
                Speed = ${speed} km/h
                <br>
                Time = ${time} hours
            `,

            steps: [

                `Distance = Speed × Time`,

                `Distance = ${speed} × ${time}`,

                `Distance = ${distance.toFixed(2)} km`

            ],

            answer:
                `${distance.toFixed(2)} km`

        });

    }


    // =========================================
    // FIND SPEED
    // =========================================

    else if (type === "speed") {

        const distance =
            Number(
                document.getElementById(
                    "stdSpeedDistance"
                ).value
            );


        const time =
            Number(
                document.getElementById(
                    "stdSpeedTime"
                ).value
            );


        if (
            distance <= 0 ||
            time <= 0
        ) {

            showSTDError(
                "Please enter valid positive values."
            );

            return;

        }


        const speed =
            distance / time;


        resultDisplay.innerHTML =
            `${speed.toFixed(2)} km/h`;


        showSTDSolution({

            type: "Speed",

            problem: `
                Distance = ${distance} km
                <br>
                Time = ${time} hours
            `,

            steps: [

                `Speed = Distance ÷ Time`,

                `Speed = ${distance} ÷ ${time}`,

                `Speed = ${speed.toFixed(2)} km/h`

            ],

            answer:
                `${speed.toFixed(2)} km/h`

        });

    }


    // =========================================
    // FIND TIME
    // =========================================

    else if (type === "time") {

        const distance =
            Number(
                document.getElementById(
                    "stdTimeDistance"
                ).value
            );


        const speed =
            Number(
                document.getElementById(
                    "stdTimeSpeed"
                ).value
            );


        if (
            distance <= 0 ||
            speed <= 0
        ) {

            showSTDError(
                "Please enter valid positive values."
            );

            return;

        }


        const time =
            distance / speed;


        resultDisplay.innerHTML =
            `${time.toFixed(2)} hours`;


        showSTDSolution({

            type: "Time",

            problem: `
                Distance = ${distance} km
                <br>
                Speed = ${speed} km/h
            `,

            steps: [

                `Time = Distance ÷ Speed`,

                `Time = ${distance} ÷ ${speed}`,

                `Time = ${time.toFixed(2)} hours`

            ],

            answer:
                `${time.toFixed(2)} hours`

        });

    }

}

function showSTDError(message) {

    document.getElementById(
        "stdErrorMessage"
    ).innerHTML =
        `⚠ ${message}`;


    document.getElementById(
        "stdResultValue"
    ).innerHTML = "—";


    document.getElementById(
        "stdFinalAnswer"
    ).innerHTML = "—";

}

function showSTDSolution(data) {

    const problemDisplay =
        document.getElementById(
            "stdProblemDisplay"
        );


    const stepsDisplay =
        document.getElementById(
            "stdStepsDisplay"
        );


    const finalAnswer =
        document.getElementById(
            "stdFinalAnswer"
        );


    // =========================================
    // PROBLEM
    // =========================================

    problemDisplay.innerHTML = `

        <strong class="std-type-highlight">
            Find ${data.type}
        </strong>

        <br><br>

        ${data.problem}

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

                <div class="std-solution-step">

                    <span class="std-step-number">
                        ${number}
                    </span>

                    <div class="std-step-content">

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


    stepsDisplay.innerHTML =
        stepsHTML;


    // =========================================
    // FINAL ANSWER
    // =========================================

    finalAnswer.innerHTML =
        data.answer;

}