/** JAVASCRIPT DATABASE */

const elements = {

    Hydrogen:{
        symbol: "H",
        name: "Hydrogen",
        number: 1,
        mass: 1.008,
        category: "Nonmetal",
        protons:1,
        electrons:1,
        neutrons:0,
        period:1,
        group:1,
        config:"1s¹"
    },

    Helium:{
        symbol:"He",
        name:"Helium",
        number:2,
        mass:4.0026,
        category:"Noble Gas",
        protons:2,
        electrons:2,
        neutrons:2,
        period:1,
        group:18,
        config:"1s²"
    },

    Oxygen:{
        symbol:"O",
        name:"Oxygen",
        number:8,
        mass:15.999,
        category:"Nonmetal",
        protons:8,
        electrons:8,
        neutrons:8,
        period:2,
        group:16,
        config:"1s² 2s² 2p⁴"
    },

    Lithium:{
        symbol:"Li",
        name:"Lithium",
        number:3,
        mass:6.94,
        category:"Alkali Metal",
        protons:3,
        electrons:3,
        neutrons:4,
        period:2,
        group:1,
        config:"1s² 2s¹"
    },

    Beryllium:{
        symbol:"Be",
        name:"Beryllium",
        number:4,
        mass:9.0122,
        category:"Alkaline Earth Metal",
        protons:4,
        electrons:4,
        neutrons:5,
        period:2,
        group:2,
        config:"1s² 2s²"
    },

    Boron:{
        symbol:"B",
        name:"Boron",
        number:5,
        mass:10.81,
        category:"Metalloid",
        protons:5,
        electrons:5,
        neutrons:6,
        period:2,
        group:13,
        config:"1s² 2s² 2p¹"
    },

    Carbon:{
        symbol:"C",
        name:"Carbon",
        number:6,
        mass:12.011,
        category:"Nonmetal",
        protons:6,
        electrons:6,
        neutrons:6,
        period:2,
        group:14,
        config:"1s² 2s² 2p²"
    },

    Nitrogen:{
        symbol:"N",
        name:"Nitrogen",
        number:7,
        mass:14.007,
        category:"Nonmetal",
        protons:7,
        electrons:7,
        neutrons:7,
        period:2,
        group:15,
        config:"1s² 2s² 2p³"
    },

    Oxygen:{
        symbol:"O",
        name:"Oxygen",
        number:8,
        mass:15.999,
        category:"Nonmetal",
        protons:8,
        electrons:8,
        neutrons:8,
        period:2,
        group:16,
        config:"1s² 2s² 2p⁴"
    },

    Fluorine:{
        symbol:"F",
        name:"Fluorine",
        number:9,
        mass:18.998,
        category:"Halogen",
        protons:9,
        electrons:9,
        neutrons:10,
        period:2,
        group:17,
        config:"1s² 2s² 2p⁵"
    },

    Neon:{
        symbol:"Ne",
        name:"Neon",
        number:10,
        mass:20.180,
        category:"Noble Gas",
        protons:10,
        electrons:10,
        neutrons:10,
        period:2,
        group:18,
        config:"1s² 2s² 2p⁶"
    },

    Sodium: {
        symbol: "Na",
        name: "Sodium",
        number: 11,
        mass: 22.990,
        category: "Alkali Metal",
        protons: 11,
        electrons: 11,
        neutrons: 12,
        period: 3,
        group: 1,
        config: "[Ne] 3s¹"
    },

    Magnesium: {
        symbol: "Mg",
        name: "Magnesium",
        number: 12,
        mass: 24.305,
        category: "Alkaline Earth Metal",
        protons: 12,
        electrons: 12,
        neutrons: 12,
        period: 3,
        group: 2,
        config: "[Ne] 3s²"
    },

    Aluminum: {
        symbol: "Al",
        name: "Aluminum",
        number: 13,
        mass: 26.982,
        category: "Post-Transition Metal",
        protons: 13,
        electrons: 13,
        neutrons: 14,
        period: 3,
        group: 13,
        config: "[Ne] 3s² 3p¹"
    },

    Silicon: {
        symbol: "Si",
        name: "Silicon",
        number: 14,
        mass: 28.085,
        category: "Metalloid",
        protons: 14,
        electrons: 14,
        neutrons: 14,
        period: 3,
        group: 14,
        config: "[Ne] 3s² 3p²"
    },

    Phosphorus: {
        symbol: "P",
        name: "Phosphorus",
        number: 15,
        mass: 30.974,
        category: "Nonmetal",
        protons: 15,
        electrons: 15,
        neutrons: 16,
        period: 3,
        group: 15,
        config: "[Ne] 3s² 3p³"
    },

    Sulfur:{
        symbol:"S",
        name:"Sulfur",
        number:16,
        mass:32.06,
        category:"Nonmetal",
        protons:16,
        electrons:16,
        neutrons:16,
        period:3,
        group:16,
        config:"[Ne] 3s² 3p⁴"
    },

    Chlorine:{
        symbol:"Cl",
        name:"Chlorine",
        number:17,
        mass:35.45,
        category:"Halogen",
        protons:17,
        electrons:17,
        neutrons:18,
        period:3,
        group:17,
        config:"[Ne] 3s² 3p⁵"
    },

    Argon:{
        symbol:"Ar",
        name:"Argon",
        number:18,
        mass:39.948,
        category:"Noble Gas",
        protons:18,
        electrons:18,
        neutrons:22,
        period:3,
        group:18,
        config:"[Ne] 3s² 3p⁶"
    },

    Potassium:{
        symbol:"K",
        name:"Potassium",
        number:19,
        mass:39.0983,
        category:"Alkali Metal",
        protons:19,
        electrons:19,
        neutrons:20,
        period:4,
        group:1,
        config:"[Ar] 4s¹"
    },

    Calcium:{
        symbol:"Ca",
        name:"Calcium",
        number:20,
        mass:40.078,
        category:"Alkaline Earth Metal",
        protons:20,
        electrons:20,
        neutrons:20,
        period:4,
        group:2,
        config:"[Ar] 4s²"
    },

    Scandium:{
        symbol:"Sc",
        name:"Scandium",
        number:21,
        mass:44.9559,
        category:"Transition Metal",
        protons:21,
        electrons:21,
        neutrons:24,
        period:4,
        group:3,
        config:"[Ar] 3d¹ 4s²"
    },

    Titanium:{
        symbol:"Ti",
        name:"Titanium",
        number:22,
        mass:47.867,
        category:"Transition Metal",
        protons:22,
        electrons:22,
        neutrons:26,
        period:4,
        group:4,
        config:"[Ar] 3d² 4s²"
    },

    Vanadium:{
        symbol:"V",
        name:"Vanadium",
        number:23,
        mass:50.9415,
        category:"Transition Metal",
        protons:23,
        electrons:23,
        neutrons:28,
        period:4,
        group:5,
        config:"[Ar] 3d³ 4s²"
    },

    Chromium:{
        symbol:"Cr",
        name:"Chromium",
        number:24,
        mass:51.9961,
        category:"Transition Metal",
        protons:24,
        electrons:24,
        neutrons:28,
        period:4,
        group:6,
        config:"[Ar] 3d⁵ 4s¹"
    },

    Manganese:{
        symbol:"Mn",
        name:"Manganese",
        number:25,
        mass:54.938,
        category:"Transition Metal",
        protons:25,
        electrons:25,
        neutrons:30,
        period:4,
        group:7,
        config:"[Ar] 3d⁵ 4s²"
    },

    Iron: {
        symbol: "Fe",
        name: "Iron",
        number: 26,
        mass: 55.845,
        category: "Transition Metal",
        protons: 26,
        electrons: 26,
        neutrons: 30,
        period: 4,
        group: 8,
        config: "[Ar] 3d⁶ 4s²"
    },

    Cobalt: {
        symbol: "Co",
        name: "Cobalt",
        number: 27,
        mass: 58.933,
        category: "Transition Metal",
        protons: 27,
        electrons: 27,
        neutrons: 32,
        period: 4,
        group: 9,
        config: "[Ar] 3d⁷ 4s²"
    },

    Nickel: {
        symbol: "Ni",
        name: "Nickel",
        number: 28,
        mass: 58.693,
        category: "Transition Metal",
        protons: 28,
        electrons: 28,
        neutrons: 31,
        period: 4,
        group: 10,
        config: "[Ar] 3d⁸ 4s²"
    },

    Copper: {
        symbol: "Cu",
        name: "Copper",
        number: 29,
        mass: 63.546,
        category: "Transition Metal",
        protons: 29,
        electrons: 29,
        neutrons: 35,
        period: 4,
        group: 11,
        config: "[Ar] 3d¹⁰ 4s¹"
    },

    Zinc: {
        symbol: "Zn",
        name: "Zinc",
        number: 30,
        mass: 65.38,
        category: "Transition Metal",
        protons: 30,
        electrons: 30,
        neutrons: 35,
        period: 4,
        group: 12,
        config: "[Ar] 3d¹⁰ 4s²"
    },

    Gallium: {
        symbol: "Ga",
        name: "Gallium",
        number: 31,
        mass: 69.723,
        category: "Post-Transition Metal",
        protons: 31,
        electrons: 31,
        neutrons: 39,
        period: 4,
        group: 13,
        config: "[Ar] 3d¹⁰ 4s² 4p¹"
    },

    Germanium: {
        symbol: "Ge",
        name: "Germanium",
        number: 32,
        mass: 72.630,
        category: "Metalloid",
        protons: 32,
        electrons: 32,
        neutrons: 41,
        period: 4,
        group: 14,
        config: "[Ar] 3d¹⁰ 4s² 4p²"
    },

    Arsenic: {
        symbol: "As",
        name: "Arsenic",
        number: 33,
        mass: 74.922,
        category: "Metalloid",
        protons: 33,
        electrons: 33,
        neutrons: 42,
        period: 4,
        group: 15,
        config: "[Ar] 3d¹⁰ 4s² 4p³"
    },

    Selenium: {
        symbol: "Se",
        name: "Selenium",
        number: 34,
        mass: 78.971,
        category: "Nonmetal",
        protons: 34,
        electrons: 34,
        neutrons: 45,
        period: 4,
        group: 16,
        config: "[Ar] 3d¹⁰ 4s² 4p⁴"
    },

    Bromine: {
        symbol: "Br",
        name: "Bromine",
        number: 35,
        mass: 79.904,
        category: "Halogen",
        protons: 35,
        electrons: 35,
        neutrons: 45,
        period: 4,
        group: 17,
        config: "[Ar] 3d¹⁰ 4s² 4p⁵"
    },

    Krypton: {
        symbol: "Kr",
        name: "Krypton",
        number: 36,
        mass: 83.798,
        category: "Noble Gas",
        protons: 36,
        electrons: 36,
        neutrons: 48,
        period: 4,
        group: 18,
        config: "[Ar] 3d¹⁰ 4s² 4p⁶"
    },

    Rubidium: {
        symbol: "Rb",
        name: "Rubidium",
        number: 37,
        mass: 85.468,
        category: "Alkali Metal",
        protons: 37,
        electrons: 37,
        neutrons: 48,
        period: 5,
        group: 1,
        config: "[Kr] 5s¹"
    },

    Strontium: {
        symbol: "Sr",
        name: "Strontium",
        number: 38,
        mass: 87.62,
        category: "Alkaline Earth Metal",
        protons: 38,
        electrons: 38,
        neutrons: 50,
        period: 5,
        group: 2,
        config: "[Kr] 5s²"
    },

    Yttrium: {
        symbol: "Y",
        name: "Yttrium",
        number: 39,
        mass: 88.906,
        category: "Transition Metal",
        protons: 39,
        electrons: 39,
        neutrons: 50,
        period: 5,
        group: 3,
        config: "[Kr] 4d¹ 5s²"
    },

    Zirconium: {
        symbol: "Zr",
        name: "Zirconium",
        number: 40,
        mass: 91.224,
        category: "Transition Metal",
        protons: 40,
        electrons: 40,
        neutrons: 51,
        period: 5,
        group: 4,
        config: "[Kr] 4d² 5s²"
    },

    Niobium: {
        symbol: "Nb",
        name: "Niobium",
        number: 41,
        mass: 92.906,
        category: "Transition Metal",
        protons: 41,
        electrons: 41,
        neutrons: 52,
        period: 5,
        group: 5,
        config: "[Kr] 4d⁴ 5s¹"
    },

    Molybdenum: {
        symbol: "Mo",
        name: "Molybdenum",
        number: 42,
        mass: 95.95,
        category: "Transition Metal",
        protons: 42,
        electrons: 42,
        neutrons: 54,
        period: 5,
        group: 6,
        config: "[Kr] 4d⁵ 5s¹"
    },

    Technetium: {
        symbol: "Tc",
        name: "Technetium",
        number: 43,
        mass: 98,
        category: "Transition Metal",
        protons: 43,
        electrons: 43,
        neutrons: 55,
        period: 5,
        group: 7,
        config: "[Kr] 4d⁵ 5s²"
    },

    Ruthenium: {
        symbol: "Ru",
        name: "Ruthenium",
        number: 44,
        mass: 101.07,
        category: "Transition Metal",
        protons: 44,
        electrons: 44,
        neutrons: 57,
        period: 5,
        group: 8,
        config: "[Kr] 4d⁷ 5s¹"
    },

    Rhodium: {
        symbol: "Rh",
        name: "Rhodium",
        number: 45,
        mass: 102.906,
        category: "Transition Metal",
        protons: 45,
        electrons: 45,
        neutrons: 58,
        period: 5,
        group: 9,
        config: "[Kr] 4d⁸ 5s¹"
    },

    Palladium: {
        symbol: "Pd",
        name: "Palladium",
        number: 46,
        mass: 106.42,
        category: "Transition Metal",
        protons: 46,
        electrons: 46,
        neutrons: 60,
        period: 5,
        group: 10,
        config: "[Kr] 4d¹⁰"
    },

    Silver: {
        symbol: "Ag",
        name: "Silver",
        number: 47,
        mass: 107.868,
        category: "Transition Metal",
        protons: 47,
        electrons: 47,
        neutrons: 61,
        period: 5,
        group: 11,
        config: "[Kr] 4d¹⁰ 5s¹"
    },

    Cadmium: {
        symbol: "Cd",
        name: "Cadmium",
        number: 48,
        mass: 112.414,
        category: "Transition Metal",
        protons: 48,
        electrons: 48,
        neutrons: 64,
        period: 5,
        group: 12,
        config: "[Kr] 4d¹⁰ 5s²"
    },

    Indium: {
        symbol: "In",
        name: "Indium",
        number: 49,
        mass: 114.818,
        category: "Post-Transition Metal",
        protons: 49,
        electrons: 49,
        neutrons: 66,
        period: 5,
        group: 13,
        config: "[Kr] 4d¹⁰ 5s² 5p¹"
    },

    Tin: {
        symbol: "Sn",
        name: "Tin",
        number: 50,
        mass: 118.710,
        category: "Post-Transition Metal",
        protons: 50,
        electrons: 50,
        neutrons: 69,
        period: 5,
        group: 14,
        config: "[Kr] 4d¹⁰ 5s² 5p²"
    },

    Antimony: {
        symbol: "Sb",
        name: "Antimony",
        number: 51,
        mass: 121.760,
        category: "Metalloid",
        protons: 51,
        electrons: 51,
        neutrons: 71,
        period: 5,
        group: 15,
        config: "[Kr] 4d¹⁰ 5s² 5p³"
    },

    Tellurium: {
        symbol: "Te",
        name: "Tellurium",
        number: 52,
        mass: 127.60,
        category: "Metalloid",
        protons: 52,
        electrons: 52,
        neutrons: 76,
        period: 5,
        group: 16,
        config: "[Kr] 4d¹⁰ 5s² 5p⁴"
    },

    Iodine: {
        symbol: "I",
        name: "Iodine",
        number: 53,
        mass: 126.904,
        category: "Halogen",
        protons: 53,
        electrons: 53,
        neutrons: 74,
        period: 5,
        group: 17,
        config: "[Kr] 4d¹⁰ 5s² 5p⁵"
    },

    Xenon: {
        symbol: "Xe",
        name: "Xenon",
        number: 54,
        mass: 131.293,
        category: "Noble Gas",
        protons: 54,
        electrons: 54,
        neutrons: 77,
        period: 5,
        group: 18,
        config: "[Kr] 4d¹⁰ 5s² 5p⁶"
    },

    Cesium: {
        symbol: "Cs",
        name: "Cesium",
        number: 55,
        mass: 132.905,
        category: "Alkali Metal",
        protons: 55,
        electrons: 55,
        neutrons: 78,
        period: 6,
        group: 1,
        config: "[Xe] 6s¹"
    },

    Barium: {
        symbol: "Ba",
        name: "Barium",
        number: 56,
        mass: 137.327,
        category: "Alkaline Earth Metal",
        protons: 56,
        electrons: 56,
        neutrons: 81,
        period: 6,
        group: 2,
        config: "[Xe] 6s²"
    },

    Lanthanum: {
        symbol: "La",
        name: "Lanthanum",
        number: 57,
        mass: 138.90547,
        category: "Lanthanide",
        protons: 57,
        electrons: 57,
        neutrons: 82,
        period: 6,
        group: 3,
        config: "[Xe] 5d¹ 6s²"
    },

    Cerium: {
        symbol: "Ce",
        name: "Cerium",
        number: 58,
        mass: 140.116,
        category: "Lanthanide",
        protons: 58,
        electrons: 58,
        neutrons: 82,
        period: 6,
        group: "—",
        config: "[Xe] 4f¹ 5d¹ 6s²"
    },

    Praseodymium: {
        symbol: "Pr",
        name: "Praseodymium",
        number: 59,
        mass: 140.90766,
        category: "Lanthanide",
        protons: 59,
        electrons: 59,
        neutrons: 82,
        period: 6,
        group: "—",
        config: "[Xe] 4f³ 6s²"
    },

    Neodymium: {
        symbol: "Nd",
        name: "Neodymium",
        number: 60,
        mass: 144.242,
        category: "Lanthanide",
        protons: 60,
        electrons: 60,
        neutrons: 84,
        period: 6,
        group: "—",
        config: "[Xe] 4f⁴ 6s²"
    },

    Promethium: {
        symbol: "Pm",
        name: "Promethium",
        number: 61,
        mass: 145,
        category: "Lanthanide",
        protons: 61,
        electrons: 61,
        neutrons: 84,
        period: 6,
        group: "—",
        config: "[Xe] 4f⁵ 6s²"
    },

    Samarium: {
        symbol: "Sm",
        name: "Samarium",
        number: 62,
        mass: 150.36,
        category: "Lanthanide",
        protons: 62,
        electrons: 62,
        neutrons: 88,
        period: 6,
        group: "—",
        config: "[Xe] 4f⁶ 6s²"
    },

    Europium: {
        symbol: "Eu",
        name: "Europium",
        number: 63,
        mass: 151.964,
        category: "Lanthanide",
        protons: 63,
        electrons: 63,
        neutrons: 89,
        period: 6,
        group: "—",
        config: "[Xe] 4f⁷ 6s²"
    },

    Gadolinium: {
        symbol: "Gd",
        name: "Gadolinium",
        number: 64,
        mass: 157.25,
        category: "Lanthanide",
        protons: 64,
        electrons: 64,
        neutrons: 93,
        period: 6,
        group: "—",
        config: "[Xe] 4f⁷ 5d¹ 6s²"
    },

    Terbium: {
        symbol: "Tb",
        name: "Terbium",
        number: 65,
        mass: 158.92535,
        category: "Lanthanide",
        protons: 65,
        electrons: 65,
        neutrons: 94,
        period: 6,
        group: "—",
        config: "[Xe] 4f⁹ 6s²"
    },

    Dysprosium: {
        symbol: "Dy",
        name: "Dysprosium",
        number: 66,
        mass: 162.500,
        category: "Lanthanide",
        protons: 66,
        electrons: 66,
        neutrons: 97,
        period: 6,
        group: "—",
        config: "[Xe] 4f¹⁰ 6s²"
    },

    Holmium: {
        symbol: "Ho",
        name: "Holmium",
        number: 67,
        mass: 164.93033,
        category: "Lanthanide",
        protons: 67,
        electrons: 67,
        neutrons: 98,
        period: 6,
        group: "—",
        config: "[Xe] 4f¹¹ 6s²"
    },

    Erbium: {
        symbol: "Er",
        name: "Erbium",
        number: 68,
        mass: 167.259,
        category: "Lanthanide",
        protons: 68,
        electrons: 68,
        neutrons: 99,
        period: 6,
        group: "—",
        config: "[Xe] 4f¹² 6s²"
    },

    Thulium: {
        symbol: "Tm",
        name: "Thulium",
        number: 69,
        mass: 168.93422,
        category: "Lanthanide",
        protons: 69,
        electrons: 69,
        neutrons: 100,
        period: 6,
        group: "—",
        config: "[Xe] 4f¹³ 6s²"
    },

    Ytterbium: {
        symbol: "Yb",
        name: "Ytterbium",
        number: 70,
        mass: 173.045,
        category: "Lanthanide",
        protons: 70,
        electrons: 70,
        neutrons: 103,
        period: 6,
        group: "—",
        config: "[Xe] 4f¹⁴ 6s²"
    },

    Lutetium: {
        symbol: "Lu",
        name: "Lutetium",
        number: 71,
        mass: 174.9668,
        category: "Lanthanide",
        protons: 71,
        electrons: 71,
        neutrons: 104,
        period: 6,
        group: 3,
        config: "[Xe] 4f¹⁴ 5d¹ 6s²"
    },

    Hafnium: {
        symbol: "Hf",
        name: "Hafnium",
        number: 72,
        mass: 178.49,
        category: "Transition Metal",
        protons: 72,
        electrons: 72,
        neutrons: 106,
        period: 6,
        group: 4,
        config: "[Xe] 4f¹⁴ 5d² 6s²"
    },

    Tantalum: {
        symbol: "Ta",
        name: "Tantalum",
        number: 73,
        mass: 180.94788,
        category: "Transition Metal",
        protons: 73,
        electrons: 73,
        neutrons: 108,
        period: 6,
        group: 5,
        config: "[Xe] 4f¹⁴ 5d³ 6s²"
    },

    Tungsten: {
        symbol: "W",
        name: "Tungsten",
        number: 74,
        mass: 183.84,
        category: "Transition Metal",
        protons: 74,
        electrons: 74,
        neutrons: 110,
        period: 6,
        group: 6,
        config: "[Xe] 4f¹⁴ 5d⁴ 6s²"
    },

    Rhenium: {
        symbol: "Re",
        name: "Rhenium",
        number: 75,
        mass: 186.207,
        category: "Transition Metal",
        protons: 75,
        electrons: 75,
        neutrons: 111,
        period: 6,
        group: 7,
        config: "[Xe] 4f¹⁴ 5d⁵ 6s²"
    },

    Osmium: {
        symbol: "Os",
        name: "Osmium",
        number: 76,
        mass: 190.23,
        category: "Transition Metal",
        protons: 76,
        electrons: 76,
        neutrons: 114,
        period: 6,
        group: 8,
        config: "[Xe] 4f¹⁴ 5d⁶ 6s²"
    },

    Iridium: {
        symbol: "Ir",
        name: "Iridium",
        number: 77,
        mass: 192.217,
        category: "Transition Metal",
        protons: 77,
        electrons: 77,
        neutrons: 115,
        period: 6,
        group: 9,
        config: "[Xe] 4f¹⁴ 5d⁷ 6s²"
    },

    Platinum: {
        symbol: "Pt",
        name: "Platinum",
        number: 78,
        mass: 195.084,
        category: "Transition Metal",
        protons: 78,
        electrons: 78,
        neutrons: 117,
        period: 6,
        group: 10,
        config: "[Xe] 4f¹⁴ 5d⁹ 6s¹"
    },

    Gold: {
        symbol: "Au",
        name: "Gold",
        number: 79,
        mass: 196.96657,
        category: "Transition Metal",
        protons: 79,
        electrons: 79,
        neutrons: 118,
        period: 6,
        group: 11,
        config: "[Xe] 4f¹⁴ 5d¹⁰ 6s¹"
    },

    Mercury: {
        symbol: "Hg",
        name: "Mercury",
        number: 80,
        mass: 200.592,
        category: "Transition Metal",
        protons: 80,
        electrons: 80,
        neutrons: 121,
        period: 6,
        group: 12,
        config: "[Xe] 4f¹⁴ 5d¹⁰ 6s²"
    },

    Thallium: {
        symbol: "Tl",
        name: "Thallium",
        number: 81,
        mass: 204.38,
        category: "Post-Transition Metal",
        protons: 81,
        electrons: 81,
        neutrons: 123,
        period: 6,
        group: 13,
        config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹"
    },

    Lead: {
        symbol: "Pb",
        name: "Lead",
        number: 82,
        mass: 207.2,
        category: "Post-Transition Metal",
        protons: 82,
        electrons: 82,
        neutrons: 125,
        period: 6,
        group: 14,
        config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²"
    },

    Bismuth: {
        symbol: "Bi",
        name: "Bismuth",
        number: 83,
        mass: 208.9804,
        category: "Post-Transition Metal",
        protons: 83,
        electrons: 83,
        neutrons: 126,
        period: 6,
        group: 15,
        config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³"
    },

    Polonium: {
        symbol: "Po",
        name: "Polonium",
        number: 84,
        mass: 209,
        category: "Post-Transition Metal",
        protons: 84,
        electrons: 84,
        neutrons: 125,
        period: 6,
        group: 16,
        config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴"
    },

    Astatine: {
        symbol: "At",
        name: "Astatine",
        number: 85,
        mass: 210,
        category: "Halogen",
        protons: 85,
        electrons: 85,
        neutrons: 125,
        period: 6,
        group: 17,
        config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵"
    },

    Radon: {
        symbol: "Rn",
        name: "Radon",
        number: 86,
        mass: 222,
        category: "Noble Gas",
        protons: 86,
        electrons: 86,
        neutrons: 136,
        period: 6,
        group: 18,
        config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶"
    },

    Francium: {
        symbol: "Fr",
        name: "Francium",
        number: 87,
        mass: 223,
        category: "Alkali Metal",
        protons: 87,
        electrons: 87,
        neutrons: 136,
        period: 7,
        group: 1,
        config: "[Rn] 7s¹"
    },

    Radium: {
        symbol: "Ra",
        name: "Radium",
        number: 88,
        mass: 226,
        category: "Alkaline Earth Metal",
        protons: 88,
        electrons: 88,
        neutrons: 138,
        period: 7,
        group: 2,
        config: "[Rn] 7s²"
    },

    Actinium: {
        symbol: "Ac",
        name: "Actinium",
        number: 89,
        mass: 227,
        category: "Actinide",
        protons: 89,
        electrons: 89,
        neutrons: 138,
        period: 7,
        group: 3,
        config: "[Rn] 6d¹ 7s²"
    },

    Thorium: {
        symbol: "Th",
        name: "Thorium",
        number: 90,
        mass: 232.0377,
        category: "Actinide",
        protons: 90,
        electrons: 90,
        neutrons: 142,
        period: 7,
        group: "—",
        config: "[Rn] 6d² 7s²"
    },

    Protactinium: {
        symbol: "Pa",
        name: "Protactinium",
        number: 91,
        mass: 231.03588,
        category: "Actinide",
        protons: 91,
        electrons: 91,
        neutrons: 140,
        period: 7,
        group: "—",
        config: "[Rn] 5f² 6d¹ 7s²"
    },

    Uranium: {
        symbol: "U",
        name: "Uranium",
        number: 92,
        mass: 238.02891,
        category: "Actinide",
        protons: 92,
        electrons: 92,
        neutrons: 146,
        period: 7,
        group: "—",
        config: "[Rn] 5f³ 6d¹ 7s²"
    },

    Neptunium: {
        symbol: "Np",
        name: "Neptunium",
        number: 93,
        mass: 237,
        category: "Actinide",
        protons: 93,
        electrons: 93,
        neutrons: 144,
        period: 7,
        group: "—",
        config: "[Rn] 5f⁴ 6d¹ 7s²"
    },

    Plutonium: {
        symbol: "Pu",
        name: "Plutonium",
        number: 94,
        mass: 244,
        category: "Actinide",
        protons: 94,
        electrons: 94,
        neutrons: 150,
        period: 7,
        group: "—",
        config: "[Rn] 5f⁶ 7s²"
    },

    Americium: {
        symbol: "Am",
        name: "Americium",
        number: 95,
        mass: 243,
        category: "Actinide",
        protons: 95,
        electrons: 95,
        neutrons: 148,
        period: 7,
        group: "—",
        config: "[Rn] 5f⁷ 7s²"
    },

    Curium: {
        symbol: "Cm",
        name: "Curium",
        number: 96,
        mass: 247,
        category: "Actinide",
        protons: 96,
        electrons: 96,
        neutrons: 151,
        period: 7,
        group: "—",
        config: "[Rn] 5f⁷ 6d¹ 7s²"
    },

    Berkelium: {
        symbol: "Bk",
        name: "Berkelium",
        number: 97,
        mass: 247,
        category: "Actinide",
        protons: 97,
        electrons: 97,
        neutrons: 150,
        period: 7,
        group: "—",
        config: "[Rn] 5f⁹ 7s²"
    },

    Californium: {
        symbol: "Cf",
        name: "Californium",
        number: 98,
        mass: 251,
        category: "Actinide",
        protons: 98,
        electrons: 98,
        neutrons: 153,
        period: 7,
        group: "—",
        config: "[Rn] 5f¹⁰ 7s²"
    },

    Einsteinium: {
        symbol: "Es",
        name: "Einsteinium",
        number: 99,
        mass: 252,
        category: "Actinide",
        protons: 99,
        electrons: 99,
        neutrons: 153,
        period: 7,
        group: "—",
        config: "[Rn] 5f¹¹ 7s²"
    },

    Fermium: {
        symbol: "Fm",
        name: "Fermium",
        number: 100,
        mass: 257,
        category: "Actinide",
        protons: 100,
        electrons: 100,
        neutrons: 157,
        period: 7,
        group: "—",
        config: "[Rn] 5f¹² 7s²"
    },

    Mendelevium: {
        symbol: "Md",
        name: "Mendelevium",
        number: 101,
        mass: 258,
        category: "Actinide",
        protons: 101,
        electrons: 101,
        neutrons: 157,
        period: 7,
        group: "—",
        config: "[Rn] 5f¹³ 7s²"
    },

    Nobelium: {
        symbol: "No",
        name: "Nobelium",
        number: 102,
        mass: 259,
        category: "Actinide",
        protons: 102,
        electrons: 102,
        neutrons: 157,
        period: 7,
        group: "—",
        config: "[Rn] 5f¹⁴ 7s²"
    },

    Lawrencium: {
        symbol: "Lr",
        name: "Lawrencium",
        number: 103,
        mass: 266,
        category: "Actinide",
        protons: 103,
        electrons: 103,
        neutrons: 163,
        period: 7,
        group: 3,
        config: "[Rn] 5f¹⁴ 7s² 7p¹"
    },

    Rutherfordium: {
        symbol: "Rf",
        name: "Rutherfordium",
        number: 104,
        mass: 267,
        category: "Transition Metal",
        protons: 104,
        electrons: 104,
        neutrons: 163,
        period: 7,
        group: 4,
        config: "[Rn] 5f¹⁴ 6d² 7s²"
    },

    Dubnium: {
        symbol: "Db",
        name: "Dubnium",
        number: 105,
        mass: 268,
        category: "Transition Metal",
        protons: 105,
        electrons: 105,
        neutrons: 163,
        period: 7,
        group: 5,
        config: "[Rn] 5f¹⁴ 6d³ 7s²"
    },

    Seaborgium: {
        symbol: "Sg",
        name: "Seaborgium",
        number: 106,
        mass: 269,
        category: "Transition Metal",
        protons: 106,
        electrons: 106,
        neutrons: 163,
        period: 7,
        group: 6,
        config: "[Rn] 5f¹⁴ 6d⁴ 7s²"
    },

    Bohrium: {
        symbol: "Bh",
        name: "Bohrium",
        number: 107,
        mass: 270,
        category: "Transition Metal",
        protons: 107,
        electrons: 107,
        neutrons: 163,
        period: 7,
        group: 7,
        config: "[Rn] 5f¹⁴ 6d⁵ 7s²"
    },

    Hassium: {
        symbol: "Hs",
        name: "Hassium",
        number: 108,
        mass: 269,
        category: "Transition Metal",
        protons: 108,
        electrons: 108,
        neutrons: 161,
        period: 7,
        group: 8,
        config: "[Rn] 5f¹⁴ 6d⁶ 7s²"
    },

    Meitnerium: {
        symbol: "Mt",
        name: "Meitnerium",
        number: 109,
        mass: 278,
        category: "Transition Metal",
        protons: 109,
        electrons: 109,
        neutrons: 169,
        period: 7,
        group: 9,
        config: "[Rn] 5f¹⁴ 6d⁷ 7s²"
    },

    Darmstadtium: {
        symbol: "Ds",
        name: "Darmstadtium",
        number: 110,
        mass: 281,
        category: "Transition Metal",
        protons: 110,
        electrons: 110,
        neutrons: 171,
        period: 7,
        group: 10,
        config: "[Rn] 5f¹⁴ 6d⁹ 7s¹"
    },

    Roentgenium: {
        symbol: "Rg",
        name: "Roentgenium",
        number: 111,
        mass: 282,
        category: "Transition Metal",
        protons: 111,
        electrons: 111,
        neutrons: 171,
        period: 7,
        group: 11,
        config: "[Rn] 5f¹⁴ 6d¹⁰ 7s¹"
    },

    Copernicium: {
        symbol: "Cn",
        name: "Copernicium",
        number: 112,
        mass: 285,
        category: "Transition Metal",
        protons: 112,
        electrons: 112,
        neutrons: 173,
        period: 7,
        group: 12,
        config: "[Rn] 5f¹⁴ 6d¹⁰ 7s²"
    },

    Nihonium: {
        symbol: "Nh",
        name: "Nihonium",
        number: 113,
        mass: 286,
        category: "Post-Transition Metal",
        protons: 113,
        electrons: 113,
        neutrons: 173,
        period: 7,
        group: 13,
        config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹"
    },

    Flerovium: {
        symbol: "Fl",
        name: "Flerovium",
        number: 114,
        mass: 289,
        category: "Post-Transition Metal",
        protons: 114,
        electrons: 114,
        neutrons: 175,
        period: 7,
        group: 14,
        config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²"
    },

    Moscovium: {
        symbol: "Mc",
        name: "Moscovium",
        number: 115,
        mass: 290,
        category: "Post-Transition Metal",
        protons: 115,
        electrons: 115,
        neutrons: 175,
        period: 7,
        group: 15,
        config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³"
    },

    Livermorium: {
        symbol: "Lv",
        name: "Livermorium",
        number: 116,
        mass: 293,
        category: "Post-Transition Metal",
        protons: 116,
        electrons: 116,
        neutrons: 177,
        period: 7,
        group: 16,
        config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴"
    },

    Tennessine: {
        symbol: "Ts",
        name: "Tennessine",
        number: 117,
        mass: 294,
        category: "Halogen",
        protons: 117,
        electrons: 117,
        neutrons: 177,
        period: 7,
        group: 17,
        config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵"
    },

    Oganesson: {
        symbol: "Og",
        name: "Oganesson",
        number: 118,
        mass: 294,
        category: "Noble Gas",
        protons: 118,
        electrons: 118,
        neutrons: 176,
        period: 7,
        group: 18,
        config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶"
    },
};