console.log("✅ unit-converter.js loaded");

/*==================================================
 * UNIT CONVERTER
 * FUTURISTIC AQUA INTERFACE
 *==================================================*/

function loadUnitConverter(canvas) {

    console.log("📐 Loading Unit Converter...");

    if (!canvas) {
        console.error("❌ Canvas not found");
        return;
    }

    canvas.innerHTML = `

        <div class="unit-converter-container">

            <!-- =====================================
                 HEADER
            ====================================== -->

            <div class="unit-converter-header">

                <div>

                    <span class="unit-converter-badge">
                        SYSTEM CORE • CONVERSION ENGINE
                    </span>

                    <h1>
                        📐 UNIT CONVERTER
                    </h1>

                    <p>
                        Convert measurements between different
                        units quickly and accurately.
                    </p>

                </div>

            </div>


            <!-- =====================================
                 MAIN LAYOUT
            ====================================== -->

            <div class="unit-converter-layout">


                <!-- =================================
                     CATEGORY MENU
                ================================== -->

                <aside class="unit-converter-menu">

                    <div class="unit-menu-header">

                        <span>
                            CONVERSION MODULES
                        </span>

                        <small>
                            11 MODULES
                        </small>

                    </div>


                    <button
                        class="unit-nav active"
                        data-unit-category="length">

                        <span>📏</span>
                        <span>Length</span>

                    </button>


                    <button
                        class="unit-nav"
                        data-unit-category="area">

                        <span>▧</span>
                        <span>Area</span>

                    </button>


                    <button
                        class="unit-nav"
                        data-unit-category="volume">

                        <span>🧊</span>
                        <span>Volume</span>

                    </button>


                    <button
                        class="unit-nav"
                        data-unit-category="mass">

                        <span>⚖️</span>
                        <span>Mass</span>

                    </button>


                    <button
                        class="unit-nav"
                        data-unit-category="temperature">

                        <span>🌡️</span>
                        <span>Temperature</span>

                    </button>


                    <button
                        class="unit-nav"
                        data-unit-category="time">

                        <span>⏱️</span>
                        <span>Time</span>

                    </button>


                    <button
                        class="unit-nav"
                        data-unit-category="speed">

                        <span>🚀</span>
                        <span>Speed</span>

                    </button>


                    <button
                        class="unit-nav"
                        data-unit-category="pressure">

                        <span>🌀</span>
                        <span>Pressure</span>

                    </button>


                    <button
                        class="unit-nav"
                        data-unit-category="energy">

                        <span>⚡</span>
                        <span>Energy</span>

                    </button>


                    <button
                        class="unit-nav"
                        data-unit-category="power">

                        <span>🔋</span>
                        <span>Power</span>

                    </button>


                    <button
                        class="unit-nav"
                        data-unit-category="angle">

                        <span>📐</span>
                        <span>Angle</span>

                    </button>

                </aside>


                <!-- =================================
                     CONVERTER AREA
                ================================== -->

                <main
                    id="unitConverterWorkspace"
                    class="unit-converter-workspace">

                </main>

            </div>

        </div>

    `;


    /*=========================================
     * CATEGORY NAVIGATION
     *=========================================*/

    const unitButtons =
        document.querySelectorAll(
            ".unit-nav"
        );


    unitButtons.forEach(button => {

        button.addEventListener(
            "click",
            function () {

                unitButtons.forEach(btn => {

                    btn.classList.remove(
                        "active"
                    );

                });


                this.classList.add(
                    "active"
                );


                loadUnitCategory(
                    this.dataset.unitCategory
                );

            }
        );

    });


    /*=========================================
     * DEFAULT
     *=========================================*/

    loadUnitCategory("length");


    console.log(
        "✅ Unit Converter loaded successfully"
    );

}


/*==================================================
 * LOAD CATEGORY
 *==================================================*/

function loadUnitCategory(category) {

    const workspace =
        document.getElementById(
            "unitConverterWorkspace"
        );


    if (!workspace) {

        console.error(
            "❌ Unit converter workspace not found"
        );

        return;
    }


    const categories = {

        length: {

            icon: "📏",
            title: "Length Converter",
            description:
                "Convert distance and length measurements.",

            units: [
                ["meter", "Meter (m)"],
                ["kilometer", "Kilometer (km)"],
                ["centimeter", "Centimeter (cm)"],
                ["millimeter", "Millimeter (mm)"],
                ["mile", "Mile (mi)"],
                ["yard", "Yard (yd)"],
                ["foot", "Foot (ft)"],
                ["inch", "Inch (in)"]
            ]

        },


        area: {

            icon: "▧",
            title: "Area Converter",
            description:
                "Convert different units of area.",

            units: [
                ["square_meter", "Square Meter (m²)"],
                ["square_kilometer", "Square Kilometer (km²)"],
                ["square_centimeter", "Square Centimeter (cm²)"],
                ["square_mile", "Square Mile (mi²)"],
                ["square_yard", "Square Yard (yd²)"],
                ["square_foot", "Square Foot (ft²)"],
                ["hectare", "Hectare (ha)"],
                ["acre", "Acre (ac)"]
            ]

        },


        volume: {

            icon: "🧊",
            title: "Volume Converter",
            description:
                "Convert liquid and solid volume measurements.",

            units: [
                ["liter", "Liter (L)"],
                ["milliliter", "Milliliter (mL)"],
                ["cubic_meter", "Cubic Meter (m³)"],
                ["cubic_centimeter", "Cubic Centimeter (cm³)"],
                ["gallon", "Gallon (gal)"],
                ["quart", "Quart (qt)"],
                ["pint", "Pint (pt)"],
                ["cup", "Cup"]
            ]

        },


        mass: {

            icon: "⚖️",
            title: "Mass Converter",
            description:
                "Convert mass and weight measurements.",

            units: [
                ["kilogram", "Kilogram (kg)"],
                ["gram", "Gram (g)"],
                ["milligram", "Milligram (mg)"],
                ["metric_ton", "Metric Ton (t)"],
                ["pound", "Pound (lb)"],
                ["ounce", "Ounce (oz)"],
                ["stone", "Stone (st)"]
            ]

        },


        temperature: {

            icon: "🌡️",
            title: "Temperature Converter",
            description:
                "Convert temperature between Celsius, Fahrenheit, and Kelvin.",

            units: [
                ["celsius", "Celsius (°C)"],
                ["fahrenheit", "Fahrenheit (°F)"],
                ["kelvin", "Kelvin (K)"]
            ]

        },


        time: {

            icon: "⏱️",
            title: "Time Converter",
            description:
                "Convert units of time.",

            units: [
                ["second", "Second (s)"],
                ["minute", "Minute (min)"],
                ["hour", "Hour (h)"],
                ["day", "Day"],
                ["week", "Week"],
                ["month", "Month"],
                ["year", "Year"]
            ]

        },


        speed: {

            icon: "🚀",
            title: "Speed Converter",
            description:
                "Convert speed and velocity measurements.",

            units: [
                ["meter_second", "Meter per Second (m/s)"],
                ["kilometer_hour", "Kilometer per Hour (km/h)"],
                ["mile_hour", "Mile per Hour (mph)"],
                ["foot_second", "Foot per Second (ft/s)"],
                ["knot", "Knot (kn)"]
            ]

        },


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
                ["mmhg", "Millimeter of Mercury (mmHg)"]
            ]

        },


        energy: {

            icon: "⚡",
            title: "Energy Converter",
            description:
                "Convert energy and work measurements.",

            units: [
                ["joule", "Joule (J)"],
                ["kilojoule", "Kilojoule (kJ)"],
                ["calorie", "Calorie (cal)"],
                ["kilocalorie", "Kilocalorie (kcal)"],
                ["watt_hour", "Watt-hour (Wh)"],
                ["kilowatt_hour", "Kilowatt-hour (kWh)"],
                ["electronvolt", "Electronvolt (eV)"]
            ]

        },


        power: {

            icon: "🔋",
            title: "Power Converter",
            description:
                "Convert power and energy-rate measurements.",

            units: [
                ["watt", "Watt (W)"],
                ["kilowatt", "Kilowatt (kW)"],
                ["megawatt", "Megawatt (MW)"],
                ["horsepower", "Horsepower (hp)"],
                ["btu_hour", "BTU per Hour"]
            ]

        },


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

        }

    };


    const data =
        categories[category];


    if (!data) {

        workspace.innerHTML = `
            <div class="unit-error">
                ⚠️ Unknown conversion category.
            </div>
        `;

        return;
    }


    workspace.innerHTML = `

        <div class="unit-category-card">

            <!-- HEADER -->

            <div class="unit-category-header">

                <div class="unit-category-icon">
                    ${data.icon}
                </div>

                <div>

                    <span class="unit-category-label">
                        UNIT CONVERSION
                    </span>

                    <h2>
                        ${data.title}
                    </h2>

                    <p>
                        ${data.description}
                    </p>

                </div>

            </div>


            <!-- INPUT -->

            <div class="unit-converter-grid">

                <div class="unit-input-panel">

                    <label>
                        FROM
                    </label>

                    <input
                        type="number"
                        id="unitFromValue"
                        class="unit-value-input"
                        placeholder="Enter value"
                        value="1"
                        step="any"
                    >


                    <select
                        id="unitFromSelect"
                        class="unit-select"
                    >

                        ${data.units.map(unit => `
                            <option value="${unit[0]}">
                                ${unit[1]}
                            </option>
                        `).join("")}

                    </select>

                </div>


                <div class="unit-swap-area">

                    <button
                        id="unitSwapButton"
                        class="unit-swap-button"
                        title="Swap units"
                    >
                        ⇄
                    </button>

                </div>


                <div class="unit-input-panel">

                    <label>
                        TO
                    </label>

                    <input
                        type="number"
                        id="unitToValue"
                        class="unit-value-input"
                        placeholder="Result"
                        readonly
                    >


                    <select
                        id="unitToSelect"
                        class="unit-select"
                    >

                        ${data.units.map(unit => `
                            <option value="${unit[0]}">
                                ${unit[1]}
                            </option>
                        `).join("")}

                    </select>

                </div>

            </div>


            <!-- RESULT -->

            <div
                id="unitConversionResult"
                class="unit-conversion-result"
            >

                <span>
                    CONVERSION RESULT
                </span>

                <strong>
                    1
                </strong>

            </div>


            <button
                id="unitCalculateButton"
                class="unit-calculate-button"
            >
                ⚡ CONVERT
            </button>


            <div class="unit-info-panel">

                <span>
                    SYSTEM STATUS
                </span>

                <strong>
                    ● READY
                </strong>

            </div>

        </div>

    `;


    initializeUnitCalculator(
        category,
        data
    );

}


/*==================================================
 * UNIT CALCULATOR
 *==================================================*/

function initializeUnitCalculator(
    category,
    data
) {

    const fromValue =
        document.getElementById(
            "unitFromValue"
        );

    const toValue =
        document.getElementById(
            "unitToValue"
        );

    const fromSelect =
        document.getElementById(
            "unitFromSelect"
        );

    const toSelect =
        document.getElementById(
            "unitToSelect"
        );

    const result =
        document.getElementById(
            "unitConversionResult"
        );

    const calculateButton =
        document.getElementById(
            "unitCalculateButton"
        );

    const swapButton =
        document.getElementById(
            "unitSwapButton"
        );


    function convert() {

        const value =
            Number(fromValue.value);


        if (!Number.isFinite(value)) {

            toValue.value = "";

            result.innerHTML = `
                <span>
                    CONVERSION RESULT
                </span>

                <strong>
                    —
                </strong>
            `;

            return;
        }


        const converted =
            convertUnit(
                category,
                value,
                fromSelect.value,
                toSelect.value
            );


        toValue.value =
            formatUnitResult(converted);


        result.innerHTML = `

            <span>
                CONVERSION RESULT
            </span>

            <strong>
                ${formatUnitResult(converted)}
            </strong>

        `;

    }


    calculateButton.addEventListener(
        "click",
        convert
    );


    fromValue.addEventListener(
        "input",
        convert
    );


    fromSelect.addEventListener(
        "change",
        convert
    );


    toSelect.addEventListener(
        "change",
        convert
    );


    swapButton.addEventListener(
        "click",
        function () {

            const oldFrom =
                fromSelect.value;

            fromSelect.value =
                toSelect.value;

            toSelect.value =
                oldFrom;

            convert();

        }
    );


    convert();

}


/*==================================================
 * CONVERSION ENGINE
 *==================================================*/

function convertUnit(
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
            return celsius * 9 / 5 + 32;
        }

        if (to === "kelvin") {
            return celsius + 273.15;
        }

    }


    /*========================================
     * STANDARD FACTOR CONVERSION
     *========================================*/

    const factors = {

        length: {

            meter: 1,
            kilometer: 1000,
            centimeter: 0.01,
            millimeter: 0.001,
            mile: 1609.344,
            yard: 0.9144,
            foot: 0.3048,
            inch: 0.0254

        },


        area: {

            square_meter: 1,
            square_kilometer: 1000000,
            square_centimeter: 0.0001,
            square_mile: 2589988.110336,
            square_yard: 0.83612736,
            square_foot: 0.09290304,
            hectare: 10000,
            acre: 4046.8564224

        },


        volume: {

            liter: 1,
            milliliter: 0.001,
            cubic_meter: 1000,
            cubic_centimeter: 0.001,
            gallon: 3.785411784,
            quart: 0.946352946,
            pint: 0.473176473,
            cup: 0.2365882365

        },


        mass: {

            kilogram: 1,
            gram: 0.001,
            milligram: 0.000001,
            metric_ton: 1000,
            pound: 0.45359237,
            ounce: 0.028349523125,
            stone: 6.35029318

        },


        time: {

            second: 1,
            minute: 60,
            hour: 3600,
            day: 86400,
            week: 604800,
            month: 2629800,
            year: 31557600

        },


        speed: {

            meter_second: 1,
            kilometer_hour: 0.2777777778,
            mile_hour: 0.44704,
            foot_second: 0.3048,
            knot: 0.5144444444

        },


        pressure: {

            pascal: 1,
            kilopascal: 1000,
            megapascal: 1000000,
            bar: 100000,
            psi: 6894.757293,
            atmosphere: 101325,
            mmhg: 133.3223874

        },


        energy: {

            joule: 1,
            kilojoule: 1000,
            calorie: 4.184,
            kilocalorie: 4184,
            watt_hour: 3600,
            kilowatt_hour: 3600000,
            electronvolt: 1.602176634e-19

        },


        power: {

            watt: 1,
            kilowatt: 1000,
            megawatt: 1000000,
            horsepower: 745.699872,
            btu_hour: 0.29307107

        },


        angle: {

            degree: 1,
            radian: 180 / Math.PI,
            gradian: 0.9,
            arcminute: 1 / 60,
            arcsecond: 1 / 3600

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
 * RESULT FORMAT
 *==================================================*/

function formatUnitResult(value) {

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

window.loadUnitConverter =
    loadUnitConverter;

window.loadUnitCategory =
    loadUnitCategory;


console.log(
    "✅ Unit Converter functions registered"
);