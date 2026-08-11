/*==================================================*
* LEAP YEAR CHECKER
* FUTURISTIC AQUA INTERFACE
*==================================================*/

function loadLeapYearChecker(canvas) {

    if (!canvas) {
        console.error("❌ Canvas not found");
        return;
    }

    canvas.innerHTML = `

        <div class="leapyear-checker-container">

            <!-- HEADER -->
            <div class="leapyear-checker-header">

                <span class="leapyear-checker-badge">
                    SYSTEM CORE • CALENDAR ENGINE
                </span>

                <h1>
                    📅 LEAP YEAR CHECKER
                </h1>

                <p>
                    Determine whether a year is a Leap Year
                    using the Gregorian calendar rules.
                </p>

            </div>


            <!-- MAIN CARD -->
            <div class="leapyear-checker-card">

                <div class="leapyear-input-section">

                    <label
                        for="leapyearInput"
                        class="leapyear-input-label"
                    >
                        ENTER YEAR
                    </label>

                    <input
                        type="number"
                        id="leapyearInput"
                        class="leapyear-input"
                        placeholder="e.g. 2028"
                        min="1"
                        step="1"
                    >

                    <button
                        type="button"
                        id="leapyearCheckButton"
                        class="leapyear-check-button"
                    >
                        ⚡ CHECK YEAR
                    </button>

                </div>


                <!-- RESULT -->
                <div
                    id="leapyearResult"
                    class="leapyear-result"
                >

                    <span class="leapyear-result-label">
                        ANALYSIS RESULT
                    </span>

                    <strong class="leapyear-result-value">
                        —
                    </strong>

                    <p class="leapyear-result-description">
                        Enter a year to begin analysis.
                    </p>

                </div>


                <!-- RULES -->
                <div class="leapyear-rules">

                    <div class="leapyear-rules-header">
                        <span>📘 LEAP YEAR RULES</span>
                    </div>

                    <div class="leapyear-rule">

                        <span class="leapyear-rule-number">
                            01
                        </span>

                        <p>
                            A year divisible by <strong>400</strong>
                            is a Leap Year.
                        </p>

                    </div>

                    <div class="leapyear-rule">

                        <span class="leapyear-rule-number">
                            02
                        </span>

                        <p>
                            A year divisible by <strong>100</strong>
                            but not 400 is <strong>not</strong>
                            a Leap Year.
                        </p>

                    </div>

                    <div class="leapyear-rule">

                        <span class="leapyear-rule-number">
                            03
                        </span>

                        <p>
                            A year divisible by <strong>4</strong>
                            is a Leap Year.
                        </p>

                    </div>

                    <div class="leapyear-rule">

                        <span class="leapyear-rule-number">
                            04
                        </span>

                        <p>
                            Otherwise, the year is
                            <strong>not</strong> a Leap Year.
                        </p>

                    </div>

                </div>


                <!-- STATUS -->
                <div class="leapyear-status">

                    <span>
                        SYSTEM STATUS
                    </span>

                    <strong id="leapyearStatus">
                        ● READY
                    </strong>

                </div>

            </div>

        </div>

    `;


    /*================================================*
    * ELEMENTS
    *================================================*/

    const yearInput =
        document.getElementById(
            "leapyearInput"
        );

    const checkButton =
        document.getElementById(
            "leapyearCheckButton"
        );

    const result =
        document.getElementById(
            "leapyearResult"
        );

    const status =
        document.getElementById(
            "leapyearStatus"
        );


    /*================================================*
    * CHECK LEAP YEAR
    *================================================*/

    function checkLeapYear() {

        const year =
            Number(yearInput.value);


        if (
            !Number.isInteger(year) ||
            year < 1
        ) {

            result.innerHTML = `

                <span class="leapyear-result-label">
                    ANALYSIS RESULT
                </span>

                <strong class="leapyear-result-value">
                    ⚠ INVALID YEAR
                </strong>

                <p class="leapyear-result-description">
                    Please enter a valid positive year.
                </p>

            `;

            result.classList.remove(
                "leapyear-valid",
                "leapyear-invalid"
            );

            result.classList.add(
                "leapyear-warning"
            );

            status.textContent =
                "● INVALID INPUT";

            return;
        }


        const divisibleBy400 =
            year % 400 === 0;

        const divisibleBy100 =
            year % 100 === 0;

        const divisibleBy4 =
            year % 4 === 0;


        const isLeapYear =
            divisibleBy400 ||
            (
                divisibleBy4 &&
                !divisibleBy100
            );


        /*========================================
        * LEAP YEAR
        *========================================*/

        if (isLeapYear) {

            let reason;

            if (divisibleBy400) {

                reason =
                    `${year} is divisible by 400.`;

            } else {

                reason =
                    `${year} is divisible by 4 but not by 100.`;

            }


            result.innerHTML = `

                <span class="leapyear-result-label">
                    ANALYSIS RESULT
                </span>

                <strong class="leapyear-result-value">
                    ✓ LEAP YEAR
                </strong>

                <p class="leapyear-result-description">
                    ${reason}
                </p>

                <div class="leapyear-extra-info">

                    <span>
                        DAYS IN YEAR
                    </span>

                    <strong>
                        366
                    </strong>

                </div>

            `;

            result.classList.remove(
                "leapyear-invalid",
                "leapyear-warning"
            );

            result.classList.add(
                "leapyear-valid"
            );

            status.textContent =
                "● LEAP YEAR DETECTED";

        }


        /*========================================
        * NOT LEAP YEAR
        *========================================*/

        else {

            let reason;

            if (divisibleBy100) {

                reason =
                    `${year} is divisible by 100 but not by 400.`;

            } else {

                reason =
                    `${year} is not divisible by 4.`;

            }


            result.innerHTML = `

                <span class="leapyear-result-label">
                    ANALYSIS RESULT
                </span>

                <strong class="leapyear-result-value">
                    ✕ NOT A LEAP YEAR
                </strong>

                <p class="leapyear-result-description">
                    ${reason}
                </p>

                <div class="leapyear-extra-info">

                    <span>
                        DAYS IN YEAR
                    </span>

                    <strong>
                        365
                    </strong>

                </div>

            `;

            result.classList.remove(
                "leapyear-valid",
                "leapyear-warning"
            );

            result.classList.add(
                "leapyear-invalid"
            );

            status.textContent =
                "● NORMAL YEAR";

        }

    }


    /*================================================*
    * EVENTS
    *================================================*/

    checkButton.addEventListener(
        "click",
        checkLeapYear
    );


    yearInput.addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Enter") {

                checkLeapYear();

            }

        }
    );


    /*================================================*
    * AUTO CHECK
    *================================================*/

    yearInput.addEventListener(
        "input",
        function() {

            if (yearInput.value !== "") {

                checkLeapYear();

            }

        }
    );


    console.log(
        "✅ Leap Year Checker loaded successfully"
    );

}


/*==================================================*
* GLOBAL REGISTRATION
*==================================================*/

window.loadLeapYearChecker =
    loadLeapYearChecker;