import { ProductItem } from "../types";

export const HERO_IMAGE = "/src/assets/images/hero_pvc_pipes_1788955947955.jpg";
export const FACTORY_IMAGE =
  "/src/assets/images/factory_plant_1788955961208.jpg";
export const CASING_IMAGE = "/src/assets/images/casing_pipe_1789007729995.jpg";
export const OWNER_IMAGE = "/src/assets/images/owner_profile_1789007742209.jpg";
export const LAB_IMAGE = "/src/assets/images/quality_lab_1789007758299.jpg";
export const COLUMN_IMAGE = "/src/assets/images/column_pipes_1788955979749.jpg";
export const PRESSURE_IMAGE =
  "/src/assets/images/pressure_pipes_1788955991931.jpg";
export const HDPE_IMAGE = "/src/assets/images/hdpe_pipes_1788956003394.jpg";
export const SPRINKLER_IMAGE =
  "/src/assets/images/sprinkler_pipes_1788956033623.jpg";
export const RING_FIT_IMAGE =
  "/src/assets/images/ring_fit_pipes_1788956021664.jpg";
export const RIGID_IMAGE = "/src/assets/images/rigid_pipes_1788956067400.jpg";

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "upvc-pressure-pipe",
    name: "uPVC Pressure Pipe",
    shortDesc:
      "High-strength pressure piping for potable water supply, agriculture and industrial conveyance.",
    fullDesc:
      "Kevin uPVC Pressure Pipes are manufactured from 100% virgin unplasticized polyvinyl chloride compound. Engineered to deliver exceptional durability, zero scale formation, high hydraulic efficiency (Hazen-Williams C=150), and prolonged service life exceeding 50 years. Available in both solvent-cement plain socket and leak-proof elastomeric ring-fit joint configurations.",
    image: PRESSURE_IMAGE,
    sizes: "20 mm to 315 mm Outer Diameter",
    standard: "IS 4985:2021 / ISO 1452",
    pressureRating: "Class 1 to Class 6 (2.5 kgf/cm² to 16.0 kgf/cm²)",
    types: [
      "Plain Socket Pipe (Solvent Cement)",
      "Ringfit Pipe (Elastomeric Rubber Seal)",
    ],
    features: [
      "Ultra-smooth mirror interior walls significantly lower pumping head loss and electricity costs",
      "100% lead-free, non-toxic, and odorless for completely safe drinking water delivery",
      "Immune to electrolytic, chemical, and soil acid/alkali corrosion",
      "Dual jointing choice: Quick Ringfit push-fit or strong solvent cement welding",
      "High tensile and burst resistance against fluid water-hammer surges",
      "UV stabilized for prolonged durability in outdoor and semi-exposed conditions",
    ],
    applications: [
      "Municipal and urban drinking water supply trunk lines",
      "Rural drinking water gravity and pump networks (Jal Jeevan Mission / WASMO schemes)",
      "Agricultural flood, lift, and drip irrigation mainlines & sub-mains",
      "Industrial chemical, treated effluent, and process water handling",
      "Commercial building water risers and distribution loops",
    ],
    technicalOverview:
      "Conforming strictly to IS 4985:2021 specifications, our uPVC pressure pipes undergo stringent in-house tests including short-term hydrostatic burst tests, resistance to dichloromethane at specified temperature, reversible longitudinal reversion, and impact strength. Plain socket variants are optimized for solvent cement welding forming a homogeneous fusion, while Ring-fit variants feature pre-installed reinforced rubber gaskets for rapid trench laying.",
    benefits: [
      "50+ Years proven service lifespan",
      "Up to 30% lower friction loss than metal conduits",
      "Zero bacteriological growth and no tuberculation",
      "Fast laying speed reducing contractor labor expenses",
    ],
    specifications: [
      {
        size: '20 mm (1/2")',
        classRating: "Class 3 (6 kgf/cm²)",
        outerDiameter: "20.0 - 20.3 mm",
        wallThickness: "1.1 - 1.5 mm",
        workingPressure: "0.6 MPa",
      },
      {
        size: '25 mm (3/4")',
        classRating: "Class 3 (6 kgf/cm²)",
        outerDiameter: "25.0 - 25.3 mm",
        wallThickness: "1.4 - 1.8 mm",
        workingPressure: "0.6 MPa",
      },
      {
        size: '32 mm (1")',
        classRating: "Class 3 (6 kgf/cm²)",
        outerDiameter: "32.0 - 25.3 mm",
        wallThickness: "1.8 - 2.2 mm",
        workingPressure: "0.6 MPa",
      },
      {
        size: '50 mm (1-1/2")',
        classRating: "Class 3 (6 kgf/cm²)",
        outerDiameter: "50.0 - 50.3 mm",
        wallThickness: "2.4 - 2.8 mm",
        workingPressure: "0.6 MPa",
      },
      {
        size: '63 mm (2")',
        classRating: "Class 2 / 3 (4 / 6 kgf/cm²)",
        outerDiameter: "63.0 - 63.3 mm",
        wallThickness: "2.0 - 3.0 mm",
        workingPressure: "0.4 - 0.6 MPa",
      },
      {
        size: '75 mm (2-1/2")',
        classRating: "Class 2 / 3 (4 / 6 kgf/cm²)",
        outerDiameter: "75.0 - 75.3 mm",
        wallThickness: "2.3 - 3.6 mm",
        workingPressure: "0.4 - 0.6 MPa",
      },
      {
        size: '90 mm (3")',
        classRating: "Class 2 / 3 (4 / 6 kgf/cm²)",
        outerDiameter: "90.0 - 90.3 mm",
        wallThickness: "2.8 - 4.3 mm",
        workingPressure: "0.4 - 0.6 MPa",
      },
      {
        size: '110 mm (4")',
        classRating: "Class 2 / 3 / 4 (4 / 6 / 10 kgf/cm²)",
        outerDiameter: "110.0 - 110.4 mm",
        wallThickness: "3.4 - 6.6 mm",
        workingPressure: "0.4 - 1.0 MPa",
      },
      {
        size: '160 mm (6")',
        classRating: "Class 2 / 3 / 4 (4 / 6 / 10 kgf/cm²)",
        outerDiameter: "160.0 - 160.5 mm",
        wallThickness: "4.9 - 9.5 mm",
        workingPressure: "0.4 - 1.0 MPa",
      },
      {
        size: '200 mm (8")',
        classRating: "Class 2 / 3 / 4 (4 / 6 / 10 kgf/cm²)",
        outerDiameter: "200.0 - 200.6 mm",
        wallThickness: "6.2 - 11.9 mm",
        workingPressure: "0.4 - 1.0 MPa",
      },
    ],
    gallery: [PRESSURE_IMAGE, RING_FIT_IMAGE, FACTORY_IMAGE, LAB_IMAGE],
  },
  {
    id: "upvc-column-pipe",
    name: "uPVC Column Pipe",
    shortDesc:
      "Heavy-duty submersible pump riser pipe engineered to support high tensile loads.",
    fullDesc:
      "Kevin uPVC Column Pipes are specifically developed as the ultimate replacement for conventional galvanized iron (GI) riser pipes used in deep borewells. Equipped with CNC-machined square threads and bi-axial orientation, they withstand immense hydraulic pressure, pump vibrations, and column deadweight without joint unthreading or stretching.",
    image: COLUMN_IMAGE,
    sizes: '25 mm (1") to 150 mm (6") Nominal Bore',
    standard: "IS 12818 / ASTM D1785",
    pressureRating: "Medium, Standard, Heavy & Super Heavy (Up to 35 kg/cm²)",
    types: ["Medium Duty", "Standard Duty", "Heavy Duty", "Super Heavy Duty"],
    features: [
      "Square thread profile engineered on CNC machinery provides 100% load holding reliability",
      "Dual sealing rubber rings prevent leakage under extreme vacuum and hydrostatic heads",
      "Zero rust, scaling, or electrolysis, ensuring clean water and unobstructed discharge",
      "Lightweight construction: 70% lighter than MS / GI pipes, enabling quick installation without heavy cranes",
      "Thickened pipe ends (integral socket design) compensate for stress concentration at thread roots",
      "Extreme torque resistance against motor startup and sudden water hammer stopping",
    ],
    applications: [
      "Submersible pump water rising in borewells and tube wells",
      "Deep agricultural irrigation wells reaching depths up to 1,200 feet",
      "Industrial and institutional water pumping stations",
      "Mining dewatering and geothermal abstraction wells",
    ],
    technicalOverview:
      "Manufactured with high-impact modified virgin uPVC compound, each column pipe length undergoes 100% hydraulic testing. Thread profiles are calibrated with optical comparators. The integrated rubber ring lock mechanism guarantees that vibration from motor starts cannot unscrew the coupler assembly.",
    benefits: [
      "Zero pipe corrosion or scale build-up inside borewell",
      "Dramatic reduction in pump motor power consumption",
      "Easy manual handling without costly hoisting equipment",
      "Completely leak-proof joints ensure peak pump discharge",
    ],
    specifications: [
      {
        size: '25 mm (1")',
        classRating: "Standard / Heavy",
        outerDiameter: "33.0 mm",
        wallThickness: "3.0 - 4.0 mm",
        workingPressure: "15 - 25 kg/cm²",
      },
      {
        size: '32 mm (1-1/4")',
        classRating: "Standard / Heavy",
        outerDiameter: "42.0 mm",
        wallThickness: "3.5 - 4.5 mm",
        workingPressure: "15 - 25 kg/cm²",
      },
      {
        size: '40 mm (1-1/2")',
        classRating: "Standard / Heavy",
        outerDiameter: "48.0 mm",
        wallThickness: "3.8 - 5.0 mm",
        workingPressure: "15 - 30 kg/cm²",
      },
      {
        size: '50 mm (2")',
        classRating: "Standard / Heavy / Super Heavy",
        outerDiameter: "60.0 mm",
        wallThickness: "4.5 - 6.5 mm",
        workingPressure: "15 - 35 kg/cm²",
      },
      {
        size: '65 mm (2-1/2")',
        classRating: "Standard / Heavy / Super Heavy",
        outerDiameter: "75.0 mm",
        wallThickness: "5.5 - 7.5 mm",
        workingPressure: "15 - 35 kg/cm²",
      },
      {
        size: '80 mm (3")',
        classRating: "Standard / Heavy / Super Heavy",
        outerDiameter: "88.0 mm",
        wallThickness: "6.5 - 9.0 mm",
        workingPressure: "15 - 35 kg/cm²",
      },
      {
        size: '100 mm (4")',
        classRating: "Standard / Heavy / Super Heavy",
        outerDiameter: "114.0 mm",
        wallThickness: "8.0 - 11.5 mm",
        workingPressure: "15 - 35 kg/cm²",
      },
      {
        size: '125 mm (5")',
        classRating: "Standard / Heavy",
        outerDiameter: "140.0 mm",
        wallThickness: "9.8 - 13.0 mm",
        workingPressure: "15 - 30 kg/cm²",
      },
      {
        size: '150 mm (6")',
        classRating: "Heavy / Super Heavy",
        outerDiameter: "168.0 mm",
        wallThickness: "12.0 - 15.5 mm",
        workingPressure: "20 - 35 kg/cm²",
      },
    ],
    gallery: [COLUMN_IMAGE, CASING_IMAGE, FACTORY_IMAGE, LAB_IMAGE],
  },
  {
    id: "upvc-casing-pipe",
    name: "uPVC Casing Pipe",
    shortDesc:
      "Superior borewell casing and screen pipes engineered to protect deep tube wells.",
    fullDesc:
      "Kevin uPVC Casing and Screen Pipes (Ribbed & Plain) are precision manufactured under IS 12818 guidelines. Specially designed to line groundwater boreholes, shielding pumps against rock cave-ins, silt penetration, and mineral encrustation while facilitating clean gravel packing.",
    image: "uPVC Blue Casing Pipe.jpg",
    sizes: '100 mm (4") to 250 mm (10") Nominal Diameter',
    standard: "IS 12818:2010 (CS & CM)",
    pressureRating: "Shallow (CS) & Deep Well (CM) Classifications",
    types: [
      "Plain Casing Pipes (CS & CM)",
      "Ribbed Screen Pipes (Slotted with precision openings)",
    ],
    features: [
      "Trapezoidal / Acme male-female threaded joints for tight alignment and quick jointing",
      "Ribbed exterior option allows up to 2.5 times higher water inflow while blocking sand particles",
      "Exceptional collapse resistance against heavy hydrostatic and earth lateral pressures",
      "Inert to acidic, saline, and brackish groundwater chemistry",
      "Non-toxic formulation preserves pristine groundwater drinking quality",
      "Smooth inner bore prevents sediment deposition and simplifies camera inspections",
    ],
    applications: [
      "Tube-well and borewell lining for agriculture, municipal, and industrial water wells",
      "Aquifer recharge wells and rainwater harvesting percolation borewells",
      "Effluent and chemical discharge monitoring wells",
      "Mine exploration and dewatering boreholes",
    ],
    technicalOverview:
      "Kevin Casing pipes are categorized into CS (for depths up to 80 meters) and CM (for depths up to 250 meters). Ribbed Screen pipes have precisely cut horizontal continuous slots that prevent sand pumping and improve well yield by facilitating maximum permeability through the gravel pack.",
    benefits: [
      "Eliminates bore collapse and pump burial hazards",
      "Significantly higher water yield thanks to V-slot screen design",
      "Rust-free alternative to slotted MS / GI casing",
      "Simple threaded assembly requiring zero specialized welding tools",
    ],
    specifications: [
      {
        size: '100 mm (4")',
        classRating: "CS (Casing Shallow)",
        outerDiameter: "113.0 mm",
        wallThickness: "4.0 - 4.6 mm",
        workingPressure: "For wells up to 80 m",
      },
      {
        size: '100 mm (4")',
        classRating: "CM (Casing Medium)",
        outerDiameter: "113.0 mm",
        wallThickness: "5.0 - 5.7 mm",
        workingPressure: "For wells up to 250 m",
      },
      {
        size: '125 mm (5")',
        classRating: "CS (Casing Shallow)",
        outerDiameter: "140.0 mm",
        wallThickness: "4.5 - 5.2 mm",
        workingPressure: "For wells up to 80 m",
      },
      {
        size: '125 mm (5")',
        classRating: "CM (Casing Medium)",
        outerDiameter: "140.0 mm",
        wallThickness: "6.5 - 7.5 mm",
        workingPressure: "For wells up to 250 m",
      },
      {
        size: '150 mm (6")',
        classRating: "CS (Casing Shallow)",
        outerDiameter: "165.0 mm",
        wallThickness: "5.4 - 6.2 mm",
        workingPressure: "For wells up to 80 m",
      },
      {
        size: '150 mm (6")',
        classRating: "CM (Casing Medium)",
        outerDiameter: "165.0 mm",
        wallThickness: "7.5 - 8.6 mm",
        workingPressure: "For wells up to 250 m",
      },
      {
        size: '200 mm (8")',
        classRating: "CM (Casing Medium)",
        outerDiameter: "225.0 mm",
        wallThickness: "10.0 - 11.5 mm",
        workingPressure: "For wells up to 250 m",
      },
    ],
    gallery: [CASING_IMAGE, COLUMN_IMAGE, FACTORY_IMAGE, PRESSURE_IMAGE],
  },
  {
    id: "hdpe-pipe",
    name: "HDPE Pipe",
    shortDesc:
      "High-density polyethylene pipes for pressurized water mains, gas distribution and trenchless pipelines.",
    fullDesc:
      "Kevin HDPE Pipes are extruded from premium virgin PE 100 / PE 80 polymers. Known for extreme flexibility, notch resistance, and seamless jointing via thermal butt-fusion and electrofusion. Ideal for challenging terrains, seismic zones, and horizontal directional drilling (HDD) projects.",
    image: "HDPE Pipe.jpg",
    sizes: "20 mm to 400 mm (Coils & 6m/12m Straight Lengths)",
    standard: "IS 4984:2016 / ISO 4427",
    pressureRating: "PN 2.5 to PN 16 (SDR 41 to SDR 9)",
    types: [
      "PE 100 High Performance",
      "PE 80 Standard Utility",
      "Coiled Pipes (Up to 110mm)",
      "Straight Lengths (Up to 400mm)",
    ],
    features: [
      "Butt-fusion welding creates a 100% leak-free, monolithic piping system stronger than the pipe itself",
      "High ductile flexibility allows laying along curved trenches without requiring numerous elbow fittings",
      "Trenchless installation (HDD) compatible — minimum surface excavation in urban roads",
      "Immune to biological corrosion, stress cracking, and aggressive soil conditions",
      "Superior resistance to abrasive slurry transmission compared to steel pipes",
      "Black carbon black UV stabilization (>2.5%) for long-term outdoor sunlight exposure",
    ],
    applications: [
      "Urban and rural pressurized potable water distribution networks",
      "Underground trunk mains and lift irrigation feeder systems",
      "Industrial chemical, ash slurry, and hazardous waste disposal lines",
      "Submarine pipelines and marshland water crossings",
      "Sewer force mains and stormwater pressure conduits",
    ],
    technicalOverview:
      "Each batch is tested for Melt Flow Rate (MFR), carbon black dispersion, hydrostatic burst pressure at 80°C and 20°C, and elongation at break (>350%). Kevin HDPE pipes deliver safety factor margins that easily exceed Indian and international standards.",
    benefits: [
      "Zero joints on long coil runs (up to 500m per coil)",
      "Total immunity to galvanic or electrochemical corrosion",
      "Withstands water freezing inside pipe without rupture",
      "Lower lifecycle maintenance cost over 50+ operating years",
    ],
    specifications: [
      {
        size: "20 mm OD",
        classRating: "PN 10 / PN 12.5 / PN 16",
        outerDiameter: "20.0 mm",
        wallThickness: "2.0 - 2.3 mm",
        workingPressure: "1.0 - 1.6 MPa",
      },
      {
        size: "25 mm OD",
        classRating: "PN 10 / PN 12.5 / PN 16",
        outerDiameter: "25.0 mm",
        wallThickness: "2.3 - 3.0 mm",
        workingPressure: "1.0 - 1.6 MPa",
      },
      {
        size: "32 mm OD",
        classRating: "PN 8 / PN 10 / PN 16",
        outerDiameter: "32.0 mm",
        wallThickness: "2.4 - 3.6 mm",
        workingPressure: "0.8 - 1.6 MPa",
      },
      {
        size: "63 mm OD",
        classRating: "PN 6 / PN 10 / PN 16",
        outerDiameter: "63.0 mm",
        wallThickness: "3.8 - 5.8 mm",
        workingPressure: "0.6 - 1.6 MPa",
      },
      {
        size: "90 mm OD",
        classRating: "PN 6 / PN 10 / PN 16",
        outerDiameter: "90.0 mm",
        wallThickness: "5.4 - 8.2 mm",
        workingPressure: "0.6 - 1.6 MPa",
      },
      {
        size: "110 mm OD",
        classRating: "PN 6 / PN 10 / PN 16",
        outerDiameter: "110.0 mm",
        wallThickness: "6.6 - 10.0 mm",
        workingPressure: "0.6 - 1.6 MPa",
      },
      {
        size: "160 mm OD",
        classRating: "PN 6 / PN 10 / PN 16",
        outerDiameter: "160.0 mm",
        wallThickness: "9.5 - 14.6 mm",
        workingPressure: "0.6 - 1.6 MPa",
      },
      {
        size: "200 mm OD",
        classRating: "PN 6 / PN 10 / PN 16",
        outerDiameter: "200.0 mm",
        wallThickness: "11.9 - 18.2 mm",
        workingPressure: "0.6 - 1.6 MPa",
      },
    ],
    gallery: [HDPE_IMAGE, SPRINKLER_IMAGE, FACTORY_IMAGE, LAB_IMAGE],
  },
  {
    id: "hdpe-sprinkler-pipe",
    name: "HDPE Sprinkler Pipe",
    shortDesc:
      "Quick-coupling portable sprinkler piping designed for uniform agricultural crop irrigation.",
    fullDesc:
      "Kevin HDPE Sprinkler Pipes are engineered for maximum portability and rapid field assembly in agricultural fields. Fitted with precision-welded quick-action metal / plastic latch couplers, C-clamps, and silicone seal rings, enabling farmers to move irrigation lines across plots in minutes with zero tool requirement.",
    image: "HDPE Sprinkler Pipe.jpg",
    sizes: "63 mm, 75 mm, 90 mm, 110 mm Outer Diameter (6m Lengths)",
    standard: "IS 14151 (Part 1 & Part 2)",
    pressureRating: "Class 1 (2.5 kgf/cm²) & Class 2 (3.2 kgf/cm²)",
    types: ["Metal Latch Clamp Type", "C-Clamp Quick Coupling Type"],
    features: [
      "Quick-action latch coupling enables single-person assembly and field shifting",
      "High-grade UV stabilized virgin polymer prevents cracking under intense summer sunlight",
      "Engineered rubber gasket retains sealing integrity even under shifting uneven farm terrain",
      "Saves 35% to 50% water compared to conventional flood furrow irrigation methods",
      "Provides micro-climate cooling for delicate crops, preventing frost or heat scalding",
      "Comprehensive accessory range: Tee, Bend, End Plug, Foot Batten, Riser Pipe, and Brass Nozzles",
    ],
    applications: [
      "Field crops including wheat, cotton, soybean, groundnut, pulses, and mustard",
      "Horticulture, vegetable farming, tea and coffee plantations",
      "Fodder cultivation and commercial turf farms",
      "Dust suppression in construction zones, open mines, and coal yards",
    ],
    technicalOverview:
      "Fully conforming to IS 14151 Part 1 (Pipes) and Part 2 (Fittings), Kevin Sprinkler pipes are engineered to resist rough handling during repeated field shifting. Coupled joints undergo hydrostatic pressure testing at 2.5 times nominal working pressure without dislodgement.",
    benefits: [
      "Increases crop yield by 20% to 35% through uniform water dispersion",
      "Drastically cuts labor time for field line repositioning",
      "Zero fertilizer leaching; ideal for liquid fertilizer fertigation",
      "Lightweight yet resistant to tractor wheel bumps and farm handling",
    ],
    specifications: [
      {
        size: "63 mm OD",
        classRating: "Class 1 (2.5 kg/cm²)",
        outerDiameter: "63.0 mm",
        wallThickness: "1.6 - 2.0 mm",
        workingPressure: "0.25 MPa",
      },
      {
        size: "63 mm OD",
        classRating: "Class 2 (3.2 kg/cm²)",
        outerDiameter: "63.0 mm",
        wallThickness: "2.0 - 2.4 mm",
        workingPressure: "0.32 MPa",
      },
      {
        size: "75 mm OD",
        classRating: "Class 1 (2.5 kg/cm²)",
        outerDiameter: "75.0 mm",
        wallThickness: "1.9 - 2.3 mm",
        workingPressure: "0.25 MPa",
      },
      {
        size: "75 mm OD",
        classRating: "Class 2 (3.2 kg/cm²)",
        outerDiameter: "75.0 mm",
        wallThickness: "2.4 - 2.9 mm",
        workingPressure: "0.32 MPa",
      },
      {
        size: "90 mm OD",
        classRating: "Class 1 (2.5 kg/cm²)",
        outerDiameter: "90.0 mm",
        wallThickness: "2.3 - 2.8 mm",
        workingPressure: "0.25 MPa",
      },
      {
        size: "90 mm OD",
        classRating: "Class 2 (3.2 kg/cm²)",
        outerDiameter: "90.0 mm",
        wallThickness: "2.9 - 3.5 mm",
        workingPressure: "0.32 MPa",
      },
      {
        size: "110 mm OD",
        classRating: "Class 1 (2.5 kg/cm²)",
        outerDiameter: "110.0 mm",
        wallThickness: "2.8 - 3.4 mm",
        workingPressure: "0.25 MPa",
      },
    ],
    gallery: [SPRINKLER_IMAGE, HDPE_IMAGE, FACTORY_IMAGE, LAB_IMAGE],
  },
];

export const CLIENT_LOGOS = [
  {
    name: "WASMO",
    fullTitle: "Water and Sanitation Management Organisation",
    tag: "Govt. of Gujarat Approved",
    logo: "/logos/wasmo.png"
  },
  {
    name: "GWSSB",
    fullTitle: "Gujarat Water Supply and Sewerage Board",
    tag: "State Infrastructure Provider",
    logo: "/logos/GWSSB.jpg"
  },
  {
    name: "GIRDA",
    fullTitle: "Gujarat Industrial Research & Development Agency",
    tag: "Certified Testing Body",
    logo: "/logos/girda.jpg"
  },
  {
    name: "I-KHEDUT",
    fullTitle: "Department of Agriculture & Farmers Welfare, Gujarat",
    tag: "Approved Subsidy Vendor",
    logo: "/logos/ikhedut.jpg"
  },
];



export const CERTIFICATIONS = [
  {
    code: "ISO 9001:2008",
    title: "Quality Management System",
    desc: "Certified manufacturing systems adhering strictly to international standards of precision and quality control.",
  },
  {
    code: "BIS / ISI Certified",
    title: "Bureau of Indian Standards",
    desc: "Authorized ISI marks for IS 4985, IS 12818, IS 4984, and IS 14151 ensuring safety and durability.",
  },
  {
    code: "WASMO Approved",
    title: "Water Infrastructure Vendor",
    desc: "Officially registered supplier for state drinking water supply schemes and rural tap water projects.",
  },
  {
    code: "GWSSB Vendor Code",
    title: "State Water Board Vendor",
    desc: "Qualified supplier for major engineering pipelines, lift irrigation schemes, and municipal works.",
  },
];
