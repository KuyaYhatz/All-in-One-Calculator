console.log("✅ atomIQ.js loaded");

/*==================================================*
* ATOMIQ SCIENCE ASSISTANT
*==================================================*/

function generateAtomIQResponse(
    substance,
    selectedElements
) {

    console.log("🧠 AtomIQ function called");
    console.log("Substance:", substance);
    console.log("Selected Elements:", selectedElements);


    /*=========================================
    NO SUBSTANCE
    =========================================*/

    if (!substance) {

        return `

            <div class="atomIQ-response">

                <div class="atomIQ-profile">

                    <div class="atomIQ-avatar">
                        <img
                            src="../img/AtomIQ.png"
                            alt="AtomIQ"
                        >
                    </div>

                    <div>

                        <h3>
                            AtomIQ
                        </h3>

                        <span>
                            Science Assistant
                        </span>

                    </div>

                </div>


                <div class="atomIQ-message">

                    <p>
                        👋 Hello!
                        I'm <strong>AtomIQ</strong>.
                    </p>

                    <p>
                        I couldn't identify a
                        verified substance from
                        this combination.
                    </p>

                </div>

            </div>

        `;

    }


    /*=========================================
    BUILD ELEMENT COMPOSITION
    =========================================*/

    const composition =
        Object.entries(
            substance.elements
        )

        .map(([symbol, quantity]) => {

            const element =
                selectedElements.find(
                    e =>
                        e.symbol.toLowerCase() ===
                        symbol.toLowerCase()
                );


            if (!element) {

                return `
                    ${quantity} × ${symbol}
                `;

            }


            return `
                ${quantity} ×
                ${element.name}
                (${element.symbol})
            `;

        })

        .join(" and ");


    /*=========================================
    FORMULA CALCULATION
    =========================================*/

    const formulaCalculation =
        Object.entries(
            substance.elements
        )

        .map(([symbol, quantity]) => {

            const element =
                selectedElements.find(
                    e =>
                        e.symbol.toLowerCase() ===
                        symbol.toLowerCase()
                );


            const elementName =
                element
                    ? element.name
                    : symbol;


            return `

                <div class="formula-calculation-row">

                    <span class="formula-symbol">

                        ${symbol}

                    </span>


                    <span class="formula-multiply">

                        ×

                    </span>


                    <span class="formula-quantity">

                        ${quantity}

                    </span>


                    <span class="formula-equals">

                        =

                    </span>


                    <span class="formula-description">

                        ${quantity}
                        ${quantity > 1
                            ? "atoms"
                            : "atom"}
                        of
                        ${elementName}

                    </span>

                </div>

            `;

        })

        .join("");


    /*=========================================
    BUILD SIMPLE SYMBOL EXPRESSION
    =========================================*/

    const symbolExpression =
        Object.entries(
            substance.elements
        )

        .map(([symbol, quantity]) => {

            if (quantity === 1) {

                return symbol;

            }

            return `${symbol}<sup>${quantity}</sup>`;

        })

        .join(" + ");


    /*=========================================
    ATOMIQ RESPONSE
    =========================================*/

    return `

        <div class="atomIQ-response">

            <!-- =====================================
                STATIC HEADER
            ====================================== -->

            <div class="atomIQ-header">

                <!-- SUBSTANCE SYMBOL -->

                <div class="atomIQ-substance-symbol-box">

                    <div class="atomIQ-substance-symbol">
                        ${substance.displayFormula}
                    </div>

                </div>


                <!-- SUBSTANCE NAME -->

                <h2 class="atomIQ-substance-name">
                    ${substance.name}
                </h2>


                <!-- CATEGORY -->

                <div class="atomIQ-substance-category">
                    ${substance.category}
                </div>


                <!-- ATOMIQ PROFILE -->

                <div class="atomIQ-profile">

                    <div class="atomIQ-avatar">

                        <img
                            src="../img/AtomIQ.png"
                            alt="AtomIQ"
                        >

                    </div>


                    <div class="atomIQ-profile-info">

                        <h3>
                            AtomIQ
                        </h3>

                        <span>
                            Science Assistant
                        </span>

                    </div>

                </div>

            </div>


            <!-- =====================================
                SCROLLABLE BODY
            ====================================== -->

            <div class="atomIQ-body">

                <div class="atomIQ-message">

                    <p>

                        👋 Hello!
                        I'm <strong>AtomIQ</strong>.

                        Great job exploring chemistry! 🔬

                    </p>


                    <!-- SUBSTANCE IDENTIFIED -->

                    <div class="atomIQ-result">

                        <h3>
                            🧪 Substance Identified
                        </h3>

                        <div class="atomIQ-formula">
                            ${substance.displayFormula}
                        </div>

                        <strong>
                            ${substance.name}
                        </strong>

                    </div>


                    <!-- FORMULA CALCULATION -->

                    <div class="atomIQ-formula-calculation">

                        <h3>
                            🧮 Formula Calculation
                        </h3>


                        <p class="formula-introduction">

                            Here's how the selected elements
                            combine to form

                            <strong>
                                ${substance.displayFormula}
                            </strong>.

                        </p>


                        <div class="formula-symbol-expression">

                            ${symbolExpression}

                        </div>


                        <div class="formula-calculation-list">

                            ${formulaCalculation}

                        </div>


                        <div class="formula-final-result">

                            <span>
                                Result
                            </span>

                            <strong>
                                ${substance.displayFormula}
                            </strong>

                        </div>

                    </div>


                    <!-- EXPLANATION -->

                    <div class="atomIQ-explanation">

                        <h3>
                            🔎 My Explanation
                        </h3>


                        <p>

                            The elements you selected
                            correspond to the known substance

                            <strong>
                                ${substance.name}
                            </strong>.

                        </p>


                        <p>

                            This substance contains

                            <strong>
                                ${composition}
                            </strong>.

                        </p>


                        <p>

                            Its chemical formula is

                            <strong>
                                ${substance.displayFormula}
                            </strong>.

                        </p>


                        <p>

                            It is classified as a

                            <strong>
                                ${substance.category}
                            </strong>.

                        </p>

                    </div>


                    <!-- CHEMICAL REACTION -->

                    <div class="atomIQ-equation">

                        <h3>
                            ⚗ Chemical Reaction
                        </h3>


                        <div class="atomIQ-equation-display">

                            ${substance.equation}

                        </div>

                    </div>


                    <!-- ABOUT -->

                    <div class="atomIQ-explanation">

                        <h3>
                            📖 About This Substance
                        </h3>


                        <p>
                            ${substance.description}
                        </p>

                    </div>


                    <!-- SUPPORTING EXPRESSION -->

                    <div class="atomIQ-support">

                        <h3>
                            💡 Supporting Expression
                        </h3>


                        <p>

                            Excellent work! 🌟

                            You're not just memorizing
                            elements — you're learning how
                            they can form different chemical
                            substances.

                            Keep exploring chemistry
                            with AtomIQ! 🧠🔬✨

                        </p>

                    </div>

                </div>

            </div>

        </div>

    `;

}

window.generateAtomIQResponse =
    generateAtomIQResponse;