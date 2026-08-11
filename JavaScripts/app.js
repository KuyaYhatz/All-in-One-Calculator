/*==================================================*
* LOAD PAGE
*==================================================*/

function loadPage(page) {

    const canvas =
        document.getElementById("canvas");


    if (!canvas) {

        console.error(
            "❌ Canvas not found!"
        );

        return;

    }


    /*=========================================
    * WELCOME
    *=========================================*/

    if (page === "welcome") {

        loadWelcome(canvas);

    }


    /*=========================================
    * HOME
    *=========================================*/

    else if (page === "home") {

        loadHome(canvas);

    }


    /*=========================================
    * CALCULATOR
    *=========================================*/

    else if (page === "calculator") {

        loadCalculator(canvas);

    }


    /*=========================================
    * LCM
    *=========================================*/

    else if (page === "lcmCalculator") {

        loadLCM(canvas);

    }


    /*=========================================
    * GEOMETRIC
    *=========================================*/

    else if (page === "geometric") {

        loadGeometric(canvas);

    }


    /*=========================================
    * SPEED / DISTANCE / TIME
    *=========================================*/

    else if (page === "speedDistance") {

        loadSTD(canvas);

    }


    /*=========================================
    * PERIODIC TABLE
    *=========================================*/

    else if (page === "periodic") {

        loadPeriodic(canvas);

    }

    /*=========================================
    * NUMBER SYSTEM CONVERSION
    *=========================================*/

    else if (page === "conversion") {
        loadNumberSystem(canvas);
    }

    /*=========================================
    * PERSONAL FINANCE CALCULATOR
    *=========================================*/

    else if (page === "finance") {

        console.log("💰 Finance page requested");

        loadPersonalFinance(canvas);

    }

    /*=========================================
    * STATISTICS
    *=========================================*/

    else if (page === "statistics") {
        loadDescriptiveStatistics(canvas);
    }

    /*=========================================
    * CPU PERFORMANCE ESTIMATOR
    *=========================================*/

    else if (page === "cpu-performance") {
        loadCPUPerformanceEstimator(canvas);
    }

    /*=========================================
    * NETWORKING
    *=========================================*/

    else if (page === "networking") {
        loadNetworking(canvas);
    }

    /*=========================================
    * SALARY & PAYROLL
    *=========================================*/

    else if (page === "payroll") {
        loadSalaryPayroll(canvas);
    }

    /*=========================================
    * PC SPEC ANALYZER
    *=========================================*/

    else if (page === "pc-spec-analyzer") {
        loadPCSpecAnalyzer(canvas);
    }

    /*=========================================
    * SCIENTIFIC CALCULATOR
    *=========================================*/

    else if (page === "scientific") {
        loadScientificCalculator(canvas);
    }

    /*=========================================
    * UNIT CONVERTER
    *=========================================*/

    else if (page === "unit-converter") {
        loadUnitConverter(canvas);
    }

    /*=========================================
    * UNIVERSAL CONVERSION CENTER
    *=========================================*/

    else if (page === "universal") {
        loadUnitScientificConverter(canvas);
    }

    /*=========================================*
    * LEAP YEAR CHECKER
    *=========================================*/

    else if (page === "leap-year") {
        loadLeapYearChecker(canvas);
    }

    /*=========================================
    * UNKNOWN PAGE
    *=========================================*/

    else {

        console.error(
            "❌ Unknown page:",
            page
        );

        return;

    }


    /*=========================================
    * CLOSE MOBILE MENU
    *=========================================*/

    closeMenu();

}

/*==================================================
        MOBILE MENU
==================================================*/

function toggleMenu() {

    const navigation =
        document.querySelector(".navigation");

    const overlay =
        document.querySelector(".menu-overlay");


    navigation.classList.toggle("active");

    overlay.classList.toggle("active");
}


function closeMenu() {

    const navigation =
        document.querySelector(".navigation");

    const overlay =
        document.querySelector(".menu-overlay");

    /*
    if (!navigation || !overlay) {
        return;
    }
    */
    navigation.classList.remove("active");

    overlay.classList.remove("active");

}