console.log("✅ combination.js loaded");


/*==================================================*
 * LOAD COMBINATION
 *==================================================*/

function loadCombination() {

    console.log("⚗ Loading Combination...");

    const canvas =
        document.getElementById("canvas");

    if (!canvas) {

        console.error(
            "❌ Canvas not found"
        );

        return;
    }


    canvas.innerHTML = `

        <div class="combination-container">


            <!-- =========================================
                 HEADER
            ========================================== -->

            <div class="combination-title">

                <h1>
                    ⚗ Combination of Elements
                </h1>

                <p>
                    Combine two or more elements to discover
                    their possible substances and compounds.
                </p>

            </div>



            <!-- =========================================
                 MAIN LAYOUT
            ========================================== -->

            <div class="combination-layout">


                <!-- =====================================
                     LEFT — ELEMENT BUILDER
                ====================================== -->

                <section class="combination-builder">


                    <!-- STATIC BUILDER -->

                    <div class="combination-builder-static">

                        <h2>
                            ⚛ Combine Elements
                        </h2>

                        <p>
                            Enter an Element Symbol, Name,
                            or Atomic Number and specify
                            the number of atoms.
                        </p>


                        <!-- =================================
                             ELEMENT INPUTS
                        ================================== -->

                        <div
                            id="elementInputs"
                            class="element-inputs-container"
                        >


                            <!-- ELEMENT 1 -->

                            <div
                                class="element-input"
                                data-element-row="1"
                            >

                                <input
                                    type="text"
                                    class="combine-input"
                                    placeholder="C, Carbon, or 6"
                                    autocomplete="off"
                                >


                                <div class="atom-count-control">

                                    <label>
                                        Atoms
                                    </label>

                                    <input
                                        type="number"
                                        class="element-count-input"
                                        value="1"
                                        min="1"
                                        step="1"
                                        inputmode="numeric"
                                        title="Enter the number of atoms"
                                    >

                                </div>

                            </div>



                            <!-- ELEMENT 2 -->

                            <div
                                class="element-input"
                                data-element-row="2"
                            >

                                <input
                                    type="text"
                                    class="combine-input"
                                    placeholder="O, Oxygen, or 8"
                                    autocomplete="off"
                                >


                                <div class="atom-count-control">

                                    <label>
                                        Atoms
                                    </label>

                                    <input
                                        type="number"
                                        class="element-count-input"
                                        value="1"
                                        min="1"
                                        step="1"
                                        inputmode="numeric"
                                        title="Enter the number of atoms"
                                    >

                                </div>

                            </div>


                        </div>



                        <!-- =================================
                             ACTION BUTTONS
                        ================================== -->

                        <div class="combination-actions">

                            <button
                                type="button"
                                id="addElementButton"
                                class="add-element-button"
                            >
                                + Add Element
                            </button>


                            <button
                                type="button"
                                id="combineButton"
                                class="combine-button"
                            >
                                ⚗ Combine
                            </button>

                        </div>



                        <!-- =================================
                             PREVIEW
                        ================================== -->

                        <div
                            id="combinationPreview"
                            class="combination-preview"
                        >

                            <p>
                                Your selected elements
                                will appear here.
                            </p>

                        </div>


                    </div>



                    <!-- =====================================
                         LEFT — ELEMENT INFORMATION
                    ====================================== -->

                    <div
                        id="combinationElementDetails"
                        class="combination-element-details"
                    >

                        <div class="empty-element-details">

                            <div class="empty-element-icon">
                                ⚛
                            </div>

                            <h3>
                                Element Information
                            </h3>

                            <p>
                                Element information will
                                appear here after you combine
                                the elements.
                            </p>

                        </div>

                    </div>


                </section>



                <!-- =====================================
                     RIGHT — ATOMIQ
                ====================================== -->

                <section
                    id="substanceDetails"
                    class="substance-details"
                >


                    <!-- =================================
                         STATIC ATOMIQ PROFILE

                         IMPORTANT:
                         THIS IS THE ONLY PROFILE.
                    ================================== -->

                    <div class="combination-atomiq-static">

                        <div class="atomIQ-profile">

                            <div class="atomIQ-avatar">

                                <img
                                    src="../img/AtomIQ.png"
                                    alt="AtomIQ Profile"
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

                    </div>



                    <!-- =================================
                         ATOMIQ RESPONSE AREA

                         PROFILE IS NOT HERE.
                    ================================== -->

                    <div
                        id="atomIQResponseContent"
                        class="combination-atomiq-scroll"
                    >

                        <div class="empty-substance">

                            <div>
                                🧪
                            </div>

                            <h3>
                                Ready to Analyze
                            </h3>

                            <p>
                                Combine elements on the left
                                and I'll analyze the result.
                            </p>

                        </div>

                    </div>


                </section>


            </div>


        </div>

    `;



    /*=========================================
     * BUTTONS
     *=========================================*/

    const addButton =
        document.getElementById(
            "addElementButton"
        );


    const combineButton =
        document.getElementById(
            "combineButton"
        );



    if (addButton) {

        addButton.addEventListener(
            "click",
            addCombinationElement
        );

    }



    if (combineButton) {

        combineButton.addEventListener(
            "click",
            combineElements
        );

    }



    /*=========================================
     * INPUT EVENTS
     *=========================================*/

    attachCombinationInputEvents();


    /*=========================================
     * INITIAL PREVIEW
     *=========================================*/

    updateCombinationPreview();


    console.log(
        "✅ Combination loaded successfully"
    );

}



/*==================================================*
 * ATTACH INPUT EVENTS
 *==================================================*/

function attachCombinationInputEvents() {

    const container =
        document.getElementById(
            "elementInputs"
        );


    if (!container) {
        return;
    }


    const textInputs =
        container.querySelectorAll(
            ".combine-input"
        );


    const numberInputs =
        container.querySelectorAll(
            ".element-count-input"
        );



    textInputs.forEach(input => {

        input.addEventListener(
            "input",
            updateCombinationPreview
        );

    });



    numberInputs.forEach(input => {

        input.addEventListener(
            "input",
            function () {

                normalizeAtomCount(
                    input
                );

                updateCombinationPreview();

            }
        );


        input.addEventListener(
            "change",
            function () {

                normalizeAtomCount(
                    input
                );

                updateCombinationPreview();

            }
        );

    });

}



/*==================================================*
 * NORMALIZE ATOM COUNT
 * USER-DEFINED ATOM QUANTITY
 *==================================================*/

function normalizeAtomCount(input) {

    if (!input) {
        return 1;
    }

    let value = parseInt(
        input.value,
        10
    );

    /*
     * EMPTY / INVALID
     */

    if (
        Number.isNaN(value) ||
        value < 1
    ) {

        value = 1;

    }

    /*
     * NO MAXIMUM LIMIT
     *
     * The user decides
     * how many atoms to enter.
     */

    input.value = value;

    return value;
}



/*==================================================*
 * CREATE NUMBER INPUT
 * USER-DEFINED ATOM COUNT
 *==================================================*/

function createElementCountInput() {

    const wrapper =
        document.createElement("div");

    wrapper.className =
        "atom-count-control";


    const label =
        document.createElement("label");

    label.textContent =
        "Atoms";


    const input =
        document.createElement("input");

    input.type =
        "number";

    input.className =
        "element-count-input";

    input.value =
        "1";

    input.min =
        "1";

    input.step =
        "1";

    input.inputMode =
        "numeric";

    input.title =
        "Enter the number of atoms";


    input.addEventListener(
        "input",
        function () {

            normalizeAtomCount(input);

            updateCombinationPreview();

        }
    );


    input.addEventListener(
        "change",
        function () {

            normalizeAtomCount(input);

            updateCombinationPreview();

        }
    );


    wrapper.appendChild(label);

    wrapper.appendChild(input);

    return wrapper;
}



/*==================================================*
 * ADD COMBINATION ELEMENT
 *==================================================*/

function addCombinationElement() {

    const container =
        document.getElementById(
            "elementInputs"
        );


    if (!container) {

        console.error(
            "❌ elementInputs not found"
        );

        return;

    }



    const inputWrapper =
        document.createElement(
            "div"
        );


    inputWrapper.className =
        "element-input";


    inputWrapper.dataset.elementRow =
        Date.now();



    /*=========================================
     * TEXT INPUT
     *=========================================*/

    const input =
        document.createElement(
            "input"
        );


    input.type =
        "text";


    input.className =
        "combine-input";


    input.placeholder =
        "Symbol, Name, or Atomic Number";


    input.autocomplete =
        "off";


    input.addEventListener(
        "input",
        updateCombinationPreview
    );



    /*=========================================
     * NUMBER INPUT
     *=========================================*/

    const countControl =
        createElementCountInput();



    /*=========================================
     * REMOVE BUTTON
     *=========================================*/

    const removeButton =
        document.createElement(
            "button"
        );


    removeButton.type =
        "button";


    removeButton.className =
        "remove-element-button";


    removeButton.textContent =
        "×";


    removeButton.title =
        "Remove Element";


    removeButton.setAttribute(
        "aria-label",
        "Remove Element"
    );


    removeButton.addEventListener(
        "click",
        function () {

            inputWrapper.remove();

            updateCombinationPreview();

        }
    );



    /*=========================================
     * APPEND
     *=========================================*/

    inputWrapper.appendChild(
        input
    );


    inputWrapper.appendChild(
        countControl
    );


    inputWrapper.appendChild(
        removeButton
    );


    container.appendChild(
        inputWrapper
    );


    updateCombinationPreview();

}



/*==================================================*
 * FIND ELEMENT
 *==================================================*/

function findElement(inputValue) {

    const value =
        String(inputValue)
            .trim()
            .toLowerCase();


    if (!value) {
        return null;
    }


    if (
        typeof elements ===
        "undefined"
    ) {

        console.error(
            "❌ elements database not found"
        );

        return null;

    }



    for (
        const key in elements
    ) {

        const element =
            elements[key];


        /* NAME */

        if (
            element.name &&
            element.name
                .toLowerCase() === value
        ) {

            return element;

        }


        /* SYMBOL */

        if (
            element.symbol &&
            element.symbol
                .toLowerCase() === value
        ) {

            return element;

        }


        /* ATOMIC NUMBER */

        if (
            String(element.number) ===
            value
        ) {

            return element;

        }

    }


    return null;

}



/*==================================================*
 * UPDATE PREVIEW
 *==================================================*/

function updateCombinationPreview() {

    const preview =
        document.getElementById(
            "combinationPreview"
        );


    const container =
        document.getElementById(
            "elementInputs"
        );


    if (
        !preview ||
        !container
    ) {

        return;

    }



    const rows =
        container.querySelectorAll(
            ".element-input"
        );


    const previewItems =
        [];



    rows.forEach(row => {

        const input =
            row.querySelector(
                ".combine-input"
            );


        const countInput =
            row.querySelector(
                ".element-count-input"
            );


        if (
            !input ||
            !countInput
        ) {

            return;

        }



        const value =
            input.value.trim();


        const count =
            normalizeAtomCount(
                countInput
            );



        if (!value) {
            return;
        }



        const element =
            findElement(
                value
            );


        if (element) {

            previewItems.push({

                symbol:
                    element.symbol,

                name:
                    element.name,

                count:
                    count

            });

        }

    });



    /*=========================================
     * EMPTY
     *=========================================*/

    if (
        previewItems.length === 0
    ) {

        preview.innerHTML = `

            <p>
                Your selected elements
                will appear here.
            </p>

        `;

        return;

    }



    /*=========================================
     * PREVIEW
     *=========================================*/

    preview.innerHTML = `

        <div class="combination-preview-title">

            ⚛ Selected Composition

        </div>


        <div class="combination-preview-list">

            ${previewItems.map(item => `

                <span
                    class="preview-element-item"
                >

                    ${item.symbol}

                    ${
                        item.count > 1
                            ? `<sup>${item.count}</sup>`
                            : ""
                    }

                </span>

            `).join("")}

        </div>

    `;

}



/*==================================================*
 * COMBINE ELEMENTS
 *==================================================*/

function combineElements() {

    console.log(
        "⚗ Combine button clicked"
    );


    const rows =
        document.querySelectorAll(
            "#elementInputs .element-input"
        );


    const selectedElements =
        [];


    const invalidValues =
        [];



    rows.forEach(row => {

        const input =
            row.querySelector(
                ".combine-input"
            );


        const countInput =
            row.querySelector(
                ".element-count-input"
            );


        if (
            !input ||
            !countInput
        ) {

            return;

        }



        const value =
            input.value.trim();


        const count =
            normalizeAtomCount(
                countInput
            );



        /* EMPTY */

        if (!value) {
            return;
        }



        const element =
            findElement(
                value
            );



        /* VALID */

        if (element) {

            selectedElements.push({

                element:
                    element,

                count:
                    count

            });

        }



        /* INVALID */

        else {

            invalidValues.push(
                value
            );

        }

    });



    console.log(
        "✅ Selected Elements:",
        selectedElements
    );


    console.log(
        "❌ Invalid Elements:",
        invalidValues
    );



    /*=========================================
     * INVALID ELEMENT
     *=========================================*/

    if (
        invalidValues.length > 0
    ) {

        showInvalidElementResponse(
            invalidValues
        );

        return;

    }



    /*=========================================
     * REQUIRE TWO ELEMENTS
     *=========================================*/

    if (
        selectedElements.length < 2
    ) {

        showAtomIQMessage(`

            <div class="atomIQ-result">

                <h3>
                    ⚠️ More Elements Required
                </h3>

            </div>


            <div class="atomIQ-explanation">

                <h3>
                    🔎 What did I find?
                </h3>

                <p>
                    Please enter at least
                    <strong>two valid elements</strong>
                    before combining them.
                </p>

                <p>
                    You can use an Element Symbol,
                    Element Name, or Atomic Number.
                </p>

            </div>

        `);

        return;

    }



    /*=========================================
     * LEFT SIDE
     *=========================================*/

    displayCombinationElementDetails(
        selectedElements
    );



    /*=========================================
     * RIGHT SIDE
     *=========================================*/

    identifySubstance(
        selectedElements
    );

}



/*==================================================*
 * LEFT ELEMENT DETAILS
 *==================================================*/

function displayCombinationElementDetails(
    selectedElements
) {

    const container =
        document.getElementById(
            "combinationElementDetails"
        );


    if (!container) {

        console.error(
            "❌ combinationElementDetails not found"
        );

        return;

    }



    container.innerHTML = `

        <div class="element-information-box">

            <h3>
                ⚛ Elements Involved
            </h3>


            <div class="combination-element-list">

                ${selectedElements.map(item => {

                    const e =
                        item.element || item;


                    const count =
                        Number(item.count) || 1;



                    return `

                        <div
                            class="combination-element-card"
                        >


                            <div
                                class="element-card-symbol"
                            >

                                ${e.symbol}

                                ${
                                    count > 1
                                        ? `<sup>${count}</sup>`
                                        : ""
                                }

                            </div>


                            <div
                                class="element-card-info"
                            >

                                <h4>
                                    ${e.name}
                                </h4>


                                <p>
                                    Atom Count:
                                    <strong>
                                        ${count}
                                    </strong>
                                </p>


                                <p>
                                    Atomic Number:
                                    <strong>
                                        ${e.number}
                                    </strong>
                                </p>


                                <p>
                                    Atomic Mass:
                                    <strong>
                                        ${e.mass} u
                                    </strong>
                                </p>


                                <p>
                                    Protons:
                                    <strong>
                                        ${e.protons}
                                    </strong>
                                </p>


                                <p>
                                    Electrons:
                                    <strong>
                                        ${e.electrons}
                                    </strong>
                                </p>


                                <p>
                                    Neutrons:
                                    <strong>
                                        ${e.neutrons}
                                    </strong>
                                </p>


                                <p>
                                    Electron Configuration:
                                    <strong>
                                        ${e.config}
                                    </strong>
                                </p>


                            </div>


                        </div>

                    `;

                }).join("")}

            </div>

        </div>

    `;

}



/*==================================================*
 * INVALID ELEMENT
 *
 * IMPORTANT:
 * NO ATOMIQ PROFILE HERE.
 *==================================================*/

function showInvalidElementResponse(
    invalidValues
) {

    const container =
        document.getElementById(
            "atomIQResponseContent"
        );


    if (!container) {
        return;
    }



    container.innerHTML = `

        <div class="atomIQ-message">


            <p>
                👋 Hello!
                I'm <strong>AtomIQ</strong>.
            </p>


            <div class="atomIQ-result">

                <h3>
                    ❌ Invalid Element
                </h3>

            </div>


            <div class="atomIQ-explanation">

                <h3>
                    🔎 What did I find?
                </h3>


                <p>
                    I couldn't identify
                    the following element
                    in my current database:
                </p>


                <p>

                    <strong>
                        ${invalidValues.join(", ")}
                    </strong>

                </p>


                <p>
                    Please enter a valid
                    Element Name, Symbol,
                    or Atomic Number.
                </p>

            </div>


        </div>

    `;

}



/*==================================================*
 * SIMPLE ATOMIQ MESSAGE
 *
 * PROFILE IS STATIC.
 * ONLY RESPONSE CHANGES.
 *==================================================*/

function showAtomIQMessage(
    message
) {

    const container =
        document.getElementById(
            "atomIQResponseContent"
        );


    if (!container) {
        return;
    }



    container.innerHTML = `

        <div class="atomIQ-message">

            ${message}

        </div>

    `;

}



/*==================================================*
 * SHOW SUBSTANCE DETAILS
 *==================================================*/

function showSubstanceDetails(
    substance,
    selectedElements
) {

    console.log(
        "🧪 showSubstanceDetails()"
    );


    const container =
        document.getElementById(
            "atomIQResponseContent"
        );


    if (!container) {
        return;
    }



    const formula =
        substance.displayFormula ||
        buildFormula(
            selectedElements
        );



    const calculation =
        selectedElements
            .map(item => {

                const e =
                    item.element || item;


                const count =
                    Number(item.count) || 1;


                return `
                    ${e.symbol}
                    ${
                        count > 1
                            ? `<sub>${count}</sub>`
                            : ""
                    }
                `;

            })
            .join(" + ");



    container.innerHTML = `

        <div class="atomIQ-message">


            <!-- GREETING -->

            <p>

                👋 Hello!
                I'm <strong>AtomIQ</strong>.

            </p>



            <!-- RESULT -->

            <div class="atomIQ-result">

                <h3>
                    🧪 Identified Substance
                </h3>


                <div class="atomIQ-formula">

                    ${formula}

                </div>

            </div>



            <!-- BASIC INFORMATION -->

            <div class="atomIQ-explanation">

                <h3>
                    🔬 Substance Information
                </h3>


                <p>

                    <strong>
                        ${
                            substance.name ||
                            "Unknown Substance"
                        }
                    </strong>

                </p>


                ${
                    substance.category
                        ? `

                            <p>

                                Category:
                                <strong>
                                    ${substance.category}
                                </strong>

                            </p>

                        `
                        : ""
                }


                ${
                    substance.properties &&
                    substance.properties.molecularMass
                        ? `

                            <p>

                                Molecular Mass:
                                <strong>
                                    ${
                                        substance.properties
                                            .molecularMass
                                    }
                                    g/mol
                                </strong>

                            </p>

                        `
                        : ""
                }

            </div>



            <!-- CHEMICAL EQUATION -->

            <div class="atomIQ-explanation">

                <h3>
                    ⚗ Chemical Equation
                </h3>


                <div class="chemical-equation">

                    ${
                        substance.equation ||
                        calculation
                    }

                </div>

            </div>



            <!-- FORMULA CALCULATION -->

            <div class="atomIQ-explanation">

                <h3>
                    🧮 Formula Calculation
                </h3>


                <p>

                    Selected composition:

                    <strong>
                        ${calculation}
                    </strong>

                </p>


                <p>

                    The selected atom quantities
                    produce the composition:

                    <strong>
                        ${formula}
                    </strong>

                </p>

            </div>



            <!-- WHAT DID I FIND -->

            <div class="atomIQ-explanation">

                <h3>
                    🔎 What did I find?
                </h3>


                <p>

                    I successfully identified
                    all of the elements you
                    entered.

                </p>


                <p>

                    The resulting composition is:

                    <strong>
                        ${formula}
                    </strong>

                </p>

            </div>



            <!-- ABOUT -->

            <div class="atomIQ-explanation">

                <h3>
                    📖 About This Substance
                </h3>


                <p>

                    ${
                        substance.description ||
                        "This substance was identified from the selected elemental composition."
                    }

                </p>

            </div>



            <!-- SUPPORT -->

            <div class="atomIQ-support">

                <h3>
                    💡 Try Another Combination
                </h3>


                <p>

                    Try another combination
                    of elements and AtomIQ
                    will analyze the result again.

                    🧪🔬

                </p>

            </div>


        </div>

    `;

}



/*==================================================*
 * IDENTIFY SUBSTANCE
 *==================================================*/

function identifySubstance(
    selectedElements
) {

    if (
        typeof substances ===
        "undefined"
    ) {

        console.error(
            "❌ substances database not found"
        );


        showAtomIQMessage(`

            <div class="atomIQ-result">

                <h3>
                    ⚠️ Database Error
                </h3>

            </div>


            <div class="atomIQ-explanation">

                <h3>
                    🔎 What happened?
                </h3>

                <p>
                    The substance database
                    was not loaded.
                </p>

            </div>

        `);

        return;

    }



    const composition = {};



    /*=========================================
     * BUILD COMPOSITION
     *=========================================*/

    selectedElements.forEach(item => {

        const e =
            item.element || item;


        const count =
            Number(item.count) || 1;


        const symbol =
            e.symbol;



        if (
            !composition[symbol]
        ) {

            composition[symbol] =
                0;

        }



        composition[symbol] +=
            count;

    });



    console.log(
        "🧪 Composition:",
        composition
    );



    /*=========================================
     * FIND SUBSTANCE
     *=========================================*/

    const substance =
        substances.find(
            substanceItem => {

                if (
                    !substanceItem.elements
                ) {

                    return false;

                }



                const keys =
                    Object.keys(
                        substanceItem.elements
                    );


                const selectedKeys =
                    Object.keys(
                        composition
                    );



                if (
                    keys.length !==
                    selectedKeys.length
                ) {

                    return false;

                }



                for (
                    const symbol of keys
                ) {

                    const required =
                        Number(
                            substanceItem
                                .elements[symbol] || 0
                        );


                    const selected =
                        Number(
                            composition[symbol] || 0
                        );



                    if (
                        required !==
                        selected
                    ) {

                        return false;

                    }

                }



                return true;

            }
        );



    /*=========================================
     * UNKNOWN
     *=========================================*/

    if (!substance) {

        showUnknownSubstance(
            selectedElements,
            composition
        );

        return;

    }



    /*=========================================
     * FOUND
     *=========================================*/

    showSubstanceDetails(
        substance,
        selectedElements
    );

}



/*==================================================*
 * BUILD FORMULA
 *==================================================*/

function buildFormula(
    selectedElements
) {

    return selectedElements
        .map(item => {

            const e =
                item.element || item;


            const count =
                Number(item.count) || 1;


            return `
                ${e.symbol}
                ${
                    count > 1
                        ? `<sub>${count}</sub>`
                        : ""
                }
            `;

        })
        .join("");

}



/*==================================================*
 * UNKNOWN SUBSTANCE
 *==================================================*/

function showUnknownSubstance(
    selectedElements,
    composition
) {

    const container =
        document.getElementById(
            "atomIQResponseContent"
        );


    if (!container) {
        return;
    }



    const formula =
        Object.entries(
            composition
        )
        .map(
            ([symbol, count]) => {

                return `
                    ${symbol}
                    ${
                        count > 1
                            ? `<sub>${count}</sub>`
                            : ""
                    }
                `;

            }
        )
        .join("");



    const elementNames =
        selectedElements
            .map(item => {

                const e =
                    item.element || item;


                const count =
                    Number(item.count) || 1;


                return count > 1
                    ? `${e.name} × ${count}`
                    : e.name;

            })
            .join(", ");



    container.innerHTML = `

        <div class="atomIQ-message">


            <!-- GREETING -->

            <p>

                👋 Hello!
                I'm <strong>AtomIQ</strong>.

            </p>



            <!-- RESULT -->

            <div class="atomIQ-result">

                <h3>
                    🧪 Element Combination
                </h3>


                <div class="atomIQ-formula">

                    ${formula}

                </div>

            </div>



            <!-- UNKNOWN -->

            <div class="atomIQ-explanation">

                <h3>
                    ⚠️ Unknown Combination
                </h3>


                <p>

                    The elements you selected
                    are valid, but this exact
                    composition was not found
                    in the current substance
                    database.

                </p>


                <p>

                    Selected elements:

                    <strong>
                        ${elementNames}
                    </strong>

                </p>

            </div>



            <!-- WHAT DID I FIND -->

            <div class="atomIQ-explanation">

                <h3>
                    🔎 What did I find?
                </h3>


                <p>

                    I successfully identified
                    all of the elements you
                    entered.

                </p>


                <p>

                    However, the composition

                    <strong>
                        ${formula}
                    </strong>

                    does not currently match
                    a known substance in the
                    database.

                </p>

            </div>



            <!-- SUPPORT -->

            <div class="atomIQ-support">

                <h3>
                    💡 Try Another Combination
                </h3>


                <p>

                    Try another combination
                    of elements and AtomIQ
                    will analyze it again.

                    🧪🔬

                </p>

            </div>


        </div>

    `;

}



/*==================================================*
 * GLOBAL FUNCTIONS
 *==================================================*/

window.loadCombination =
    loadCombination;


window.addCombinationElement =
    addCombinationElement;


window.combineElements =
    combineElements;


window.findElement =
    findElement;


window.displayCombinationElementDetails =
    displayCombinationElementDetails;


window.showSubstanceDetails =
    showSubstanceDetails;


window.identifySubstance =
    identifySubstance;


window.showUnknownSubstance =
    showUnknownSubstance;


window.showInvalidElementResponse =
    showInvalidElementResponse;


window.showAtomIQMessage =
    showAtomIQMessage;


window.updateCombinationPreview =
    updateCombinationPreview;


console.log(
    "✅ combination.js functions registered"
);
