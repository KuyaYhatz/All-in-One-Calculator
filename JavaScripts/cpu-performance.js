console.log("⚡ cpu-performance.js loaded");

/*==================================================*
 * CPU PERFORMANCE ESTIMATOR
 * FUTURISTIC AQUA INTERFACE
 * UNIQUE PREFIX: cpuPerf-
 *==================================================*/

function loadCPUPerformanceEstimator(canvas) {

    console.log("⚡ Loading CPU Performance Estimator...");

    if (!canvas) {
        console.error("❌ CPU Performance canvas not found");
        return;
    }

    canvas.innerHTML = `

        <div class="cpuPerf-container">

            <!-- =========================================
                 HEADER
            ========================================== -->

            <div class="cpuPerf-header">

                <div class="cpuPerf-header-content">

                    <span class="cpuPerf-badge">
                        CPU PERFORMANCE SYSTEM
                    </span>

                    <h1>
                        ⚡ CPU PERFORMANCE ESTIMATOR
                    </h1>

                    <p>
                        Estimate CPU performance based on
                        clock speed, cores, threads, IPC,
                        utilization, and workload type.
                    </p>

                </div>

            </div>


            <!-- =========================================
                 MAIN LAYOUT
            ========================================== -->

            <div class="cpuPerf-layout">


                <!-- =====================================
                     INPUT PANEL
                ====================================== -->

                <section class="cpuPerf-input-panel">

                    <div class="cpuPerf-panel-title">

                        <span>
                            ⚙️ CPU CONFIGURATION
                        </span>

                        <small>
                            INPUT PARAMETERS
                        </small>

                    </div>


                    <!-- BASE CLOCK -->

                    <div class="cpuPerf-field">

                        <label for="cpuPerf-baseClock">
                            Base Clock
                        </label>

                        <div class="cpuPerf-input-wrapper">

                            <input
                                type="number"
                                id="cpuPerf-baseClock"
                                placeholder="3.60"
                                min="0"
                                step="0.01"
                            >

                            <span>
                                GHz
                            </span>

                        </div>

                    </div>


                    <!-- BOOST CLOCK -->

                    <div class="cpuPerf-field">

                        <label for="cpuPerf-boostClock">
                            Boost Clock
                        </label>

                        <div class="cpuPerf-input-wrapper">

                            <input
                                type="number"
                                id="cpuPerf-boostClock"
                                placeholder="5.00"
                                min="0"
                                step="0.01"
                            >

                            <span>
                                GHz
                            </span>

                        </div>

                    </div>


                    <!-- CORES -->

                    <div class="cpuPerf-field">

                        <label for="cpuPerf-cores">
                            Number of Cores
                        </label>

                        <div class="cpuPerf-input-wrapper">

                            <input
                                type="number"
                                id="cpuPerf-cores"
                                placeholder="8"
                                min="1"
                                step="1"
                            >

                            <span>
                                CORES
                            </span>

                        </div>

                    </div>


                    <!-- THREADS -->

                    <div class="cpuPerf-field">

                        <label for="cpuPerf-threads">
                            Number of Threads
                        </label>

                        <div class="cpuPerf-input-wrapper">

                            <input
                                type="number"
                                id="cpuPerf-threads"
                                placeholder="16"
                                min="1"
                                step="1"
                            >

                            <span>
                                THREADS
                            </span>

                        </div>

                    </div>


                    <!-- IPC -->

                    <div class="cpuPerf-field">

                        <label for="cpuPerf-ipc">
                            IPC
                        </label>

                        <div class="cpuPerf-input-wrapper">

                            <input
                                type="number"
                                id="cpuPerf-ipc"
                                placeholder="1.50"
                                min="0"
                                step="0.01"
                            >

                            <span>
                                IPC
                            </span>

                        </div>

                    </div>


                    <!-- UTILIZATION -->

                    <div class="cpuPerf-field">

                        <label for="cpuPerf-utilization">
                            CPU Utilization
                        </label>

                        <div class="cpuPerf-input-wrapper">

                            <input
                                type="number"
                                id="cpuPerf-utilization"
                                placeholder="80"
                                min="0"
                                max="100"
                                step="1"
                            >

                            <span>
                                %
                            </span>

                        </div>

                    </div>


                    <!-- WORKLOAD -->

                    <div class="cpuPerf-field">

                        <label for="cpuPerf-workload">
                            Workload Type
                        </label>

                        <select
                            id="cpuPerf-workload"
                            class="cpuPerf-select"
                        >

                            <option value="single">
                                🟢 Single-Core
                            </option>

                            <option value="multi">
                                🔵 Multi-Core
                            </option>

                            <option value="gaming">
                                🟣 Gaming
                            </option>

                            <option value="rendering">
                                🟠 Rendering
                            </option>

                            <option value="heavy">
                                🔴 Heavy Computing
                            </option>

                        </select>

                    </div>


                    <!-- CALCULATE -->

                    <button
                        class="cpuPerf-calculate"
                        onclick="calculateCPUPerformance()"
                    >

                        ⚡ ESTIMATE PERFORMANCE

                    </button>

                </section>


                <!-- =====================================
                     RESULT PANEL
                ====================================== -->

                <section class="cpuPerf-result-panel">

                    <div class="cpuPerf-panel-title">

                        <span>
                            📊 PERFORMANCE ANALYSIS
                        </span>

                        <small>
                            ESTIMATED RESULT
                        </small>

                    </div>


                    <div
                        id="cpuPerf-result"
                        class="cpuPerf-result"
                    >

                        <div class="cpuPerf-idle">

                            <div class="cpuPerf-idle-icon">
                                ⚡
                            </div>

                            <h2>
                                SYSTEM READY
                            </h2>

                            <p>
                                Enter your CPU specifications
                                and select a workload type.
                            </p>

                        </div>

                    </div>

                </section>

            </div>

        </div>

    `;

    console.log(
        "✅ CPU Performance Estimator loaded successfully"
    );
}


/*==================================================*
 * CPU PERFORMANCE CALCULATION
 *==================================================*/

function calculateCPUPerformance() {

    const baseClock =
        Number(
            document.getElementById(
                "cpuPerf-baseClock"
            ).value
        );

    const boostClock =
        Number(
            document.getElementById(
                "cpuPerf-boostClock"
            ).value
        );

    const cores =
        Number(
            document.getElementById(
                "cpuPerf-cores"
            ).value
        );

    const threads =
        Number(
            document.getElementById(
                "cpuPerf-threads"
            ).value
        );

    const ipc =
        Number(
            document.getElementById(
                "cpuPerf-ipc"
            ).value
        );

    const utilization =
        Number(
            document.getElementById(
                "cpuPerf-utilization"
            ).value
        );

    const workload =
        document.getElementById(
            "cpuPerf-workload"
        ).value;


    const result =
        document.getElementById(
            "cpuPerf-result"
        );


    /*=========================================
     * VALIDATION
     *=========================================*/

    if (
        baseClock <= 0 ||
        boostClock <= 0 ||
        cores <= 0 ||
        threads <= 0 ||
        ipc <= 0 ||
        utilization < 0 ||
        utilization > 100
    ) {

        result.innerHTML = `

            <div class="cpuPerf-error">

                ⚠️

                <h3>
                    INVALID CPU DATA
                </h3>

                <p>
                    Please enter valid CPU
                    specifications.
                </p>

            </div>

        `;

        return;
    }


    if (boostClock < baseClock) {

        result.innerHTML = `

            <div class="cpuPerf-error">

                ⚠️

                <h3>
                    INVALID CLOCK SPEED
                </h3>

                <p>
                    Boost Clock should normally
                    be equal to or higher than
                    Base Clock.
                </p>

            </div>

        `;

        return;
    }


    /*=========================================
     * NORMALIZATION
     *=========================================*/

    const utilizationFactor =
        utilization / 100;


    const threadEfficiency =
        Math.min(
            threads / cores,
            2
        );


    const clockRatio =
        boostClock / baseClock;


    /*=========================================
     * WORKLOAD FACTORS
     *=========================================*/

    let workloadFactor = 1;

    let workloadName = "";


    switch (workload) {

        case "single":

            workloadFactor = 1.00;
            workloadName = "Single-Core";

            break;


        case "multi":

            workloadFactor =
                0.85 *
                threadEfficiency;

            workloadName = "Multi-Core";

            break;


        case "gaming":

            workloadFactor =
                0.92 *
                Math.min(
                    1.15,
                    0.85 + clockRatio * 0.15
                );

            workloadName = "Gaming";

            break;


        case "rendering":

            workloadFactor =
                0.90 *
                threadEfficiency;

            workloadName = "Rendering";

            break;


        case "heavy":

            workloadFactor =
                0.95 *
                threadEfficiency;

            workloadName = "Heavy Computing";

            break;

    }


    /*=========================================
     * ESTIMATED PERFORMANCE
     *=========================================*/

    const effectiveClock =
        baseClock +
        (
            (boostClock - baseClock)
            * utilizationFactor
        );


    const singleCoreScore =
        effectiveClock *
        ipc *
        100;


    const multiCoreScore =
        effectiveClock *
        ipc *
        cores *
        workloadFactor *
        utilizationFactor *
        100;


    let performanceScore;


    if (workload === "single") {

        performanceScore =
            singleCoreScore;

    }

    else {

        performanceScore =
            multiCoreScore;

    }


    /*=========================================
     * PERFORMANCE INDEX
     *=========================================*/

    const normalizedScore =
        Math.min(
            100,
            (
                performanceScore /
                12000
            ) * 100
        );


    let rating;


    if (normalizedScore >= 90) {

        rating = "EXTREME";

    }

    else if (normalizedScore >= 75) {

        rating = "VERY HIGH";

    }

    else if (normalizedScore >= 60) {

        rating = "HIGH";

    }

    else if (normalizedScore >= 40) {

        rating = "MODERATE";

    }

    else {

        rating = "LOW";

    }


    /*=========================================
     * RESULT
     *=========================================*/

    result.innerHTML = `

        <div class="cpuPerf-score">

            <span>
                PERFORMANCE INDEX
            </span>

            <strong>
                ${normalizedScore.toFixed(1)}
            </strong>

            <small>
                / 100
            </small>

        </div>


        <div class="cpuPerf-rating">

            ${rating}

        </div>


        <div class="cpuPerf-meter">

            <div
                style="
                    width:
                    ${normalizedScore.toFixed(1)}%;
                "
            ></div>

        </div>


        <div class="cpuPerf-result-grid">


            <div class="cpuPerf-stat">

                <span>
                    WORKLOAD
                </span>

                <strong>
                    ${workloadName}
                </strong>

            </div>


            <div class="cpuPerf-stat">

                <span>
                    EFFECTIVE CLOCK
                </span>

                <strong>
                    ${effectiveClock.toFixed(2)}
                    GHz
                </strong>

            </div>


            <div class="cpuPerf-stat">

                <span>
                    SINGLE-CORE SCORE
                </span>

                <strong>
                    ${singleCoreScore.toFixed(0)}
                </strong>

            </div>


            <div class="cpuPerf-stat">

                <span>
                    MULTI-CORE SCORE
                </span>

                <strong>
                    ${multiCoreScore.toFixed(0)}
                </strong>

            </div>


            <div class="cpuPerf-stat">

                <span>
                    CORES
                </span>

                <strong>
                    ${cores}
                </strong>

            </div>


            <div class="cpuPerf-stat">

                <span>
                    THREADS
                </span>

                <strong>
                    ${threads}
                </strong>

            </div>


            <div class="cpuPerf-stat">

                <span>
                    IPC
                </span>

                <strong>
                    ${ipc.toFixed(2)}
                </strong>

            </div>


            <div class="cpuPerf-stat">

                <span>
                    UTILIZATION
                </span>

                <strong>
                    ${utilization}%
                </strong>

            </div>

        </div>


        <div class="cpuPerf-disclaimer">

            ⚠️
            <span>
                This is an educational estimation model.
                Actual CPU performance depends on architecture,
                cache, memory bandwidth, instruction set,
                thermal limits, power limits, and workload.
            </span>

        </div>

    `;


    console.log(
        "⚡ CPU Performance:",
        normalizedScore.toFixed(1)
    );
}


/*==================================================*
 * GLOBAL REGISTRATION
 *==================================================*/

window.loadCPUPerformanceEstimator =
    loadCPUPerformanceEstimator;

window.calculateCPUPerformance =
    calculateCPUPerformance;


console.log(
    "✅ CPU Performance functions registered"
);