function loadWelcome(canvas) {

    if (!canvas) {

        console.error(
            "❌ Welcome Canvas not found!"
        );

        return;
    }


    canvas.innerHTML = `

        <div class="welcome-future">

            <!-- =================================
                 BACKGROUND GRID
            ================================= -->

            <div class="welcome-grid"></div>


            <!-- =================================
                 SYSTEM STATUS
            ================================= -->

            <div class="welcome-status">

                <span class="welcome-status-dot"></span>

                SYSTEM INITIALIZING...

            </div>



            <!-- =================================
                 MAIN CONTENT
            ================================= -->

            <div class="welcome-content">


                <!-- LOGO -->

                <div class="welcome-logo-box">

                    <div class="welcome-logo-ring ring-one"></div>

                    <div class="welcome-logo-ring ring-two"></div>

                    <div class="welcome-logo-ring ring-three"></div>


                    <div class="welcome-logo">

                        <img
                            src="img/All-in-One-Calculator.png"
                            alt="All-in-One Calculator Logo"
                        >

                    </div>

                </div>



                <!-- SYSTEM LABEL -->

                <div class="welcome-system-label">

                    KUYA RAM // DIGITAL CALCULATION SYSTEM

                </div>



                <!-- TITLE -->

                <h1 class="welcome-title">

                    WELCOME TO

                    <br>

                    <span>
                        ALL-IN-ONE
                    </span>

                    CALCULATOR

                </h1>



                <!-- TAGLINE -->

                <h2 class="welcome-tagline">

                    Powerful tools.
                    Accurate results.
                    <br>

                    <span>
                        One complete calculator.
                    </span>

                </h2>



                <!-- DESCRIPTION -->

                <p class="welcome-description">

                    Everything you need,
                    all in one place.

                </p>



                <!-- DIVIDER -->

                <div class="welcome-divider">

                    <span></span>

                </div>



                <!-- SYSTEM INFO -->

                <div class="welcome-system-info">

                    <div>

                        <strong>
                            CALC
                        </strong>

                        <small>
                            SYSTEM
                        </small>

                    </div>


                    <div>

                        <strong>
                            FAST
                        </strong>

                        <small>
                            PROCESSING
                        </small>

                    </div>


                    <div>

                        <strong>
                            ACCURATE
                        </strong>

                        <small>
                            RESULTS
                        </small>

                    </div>

                </div>

            </div>



            <!-- =================================
                 BOTTOM SYSTEM
            ================================= -->

            <div class="welcome-footer">

                <span>
                    INITIALIZING CALCULATION ENGINE...
                </span>


                <span class="welcome-version">
                    v1.0
                </span>

            </div>



            <!-- =================================
                 CORNER DECORATIONS
            ================================= -->

            <div class="welcome-corner welcome-corner-tl"></div>

            <div class="welcome-corner welcome-corner-tr"></div>

            <div class="welcome-corner welcome-corner-bl"></div>

            <div class="welcome-corner welcome-corner-br"></div>


        </div>

    `;
}