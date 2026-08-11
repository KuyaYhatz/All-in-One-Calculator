/*==================================================
  PERIODIC TABLE
==================================================*/


/*==================================================
  LOAD PERIODIC TABLE
==================================================*/

function loadPeriodic(canvas) {

    if (!canvas) {
        console.error("Canvas not found!");
        return;
    }

    canvas.innerHTML = `

        <div class="periodic-container">

            <div class="title">

                <h1>
                    Periodic Table Explorer
                </h1>

                <p>
                    Click an element to view its information.
                </p>

            </div>

            <div class="combination-button-container">

                    <button
                        class="combination-button"
                        onclick="loadCombination()">

                        ⚗ Combination of Elements

                    </button>

            </div>


            <div id="periodicView">

                <div id="periodicTable"></div>

            </div>


            <div id="elementDetails"></div>

        </div>

    `;

    generatePeriodicTable();
}


/*==================================================
  GENERATE PERIODIC TABLE
==================================================*/

function generatePeriodicTable() {

    const table =
        document.getElementById("periodicTable");


    if (!table) {

        console.error(
            "periodicTable element not found!"
        );

        return;
    }


    table.innerHTML = "";


    Object.keys(elements).forEach(function(key) {

        const e = elements[key];


        const elementBox =
            document.createElement("div");


        elementBox.classList.add(
            "element-box"
        );


        /*========================================
          DEFAULT POSITION
        ========================================*/

        let row =
            e.period;

        let column =
            e.group;


        /*========================================
          LANTHANIDES 58 - 71
        ========================================*/

        if (
            e.number >= 58 &&
            e.number <= 71
        ) {

            row = 9;

            column =
                e.number - 54;
        }


        /*========================================
          ACTINIDES 90 - 103
        ========================================*/

        if (
            e.number >= 90 &&
            e.number <= 103
        ) {

            row = 10;

            column =
                e.number - 86;
        }


        /*========================================
          GRID POSITION
        ========================================*/

        elementBox.style.gridRow =
            String(row);

        elementBox.style.gridColumn =
            String(column);


        /*========================================
          ELEMENT CONTENT
        ========================================*/

        elementBox.innerHTML = `

            <div class="atomic-number">
                ${e.number}
            </div>

            <div class="symbol">
                ${e.symbol}
            </div>

            <div class="element-name">
                ${e.name}
            </div>

        `;


        /*========================================
          CLICK ELEMENT
        ========================================*/

        elementBox.addEventListener(
            "click",
            function() {

                showElement(key);

            }
        );


        table.appendChild(elementBox);

    });
}


/*==================================================
  SHOW ELEMENT INFORMATION
==================================================*/

function showElement(name) {

    const e =
        elements[name];


    const periodicView =
        document.getElementById(
            "periodicView"
        );


    const box =
        document.getElementById(
            "elementDetails"
        );


    if (
        !e ||
        !periodicView ||
        !box
    ) {

        console.error(
            "Element information not found!"
        );

        return;
    }


    /*========================================
      HIDE PERIODIC TABLE
    ========================================*/

    periodicView.style.display =
        "none";


    /*========================================
      SHOW ELEMENT DETAILS
    ========================================*/

    box.style.display =
        "block";


    /*========================================
      ELEMENT INFORMATION
    ========================================*/

    box.innerHTML = `

        <button
            class="back-button"
            onclick="backToPeriodicTable()">

            ← Back to Periodic Table

        </button>


        <div class="element-info">


            <!-- HEADER -->

            <div class="element-info-header">

                <div class="big-symbol">
                    ${e.symbol}
                </div>


                <div>

                    <h2>
                        ${e.name}
                    </h2>

                    <p>
                        ${e.category}
                    </p>

                </div>

            </div>


            <!-- INFORMATION GRID -->

            <div class="element-info-grid">


                <div>

                    <span>
                        Atomic Number
                    </span>

                    <strong>
                        ${e.number}
                    </strong>

                </div>


                <div>

                    <span>
                        Atomic Mass
                    </span>

                    <strong>
                        ${e.mass} u
                    </strong>

                </div>


                <div>

                    <span>
                        Protons
                    </span>

                    <strong>
                        ${e.protons}
                    </strong>

                </div>


                <div>

                    <span>
                        Electrons
                    </span>

                    <strong>
                        ${e.electrons}
                    </strong>

                </div>


                <div>

                    <span>
                        Neutrons
                    </span>

                    <strong>
                        ${e.neutrons}
                    </strong>

                </div>


                <div>

                    <span>
                        Period
                    </span>

                    <strong>
                        ${e.period}
                    </strong>

                </div>


                <div>

                    <span>
                        Group
                    </span>

                    <strong>
                        ${e.group}
                    </strong>

                </div>


                <div class="electron-config">

                    <span>
                        Electron Configuration
                    </span>

                    <strong>
                        ${e.config}
                    </strong>

                </div>


            </div>

        </div>

    `;
}


/*==================================================
  BACK TO PERIODIC TABLE
==================================================*/

function backToPeriodicTable() {

    const periodicView =
        document.getElementById(
            "periodicView"
        );


    const box =
        document.getElementById(
            "elementDetails"
        );


    if (
        !periodicView ||
        !box
    ) {

        return;
    }


    /*========================================
      SHOW PERIODIC TABLE
    ========================================*/

    periodicView.style.display =
        "block";


    /*========================================
      HIDE DETAILS
    ========================================*/

    box.style.display =
        "none";


    /*========================================
      CLEAR DETAILS
    ========================================*/

    box.innerHTML = "";

}