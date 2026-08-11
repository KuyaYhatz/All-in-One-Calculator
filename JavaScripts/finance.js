/*==================================================*
 * PERSONAL FINANCE CALCULATOR
 * FUTURISTIC AQUA FINANCE INTERFACE
 *==================================================*/

console.log("✅ finance.js loaded");


/*==================================================*
 * LOAD PERSONAL FINANCE
 *==================================================*/

function loadPersonalFinance(canvas) {

    console.log("💰 Loading Personal Finance...");


    /*==================================================*
     * CANVAS CHECK
     *==================================================*/

    if (!canvas) {

        console.error("❌ Canvas not found");

        return;

    }


    /*==================================================*
     * MAIN HTML
     *==================================================*/

    canvas.innerHTML = `

        <div class="finance-container">


            <!-- =========================================
                 HEADER
            ========================================== -->

            <div class="finance-title">

                <div>

                    <span class="finance-badge">
                        FINANCIAL SYSTEM
                    </span>


                    <h1>
                        💰 PERSONAL FINANCE
                    </h1>


                    <p>
                        Calculate loans, debt, credit,
                        interest, and other financial values.
                    </p>

                </div>

            </div>


            <!-- =========================================
                 MAIN LAYOUT
            ========================================== -->

            <div class="finance-layout">


                <!-- =====================================
                     LEFT MENU
                ====================================== -->

                <div class="finance-menu">


                    <div class="finance-menu-header">

                        <span>
                            FINANCE TOOLS
                        </span>


                        <small>
                            08 MODULES
                        </small>

                    </div>


                    <!-- LOAN -->

                    <button
                        type="button"
                        class="finance-nav active"
                        data-finance="loan">

                        <span class="finance-icon">
                            💳
                        </span>

                        <span>
                            Loan Calculator
                        </span>

                    </button>


                    <!-- DEBT -->

                    <button
                        type="button"
                        class="finance-nav"
                        data-finance="debt">

                        <span class="finance-icon">
                            💸
                        </span>

                        <span>
                            Debt Calculator
                        </span>

                    </button>


                    <!-- CREDIT -->

                    <button
                        type="button"
                        class="finance-nav"
                        data-finance="credit">

                        <span class="finance-icon">
                            💳
                        </span>

                        <span>
                            Credit Calculator
                        </span>

                    </button>


                    <!-- AMORTIZATION -->

                    <button
                        type="button"
                        class="finance-nav"
                        data-finance="amortization">

                        <span class="finance-icon">
                            📊
                        </span>

                        <span>
                            Loan Amortization
                        </span>

                    </button>


                    <!-- DTI -->

                    <button
                        type="button"
                        class="finance-nav"
                        data-finance="dti">

                        <span class="finance-icon">
                            📈
                        </span>

                        <span>
                            DTI Calculator
                        </span>

                    </button>


                    <!-- FINANCIAL -->

                    <button
                        type="button"
                        class="finance-nav"
                        data-finance="financial">

                        <span class="finance-icon">
                            🧮
                        </span>

                        <span>
                            Financial Calculator
                        </span>

                    </button>


                    <!-- COMPOUND -->

                    <button
                        type="button"
                        class="finance-nav"
                        data-finance="compound">

                        <span class="finance-icon">
                            📈
                        </span>

                        <span>
                            Compound Interest
                        </span>

                    </button>


                    <!-- SIMPLE -->

                    <button
                        type="button"
                        class="finance-nav"
                        data-finance="simple">

                        <span class="finance-icon">
                            💰
                        </span>

                        <span>
                            Simple Interest
                        </span>

                    </button>


                </div>


                <!-- =====================================
                     CALCULATOR AREA
                ====================================== -->

                <div
                    id="financeCalculator"
                    class="finance-calculator">

                </div>


            </div>

        </div>

    `;


    /*==================================================*
     * NAVIGATION
     *==================================================*/

    const buttons =
        canvas.querySelectorAll(
            ".finance-nav"
        );


    buttons.forEach(button => {

        button.addEventListener(
            "click",
            function () {


                /* REMOVE ACTIVE */

                buttons.forEach(btn => {

                    btn.classList.remove(
                        "active"
                    );

                });


                /* ADD ACTIVE */

                this.classList.add(
                    "active"
                );


                /* LOAD CALCULATOR */

                loadFinanceCalculator(
                    this.dataset.finance
                );

            }
        );

    });


    /*==================================================*
     * DEFAULT CALCULATOR
     *==================================================*/

    loadFinanceCalculator("loan");


    console.log(
        "✅ Personal Finance loaded successfully"
    );

}


/*==================================================*
 * LOAD SELECTED CALCULATOR
 *==================================================*/

function loadFinanceCalculator(type) {

    const container =
        document.getElementById(
            "financeCalculator"
        );


    if (!container) {

        console.error(
            "❌ financeCalculator not found"
        );

        return;

    }


    switch (type) {


        case "loan":

            showLoanCalculator(container);

            break;


        case "debt":

            showDebtCalculator(container);

            break;


        case "credit":

            showCreditCalculator(container);

            break;


        case "amortization":

            showAmortizationCalculator(container);

            break;


        case "dti":

            showDTICalculator(container);

            break;


        case "financial":

            showFinancialCalculator(container);

            break;


        case "compound":

            showCompoundCalculator(container);

            break;


        case "simple":

            showSimpleCalculator(container);

            break;


        default:

            console.warn(
                "⚠️ Unknown finance calculator:",
                type
            );

            showLoanCalculator(container);

    }

}


/*==================================================*
 * FINANCE HEADER
 *==================================================*/

function financeHeader(
    icon,
    title,
    description
) {

    return `

        <div class="calculator-header">


            <div class="calculator-icon">
                ${icon}
            </div>


            <div>

                <span class="calculator-label">
                    PERSONAL FINANCE
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
 * FINANCE INPUT
 *==================================================*/

function financeInput(
    id,
    label,
    placeholder,
    step = "any"
) {

    return `

        <div class="finance-field">

            <label for="${id}">
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
 * LOAN CALCULATOR
 *==================================================*/

function showLoanCalculator(container) {

    container.innerHTML = `

        ${financeHeader(
            "💳",
            "Loan Calculator",
            "Estimate your monthly loan payment."
        )}


        <div class="finance-form-grid">

            ${financeInput(
                "loanAmount",
                "Loan Amount",
                "100000"
            )}


            ${financeInput(
                "loanRate",
                "Annual Interest Rate (%)",
                "6.5",
                "0.01"
            )}


            ${financeInput(
                "loanYears",
                "Loan Term (Years)",
                "5"
            )}

        </div>


        <button
            type="button"
            class="finance-calculate"
            onclick="calculateLoan()">

            ⚡ Calculate Loan

        </button>


        <div
            id="loanResult"
            class="finance-result">

            Enter your loan information
            and calculate your estimated payment.

        </div>

    `;

}


/*==================================================*
 * CALCULATE LOAN
 *==================================================*/

function calculateLoan() {

    const amount =
        Number(
            document.getElementById(
                "loanAmount"
            ).value
        );


    const annualRate =
        Number(
            document.getElementById(
                "loanRate"
            ).value
        );


    const years =
        Number(
            document.getElementById(
                "loanYears"
            ).value
        );


    const result =
        document.getElementById(
            "loanResult"
        );


    if (!result) return;


    if (
        amount <= 0 ||
        annualRate < 0 ||
        years <= 0
    ) {

        result.innerHTML =
            "⚠️ Please enter valid values.";

        return;

    }


    const monthlyRate =
        annualRate / 100 / 12;


    const months =
        years * 12;


    let payment;


    if (monthlyRate === 0) {

        payment =
            amount / months;

    }

    else {

        payment =
            amount *
            (
                monthlyRate *
                Math.pow(
                    1 + monthlyRate,
                    months
                )
            ) /
            (
                Math.pow(
                    1 + monthlyRate,
                    months
                ) - 1
            );

    }


    const total =
        payment * months;


    const interest =
        total - amount;


    result.innerHTML = `

        <div class="result-main">

            <span>
                MONTHLY PAYMENT
            </span>


            <strong>
                ${formatMoney(payment)}
            </strong>

        </div>


        <div class="result-grid">


            <div>

                <span>
                    Principal
                </span>

                <strong>
                    ${formatMoney(amount)}
                </strong>

            </div>


            <div>

                <span>
                    Total Interest
                </span>

                <strong>
                    ${formatMoney(interest)}
                </strong>

            </div>


            <div>

                <span>
                    Total Payment
                </span>

                <strong>
                    ${formatMoney(total)}
                </strong>

            </div>


            <div>

                <span>
                    Payments
                </span>

                <strong>
                    ${months}
                </strong>

            </div>


        </div>

    `;

}


/*==================================================*
 * DEBT CALCULATOR
 *==================================================*/

function showDebtCalculator(container) {

    container.innerHTML = `

        ${financeHeader(
            "💸",
            "Debt Calculator",
            "Estimate how long it will take to pay off your debt."
        )}


        <div class="finance-form-grid">


            ${financeInput(
                "debtBalance",
                "Current Debt",
                "50000"
            )}


            ${financeInput(
                "debtRate",
                "Annual Interest Rate (%)",
                "10",
                "0.01"
            )}


            ${financeInput(
                "debtPayment",
                "Monthly Payment",
                "2000"
            )}


        </div>


        <button
            type="button"
            class="finance-calculate"
            onclick="calculateDebt()">

            ⚡ Calculate Debt

        </button>


        <div
            id="debtResult"
            class="finance-result">

            Enter your debt information.

        </div>

    `;

}


/*==================================================*
 * CALCULATE DEBT
 *==================================================*/

function calculateDebt() {

    const balance =
        Number(
            document.getElementById(
                "debtBalance"
            ).value
        );


    const annualRate =
        Number(
            document.getElementById(
                "debtRate"
            ).value
        );


    const payment =
        Number(
            document.getElementById(
                "debtPayment"
            ).value
        );


    const result =
        document.getElementById(
            "debtResult"
        );


    if (!result) return;


    if (
        balance <= 0 ||
        payment <= 0 ||
        annualRate < 0
    ) {

        result.innerHTML =
            "⚠️ Please enter valid values.";

        return;

    }


    const monthlyRate =
        annualRate / 100 / 12;


    if (
        monthlyRate > 0 &&
        payment <=
        balance * monthlyRate
    ) {

        result.innerHTML = `
            ⚠️ Your monthly payment is too
            small to pay off this debt.
        `;

        return;

    }


    let months = 0;

    let currentBalance =
        balance;


    while (
        currentBalance > 0 &&
        months < 1200
    ) {

        currentBalance =
            currentBalance *
            (1 + monthlyRate) -
            payment;

        months++;

    }


    if (months >= 1200) {

        result.innerHTML =
            "⚠️ The debt could not be paid off within the calculation limit.";

        return;

    }


    const totalPaid =
        months * payment;


    const interest =
        Math.max(
            0,
            totalPaid - balance
        );


    result.innerHTML = `

        <div class="result-main">

            <span>
                ESTIMATED PAYOFF
            </span>


            <strong>

                ${Math.floor(months / 12)}
                years
                ${months % 12}
                months

            </strong>

        </div>


        <div class="result-grid">


            <div>

                <span>
                    Starting Debt
                </span>

                <strong>
                    ${formatMoney(balance)}
                </strong>

            </div>


            <div>

                <span>
                    Monthly Payment
                </span>

                <strong>
                    ${formatMoney(payment)}
                </strong>

            </div>


            <div>

                <span>
                    Estimated Interest
                </span>

                <strong>
                    ${formatMoney(interest)}
                </strong>

            </div>


        </div>

    `;

}


/*==================================================*
 * CREDIT CALCULATOR
 *==================================================*/

function showCreditCalculator(container) {

    container.innerHTML = `

        ${financeHeader(
            "💳",
            "Credit Calculator",
            "Estimate your credit utilization ratio."
        )}


        <div class="finance-form-grid">


            ${financeInput(
                "creditBalance",
                "Current Credit Balance",
                "25000"
            )}


            ${financeInput(
                "creditLimit",
                "Total Credit Limit",
                "100000"
            )}


        </div>


        <button
            type="button"
            class="finance-calculate"
            onclick="calculateCredit()">

            ⚡ Calculate Credit

        </button>


        <div
            id="creditResult"
            class="finance-result">

            Enter your credit balance and limit.

        </div>

    `;

}


/*==================================================*
 * CALCULATE CREDIT
 *==================================================*/

function calculateCredit() {

    const balance =
        Number(
            document.getElementById(
                "creditBalance"
            ).value
        );


    const limit =
        Number(
            document.getElementById(
                "creditLimit"
            ).value
        );


    const result =
        document.getElementById(
            "creditResult"
        );


    if (!result) return;


    if (
        balance < 0 ||
        limit <= 0 ||
        balance > limit
    ) {

        result.innerHTML =
            "⚠️ Please enter a valid balance and credit limit.";

        return;

    }


    const utilization =
        (balance / limit) * 100;


    let status;


    if (utilization <= 10) {

        status = "Excellent";

    }

    else if (utilization <= 30) {

        status = "Good";

    }

    else if (utilization <= 50) {

        status = "Moderate";

    }

    else {

        status = "High";

    }


    result.innerHTML = `

        <div class="result-main">

            <span>
                CREDIT UTILIZATION
            </span>


            <strong>
                ${utilization.toFixed(2)}%
            </strong>

        </div>


        <div class="credit-meter">

            <div
                style="
                    width:${Math.min(
                        utilization,
                        100
                    )}%;
                ">
            </div>

        </div>


        <div class="credit-status">

            Status:

            <strong>
                ${status}
            </strong>

        </div>

    `;

}


/*==================================================*
 * LOAN AMORTIZATION
 *==================================================*/

function showAmortizationCalculator(container) {

    container.innerHTML = `

        ${financeHeader(
            "📊",
            "Loan Amortization",
            "Generate an estimated loan payment schedule."
        )}


        <div class="finance-form-grid">


            ${financeInput(
                "amortAmount",
                "Loan Amount",
                "100000"
            )}


            ${financeInput(
                "amortRate",
                "Annual Interest Rate (%)",
                "6.5",
                "0.01"
            )}


            ${financeInput(
                "amortYears",
                "Loan Term (Years)",
                "5"
            )}


        </div>


        <button
            type="button"
            class="finance-calculate"
            onclick="calculateAmortization()">

            ⚡ Generate Schedule

        </button>


        <div
            id="amortResult"
            class="finance-result">

            Enter loan information.

        </div>

    `;

}


/*==================================================*
 * CALCULATE AMORTIZATION
 *==================================================*/

function calculateAmortization() {

    const amount =
        Number(
            document.getElementById(
                "amortAmount"
            ).value
        );


    const annualRate =
        Number(
            document.getElementById(
                "amortRate"
            ).value
        );


    const years =
        Number(
            document.getElementById(
                "amortYears"
            ).value
        );


    const result =
        document.getElementById(
            "amortResult"
        );


    if (!result) return;


    if (
        amount <= 0 ||
        annualRate < 0 ||
        years <= 0
    ) {

        result.innerHTML =
            "⚠️ Please enter valid values.";

        return;

    }


    const rate =
        annualRate / 100 / 12;


    const months =
        Math.round(
            years * 12
        );


    let payment;


    if (rate === 0) {

        payment =
            amount / months;

    }

    else {

        payment =
            amount *
            (
                rate *
                Math.pow(
                    1 + rate,
                    months
                )
            ) /
            (
                Math.pow(
                    1 + rate,
                    months
                ) - 1
            );

    }


    let balance =
        amount;


    let rows = "";


    const displayMonths =
        Math.min(
            months,
            12
        );


    for (
        let month = 1;
        month <= displayMonths;
        month++
    ) {

        const interest =
            balance * rate;


        const principal =
            payment - interest;


        balance =
            Math.max(
                0,
                balance - principal
            );


        rows += `

            <tr>

                <td>
                    ${month}
                </td>


                <td>
                    ${formatMoney(payment)}
                </td>


                <td>
                    ${formatMoney(principal)}
                </td>


                <td>
                    ${formatMoney(interest)}
                </td>


                <td>
                    ${formatMoney(balance)}
                </td>

            </tr>

        `;

    }


    result.innerHTML = `

        <div class="result-main">

            <span>
                MONTHLY PAYMENT
            </span>


            <strong>
                ${formatMoney(payment)}
            </strong>

        </div>


        <div class="amort-table-wrapper">

            <table class="amort-table">

                <thead>

                    <tr>

                        <th>Month</th>
                        <th>Payment</th>
                        <th>Principal</th>
                        <th>Interest</th>
                        <th>Balance</th>

                    </tr>

                </thead>


                <tbody>

                    ${rows}

                </tbody>

            </table>

        </div>


        <small class="finance-note">

            Showing the first
            ${displayMonths}
            months of the estimated schedule.

        </small>

    `;

}


/*==================================================*
 * DTI CALCULATOR
 *==================================================*/

function showDTICalculator(container) {

    container.innerHTML = `

        ${financeHeader(
            "📈",
            "DTI Calculator",
            "Calculate your Debt-to-Income ratio."
        )}


        <div class="finance-form-grid">


            ${financeInput(
                "dtiIncome",
                "Gross Monthly Income",
                "50000"
            )}


            ${financeInput(
                "dtiDebt",
                "Monthly Debt Payments",
                "15000"
            )}


        </div>


        <button
            type="button"
            class="finance-calculate"
            onclick="calculateDTI()">

            ⚡ Calculate DTI

        </button>


        <div
            id="dtiResult"
            class="finance-result">

            Enter your income and monthly debt.

        </div>

    `;

}


/*==================================================*
 * CALCULATE DTI
 *==================================================*/

function calculateDTI() {

    const income =
        Number(
            document.getElementById(
                "dtiIncome"
            ).value
        );


    const debt =
        Number(
            document.getElementById(
                "dtiDebt"
            ).value
        );


    const result =
        document.getElementById(
            "dtiResult"
        );


    if (!result) return;


    if (
        income <= 0 ||
        debt < 0
    ) {

        result.innerHTML =
            "⚠️ Please enter valid values.";

        return;

    }


    const dti =
        (debt / income) * 100;


    let status;


    if (dti <= 20) {

        status = "Excellent";

    }

    else if (dti <= 35) {

        status = "Good";

    }

    else if (dti <= 43) {

        status = "Moderate";

    }

    else {

        status = "High";

    }


    result.innerHTML = `

        <div class="result-main">

            <span>
                DEBT-TO-INCOME RATIO
            </span>


            <strong>
                ${dti.toFixed(2)}%
            </strong>

        </div>


        <div class="dti-status">

            Status:

            <strong>
                ${status}
            </strong>

        </div>

    `;

}


/*==================================================*
 * FINANCIAL CALCULATOR
 *==================================================*/

function showFinancialCalculator(container) {

    container.innerHTML = `

        ${financeHeader(
            "🧮",
            "Financial Calculator",
            "Calculate future value, savings, and financial growth."
        )}


        <div class="finance-form-grid">


            ${financeInput(
                "financialInitial",
                "Initial Amount",
                "10000"
            )}


            ${financeInput(
                "financialMonthly",
                "Monthly Contribution",
                "2000"
            )}


            ${financeInput(
                "financialRate",
                "Annual Growth Rate (%)",
                "5",
                "0.01"
            )}


            ${financeInput(
                "financialYears",
                "Investment Period (Years)",
                "10"
            )}


        </div>


        <button
            type="button"
            class="finance-calculate"
            onclick="calculateFinancial()">

            ⚡ Calculate Future Value

        </button>


        <div
            id="financialResult"
            class="finance-result">

            Enter your financial information.

        </div>

    `;

}


/*==================================================*
 * CALCULATE FINANCIAL
 *==================================================*/

function calculateFinancial() {

    const initial =
        Number(
            document.getElementById(
                "financialInitial"
            ).value
        );


    const monthly =
        Number(
            document.getElementById(
                "financialMonthly"
            ).value
        );


    const annualRate =
        Number(
            document.getElementById(
                "financialRate"
            ).value
        );


    const years =
        Number(
            document.getElementById(
                "financialYears"
            ).value
        );


    const result =
        document.getElementById(
            "financialResult"
        );


    if (!result) return;


    if (
        initial < 0 ||
        monthly < 0 ||
        annualRate < 0 ||
        years <= 0
    ) {

        result.innerHTML =
            "⚠️ Please enter valid values.";

        return;

    }


    const rate =
        annualRate / 100 / 12;


    const months =
        Math.round(
            years * 12
        );


    let futureValue;


    if (rate === 0) {

        futureValue =
            initial +
            monthly * months;

    }

    else {

        futureValue =
            initial *
            Math.pow(
                1 + rate,
                months
            );


        futureValue +=
            monthly *
            (
                (
                    Math.pow(
                        1 + rate,
                        months
                    ) - 1
                ) / rate
            );

    }


    const contributed =
        initial +
        monthly * months;


    const growth =
        futureValue -
        contributed;


    result.innerHTML = `

        <div class="result-main">

            <span>
                FUTURE VALUE
            </span>


            <strong>
                ${formatMoney(futureValue)}
            </strong>

        </div>


        <div class="result-grid">


            <div>

                <span>
                    Total Contributions
                </span>

                <strong>
                    ${formatMoney(contributed)}
                </strong>

            </div>


            <div>

                <span>
                    Estimated Growth
                </span>

                <strong>
                    ${formatMoney(growth)}
                </strong>

            </div>


        </div>

    `;

}


/*==================================================*
 * COMPOUND INTEREST
 *==================================================*/

function showCompoundCalculator(container) {

    container.innerHTML = `

        ${financeHeader(
            "📈",
            "Compound Interest",
            "Calculate how money grows through compound interest."
        )}


        <div class="finance-form-grid">


            ${financeInput(
                "compoundPrincipal",
                "Principal",
                "10000"
            )}


            ${financeInput(
                "compoundRate",
                "Annual Interest Rate (%)",
                "5",
                "0.01"
            )}


            ${financeInput(
                "compoundYears",
                "Time (Years)",
                "10"
            )}


            ${financeInput(
                "compoundFrequency",
                "Compounds Per Year",
                "12"
            )}


        </div>


        <button
            type="button"
            class="finance-calculate"
            onclick="calculateCompound()">

            ⚡ Calculate Compound Interest

        </button>


        <div
            id="compoundResult"
            class="finance-result">

            Enter your investment information.

        </div>

    `;

}


/*==================================================*
 * CALCULATE COMPOUND
 *==================================================*/

function calculateCompound() {

    const principal =
        Number(
            document.getElementById(
                "compoundPrincipal"
            ).value
        );


    const rate =
        Number(
            document.getElementById(
                "compoundRate"
            ).value
        );


    const years =
        Number(
            document.getElementById(
                "compoundYears"
            ).value
        );


    const frequency =
        Number(
            document.getElementById(
                "compoundFrequency"
            ).value
        );


    const result =
        document.getElementById(
            "compoundResult"
        );


    if (!result) return;


    if (
        principal < 0 ||
        rate < 0 ||
        years <= 0 ||
        frequency <= 0
    ) {

        result.innerHTML =
            "⚠️ Please enter valid values.";

        return;

    }


    const amount =
        principal *
        Math.pow(
            1 +
            (rate / 100) /
            frequency,

            frequency * years
        );


    const interest =
        amount -
        principal;


    result.innerHTML = `

        <div class="result-main">

            <span>
                FINAL AMOUNT
            </span>


            <strong>
                ${formatMoney(amount)}
            </strong>

        </div>


        <div class="result-grid">


            <div>

                <span>
                    Principal
                </span>

                <strong>
                    ${formatMoney(principal)}
                </strong>

            </div>


            <div>

                <span>
                    Interest Earned
                </span>

                <strong>
                    ${formatMoney(interest)}
                </strong>

            </div>


        </div>

    `;

}


/*==================================================*
 * SIMPLE INTEREST
 *==================================================*/

function showSimpleCalculator(container) {

    container.innerHTML = `

        ${financeHeader(
            "💰",
            "Simple Interest",
            "Calculate interest using the simple interest formula."
        )}


        <div class="finance-form-grid">


            ${financeInput(
                "simplePrincipal",
                "Principal",
                "10000"
            )}


            ${financeInput(
                "simpleRate",
                "Annual Interest Rate (%)",
                "5",
                "0.01"
            )}


            ${financeInput(
                "simpleYears",
                "Time (Years)",
                "5"
            )}


        </div>


        <button
            type="button"
            class="finance-calculate"
            onclick="calculateSimple()">

            ⚡ Calculate Simple Interest

        </button>


        <div
            id="simpleResult"
            class="finance-result">

            Enter your financial information.

        </div>

    `;

}


/*==================================================*
 * CALCULATE SIMPLE INTEREST
 *==================================================*/

function calculateSimple() {

    const principal =
        Number(
            document.getElementById(
                "simplePrincipal"
            ).value
        );


    const rate =
        Number(
            document.getElementById(
                "simpleRate"
            ).value
        );


    const years =
        Number(
            document.getElementById(
                "simpleYears"
            ).value
        );


    const result =
        document.getElementById(
            "simpleResult"
        );


    if (!result) return;


    if (
        principal < 0 ||
        rate < 0 ||
        years <= 0
    ) {

        result.innerHTML =
            "⚠️ Please enter valid values.";

        return;

    }


    const interest =
        principal *
        (rate / 100) *
        years;


    const total =
        principal +
        interest;


    result.innerHTML = `

        <div class="result-main">

            <span>
                TOTAL AMOUNT
            </span>


            <strong>
                ${formatMoney(total)}
            </strong>

        </div>


        <div class="result-grid">


            <div>

                <span>
                    Principal
                </span>

                <strong>
                    ${formatMoney(principal)}
                </strong>

            </div>


            <div>

                <span>
                    Interest
                </span>

                <strong>
                    ${formatMoney(interest)}
                </strong>

            </div>


        </div>

    `;

}


/*==================================================*
 * MONEY FORMATTER
 *==================================================*/

function formatMoney(value) {

    return new Intl.NumberFormat(
        "en-PH",
        {
            style: "currency",
            currency: "PHP"
        }
    ).format(value);

}


/*==================================================*
 * GLOBAL REGISTRATION
 *==================================================*/

window.loadPersonalFinance =
    loadPersonalFinance;


window.loadFinanceCalculator =
    loadFinanceCalculator;


window.calculateLoan =
    calculateLoan;


window.calculateDebt =
    calculateDebt;


window.calculateCredit =
    calculateCredit;


window.calculateAmortization =
    calculateAmortization;


window.calculateDTI =
    calculateDTI;


window.calculateFinancial =
    calculateFinancial;


window.calculateCompound =
    calculateCompound;


window.calculateSimple =
    calculateSimple;


console.log(
    "✅ Personal Finance functions registered"
);