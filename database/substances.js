const substances = [

/*==================================================
 * MOLECULAR / COVALENT COMPOUNDS
 *==================================================*/

/* WATER */
{
    formula: "H2O",
    displayFormula: "H₂O",
    name: "Water",

    elements: {
        H: 2,
        O: 1
    },

    type: "Compound",
    category: "Molecular Compound",

    properties: {
        molecularMass: 18.015,
        state: "liquid",
        polarity: "polar"
    },

    description:
        "Water is a molecular compound composed of two hydrogen atoms and one oxygen atom.",

    equation:
        "2H₂ + O₂ → 2H₂O"
},


/* CARBON DIOXIDE */
{
    formula: "CO2",
    displayFormula: "CO₂",
    name: "Carbon Dioxide",

    elements: {
        C: 1,
        O: 2
    },

    type: "Compound",
    category: "Molecular Compound",

    properties: {
        molecularMass: 44.01,
        state: "gas",
        polarity: "nonpolar"
    },

    description:
        "Carbon dioxide is a molecular compound composed of one carbon atom and two oxygen atoms.",

    equation:
        "C + O₂ → CO₂"
},


/* CARBON MONOXIDE */
{
    formula: "CO",
    displayFormula: "CO",
    name: "Carbon Monoxide",

    elements: {
        C: 1,
        O: 1
    },

    type: "Compound",
    category: "Molecular Compound",

    properties: {
        molecularMass: 28.01,
        state: "gas",
        polarity: "polar"
    },

    description:
        "Carbon monoxide is a molecular compound consisting of one carbon atom and one oxygen atom.",

    equation:
        "2C + O₂ → 2CO"
},


/* METHANE */
{
    formula: "CH4",
    displayFormula: "CH₄",
    name: "Methane",

    elements: {
        C: 1,
        H: 4
    },

    type: "Compound",
    category: "Molecular Compound",

    properties: {
        molecularMass: 16.04,
        state: "gas",
        polarity: "nonpolar"
    },

    description:
        "Methane is a simple molecular compound composed of one carbon atom and four hydrogen atoms.",

    equation:
        "C + 2H₂ → CH₄"
},


/* AMMONIA */
{
    formula: "NH3",
    displayFormula: "NH₃",
    name: "Ammonia",

    elements: {
        N: 1,
        H: 3
    },

    type: "Compound",
    category: "Molecular Compound",

    properties: {
        molecularMass: 17.031,
        state: "gas",
        polarity: "polar"
    },

    description:
        "Ammonia is a molecular compound composed of one nitrogen atom and three hydrogen atoms.",

    equation:
        "N₂ + 3H₂ → 2NH₃"
},


/* NITROGEN DIOXIDE */
{
    formula: "NO2",
    displayFormula: "NO₂",
    name: "Nitrogen Dioxide",

    elements: {
        N: 1,
        O: 2
    },

    type: "Compound",
    category: "Molecular Compound",

    properties: {
        molecularMass: 46.005,
        state: "gas",
        polarity: "polar"
    },

    description:
        "Nitrogen dioxide is a molecular compound containing one nitrogen atom and two oxygen atoms.",

    equation:
        "N₂ + 2O₂ → 2NO₂"
},


/* NITROGEN MONOXIDE */
{
    formula: "NO",
    displayFormula: "NO",
    name: "Nitrogen Monoxide",

    elements: {
        N: 1,
        O: 1
    },

    type: "Compound",
    category: "Molecular Compound",

    properties: {
        molecularMass: 30.006,
        state: "gas",
        polarity: "polar"
    },

    description:
        "Nitrogen monoxide, also called nitric oxide, is a molecular compound containing nitrogen and oxygen.",

    equation:
        "N₂ + O₂ → 2NO"
},


/* SULFUR DIOXIDE */
{
    formula: "SO2",
    displayFormula: "SO₂",
    name: "Sulfur Dioxide",

    elements: {
        S: 1,
        O: 2
    },

    type: "Compound",
    category: "Molecular Compound",

    properties: {
        molecularMass: 64.066,
        state: "gas",
        polarity: "polar"
    },

    description:
        "Sulfur dioxide is a molecular compound composed of one sulfur atom and two oxygen atoms.",

    equation:
        "S + O₂ → SO₂"
},


/* SULFUR TRIOXIDE */
{
    formula: "SO3",
    displayFormula: "SO₃",
    name: "Sulfur Trioxide",

    elements: {
        S: 1,
        O: 3
    },

    type: "Compound",
    category: "Molecular Compound",

    properties: {
        molecularMass: 80.063,
        state: "gas",
        polarity: "nonpolar"
    },

    description:
        "Sulfur trioxide is a molecular compound consisting of one sulfur atom and three oxygen atoms.",

    equation:
        "2SO₂ + O₂ → 2SO₃"
},


/* HYDROGEN PEROXIDE */
{
    formula: "H2O2",
    displayFormula: "H₂O₂",
    name: "Hydrogen Peroxide",

    elements: {
        H: 2,
        O: 2
    },

    type: "Compound",
    category: "Molecular Compound",

    properties: {
        molecularMass: 34.014,
        state: "liquid",
        polarity: "polar"
    },

    description:
        "Hydrogen peroxide is a molecular compound composed of two hydrogen atoms and two oxygen atoms.",

    equation:
        "H₂ + O₂ → H₂O₂"
},


/* HYDROGEN SULFIDE */
{
    formula: "H2S",
    displayFormula: "H₂S",
    name: "Hydrogen Sulfide",

    elements: {
        H: 2,
        S: 1
    },

    type: "Compound",
    category: "Molecular Compound",

    properties: {
        molecularMass: 34.081,
        state: "gas",
        polarity: "polar"
    },

    description:
        "Hydrogen sulfide is a molecular compound consisting of two hydrogen atoms and one sulfur atom.",

    equation:
        "H₂ + S → H₂S"
},


/* HYDROGEN CHLORIDE */
{
    formula: "HCl",
    displayFormula: "HCl",
    name: "Hydrogen Chloride",

    elements: {
        H: 1,
        Cl: 1
    },

    type: "Compound",
    category: "Molecular Compound",

    properties: {
        molecularMass: 36.458,
        state: "gas",
        polarity: "polar"
    },

    description:
        "Hydrogen chloride is a molecular compound composed of hydrogen and chlorine.",

    equation:
        "H₂ + Cl₂ → 2HCl"
},


/* HYDROGEN FLUORIDE */
{
    formula: "HF",
    displayFormula: "HF",
    name: "Hydrogen Fluoride",

    elements: {
        H: 1,
        F: 1
    },

    type: "Compound",
    category: "Molecular Compound",

    properties: {
        molecularMass: 20.006,
        state: "gas",
        polarity: "polar"
    },

    description:
        "Hydrogen fluoride is a molecular compound containing one hydrogen atom and one fluorine atom.",

    equation:
        "H₂ + F₂ → 2HF"
},


/* ETHANE */
{
    formula: "C2H6",
    displayFormula: "C₂H₆",
    name: "Ethane",

    elements: {
        C: 2,
        H: 6
    },

    type: "Compound",
    category: "Molecular Compound",

    properties: {
        molecularMass: 30.07,
        state: "gas",
        polarity: "nonpolar"
    },

    description:
        "Ethane is a hydrocarbon molecular compound containing two carbon atoms and six hydrogen atoms.",

    equation:
        "2C + 3H₂ → C₂H₆"
},


/* PROPANE */
{
    formula: "C3H8",
    displayFormula: "C₃H₈",
    name: "Propane",

    elements: {
        C: 3,
        H: 8
    },

    type: "Compound",
    category: "Molecular Compound",

    properties: {
        molecularMass: 44.10,
        state: "gas",
        polarity: "nonpolar"
    },

    description:
        "Propane is a hydrocarbon molecular compound containing three carbon atoms and eight hydrogen atoms.",

    equation:
        "3C + 4H₂ → C₃H₈"
},


/* BUTANE */
{
    formula: "C4H10",
    displayFormula: "C₄H₁₀",
    name: "Butane",

    elements: {
        C: 4,
        H: 10
    },

    type: "Compound",
    category: "Molecular Compound",

    properties: {
        molecularMass: 58.12,
        state: "gas",
        polarity: "nonpolar"
    },

    description:
        "Butane is a hydrocarbon molecular compound composed of four carbon atoms and ten hydrogen atoms.",

    equation:
        "4C + 5H₂ → C₄H₁₀"
},


/* METHANOL */
{
    formula: "CH4O",
    displayFormula: "CH₃OH",
    name: "Methanol",

    elements: {
        C: 1,
        H: 4,
        O: 1
    },

    type: "Compound",
    category: "Molecular Compound",

    properties: {
        molecularMass: 32.04,
        state: "liquid",
        polarity: "polar"
    },

    description:
        "Methanol is an alcohol molecular compound composed of carbon, hydrogen, and oxygen.",

    equation:
        "CO + 2H₂ → CH₃OH"
},


/* ETHANOL */
{
    formula: "C2H6O",
    displayFormula: "C₂H₅OH",
    name: "Ethanol",

    elements: {
        C: 2,
        H: 6,
        O: 1
    },

    type: "Compound",
    category: "Molecular Compound",

    properties: {
        molecularMass: 46.07,
        state: "liquid",
        polarity: "polar"
    },

    description:
        "Ethanol is an alcohol molecular compound containing carbon, hydrogen, and oxygen.",

    equation:
        "C₂H₄ + H₂O → C₂H₅OH"
},


/* GLUCOSE */
{
    formula: "C6H12O6",
    displayFormula: "C₆H₁₂O₆",
    name: "Glucose",

    elements: {
        C: 6,
        H: 12,
        O: 6
    },

    type: "Compound",
    category: "Molecular Compound",

    properties: {
        molecularMass: 180.156,
        state: "solid",
        polarity: "polar"
    },

    description:
        "Glucose is a molecular compound and simple carbohydrate composed of carbon, hydrogen, and oxygen.",

    equation:
        "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂"
},


/* OZONE */
{
    formula: "O3",
    displayFormula: "O₃",
    name: "Ozone",

    elements: {
        O: 3
    },

    type: "Elemental Molecular Substance",
    category: "Molecular Substance",

    properties: {
        molecularMass: 48.00,
        state: "gas",
        polarity: "nonpolar"
    },

    description:
        "Ozone is a molecular form of oxygen containing three oxygen atoms.",

    equation:
        "3O₂ → 2O₃"
},


/*==================================================
 * IONIC COMPOUNDS
 *==================================================*/

/* SODIUM CHLORIDE */
{
    formula: "NaCl",
    displayFormula: "NaCl",
    name: "Sodium Chloride",

    elements: {
        Na: 1,
        Cl: 1
    },

    type: "Compound",
    category: "Ionic Compound",

    properties: {
        formulaMass: 58.44,
        state: "solid",
        ions: "Na⁺ and Cl⁻"
    },

    description:
        "Sodium chloride is an ionic compound composed of sodium cations and chloride anions.",

    equation:
        "2Na + Cl₂ → 2NaCl"
},


/* MAGNESIUM OXIDE */
{
    formula: "MgO",
    displayFormula: "MgO",
    name: "Magnesium Oxide",

    elements: {
        Mg: 1,
        O: 1
    },

    type: "Compound",
    category: "Ionic Compound",

    properties: {
        formulaMass: 40.304,
        state: "solid",
        ions: "Mg²⁺ and O²⁻"
    },

    description:
        "Magnesium oxide is an ionic compound formed from magnesium ions and oxide ions.",

    equation:
        "2Mg + O₂ → 2MgO"
},


/* CALCIUM CHLORIDE */
{
    formula: "CaCl2",
    displayFormula: "CaCl₂",
    name: "Calcium Chloride",

    elements: {
        Ca: 1,
        Cl: 2
    },

    type: "Compound",
    category: "Ionic Compound",

    properties: {
        formulaMass: 110.98,
        state: "solid",
        ions: "Ca²⁺ and Cl⁻"
    },

    description:
        "Calcium chloride is an ionic compound containing calcium cations and chloride anions.",

    equation:
        "Ca + Cl₂ → CaCl₂"
},


/* SODIUM OXIDE */
{
    formula: "Na2O",
    displayFormula: "Na₂O",
    name: "Sodium Oxide",

    elements: {
        Na: 2,
        O: 1
    },

    type: "Compound",
    category: "Ionic Compound",

    properties: {
        formulaMass: 61.979,
        state: "solid",
        ions: "Na⁺ and O²⁻"
    },

    description:
        "Sodium oxide is an ionic compound consisting of sodium ions and oxide ions.",

    equation:
        "4Na + O₂ → 2Na₂O"
},


/* POTASSIUM CHLORIDE */
{
    formula: "KCl",
    displayFormula: "KCl",
    name: "Potassium Chloride",

    elements: {
        K: 1,
        Cl: 1
    },

    type: "Compound",
    category: "Ionic Compound",

    properties: {
        formulaMass: 74.551,
        state: "solid",
        ions: "K⁺ and Cl⁻"
    },

    description:
        "Potassium chloride is an ionic compound composed of potassium cations and chloride anions.",

    equation:
        "2K + Cl₂ → 2KCl"
},


/* CALCIUM OXIDE */
{
    formula: "CaO",
    displayFormula: "CaO",
    name: "Calcium Oxide",

    elements: {
        Ca: 1,
        O: 1
    },

    type: "Compound",
    category: "Ionic Compound",

    properties: {
        formulaMass: 56.077,
        state: "solid",
        ions: "Ca²⁺ and O²⁻"
    },

    description:
        "Calcium oxide is an ionic compound formed from calcium and oxide ions.",

    equation:
        "2Ca + O₂ → 2CaO"
},


/* ALUMINUM OXIDE */
{
    formula: "Al2O3",
    displayFormula: "Al₂O₃",
    name: "Aluminum Oxide",

    elements: {
        Al: 2,
        O: 3
    },

    type: "Compound",
    category: "Ionic Compound",

    properties: {
        formulaMass: 101.96,
        state: "solid",
        ions: "Al³⁺ and O²⁻"
    },

    description:
        "Aluminum oxide is an ionic compound composed of aluminum ions and oxide ions.",

    equation:
        "4Al + 3O₂ → 2Al₂O₃"
},


/* LITHIUM FLUORIDE */
{
    formula: "LiF",
    displayFormula: "LiF",
    name: "Lithium Fluoride",

    elements: {
        Li: 1,
        F: 1
    },

    type: "Compound",
    category: "Ionic Compound",

    properties: {
        formulaMass: 25.939,
        state: "solid",
        ions: "Li⁺ and F⁻"
    },

    description:
        "Lithium fluoride is an ionic compound composed of lithium cations and fluoride anions.",

    equation:
        "2Li + F₂ → 2LiF"
},


/*==================================================
 * NETWORK COVALENT COMPOUNDS
 *==================================================*/

/* DIAMOND */
{
    formula: "C",
    displayFormula: "C",
    name: "Diamond",

    elements: {
        C: 1
    },

    type: "Compound",
    category: "Network Covalent Solid",

    properties: {
        formulaMass: 12.011,
        state: "solid",
        structure: "three-dimensional covalent network"
    },

    description:
        "Diamond is an allotrope of carbon in which carbon atoms are connected by an extensive three-dimensional covalent network.",

    equation:
        "C → Diamond"
},


/* GRAPHITE */
{
    formula: "C",
    displayFormula: "C",
    name: "Graphite",

    elements: {
        C: 1
    },

    type: "Elemental Substance",
    category: "Network Covalent Solid",

    properties: {
        formulaMass: 12.011,
        state: "solid",
        structure: "layered covalent network"
    },

    description:
        "Graphite is an allotrope of carbon consisting of layered sheets of covalently bonded carbon atoms.",

    equation:
        "C → Graphite"
},


/* SILICON DIOXIDE */
{
    formula: "SiO2",
    displayFormula: "SiO₂",
    name: "Silicon Dioxide",

    elements: {
        Si: 1,
        O: 2
    },

    type: "Compound",
    category: "Network Covalent Solid",

    properties: {
        formulaMass: 60.084,
        state: "solid",
        structure: "three-dimensional covalent network"
    },

    description:
        "Silicon dioxide is a network covalent solid in which silicon and oxygen atoms form an extensive covalent structure.",

    equation:
        "Si + O₂ → SiO₂"
},


/* SILICON CARBIDE */
{
    formula: "SiC",
    displayFormula: "SiC",
    name: "Silicon Carbide",

    elements: {
        Si: 1,
        C: 1
    },

    type: "Compound",
    category: "Network Covalent Solid",

    properties: {
        formulaMass: 40.096,
        state: "solid",
        structure: "extended covalent network"
    },

    description:
        "Silicon carbide is a hard network covalent material composed of silicon and carbon atoms.",

    equation:
        "Si + C → SiC"
},


/* BORON NITRIDE */
{
    formula: "BN",
    displayFormula: "BN",
    name: "Boron Nitride",

    elements: {
        B: 1,
        N: 1
    },

    type: "Compound",
    category: "Network Covalent Solid",

    properties: {
        formulaMass: 24.817,
        state: "solid",
        structure: "extended covalent network"
    },

    description:
        "Boron nitride is a compound that can form extended covalent structures, including layered and three-dimensional forms.",

    equation:
        "B + N → BN"
},


/*==================================================
 * HOMOGENEOUS MIXTURES — SOLUTIONS
 *==================================================*/

/* SALT WATER */
{
    formula: "NaCl(aq)",
    displayFormula: "NaCl(aq)",
    name: "Salt Water",

    elements: {
        Na: 1,
        Cl: 1,
        H: 2,
        O: 1
    },

    type: "Mixture",
    category: "Homogeneous Mixture — Solution",

    components: [
        "Sodium Chloride",
        "Water"
    ],

    properties: {
        state: "liquid",
        composition: "variable",
        uniformity: "uniform"
    },

    description:
        "Salt water is a homogeneous mixture in which sodium chloride is uniformly dissolved in water.",

    equation:
        "NaCl(s) → Na⁺(aq) + Cl⁻(aq)"
},


/* SUGAR WATER */
{
    formula: "C12H22O11(aq)",
    displayFormula: "C₁₂H₂₂O₁₁(aq)",
    name: "Sugar Water",

    elements: {
        C: 12,
        H: 24,
        O: 12
    },

    type: "Mixture",
    category: "Homogeneous Mixture — Solution",

    components: [
        "Sucrose",
        "Water"
    ],

    properties: {
        state: "liquid",
        composition: "variable",
        uniformity: "uniform"
    },

    description:
        "Sugar water is a homogeneous solution in which sugar molecules are uniformly distributed throughout water.",

    equation:
        "C₁₂H₂₂O₁₁(s) → C₁₂H₂₂O₁₁(aq)"
},


/* VINEGAR */
{
    formula: "CH3COOH(aq)",
    displayFormula: "CH₃COOH(aq)",
    name: "Vinegar",

    elements: {
        C: 2,
        H: 4,
        O: 2
    },

    type: "Mixture",
    category: "Homogeneous Mixture — Solution",

    components: [
        "Acetic Acid",
        "Water"
    ],

    properties: {
        state: "liquid",
        composition: "variable",
        uniformity: "uniform"
    },

    description:
        "Vinegar is a homogeneous aqueous solution containing acetic acid and water.",

    equation:
        "CH₃COOH + H₂O → CH₃COOH(aq)"
},


/* AIR */
{
    formula: "Variable",
    displayFormula: "N₂ + O₂ + Ar + CO₂ + ...",
    name: "Air",

    elements: {
        N: 2,
        O: 2,
        Ar: 1,
        C: 1
    },

    type: "Mixture",
    category: "Homogeneous Mixture — Gas Solution",

    components: [
        "Nitrogen",
        "Oxygen",
        "Argon",
        "Carbon Dioxide"
    ],

    properties: {
        state: "gas",
        composition: "variable",
        uniformity: "uniform"
    },

    description:
        "Air is a homogeneous gaseous mixture composed primarily of nitrogen and oxygen, with smaller amounts of argon, carbon dioxide, and other gases.",

    equation:
        "N₂ + O₂ + Ar + CO₂ + other gases"
},


/*==================================================
 * HETEROGENEOUS MIXTURES — SUSPENSIONS
 *==================================================*/

/* MUDDY WATER */
{
    formula: "Variable",
    displayFormula: "Water + Soil Particles",
    name: "Muddy Water",

    elements: {},

    type: "Mixture",
    category: "Heterogeneous Mixture — Suspension",

    components: [
        "Water",
        "Soil Particles"
    ],

    properties: {
        state: "liquid",
        composition: "variable",
        uniformity: "non-uniform",
        particleBehavior: "particles may settle"
    },

    description:
        "Muddy water is a heterogeneous suspension in which relatively large soil particles are dispersed through water and can settle over time.",

    equation:
        "Water + Soil Particles → Suspension"
},


/* SAND IN WATER */
{
    formula: "Variable",
    displayFormula: "H₂O + Sand",
    name: "Sand in Water",

    elements: {
        H: 2,
        O: 1,
        Si: 1
    },

    type: "Mixture",
    category: "Heterogeneous Mixture — Suspension",

    components: [
        "Water",
        "Sand"
    ],

    properties: {
        state: "liquid",
        composition: "variable",
        uniformity: "non-uniform",
        particleBehavior: "particles settle"
    },

    description:
        "Sand in water forms a heterogeneous suspension because sand particles do not dissolve and can settle to the bottom.",

    equation:
        "H₂O + Sand → Suspension"
},


/* FLOUR IN WATER */
{
    formula: "Variable",
    displayFormula: "H₂O + Flour",
    name: "Flour in Water",

    elements: {
        H: 2,
        O: 1,
        C: 1
    },

    type: "Mixture",
    category: "Heterogeneous Mixture — Suspension",

    components: [
        "Water",
        "Flour"
    ],

    properties: {
        state: "liquid",
        composition: "variable",
        uniformity: "non-uniform",
        particleBehavior: "particles may settle"
    },

    description:
        "Flour in water forms a heterogeneous mixture containing dispersed flour particles.",

    equation:
        "Water + Flour → Suspension"
},


/*==================================================
 * HETEROGENEOUS MIXTURES — COLLOIDS
 *==================================================*/

/* MILK */
{
    formula: "Variable",
    displayFormula: "Water + Fats + Proteins + Other Components",
    name: "Milk",

    elements: {},

    type: "Mixture",
    category: "Heterogeneous Mixture — Colloid",

    components: [
        "Water",
        "Milk Fats",
        "Proteins",
        "Lactose",
        "Minerals"
    ],

    properties: {
        state: "liquid",
        composition: "variable",
        uniformity: "microscopically non-uniform",
        dispersedPhase: "fat droplets and proteins"
    },

    description:
        "Milk is a colloidal mixture in which microscopic fat droplets and other particles are dispersed throughout water.",

    equation:
        "Water + Fats + Proteins + Other Components → Colloid"
},


/* FOG */
{
    formula: "Variable",
    displayFormula: "Air + H₂O droplets",
    name: "Fog",

    elements: {
        H: 2,
        O: 1
    },

    type: "Mixture",
    category: "Heterogeneous Mixture — Colloid",

    components: [
        "Air",
        "Water Droplets"
    ],

    properties: {
        state: "gas/liquid aerosol",
        composition: "variable",
        uniformity: "microscopically non-uniform",
        dispersedPhase: "liquid water droplets"
    },

    description:
        "Fog is a colloidal aerosol consisting of tiny liquid water droplets dispersed throughout air.",

    equation:
        "Air + H₂O droplets → Aerosol"
},


/* SMOKE */
{
    formula: "Variable",
    displayFormula: "Air + Solid Particles",
    name: "Smoke",

    elements: {},

    type: "Mixture",
    category: "Heterogeneous Mixture — Colloid",

    components: [
        "Air",
        "Solid Particles",
        "Gases"
    ],

    properties: {
        state: "gas/solid aerosol",
        composition: "variable",
        uniformity: "microscopically non-uniform",
        dispersedPhase: "solid particles"
    },

    description:
        "Smoke is a colloidal aerosol containing very small solid particles and gases dispersed throughout air.",

    equation:
        "Air + Solid Particles + Gases → Aerosol"
},


/* JELLY */
{
    formula: "Variable",
    displayFormula: "Liquid dispersed in solid network",
    name: "Jelly",

    elements: {},

    type: "Mixture",
    category: "Heterogeneous Mixture — Colloid",

    components: [
        "Water",
        "Gelatin or other gelling agents",
        "Dissolved substances"
    ],

    properties: {
        state: "semi-solid",
        composition: "variable",
        uniformity: "microscopically non-uniform",
        dispersedPhase: "liquid within a solid-like network"
    },

    description:
        "Jelly is a gel-type colloid in which liquid is trapped within a three-dimensional network.",

    equation:
        "Liquid + Gel Network → Gel"
}

];