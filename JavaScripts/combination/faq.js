/*==================================================*
 * FAQ PAGE
 * FUTURISTIC AQUA DESIGN
 *==================================================*/

console.log("✅ faq.js loaded");


/*==================================================*
 * LOAD FAQ PAGE
 *==================================================*/

function loadFAQPage(canvas) {

    if (!canvas) {

        console.error(
            "❌ FAQ Canvas not found!"
        );

        return;
    }


    canvas.innerHTML = `

        <section class="ram-faq-page">

            <!-- =====================================
                 FAQ HEADER
            ====================================== -->

            <header class="ram-faq-header">

                <span class="ram-faq-system">
                    SYSTEM CORE • KNOWLEDGE BASE
                </span>

                <h1>
                    FREQUENTLY ASKED QUESTIONS
                </h1>

                <p>
                    Find answers about All-in-One Calculator,
                    its features, tools, privacy, accuracy,
                    and technical information.
                </p>

            </header>


            <!-- =====================================
                 GENERAL
            ====================================== -->

            <section class="ram-faq-section">

                <div class="ram-faq-section-title">
                    <span>01</span>
                    <h2>GENERAL</h2>
                </div>


                <article class="ram-faq-card">

                    <h3>
                        What is All-in-One Calculator?
                    </h3>

                    <p>
                        <strong>All-in-One Calculator</strong>
                        is a web-based calculator and utility
                        platform that combines mathematical,
                        scientific, financial, statistical,
                        computing, networking, and conversion
                        tools in one application.
                    </p>

                </article>


                <article class="ram-faq-card">

                    <h3>
                        Who can use All-in-One Calculator?
                    </h3>

                    <p>
                        It is designed for
                        <strong>
                            students, professionals,
                            developers, researchers,
                            and everyday users
                        </strong>
                        who need quick and convenient
                        calculation and conversion tools.
                    </p>

                </article>


                <article class="ram-faq-card">

                    <h3>
                        Do I need to install anything?
                    </h3>

                    <p>
                        No.
                        <strong>All-in-One Calculator</strong>
                        is a web-based application and can be
                        accessed directly through a compatible
                        web browser.
                    </p>

                </article>


                <article class="ram-faq-card">

                    <h3>
                        Is All-in-One Calculator free to use?
                    </h3>

                    <p>
                        Yes. The available calculator and
                        utility features can be used without
                        requiring a separate software installation.
                    </p>

                </article>

            </section>


            <!-- =====================================
                 CALCULATORS
            ====================================== -->

            <section class="ram-faq-section">

                <div class="ram-faq-section-title">
                    <span>02</span>
                    <h2>CALCULATORS</h2>
                </div>


                <article class="ram-faq-card">

                    <h3>
                        What calculators are available?
                    </h3>

                    <ul>

                        <li>Modern Calculator</li>
                        <li>Scientific Calculator</li>
                        <li>LCM Calculator</li>
                        <li>Geometric Calculator</li>
                        <li>Speed | Time | Distance Calculator</li>
                        <li>Personal Finance Calculator</li>
                        <li>Descriptive Statistics Calculator</li>
                        <li>Salary & Payroll Calculator</li>
                        <li>CPU Performance Estimator</li>
                        <li>PC Spec Analyzer</li>

                    </ul>

                </article>


                <article class="ram-faq-card">

                    <h3>
                        What is the Scientific Calculator used for?
                    </h3>

                    <p>
                        The Scientific Calculator is designed
                        for advanced mathematical operations,
                        including trigonometric, logarithmic,
                        exponential, power, root, factorial,
                        and other scientific calculations.
                    </p>

                </article>


                <article class="ram-faq-card">

                    <h3>
                        What can the Geometric Calculator calculate?
                    </h3>

                    <p>
                        It can be used for calculations involving
                        geometric shapes, including
                        <strong>
                            area, perimeter, volume,
                            surface area, and related measurements.
                        </strong>
                    </p>

                </article>


                <article class="ram-faq-card">

                    <h3>
                        What is the LCM Calculator?
                    </h3>

                    <p>
                        The LCM Calculator finds the
                        <strong>
                            Least Common Multiple
                        </strong>
                        of two or more numbers.
                    </p>

                </article>

            </section>


            <!-- =====================================
                 CONVERTERS
            ====================================== -->

            <section class="ram-faq-section">

                <div class="ram-faq-section-title">
                    <span>03</span>
                    <h2>CONVERTERS</h2>
                </div>


                <article class="ram-faq-card">

                    <h3>
                        What is the Universal Conversion Center?
                    </h3>

                    <p>
                        The
                        <strong>
                            Universal Conversion Center
                        </strong>
                        provides a centralized collection
                        of measurement and scientific
                        conversion tools.
                    </p>

                    <ul>

                        <li>Length</li>
                        <li>Mass</li>
                        <li>Volume</li>
                        <li>Temperature</li>
                        <li>Area</li>
                        <li>Time</li>
                        <li>Speed</li>
                        <li>Pressure</li>
                        <li>Energy</li>
                        <li>Power</li>
                        <li>Electrical Units</li>
                        <li>Data Storage</li>
                        <li>Angle</li>
                        <li>Frequency</li>
                        <li>Sound</li>
                        <li>Chemistry</li>

                    </ul>

                </article>


                <article class="ram-faq-card">

                    <h3>
                        What is the difference between
                        Unit Converter and Universal Conversion Center?
                    </h3>

                    <p>
                        The
                        <strong>Unit Converter</strong>
                        provides common measurement conversions,
                        while the
                        <strong>Universal Conversion Center</strong>
                        is designed as a broader collection of
                        specialized and scientific conversion tools.
                    </p>

                </article>

            </section>


            <!-- =====================================
                 SCIENCE & CHEMISTRY
            ====================================== -->

            <section class="ram-faq-section">

                <div class="ram-faq-section-title">
                    <span>04</span>
                    <h2>SCIENCE & CHEMISTRY</h2>
                </div>


                <article class="ram-faq-card">

                    <h3>
                        What is the Periodic Table?
                    </h3>

                    <p>
                        The Periodic Table provides information
                        about chemical elements, including their
                        <strong>
                            symbols, atomic numbers,
                            atomic masses, and other element properties.
                        </strong>
                    </p>

                </article>


                <article class="ram-faq-card">

                    <h3>
                        What is Combination of Elements?
                    </h3>

                    <p>
                        This tool provides information and
                        calculations related to combining chemical
                        elements and exploring their resulting
                        chemical information.
                    </p>

                </article>

            </section>


            <!-- =====================================
                 COMPUTER & TECHNOLOGY
            ====================================== -->

            <section class="ram-faq-section">

                <div class="ram-faq-section-title">
                    <span>05</span>
                    <h2>COMPUTER & TECHNOLOGY</h2>
                </div>


                <article class="ram-faq-card">

                    <h3>
                        What is Number Computer System?
                    </h3>

                    <p>
                        The
                        <strong>Number Computer System</strong>
                        provides conversions between common
                        numerical systems:
                    </p>

                    <ul>

                        <li>Binary</li>
                        <li>Decimal</li>
                        <li>Octal</li>
                        <li>Hexadecimal</li>

                    </ul>

                </article>


                <article class="ram-faq-card">

                    <h3>
                        What is the CPU Performance Estimator?
                    </h3>

                    <p>
                        It provides estimated CPU-related
                        performance information based on available
                        specifications and calculation parameters.
                    </p>

                </article>


                <article class="ram-faq-card">

                    <h3>
                        What is the Computer Networking section?
                    </h3>

                    <p>
                        It provides tools for common
                        networking-related calculations and
                        technical information, including
                        addressing and subnetting.
                    </p>

                </article>


                <article class="ram-faq-card">

                    <h3>
                        What is the PC Spec Analyzer?
                    </h3>

                    <p>
                        The
                        <strong>PC Spec Analyzer</strong>
                        helps users examine computer hardware
                        specifications and understand the
                        components and capabilities of a PC.
                    </p>

                </article>

            </section>


            <!-- =====================================
                 FINANCE & STATISTICS
            ====================================== -->

            <section class="ram-faq-section">

                <div class="ram-faq-section-title">
                    <span>06</span>
                    <h2>FINANCE & STATISTICS</h2>
                </div>


                <article class="ram-faq-card">

                    <h3>
                        What can the Personal Finance Calculator do?
                    </h3>

                    <p>
                        It provides tools for common personal
                        financial calculations and estimations,
                        helping users understand different
                        financial values and scenarios.
                    </p>

                </article>


                <article class="ram-faq-card">

                    <h3>
                        What is Descriptive Statistics?
                    </h3>

                    <p>
                        Descriptive Statistics provides
                        calculations such as:
                    </p>

                    <ul>

                        <li>Mean</li>
                        <li>Median</li>
                        <li>Mode</li>
                        <li>Range</li>
                        <li>Variance</li>
                        <li>Standard Deviation</li>
                        <li>Sum</li>
                        <li>Count</li>
                        <li>Minimum</li>
                        <li>Maximum</li>

                    </ul>

                </article>


                <article class="ram-faq-card">

                    <h3>
                        Can I use the Salary & Payroll Calculator
                        for actual payroll processing?
                    </h3>

                    <p>
                        It can be used for
                        <strong>
                            calculation and estimation purposes.
                        </strong>
                        Actual payroll may depend on applicable
                        laws, tax rules, government contributions,
                        company policies, and other factors.
                    </p>

                </article>

            </section>


            <!-- =====================================
                 PRIVACY & DATA
            ====================================== -->

            <section class="ram-faq-section">

                <div class="ram-faq-section-title">
                    <span>07</span>
                    <h2>PRIVACY & DATA</h2>
                </div>


                <article class="ram-faq-card">

                    <h3>
                        Does All-in-One Calculator store my calculations?
                    </h3>

                    <p>
                        No. Calculations are processed
                        <strong>
                            directly in your browser,
                        </strong>
                        and calculation data is not stored
                        on a server.
                    </p>

                </article>


                <article class="ram-faq-card">

                    <h3>
                        Is my entered information sent to a server?
                    </h3>

                    <p>
                        For calculations that operate entirely
                        within the browser, your entered information
                        remains on your device.
                    </p>

                    <p>
                        However, features that rely on external
                        services or live data may operate differently.
                    </p>

                </article>


                <article class="ram-faq-card">

                    <h3>
                        Do I need an account?
                    </h3>

                    <p>
                        No account is required for the core
                        calculator and conversion functions.
                    </p>

                </article>

            </section>


            <!-- =====================================
                 ACCURACY
            ====================================== -->

            <section class="ram-faq-section">

                <div class="ram-faq-section-title">
                    <span>08</span>
                    <h2>ACCURACY & RESULTS</h2>
                </div>


                <article class="ram-faq-card">

                    <h3>
                        Are the results accurate?
                    </h3>

                    <p>
                        The application uses mathematical formulas
                        and programmed calculation logic to produce
                        results. However, results may depend on the
                        values, units, formulas, assumptions, and
                        rounding settings used.
                    </p>

                </article>


                <article class="ram-faq-card">

                    <h3>
                        Why might my result be slightly different
                        from another calculator?
                    </h3>

                    <p>
                        Small differences can occur because of
                        <strong>
                            rounding, precision,
                            conversion standards, formulas,
                            or different assumptions
                        </strong>
                        used by different calculators.
                    </p>

                </article>


                <article class="ram-faq-card">

                    <h3>
                        Should I use the calculator for official
                        or professional decisions?
                    </h3>

                    <p>
                        For important financial, medical, engineering,
                        legal, or other professional decisions,
                        calculator results should be
                        <strong>
                            verified using appropriate authoritative
                            sources or qualified professionals.
                        </strong>
                    </p>

                </article>

            </section>


            <!-- =====================================
                 TECHNICAL
            ====================================== -->

            <section class="ram-faq-section">

                <div class="ram-faq-section-title">
                    <span>09</span>
                    <h2>TECHNICAL</h2>
                </div>


                <article class="ram-faq-card">

                    <h3>
                        What devices can use All-in-One Calculator?
                    </h3>

                    <p>
                        It is designed to work across:
                    </p>

                    <ul>

                        <li>Desktop Computers</li>
                        <li>Laptops</li>
                        <li>Tablets</li>
                        <li>Smartphones</li>

                    </ul>

                </article>


                <article class="ram-faq-card">

                    <h3>
                        What browser should I use?
                    </h3>

                    <p>
                        A modern and updated browser such as
                        <strong>
                            Chrome, Edge, Firefox, or Safari
                        </strong>
                        is recommended.
                    </p>

                </article>


                <article class="ram-faq-card">

                    <h3>
                        Does it work on mobile devices?
                    </h3>

                    <p>
                        Yes. The application is designed to support
                        responsive layouts for mobile, tablet,
                        and desktop screens.
                    </p>

                </article>


                <article class="ram-faq-card">

                    <h3>
                        Does it require an internet connection?
                    </h3>

                    <p>
                        The core browser-based calculations can work
                        without sending calculation data to a server.
                        However, features that depend on external
                        services or live information may require
                        an internet connection.
                    </p>

                </article>

            </section>


            <!-- =====================================
                 ABOUT APPLICATION
            ====================================== -->

            <section class="ram-faq-section">

                <div class="ram-faq-section-title">
                    <span>10</span>
                    <h2>ABOUT THE APPLICATION</h2>
                </div>


                <article class="ram-faq-card">

                    <h3>
                        Who developed All-in-One Calculator?
                    </h3>

                    <p>
                        <strong>
                            All-in-One Calculator
                        </strong>
                        was developed, designed, and created by
                        <strong>Kuya Ram</strong>.
                    </p>

                </article>


                <article class="ram-faq-card">

                    <h3>
                        What is the current version?
                    </h3>

                    <p>
                        <strong>
                            Version 1.0 — 2026
                        </strong>
                    </p>

                </article>


                <article class="ram-faq-card">

                    <h3>
                        Where can I report an issue or suggest
                        a feature?
                    </h3>

                    <p>
                        Users can report bugs, calculation issues,
                        or feature suggestions through the official
                        contact or feedback channel provided by
                        the application.
                    </p>

                </article>

            </section>


            <!-- =====================================
                 STILL HAVE QUESTIONS
            ====================================== -->

            <section class="ram-faq-final">

                <span class="ram-faq-final-icon">
                    ?
                </span>

                <h2>
                    STILL HAVE QUESTIONS?
                </h2>

                <p>
                    If your question is not answered here,
                    please use the available
                    <strong>
                        Contact / Feedback
                    </strong>
                    option to request assistance or report
                    an issue.
                </p>

                <div class="ram-faq-status">
                    ● FAQ DATABASE ONLINE
                </div>

            </section>


            <!-- =====================================
                 FOOTER INFO
            ====================================== -->

            <footer class="ram-faq-footer">

                <span>
                    ALL-IN-ONE CALCULATOR
                </span>

                <span>
                    SYSTEM CORE
                </span>

                <span>
                    VERSION 1.0
                </span>

                <span>
                    © 2026 KUYA RAM
                </span>

            </footer>

        </section>

    `;


    console.log(
        "✅ FAQ page loaded successfully"
    );
}


/*==================================================*
 * GLOBAL REGISTRATION
 *==================================================*/

window.loadFAQPage = loadFAQPage;


console.log(
    "✅ FAQ functions registered"
);