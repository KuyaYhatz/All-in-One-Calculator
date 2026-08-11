console.log("✅ salary-payroll.js loaded");

/*==================================================*
 * SALARY & PAYROLL CALCULATOR
 * FUTURISTIC AQUA PAYROLL SYSTEM
 *
 * UNIQUE PREFIX:
 * payroll-
 *
 * Supported:
 * 2026 - 2030
 *==================================================*/


/*==================================================*
 * PAYROLL RATE PROFILES
 *
 * IMPORTANT:
 * 2026 = latest known baseline
 *
 * 2027-2030 are configured as editable profiles.
 * Update these values when official issuances change.
 *==================================================*/

const PAYROLL_RATE_PROFILES = {

    2026: {

        status: "CURRENT BASELINE",

        sssRate: 0.05,
        sssMaxMSC: 35000,

        philhealthRate: 0.05,
        philhealthMinBase: 10000,
        philhealthMaxBase: 100000,

        pagibigLowThreshold: 1500,
        pagibigLowEmployeeRate: 0.01,
        pagibigEmployeeRate: 0.02,
        pagibigMaxFundSalary: 10000,

        nightDiffRate: 0.10,

        ordinaryOTRate: 1.25,
        restDayOTRate: 1.30,

        regularHolidayRate: 2.00,
        specialHolidayRate: 1.30,

        thirteenthMonthTaxFree: 90000

    },


    2027: {

        status: "PROJECTED / UPDATE WHEN OFFICIAL",

        sssRate: 0.05,
        sssMaxMSC: 35000,

        philhealthRate: 0.05,
        philhealthMinBase: 10000,
        philhealthMaxBase: 100000,

        pagibigLowThreshold: 1500,
        pagibigLowEmployeeRate: 0.01,
        pagibigEmployeeRate: 0.02,
        pagibigMaxFundSalary: 10000,

        nightDiffRate: 0.10,

        ordinaryOTRate: 1.25,
        restDayOTRate: 1.30,

        regularHolidayRate: 2.00,
        specialHolidayRate: 1.30,

        thirteenthMonthTaxFree: 90000

    },


    2028: {

        status: "PROJECTED / UPDATE WHEN OFFICIAL",

        sssRate: 0.05,
        sssMaxMSC: 35000,

        philhealthRate: 0.05,
        philhealthMinBase: 10000,
        philhealthMaxBase: 100000,

        pagibigLowThreshold: 1500,
        pagibigLowEmployeeRate: 0.01,
        pagibigEmployeeRate: 0.02,
        pagibigMaxFundSalary: 10000,

        nightDiffRate: 0.10,

        ordinaryOTRate: 1.25,
        restDayOTRate: 1.30,

        regularHolidayRate: 2.00,
        specialHolidayRate: 1.30,

        thirteenthMonthTaxFree: 90000

    },


    2029: {

        status: "PROJECTED / UPDATE WHEN OFFICIAL",

        sssRate: 0.05,
        sssMaxMSC: 35000,

        philhealthRate: 0.05,
        philhealthMinBase: 10000,
        philhealthMaxBase: 100000,

        pagibigLowThreshold: 1500,
        pagibigLowEmployeeRate: 0.01,
        pagibigEmployeeRate: 0.02,
        pagibigMaxFundSalary: 10000,

        nightDiffRate: 0.10,

        ordinaryOTRate: 1.25,
        restDayOTRate: 1.30,

        regularHolidayRate: 2.00,
        specialHolidayRate: 1.30,

        thirteenthMonthTaxFree: 90000

    },


    2030: {

        status: "PROJECTED / UPDATE WHEN OFFICIAL",

        sssRate: 0.05,
        sssMaxMSC: 35000,

        philhealthRate: 0.05,
        philhealthMinBase: 10000,
        philhealthMaxBase: 100000,

        pagibigLowThreshold: 1500,
        pagibigLowEmployeeRate: 0.01,
        pagibigEmployeeRate: 0.02,
        pagibigMaxFundSalary: 10000,

        nightDiffRate: 0.10,

        ordinaryOTRate: 1.25,
        restDayOTRate: 1.30,

        regularHolidayRate: 2.00,
        specialHolidayRate: 1.30,

        thirteenthMonthTaxFree: 90000

    }

};


/*==================================================*
 * LOAD MAIN PAYROLL PAGE
 *==================================================*/

function loadSalaryPayroll(canvas) {

    console.log("💼 Loading Salary & Payroll...");

    if (!canvas) {

        canvas =
            document.getElementById("canvas");

    }

    if (!canvas) {

        console.error(
            "❌ Payroll canvas not found"
        );

        return;

    }


    canvas.innerHTML = `

        <div class="payroll-container">

            <!-- HEADER -->

            <div class="payroll-title">

                <div>

                    <span class="payroll-badge">
                        PAYROLL SYSTEM
                    </span>

                    <h1>
                        💼 SALARY & PAYROLL
                    </h1>

                    <p>
                        Calculate salary, deductions,
                        government contributions,
                        overtime, taxes and employee pay.
                    </p>

                </div>


                <div class="payroll-year-box">

                    <label>
                        COMPUTATION YEAR
                    </label>

                    <select
                        id="payrollYear"
                        onchange="payrollYearChanged()"
                    >

                        <option value="2026">
                            2026
                        </option>

                        <option value="2027">
                            2027
                        </option>

                        <option value="2028">
                            2028
                        </option>

                        <option value="2029">
                            2029
                        </option>

                        <option value="2030">
                            2030
                        </option>

                    </select>

                    <small id="payrollYearStatus">
                        CURRENT BASELINE
                    </small>

                </div>

            </div>


            <!-- MAIN LAYOUT -->

            <div class="payroll-layout">


                <!-- LEFT MENU -->

                <aside class="payroll-menu">

                    <div class="payroll-menu-header">

                        <span>
                            PAYROLL TOOLS
                        </span>

                        <small>
                            17 MODULES
                        </small>

                    </div>


                    <button
                        class="payroll-nav active"
                        data-payroll="salary"
                        onclick="loadPayrollCalculator('salary')"
                    >
                        💰
                        <span>Salary Calculator</span>
                    </button>


                    <button
                        class="payroll-nav"
                        data-payroll="payslip"
                        onclick="loadPayrollCalculator('payslip')"
                    >
                        🧾
                        <span>Payslip Calculator</span>
                    </button>


                    <button
                        class="payroll-nav"
                        data-payroll="sss"
                        onclick="loadPayrollCalculator('sss')"
                    >
                        🛡️
                        <span>SSS Contribution</span>
                    </button>


                    <button
                        class="payroll-nav"
                        data-payroll="philhealth"
                        onclick="loadPayrollCalculator('philhealth')"
                    >
                        🏥
                        <span>PhilHealth</span>
                    </button>


                    <button
                        class="payroll-nav"
                        data-payroll="pagibig"
                        onclick="loadPayrollCalculator('pagibig')"
                    >
                        🏠
                        <span>Pag-IBIG</span>
                    </button>


                    <button
                        class="payroll-nav"
                        data-payroll="tax"
                        onclick="loadPayrollCalculator('tax')"
                    >
                        🧮
                        <span>Withholding Tax</span>
                    </button>


                    <button
                        class="payroll-nav"
                        data-payroll="overtime"
                        onclick="loadPayrollCalculator('overtime')"
                    >
                        ⏱️
                        <span>Overtime Pay</span>
                    </button>


                    <button
                        class="payroll-nav"
                        data-payroll="night"
                        onclick="loadPayrollCalculator('night')"
                    >
                        🌙
                        <span>Night Differential</span>
                    </button>


                    <button
                        class="payroll-nav"
                        data-payroll="holiday"
                        onclick="loadPayrollCalculator('holiday')"
                    >
                        📅
                        <span>Holiday Pay</span>
                    </button>


                    <button
                        class="payroll-nav"
                        data-payroll="thirteenth"
                        onclick="loadPayrollCalculator('thirteenth')"
                    >
                        🎁
                        <span>13th Month Pay</span>
                    </button>


                    <button
                        class="payroll-nav"
                        data-payroll="daily"
                        onclick="loadPayrollCalculator('daily')"
                    >
                        📆
                        <span>Daily Rate</span>
                    </button>


                    <button
                        class="payroll-nav"
                        data-payroll="hourly"
                        onclick="loadPayrollCalculator('hourly')"
                    >
                        🕐
                        <span>Hourly Rate</span>
                    </button>


                    <button
                        class="payroll-nav"
                        data-payroll="undertime"
                        onclick="loadPayrollCalculator('undertime')"
                    >
                        ⬇️
                        <span>Undertime / Absence</span>
                    </button>


                    <button
                        class="payroll-nav"
                        data-payroll="late"
                        onclick="loadPayrollCalculator('late')"
                    >
                        ⚠️
                        <span>Late Deduction</span>
                    </button>


                    <button
                        class="payroll-nav"
                        data-payroll="leave"
                        onclick="loadPayrollCalculator('leave')"
                    >
                        🏖️
                        <span>Leave Pay</span>
                    </button>


                    <button
                        class="payroll-nav"
                        data-payroll="bonus"
                        onclick="loadPayrollCalculator('bonus')"
                    >
                        🎉
                        <span>Bonus Calculator</span>
                    </button>


                    <button
                        class="payroll-nav"
                        data-payroll="gross"
                        onclick="loadPayrollCalculator('gross')"
                    >
                        🔄
                        <span>Net-to-Gross</span>
                    </button>

                </aside>


                <!-- CALCULATOR -->

                <main
                    id="payrollCalculator"
                    class="payroll-calculator"
                >
                </main>

            </div>

        </div>

    `;


    loadPayrollCalculator("salary");

    payrollYearChanged();

    console.log(
        "✅ Salary & Payroll loaded successfully"
    );

}


/*==================================================*
 * YEAR
 *==================================================*/

function getPayrollYear() {

    const year =
        Number(
            document.getElementById(
                "payrollYear"
            )?.value || 2026
        );

    return year;

}


function getPayrollRates() {

    return PAYROLL_RATE_PROFILES[
        getPayrollYear()
    ];

}


function payrollYearChanged() {

    const rates =
        getPayrollRates();

    const status =
        document.getElementById(
            "payrollYearStatus"
        );

    if (status) {

        status.textContent =
            rates.status;

    }

}


/*==================================================*
 * LOAD CALCULATOR
 *==================================================*/

function loadPayrollCalculator(type) {

    const container =
        document.getElementById(
            "payrollCalculator"
        );

    if (!container) {

        return;

    }


    document
        .querySelectorAll(
            ".payroll-nav"
        )
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.payroll === type
            );

        });


    switch (type) {

        case "salary":
            showPayrollSalary(container);
            break;

        case "payslip":
            showPayrollPayslip(container);
            break;

        case "sss":
            showPayrollSSS(container);
            break;

        case "philhealth":
            showPayrollPhilHealth(container);
            break;

        case "pagibig":
            showPayrollPagIBIG(container);
            break;

        case "tax":
            showPayrollTax(container);
            break;

        case "overtime":
            showPayrollOvertime(container);
            break;

        case "night":
            showPayrollNight(container);
            break;

        case "holiday":
            showPayrollHoliday(container);
            break;

        case "thirteenth":
            showPayroll13th(container);
            break;

        case "daily":
            showPayrollDaily(container);
            break;

        case "hourly":
            showPayrollHourly(container);
            break;

        case "undertime":
            showPayrollUndertime(container);
            break;

        case "late":
            showPayrollLate(container);
            break;

        case "leave":
            showPayrollLeave(container);
            break;

        case "bonus":
            showPayrollBonus(container);
            break;

        case "gross":
            showPayrollGross(container);
            break;

    }

}


/*==================================================*
 * HEADER
 *==================================================*/

function payrollHeader(
    icon,
    title,
    description
) {

    return `

        <div class="payroll-calculator-header">

            <div class="payroll-calculator-icon">
                ${icon}
            </div>

            <div>

                <span>
                    SALARY & PAYROLL
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

function payrollInput(
    id,
    label,
    placeholder = "0",
    step = "0.01"
) {

    return `

        <div class="payroll-field">

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
 * OPTIONAL CHECKBOX
 *==================================================*/

function payrollCheck(
    id,
    label,
    checked = true
) {

    return `

        <label class="payroll-check">

            <input
                type="checkbox"
                id="${id}"
                ${checked ? "checked" : ""}
            >

            <span>
                ${label}
            </span>

        </label>

    `;

}


/*==================================================*
 * RESULT
 *==================================================*/

function payrollResult(
    title,
    value,
    items = ""
) {

    return `

        <div class="payroll-result-main">

            <span>
                ${title}
            </span>

            <strong>
                ${value}
            </strong>

        </div>

        ${items}

    `;

}


function payrollResultItem(
    label,
    value
) {

    return `

        <div class="payroll-result-item">

            <span>
                ${label}
            </span>

            <strong>
                ${value}
            </strong>

        </div>

    `;

}


/*==================================================*
 * 1. SALARY CALCULATOR
 *==================================================*/

function showPayrollSalary(container) {

    container.innerHTML = `

        ${payrollHeader(
            "💰",
            "Salary Calculator",
            "Estimate gross salary, statutory deductions and net salary."
        )}


        <div class="payroll-form-grid">

            ${payrollInput(
                "psBasic",
                "Basic Monthly Salary",
                "25000"
            )}

            ${payrollInput(
                "psAllowance",
                "Allowances",
                "0"
            )}

            ${payrollInput(
                "psOT",
                "Overtime Pay",
                "0"
            )}

            ${payrollInput(
                "psBonus",
                "Bonus / Other Income",
                "0"
            )}

        </div>


        <div class="payroll-option-grid">

            ${payrollCheck(
                "psSSS",
                "Include SSS"
            )}

            ${payrollCheck(
                "psPhil",
                "Include PhilHealth"
            )}

            ${payrollCheck(
                "psPagibig",
                "Include Pag-IBIG"
            )}

            ${payrollCheck(
                "psTax",
                "Include Withholding Tax"
            )}

        </div>


        <button
            class="payroll-calculate"
            onclick="calculatePayrollSalary()"
        >
            ⚡ CALCULATE SALARY
        </button>


        <div
            id="psResult"
            class="payroll-result"
        >
            Enter your salary information.
        </div>

    `;

}


function calculatePayrollSalary() {

    const basic =
        payrollNumber("psBasic");

    const allowance =
        payrollNumber("psAllowance");

    const overtime =
        payrollNumber("psOT");

    const bonus =
        payrollNumber("psBonus");


    const gross =
        basic +
        allowance +
        overtime +
        bonus;


    let sss = 0;
    let philhealth = 0;
    let pagibig = 0;
    let tax = 0;


    if (
        document.getElementById("psSSS")?.checked
    ) {

        sss =
            calculateSSSValue(basic);

    }


    if (
        document.getElementById("psPhil")?.checked
    ) {

        philhealth =
            calculatePhilHealthValue(basic);

    }


    if (
        document.getElementById("psPagibig")?.checked
    ) {

        pagibig =
            calculatePagIBIGValue(basic);

    }


    const taxable =
        Math.max(
            0,
            gross -
            sss -
            philhealth -
            pagibig
        );


    if (
        document.getElementById("psTax")?.checked
    ) {

        tax =
            calculateAnnualTax(
                taxable * 12
            ) / 12;

    }


    const deductions =
        sss +
        philhealth +
        pagibig +
        tax;


    const net =
        Math.max(
            0,
            gross - deductions
        );


    document.getElementById(
        "psResult"
    ).innerHTML = payrollResult(

        "ESTIMATED NET SALARY",

        formatPayrollMoney(net),

        `

        <div class="payroll-result-grid">

            ${payrollResultItem(
                "Gross Salary",
                formatPayrollMoney(gross)
            )}

            ${payrollResultItem(
                "SSS",
                formatPayrollMoney(sss)
            )}

            ${payrollResultItem(
                "PhilHealth",
                formatPayrollMoney(philhealth)
            )}

            ${payrollResultItem(
                "Pag-IBIG",
                formatPayrollMoney(pagibig)
            )}

            ${payrollResultItem(
                "Withholding Tax",
                formatPayrollMoney(tax)
            )}

            ${payrollResultItem(
                "Total Deductions",
                formatPayrollMoney(deductions)
            )}

        </div>

        `

    );

}


/*==================================================*
 * 2. PAYSLIP
 *==================================================*/

function showPayrollPayslip(container) {

    container.innerHTML = `

        ${payrollHeader(
            "🧾",
            "Payslip Calculator",
            "Basic pay + allowances + additional pay − deductions."
        )}


        <div class="payroll-form-grid">

            ${payrollInput(
                "ppBasic",
                "Basic Pay",
                "25000"
            )}

            ${payrollInput(
                "ppAllowance",
                "Allowances",
                "0"
            )}

            ${payrollInput(
                "ppOT",
                "Overtime",
                "0"
            )}

            ${payrollInput(
                "ppBonus",
                "Bonus",
                "0"
            )}

            ${payrollInput(
                "ppOtherDed",
                "Other Deductions",
                "0"
            )}

        </div>


        <div class="payroll-option-grid">

            ${payrollCheck(
                "ppSSS",
                "SSS"
            )}

            ${payrollCheck(
                "ppPhil",
                "PhilHealth"
            )}

            ${payrollCheck(
                "ppPagibig",
                "Pag-IBIG"
            )}

            ${payrollCheck(
                "ppTax",
                "Withholding Tax"
            )}

        </div>


        <button
            class="payroll-calculate"
            onclick="calculatePayrollPayslip()"
        >
            ⚡ GENERATE PAYSLIP
        </button>


        <div
            id="ppResult"
            class="payroll-result"
        >
            Enter payroll information.
        </div>

    `;

}


function calculatePayrollPayslip() {

    const basic =
        payrollNumber("ppBasic");

    const allowance =
        payrollNumber("ppAllowance");

    const overtime =
        payrollNumber("ppOT");

    const bonus =
        payrollNumber("ppBonus");

    const other =
        payrollNumber("ppOtherDed");


    const gross =
        basic +
        allowance +
        overtime +
        bonus;


    const sss =
        document.getElementById("ppSSS")?.checked
            ? calculateSSSValue(basic)
            : 0;


    const philhealth =
        document.getElementById("ppPhil")?.checked
            ? calculatePhilHealthValue(basic)
            : 0;


    const pagibig =
        document.getElementById("ppPagibig")?.checked
            ? calculatePagIBIGValue(basic)
            : 0;


    const taxable =
        Math.max(
            0,
            gross -
            sss -
            philhealth -
            pagibig
        );


    const tax =
        document.getElementById("ppTax")?.checked
            ? calculateAnnualTax(
                taxable * 12
            ) / 12
            : 0;


    const totalDeduction =
        sss +
        philhealth +
        pagibig +
        tax +
        other;


    const net =
        Math.max(
            0,
            gross - totalDeduction
        );


    document.getElementById(
        "ppResult"
    ).innerHTML = payrollResult(

        "NET PAY",

        formatPayrollMoney(net),

        `

        <div class="payroll-result-grid">

            ${payrollResultItem(
                "Basic Pay",
                formatPayrollMoney(basic)
            )}

            ${payrollResultItem(
                "Allowances",
                formatPayrollMoney(allowance)
            )}

            ${payrollResultItem(
                "Overtime",
                formatPayrollMoney(overtime)
            )}

            ${payrollResultItem(
                "Bonus",
                formatPayrollMoney(bonus)
            )}

            ${payrollResultItem(
                "SSS",
                formatPayrollMoney(sss)
            )}

            ${payrollResultItem(
                "PhilHealth",
                formatPayrollMoney(philhealth)
            )}

            ${payrollResultItem(
                "Pag-IBIG",
                formatPayrollMoney(pagibig)
            )}

            ${payrollResultItem(
                "Tax",
                formatPayrollMoney(tax)
            )}

            ${payrollResultItem(
                "Other Deductions",
                formatPayrollMoney(other)
            )}

        </div>

        `

    );

}


/*==================================================*
 * 3. SSS
 *==================================================*/

function showPayrollSSS(container) {

    container.innerHTML = `

        ${payrollHeader(
            "🛡️",
            "SSS Contribution",
            "Estimate the employee SSS contribution."
        )}


        <div class="payroll-form-grid">

            ${payrollInput(
                "sssSalary",
                "Monthly Compensation",
                "25000"
            )}

        </div>


        <button
            class="payroll-calculate"
            onclick="calculatePayrollSSS()"
        >
            ⚡ CALCULATE SSS
        </button>


        <div
            id="sssResult"
            class="payroll-result"
        >
            Enter monthly compensation.
        </div>

    `;

}


function calculateSSSValue(salary) {

    const rates =
        getPayrollRates();

    const msc =
        Math.min(
            Math.max(0, salary),
            rates.sssMaxMSC
        );

    return msc * rates.sssRate;

}


function calculatePayrollSSS() {

    const salary =
        payrollNumber("sssSalary");

    const contribution =
        calculateSSSValue(salary);

    const rates =
        getPayrollRates();


    document.getElementById(
        "sssResult"
    ).innerHTML = payrollResult(

        "EMPLOYEE SSS",

        formatPayrollMoney(
            contribution
        ),

        `

        <div class="payroll-result-grid">

            ${payrollResultItem(
                "Salary / Compensation",
                formatPayrollMoney(salary)
            )}

            ${payrollResultItem(
                "Contribution Rate",
                `${rates.sssRate * 100}%`
            )}

            ${payrollResultItem(
                "Contribution Base",
                formatPayrollMoney(
                    Math.min(
                        salary,
                        rates.sssMaxMSC
                    )
                )
            )}

        </div>

        `

    );

}


/*==================================================*
 * 4. PHILHEALTH
 *==================================================*/

function showPayrollPhilHealth(container) {

    container.innerHTML = `

        ${payrollHeader(
            "🏥",
            "PhilHealth Contribution",
            "Estimate the employee PhilHealth premium."
        )}


        <div class="payroll-form-grid">

            ${payrollInput(
                "phSalary",
                "Monthly Basic Salary",
                "25000"
            )}

        </div>


        <button
            class="payroll-calculate"
            onclick="calculatePayrollPhilHealth()"
        >
            ⚡ CALCULATE PHILHEALTH
        </button>


        <div
            id="phResult"
            class="payroll-result"
        >
            Enter monthly basic salary.
        </div>

    `;

}


function calculatePhilHealthValue(salary) {

    const rates =
        getPayrollRates();

    const base =
        Math.min(
            Math.max(
                salary,
                rates.philhealthMinBase
            ),
            rates.philhealthMaxBase
        );

    return (
        base *
        rates.philhealthRate
    ) / 2;

}


function calculatePayrollPhilHealth() {

    const salary =
        payrollNumber("phSalary");

    const contribution =
        calculatePhilHealthValue(
            salary
        );

    const rates =
        getPayrollRates();


    document.getElementById(
        "phResult"
    ).innerHTML = payrollResult(

        "EMPLOYEE PHILHEALTH",

        formatPayrollMoney(
            contribution
        ),

        `

        <div class="payroll-result-grid">

            ${payrollResultItem(
                "Monthly Basic Salary",
                formatPayrollMoney(salary)
            )}

            ${payrollResultItem(
                "Total Premium Rate",
                `${rates.philhealthRate * 100}%`
            )}

            ${payrollResultItem(
                "Employee Share",
                `${rates.philhealthRate * 50}%`
            )}

        </div>

        `

    );

}


/*==================================================*
 * 5. PAG-IBIG
 *==================================================*/

function showPayrollPagIBIG(container) {

    container.innerHTML = `

        ${payrollHeader(
            "🏠",
            "Pag-IBIG Contribution",
            "Estimate the employee Pag-IBIG membership savings."
        )}


        <div class="payroll-form-grid">

            ${payrollInput(
                "piSalary",
                "Monthly Compensation",
                "25000"
            )}

        </div>


        <button
            class="payroll-calculate"
            onclick="calculatePayrollPagIBIG()"
        >
            ⚡ CALCULATE PAG-IBIG
        </button>


        <div
            id="piResult"
            class="payroll-result"
        >
            Enter monthly compensation.
        </div>

    `;

}


function calculatePagIBIGValue(salary) {

    const rates =
        getPayrollRates();

    const base =
        Math.min(
            Math.max(0, salary),
            rates.pagibigMaxFundSalary
        );


    let employeeRate;


    if (
        base <=
        rates.pagibigLowThreshold
    ) {

        employeeRate =
            rates.pagibigLowEmployeeRate;

    }

    else {

        employeeRate =
            rates.pagibigEmployeeRate;

    }


    return base * employeeRate;

}


function calculatePayrollPagIBIG() {

    const salary =
        payrollNumber("piSalary");

    const contribution =
        calculatePagIBIGValue(
            salary
        );


    document.getElementById(
        "piResult"
    ).innerHTML = payrollResult(

        "EMPLOYEE PAG-IBIG",

        formatPayrollMoney(
            contribution
        ),

        `

        <div class="payroll-result-grid">

            ${payrollResultItem(
                "Monthly Compensation",
                formatPayrollMoney(salary)
            )}

            ${payrollResultItem(
                "Employee Contribution",
                formatPayrollMoney(contribution)
            )}

        </div>

        `

    );

}


/*==================================================*
 * BIR TAX TABLE
 *
 * 2023 AND ONWARDS
 *==================================================*/

function calculateAnnualTax(
    taxableIncome
) {

    const income =
        Math.max(
            0,
            taxableIncome
        );


    if (income <= 250000) {

        return 0;

    }


    if (income <= 400000) {

        return (
            income -
            250000
        ) * 0.15;

    }


    if (income <= 800000) {

        return (
            22500 +
            (
                income -
                400000
            ) * 0.20
        );

    }


    if (income <= 2000000) {

        return (
            102500 +
            (
                income -
                800000
            ) * 0.25
        );

    }


    if (income <= 8000000) {

        return (
            402500 +
            (
                income -
                2000000
            ) * 0.30
        );

    }


    return (
        2202500 +
        (
            income -
            8000000
        ) * 0.35
    );

}


/*==================================================*
 * 6. WITHHOLDING TAX
 *==================================================*/

function showPayrollTax(container) {

    container.innerHTML = `

        ${payrollHeader(
            "🧮",
            "Withholding Tax",
            "Estimate annual and monthly compensation income tax."
        )}


        <div class="payroll-form-grid">

            ${payrollInput(
                "taxGross",
                "Gross Monthly Compensation",
                "30000"
            )}

            ${payrollInput(
                "taxOther",
                "Other Taxable Monthly Income",
                "0"
            )}

            ${payrollInput(
                "taxNonTax",
                "Non-Taxable Monthly Income",
                "0"
            )}

        </div>


        <button
            class="payroll-calculate"
            onclick="calculatePayrollTax()"
        >
            ⚡ CALCULATE TAX
        </button>


        <div
            id="taxResult"
            class="payroll-result"
        >
            Enter compensation information.
        </div>

    `;

}


function calculatePayrollTax() {

    const gross =
        payrollNumber("taxGross");

    const other =
        payrollNumber("taxOther");

    const nonTaxable =
        payrollNumber("taxNonTax");


    const sss =
        calculateSSSValue(gross);

    const philhealth =
        calculatePhilHealthValue(gross);

    const pagibig =
        calculatePagIBIGValue(gross);


    const monthlyTaxable =
        Math.max(
            0,
            gross +
            other -
            nonTaxable -
            sss -
            philhealth -
            pagibig
        );


    const annualTax =
        calculateAnnualTax(
            monthlyTaxable * 12
        );


    const monthlyTax =
        annualTax / 12;


    document.getElementById(
        "taxResult"
    ).innerHTML = payrollResult(

        "ESTIMATED MONTHLY TAX",

        formatPayrollMoney(
            monthlyTax
        ),

        `

        <div class="payroll-result-grid">

            ${payrollResultItem(
                "Monthly Taxable",
                formatPayrollMoney(
                    monthlyTaxable
                )
            )}

            ${payrollResultItem(
                "Annual Taxable",
                formatPayrollMoney(
                    monthlyTaxable * 12
                )
            )}

            ${payrollResultItem(
                "Estimated Annual Tax",
                formatPayrollMoney(
                    annualTax
                )
            )}

            ${payrollResultItem(
                "SSS Deduction",
                formatPayrollMoney(sss)
            )}

            ${payrollResultItem(
                "PhilHealth Deduction",
                formatPayrollMoney(philhealth)
            )}

            ${payrollResultItem(
                "Pag-IBIG Deduction",
                formatPayrollMoney(pagibig)
            )}

        </div>

        `

    );

}


/*==================================================*
 * 7. OVERTIME PAY
 *==================================================*/

function showPayrollOvertime(container) {

    container.innerHTML = `

        ${payrollHeader(
            "⏱️",
            "Overtime Pay",
            "Calculate overtime compensation."
        )}


        <div class="payroll-form-grid">

            ${payrollInput(
                "otDaily",
                "Daily Rate",
                "1000"
            )}

            ${payrollInput(
                "otHours",
                "OT Hours",
                "2"
            )}

            ${payrollInput(
                "otRate",
                "OT Multiplier",
                "1.25"
            )}

        </div>


        <button
            class="payroll-calculate"
            onclick="calculatePayrollOT()"
        >
            ⚡ CALCULATE OT
        </button>


        <div
            id="otResult"
            class="payroll-result"
        >
            Enter daily rate and overtime hours.
        </div>

    `;

}


function calculatePayrollOT() {

    const daily =
        payrollNumber("otDaily");

    const hours =
        payrollNumber("otHours");

    const multiplier =
        payrollNumber("otRate");


    const hourly =
        daily / 8;

    const otPay =
        hourly *
        hours *
        multiplier;


    document.getElementById(
        "otResult"
    ).innerHTML = payrollResult(

        "OVERTIME PAY",

        formatPayrollMoney(
            otPay
        ),

        `

        <div class="payroll-result-grid">

            ${payrollResultItem(
                "Hourly Rate",
                formatPayrollMoney(hourly)
            )}

            ${payrollResultItem(
                "OT Hours",
                hours
            )}

            ${payrollResultItem(
                "Multiplier",
                `${multiplier}x`
            )}

        </div>

        `

    );

}


/*==================================================*
 * 8. NIGHT DIFFERENTIAL
 *==================================================*/

function showPayrollNight(container) {

    container.innerHTML = `

        ${payrollHeader(
            "🌙",
            "Night Differential",
            "Calculate additional pay for qualifying night-shift hours."
        )}


        <div class="payroll-form-grid">

            ${payrollInput(
                "nightHourly",
                "Hourly Rate",
                "125"
            )}

            ${payrollInput(
                "nightHours",
                "Night Hours",
                "8"
            )}

            ${payrollInput(
                "nightRate",
                "Night Differential (%)",
                "10",
                "0.01"
            )}

        </div>


        <button
            class="payroll-calculate"
            onclick="calculatePayrollNight()"
        >
            ⚡ CALCULATE NIGHT DIFFERENTIAL
        </button>


        <div
            id="nightResult"
            class="payroll-result"
        >
            Enter night-shift information.
        </div>

    `;

}


function calculatePayrollNight() {

    const hourly =
        payrollNumber("nightHourly");

    const hours =
        payrollNumber("nightHours");

    const rateInput =
        document.getElementById(
            "nightRate"
        );


    const rate =
        rateInput &&
        rateInput.value !== ""
            ? Number(rateInput.value) / 100
            : getPayrollRates().nightDiffRate;


    const differential =
        hourly *
        hours *
        rate;


    document.getElementById(
        "nightResult"
    ).innerHTML = payrollResult(

        "NIGHT DIFFERENTIAL",

        formatPayrollMoney(
            differential
        ),

        `

        <div class="payroll-result-grid">

            ${payrollResultItem(
                "Base Pay",
                formatPayrollMoney(
                    hourly * hours
                )
            )}

            ${payrollResultItem(
                "Differential Rate",
                `${rate * 100}%`
            )}

        </div>

        `

    );

}


/*==================================================*
 * 9. HOLIDAY PAY
 *==================================================*/

function showPayrollHoliday(container) {

    container.innerHTML = `

        ${payrollHeader(
            "📅",
            "Holiday Pay",
            "Estimate regular or special holiday compensation."
        )}


        <div class="payroll-form-grid">

            ${payrollInput(
                "holDaily",
                "Daily Rate",
                "1000"
            )}

            ${payrollInput(
                "holHours",
                "Hours Worked",
                "8"
            )}

        </div>


        <div class="payroll-form-grid">

            <div class="payroll-field">

                <label>
                    Holiday Type
                </label>

                <select
                    id="holType"
                    class="payroll-select"
                >

                    <option value="regular">
                        Regular Holiday — 200%
                    </option>

                    <option value="special">
                        Special Non-Working — 130%
                    </option>

                    <option value="ordinary">
                        Ordinary Workday — 100%
                    </option>

                </select>

            </div>

        </div>


        <button
            class="payroll-calculate"
            onclick="calculatePayrollHoliday()"
        >
            ⚡ CALCULATE HOLIDAY PAY
        </button>


        <div
            id="holResult"
            class="payroll-result"
        >
            Enter holiday work information.
        </div>

    `;

}


function calculatePayrollHoliday() {

    const daily =
        payrollNumber("holDaily");

    const hours =
        payrollNumber("holHours");


    const type =
        document.getElementById(
            "holType"
        ).value;


    let multiplier = 1;


    if (type === "regular") {

        multiplier =
            getPayrollRates()
                .regularHolidayRate;

    }

    else if (type === "special") {

        multiplier =
            getPayrollRates()
                .specialHolidayRate;

    }


    const hourly =
        daily / 8;


    const pay =
        hourly *
        hours *
        multiplier;


    document.getElementById(
        "holResult"
    ).innerHTML = payrollResult(

        "HOLIDAY PAY",

        formatPayrollMoney(pay),

        `

        <div class="payroll-result-grid">

            ${payrollResultItem(
                "Hourly Rate",
                formatPayrollMoney(hourly)
            )}

            ${payrollResultItem(
                "Multiplier",
                `${multiplier}x`
            )}

        </div>

        `

    );

}


/*==================================================*
 * 10. 13TH MONTH
 *==================================================*/

function showPayroll13th(container) {

    container.innerHTML = `

        ${payrollHeader(
            "🎁",
            "13th Month Pay",
            "Estimate 13th month pay from annual basic salary."
        )}


        <div class="payroll-form-grid">

            ${payrollInput(
                "thirteenAnnual",
                "Annual Basic Salary",
                "300000"
            )}

        </div>


        <button
            class="payroll-calculate"
            onclick="calculatePayroll13th()"
        >
            ⚡ CALCULATE 13TH MONTH
        </button>


        <div
            id="thirteenResult"
            class="payroll-result"
        >
            Enter annual basic salary.
        </div>

    `;

}


function calculatePayroll13th() {

    const annual =
        payrollNumber(
            "thirteenAnnual"
        );


    const result =
        annual / 12;


    const rates =
        getPayrollRates();


    const taxableExcess =
        Math.max(
            0,
            result -
            rates.thirteenthMonthTaxFree
        );


    document.getElementById(
        "thirteenResult"
    ).innerHTML = payrollResult(

        "ESTIMATED 13TH MONTH",

        formatPayrollMoney(
            result
        ),

        `

        <div class="payroll-result-grid">

            ${payrollResultItem(
                "Annual Basic Salary",
                formatPayrollMoney(annual)
            )}

            ${payrollResultItem(
                "Tax-Free Ceiling",
                formatPayrollMoney(
                    rates.thirteenthMonthTaxFree
                )
            )}

            ${payrollResultItem(
                "Potential Taxable Excess",
                formatPayrollMoney(
                    taxableExcess
                )
            )}

        </div>

        `

    );

}


/*==================================================*
 * 11. DAILY RATE
 *==================================================*/

function showPayrollDaily(container) {

    container.innerHTML = `

        ${payrollHeader(
            "📆",
            "Daily Rate Calculator",
            "Convert monthly salary into an estimated daily rate."
        )}


        <div class="payroll-form-grid">

            ${payrollInput(
                "dailyMonthly",
                "Monthly Salary",
                "25000"
            )}

            ${payrollInput(
                "dailyDays",
                "Paid Working Days / Month",
                "26"
            )}

        </div>


        <button
            class="payroll-calculate"
            onclick="calculatePayrollDaily()"
        >
            ⚡ CALCULATE DAILY RATE
        </button>


        <div
            id="dailyResult"
            class="payroll-result"
        >
            Enter monthly salary and working days.
        </div>

    `;

}


function calculatePayrollDaily() {

    const monthly =
        payrollNumber(
            "dailyMonthly"
        );

    const days =
        payrollNumber(
            "dailyDays"
        );


    const daily =
        days > 0
            ? monthly / days
            : 0;


    document.getElementById(
        "dailyResult"
    ).innerHTML = payrollResult(

        "DAILY RATE",

        formatPayrollMoney(
            daily
        )

    );

}


/*==================================================*
 * 12. HOURLY RATE
 *==================================================*/

function showPayrollHourly(container) {

    container.innerHTML = `

        ${payrollHeader(
            "🕐",
            "Hourly Rate Calculator",
            "Convert daily or monthly salary into an hourly rate."
        )}


        <div class="payroll-form-grid">

            ${payrollInput(
                "hourlySalary",
                "Salary",
                "1000"
            )}

            ${payrollInput(
                "hourlyDays",
                "Working Days / Month",
                "26"
            )}

            ${payrollInput(
                "hourlyHours",
                "Hours / Day",
                "8"
            )}

        </div>


        <button
            class="payroll-calculate"
            onclick="calculatePayrollHourly()"
        >
            ⚡ CALCULATE HOURLY RATE
        </button>


        <div
            id="hourlyResult"
            class="payroll-result"
        >
            Enter salary information.
        </div>

    `;

}


function calculatePayrollHourly() {

    const salary =
        payrollNumber(
            "hourlySalary"
        );

    const days =
        payrollNumber(
            "hourlyDays"
        );

    const hours =
        payrollNumber(
            "hourlyHours"
        );


    const hourly =
        days > 0 && hours > 0
            ? salary / days / hours
            : 0;


    document.getElementById(
        "hourlyResult"
    ).innerHTML = payrollResult(

        "HOURLY RATE",

        formatPayrollMoney(
            hourly
        )

    );

}


/*==================================================*
 * 13. UNDERTIME / ABSENCE
 *==================================================*/

function showPayrollUndertime(container) {

    container.innerHTML = `

        ${payrollHeader(
            "⬇️",
            "Undertime / Absence",
            "Calculate salary deductions caused by unpaid hours or days."
        )}


        <div class="payroll-form-grid">

            ${payrollInput(
                "underDaily",
                "Daily Rate",
                "1000"
            )}

            ${payrollInput(
                "underHours",
                "Undertime Hours",
                "2"
            )}

            ${payrollInput(
                "underDays",
                "Absent Days",
                "0"
            )}

        </div>


        <button
            class="payroll-calculate"
            onclick="calculatePayrollUndertime()"
        >
            ⚡ CALCULATE DEDUCTION
        </button>


        <div
            id="underResult"
            class="payroll-result"
        >
            Enter undertime or absence.
        </div>

    `;

}


function calculatePayrollUndertime() {

    const daily =
        payrollNumber(
            "underDaily"
        );

    const hours =
        payrollNumber(
            "underHours"
        );

    const absentDays =
        payrollNumber(
            "underDays"
        );


    const hourly =
        daily / 8;


    const deduction =
        (
            hourly * hours
        ) +
        (
            daily * absentDays
        );


    document.getElementById(
        "underResult"
    ).innerHTML = payrollResult(

        "TOTAL DEDUCTION",

        formatPayrollMoney(
            deduction
        )

    );

}


/*==================================================*
 * 14. LATE DEDUCTION
 *==================================================*/

function showPayrollLate(container) {

    container.innerHTML = `

        ${payrollHeader(
            "⚠️",
            "Late Deduction",
            "Calculate salary deduction based on late minutes."
        )}


        <div class="payroll-form-grid">

            ${payrollInput(
                "lateDaily",
                "Daily Rate",
                "1000"
            )}

            ${payrollInput(
                "lateMinutes",
                "Minutes Late",
                "30"
            )}

        </div>


        <button
            class="payroll-calculate"
            onclick="calculatePayrollLate()"
        >
            ⚡ CALCULATE LATE DEDUCTION
        </button>


        <div
            id="lateResult"
            class="payroll-result"
        >
            Enter daily rate and late minutes.
        </div>

    `;

}


function calculatePayrollLate() {

    const daily =
        payrollNumber(
            "lateDaily"
        );

    const minutes =
        payrollNumber(
            "lateMinutes"
        );


    const hourly =
        daily / 8;


    const perMinute =
        hourly / 60;


    const deduction =
        perMinute * minutes;


    document.getElementById(
        "lateResult"
    ).innerHTML = payrollResult(

        "LATE DEDUCTION",

        formatPayrollMoney(
            deduction
        ),

        `

        <div class="payroll-result-grid">

            ${payrollResultItem(
                "Hourly Rate",
                formatPayrollMoney(hourly)
            )}

            ${payrollResultItem(
                "Minutes Late",
                minutes
            )}

        </div>

        `

    );

}


/*==================================================*
 * 15. LEAVE PAY
 *==================================================*/

function showPayrollLeave(container) {

    container.innerHTML = `

        ${payrollHeader(
            "🏖️",
            "Leave Pay",
            "Calculate paid or unpaid leave compensation."
        )}


        <div class="payroll-form-grid">

            ${payrollInput(
                "leaveDaily",
                "Daily Rate",
                "1000"
            )}

            ${payrollInput(
                "leaveDays",
                "Leave Days",
                "2"
            )}

        </div>


        <div class="payroll-field">

            <label>
                Leave Type
            </label>

            <select
                id="leaveType"
                class="payroll-select"
            >

                <option value="paid">
                    Paid Leave
                </option>

                <option value="unpaid">
                    Unpaid Leave
                </option>

            </select>

        </div>


        <button
            class="payroll-calculate"
            onclick="calculatePayrollLeave()"
        >
            ⚡ CALCULATE LEAVE
        </button>


        <div
            id="leaveResult"
            class="payroll-result"
        >
            Enter leave information.
        </div>

    `;

}


function calculatePayrollLeave() {

    const daily =
        payrollNumber(
            "leaveDaily"
        );

    const days =
        payrollNumber(
            "leaveDays"
        );


    const type =
        document.getElementById(
            "leaveType"
        ).value;


    const amount =
        daily * days;


    const deduction =
        type === "unpaid"
            ? amount
            : 0;


    document.getElementById(
        "leaveResult"
    ).innerHTML = payrollResult(

        type === "paid"
            ? "PAID LEAVE VALUE"
            : "UNPAID LEAVE DEDUCTION",

        formatPayrollMoney(
            amount
        ),

        `

        <div class="payroll-result-grid">

            ${payrollResultItem(
                "Leave Days",
                days
            )}

            ${payrollResultItem(
                "Deduction",
                formatPayrollMoney(
                    deduction
                )
            )}

        </div>

        `

    );

}


/*==================================================*
 * 16. BONUS
 *==================================================*/

function showPayrollBonus(container) {

    container.innerHTML = `

        ${payrollHeader(
            "🎉",
            "Bonus Calculator",
            "Estimate taxable and non-taxable portions of a bonus."
        )}


        <div class="payroll-form-grid">

            ${payrollInput(
                "bonusAmount",
                "Bonus Amount",
                "50000"
            )}

            ${payrollInput(
                "bonusTaxFree",
                "Non-Taxable Amount",
                "90000"
            )}

        </div>


        <button
            class="payroll-calculate"
            onclick="calculatePayrollBonus()"
        >
            ⚡ CALCULATE BONUS
        </button>


        <div
            id="bonusResult"
            class="payroll-result"
        >
            Enter bonus amount.
        </div>

    `;

}


function calculatePayrollBonus() {

    const bonus =
        payrollNumber(
            "bonusAmount"
        );

    const taxFree =
        payrollNumber(
            "bonusTaxFree"
        );


    const taxable =
        Math.max(
            0,
            bonus -
            taxFree
        );


    const nonTaxable =
        Math.min(
            bonus,
            taxFree
        );


    document.getElementById(
        "bonusResult"
    ).innerHTML = payrollResult(

        "BONUS",

        formatPayrollMoney(
            bonus
        ),

        `

        <div class="payroll-result-grid">

            ${payrollResultItem(
                "Non-Taxable Portion",
                formatPayrollMoney(
                    nonTaxable
                )
            )}

            ${payrollResultItem(
                "Potential Taxable Portion",
                formatPayrollMoney(
                    taxable
                )
            )}

        </div>

        `

    );

}


/*==================================================*
 * 17. NET TO GROSS
 *==================================================*/

function showPayrollGross(container) {

    container.innerHTML = `

        ${payrollHeader(
            "🔄",
            "Net-to-Gross Calculator",
            "Estimate the gross salary needed to reach a target take-home pay."
        )}


        <div class="payroll-form-grid">

            ${payrollInput(
                "grossTarget",
                "Target Net Monthly Salary",
                "25000"
            )}

        </div>


        <button
            class="payroll-calculate"
            onclick="calculatePayrollGross()"
        >
            ⚡ ESTIMATE GROSS SALARY
        </button>


        <div
            id="grossResult"
            class="payroll-result"
        >
            Enter target take-home salary.
        </div>

    `;

}


function estimateNetFromGross(gross) {

    const sss =
        calculateSSSValue(gross);

    const philhealth =
        calculatePhilHealthValue(gross);

    const pagibig =
        calculatePagIBIGValue(gross);


    const taxable =
        Math.max(
            0,
            gross -
            sss -
            philhealth -
            pagibig
        );


    const tax =
        calculateAnnualTax(
            taxable * 12
        ) / 12;


    return Math.max(
        0,
        gross -
        sss -
        philhealth -
        pagibig -
        tax
    );

}


function calculatePayrollGross() {

    const target =
        payrollNumber(
            "grossTarget"
        );


    let low = target;

    let high =
        target * 2;


    for (
        let i = 0;
        i < 30;
        i++
    ) {

        const test =
            estimateNetFromGross(
                high
            );


        if (
            test >= target
        ) {

            break;

        }


        high *= 2;

    }


    for (
        let i = 0;
        i < 60;
        i++
    ) {

        const middle =
            (
                low +
                high
            ) / 2;


        const net =
            estimateNetFromGross(
                middle
            );


        if (
            net < target
        ) {

            low =
                middle;

        }

        else {

            high =
                middle;

        }

    }


    const gross =
        high;


    const net =
        estimateNetFromGross(
            gross
        );


    document.getElementById(
        "grossResult"
    ).innerHTML = payrollResult(

        "ESTIMATED GROSS SALARY",

        formatPayrollMoney(
            gross
        ),

        `

        <div class="payroll-result-grid">

            ${payrollResultItem(
                "Target Net",
                formatPayrollMoney(target)
            )}

            ${payrollResultItem(
                "Estimated Net",
                formatPayrollMoney(net)
            )}

            ${payrollResultItem(
                "Estimated Deductions",
                formatPayrollMoney(
                    gross - net
                )
            )}

        </div>

        `

    );

}


/*==================================================*
 * UTILITIES
 *==================================================*/

function payrollNumber(id) {

    const element =
        document.getElementById(id);

    if (!element) {

        return 0;

    }


    const value =
        Number(element.value);


    if (
        !Number.isFinite(value)
    ) {

        return 0;

    }


    return Math.max(
        0,
        value
    );

}


function formatPayrollMoney(value) {

    return new Intl.NumberFormat(
        "en-PH",
        {
            style: "currency",
            currency: "PHP"
        }
    ).format(
        Number.isFinite(value)
            ? value
            : 0
    );

}


/*==================================================*
 * GLOBAL REGISTRATION
 *==================================================*/

window.loadSalaryPayroll =
    loadSalaryPayroll;

window.loadPayrollCalculator =
    loadPayrollCalculator;

window.payrollYearChanged =
    payrollYearChanged;

window.calculatePayrollSalary =
    calculatePayrollSalary;

window.calculatePayrollPayslip =
    calculatePayrollPayslip;

window.calculatePayrollSSS =
    calculatePayrollSSS;

window.calculatePayrollPhilHealth =
    calculatePayrollPhilHealth;

window.calculatePayrollPagIBIG =
    calculatePayrollPagIBIG;

window.calculatePayrollTax =
    calculatePayrollTax;

window.calculatePayrollOT =
    calculatePayrollOT;

window.calculatePayrollNight =
    calculatePayrollNight;

window.calculatePayrollHoliday =
    calculatePayrollHoliday;

window.calculatePayroll13th =
    calculatePayroll13th;

window.calculatePayrollDaily =
    calculatePayrollDaily;

window.calculatePayrollHourly =
    calculatePayrollHourly;

window.calculatePayrollUndertime =
    calculatePayrollUndertime;

window.calculatePayrollLate =
    calculatePayrollLate;

window.calculatePayrollLeave =
    calculatePayrollLeave;

window.calculatePayrollBonus =
    calculatePayrollBonus;

window.calculatePayrollGross =
    calculatePayrollGross;


console.log(
    "✅ Salary & Payroll functions registered"
);