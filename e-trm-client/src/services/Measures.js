
const measures = [
  {
    name: 'ENERGY STAR Compact Fluorescent Lamp (CFL)',
    description: `A low wattage ENERGY STAR qualified compact fluorescent screw-in bulb (CFL) is installed in place of a baseline screw-in bulb.`,
    marketSector: 'Residential',
    endUse: 'Lighting',
    currentVersion: 'V01',
    status: 'approved'
  },
  {
    name: 'ENERGY STAR Speciality Compact Fluorescent Lamp (CFL)',
    description: `An ENERGY STAR qualified specialty compact fluorescent bulb is installed in place of an incandescent specialty bulb.`,
    marketSector: 'Residential',
    endUse: 'Lighting',
    currentVersion: 'V01',
    status: 'approved'
  },
  {
    name: 'ENERGY STAR Torchiere',
    description: `A high efficiency ENERGY STAR fluorescent torchiere is purchased in place of a baseline mix of halogen and
incandescent torchieres and installed in a residential setting.`,
    marketSector: 'Residential',
    endUse: 'Lighting',
    currentVersion: 'V01',
    status: 'approved'
  },
  {
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
  }
]

const list = (query, offset, limit) => {
  return new Promise((resolve, reject) => resolve(measures))
}

export default {
  list
}
