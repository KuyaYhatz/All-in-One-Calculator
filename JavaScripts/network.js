console.log("🌐 networking.js loaded");

/*==================================================*
 * NETWORKING CALCULATOR SYSTEM
 * FUTURISTIC AQUA THEME
 *
 * MODULES:
 * 1. IP Address
 * 2. Subnet
 * 3. CIDR
 * 4. IPv4 Range
 * 5. VLSM
 * 6. Bandwidth
 *
 * UNIQUE PREFIX:
 * netCalc-
 *==================================================*/


/*==================================================*
 * MAIN NETWORKING PAGE
 *==================================================*/

function loadNetworking(canvas) {

    console.log("🌐 Loading Networking...");

    if (!canvas) {

        console.error(
            "❌ Canvas not found"
        );

        return;
    }


    canvas.innerHTML = `

        <div class="netCalc-container">

            <!-- =====================================
                 HEADER
            ====================================== -->

            <div class="netCalc-header">

                <div>

                    <span class="netCalc-badge">
                        NETWORKING SYSTEM
                    </span>

                    <h1>
                        🌐 NETWORKING
                    </h1>

                    <p>
                        Analyze IP addresses, subnets,
                        CIDR, IPv4 ranges, VLSM,
                        and bandwidth calculations.
                    </p>

                </div>

            </div>


            <!-- =====================================
                 NETWORKING LAYOUT
            ====================================== -->

            <div class="netCalc-layout">


                <!-- =================================
                     LEFT MENU
                ================================== -->

                <aside class="netCalc-menu">

                    <div class="netCalc-menu-header">

                        <span>
                            NETWORK TOOLS
                        </span>

                        <small>
                            06 MODULES
                        </small>

                    </div>


                    <button
                        class="netCalc-nav active"
                        data-network="ip"
                    >

                        <span>
                            🌐
                        </span>

                        <strong>
                            IP Address
                        </strong>

                    </button>


                    <button
                        class="netCalc-nav"
                        data-network="subnet"
                    >

                        <span>
                            🔲
                        </span>

                        <strong>
                            Subnet
                        </strong>

                    </button>


                    <button
                        class="netCalc-nav"
                        data-network="cidr"
                    >

                        <span>
                            #️⃣
                        </span>

                        <strong>
                            CIDR
                        </strong>

                    </button>


                    <button
                        class="netCalc-nav"
                        data-network="range"
                    >

                        <span>
                            📡
                        </span>

                        <strong>
                            IPv4 Range
                        </strong>

                    </button>


                    <button
                        class="netCalc-nav"
                        data-network="vlsm"
                    >

                        <span>
                            🧩
                        </span>

                        <strong>
                            VLSM
                        </strong>

                    </button>


                    <button
                        class="netCalc-nav"
                        data-network="bandwidth"
                    >

                        <span>
                            ⚡
                        </span>

                        <strong>
                            Bandwidth
                        </strong>

                    </button>

                </aside>


                <!-- =================================
                     CALCULATOR AREA
                ================================== -->

                <main
                    id="netCalc-workspace"
                    class="netCalc-workspace"
                ></main>


            </div>

        </div>

    `;


    /*=============================================
     * NAVIGATION
     *=============================================*/

    const buttons =
        document.querySelectorAll(
            ".netCalc-nav"
        );


    buttons.forEach(button => {

        button.addEventListener(
            "click",
            function () {

                buttons.forEach(btn => {

                    btn.classList.remove(
                        "active"
                    );

                });


                this.classList.add(
                    "active"
                );


                loadNetworkCalculator(
                    this.dataset.network
                );

            }
        );

    });


    /*=============================================
     * DEFAULT
     *=============================================*/

    loadNetworkCalculator("ip");


    console.log(
        "✅ Networking loaded successfully"
    );
}


/*==================================================*
 * NETWORK CALCULATOR ROUTER
 *==================================================*/

function loadNetworkCalculator(type) {

    const workspace =
        document.getElementById(
            "netCalc-workspace"
        );


    if (!workspace) {

        return;
    }


    switch (type) {

        case "ip":
            showIPCalculator(workspace);
            break;

        case "subnet":
            showSubnetCalculator(workspace);
            break;

        case "cidr":
            showCIDRCalculator(workspace);
            break;

        case "range":
            showIPv4RangeCalculator(workspace);
            break;

        case "vlsm":
            showVLSMCalculator(workspace);
            break;

        case "bandwidth":
            showBandwidthCalculator(workspace);
            break;

    }
}


/*==================================================*
 * HEADER
 *==================================================*/

function netCalcHeader(
    icon,
    title,
    description
) {

    return `

        <div class="netCalc-tool-header">

            <div class="netCalc-tool-icon">
                ${icon}
            </div>

            <div>

                <span>
                    NETWORKING
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

function netCalcInput(
    id,
    label,
    placeholder
) {

    return `

        <div class="netCalc-field">

            <label>
                ${label}
            </label>

            <input
                type="text"
                id="${id}"
                placeholder="${placeholder}"
            >

        </div>

    `;
}


/*==================================================*
 * IP ADDRESS
 *==================================================*/

function showIPCalculator(container) {

    container.innerHTML = `

        ${netCalcHeader(
            "🌐",
            "IP Address Calculator",
            "Analyze an IPv4 address and determine its octets."
        )}


        <div class="netCalc-form">

            ${netCalcInput(
                "netCalc-ip",
                "IPv4 Address",
                "192.168.1.10"
            )}

        </div>


        <button
            class="netCalc-calculate"
            onclick="calculateIPAddress()"
        >
            ⚡ ANALYZE IP ADDRESS
        </button>


        <div
            id="netCalc-ip-result"
            class="netCalc-result"
        >

            Enter an IPv4 address.

        </div>

    `;
}


function calculateIPAddress() {

    const ip =
        document.getElementById(
            "netCalc-ip"
        ).value.trim();


    const result =
        document.getElementById(
            "netCalc-ip-result"
        );


    const parts =
        ip.split(".");


    if (
        parts.length !== 4 ||
        parts.some(
            part =>
                part === "" ||
                isNaN(part) ||
                Number(part) < 0 ||
                Number(part) > 255
        )
    ) {

        result.innerHTML =
            "⚠️ Invalid IPv4 address.";

        return;
    }


    const numbers =
        parts.map(Number);


    let type;


    if (numbers[0] >= 1 && numbers[0] <= 126) {

        type = "Class A";

    }

    else if (
        numbers[0] >= 128 &&
        numbers[0] <= 191
    ) {

        type = "Class B";

    }

    else if (
        numbers[0] >= 192 &&
        numbers[0] <= 223
    ) {

        type = "Class C";

    }

    else if (
        numbers[0] >= 224 &&
        numbers[0] <= 239
    ) {

        type = "Class D / Multicast";

    }

    else {

        type = "Class E / Experimental";

    }


    const binary =
        numbers
            .map(
                n =>
                    n
                        .toString(2)
                        .padStart(8, "0")
            )
            .join(".");


    result.innerHTML = `

        <div class="netCalc-result-title">
            IP ADDRESS ANALYSIS
        </div>

        <div class="netCalc-result-grid">

            <div>
                <span>IP ADDRESS</span>
                <strong>${ip}</strong>
            </div>

            <div>
                <span>CLASS</span>
                <strong>${type}</strong>
            </div>

            <div>
                <span>OCTET 1</span>
                <strong>${numbers[0]}</strong>
            </div>

            <div>
                <span>OCTET 2</span>
                <strong>${numbers[1]}</strong>
            </div>

            <div>
                <span>OCTET 3</span>
                <strong>${numbers[2]}</strong>
            </div>

            <div>
                <span>OCTET 4</span>
                <strong>${numbers[3]}</strong>
            </div>

        </div>

        <div class="netCalc-binary">
            <span>BINARY</span>
            <strong>${binary}</strong>
        </div>

    `;
}


/*==================================================*
 * SUBNET
 *==================================================*/

function showSubnetCalculator(container) {

    container.innerHTML = `

        ${netCalcHeader(
            "🔲",
            "Subnet Calculator",
            "Calculate network, broadcast, host range, and usable hosts."
        )}


        <div class="netCalc-form">

            ${netCalcInput(
                "netCalc-subnet-ip",
                "IPv4 Address",
                "192.168.1.10"
            )}


            <div class="netCalc-field">

                <label>
                    Subnet Mask
                </label>

                <select
                    id="netCalc-subnet-mask"
                    class="netCalc-select"
                >

                    <option value="255.255.255.0">
                        255.255.255.0 /24
                    </option>

                    <option value="255.255.255.128">
                        255.255.255.128 /25
                    </option>

                    <option value="255.255.255.192">
                        255.255.255.192 /26
                    </option>

                    <option value="255.255.255.224">
                        255.255.255.224 /27
                    </option>

                    <option value="255.255.255.240">
                        255.255.255.240 /28
                    </option>

                    <option value="255.255.255.248">
                        255.255.255.248 /29
                    </option>

                    <option value="255.255.255.252">
                        255.255.255.252 /30
                    </option>

                </select>

            </div>

        </div>


        <button
            class="netCalc-calculate"
            onclick="calculateSubnet()"
        >
            ⚡ CALCULATE SUBNET
        </button>


        <div
            id="netCalc-subnet-result"
            class="netCalc-result"
        >

            Enter subnet information.

        </div>

    `;
}


function ipToNumber(ip) {

    return ip
        .split(".")
        .map(Number)
        .reduce(
            (result, octet) =>
                result * 256 + octet,
            0
        );
}


function numberToIP(number) {

    return [

        (number >>> 24) & 255,
        (number >>> 16) & 255,
        (number >>> 8) & 255,
        number & 255

    ].join(".");
}


function maskToNumber(mask) {

    return ipToNumber(mask) >>> 0;
}


function calculateSubnet() {

    const ip =
        document.getElementById(
            "netCalc-subnet-ip"
        ).value.trim();


    const mask =
        document.getElementById(
            "netCalc-subnet-mask"
        ).value;


    const result =
        document.getElementById(
            "netCalc-subnet-result"
        );


    const ipParts =
        ip.split(".");


    if (
        ipParts.length !== 4 ||
        ipParts.some(
            x =>
                isNaN(x) ||
                Number(x) < 0 ||
                Number(x) > 255
        )
    ) {

        result.innerHTML =
            "⚠️ Invalid IPv4 address.";

        return;
    }


    const ipNumber =
        ipToNumber(ip) >>> 0;


    const maskNumber =
        maskToNumber(mask);


    const network =
        (ipNumber & maskNumber) >>> 0;


    const broadcast =
        (network |
            (~maskNumber >>> 0)
        ) >>> 0;


    const totalHosts =
        broadcast - network + 1;


    const usableHosts =
        totalHosts >= 2
            ? totalHosts - 2
            : 0;


    const firstHost =
        usableHosts > 0
            ? network + 1
            : network;


    const lastHost =
        usableHosts > 0
            ? broadcast - 1
            : broadcast;


    result.innerHTML = `

        <div class="netCalc-result-title">
            SUBNET ANALYSIS
        </div>

        <div class="netCalc-result-grid">

            <div>
                <span>NETWORK</span>
                <strong>
                    ${numberToIP(network)}
                </strong>
            </div>

            <div>
                <span>BROADCAST</span>
                <strong>
                    ${numberToIP(broadcast)}
                </strong>
            </div>

            <div>
                <span>FIRST HOST</span>
                <strong>
                    ${numberToIP(firstHost)}
                </strong>
            </div>

            <div>
                <span>LAST HOST</span>
                <strong>
                    ${numberToIP(lastHost)}
                </strong>
            </div>

            <div>
                <span>TOTAL ADDRESSES</span>
                <strong>
                    ${totalHosts}
                </strong>
            </div>

            <div>
                <span>USABLE HOSTS</span>
                <strong>
                    ${usableHosts}
                </strong>
            </div>

        </div>

    `;
}


/*==================================================*
 * CIDR
 *==================================================*/

function showCIDRCalculator(container) {

    container.innerHTML = `

        ${netCalcHeader(
            "#️⃣",
            "CIDR Calculator",
            "Convert CIDR notation into subnet information."
        )}


        <div class="netCalc-form">

            ${netCalcInput(
                "netCalc-cidr",
                "CIDR Address",
                "192.168.1.0/24"
            )}

        </div>


        <button
            class="netCalc-calculate"
            onclick="calculateCIDR()"
        >
            ⚡ CALCULATE CIDR
        </button>


        <div
            id="netCalc-cidr-result"
            class="netCalc-result"
        >

            Enter CIDR notation.

        </div>

    `;
}


function calculateCIDR() {

    const value =
        document.getElementById(
            "netCalc-cidr"
        ).value.trim();


    const result =
        document.getElementById(
            "netCalc-cidr-result"
        );


    const parts =
        value.split("/");


    if (
        parts.length !== 2
    ) {

        result.innerHTML =
            "⚠️ Invalid CIDR notation.";

        return;
    }


    const ip = parts[0];

    const prefix =
        Number(parts[1]);


    if (
        !Number.isInteger(prefix) ||
        prefix < 0 ||
        prefix > 32
    ) {

        result.innerHTML =
            "⚠️ CIDR prefix must be between 0 and 32.";

        return;
    }


    const ipParts =
        ip.split(".");


    if (
        ipParts.length !== 4 ||
        ipParts.some(
            x =>
                isNaN(x) ||
                Number(x) < 0 ||
                Number(x) > 255
        )
    ) {

        result.innerHTML =
            "⚠️ Invalid IPv4 address.";

        return;
    }


    const mask =
        prefix === 0
            ? 0
            : (0xFFFFFFFF << (32 - prefix)) >>> 0;


    const ipNumber =
        ipToNumber(ip) >>> 0;


    const network =
        (ipNumber & mask) >>> 0;


    const broadcast =
        (
            network |
            (~mask >>> 0)
        ) >>> 0;


    const total =
        Math.pow(
            2,
            32 - prefix
        );


    const usable =
        prefix >= 31
            ? total
            : total - 2;


    result.innerHTML = `

        <div class="netCalc-result-title">
            CIDR ANALYSIS
        </div>

        <div class="netCalc-result-grid">

            <div>
                <span>CIDR</span>
                <strong>
                    ${value}
                </strong>
            </div>

            <div>
                <span>SUBNET MASK</span>
                <strong>
                    ${numberToIP(mask)}
                </strong>
            </div>

            <div>
                <span>NETWORK</span>
                <strong>
                    ${numberToIP(network)}
                </strong>
            </div>

            <div>
                <span>BROADCAST</span>
                <strong>
                    ${numberToIP(broadcast)}
                </strong>
            </div>

            <div>
                <span>TOTAL ADDRESSES</span>
                <strong>
                    ${total.toLocaleString()}
                </strong>
            </div>

            <div>
                <span>USABLE HOSTS</span>
                <strong>
                    ${usable.toLocaleString()}
                </strong>
            </div>

        </div>

    `;
}


/*==================================================*
 * IPv4 RANGE
 *==================================================*/

function showIPv4RangeCalculator(container) {

    container.innerHTML = `

        ${netCalcHeader(
            "📡",
            "IPv4 Range Calculator",
            "Find the usable IPv4 address range from an IP and CIDR."
        )}


        <div class="netCalc-form">

            ${netCalcInput(
                "netCalc-range",
                "Network / CIDR",
                "192.168.1.0/24"
            )}

        </div>


        <button
            class="netCalc-calculate"
            onclick="calculateIPv4Range()"
        >
            ⚡ CALCULATE IPv4 RANGE
        </button>


        <div
            id="netCalc-range-result"
            class="netCalc-result"
        >

            Enter a network CIDR.

        </div>

    `;
}


function calculateIPv4Range() {

    const value =
        document.getElementById(
            "netCalc-range"
        ).value.trim();


    const result =
        document.getElementById(
            "netCalc-range-result"
        );


    const parts =
        value.split("/");


    if (parts.length !== 2) {

        result.innerHTML =
            "⚠️ Invalid network CIDR.";

        return;
    }


    const prefix =
        Number(parts[1]);


    if (
        !Number.isInteger(prefix) ||
        prefix < 0 ||
        prefix > 32
    ) {

        result.innerHTML =
            "⚠️ Invalid CIDR prefix.";

        return;
    }


    const ip =
        parts[0];


    const ipNumber =
        ipToNumber(ip) >>> 0;


    const mask =
        prefix === 0
            ? 0
            : (0xFFFFFFFF << (32 - prefix)) >>> 0;


    const network =
        (ipNumber & mask) >>> 0;


    const broadcast =
        (
            network |
            (~mask >>> 0)
        ) >>> 0;


    const first =
        prefix >= 31
            ? network
            : network + 1;


    const last =
        prefix >= 31
            ? broadcast
            : broadcast - 1;


    const count =
        broadcast - network + 1;


    result.innerHTML = `

        <div class="netCalc-result-title">
            IPv4 RANGE
        </div>

        <div class="netCalc-result-grid">

            <div>
                <span>NETWORK</span>
                <strong>
                    ${numberToIP(network)}
                </strong>
            </div>

            <div>
                <span>FIRST ADDRESS</span>
                <strong>
                    ${numberToIP(first)}
                </strong>
            </div>

            <div>
                <span>LAST ADDRESS</span>
                <strong>
                    ${numberToIP(last)}
                </strong>
            </div>

            <div>
                <span>BROADCAST</span>
                <strong>
                    ${numberToIP(broadcast)}
                </strong>
            </div>

            <div>
                <span>CIDR</span>
                <strong>
                    /${prefix}
                </strong>
            </div>

            <div>
                <span>TOTAL RANGE</span>
                <strong>
                    ${count.toLocaleString()}
                </strong>
            </div>

        </div>

    `;
}


/*==================================================*
 * VLSM
 *==================================================*/

function showVLSMCalculator(container) {

    container.innerHTML = `

        ${netCalcHeader(
            "🧩",
            "VLSM Calculator",
            "Estimate subnet sizes based on required host counts."
        )}


        <div class="netCalc-form">

            ${netCalcInput(
                "netCalc-vlsm-network",
                "Base Network",
                "192.168.1.0/24"
            )}


            ${netCalcInput(
                "netCalc-vlsm-hosts",
                "Required Hosts",
                "100,50,25,10"
            )}

        </div>


        <button
            class="netCalc-calculate"
            onclick="calculateVLSM()"
        >
            ⚡ CALCULATE VLSM
        </button>


        <div
            id="netCalc-vlsm-result"
            class="netCalc-result"
        >

            Example:
            100,50,25,10

        </div>

    `;
}


function calculateVLSM() {

    const network =
        document.getElementById(
            "netCalc-vlsm-network"
        ).value.trim();


    const hostsInput =
        document.getElementById(
            "netCalc-vlsm-hosts"
        ).value.trim();


    const result =
        document.getElementById(
            "netCalc-vlsm-result"
        );


    const networkParts =
        network.split("/");


    if (
        networkParts.length !== 2
    ) {

        result.innerHTML =
            "⚠️ Invalid base network.";

        return;
    }


    const baseIP =
        networkParts[0];


    const basePrefix =
        Number(networkParts[1]);


    if (
        basePrefix < 0 ||
        basePrefix > 32
    ) {

        result.innerHTML =
            "⚠️ Invalid base CIDR.";

        return;
    }


    let hosts =
        hostsInput
            .split(",")
            .map(Number)
            .filter(
                x =>
                    Number.isFinite(x) &&
                    x > 0
            );


    if (!hosts.length) {

        result.innerHTML =
            "⚠️ Enter valid host requirements.";

        return;
    }


    hosts.sort(
        (a, b) => b - a
    );


    let current =
        ipToNumber(baseIP) >>> 0;


    const rows = [];


    for (let i = 0; i < hosts.length; i++) {

        const required =
            hosts[i];


        let bits = 0;


        while (
            Math.pow(2, bits) -
            2 <
            required
        ) {

            bits++;

        }


        const prefix =
            32 - bits;


        if (prefix < basePrefix) {

            result.innerHTML =
                "⚠️ Requirements exceed the base network.";

            return;
        }


        const blockSize =
            Math.pow(
                2,
                32 - prefix
            );


        const networkAddress =
            current;


        const broadcast =
            current +
            blockSize -
            1;


        const usable =
            Math.max(
                blockSize - 2,
                0
            );


        rows.push(`

            <tr>

                <td>
                    ${required}
                </td>

                <td>
                    ${numberToIP(networkAddress)}
                </td>

                <td>
                    /${prefix}
                </td>

                <td>
                    ${numberToIP(networkAddress + 1)}
                </td>

                <td>
                    ${numberToIP(broadcast - 1)}
                </td>

                <td>
                    ${numberToIP(broadcast)}
                </td>

                <td>
                    ${usable}
                </td>

            </tr>

        `);


        current =
            broadcast + 1;

    }


    result.innerHTML = `

        <div class="netCalc-result-title">
            VLSM SUBNET PLAN
        </div>

        <div class="netCalc-table-wrapper">

            <table class="netCalc-table">

                <thead>

                    <tr>

                        <th>Required</th>
                        <th>Network</th>
                        <th>CIDR</th>
                        <th>First Host</th>
                        <th>Last Host</th>
                        <th>Broadcast</th>
                        <th>Usable</th>

                    </tr>

                </thead>

                <tbody>

                    ${rows.join("")}

                </tbody>

            </table>

        </div>

    `;
}


/*==================================================*
 * BANDWIDTH
 *==================================================*/

function showBandwidthCalculator(container) {

    container.innerHTML = `

        ${netCalcHeader(
            "⚡",
            "Bandwidth Calculator",
            "Convert bandwidth between common network units."
        )}


        <div class="netCalc-form">

            ${netCalcInput(
                "netCalc-bandwidth",
                "Bandwidth Value",
                "100"
            )}


            <div class="netCalc-field">

                <label>
                    From
                </label>

                <select
                    id="netCalc-bandwidth-from"
                    class="netCalc-select"
                >

                    <option value="bps">
                        bps
                    </option>

                    <option value="Kbps">
                        Kbps
                    </option>

                    <option value="Mbps">
                        Mbps
                    </option>

                    <option value="Gbps">
                        Gbps
                    </option>

                    <option value="Bps">
                        B/s
                    </option>

                    <option value="KBps">
                        KB/s
                    </option>

                    <option value="MBps">
                        MB/s
                    </option>

                    <option value="GBps">
                        GB/s
                    </option>

                </select>

            </div>


            <div class="netCalc-field">

                <label>
                    To
                </label>

                <select
                    id="netCalc-bandwidth-to"
                    class="netCalc-select"
                >

                    <option value="bps">
                        bps
                    </option>

                    <option value="Kbps">
                        Kbps
                    </option>

                    <option
                        value="Mbps"
                        selected
                    >
                        Mbps
                    </option>

                    <option value="Gbps">
                        Gbps
                    </option>

                    <option value="Bps">
                        B/s
                    </option>

                    <option value="KBps">
                        KB/s
                    </option>

                    <option value="MBps">
                        MB/s
                    </option>

                    <option value="GBps">
                        GB/s
                    </option>

                </select>

            </div>

        </div>


        <button
            class="netCalc-calculate"
            onclick="calculateBandwidth()"
        >
            ⚡ CONVERT BANDWIDTH
        </button>


        <div
            id="netCalc-bandwidth-result"
            class="netCalc-result"
        >

            Enter bandwidth information.

        </div>

    `;
}


function calculateBandwidth() {

    const value =
        Number(
            document.getElementById(
                "netCalc-bandwidth"
            ).value
        );


    const from =
        document.getElementById(
            "netCalc-bandwidth-from"
        ).value;


    const to =
        document.getElementById(
            "netCalc-bandwidth-to"
        ).value;


    const result =
        document.getElementById(
            "netCalc-bandwidth-result"
        );


    if (
        !Number.isFinite(value) ||
        value < 0
    ) {

        result.innerHTML =
            "⚠️ Enter a valid bandwidth value.";

        return;
    }


    const units = {

        bps: 1,

        Kbps: 1000,

        Mbps: 1000 * 1000,

        Gbps: 1000 * 1000 * 1000,

        Bps: 8,

        KBps: 8 * 1000,

        MBps: 8 * 1000 * 1000,

        GBps: 8 * 1000 * 1000 * 1000

    };


    const bits =
        value *
        units[from];


    const converted =
        bits /
        units[to];


    result.innerHTML = `

        <div class="netCalc-result-title">
            BANDWIDTH CONVERSION
        </div>

        <div class="netCalc-big-result">

            ${converted.toLocaleString(
                undefined,
                {
                    maximumFractionDigits: 6
                }
            )}

            <span>
                ${to}
            </span>

        </div>


        <div class="netCalc-conversion">

            ${value.toLocaleString()}
            ${from}

            <strong>
                =
            </strong>

            ${converted.toLocaleString(
                undefined,
                {
                    maximumFractionDigits: 6
                }
            )}
            ${to}

        </div>

    `;
}


/*==================================================*
 * GLOBAL REGISTRATION
 *==================================================*/

window.loadNetworking =
    loadNetworking;

window.loadNetworkCalculator =
    loadNetworkCalculator;

window.calculateIPAddress =
    calculateIPAddress;

window.calculateSubnet =
    calculateSubnet;

window.calculateCIDR =
    calculateCIDR;

window.calculateIPv4Range =
    calculateIPv4Range;

window.calculateVLSM =
    calculateVLSM;

window.calculateBandwidth =
    calculateBandwidth;


console.log(
    "✅ Networking functions registered"
);

