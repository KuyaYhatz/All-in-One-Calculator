function loadGeometric(canvas) {

    canvas.innerHTML = `

        <div class="geo-future-page">

            <!-- =========================================
                 LEFT SIDE : GEOMETRY CALCULATOR
            ========================================== -->

            <div class="geo-calc-panel">

                <div class="geo-calc-header">

                    <span class="geo-header-line"></span>

                    <div>

                        <h1>
                            Geometry Calculator
                        </h1>

                        <p>
                            Geometric Calculation System
                        </p>

                    </div>

                    <span class="geo-header-line"></span>

                </div>


                <!-- SHAPE SELECTOR -->

                <div class="geo-selector-box">

                    <label>
                        SELECT SHAPE
                    </label>

                    <select
                        id="geoShapeSelector"
                    >

                        <option value="square">
                            Square
                        </option>

                        <option value="rectangle">
                            Rectangle
                        </option>

                        <option value="circle">
                            Circle
                        </option>

                        <option value="triangle">
                            Triangle
                        </option>

                        <option value="cube">
                            Cube
                        </option>

                        <option value="cylinder">
                            Cylinder
                        </option>

                        <option value="sphere">
                            Sphere
                        </option>

                        <option value="cone">
                            Cone
                        </option>

                    </select>

                </div>


                <!-- DYNAMIC INPUTS -->

                <div
                    id="geoInputContainer"
                    class="geo-input-container"
                >
                </div>


                <!-- CALCULATE -->

                <button
                    id="geoCalculateButton"
                    class="geo-calculate-button"
                >

                    <span>
                        CALCULATE
                    </span>

                    <span class="geo-button-arrow">
                        →
                    </span>

                </button>


                <!-- RESULT -->

                <div class="geo-result-box">

                    <div class="geo-result-label">
                        CALCULATION RESULT
                    </div>

                    <div id="geoResultValue">
                        —
                    </div>

                </div>


                <!-- ERROR -->

                <div
                    id="geoErrorMessage"
                    class="geo-error-message"
                >
                </div>

            </div>


            <!-- =========================================
                 RIGHT SIDE : SOLUTION
            ========================================== -->

            <div class="geo-solution-panel">

                <div class="geo-solution-header">

                    <span class="geo-status-light"></span>

                    <div>

                        <h2>
                            Geometry Analysis
                        </h2>

                        <p>
                            Mathematical Solving System
                        </p>

                    </div>

                </div>


                <!-- FORMULA -->

                <div class="geo-info-card">

                    <div class="geo-card-label">
                        FORMULA
                    </div>

                    <div
                        id="geoFormulaDisplay"
                        class="geo-formula-display"
                    >
                        Select a shape to display
                        its formula.
                    </div>

                </div>


                <!-- SOLVING PROBLEM -->

                <div class="geo-info-card">

                    <div class="geo-card-label">
                        SOLVING PROBLEM
                    </div>

                    <div
                        id="geoProblemDisplay"
                        class="geo-problem-display"
                    >
                        Enter dimensions and
                        calculate a shape.
                    </div>

                </div>


                <!-- STEP-BY-STEP -->

                <div class="geo-info-card geo-steps-card">

                    <div class="geo-card-label">
                        STEP-BY-STEP SOLUTION
                    </div>

                    <div id="geoStepsDisplay">

                        <div class="geo-empty-step">

                            <span>01</span>

                            Waiting for calculation...

                        </div>

                    </div>

                </div>


                <!-- FINAL ANSWER -->

                <div class="geo-final-answer">

                    <div class="geo-card-label">
                        FINAL ANSWER
                    </div>

                    <div id="geoFinalAnswer">
                        —
                    </div>

                </div>

            </div>

        </div>

    `;


    // Start Geometry Calculator

    startGeoCalculator();

}

function startGeoCalculator() {

    console.log(
        "Geometry Calculator Started"
    );


    const shapeSelector =
        document.getElementById(
            "geoShapeSelector"
        );


    const calculateButton =
        document.getElementById(
            "geoCalculateButton"
        );


    if (
        !shapeSelector ||
        !calculateButton
    ) {

        console.log(
            "Geometry Calculator elements not found!"
        );

        return;

    }


    // Load default shape

    updateGeoShapeInputs();


    // Change shape

    shapeSelector.onchange = function() {

        updateGeoShapeInputs();

    };


    // Calculate

    calculateButton.onclick = function() {

        performGeoCalculation();

    };

}

function updateGeoShapeInputs() {

    const shape =
        document.getElementById(
            "geoShapeSelector"
        ).value;


    const inputContainer =
        document.getElementById(
            "geoInputContainer"
        );


    const formulaDisplay =
        document.getElementById(
            "geoFormulaDisplay"
        );


    let inputHTML = "";


    // =========================================
    // SQUARE
    // =========================================

    if (shape === "square") {

        inputHTML = `

            <div class="geo-input-group">

                <label>
                    SIDE LENGTH
                </label>

                <input
                    type="number"
                    id="geoSquareSide"
                    placeholder="Enter side length"
                    min="0"
                >

            </div>

        `;


        formulaDisplay.innerHTML = `

            Area = s²

            <br>

            Perimeter = 4s

        `;

    }


    // =========================================
    // RECTANGLE
    // =========================================

    else if (shape === "rectangle") {

        inputHTML = `

            <div class="geo-input-group">

                <label>
                    LENGTH
                </label>

                <input
                    type="number"
                    id="geoRectangleLength"
                    placeholder="Enter length"
                    min="0"
                >

            </div>


            <div class="geo-input-group">

                <label>
                    WIDTH
                </label>

                <input
                    type="number"
                    id="geoRectangleWidth"
                    placeholder="Enter width"
                    min="0"
                >

            </div>

        `;


        formulaDisplay.innerHTML = `

            Area = l × w

            <br>

            Perimeter = 2(l + w)

        `;

    }


    // =========================================
    // CIRCLE
    // =========================================

    else if (shape === "circle") {

        inputHTML = `

            <div class="geo-input-group">

                <label>
                    RADIUS
                </label>

                <input
                    type="number"
                    id="geoCircleRadius"
                    placeholder="Enter radius"
                    min="0"
                >

            </div>

        `;


        formulaDisplay.innerHTML = `

            Area = πr²

            <br>

            Circumference = 2πr

        `;

    }


    // =========================================
    // TRIANGLE
    // =========================================

    else if (shape === "triangle") {

        inputHTML = `

            <div class="geo-input-group">

                <label>
                    BASE
                </label>

                <input
                    type="number"
                    id="geoTriangleBase"
                    placeholder="Enter base"
                    min="0"
                >

            </div>


            <div class="geo-input-group">

                <label>
                    HEIGHT
                </label>

                <input
                    type="number"
                    id="geoTriangleHeight"
                    placeholder="Enter height"
                    min="0"
                >

            </div>

        `;


        formulaDisplay.innerHTML = `

            Area = ½ × b × h

        `;

    }


    // =========================================
    // CUBE
    // =========================================

    else if (shape === "cube") {

        inputHTML = `

            <div class="geo-input-group">

                <label>
                    SIDE LENGTH
                </label>

                <input
                    type="number"
                    id="geoCubeSide"
                    placeholder="Enter side length"
                    min="0"
                >

            </div>

        `;


        formulaDisplay.innerHTML = `

            Surface Area = 6s²

            <br>

            Volume = s³

        `;

    }


    // =========================================
    // CYLINDER
    // =========================================

    else if (shape === "cylinder") {

        inputHTML = `

            <div class="geo-input-group">

                <label>
                    RADIUS
                </label>

                <input
                    type="number"
                    id="geoCylinderRadius"
                    placeholder="Enter radius"
                    min="0"
                >

            </div>


            <div class="geo-input-group">

                <label>
                    HEIGHT
                </label>

                <input
                    type="number"
                    id="geoCylinderHeight"
                    placeholder="Enter height"
                    min="0"
                >

            </div>

        `;


        formulaDisplay.innerHTML = `

            Surface Area = 2πr(r + h)

            <br>

            Volume = πr²h

        `;

    }


    // =========================================
    // SPHERE
    // =========================================

    else if (shape === "sphere") {

        inputHTML = `

            <div class="geo-input-group">

                <label>
                    RADIUS
                </label>

                <input
                    type="number"
                    id="geoSphereRadius"
                    placeholder="Enter radius"
                    min="0"
                >

            </div>

        `;


        formulaDisplay.innerHTML = `

            Surface Area = 4πr²

            <br>

            Volume = ⁴⁄₃πr³

        `;

    }


    // =========================================
    // CONE
    // =========================================

    else if (shape === "cone") {

        inputHTML = `

            <div class="geo-input-group">

                <label>
                    RADIUS
                </label>

                <input
                    type="number"
                    id="geoConeRadius"
                    placeholder="Enter radius"
                    min="0"
                >

            </div>


            <div class="geo-input-group">

                <label>
                    HEIGHT
                </label>

                <input
                    type="number"
                    id="geoConeHeight"
                    placeholder="Enter height"
                    min="0"
                >

            </div>


            <div class="geo-input-group">

                <label>
                    SLANT HEIGHT
                </label>

                <input
                    type="number"
                    id="geoConeSlant"
                    placeholder="Enter slant height"
                    min="0"
                >

            </div>

        `;


        formulaDisplay.innerHTML = `

            Surface Area = πr(r + l)

            <br>

            Volume = ⅓πr²h

        `;

    }


    inputContainer.innerHTML =
        inputHTML;


    // Clear previous solution

    document.getElementById(
        "geoProblemDisplay"
    ).innerHTML =
        "Enter dimensions and calculate a shape.";


    document.getElementById(
        "geoStepsDisplay"
    ).innerHTML = `

        <div class="geo-empty-step">

            <span>01</span>

            Waiting for calculation...

        </div>

    `;


    document.getElementById(
        "geoResultValue"
    ).innerHTML = "—";


    document.getElementById(
        "geoFinalAnswer"
    ).innerHTML = "—";


    document.getElementById(
        "geoErrorMessage"
    ).innerHTML = "";

}

function performGeoCalculation() {

    const shape =
        document.getElementById(
            "geoShapeSelector"
        ).value;


    const resultDisplay =
        document.getElementById(
            "geoResultValue"
        );


    const errorDisplay =
        document.getElementById(
            "geoErrorMessage"
        );


    errorDisplay.innerHTML = "";


    // =========================================
    // SQUARE
    // =========================================

    if (shape === "square") {

        const side =
            Number(
                document.getElementById(
                    "geoSquareSide"
                ).value
            );


        if (side <= 0) {

            showGeoError(
                "Please enter a valid side length."
            );

            return;

        }


        const area =
            side * side;


        const perimeter =
            4 * side;


        resultDisplay.innerHTML =
            `${area.toFixed(2)} cm²`;


        showGeoSolution({

            shape: "Square",

            problem:
                `Side = ${side} cm`,

            steps: [

                `Area = s²`,

                `Area = ${side}²`,

                `Area = ${area.toFixed(2)} cm²`,

                `Perimeter = 4s`,

                `Perimeter = 4(${side})`,

                `Perimeter = ${perimeter.toFixed(2)} cm`

            ],

            answer:
                `Area = ${area.toFixed(2)} cm²<br>
                 Perimeter = ${perimeter.toFixed(2)} cm`

        });

    }


    // =========================================
    // RECTANGLE
    // =========================================

    else if (shape === "rectangle") {

        const length =
            Number(
                document.getElementById(
                    "geoRectangleLength"
                ).value
            );


        const width =
            Number(
                document.getElementById(
                    "geoRectangleWidth"
                ).value
            );


        if (
            length <= 0 ||
            width <= 0
        ) {

            showGeoError(
                "Please enter valid length and width."
            );

            return;

        }


        const area =
            length * width;


        const perimeter =
            2 * (length + width);


        resultDisplay.innerHTML =
            `${area.toFixed(2)} cm²`;


        showGeoSolution({

            shape: "Rectangle",

            problem:
                `Length = ${length} cm<br>
                 Width = ${width} cm`,

            steps: [

                `Area = l × w`,

                `Area = ${length} × ${width}`,

                `Area = ${area.toFixed(2)} cm²`,

                `Perimeter = 2(l + w)`,

                `Perimeter = 2(${length} + ${width})`,

                `Perimeter = ${perimeter.toFixed(2)} cm`

            ],

            answer:
                `Area = ${area.toFixed(2)} cm²<br>
                 Perimeter = ${perimeter.toFixed(2)} cm`

        });

    }


    // =========================================
    // CIRCLE
    // =========================================

    else if (shape === "circle") {

        const radius =
            Number(
                document.getElementById(
                    "geoCircleRadius"
                ).value
            );


        if (radius <= 0) {

            showGeoError(
                "Please enter a valid radius."
            );

            return;

        }


        const area =
            Math.PI *
            radius *
            radius;


        const circumference =
            2 *
            Math.PI *
            radius;


        resultDisplay.innerHTML =
            `${area.toFixed(2)} cm²`;


        showGeoSolution({

            shape: "Circle",

            problem:
                `Radius = ${radius} cm`,

            steps: [

                `Area = πr²`,

                `Area = π(${radius})²`,

                `Area = ${area.toFixed(2)} cm²`,

                `Circumference = 2πr`,

                `Circumference = 2π(${radius})`,

                `Circumference = ${circumference.toFixed(2)} cm`

            ],

            answer:
                `Area = ${area.toFixed(2)} cm²<br>
                 Circumference = ${circumference.toFixed(2)} cm`

        });

    }


    // =========================================
    // TRIANGLE
    // =========================================

    else if (shape === "triangle") {

        const base =
            Number(
                document.getElementById(
                    "geoTriangleBase"
                ).value
            );


        const height =
            Number(
                document.getElementById(
                    "geoTriangleHeight"
                ).value
            );


        if (
            base <= 0 ||
            height <= 0
        ) {

            showGeoError(
                "Please enter valid base and height."
            );

            return;

        }


        const area =
            (base * height) / 2;


        resultDisplay.innerHTML =
            `${area.toFixed(2)} cm²`;


        showGeoSolution({

            shape: "Triangle",

            problem:
                `Base = ${base} cm<br>
                 Height = ${height} cm`,

            steps: [

                `Area = ½ × b × h`,

                `Area = ½ × ${base} × ${height}`,

                `Area = ${area.toFixed(2)} cm²`

            ],

            answer:
                `Area = ${area.toFixed(2)} cm²`

        });

    }


    // =========================================
    // CUBE
    // =========================================

    else if (shape === "cube") {

        const side =
            Number(
                document.getElementById(
                    "geoCubeSide"
                ).value
            );


        if (side <= 0) {

            showGeoError(
                "Please enter a valid side length."
            );

            return;

        }


        const surfaceArea =
            6 * side * side;


        const volume =
            side * side * side;


        resultDisplay.innerHTML =
            `${volume.toFixed(2)} cm³`;


        showGeoSolution({

            shape: "Cube",

            problem:
                `Side = ${side} cm`,

            steps: [

                `Surface Area = 6s²`,

                `Surface Area = 6(${side})²`,

                `Surface Area = ${surfaceArea.toFixed(2)} cm²`,

                `Volume = s³`,

                `Volume = ${side}³`,

                `Volume = ${volume.toFixed(2)} cm³`

            ],

            answer:
                `Surface Area = ${surfaceArea.toFixed(2)} cm²<br>
                 Volume = ${volume.toFixed(2)} cm³`

        });

    }


    // =========================================
    // CYLINDER
    // =========================================

    else if (shape === "cylinder") {

        const radius =
            Number(
                document.getElementById(
                    "geoCylinderRadius"
                ).value
            );


        const height =
            Number(
                document.getElementById(
                    "geoCylinderHeight"
                ).value
            );


        if (
            radius <= 0 ||
            height <= 0
        ) {

            showGeoError(
                "Please enter valid radius and height."
            );

            return;

        }


        const surfaceArea =
            2 *
            Math.PI *
            radius *
            (radius + height);


        const volume =
            Math.PI *
            radius *
            radius *
            height;


        resultDisplay.innerHTML =
            `${volume.toFixed(2)} cm³`;


        showGeoSolution({

            shape: "Cylinder",

            problem:
                `Radius = ${radius} cm<br>
                 Height = ${height} cm`,

            steps: [

                `Surface Area = 2πr(r + h)`,

                `Surface Area = 2π(${radius})(${radius} + ${height})`,

                `Surface Area = ${surfaceArea.toFixed(2)} cm²`,

                `Volume = πr²h`,

                `Volume = π(${radius})²(${height})`,

                `Volume = ${volume.toFixed(2)} cm³`

            ],

            answer:
                `Surface Area = ${surfaceArea.toFixed(2)} cm²<br>
                 Volume = ${volume.toFixed(2)} cm³`

        });

    }


    // =========================================
    // SPHERE
    // =========================================

    else if (shape === "sphere") {

        const radius =
            Number(
                document.getElementById(
                    "geoSphereRadius"
                ).value
            );


        if (radius <= 0) {

            showGeoError(
                "Please enter a valid radius."
            );

            return;

        }


        const surfaceArea =
            4 *
            Math.PI *
            radius *
            radius;


        const volume =
            (4 / 3) *
            Math.PI *
            Math.pow(radius, 3);


        resultDisplay.innerHTML =
            `${volume.toFixed(2)} cm³`;


        showGeoSolution({

            shape: "Sphere",

            problem:
                `Radius = ${radius} cm`,

            steps: [

                `Surface Area = 4πr²`,

                `Surface Area = 4π(${radius})²`,

                `Surface Area = ${surfaceArea.toFixed(2)} cm²`,

                `Volume = ⁴⁄₃πr³`,

                `Volume = ⁴⁄₃π(${radius})³`,

                `Volume = ${volume.toFixed(2)} cm³`

            ],

            answer:
                `Surface Area = ${surfaceArea.toFixed(2)} cm²<br>
                 Volume = ${volume.toFixed(2)} cm³`

        });

    }


    // =========================================
    // CONE
    // =========================================

    else if (shape === "cone") {

        const radius =
            Number(
                document.getElementById(
                    "geoConeRadius"
                ).value
            );


        const height =
            Number(
                document.getElementById(
                    "geoConeHeight"
                ).value
            );


        const slant =
            Number(
                document.getElementById(
                    "geoConeSlant"
                ).value
            );


        if (
            radius <= 0 ||
            height <= 0 ||
            slant <= 0
        ) {

            showGeoError(
                "Please enter valid radius, height and slant height."
            );

            return;

        }


        const surfaceArea =
            Math.PI *
            radius *
            (radius + slant);


        const volume =
            (Math.PI *
            radius *
            radius *
            height) / 3;


        resultDisplay.innerHTML =
            `${volume.toFixed(2)} cm³`;


        showGeoSolution({

            shape: "Cone",

            problem:
                `Radius = ${radius} cm<br>
                 Height = ${height} cm<br>
                 Slant Height = ${slant} cm`,

            steps: [

                `Surface Area = πr(r + l)`,

                `Surface Area = π(${radius})(${radius} + ${slant})`,

                `Surface Area = ${surfaceArea.toFixed(2)} cm²`,

                `Volume = ⅓πr²h`,

                `Volume = ⅓π(${radius})²(${height})`,

                `Volume = ${volume.toFixed(2)} cm³`

            ],

            answer:
                `Surface Area = ${surfaceArea.toFixed(2)} cm²<br>
                 Volume = ${volume.toFixed(2)} cm³`

        });

    }

}

function showGeoError(message) {

    document.getElementById(
        "geoErrorMessage"
    ).innerHTML = `⚠ ${message}`;


    document.getElementById(
        "geoResultValue"
    ).innerHTML = "—";


    document.getElementById(
        "geoFinalAnswer"
    ).innerHTML = "—";

}

function showGeoSolution(data) {

    const problemDisplay =
        document.getElementById(
            "geoProblemDisplay"
        );


    const stepsDisplay =
        document.getElementById(
            "geoStepsDisplay"
        );


    const finalAnswer =
        document.getElementById(
            "geoFinalAnswer"
        );


    // =========================================
    // PROBLEM
    // =========================================

    problemDisplay.innerHTML = `

        <strong class="geo-shape-highlight">
            ${data.shape}
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

                <div class="geo-solution-step">

                    <span class="geo-step-number">
                        ${number}
                    </span>

                    <div class="geo-step-content">

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