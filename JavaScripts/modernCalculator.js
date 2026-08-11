function loadCalculator(canvas) {

    canvas.innerHTML = `

        <div class="modern-calculator-page">

            <!-- LEFT SIDE : CALCULATOR -->
            <div class="calculator-panel">

                <div class="title">
                    <span class="title-line"></span>

                    <div>
                        <h1>Modern Calculator</h1>
                        <p>Futuristic Calculation System</p>
                    </div>

                    <span class="title-line"></span>
                </div>


                <div class="display">

                    <div id="history"></div>

                    <input
                        type="text"
                        id="screen"
                        value="0"
                        readonly>

                </div>


                <div class="buttons">

                    <button class="btn clear" data-value="AC">
                        AC
                    </button>

                    <button class="btn operator" data-value="%">
                        %
                    </button>

                    <button class="btn operator" data-value="⌫">
                        ⌫
                    </button>

                    <button class="btn operator" data-value="/">
                        ÷
                    </button>


                    <button class="btn number" data-value="7">
                        7
                    </button>

                    <button class="btn number" data-value="8">
                        8
                    </button>

                    <button class="btn number" data-value="9">
                        9
                    </button>

                    <button class="btn operator" data-value="*">
                        ×
                    </button>


                    <button class="btn number" data-value="4">
                        4
                    </button>

                    <button class="btn number" data-value="5">
                        5
                    </button>

                    <button class="btn number" data-value="6">
                        6
                    </button>

                    <button class="btn operator" data-value="-">
                        -
                    </button>


                    <button class="btn number" data-value="1">
                        1
                    </button>

                    <button class="btn number" data-value="2">
                        2
                    </button>

                    <button class="btn number" data-value="3">
                        3
                    </button>

                    <button class="btn operator" data-value="+">
                        +
                    </button>


                    <button class="btn number zero" data-value="0">
                        0
                    </button>

                    <button class="btn number" data-value=".">
                        .
                    </button>

                    <button class="btn equal" data-value="=">
                        =
                    </button>

                </div>

            </div>


            <!-- RIGHT SIDE : SOLUTION -->
            <div class="solution-panel">

                <div class="solution-header">

                    <span class="status-dot"></span>

                    <div>
                        <h2>Calculation Analysis</h2>
                        <p>AI Mathematical Solver</p>
                    </div>

                </div>


                <!-- FORMULA -->
                <div class="solution-box">

                    <div class="box-label">
                        FORMULA
                    </div>

                    <div id="formula">
                        Waiting for calculation...
                    </div>

                </div>


                <!-- PROBLEM -->
                <div class="solution-box">

                    <div class="box-label">
                        SOLVING PROBLEM
                    </div>

                    <div id="problem">
                        Enter numbers and operators
                        using the calculator.
                    </div>

                </div>


                <!-- STEP BY STEP -->
                <div class="solution-box steps-box">

                    <div class="box-label">
                        STEP-BY-STEP SOLUTION
                    </div>

                    <div id="steps">

                        <div class="empty-step">
                            <span>01</span>
                            Waiting for calculation...
                        </div>

                    </div>

                </div>


                <!-- ANSWER -->
                <div class="answer-box">

                    <div class="box-label">
                        FINAL ANSWER
                    </div>

                    <div id="answer">
                        —
                    </div>

                </div>

            </div>

        </div>
    `;

    // Start Calculator
    startCalculator();
}