console.log("✅ PC Spec Analyzer loaded");

/*==================================================*
 * SYSTEM CORE - PC SPEC ANALYZER
 * FUTURISTIC AQUA INTERFACE
 * UNIQUE PREFIX: PCSA
 *==================================================*/


/*==================================================*
 * MAIN PAGE
 *==================================================*/

function loadPCSpecAnalyzer(canvas) {

    console.log("🖥️ Loading PC Spec Analyzer...");

    if (!canvas) {
        console.error("❌ PCSA Canvas not found");
        return;
    }

    canvas.innerHTML = `

        <div class="pcsa-container">

            <!-- =====================================
                 HEADER
            ====================================== -->

            <div class="pcsa-header">

                <div class="pcsa-system-tag">
                    SYSTEM CORE // HARDWARE ANALYZER
                </div>

                <h1>
                    🖥️ PC SPEC ANALYZER
                </h1>

                <p>
                    Analyze your computer specifications,
                    estimate performance, and check hardware balance.
                </p>

                <div class="pcsa-status">
                    <span>●</span>
                    SYSTEM READY
                </div>

            </div>


            <!-- =====================================
                 MAIN LAYOUT
            ====================================== -->

            <div class="pcsa-layout">


                <!-- =================================
                     LEFT SIDE
                ================================== -->

                <div class="pcsa-input-panel">

                    <div class="pcsa-panel-title">
                        <span>01</span>
                        SYSTEM SPECIFICATIONS
                    </div>


                    <!-- CPU -->

                    <div class="pcsa-field">

                        <label>
                            CPU
                        </label>

                        <input
                            type="text"
                            id="pcsaCpu"
                            placeholder="e.g. Ryzen 5 5600"
                            value="Ryzen 5 5600"
                        >

                    </div>


                    <!-- GPU -->

                    <div class="pcsa-field">

                        <label>
                            GPU
                        </label>

                        <input
                            type="text"
                            id="pcsaGpu"
                            placeholder="e.g. RTX 4060"
                            value="RTX 4060"
                        >

                    </div>


                    <!-- RAM -->

                    <div class="pcsa-field">

                        <label>
                            RAM
                        </label>

                        <input
                            type="number"
                            id="pcsaRam"
                            placeholder="16"
                            value="16"
                        >

                        <span class="pcsa-unit">
                            GB
                        </span>

                    </div>


                    <!-- STORAGE -->

                    <div class="pcsa-field">

                        <label>
                            STORAGE
                        </label>

                        <input
                            type="number"
                            id="pcsaStorage"
                            placeholder="1000"
                            value="1000"
                        >

                        <span class="pcsa-unit">
                            GB
                        </span>

                    </div>


                    <!-- PSU -->

                    <div class="pcsa-field">

                        <label>
                            PSU
                        </label>

                        <input
                            type="number"
                            id="pcsaPsu"
                            placeholder="650"
                            value="650"
                        >

                        <span class="pcsa-unit">
                            W
                        </span>

                    </div>


                    <!-- MONITOR -->

                    <div class="pcsa-field">

                        <label>
                            MONITOR RESOLUTION
                        </label>

                        <select id="pcsaResolution">

                            <option value="720p">
                                720p
                            </option>

                            <option value="1080p" selected>
                                1080p
                            </option>

                            <option value="1440p">
                                1440p
                            </option>

                            <option value="4k">
                                4K
                            </option>

                        </select>

                    </div>


                    <!-- REFRESH RATE -->

                    <div class="pcsa-field">

                        <label>
                            REFRESH RATE
                        </label>

                        <select id="pcsaRefresh">

                            <option value="60">
                                60 Hz
                            </option>

                            <option value="75">
                                75 Hz
                            </option>

                            <option value="120">
                                120 Hz
                            </option>

                            <option value="144" selected>
                                144 Hz
                            </option>

                            <option value="165">
                                165 Hz
                            </option>

                            <option value="240">
                                240 Hz
                            </option>

                        </select>

                    </div>


                    <button
                        class="pcsa-analyze-btn"
                        onclick="pcsaAnalyzeSystem()"
                    >

                        ⚡ ANALYZE SYSTEM

                    </button>

                </div>



                <!-- =================================
                     RIGHT SIDE
                ================================== -->

                <div class="pcsa-analysis-panel">

                    <div class="pcsa-panel-title">

                        <span>02</span>

                        📊 COMPUTER ANALYSIS

                    </div>


                    <div
                        id="pcsaAnalysisOutput"
                        class="pcsa-analysis-output"
                    >

                        <div class="pcsa-idle">

                            <div class="pcsa-idle-icon">
                                🖥️
                            </div>

                            <h2>
                                SYSTEM CORE READY
                            </h2>

                            <p>
                                Enter your PC specifications
                                and run system analysis.
                            </p>

                        </div>

                    </div>

                </div>

            </div>



            <!-- =====================================
                 TOOL CATEGORIES
            ====================================== -->

            <div class="pcsa-tools-section">

                <div class="pcsa-panel-title">

                    <span>03</span>

                    SYSTEM TOOLS

                </div>


                <div class="pcsa-tools-grid">


                    <button
                        class="pcsa-tool-card"
                        onclick="pcsaShowTool('psu')"
                    >

                        <span>⚡</span>

                        <strong>
                            PSU Calculator
                        </strong>

                        <small>
                            CPU + GPU + RAM + Storage
                        </small>

                    </button>


                    <button
                        class="pcsa-tool-card"
                        onclick="pcsaShowTool('ram')"
                    >

                        <span>🧠</span>

                        <strong>
                            RAM Calculator
                        </strong>

                        <small>
                            Usage → Recommended RAM
                        </small>

                    </button>


                    <button
                        class="pcsa-tool-card"
                        onclick="pcsaShowTool('storage')"
                    >

                        <span>💾</span>

                        <strong>
                            Storage Calculator
                        </strong>

                        <small>
                            Games + Files + Media
                        </small>

                    </button>


                    <button
                        class="pcsa-tool-card"
                        onclick="pcsaShowTool('bottleneck')"
                    >

                        <span>🔧</span>

                        <strong>
                            Bottleneck Calculator
                        </strong>

                        <small>
                            CPU + GPU + Resolution
                        </small>

                    </button>


                    <button
                        class="pcsa-tool-card"
                        onclick="pcsaShowTool('budget')"
                    >

                        <span>💰</span>

                        <strong>
                            PC Budget Calculator
                        </strong>

                        <small>
                            Budget → PC Build
                        </small>

                    </button>


                    <button
                        class="pcsa-tool-card"
                        onclick="pcsaShowTool('compatibility')"
                    >

                        <span>🔗</span>

                        <strong>
                            PC Build Compatibility
                        </strong>

                        <small>
                            CPU ↔ Motherboard ↔ RAM
                        </small>

                    </button>

                </div>

            </div>


            <!-- =====================================
                 TOOL OUTPUT
            ====================================== -->

            <div
                id="pcsaToolOutput"
                class="pcsa-tool-output"
            ></div>

        </div>

    `;

}


/*==================================================*
 * MAIN ANALYSIS
 *==================================================*/

function pcsaAnalyzeSystem() {

    const cpu =
        document.getElementById("pcsaCpu").value;

    const gpu =
        document.getElementById("pcsaGpu").value;

    const ram =
        Number(
            document.getElementById("pcsaRam").value
        );

    const storage =
        Number(
            document.getElementById("pcsaStorage").value
        );

    const psu =
        Number(
            document.getElementById("pcsaPsu").value
        );

    const resolution =
        document.getElementById("pcsaResolution").value;

    const refresh =
        Number(
            document.getElementById("pcsaRefresh").value
        );


    const output =
        document.getElementById(
            "pcsaAnalysisOutput"
        );


    if (!cpu || !gpu || ram <= 0) {

        output.innerHTML = `

            <div class="pcsa-error">

                ⚠️ Please enter at least
                CPU, GPU, and RAM.

            </div>

        `;

        return;
    }


    /*
     * ----------------------------------------------
     * BASIC HARDWARE ESTIMATION
     * ----------------------------------------------
     */

    let gpuScore = 50;

    let cpuScore = 50;


    const gpuText =
        gpu.toLowerCase();

    const cpuText =
        cpu.toLowerCase();


    /* GPU */

    if (gpuText.includes("rtx 4090"))
        gpuScore = 98;

    else if (gpuText.includes("rtx 4080"))
        gpuScore = 94;

    else if (gpuText.includes("rtx 4070"))
        gpuScore = 88;

    else if (gpuText.includes("rtx 4060"))
        gpuScore = 76;

    else if (gpuText.includes("rtx 3060"))
        gpuScore = 65;

    else if (gpuText.includes("gtx 1660"))
        gpuScore = 50;

    else if (gpuText.includes("rx 7800"))
        gpuScore = 85;

    else if (gpuText.includes("rx 6700"))
        gpuScore = 68;


    /* CPU */

    if (
        cpuText.includes("ryzen 9") ||
        cpuText.includes("i9")
    )
        cpuScore = 95;

    else if (
        cpuText.includes("ryzen 7") ||
        cpuText.includes("i7")
    )
        cpuScore = 82;

    else if (
        cpuText.includes("ryzen 5") ||
        cpuText.includes("i5")
    )
        cpuScore = 70;

    else if (
        cpuText.includes("ryzen 3") ||
        cpuText.includes("i3")
    )
        cpuScore = 50;


    /*
     * RESOLUTION FACTOR
     */

    let resolutionFactor = 1;

    if (resolution === "720p")
        resolutionFactor = 0.80;

    else if (resolution === "1080p")
        resolutionFactor = 1;

    else if (resolution === "1440p")
        resolutionFactor = 0.72;

    else if (resolution === "4k")
        resolutionFactor = 0.48;


    /*
     * FPS ESTIMATE
     */

    let estimatedFPS =
        Math.round(
            gpuScore *
            1.65 *
            resolutionFactor
        );


    /*
     * REFRESH RATE LIMIT
     */

    const displayFPS =
        Math.min(
            estimatedFPS,
            refresh
        );


    /*
     * BOTTLENECK
     */

    const balanceDifference =
        Math.abs(
            cpuScore - gpuScore
        );


    let bottleneck =
        Math.min(
            35,
            Math.max(
                2,
                balanceDifference * 0.45
            )
        );


    if (
        resolution === "1440p" ||
        resolution === "4k"
    ) {

        bottleneck *= 0.75;

    }


    bottleneck =
        Number(
            bottleneck.toFixed(1)
        );


    /*
     * CPU / GPU BALANCE
     */

    let balanceStatus;


    if (balanceDifference <= 8)
        balanceStatus = "EXCELLENT";

    else if (balanceDifference <= 18)
        balanceStatus = "GOOD";

    else if (balanceDifference <= 28)
        balanceStatus = "FAIR";

    else
        balanceStatus = "UNBALANCED";


    /*
     * PSU
     */

    let recommendedPSU = 550;


    if (gpuScore >= 90)
        recommendedPSU = 850;

    else if (gpuScore >= 80)
        recommendedPSU = 750;

    else if (gpuScore >= 70)
        recommendedPSU = 650;

    else if (gpuScore >= 60)
        recommendedPSU = 550;


    /*
     * RAM
     */

    let ramRecommendation;

    if (ram < 8)
        ramRecommendation = "16 GB";

    else if (ram < 16)
        ramRecommendation = "16 GB";

    else if (ram < 32)
        ramRecommendation = "32 GB";

    else
        ramRecommendation = "32–64 GB";


    /*
     * STORAGE
     */

    let storageStatus;

    if (storage < 500)
        storageStatus = "Upgrade recommended";

    else if (storage < 1000)
        storageStatus = "Acceptable";

    else
        storageStatus = "Excellent";


    /*
     * OVERALL RATING
     */

    let rating =
        (
            gpuScore * 0.40 +
            cpuScore * 0.30 +
            Math.min(ram * 2, 100) * 0.15 +
            Math.min(
                storage / 10,
                100
            ) * 0.15
        );


    rating =
        Math.min(
            100,
            Math.round(rating)
        );


    let ratingText;

    if (rating >= 90)
        ratingText = "ELITE";

    else if (rating >= 80)
        ratingText = "EXCELLENT";

    else if (rating >= 70)
        ratingText = "VERY GOOD";

    else if (rating >= 60)
        ratingText = "GOOD";

    else
        ratingText = "BASIC";


    /*
     * OUTPUT
     */

    output.innerHTML = `

        <div class="pcsa-result-grid">


            <div class="pcsa-result-card">

                <span>
                    🎮 GAMING PERFORMANCE
                </span>

                <strong>
                    ${ratingText}
                </strong>

            </div>


            <div class="pcsa-result-card">

                <span>
                    ⚡ ESTIMATED FPS
                </span>

                <strong>
                    ~${estimatedFPS} FPS
                </strong>

                <small>
                    Display: ${displayFPS} FPS @ ${refresh}Hz
                </small>

            </div>


            <div class="pcsa-result-card">

                <span>
                    ⚖️ CPU / GPU BALANCE
                </span>

                <strong>
                    ${balanceStatus}
                </strong>

            </div>


            <div class="pcsa-result-card">

                <span>
                    🔧 BOTTLENECK
                </span>

                <strong>
                    ${bottleneck}%
                </strong>

            </div>


            <div class="pcsa-result-card">

                <span>
                    ⚡ RECOMMENDED PSU
                </span>

                <strong>
                    ${recommendedPSU}W
                </strong>

                <small>
                    Current PSU: ${psu}W
                </small>

            </div>


            <div class="pcsa-result-card">

                <span>
                    🧠 RAM RECOMMENDATION
                </span>

                <strong>
                    ${ramRecommendation}
                </strong>

            </div>


            <div class="pcsa-result-card">

                <span>
                    💾 STORAGE
                </span>

                <strong>
                    ${storageStatus}
                </strong>

                <small>
                    Current: ${storage} GB
                </small>

            </div>


            <div class="pcsa-rating-card">

                <span>
                    SYSTEM RATING
                </span>

                <strong>
                    ${rating}/100
                </strong>

                <small>
                    ${ratingText}
                </small>

            </div>


        </div>


        <div class="pcsa-analysis-note">

            <span>● SYSTEM ANALYSIS COMPLETE</span>

            <p>
                Estimated results are based on general hardware
                performance characteristics. Actual FPS may vary
                depending on game, graphics settings, drivers,
                thermals, and background processes.
            </p>

        </div>

    `;

}


/*==================================================*
 * TOOL ROUTER
 *==================================================*/

function pcsaShowTool(type) {

    const output =
        document.getElementById(
            "pcsaToolOutput"
        );


    if (!output) return;


    switch (type) {

        case "psu":
            pcsaPSUTool(output);
            break;

        case "ram":
            pcsaRAMTool(output);
            break;

        case "storage":
            pcsaStorageTool(output);
            break;

        case "bottleneck":
            pcsaBottleneckTool(output);
            break;

        case "budget":
            pcsaBudgetTool(output);
            break;

        case "compatibility":
            pcsaCompatibilityTool(output);
            break;

    }


    output.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/*==================================================*
 * PSU CALCULATOR
 *==================================================*/

function pcsaPSUTool(output) {

    output.innerHTML = `

        <div class="pcsa-tool-box">

            <h2>
                ⚡ PSU CALCULATOR
            </h2>

            <p>
                Estimate recommended PSU wattage
                based on your PC components.
            </p>


            <div class="pcsa-tool-form">

                <input
                    type="number"
                    id="pcsaPsuGpu"
                    placeholder="GPU Wattage"
                    value="220"
                >

                <input
                    type="number"
                    id="pcsaPsuCpu"
                    placeholder="CPU Wattage"
                    value="65"
                >

                <input
                    type="number"
                    id="pcsaPsuRam"
                    placeholder="RAM (GB)"
                    value="16"
                >

                <input
                    type="number"
                    id="pcsaPsuStorage"
                    placeholder="Storage Devices"
                    value="1"
                >

                <input
                    type="number"
                    id="pcsaPsuFans"
                    placeholder="Fans"
                    value="3"
                >

            </div>


            <button
                onclick="pcsaCalculatePSU()"
                class="pcsa-tool-button"
            >
                ⚡ CALCULATE PSU
            </button>


            <div
                id="pcsaPsuResult"
                class="pcsa-tool-result"
            ></div>

        </div>

    `;

}


function pcsaCalculatePSU() {

    const gpu =
        Number(
            document.getElementById(
                "pcsaPsuGpu"
            ).value
        );

    const cpu =
        Number(
            document.getElementById(
                "pcsaPsuCpu"
            ).value
        );

    const ram =
        Number(
            document.getElementById(
                "pcsaPsuRam"
            ).value
        );

    const storage =
        Number(
            document.getElementById(
                "pcsaPsuStorage"
            ).value
        );

    const fans =
        Number(
            document.getElementById(
                "pcsaPsuFans"
            ).value
        );


    const base =
        gpu +
        cpu +
        ram * 3 +
        storage * 8 +
        fans * 3;


    const recommended =
        Math.ceil(
            (base * 1.30) / 50
        ) * 50;


    document.getElementById(
        "pcsaPsuResult"
    ).innerHTML = `

        <strong>
            Recommended PSU:
            ${recommended}W
        </strong>

        <p>
            Includes approximately 30%
            headroom for transient loads
            and future upgrades.
        </p>

    `;

}


/*==================================================*
 * RAM CALCULATOR
 *==================================================*/

function pcsaRAMTool(output) {

    output.innerHTML = `

        <div class="pcsa-tool-box">

            <h2>
                🧠 RAM CALCULATOR
            </h2>

            <p>
                Estimate recommended RAM based
                on your normal workload.
            </p>


            <div class="pcsa-tool-form">

                <input
                    type="number"
                    id="pcsaRamPrograms"
                    placeholder="Programs running"
                    value="5"
                >

                <select id="pcsaRamWorkload">

                    <option value="8">
                        Basic / Office
                    </option>

                    <option value="16" selected>
                        Gaming
                    </option>

                    <option value="32">
                        Editing / Streaming
                    </option>

                    <option value="64">
                        Heavy Computing
                    </option>

                </select>

            </div>


            <button
                onclick="pcsaCalculateRAM()"
                class="pcsa-tool-button"
            >
                🧠 CALCULATE RAM
            </button>


            <div
                id="pcsaRamResult"
                class="pcsa-tool-result"
            ></div>

        </div>

    `;

}


function pcsaCalculateRAM() {

    const programs =
        Number(
            document.getElementById(
                "pcsaRamPrograms"
            ).value
        );

    const workload =
        Number(
            document.getElementById(
                "pcsaRamWorkload"
            ).value
        );


    const recommended =
        Math.max(
            workload,
            8 + programs * 1.5
        );


    let ram =
        8;


    if (recommended > 8)
        ram = 16;

    if (recommended > 16)
        ram = 32;

    if (recommended > 32)
        ram = 64;


    document.getElementById(
        "pcsaRamResult"
    ).innerHTML = `

        <strong>
            Recommended RAM:
            ${ram} GB
        </strong>

    `;

}


/*==================================================*
 * STORAGE CALCULATOR
 *==================================================*/

function pcsaStorageTool(output) {

    output.innerHTML = `

        <div class="pcsa-tool-box">

            <h2>
                💾 STORAGE CALCULATOR
            </h2>

            <p>
                Estimate storage requirements
                for games and personal files.
            </p>


            <div class="pcsa-tool-form">

                <input
                    type="number"
                    id="pcsaGames"
                    placeholder="Games (GB)"
                    value="500"
                >

                <input
                    type="number"
                    id="pcsaVideos"
                    placeholder="Videos (GB)"
                    value="100"
                >

                <input
                    type="number"
                    id="pcsaPhotos"
                    placeholder="Photos (GB)"
                    value="50"
                >

                <input
                    type="number"
                    id="pcsaFiles"
                    placeholder="Files (GB)"
                    value="50"
                >

            </div>


            <button
                onclick="pcsaCalculateStorage()"
                class="pcsa-tool-button"
            >
                💾 CALCULATE STORAGE
            </button>


            <div
                id="pcsaStorageResult"
                class="pcsa-tool-result"
            ></div>

        </div>

    `;

}


function pcsaCalculateStorage() {

    const games =
        Number(
            document.getElementById(
                "pcsaGames"
            ).value
        );

    const videos =
        Number(
            document.getElementById(
                "pcsaVideos"
            ).value
        );

    const photos =
        Number(
            document.getElementById(
                "pcsaPhotos"
            ).value
        );

    const files =
        Number(
            document.getElementById(
                "pcsaFiles"
            ).value
        );


    const required =
        games +
        videos +
        photos +
        files;


    const recommended =
        Math.ceil(
            (required * 1.25) / 250
        ) * 250;


    document.getElementById(
        "pcsaStorageResult"
    ).innerHTML = `

        <strong>
            Required:
            ${required} GB
        </strong>

        <p>
            Recommended capacity:
            ${recommended} GB
        </p>

    `;

}


/*==================================================*
 * BOTTLENECK CALCULATOR
 *==================================================*/

function pcsaBottleneckTool(output) {

    output.innerHTML = `

        <div class="pcsa-tool-box">

            <h2>
                🔧 BOTTLENECK CALCULATOR
            </h2>

            <p>
                Estimate possible CPU/GPU imbalance.
            </p>


            <div class="pcsa-tool-form">

                <input
                    type="text"
                    id="pcsaBottleCpu"
                    placeholder="CPU"
                    value="Ryzen 5 5600"
                >

                <input
                    type="text"
                    id="pcsaBottleGpu"
                    placeholder="GPU"
                    value="RTX 4060"
                >

                <select id="pcsaBottleResolution">

                    <option value="720">
                        720p
                    </option>

                    <option value="1080" selected>
                        1080p
                    </option>

                    <option value="1440">
                        1440p
                    </option>

                    <option value="2160">
                        4K
                    </option>

                </select>

            </div>


            <button
                onclick="pcsaCalculateBottleneck()"
                class="pcsa-tool-button"
            >
                🔧 CHECK BOTTLENECK
            </button>


            <div
                id="pcsaBottleResult"
                class="pcsa-tool-result"
            ></div>

        </div>

    `;

}


function pcsaCalculateBottleneck() {

    const cpu =
        document.getElementById(
            "pcsaBottleCpu"
        ).value.toLowerCase();

    const gpu =
        document.getElementById(
            "pcsaBottleGpu"
        ).value.toLowerCase();

    const resolution =
        Number(
            document.getElementById(
                "pcsaBottleResolution"
            ).value
        );


    let cpuScore = 60;
    let gpuScore = 60;


    if (cpu.includes("ryzen 9") || cpu.includes("i9"))
        cpuScore = 95;

    else if (cpu.includes("ryzen 7") || cpu.includes("i7"))
        cpuScore = 82;

    else if (cpu.includes("ryzen 5") || cpu.includes("i5"))
        cpuScore = 70;


    if (gpu.includes("4090"))
        gpuScore = 98;

    else if (gpu.includes("4080"))
        gpuScore = 94;

    else if (gpu.includes("4070"))
        gpuScore = 88;

    else if (gpu.includes("4060"))
        gpuScore = 76;

    else if (gpu.includes("3060"))
        gpuScore = 65;


    let difference =
        Math.abs(
            cpuScore - gpuScore
        );


    let bottleneck =
        difference * 0.45;


    if (resolution >= 1440)
        bottleneck *= 0.75;


    bottleneck =
        Math.min(
            35,
            Math.max(
                1,
                bottleneck
            )
        );


    document.getElementById(
        "pcsaBottleResult"
    ).innerHTML = `

        <strong>
            Estimated Bottleneck:
            ${bottleneck.toFixed(1)}%
        </strong>

        <p>
            This is a general estimate.
            Actual bottleneck depends on the
            specific game, workload, settings,
            drivers, and CPU/GPU utilization.
        </p>

    `;

}


/*==================================================*
 * PC BUDGET CALCULATOR
 *==================================================*/

function pcsaBudgetTool(output) {

    output.innerHTML = `

        <div class="pcsa-tool-box">

            <h2>
                💰 PC BUDGET CALCULATOR
            </h2>

            <p>
                Generate a suggested component
                allocation based on your budget.
            </p>


            <div class="pcsa-tool-form">

                <input
                    type="number"
                    id="pcsaBudget"
                    placeholder="Budget in PHP"
                    value="50000"
                >

            </div>


            <button
                onclick="pcsaCalculateBudget()"
                class="pcsa-tool-button"
            >
                💰 BUILD SYSTEM
            </button>


            <div
                id="pcsaBudgetResult"
                class="pcsa-tool-result"
            ></div>

        </div>

    `;

}


function pcsaCalculateBudget() {

    const budget =
        Number(
            document.getElementById(
                "pcsaBudget"
            ).value
        );


    if (budget <= 0) {

        document.getElementById(
            "pcsaBudgetResult"
        ).innerHTML =
            "⚠️ Enter a valid budget.";

        return;

    }


    const cpu =
        budget * 0.20;

    const gpu =
        budget * 0.35;

    const ram =
        budget * 0.10;

    const storage =
        budget * 0.08;

    const psu =
        budget * 0.08;

    const motherboard =
        budget * 0.12;


    document.getElementById(
        "pcsaBudgetResult"
    ).innerHTML = `

        <div class="pcsa-budget-grid">

            <div>
                CPU
                <strong>
                    ₱${Math.round(cpu).toLocaleString()}
                </strong>
            </div>

            <div>
                GPU
                <strong>
                    ₱${Math.round(gpu).toLocaleString()}
                </strong>
            </div>

            <div>
                RAM
                <strong>
                    ₱${Math.round(ram).toLocaleString()}
                </strong>
            </div>

            <div>
                SSD
                <strong>
                    ₱${Math.round(storage).toLocaleString()}
                </strong>
            </div>

            <div>
                PSU
                <strong>
                    ₱${Math.round(psu).toLocaleString()}
                </strong>
            </div>

            <div>
                Motherboard
                <strong>
                    ₱${Math.round(motherboard).toLocaleString()}
                </strong>
            </div>

        </div>

        <p>
            Budget allocation only.
            Actual component prices vary by
            brand, model, retailer, and market conditions.
        </p>

    `;

}


/*==================================================*
 * COMPATIBILITY CHECKER
 *==================================================*/

function pcsaCompatibilityTool(output) {

    output.innerHTML = `

        <div class="pcsa-tool-box">

            <h2>
                🔗 PC BUILD COMPATIBILITY
            </h2>

            <p>
                Check the basic compatibility
                relationship between your components.
            </p>


            <div class="pcsa-tool-form">

                <input
                    type="text"
                    id="pcsaCompatCpu"
                    placeholder="CPU"
                    value="Ryzen 5 5600"
                >

                <select id="pcsaCompatSocket">

                    <option value="am4" selected>
                        AM4 Motherboard
                    </option>

                    <option value="am5">
                        AM5 Motherboard
                    </option>

                    <option value="lga1700">
                        LGA1700 Motherboard
                    </option>

                    <option value="lga1851">
                        LGA1851 Motherboard
                    </option>

                </select>


                <select id="pcsaCompatRam">

                    <option value="ddr4" selected>
                        DDR4
                    </option>

                    <option value="ddr5">
                        DDR5
                    </option>

                </select>

            </div>


            <button
                onclick="pcsaCheckCompatibility()"
                class="pcsa-tool-button"
            >
                🔗 CHECK COMPATIBILITY
            </button>


            <div
                id="pcsaCompatResult"
                class="pcsa-tool-result"
            ></div>

        </div>

    `;

}


function pcsaCheckCompatibility() {

    const cpu =
        document.getElementById(
            "pcsaCompatCpu"
        ).value.toLowerCase();

    const socket =
        document.getElementById(
            "pcsaCompatSocket"
        ).value;

    const ram =
        document.getElementById(
            "pcsaCompatRam"
        ).value;


    let cpuSocket = "unknown";

    let cpuRam = "unknown";


    if (cpu.includes("ryzen 5 5600")) {

        cpuSocket = "am4";
        cpuRam = "ddr4";

    }

    else if (
        cpu.includes("ryzen 7000") ||
        cpu.includes("ryzen 5 7600")
    ) {

        cpuSocket = "am5";
        cpuRam = "ddr5";

    }

    else if (
        cpu.includes("i5-12") ||
        cpu.includes("i5-13") ||
        cpu.includes("i5-14")
    ) {

        cpuSocket = "lga1700";

    }


    let compatible = true;

    let messages = [];


    if (
        cpuSocket !== "unknown" &&
        cpuSocket !== socket
    ) {

        compatible = false;

        messages.push(
            "CPU socket does not match the selected motherboard."
        );

    }


    if (
        cpuRam !== "unknown" &&
        cpuRam !== ram
    ) {

        compatible = false;

        messages.push(
            "RAM generation does not match the CPU platform."
        );

    }


    if (compatible) {

        messages.push(
            "Basic CPU socket and RAM compatibility looks good."
        );

    }


    document.getElementById(
        "pcsaCompatResult"
    ).innerHTML = `

        <strong>

            ${compatible
                ? "🟢 COMPATIBLE"
                : "🔴 CHECK REQUIRED"}

        </strong>

        ${messages
            .map(
                message =>
                    `<p>${message}</p>`
            )
            .join("")}

    `;

}


/*==================================================*
 * GLOBAL REGISTRATION
 *==================================================*/

window.loadPCSpecAnalyzer =
    loadPCSpecAnalyzer;

window.pcsaAnalyzeSystem =
    pcsaAnalyzeSystem;

window.pcsaShowTool =
    pcsaShowTool;

window.pcsaCalculatePSU =
    pcsaCalculatePSU;

window.pcsaCalculateRAM =
    pcsaCalculateRAM;

window.pcsaCalculateStorage =
    pcsaCalculateStorage;

window.pcsaCalculateBottleneck =
    pcsaCalculateBottleneck;

window.pcsaCalculateBudget =
    pcsaCalculateBudget;

window.pcsaCheckCompatibility =
    pcsaCheckCompatibility;


console.log(
    "✅ PC Spec Analyzer functions registered"
);