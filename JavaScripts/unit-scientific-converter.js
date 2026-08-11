console.log("✅ unit-scientific-converter.js loaded");

/*==================================================
 * UNIT & SCIENTIFIC CONVERTER
 * FUTURISTIC AQUA INTERFACE
 *
 * PREFIX:
 * usc-
 *==================================================*/

function loadUnitScientificConverter(canvas) {

    console.log("⚡ Loading Unit & Scientific Converter...");

    if (!canvas) {
        console.error("❌ Canvas not found");
        return;
    }


    /*==================================================
     * MAIN HTML
     *==================================================*/

    canvas.innerHTML = `

        <section class="usc-container">

            <!-- =========================================
                 HEADER
            ========================================== -->

            <header class="usc-header">

                <div class="usc-header-content">

                    <span class="usc-system-badge">
                        SYSTEM CORE // SCIENTIFIC ENGINE
                    </span>

                    <h1 class="usc-title">
                        UNIT & SCIENTIFIC CONVERTER
                    </h1>

                    <p class="usc-subtitle">
                        Advanced measurement conversion system
                        for scientific, engineering, electrical,
                        chemical and technical calculations.
                    </p>

                </div>

                <div class="usc-header-status">

                    <span class="usc-status-dot"></span>

                    <span>
                        SYSTEM ONLINE
                    </span>

                </div>

            </header>


            <!-- =========================================
                 MAIN LAYOUT
            ========================================== -->

            <div class="usc-layout">


                <!-- =====================================
                     CATEGORY SIDEBAR
                ====================================== -->

                <aside class="usc-sidebar">

                    <div class="usc-sidebar-header">

                        <span class="usc-sidebar-title">
                            CONVERSION MODULES
                        </span>

                        <span class="usc-module-count">
                            14 MODULES
                        </span>

                    </div>


                    <div class="usc-category-list">


                        <button
                            class="usc-category-btn active"
                            data-usc-category="mass"
                        >
                            <span class="usc-category-icon">⚖️</span>
                            <span>Mass</span>
                        </button>


                        <button
                            class="usc-category-btn"
                            data-usc-category="volume"
                        >
                            <span class="usc-category-icon">🧊</span>
                            <span>Volume</span>
                        </button>


                        <button
                            class="usc-category-btn"
                            data-usc-category="temperature"
                        >
                            <span class="usc-category-icon">🌡️</span>
                            <span>Temperature</span>
                        </button>


                        <button
                            class="usc-category-btn"
                            data-usc-category="area"
                        >
                            <span class="usc-category-icon">▧</span>
                            <span>Area</span>
                        </button>


                        <button
                            class="usc-category-btn"
                            data-usc-category="time"
                        >
                            <span class="usc-category-icon">⏱️</span>
                            <span>Time</span>
                        </button>


                        <button
                            class="usc-category-btn"
                            data-usc-category="speed"
                        >
                            <span class="usc-category-icon">🚀</span>
                            <span>Speed</span>
                        </button>


                        <button
                            class="usc-category-btn"
                            data-usc-category="pressure"
                        >
                            <span class="usc-category-icon">🌀</span>
                            <span>Pressure</span>
                        </button>


                        <button
                            class="usc-category-btn"
                            data-usc-category="energy"
                        >
                            <span class="usc-category-icon">⚡</span>
                            <span>Energy</span>
                        </button>


                        <button
                            class="usc-category-btn"
                            data-usc-category="power"
                        >
                            <span class="usc-category-icon">🔋</span>
                            <span>Power</span>
                        </button>


                        <button
                            class="usc-category-btn"
                            data-usc-category="electrical"
                        >
                            <span class="usc-category-icon">🔌</span>
                            <span>Electrical</span>
                        </button>


                        <button
                            class="usc-category-btn"
                            data-usc-category="data"
                        >
                            <span class="usc-category-icon">💾</span>
                            <span>Data Storage</span>
                        </button>


                        <button
                            class="usc-category-btn"
                            data-usc-category="angle"
                        >
                            <span class="usc-category-icon">📐</span>
                            <span>Angle</span>
                        </button>


                        <button
                            class="usc-category-btn"
                            data-usc-category="frequency"
                        >
                            <span class="usc-category-icon">〰️</span>
                            <span>Frequency</span>
                        </button>


                        <button
                            class="usc-category-btn"
                            data-usc-category="sound"
                        >
                            <span class="usc-category-icon">🔊</span>
                            <span>Sound</span>
                        </button>


                        <button
                            class="usc-category-btn"
                            data-usc-category="chemistry"
                        >
                            <span class="usc-category-icon">⚗️</span>
                            <span>Chemistry</span>
                        </button>

                    </div>

                </aside>


                <!-- =====================================
                     WORKSPACE
                ====================================== -->

                <main
                    id="uscWorkspace"
                    class="usc-workspace"
                >
                </main>

            </div>

        </section>

    `;


    /*==================================================
     * CATEGORY BUTTONS
     *==================================================*/

    const categoryButtons =
        document.querySelectorAll(
            ".usc-category-btn"
        );


    categoryButtons.forEach(button => {

        button.addEventListener(
            "click",
            function () {

                categoryButtons.forEach(btn => {

                    btn.classList.remove(
                        "active"
                    );

                });


                this.classList.add("active");


                loadUSCCategory(
                    this.dataset.uscCategory
                );

            }
        );

    });


    /*==================================================
     * DEFAULT CATEGORY
     *==================================================*/

    loadUSCCategory("mass");


    console.log(
        "✅ Unit & Scientific Converter loaded"
    );
}


/*==================================================
 * CATEGORY DATABASE
 *==================================================*/

const uscCategories = {


    /*==================================================
     * MASS
     *==================================================*/

    mass: {

        icon: "⚖️",

        title: "Mass Converter",

        description:
            "Convert mass measurements between common scientific units.",

        units: [

            ["nanogram", "Nanogram (ng)"],
            ["microgram", "Microgram (µg)"],
            ["milligram", "Milligram (mg)"],
            ["gram", "Gram (g)"],
            ["kilogram", "Kilogram (kg)"],
            ["metric_ton", "Metric Ton (t)"],
            ["ounce", "Ounce (oz)"],
            ["pound", "Pound (lb)"],
            ["stone", "Stone (st)"]

        ]

    },


    /*==================================================
     * VOLUME
     *==================================================*/

    volume: {

        icon: "🧊",

        title: "Volume Converter",

        description:
            "Convert liquid and three-dimensional volume measurements.",

        units: [

            ["milliliter", "Milliliter (mL)"],
            ["liter", "Liter (L)"],
            ["cubic_centimeter", "Cubic Centimeter (cm³)"],
            ["cubic_meter", "Cubic Meter (m³)"],
            ["cubic_inch", "Cubic Inch (in³)"],
            ["cubic_foot", "Cubic Foot (ft³)"],
            ["gallon", "US Gallon (gal)"],
            ["quart", "US Quart (qt)"],
            ["pint", "US Pint (pt)"],
            ["cup", "US Cup"]

        ]

    },


    /*==================================================
     * TEMPERATURE
     *==================================================*/

    temperature: {

        icon: "🌡️",

        title: "Temperature Converter",

        description:
            "Convert Celsius, Fahrenheit and Kelvin.",

        units: [

            ["celsius", "Celsius (°C)"],
            ["fahrenheit", "Fahrenheit (°F)"],
            ["kelvin", "Kelvin (K)"]

        ]

    },


    /*==================================================
     * AREA
     *==================================================*/

    area: {

        icon: "▧",

        title: "Area Converter",

        description:
            "Convert surface area measurements.",

        units: [

            ["square_millimeter", "Square Millimeter (mm²)"],
            ["square_centimeter", "Square Centimeter (cm²)"],
            ["square_meter", "Square Meter (m²)"],
            ["square_kilometer", "Square Kilometer (km²)"],
            ["square_inch", "Square Inch (in²)"],
            ["square_foot", "Square Foot (ft²)"],
            ["square_yard", "Square Yard (yd²)"],
            ["acre", "Acre (ac)"],
            ["hectare", "Hectare (ha)"]

        ]

    },


    /*==================================================
     * TIME
     *==================================================*/

    time: {

        icon: "⏱️",

        title: "Time Converter",

        description:
            "Convert durations and time intervals.",

        units: [

            ["millisecond", "Millisecond (ms)"],
            ["second", "Second (s)"],
            ["minute", "Minute (min)"],
            ["hour", "Hour (h)"],
            ["day", "Day"],
            ["week", "Week"],
            ["month", "Month (30.44 days)"],
            ["year", "Year (365.25 days)"]

        ]

    },


    /*==================================================
     * SPEED
     *==================================================*/

    speed: {

        icon: "🚀",

        title: "Speed Converter",

        description:
            "Convert velocity and speed measurements.",

        units: [

            ["meter_second", "Meter per Second (m/s)"],
            ["kilometer_hour", "Kilometer per Hour (km/h)"],
            ["mile_hour", "Mile per Hour (mph)"],
            ["foot_second", "Foot per Second (ft/s)"],
            ["knot", "Knot (kn)"]

        ]

    },


    /*==================================================
     * PRESSURE
     *==================================================*/

    pressure: {

        icon: "🌀",

        title: "Pressure Converter",

        description:
            "Convert atmospheric and mechanical pressure.",

        units: [

            ["pascal", "Pascal (Pa)"],
            ["kilopascal", "Kilopascal (kPa)"],
            ["megapascal", "Megapascal (MPa)"],
            ["bar", "Bar"],
            ["psi", "Pounds per Square Inch (psi)"],
            ["atmosphere", "Atmosphere (atm)"],
            ["mmhg", "Millimeter Mercury (mmHg)"]

        ]

    },


    /*==================================================
     * ENERGY
     *==================================================*/

    energy: {

        icon: "⚡",

        title: "Energy Converter",

        description:
            "Convert energy and work measurements.",

        units: [

            ["joule", "Joule (J)"],
            ["kilojoule", "Kilojoule (kJ)"],
            ["megajoule", "Megajoule (MJ)"],
            ["calorie", "Calorie (cal)"],
            ["kilocalorie", "Kilocalorie (kcal)"],
            ["watt_hour", "Watt-hour (Wh)"],
            ["kilowatt_hour", "Kilowatt-hour (kWh)"],
            ["electronvolt", "Electronvolt (eV)"]

        ]

    },


    /*==================================================
     * POWER
     *==================================================*/

    power: {

        icon: "🔋",

        title: "Power Converter",

        description:
            "Convert rates of energy and mechanical power.",

        units: [

            ["watt", "Watt (W)"],
            ["kilowatt", "Kilowatt (kW)"],
            ["megawatt", "Megawatt (MW)"],
            ["horsepower", "Horsepower (hp)"],
            ["btu_hour", "BTU per Hour"]

        ]

    },


    /*==================================================
     * ELECTRICAL
     *==================================================*/

    electrical: {

        icon: "🔌",

        title: "Electrical Converter",

        description:
            "Convert common electrical engineering units.",

        units: [

            ["volt", "Volt (V)"],
            ["millivolt", "Millivolt (mV)"],
            ["ampere", "Ampere (A)"],
            ["milliampere", "Milliampere (mA)"],
            ["ohm", "Ohm (Ω)"],
            ["kilohm", "Kilohm (kΩ)"],
            ["farad", "Farad (F)"],
            ["microfarad", "Microfarad (µF)"],
            ["henry", "Henry (H)"],
            ["millihenry", "Millihenry (mH)"]

        ]

    },


    /*==================================================
     * DATA STORAGE
     *==================================================*/

    data: {

        icon: "💾",

        title: "Data Storage Converter",

        description:
            "Convert digital storage units using binary-based measurements.",

        units: [

            ["bit", "Bit (bit)"],
            ["byte", "Byte (B)"],
            ["kilobit", "Kilobit (Kb)"],
            ["kilobyte", "Kilobyte (KB)"],
            ["megabit", "Megabit (Mb)"],
            ["megabyte", "Megabyte (MB)"],
            ["gigabit", "Gigabit (Gb)"],
            ["gigabyte", "Gigabyte (GB)"],
            ["terabit", "Terabit (Tb)"],
            ["terabyte", "Terabyte (TB)"],
            ["petabyte", "Petabyte (PB)"]

        ]

    },


    /*==================================================
     * ANGLE
     *==================================================*/

    angle: {

        icon: "📐",

        title: "Angle Converter",

        description:
            "Convert angular measurements.",

        units: [

            ["degree", "Degree (°)"],
            ["radian", "Radian (rad)"],
            ["gradian", "Gradian (gon)"],
            ["arcminute", "Arcminute (′)"],
            ["arcsecond", "Arcsecond (″)"]

        ]

    },


    /*==================================================
     * FREQUENCY
     *==================================================*/

    frequency: {

        icon: "〰️",

        title: "Frequency Converter",

        description:
            "Convert frequency measurements.",

        units: [

            ["hertz", "Hertz (Hz)"],
            ["kilohertz", "Kilohertz (kHz)"],
            ["megahertz", "Megahertz (MHz)"],
            ["gigahertz", "Gigahertz (GHz)"],
            ["terahertz", "Terahertz (THz)"]

        ]

    },


    /*==================================================
     * SOUND
     *==================================================*/

    sound: {

        icon: "🔊",

        title: "Sound Converter",

        description:
            "Convert sound-related frequency and acoustic pressure units.",

        units: [

            ["pascal", "Sound Pressure (Pa)"],
            ["kilopascal", "Sound Pressure (kPa)"],
            ["microbar", "Microbar (µbar)"],
            ["millibar", "Millibar (mbar)"]

        ]

    },


    /*==================================================
     * CHEMISTRY
     *==================================================*/

    chemistry: {

        icon: "⚗️",

        title: "Chemistry Converter",

        description:
            "Convert common chemistry concentration and amount units.",

        units: [

            ["mole", "Mole (mol)"],
            ["millimole", "Millimole (mmol)"],
            ["micromole", "Micromole (µmol)"],
            ["kilomole", "Kilomole (kmol)"],
            ["molar", "Molar Concentration (mol/L)"],
            ["millimolar", "Millimolar (mmol/L)"],
            ["micromolar", "Micromolar (µmol/L)"]

        ]

    }

};


/*==================================================
 * LOAD CATEGORY
 *==================================================*/

function loadUSCCategory(category) {

    const workspace =
        document.getElementById(
            "uscWorkspace"
        );


    if (!workspace) {

        console.error(
            "❌ USC workspace not found"
        );

        return;
    }


    const data =
        uscCategories[category];


    if (!data) {

        workspace.innerHTML = `

            <div class="usc-error-panel">

                ⚠️ UNKNOWN CONVERSION MODULE

            </div>

        `;

        return;
    }


    workspace.innerHTML = `

        <section class="usc-converter-card">


            <!-- =====================================
                 CATEGORY HEADER
            ====================================== -->

            <div class="usc-category-header">

                <div class="usc-category-symbol">
                    ${data.icon}
                </div>

                <div class="usc-category-info">

                    <span class="usc-category-label">
                        SCIENTIFIC CONVERSION MODULE
                    </span>

                    <h2>
                        ${data.title}
                    </h2>

                    <p>
                        ${data.description}
                    </p>

                </div>

            </div>


            <!-- =====================================
                 CONVERTER GRID
            ====================================== -->

            <div class="usc-converter-grid">


                <!-- FROM -->

                <div class="usc-value-panel">

                    <span class="usc-panel-label">
                        FROM
                    </span>

                    <div class="usc-input-wrapper">

                        <input
                            type="number"
                            id="uscFromValue"
                            class="usc-value-input"
                            value="1"
                            step="any"
                            placeholder="Enter value"
                        >

                    </div>


                    <select
                        id="uscFromUnit"
                        class="usc-unit-select"
                    >

                        ${data.units.map(unit => `

                            <option value="${unit[0]}">
                                ${unit[1]}
                            </option>

                        `).join("")}

                    </select>

                </div>


                <!-- SWAP -->

                <div class="usc-swap-panel">

                    <button
                        id="uscSwapButton"
                        class="usc-swap-button"
                        title="Swap Units"
                    >
                        ⇄
                    </button>

                </div>


                <!-- TO -->

                <div class="usc-value-panel">

                    <span class="usc-panel-label">
                        TO
                    </span>

                    <div class="usc-input-wrapper">

                        <input
                            type="text"
                            id="uscToValue"
                            class="usc-value-input usc-result-input"
                            readonly
                            placeholder="Result"
                        >

                    </div>


                    <select
                        id="uscToUnit"
                        class="usc-unit-select"
                    >

                        ${data.units.map(unit => `

                            <option value="${unit[0]}">
                                ${unit[1]}
                            </option>

                        `).join("")}

                    </select>

                </div>

            </div>


            <!-- =====================================
                 RESULT
            ====================================== -->

            <div
                id="uscResultPanel"
                class="usc-result-panel"
            >

                <span class="usc-result-label">
                    CONVERSION RESULT
                </span>

                <strong id="uscResultValue">
                    1
                </strong>

                <span
                    id="uscResultUnit"
                    class="usc-result-unit"
                >
                    ${data.units[0][1]}
                </span>

            </div>


            <!-- =====================================
                 ACTION
            ====================================== -->

            <button
                id="uscConvertButton"
                class="usc-convert-button"
            >

                <span>
                    ⚡
                </span>

                CONVERT

            </button>


            <!-- =====================================
                 STATUS
            ====================================== -->

            <div class="usc-system-panel">

                <div>

                    <span class="usc-system-label">
                        ENGINE STATUS
                    </span>

                    <strong>
                        ● READY
                    </strong>

                </div>


                <div>

                    <span class="usc-system-label">
                        MODULE
                    </span>

                    <strong>
                        ${category.toUpperCase()}
                    </strong>

                </div>


                <div>

                    <span class="usc-system-label">
                        PRECISION
                    </span>

                    <strong>
                        HIGH
                    </strong>

                </div>

            </div>

        </section>

    `;


    initializeUSCConverter(
        category,
        data
    );
}


/*==================================================
 * INITIALIZE CONVERTER
 *==================================================*/

function initializeUSCConverter(
    category,
    data
) {

    const fromValue =
        document.getElementById(
            "uscFromValue"
        );


    const toValue =
        document.getElementById(
            "uscToValue"
        );


    const fromUnit =
        document.getElementById(
            "uscFromUnit"
        );


    const toUnit =
        document.getElementById(
            "uscToUnit"
        );


    const convertButton =
        document.getElementById(
            "uscConvertButton"
        );


    const swapButton =
        document.getElementById(
            "uscSwapButton"
        );


    const resultValue =
        document.getElementById(
            "uscResultValue"
        );


    const resultUnit =
        document.getElementById(
            "uscResultUnit"
        );


    /*========================================
     * CONVERT
     *========================================*/

    function convert() {

        const value =
            Number(fromValue.value);


        if (!Number.isFinite(value)) {

            toValue.value = "";

            resultValue.textContent = "—";

            return;
        }


        const converted =
            convertUSCValue(
                category,
                value,
                fromUnit.value,
                toUnit.value
            );


        const formatted =
            formatUSCResult(
                converted
            );


        toValue.value =
            formatted;


        resultValue.textContent =
            formatted;


        const selectedOption =
            toUnit.options[
                toUnit.selectedIndex
            ];


        resultUnit.textContent =
            selectedOption
                ? selectedOption.text
                : "";

    }


    /*========================================
     * EVENTS
     *========================================*/

    convertButton.addEventListener(
        "click",
        convert
    );


    fromValue.addEventListener(
        "input",
        convert
    );


    fromUnit.addEventListener(
        "change",
        convert
    );


    toUnit.addEventListener(
        "change",
        convert
    );


    swapButton.addEventListener(
        "click",
        function () {

            const oldFrom =
                fromUnit.value;


            fromUnit.value =
                toUnit.value;


            toUnit.value =
                oldFrom;


            convert();

        }
    );


    convert();
}


/*==================================================
 * CONVERSION ENGINE
 *==================================================*/

function convertUSCValue(
    category,
    value,
    from,
    to
) {

    if (from === to) {
        return value;
    }


    /*========================================
     * TEMPERATURE
     *========================================*/

    if (category === "temperature") {

        let celsius;


        if (from === "celsius") {
            celsius = value;
        }

        else if (from === "fahrenheit") {
            celsius =
                (value - 32) * 5 / 9;
        }

        else if (from === "kelvin") {
            celsius =
                value - 273.15;
        }


        if (to === "celsius") {
            return celsius;
        }

        if (to === "fahrenheit") {
            return (
                celsius * 9 / 5
            ) + 32;
        }

        if (to === "kelvin") {
            return (
                celsius + 273.15
            );
        }

    }


    /*========================================
     * DATA STORAGE
     *
     * Uses binary multiples:
     * 1 KB = 1024 B
     *========================================*/

    if (category === "data") {

        const factors = {

            bit: 1 / 8,

            byte: 1,

            kilobit:
                1024 / 8,

            kilobyte:
                1024,

            megabit:
                1024 ** 2 / 8,

            megabyte:
                1024 ** 2,

            gigabit:
                1024 ** 3 / 8,

            gigabyte:
                1024 ** 3,

            terabit:
                1024 ** 4 / 8,

            terabyte:
                1024 ** 4,

            petabyte:
                1024 ** 5

        };


        const base =
            value * factors[from];


        return (
            base / factors[to]
        );

    }


    /*========================================
     * STANDARD FACTORS
     *========================================*/

    const factors = {


        /* MASS */

        mass: {

            nanogram: 1e-12,

            microgram: 1e-9,

            milligram: 1e-6,

            gram: 1e-3,

            kilogram: 1,

            metric_ton: 1000,

            ounce:
                0.028349523125,

            pound:
                0.45359237,

            stone:
                6.35029318

        },


        /* VOLUME */

        volume: {

            milliliter: 0.001,

            liter: 1,

            cubic_centimeter: 0.001,

            cubic_meter: 1000,

            cubic_inch:
                0.016387064,

            cubic_foot:
                28.316846592,

            gallon:
                3.785411784,

            quart:
                0.946352946,

            pint:
                0.473176473,

            cup:
                0.2365882365

        },


        /* AREA */

        area: {

            square_millimeter:
                0.000001,

            square_centimeter:
                0.0001,

            square_meter:
                1,

            square_kilometer:
                1000000,

            square_inch:
                0.00064516,

            square_foot:
                0.09290304,

            square_yard:
                0.83612736,

            acre:
                4046.8564224,

            hectare:
                10000

        },


        /* TIME */

        time: {

            millisecond:
                0.001,

            second:
                1,

            minute:
                60,

            hour:
                3600,

            day:
                86400,

            week:
                604800,

            month:
                2629800,

            year:
                31557600

        },


        /* SPEED */

        speed: {

            meter_second:
                1,

            kilometer_hour:
                0.2777777778,

            mile_hour:
                0.44704,

            foot_second:
                0.3048,

            knot:
                0.5144444444

        },


        /* PRESSURE */

        pressure: {

            pascal:
                1,

            kilopascal:
                1000,

            megapascal:
                1000000,

            bar:
                100000,

            psi:
                6894.757293,

            atmosphere:
                101325,

            mmhg:
                133.3223874

        },


        /* ENERGY */

        energy: {

            joule:
                1,

            kilojoule:
                1000,

            megajoule:
                1000000,

            calorie:
                4.184,

            kilocalorie:
                4184,

            watt_hour:
                3600,

            kilowatt_hour:
                3600000,

            electronvolt:
                1.602176634e-19

        },


        /* POWER */

        power: {

            watt:
                1,

            kilowatt:
                1000,

            megawatt:
                1000000,

            horsepower:
                745.699872,

            btu_hour:
                0.29307107

        },


        /* ELECTRICAL */

        electrical: {

            volt:
                1,

            millivolt:
                0.001,

            ampere:
                1,

            milliampere:
                0.001,

            ohm:
                1,

            kilohm:
                1000,

            farad:
                1,

            microfarad:
                0.000001,

            henry:
                1,

            millihenry:
                0.001

        },


        /* ANGLE */

        angle: {

            degree:
                1,

            radian:
                180 / Math.PI,

            gradian:
                0.9,

            arcminute:
                1 / 60,

            arcsecond:
                1 / 3600

        },


        /* FREQUENCY */

        frequency: {

            hertz:
                1,

            kilohertz:
                1000,

            megahertz:
                1000000,

            gigahertz:
                1000000000,

            terahertz:
                1000000000000

        },


        /* SOUND PRESSURE */

        sound: {

            pascal:
                1,

            kilopascal:
                1000,

            microbar:
                0.1,

            millibar:
                100

        },


        /* CHEMISTRY */

        chemistry: {

            mole:
                1,

            millimole:
                0.001,

            micromole:
                0.000001,

            kilomole:
                1000,

            molar:
                1,

            millimolar:
                0.001,

            micromolar:
                0.000001

        }

    };


    const categoryFactors =
        factors[category];


    if (!categoryFactors) {
        return NaN;
    }


    const baseValue =
        value *
        categoryFactors[from];


    return (
        baseValue /
        categoryFactors[to]
    );

}


/*==================================================
 * FORMAT RESULT
 *==================================================*/

function formatUSCResult(value) {

    if (!Number.isFinite(value)) {
        return "Invalid";
    }


    if (
        Math.abs(value) >= 1e12 ||
        (
            Math.abs(value) > 0 &&
            Math.abs(value) < 1e-8
        )
    ) {

        return value.toExponential(8);

    }


    return Number(
        value.toFixed(10)
    ).toLocaleString(
        "en-US"
    );

}


/*==================================================
 * GLOBAL REGISTRATION
 *==================================================*/

window.loadUnitScientificConverter =
    loadUnitScientificConverter;

window.loadUSCCategory =
    loadUSCCategory;


console.log(
    "✅ Unit & Scientific Converter registered"
);