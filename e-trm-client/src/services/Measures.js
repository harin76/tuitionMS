import uuidv4 from 'uuid/v4'
import _ from 'lodash'

const testMeasure = {
  id: '08270754-9b09-4427-9c8f-60d77770cd39',
  name: 'Central Air Conditioner - HTC',
  description: 'Central Air Conditioner - HTC',
  version: null,
  referenceTables: [],
  lookupTables: [{
    name: 'REMAINING_LIFE',
    'values': [
      ['Age of Replaced Unit', 'Remaining Useful Life'],
      [2, 15.8],
      [3, 14.9],
      [4, 14.1],
      [5, 13.3],
      [6, 12.6],
      [7, 11.9],
      [8, 11.3],
      [9, 10.8],
      [10, 10.3],
      [11, 9.8],
      [12, 9.4],
      [13, 9],
      [14, 8.6],
      [15, 8.2],
      [16, 7.9],
      [17, 7.6],
      [18, 7],
      [19, 6],
      [20, 5],
      [21, 4],
      [22, 3],
      [23, 2],
      [24, 1],
      [25, 0]
    ]
  }, {
    name: 'ENERGY_SAVINGS',
    values: [
      ['Key', 'kWh', 'kW'],
      ['New Construction1.514.5-14.9', 125, 0.05],
      ['New Construction1.515.0-15.9', 285, 0.12],
      ['New Construction1.516.0-16.9', 446, 0.19],
      ['New Construction1.517.0-17.9', 784, 0.19],
      ['New Construction1.518.0-20.9', 907, 0.26],
      ['New Construction1.521.0 Above', 1211, 0.38],
      ['New Construction214.5-14.9', 166, 0.07],
      ['New Construction215.0-15.9', 380, 0.16],
      ['New Construction216.0-16.9', 594, 0.25],
      ['New Construction217.0-17.9', 1045, 0.26],
      ['New Construction218.0-20.9', 1210, 0.34],
      ['New Construction221.0 Above', 1614, 0.51],
      ['New Construction2.514.5-14.9', 208, 0.09],
      ['New Construction2.515.0-15.9', 475, 0.2],
      ['New Construction2.516.0-16.9', 743, 0.32],
      ['New Construction2.517.0-17.9', 1306, 0.32],
      ['New Construction2.518.0-20.9', 1512, 0.43],
      ['New Construction2.521.0 Above', 2018, 0.63],
      ['New Construction314.5-14.9', 249, 0.11],
      ['New Construction315.0-15.9', 570, 0.24],
      ['New Construction316.0-16.9', 891, 0.38],
      ['New Construction317.0-17.9', 1567, 0.39],
      ['New Construction318.0-20.9', 1814, 0.51],
      ['New Construction321.0 Above', 2421, 0.76],
      ['New Construction3.514.5-14.9', 291, 0.12],
      ['New Construction3.515.0-15.9', 665, 0.28],
      ['New Construction3.516.0-16.9', 1040, 0.44],
      ['New Construction3.517.0-17.9', 1828, 0.45],
      ['New Construction3.518.0-20.9', 2117, 0.6],
      ['New Construction3.521.0 Above', 2825, 0.89],
      ['New Construction414.5-14.9', 333, 0.14],
      ['New Construction415.0-15.9', 760, 0.33],
      ['New Construction416.0-16.9', 1188, 0.51],
      ['New Construction417.0-17.9', 2089, 0.52],
      ['New Construction418.0-20.9', 2419, 0.69],
      ['New Construction421.0 Above', 3228, 1.02],
      ['New Construction514.5-14.9', 416, 0.18],
      ['New Construction515.0-15.9', 950, 0.41],
      ['New Construction516.0-16.9', 1485, 0.64],
      ['New Construction517.0-17.9', 2612, 0.65],
      ['New Construction518.0-20.9', 3024, 0.86],
      ['New Construction521.0 Above', 4035, 1.27],
      ['Replace-on-Burnout1.514.5-14.9', 344, 0.15],
      ['Replace-on-Burnout1.515.0-15.9', 504, 0.22],
      ['Replace-on-Burnout1.516.0-16.9', 665, 0.28],
      ['Replace-on-Burnout1.517.0-17.9', 1003, 0.29],
      ['Replace-on-Burnout1.518.0-20.9', 1127, 0.35],
      ['Replace-on-Burnout1.521.0 Above', 1430, 0.47],
      ['Replace-on-Burnout214.5-14.9', 459, 0.2],
      ['Replace-on-Burnout215.0-15.9', 673, 0.29],
      ['Replace-on-Burnout216.0-16.9', 886, 0.38],
      ['Replace-on-Burnout217.0-17.9', 1337, 0.38],
      ['Replace-on-Burnout218.0-20.9', 1502, 0.47],
      ['Replace-on-Burnout221.0 Above', 1906, 0.63],
      ['Replace-on-Burnout2.514.5-14.9', 573, 0.25],
      ['Replace-on-Burnout2.515.0-15.9', 841, 0.36],
      ['Replace-on-Burnout2.516.0-16.9', 1108, 0.47],
      ['Replace-on-Burnout2.517.0-17.9', 1671, 0.48],
      ['Replace-on-Burnout2.518.0-20.9', 1878, 0.58],
      ['Replace-on-Burnout2.521.0 Above', 2383, 0.79],
      ['Replace-on-Burnout314.5-14.9', 688, 0.29],
      ['Replace-on-Burnout315.0-15.9', 1009, 0.43],
      ['Replace-on-Burnout316.0-16.9', 1330, 0.57],
      ['Replace-on-Burnout317.0-17.9', 2006, 0.58],
      ['Replace-on-Burnout318.0-20.9', 2253, 0.7],
      ['Replace-on-Burnout321.0 Above', 2860, 0.95],
      ['Replace-on-Burnout3.514.5-14.9', 803, 0.34],
      ['Replace-on-Burnout3.515.0-15.9', 1177, 0.5],
      ['Replace-on-Burnout3.516.0-16.9', 1551, 0.66],
      ['Replace-on-Burnout3.517.0-17.9', 2340, 0.67],
      ['Replace-on-Burnout3.518.0-20.9', 2629, 0.82],
      ['Replace-on-Burnout3.521.0 Above', 3336, 1.11],
      ['Replace-on-Burnout414.5-14.9', 918, 0.39],
      ['Replace-on-Burnout415.0-15.9', 1345, 0.58],
      ['Replace-on-Burnout416.0-16.9', 1773, 0.76],
      ['Replace-on-Burnout417.0-17.9', 2674, 0.77],
      ['Replace-on-Burnout418.0-20.9', 3004, 0.94],
      ['Replace-on-Burnout421.0 Above', 3813, 1.27],
      ['Replace-on-Burnout514.5-14.9', 1147, 0.49],
      ['Replace-on-Burnout515.0-15.9', 1682, 0.72],
      ['Replace-on-Burnout516.0-16.9', 2216, 0.95],
      ['Replace-on-Burnout517.0-17.9', 3343, 0.96],
      ['Replace-on-Burnout518.0-20.9', 3755, 1.17],
      ['Replace-on-Burnout521.0 Above', 4766, 1.58],
      ['Early Retirement1.514.5-14.9', 1372, 0.59],
      ['Early Retirement1.515.0-15.9', 1533, 0.66],
      ['Early Retirement1.516.0-16.9', 1693, 0.72],
      ['Early Retirement1.517.0-17.9', 2031, 0.73],
      ['Early Retirement1.518.0-20.9', 2155, 0.79],
      ['Early Retirement1.521.0 Above', 2458, 0.91],
      ['Early Retirement214.5-14.9', 1830, 0.78],
      ['Early Retirement215.0-15.9', 2043, 0.87],
      ['Early Retirement216.0-16.9', 2257, 0.97],
      ['Early Retirement217.0-17.9', 2708, 0.97],
      ['Early Retirement218.0-20.9', 2873, 1.05],
      ['Early Retirement221.0 Above', 3277, 1.22],
      ['Early Retirement2.514.5-14.9', 2287, 0.98],
      ['Early Retirement2.515.0-15.9', 2554, 1.09],
      ['Early Retirement2.516.0-16.9', 2822, 1.21],
      ['Early Retirement2.517.0-17.9', 3385, 1.21],
      ['Early Retirement2.518.0-20.9', 3591, 1.32],
      ['Early Retirement2.521.0 Above', 4097, 1.52],
      ['Early Retirement314.5-14.9', 2744, 1.17],
      ['Early Retirement315.0-15.9', 3065, 1.31],
      ['Early Retirement316.0-16.9', 3386, 1.45],
      ['Early Retirement317.0-17.9', 4062, 1.46],
      ['Early Retirement318.0-20.9', 4309, 1.58],
      ['Early Retirement321.0 Above', 4916, 1.83],
      ['Early Retirement3.514.5-14.9', 3202, 1.37],
      ['Early Retirement3.515.0-15.9', 3576, 1.53],
      ['Early Retirement3.516.0-16.9', 3950, 1.69],
      ['Early Retirement3.517.0-17.9', 4739, 1.7],
      ['Early Retirement3.518.0-20.9', 5027, 1.85],
      ['Early Retirement3.521.0 Above', 5735, 2.13],
      ['Early Retirement414.5-14.9', 3659, 1.57],
      ['Early Retirement415.0-15.9', 4087, 1.75],
      ['Early Retirement416.0-16.9', 4514, 1.93],
      ['Early Retirement417.0-17.9', 5416, 1.94],
      ['Early Retirement418.0-20.9', 5746, 2.11],
      ['Early Retirement421.0 Above', 6554, 2.44],
      ['Early Retirement514.5-14.9', 4574, 1.96],
      ['Early Retirement515.0-15.9', 5108, 2.19],
      ['Early Retirement516.0-16.9', 5643, 2.41],
      ['Early Retirement517.0-17.9', 6770, 2.43],
      ['Early Retirement518.0-20.9', 7182, 2.64],
      ['Early Retirement521.0 Above', 8193, 3.05]
    ]
  }],
  algorithm: `// Lookup Remaining useful Life\nremainingUsefulLife = lookup('REMAINING_LIFE', ageOfReplacedUnit, 'Remaining Useful Life')\n\n\n// Deemed Early Retirement Energy Savings (kWh)\nif (remainingUsefulLife >= 5 ) {\n  deemedEarlyRetirementES = lookup('ENERGY_SAVINGS', 'Early Retirement' + size + acSEERValue, 'kWh')\n} else {\n  deemedEarlyRetirementES = 0\n}\n\n// Deemed Replace on Burnout Energy Savings (kWh)\ndeemedReplaceOnBurnoutES = lookup('ENERGY_SAVINGS', 'Replace-on-Burnout' + size + acSEERValue, 'kWh')\n\n// Deemed New Construction Energy Savings (kWh)\ndeemedNewConstructionES = lookup('ENERGY_SAVINGS', 'New Construction' + size + acSEERValue, 'kWh')\n\n\n// Deemed Early Retirement Demand Savings (kW)\nif (remainingUsefulLife >= 5 ) {\n  deemedEarlyRetirementDS = lookup('ENERGY_SAVINGS', 'Early Retirement' + size + acSEERValue, 'kW')\n} else {\n  deemedEarlyRetirementDS = 0\n}\n\n// Deemed Replace on Burnout Demand Savings  (kW)\ndeemedReplaceOnBurnoutDS = lookup('ENERGY_SAVINGS', 'Replace-on-Burnout' + size + acSEERValue, 'kW')\n\n// Deemed New Construction Demand Savings(kW)\ndeemedNewConstructionDS = lookup('ENERGY_SAVINGS', 'New Construction' + size + acSEERValue, 'kW')\n\n\n// Early Retirement Savings Calculations\t\n// Early Retirement Period (MLER)\nearlyRetirementPeriod_MLER = remainingUsefulLife \n\n// Replace On Burnout Period (MLROB)\nreplaceOnBurnoutPeriod_MLROB = 18 - remainingUsefulLife\n\n// NPV(ER) kW\n// B$11*((1+B$9)/(B$8-B$9)) * (1-((1+B$9)/(1+B$8))^B$24)*B$19\nNPV_ER_kW = AC_kW * ((1+escalationRate)/(discountRate-escalationRate)) * (1-pow((1+escalationRate)/(1+discountRate),earlyRetirementPeriod_MLER)) * deemedEarlyRetirementDS\n\n// NPV(ROB) kW\t9.4457593988\n// B$11*((1+B$9)/(B$8-B$9))*(1-((1+B$9)/(1+B$8))^B$25)*(((1+B$9)/(1+B$8))^B$24)*B$20\nNPV_ROB_kW = AC_kW*((1+escalationRate)/(discountRate-escalationRate)) \n        * (1 - pow((1+escalationRate)/(1+discountRate), replaceOnBurnoutPeriod_MLROB)) \n        * (pow((1+escalationRate)/(1+discountRate), earlyRetirementPeriod_MLER)) \n        * deemedReplaceOnBurnoutDS\n\n// NPV Total\nNPV_TOTAL_kW = NPV_ER_kW + NPV_ROB_kW\n\n// NPV EUL\n// =B$11*((1+B$9)/(B$8-B$9))*(1-((1+B$9)/(1+B$8))^18)\nNPV_EUL_kW = AC_kW * ((1+escalationRate)/(discountRate-escalationRate)) * (1-pow((1+escalationRate)/(1+discountRate), 18))\n\n// Weighted kW\nweighted_kW = 0\nif (remainingUsefulLife >= 5) {\n    weighted_kW = NPV_TOTAL_kW/NPV_EUL_kW\n}\n\n// NPV(ER) kWh\nNPV_ER_kWh = AC_kWh * ((1+escalationRate)/(discountRate-escalationRate)) * (1-pow((1+escalationRate)/(1+discountRate),earlyRetirementPeriod_MLER)) * deemedEarlyRetirementES\n\n// NPV(ROB) kWh\nNPV_ROB_kWh = AC_kWh*((1+escalationRate)/(discountRate-escalationRate)) \n        * (1 - pow((1+escalationRate)/(1+discountRate), replaceOnBurnoutPeriod_MLROB)) \n        * (pow((1+escalationRate)/(1+discountRate), earlyRetirementPeriod_MLER)) \n        * deemedReplaceOnBurnoutES\n\n// NPV Total kWh\nNPV_TOTAL_kWh = NPV_ER_kWh + NPV_ROB_kWh\n\n// NPV EUL, kWh\t0.5472766985\nNPV_EUL_kWh = AC_kWh * ((1+escalationRate)/(discountRate-escalationRate)) * (1-pow((1+escalationRate)/(1+discountRate), 18))\n\n\n// Weighted kWh\nweighted_kWh = 0\nif (remainingUsefulLife >= 5) {\n    weighted_kWh = NPV_TOTAL_kWh/NPV_EUL_kWh\n}\n\n// Calculate Annual Savings kW\nannualSavings_kW = deemedNewConstructionDS\nif (installationType == 'Early Retirement') {\n annualSavings_kW = weighted_kW\n} else if (installationType == 'Replace-on-burnout') {\n annualSavings_kW = deemedReplaceOnBurnoutDS\n}\n\n// Calculate Annual Savings kWh\nannualSavings_kWh = deemedNewConstructionES\nif (installationType == 'Early Retirement') {\n annualSavings_kWh = weighted_kWh\n} else if (installationType == 'Replace-on-burnout') {\n annualSavings_kWh = deemedReplaceOnBurnoutES\n}\n\n// incentive Calculation\nif (acSEERValue == '14.0-14.4' || acSEERValue == '14.5-14.9' || acSEERValue == '15.0-15.9') {\n incentiveOther = (annualSavings_kW * CAR_14_15_9_kW) + (annualSavings_kWh * CAR_14_15_9_kWh)\n incentiveUnderserved = (annualSavings_kW * CAR_14_15_9_U_kW) + (annualSavings_kWh * CAR_14_15_9_U_kWh)\n \n} else {\n incentiveOther = (annualSavings_kW * CAR_16_18_kW) + (annualSavings_kWh * CAR_16_18_kWh)\n incentiveUnderserved = (annualSavings_kW * CAR_16_18_U_kW) + (annualSavings_kWh * CAR_16_18_U_kWh)\n}\n`,
  marketSector: 'Commercial & Industrial',
  endUse: 'HVAC',
  currentVersion: 'V01',
  validFrom: null,
  validUntil: null,
  status: 'approved',
  parameters: [{
    id: 1491139568302,
    name: 'installationType',
    displayName: 'Installation Type',
    description: 'Installation Type',
    type: 'String',
    mandatory: 'Yes',
    defaultValue: null,
    unit: null
  }, {
    id: 1491139595856,
    name: 'size',
    displayName: 'Size (Tons)',
    description: 'Size (Tons)',
    type: 'String',
    mandatory: 'Yes',
    defaultValue: '1.5',
    unit: 'Tons'
  }, {
    id: 1491139665517,
    name: 'acSEERValue',
    displayName: 'A/C SEER Values',
    description: 'A/C SEER Values',
    type: 'String',
    mandatory: 'No',
    defaultValue: '14.5-14.9',
    unit: null
  }, {
    id: 1491139701298,
    name: 'ageOfReplacedUnit',
    displayName: 'Age of the replaced unit',
    description: 'Age of the replaced unit',
    type: 'Number',
    mandatory: 'Yes',
    defaultValue: 2,
    unit: 'Years'
  }, {
    id: 1491139855008,
    name: 'county',
    displayName: 'County',
    description: 'County',
    type: 'String',
    mandatory: 'No',
    defaultValue: null,
    unit: null
  }, {
    id: 1491139931177,
    name: 'discountRate',
    displayName: 'Discount Rate',
    description: 'Discount Rate',
    type: 'Number',
    mandatory: 'Yes',
    isConstant: true,
    defaultValue: '0.0821',
    unit: 'rate'
  }, {
    id: 1491139957905,
    name: 'escalationRate',
    displayName: 'Escalation Rate',
    description: 'Escalation Rate',
    type: 'Number',
    mandatory: 'Yes',
    isConstant: true,
    defaultValue: '0.02',
    unit: 'rate'
  }, {
    id: 1491140029883,
    name: 'AC_kWh',
    displayName: 'AC kWh',
    description: 'AC kWh',
    type: 'Number',
    mandatory: 'Yes',
    isConstant: true,
    defaultValue: '0.05088',
    unit: null
  }, {
    id: 1491140058989,
    name: 'AC_kW',
    displayName: 'AC_kW',
    description: 'AC_kW\n',
    type: 'Number',
    mandatory: 'Yes',
    isConstant: true,
    defaultValue: '80',
    unit: ''
  }, {
    id: 1491149237973,
    name: 'CAR_16_18_kWh',
    displayName: 'CAR_16_18_kWh',
    description: 'CAR_16_18_kWh',
    type: 'Number',
    mandatory: 'Yes',
    isConstant: true,
    defaultValue: '0.33',
    unit: '$'
  }, {
    id: 1491149267810,
    name: 'CAR_16_18_kW',
    displayName: 'CAR_16_18_kW',
    description: 'CAR_16_18_kW',
    type: 'Number',
    mandatory: 'Yes',
    isConstant: true,
    defaultValue: '500',
    unit: '$'
  }, {
    id: 1491149430134,
    name: 'CAR_14_15_9_kWh',
    displayName: 'CAR_14_15_9_kWh',
    description: 'CAR_14_15_9_kWh',
    type: 'Number',
    mandatory: 'Yes',
    isConstant: true,
    defaultValue: '0.31',
    unit: '$'
  }, {
    id: 1491149455700,
    name: 'CAR_14_15_9_kW',
    displayName: 'CAR_14_15_9_kW',
    description: 'CAR_14_15_9_kW',
    type: 'Number',
    mandatory: 'Yes',
    isConstant: true,
    defaultValue: '470',
    unit: '$'
  }, {
    id: 1491149499783,
    name: 'CAR_16_18_U_kWh',
    displayName: 'CAR_16_18_U_kWh',
    description: 'CAR_16_18_U_kWh',
    type: 'Number',
    mandatory: 'Yes',
    isConstant: true,
    defaultValue: '0.38',
    unit: '$'
  }, {
    id: 1491149533220,
    name: 'CAR_16_18_U_kW',
    displayName: 'CAR_16_18_U_kW',
    description: 'CAR_16_18_U_kW',
    type: 'Number',
    mandatory: 'Yes',
    isConstant: true,
    defaultValue: '575',
    unit: '$'
  }, {
    id: 1491149758831,
    name: 'CAR_14_15_9_U_kWh',
    displayName: 'CAR_14_15_9_U_kWh',
    description: 'CAR_14_15_9_U_kWh',
    type: 'Number',
    mandatory: 'Yes',
    isConstant: true,
    defaultValue: '0.3565',
    unit: '$'
  }, {
    id: 1491149786682,
    name: 'CAR_14_15_9_U_kW',
    displayName: 'CAR_14_15_9_U_kW',
    description: 'CAR_14_15_9_U_kW',
    type: 'Number',
    mandatory: 'Yes',
    isConstant: true,
    defaultValue: '540.50',
    unit: '$'
  }]
}

let measures = [
  {
    id: uuidv4(),
    name: 'ENERGY STAR Compact Fluorescent Lamp (CFL)',
    description: `A low wattage ENERGY STAR qualified compact fluorescent screw-in bulb (CFL) is installed in place of a baseline screw-in bulb.`,
    marketSector: 'Residential',
    endUse: 'Lighting',
    currentVersion: 'V01',
    status: 'approved'
  },
  {
    id: uuidv4(),
    name: 'ENERGY STAR Speciality Compact Fluorescent Lamp (CFL)',
    description: `An ENERGY STAR qualified specialty compact fluorescent bulb is installed in place of an incandescent specialty bulb.`,
    marketSector: 'Residential',
    endUse: 'Lighting',
    currentVersion: 'V01',
    status: 'approved'
  },
  {
    id: uuidv4(),
    name: 'ENERGY STAR Torchiere',
    description: `A high efficiency ENERGY STAR fluorescent torchiere is purchased in place of a baseline mix of halogen and
incandescent torchieres and installed in a residential setting.`,
    marketSector: 'Residential',
    endUse: 'Lighting',
    currentVersion: 'V01',
    status: 'approved'
  },
  {
    id: uuidv4(),
    name: 'Exterior Hardwired Compact Fluorescent Lamp (CFL) Fixture',
    description: `An ENERGY STAR lighting fixture wired for exclusive use with pin-based compact fluorescent lamps is installed in an
exterior residential setting. This measure could relate to either a fixture replacement or new installation (i.e. time
of sale).`,
    marketSector: 'Residential',
    endUse: 'Lighting',
    currentVersion: 'V01',
    status: 'approved'
  },
  {
    id: uuidv4(),
    name: 'Interior Hardwired Compact Fluorescent Lamp (CFL) Fixture',
    description: `An ENERGY STAR lighting fixture wired for exclusive use with pin-based compact fluorescent lamps is installed in an
interior residential setting. This measure could relate to either a fixture replacement or new installation (i.e. time
of sale).`,
    marketSector: 'Residential',
    endUse: 'Lighting',
    currentVersion: 'V01',
    status: 'approved'
  },
  {
    id: uuidv4(),
    name: 'LED Downlights',
    description: `This measure describes savings from a variety of LED downlight lamp types. This characterization assumes that the
LED lamp or fixture is installed in a residential location. Where the implementation strategy does not allow for the
installation location to be known (e.g. an upstream retail program) evaluation data could be used to determine an
appropriate residential v commercial split. If this is not available, it is recommended to use this residential
characterization for all installs in unknown locations to be appropriately conservative in savings assumptions.`,
    marketSector: 'Residential',
    endUse: 'Lighting',
    currentVersion: 'V01',
    status: 'approved'
  },
  {
    id: uuidv4(),
    name: 'LED Exit Signs',
    description: `This measure characterizes the savings associated with installing a Light Emitting Diode (LED) exit sign in place of a
fluorescent or incandescent exit sign in a MultiFamily building. Light Emitting Diode exit signs have a string of very
small, typically red or green, glowing LEDs arranged in a circle or oval. The LEDs may also be arranged in a line on
the side, top or bottom of the exit sign. LED exit signs provide the best balance of safety, low maintenance, and
very low energy usage compared to other exit sign technologies.`,
    marketSector: 'Residential',
    endUse: 'Lighting',
    currentVersion: 'V01',
    status: 'approved'
  },
  {
    name: 'LED Screw Based Omnidirectional Bulbs',
    id: uuidv4(),
    description: `This characterization provides savings assumptions for LED Screw Based Omnidirectional (e.g. A-Type lamps) lamps
within the residential and multifamily sectors. This characterization assumes that the LED lamp or fixture is
installed in a residential location. Where the implementation strategy does not allow for the installation location to
be known (e.g. an upstream retail program) evaluation data could be used to determine an appropriate residential
v commercial split. If this is not available, it is recommended to use this residential characterization for all installs
in unknown locations to be appropriately conservative in savings assumptions.`,
    marketSector: 'Residential',
    endUse: 'Lighting',
    currentVersion: 'V01',
    status: 'approved'
  },
  testMeasure
]

const list = (query, offset, limit) => {
  return new Promise((resolve, reject) => resolve(measures))
}

const get = (id) => {
  const measure = measures.find((m) => m.id === id)
  return new Promise((resolve, reject) => resolve(measure))
}

const save = (measure) => {
  if (measure.id) {
    return new Promise((resolve, reject) => {
      const index = measures.findIndex((m) => m.id === measure.id)
      if (index === -1) {
        reject('Could not find measure')
      }
      measures = [
        ...measures.slice(0, index),
        measure,
        ...measures.slice(index + 1)
      ]
      resolve(measure)
    })
  } else {
    return new Promise((resolve, reject) => {
      const cm = _.cloneDeep(measure)
      const m = Object.assign({id: uuidv4()}, cm)
      measures.push(m)
      resolve(m)
    })
  }
}

export default {
  list,
  get,
  save
}
