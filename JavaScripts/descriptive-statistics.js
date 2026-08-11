console.log("📊 descriptive-statistics.js loaded");

/*==================================================*
 * DESCRIPTIVE STATISTICS CALCULATOR
 * FUTURISTIC AQUA INTERFACE
 *
 * PREFIX:
 * dst-
 *
 * This prevents conflicts with other calculators.
 *==================================================*/


/*==================================================*
 * LOAD DESCRIPTIVE STATISTICS PAGE
 *==================================================*/

function loadDescriptiveStatistics(canvas) {

    console.log("📊 Loading Descriptive Statistics...");

    if (!canvas) {

        console.error("❌ Canvas not found");
        return;

    }


    canvas.innerHTML = `

        <div class="dst-container">

            <!-- =====================================
                 HEADER
            ====================================== -->

            <div class="dst-header">

                <div class="dst-header-content">

                    <span class="dst-badge">
                        STATISTICAL SYSTEM
                    </span>

                    <h1>
                        📊 DESCRIPTIVE STATISTICS
                    </h1>

                    <p>
                        Analyze data using mean, median,
                        mode, variance, standard deviation,
                        quartiles, percentiles, and Z-score.
                    </p>

                </div>

            </div>


            <!-- =====================================
                 MAIN LAYOUT
            ====================================== -->

            <div class="dst-layout">


                <!-- =================================
                     LEFT MENU
                ================================== -->

                <aside class="dst-menu">

                    <div class="dst-menu-header">

                        <span>
                            STATISTICS TOOLS
                        </span>

                        <small>
                            09 MODULES
                        </small>

                    </div>


                    <button
                        class="dst-nav active"
                        data-dst="mean">

                        <span class="dst-nav-icon">
                            Σ
                        </span>

                        <span>
                            Mean Calculator
                        </span>

                    </button>


                    <button
                        class="dst-nav"
                        data-dst="median">

                        <span class="dst-nav-icon">
                            ≈
                        </span>

                        <span>
                            Median Calculator
                        </span>

                    </button>


                    <button
                        class="dst-nav"
                        data-dst="mode">

                        <span class="dst-nav-icon">
                            M
                        </span>

                        <span>
                            Mode Calculator
                        </span>

                    </button>


                    <button
                        class="dst-nav"
                        data-dst="range">

                        <span class="dst-nav-icon">
                            ↔
                        </span>

                        <span>
                            Range Calculator
                        </span>

                    </button>


                    <button
                        class="dst-nav"
                        data-dst="variance">

                        <span class="dst-nav-icon">
                            σ²
                        </span>

                        <span>
                            Variance Calculator
                        </span>

                    </button>


                    <button
                        class="dst-nav"
                        data-dst="standardDeviation">

                        <span class="dst-nav-icon">
                            σ
                        </span>

                        <span>
                            Standard Deviation
                        </span>

                    </button>


                    <button
                        class="dst-nav"
                        data-dst="quartile">

                        <span class="dst-nav-icon">
                            Q
                        </span>

                        <span>
                            Quartile Calculator
                        </span>

                    </button>


                    <button
                        class="dst-nav"
                        data-dst="percentile">

                        <span class="dst-nav-icon">
                            %
                        </span>

                        <span>
                            Percentile Calculator
                        </span>

                    </button>


                    <button
                        class="dst-nav"
                        data-dst="zscore">

                        <span class="dst-nav-icon">
                            Z
                        </span>

                        <span>
                            Z-Score Calculator
                        </span>

                    </button>

                </aside>


                <!-- =================================
                     CALCULATOR AREA
                ================================== -->

                <main
                    id="dstCalculator"
                    class="dst-calculator">

                </main>

            </div>

        </div>

    `;


    /*==================================================*
     * NAVIGATION
     *==================================================*/

    const buttons =
        canvas.querySelectorAll(".dst-nav");


    buttons.forEach(button => {

        button.addEventListener(
            "click",
            function () {

                buttons.forEach(btn => {

                    btn.classList.remove("active");

                });


                this.classList.add("active");


                loadDSTCalculator(
                    this.dataset.dst
                );

            }
        );

    });


    /*==================================================*
     * DEFAULT
     *==================================================*/

    loadDSTCalculator("mean");


    console.log(
        "✅ Descriptive Statistics loaded successfully"
    );

}


/*==================================================*
 * LOAD SELECTED CALCULATOR
 *==================================================*/

function loadDSTCalculator(type) {

    const container =
        document.getElementById(
            "dstCalculator"
        );


    if (!container) {

        console.error(
            "❌ dstCalculator not found"
        );

        return;

    }


    switch (type) {

        case "mean":
            dstShowMean(container);
            break;

        case "median":
            dstShowMedian(container);
            break;

        case "mode":
            dstShowMode(container);
            break;

        case "range":
            dstShowRange(container);
            break;

        case "variance":
            dstShowVariance(container);
            break;

        case "standardDeviation":
            dstShowStandardDeviation(container);
            break;

        case "quartile":
            dstShowQuartile(container);
            break;

        case "percentile":
            dstShowPercentile(container);
            break;

        case "zscore":
            dstShowZScore(container);
            break;

        default:
            dstShowMean(container);

    }

}


/*==================================================*
 * HEADER
 *==================================================*/

function dstHeader(icon, title, description) {

    return `

        <div class="dst-calculator-header">

            <div class="dst-calculator-icon">
                ${icon}
            </div>

            <div>

                <span class="dst-calculator-label">
                    DESCRIPTIVE STATISTICS
                </span>

                <h2>
                    ${title}
                </h2>

                <p>
                    ${description}
                </p>

            </div>

        </div>

    `;

}


/*==================================================*
 * INPUT
 *==================================================*/

function dstInput(
    id,
    label,
    placeholder,
    step = "any"
) {

    return `

        <div class="dst-field">

            <label>
                ${label}
            </label>

            <input
                type="number"
                id="${id}"
                placeholder="${placeholder}"
                step="${step}"
            >

        </div>

    `;

}


/*==================================================*
 * DATA INPUT
 *==================================================*/

function dstDataInput() {

    return `

        <div class="dst-data-field">

            <label>
                DATA SET
            </label>

            <textarea
                id="dstDataInput"
                placeholder="Example: 10, 20, 30, 40, 50"
            ></textarea>

            <small>
                Separate values using commas or spaces.
            </small>

        </div>

    `;

}


/*==================================================*
 * PARSE DATA
 *==================================================*/

function dstGetData() {

    const input =
        document.getElementById(
            "dstDataInput"
        );


    if (!input) {

        return [];

    }


    return input.value
        .trim()
        .split(/[\s,]+/)
        .map(Number)
        .filter(
            value => Number.isFinite(value)
        );

}


/*==================================================*
 * RESULT HELPERS
 *==================================================*/

function dstResult(value, label = "RESULT") {

    return `

        <div class="dst-result-main">

            <span>
                ${label}
            </span>

            <strong>
                ${value}
            </strong>

        </div>

    `;

}


function dstFormat(value) {

    if (!Number.isFinite(value)) {

        return "N/A";

    }


    return Number(
        value.toFixed(6)
    ).toLocaleString(
        "en-US"
    );

}


/*==================================================*
 * MEAN
 *==================================================*/

function dstShowMean(container) {

    container.innerHTML = `

        ${dstHeader(
            "Σ",
            "Mean Calculator",
            "Calculate the arithmetic average of a data set."
        )}

        ${dstDataInput()}

        <button
            class="dst-calculate"
            onclick="dstCalculateMean()">

            ⚡ CALCULATE MEAN

        </button>

        <div
            id="dstMeanResult"
            class="dst-result">

            Enter your data set.

        </div>

    `;

}


function dstCalculateMean() {

    const data = dstGetData();

    const result =
        document.getElementById(
            "dstMeanResult"
        );


    if (data.length === 0) {

        result.innerHTML =
            "⚠️ Please enter valid numerical data.";

        return;

    }


    const sum =
        data.reduce(
            (total, value) =>
                total + value,
            0
        );


    const mean =
        sum / data.length;


    result.innerHTML = `

        ${dstResult(
            dstFormat(mean),
            "ARITHMETIC MEAN"
        )}

        <div class="dst-result-grid">

            <div>
                <span>SUM</span>
                <strong>
                    ${dstFormat(sum)}
                </strong>
            </div>

            <div>
                <span>COUNT</span>
                <strong>
                    ${data.length}
                </strong>
            </div>

        </div>

    `;

}


/*==================================================*
 * MEDIAN
 *==================================================*/

function dstShowMedian(container) {

    container.innerHTML = `

        ${dstHeader(
            "≈",
            "Median Calculator",
            "Find the middle value of an ordered data set."
        )}

        ${dstDataInput()}

        <button
            class="dst-calculate"
            onclick="dstCalculateMedian()">

            ⚡ CALCULATE MEDIAN

        </button>

        <div
            id="dstMedianResult"
            class="dst-result">

            Enter your data set.

        </div>

    `;

}


function dstCalculateMedian() {

    const data = dstGetData();

    const result =
        document.getElementById(
            "dstMedianResult"
        );


    if (data.length === 0) {

        result.innerHTML =
            "⚠️ Please enter valid numerical data.";

        return;

    }


    const sorted =
        [...data].sort(
            (a, b) => a - b
        );


    const middle =
        Math.floor(
            sorted.length / 2
        );


    let median;


    if (sorted.length % 2 === 0) {

        median =
            (
                sorted[middle - 1] +
                sorted[middle]
            ) / 2;

    } else {

        median =
            sorted[middle];

    }


    result.innerHTML = `

        ${dstResult(
            dstFormat(median),
            "MEDIAN"
        )}

        <div class="dst-result-grid">

            <div>
                <span>DATA COUNT</span>
                <strong>
                    ${sorted.length}
                </strong>
            </div>

            <div>
                <span>ORDERED DATA</span>
                <strong>
                    ${sorted.join(", ")}
                </strong>
            </div>

        </div>

    `;

}


/*==================================================*
 * MODE
 *==================================================*/

function dstShowMode(container) {

    container.innerHTML = `

        ${dstHeader(
            "M",
            "Mode Calculator",
            "Find the value or values that occur most frequently."
        )}

        ${dstDataInput()}

        <button
            class="dst-calculate"
            onclick="dstCalculateMode()">

            ⚡ CALCULATE MODE

        </button>

        <div
            id="dstModeResult"
            class="dst-result">

            Enter your data set.

        </div>

    `;

}


function dstCalculateMode() {

    const data = dstGetData();

    const result =
        document.getElementById(
            "dstModeResult"
        );


    if (data.length === 0) {

        result.innerHTML =
            "⚠️ Please enter valid numerical data.";

        return;

    }


    const frequency = new Map();


    data.forEach(value => {

        frequency.set(
            value,
            (frequency.get(value) || 0) + 1
        );

    });


    const maxFrequency =
        Math.max(
            ...frequency.values()
        );


    if (maxFrequency === 1) {

        result.innerHTML = `

            ${dstResult(
                "NO MODE",
                "MODE"
            )}

            <p class="dst-note">
                Every value occurs only once.
            </p>

        `;

        return;

    }


    const modes =
        [...frequency.entries()]
            .filter(
                ([, count]) =>
                    count === maxFrequency
            )
            .map(
                ([value]) =>
                    value
            );


    result.innerHTML = `

        ${dstResult(
            modes.join(", "),
            "MODE"
        )}

        <div class="dst-result-grid">

            <div>
                <span>FREQUENCY</span>
                <strong>
                    ${maxFrequency}
                </strong>
            </div>

        </div>

    `;

}


/*==================================================*
 * RANGE
 *==================================================*/

function dstShowRange(container) {

    container.innerHTML = `

        ${dstHeader(
            "↔",
            "Range Calculator",
            "Calculate the difference between the highest and lowest values."
        )}

        ${dstDataInput()}

        <button
            class="dst-calculate"
            onclick="dstCalculateRange()">

            ⚡ CALCULATE RANGE

        </button>

        <div
            id="dstRangeResult"
            class="dst-result">

            Enter your data set.

        </div>

    `;

}


function dstCalculateRange() {

    const data = dstGetData();

    const result =
        document.getElementById(
            "dstRangeResult"
        );


    if (data.length === 0) {

        result.innerHTML =
            "⚠️ Please enter valid numerical data.";

        return;

    }


    const minimum =
        Math.min(...data);

    const maximum =
        Math.max(...data);

    const range =
        maximum - minimum;


    result.innerHTML = `

        ${dstResult(
            dstFormat(range),
            "RANGE"
        )}

        <div class="dst-result-grid">

            <div>
                <span>MINIMUM</span>
                <strong>
                    ${dstFormat(minimum)}
                </strong>
            </div>

            <div>
                <span>MAXIMUM</span>
                <strong>
                    ${dstFormat(maximum)}
                </strong>
            </div>

        </div>

    `;

}


/*==================================================*
 * VARIANCE
 *==================================================*/

function dstShowVariance(container) {

    container.innerHTML = `

        ${dstHeader(
            "σ²",
            "Variance Calculator",
            "Calculate population or sample variance."
        )}

        ${dstDataInput()}

        <div class="dst-option-grid">

            <label class="dst-radio">

                <input
                    type="radio"
                    name="dstVarianceType"
                    value="population"
                    checked
                >

                Population Variance

            </label>


            <label class="dst-radio">

                <input
                    type="radio"
                    name="dstVarianceType"
                    value="sample"
                >

                Sample Variance

            </label>

        </div>

        <button
            class="dst-calculate"
            onclick="dstCalculateVariance()">

            ⚡ CALCULATE VARIANCE

        </button>

        <div
            id="dstVarianceResult"
            class="dst-result">

            Enter your data set.

        </div>

    `;

}


function dstCalculateVariance() {

    const data = dstGetData();

    const result =
        document.getElementById(
            "dstVarianceResult"
        );


    if (data.length === 0) {

        result.innerHTML =
            "⚠️ Please enter valid numerical data.";

        return;

    }


    const type =
        document.querySelector(
            'input[name="dstVarianceType"]:checked'
        ).value;


    if (
        type === "sample" &&
        data.length < 2
    ) {

        result.innerHTML =
            "⚠️ Sample variance requires at least 2 values.";

        return;

    }


    const mean =
        data.reduce(
            (sum, value) =>
                sum + value,
            0
        ) / data.length;


    const squaredDeviation =
        data.reduce(
            (sum, value) =>
                sum +
                Math.pow(
                    value - mean,
                    2
                ),
            0
        );


    const divisor =
        type === "sample"
            ? data.length - 1
            : data.length;


    const variance =
        squaredDeviation / divisor;


    result.innerHTML = `

        ${dstResult(
            dstFormat(variance),
            type === "sample"
                ? "SAMPLE VARIANCE"
                : "POPULATION VARIANCE"
        )}

        <div class="dst-result-grid">

            <div>
                <span>MEAN</span>
                <strong>
                    ${dstFormat(mean)}
                </strong>
            </div>

            <div>
                <span>OBSERVATIONS</span>
                <strong>
                    ${data.length}
                </strong>
            </div>

        </div>

    `;

}


/*==================================================*
 * STANDARD DEVIATION
 *==================================================*/

function dstShowStandardDeviation(container) {

    container.innerHTML = `

        ${dstHeader(
            "σ",
            "Standard Deviation",
            "Measure the spread or dispersion of your data."
        )}

        ${dstDataInput()}

        <div class="dst-option-grid">

            <label class="dst-radio">

                <input
                    type="radio"
                    name="dstSDType"
                    value="population"
                    checked
                >

                Population

            </label>


            <label class="dst-radio">

                <input
                    type="radio"
                    name="dstSDType"
                    value="sample"
                >

                Sample

            </label>

        </div>

        <button
            class="dst-calculate"
            onclick="dstCalculateStandardDeviation()">

            ⚡ CALCULATE STANDARD DEVIATION

        </button>

        <div
            id="dstSDResult"
            class="dst-result">

            Enter your data set.

        </div>

    `;

}


function dstCalculateStandardDeviation() {

    const data = dstGetData();

    const result =
        document.getElementById(
            "dstSDResult"
        );


    if (data.length === 0) {

        result.innerHTML =
            "⚠️ Please enter valid numerical data.";

        return;

    }


    const type =
        document.querySelector(
            'input[name="dstSDType"]:checked'
        ).value;


    if (
        type === "sample" &&
        data.length < 2
    ) {

        result.innerHTML =
            "⚠️ Sample standard deviation requires at least 2 values.";

        return;

    }


    const mean =
        data.reduce(
            (sum, value) =>
                sum + value,
            0
        ) / data.length;


    const squaredDeviation =
        data.reduce(
            (sum, value) =>
                sum +
                Math.pow(
                    value - mean,
                    2
                ),
            0
        );


    const divisor =
        type === "sample"
            ? data.length - 1
            : data.length;


    const variance =
        squaredDeviation / divisor;


    const standardDeviation =
        Math.sqrt(variance);


    result.innerHTML = `

        ${dstResult(
            dstFormat(standardDeviation),
            type === "sample"
                ? "SAMPLE STANDARD DEVIATION"
                : "POPULATION STANDARD DEVIATION"
        )}

        <div class="dst-result-grid">

            <div>
                <span>MEAN</span>
                <strong>
                    ${dstFormat(mean)}
                </strong>
            </div>

            <div>
                <span>VARIANCE</span>
                <strong>
                    ${dstFormat(variance)}
                </strong>
            </div>

        </div>

    `;

}


/*==================================================*
 * QUARTILE
 *==================================================*/

function dstShowQuartile(container) {

    container.innerHTML = `

        ${dstHeader(
            "Q",
            "Quartile Calculator",
            "Calculate Q1, Q2, and Q3 from an ordered data set."
        )}

        ${dstDataInput()}

        <button
            class="dst-calculate"
            onclick="dstCalculateQuartile()">

            ⚡ CALCULATE QUARTILES

        </button>

        <div
            id="dstQuartileResult"
            class="dst-result">

            Enter your data set.

        </div>

    `;

}


function dstPercentileValue(data, percentile) {

    const sorted =
        [...data].sort(
            (a, b) => a - b
        );


    if (sorted.length === 1) {

        return sorted[0];

    }


    const index =
        (percentile / 100) *
        (sorted.length - 1);


    const lower =
        Math.floor(index);

    const upper =
        Math.ceil(index);


    if (lower === upper) {

        return sorted[lower];

    }


    return (
        sorted[lower] +
        (
            sorted[upper] -
            sorted[lower]
        ) *
        (index - lower)
    );

}


function dstCalculateQuartile() {

    const data = dstGetData();

    const result =
        document.getElementById(
            "dstQuartileResult"
        );


    if (data.length === 0) {

        result.innerHTML =
            "⚠️ Please enter valid numerical data.";

        return;

    }


    const q1 =
        dstPercentileValue(
            data,
            25
        );


    const q2 =
        dstPercentileValue(
            data,
            50
        );


    const q3 =
        dstPercentileValue(
            data,
            75
        );


    result.innerHTML = `

        <div class="dst-result-grid dst-three-results">

            <div>

                <span>
                    Q1
                </span>

                <strong>
                    ${dstFormat(q1)}
                </strong>

            </div>


            <div>

                <span>
                    Q2 / MEDIAN
                </span>

                <strong>
                    ${dstFormat(q2)}
                </strong>

            </div>


            <div>

                <span>
                    Q3
                </span>

                <strong>
                    ${dstFormat(q3)}
                </strong>

            </div>

        </div>

    `;

}


/*==================================================*
 * PERCENTILE
 *==================================================*/

function dstShowPercentile(container) {

    container.innerHTML = `

        ${dstHeader(
            "%",
            "Percentile Calculator",
            "Find the value corresponding to a selected percentile."
        )}

        ${dstDataInput()}


        <div class="dst-form-grid">

            ${dstInput(
                "dstPercentile",
                "Percentile",
                "75",
                "0.01"
            )}

        </div>


        <button
            class="dst-calculate"
            onclick="dstCalculatePercentile()">

            ⚡ CALCULATE PERCENTILE

        </button>


        <div
            id="dstPercentileResult"
            class="dst-result">

            Enter your data and percentile.

        </div>

    `;

}


function dstCalculatePercentile() {

    const data = dstGetData();


    const percentileInput =
        document.getElementById(
            "dstPercentile"
        );


    const result =
        document.getElementById(
            "dstPercentileResult"
        );


    const percentile =
        Number(
            percentileInput.value
        );


    if (
        data.length === 0 ||
        !Number.isFinite(percentile) ||
        percentile < 0 ||
        percentile > 100
    ) {

        result.innerHTML =
            "⚠️ Enter valid data and a percentile from 0 to 100.";

        return;

    }


    const value =
        dstPercentileValue(
            data,
            percentile
        );


    result.innerHTML = `

        ${dstResult(
            dstFormat(value),
            `${percentile}TH PERCENTILE`
        )}

    `;

}


/*==================================================*
 * Z-SCORE
 *==================================================*/

function dstShowZScore(container) {

    container.innerHTML = `

        ${dstHeader(
            "Z",
            "Z-Score Calculator",
            "Determine how many standard deviations a value is from the mean."
        )}


        <div class="dst-form-grid">

            ${dstInput(
                "dstZValue",
                "Value (X)",
                "75"
            )}

            ${dstInput(
                "dstZMean",
                "Mean (μ)",
                "70"
            )}

            ${dstInput(
                "dstZSD",
                "Standard Deviation (σ)",
                "5"
            )}

        </div>


        <button
            class="dst-calculate"
            onclick="dstCalculateZScore()">

            ⚡ CALCULATE Z-SCORE

        </button>


        <div
            id="dstZScoreResult"
            class="dst-result">

            Enter X, mean, and standard deviation.

        </div>

    `;

}


function dstCalculateZScore() {

    const value =
        Number(
            document.getElementById(
                "dstZValue"
            ).value
        );


    const mean =
        Number(
            document.getElementById(
                "dstZMean"
            ).value
        );


    const standardDeviation =
        Number(
            document.getElementById(
                "dstZSD"
            ).value
        );


    const result =
        document.getElementById(
            "dstZScoreResult"
        );


    if (
        !Number.isFinite(value) ||
        !Number.isFinite(mean) ||
        !Number.isFinite(standardDeviation) ||
        standardDeviation <= 0
    ) {

        result.innerHTML =
            "⚠️ Please enter valid values. Standard deviation must be greater than 0.";

        return;

    }


    const z =
        (value - mean) /
        standardDeviation;


    let interpretation;


    if (z > 0) {

        interpretation =
            "The value is above the mean.";

    }

    else if (z < 0) {

        interpretation =
            "The value is below the mean.";

    }

    else {

        interpretation =
            "The value is exactly at the mean.";

    }


    result.innerHTML = `

        ${dstResult(
            dstFormat(z),
            "Z-SCORE"
        )}

        <div class="dst-result-grid">

            <div>

                <span>
                    VALUE
                </span>

                <strong>
                    ${dstFormat(value)}
                </strong>

            </div>


            <div>

                <span>
                    MEAN
                </span>

                <strong>
                    ${dstFormat(mean)}
                </strong>

            </div>


            <div>

                <span>
                    STANDARD DEVIATION
                </span>

                <strong>
                    ${dstFormat(standardDeviation)}
                </strong>

            </div>

        </div>


        <p class="dst-note">
            ${interpretation}
        </p>

    `;

}


/*==================================================*
 * GLOBAL REGISTRATION
 *==================================================*/

window.loadDescriptiveStatistics =
    loadDescriptiveStatistics;

window.loadDSTCalculator =
    loadDSTCalculator;

window.dstCalculateMean =
    dstCalculateMean;

window.dstCalculateMedian =
    dstCalculateMedian;

window.dstCalculateMode =
    dstCalculateMode;

window.dstCalculateRange =
    dstCalculateRange;

window.dstCalculateVariance =
    dstCalculateVariance;

window.dstCalculateStandardDeviation =
    dstCalculateStandardDeviation;

window.dstCalculateQuartile =
    dstCalculateQuartile;

window.dstCalculatePercentile =
    dstCalculatePercentile;

window.dstCalculateZScore =
    dstCalculateZScore;


console.log(
    "✅ Descriptive Statistics functions registered"
);