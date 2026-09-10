export interface ProductItem {
  name: string;
  material?: string;
  type?: string;
  remarks?: string;
  image?: string;
}

export interface ProductCategory {
  name: string;
  items: ProductItem[];
}

export interface BrandData {
  name: string;
  description: string;
  logo: string;
  banner?: string;
  categories: ProductCategory[];
  endNote?: string;
}

export const productsData: Record<string, BrandData> = {
  SANT: {
    name: "SANT Valves",
    description: "Premium industrial valves for diverse applications including steam, water, oil, and gas.",
    logo: "/brand-logos/sant.png",
    categories: [
      {
        name: "Butterfly Valves",
        items: [
          { name: "Cast Iron Butterfly Valve",                      remarks: "Wafer Type (ISI Marked)",         image: "/product-images-new/image10.jpg" },
          { name: "Ductile Iron Butterfly Valve",                   remarks: "Wafer Type",                      image: "/product-images-new/image27.jpg" },
          { name: "C.I. Butterfly Valve with Electric Actuator",    remarks: "Wafer Type, PN 10/PN 16",        image: "/product-images-new/image18.jpg" },
          { name: "C.I. Butterfly Valve with Limit Switch",         remarks: "Wafer Type, PN 10/PN 16",        image: "/product-images-new/image19.jpg" },
          { name: "C.I. Butterfly Valve with Pneumatic Actuator",   remarks: "Wafer Type, PN 10/PN 16",        image: "/product-images-new/image16.jpg" },
        ]
      },
      {
        name: "Gate Valves",
        items: [
          { name: "Cast Steel Gate Valve",   remarks: "Flanged, Class-150 (IBR Approved)", image: "/product-images-new/image26.jpg" },
          { name: "Cast Steel Gate Valve",   remarks: "Flanged, Class-300 (IBR Approved)", image: "/product-images-new/image1.jpg" },
          { name: "Forged Steel Gate Valve", remarks: "Flanged, Class-600",                image: "/product-images-new/image6.jpg" },
          { name: "Bronze Gate Valve",       remarks: "Non-Rising Stem, Screwed (ISI Marked)", image: "/product-images-new/image79.jpg" },
          { name: "Cast Iron Gate Valve",    remarks: "Rising Stem, 65–600 mm" },
        ]
      },
      {
        name: "Globe Valves",
        items: [
          { name: "Cast Steel Globe Valve",   remarks: "Flanged, Class-150 (IBR Approved)", image: "/product-images-new/image31.jpg" },
          { name: "Forged Steel Globe Valve", remarks: "Reduced Bore, Class 800, Screwed Ends", image: "/product-images-new/image14.jpg" },
          { name: "Bronze Globe Valve",       remarks: "Rising Stem, Screwed (ISI Marked)", image: "/product-images-new/image72.jpg" },
        ]
      },
      {
        name: "Ball Valves",
        items: [
          { name: "Cast Iron Ball Valve",                    remarks: "Flanged, Class 125 (ISI Marked)", image: "/product-images-new/image59.jpg" },
          { name: "Cast Steel Ball Valve",                   remarks: "Flanged (IBR Approved)",          image: "/product-images-new/image9.jpg" },
          { name: "Stainless Steel Ball Valve",              remarks: "Flanged, Class-150",              image: "/product-images-new/image45.jpg" },
          { name: "Brass Ball Valve",                                                                    image: "/product-images-new/image23.jpg" },
          { name: "Brass Ball Valve with Strainer and Flare Nut",                                        image: "/product-images-new/image24.jpg" },
          { name: "Brass Ball Valve with Strainer",                                                      image: "/product-images-new/image7.jpg" },
          { name: "Forged Steel Ball Valve" },
        ]
      },
      {
        name: "Check Valves / NRV",
        items: [
          { name: "Cast Steel Swing Check Valve",         remarks: "Flanged, Class-150 (IBR Approved)", image: "/product-images-new/image21.jpg" },
          { name: "Cast Steel Horizontal Check Valve",    remarks: "Flanged, Class-300",                image: "/product-images-new/image11.jpg" },
          { name: "Cast Iron Reflux Valve",               remarks: "Swing Check Type, Non Return Valve",image: "/product-images-new/image8.jpg" },
          { name: "Dual Plate Wafer Check Valve",                                                       image: "/product-images-new/image12.jpg" },
          { name: "Dual Plate Water Check Valve",                                                       image: "/product-images-new/image13.jpg" },
          { name: "Forged Steel Horizontal Lift Check Valve", remarks: "Class 800, Screwed Ends",       image: "/product-images-new/image32.jpg" },
          { name: "Bronze Vertical Lift Check Valve",     remarks: "Screwed (ISI Marked)",              image: "/product-images-new/image35.jpg" },
          { name: "Bronze Horizontal Lift Check Valve",   remarks: "Screwed (ISI Marked)",              image: "/product-images-new/image33.jpg" },
          { name: "Bronze Swing Check Valve",             remarks: "Screwed (ISI Marked)",              image: "/product-images-new/image30.jpg" },
        ]
      },
      {
        name: "Foot Valves",
        items: [
          { name: "C.I. Ball Foot Valve", remarks: "Flanged",  image: "/product-images-new/image77.jpg" },
          { name: "Bronze Foot Valve",    remarks: "Screwed",  image: "/product-images-new/image84.jpg" },
        ]
      },
      {
        name: "Balancing Valves",
        items: [
          { name: "Brass Balancing Valve",      remarks: "20–50 mm",   image: "/product-images-new/image17.jpg" },
          { name: "Cast Iron Balancing Valve",  remarks: "65–600 mm" },
        ]
      },
      {
        name: "Pressure Reducing Valves & Strainers",
        items: [
          { name: "Brass Pressure Reducing Valve",                              image: "/product-images-new/image3.jpg" },
          { name: "Cast Iron Pressure Reducing Valve" },
          { name: "Cast Iron Y Type Strainer",  remarks: "Flanged",             image: "/product-images-new/image15.jpg" },
          { name: "Y Type Strainer",            remarks: "Flanged, Class-150",  image: "/product-images-new/image81.jpg" },
          { name: "Stainless Steel Y-Strainer" },
          { name: "Cast Iron Pot Strainer" },
        ]
      },
      {
        name: "Specialty Equipment",
        items: [
          { name: "Forged S.S. Thermodynamic Steam Trap", remarks: "Screwed Ends (IBR Approved)", image: "/product-images-new/image38.jpg" },
          { name: "Stainless Steel Air Vent" },
          { name: "Stainless Steel Sight Glass" },
          { name: "Gun Metal Sight Glass" },
          { name: "Rubber Expansion Bellow" },
          { name: "Water Meter", type: "WM1 · WM2 · WM7 · WM8 · WM9 · WM10 · WM12 · WM13 · WM14 · WM15", image: "/product-images-new/image4.jpg" },
        ]
      }
    ]
  },

  Honeywell: {
    name: "Honeywell",
    description: "Advanced building controls, HVAC valves, sensors, actuators, and meters for commercial and industrial applications.",
    logo: "/brand-logos/honeywell.png",
    categories: [
      {
        name: "Meters & Flow Measurement",
        items: [
          { name: "BTU Meter",   remarks: "Kamstrup", image: "/product-images-new/image66.jpg" },
          { name: "Flow Meter",  remarks: "Kamstrup" },
        ]
      },
      {
        name: "FCU & AHU Control Valves",
        items: [
          { name: "2-Way On/Off & Modulating FCU Valve",  remarks: "VS92C20PP",    image: "/product-images-new/image80.jpg" },
          { name: "3-Way On/Off & Modulating FCU Valve",  remarks: "VS93C20PP",    image: "/product-images-new/image54.jpg" },
          { name: "PICV FCU Valve" },
          { name: "2-Way Modulating AHU Valve",           remarks: "VS011B2W040",  image: "/product-images-new/image55.jpg" },
          { name: "3-Way Modulating AHU Valve",           remarks: "V5GV3W065F",   image: "/product-images-new/image76.jpg" },
        ]
      },
      {
        name: "PICV – Pressure Independent Control Valves",
        items: [
          { name: "PICV 25 mm",  remarks: "VPI025TPH2", image: "/product-images-new/image97.jpg" },
          { name: "PICV 50 mm",  remarks: "VPI050TPL2", image: "/product-images-new/image51.jpg" },
          { name: "PICV 80 mm",  remarks: "VPI080FPL4" },
        ]
      },
      {
        name: "Motorised Butterfly Valves",
        items: [
          { name: "Motorised Butterfly Valve",          image: "/product-images-new/image42.jpg" },
          { name: "Electric Actuator for Butterfly Valve", image: "/product-images-new/image91.jpg" },
          { name: "Motorised Butterfly Valve – BS-MWC4-PN-250",  image: "/product-images-new/image105.jpg" },
          { name: "Motorised Butterfly Valve – BS-HWC4-PN16-0050" },
          { name: "Motorised Butterfly Valve – VHS16R32" },
          { name: "Manual Butterfly Valve",             image: "/product-images-new/image67.jpg" },
          { name: "Butterfly Valve Gear",               image: "/product-images-new/image68.jpg" },
        ]
      },
      {
        name: "Control Valves & Actuators",
        items: [
          { name: "Dual Plate Check Valve",     remarks: "BSV4-CWD-GP16-G050", image: "/product-images-new/image37.jpg" },
          { name: "Y Strainer",                 remarks: "VSSLF4-P16-100",     image: "/product-images-new/image44.jpg" },
          { name: "Two-Way Ball Valve",                                          image: "/product-images-new/image74.jpg" },
          { name: "MVN Series Ball Valve Actuator",                              image: "/product-images-new/image36.jpg" },
          { name: "Flanged Two-Way Ball Valve",                                  image: "/product-images-new/image25.jpg" },
          { name: "Ball Valve",                 remarks: "BV2-INP-PN25-20",    image: "/product-images-new/image29.jpg" },
        ]
      },
      {
        name: "Pressure & Flow Control Valves",
        items: [
          { name: "Pressure Reducing Valve",      remarks: "D06E",              image: "/product-images-new/image28.jpg" },
          { name: "Pressure Reducing Valve",      remarks: "D19E",              image: "/product-images-new/image49.jpg" },
          { name: "Pressure Reducing Valve",      remarks: "D115S" },
          { name: "Gate Valve",                   remarks: "SLV-IMP-PN16-150", image: "/product-images-new/image63.jpg" },
          { name: "Non-Return Valve",             remarks: "NRV-IMP-PN16-150" },
          { name: "Double Regulating Balancing Valve – Flanged", remarks: "BLV-Y01-PN16-100", image: "/product-images-new/image71.jpg" },
          { name: "Brass Balancing Valve",                                       image: "/product-images-new/image56.jpg" },
          { name: "Pressure Control Independent Valve",                          image: "/product-images-new/image70.jpg" },
        ]
      },
      {
        name: "Sensors & Detection",
        items: [
          { name: "CO Sensor",                         remarks: "HSCMR400ML",  image: "/product-images-new/image69.jpg" },
          { name: "CO₂ Sensor",                        remarks: "HSCDR2ML",    image: "/product-images-new/image61.jpg" },
          { name: "Temperature Sensor",                remarks: "RSPT1000",     image: "/product-images-new/image46.jpg" },
          { name: "Temperature & Relative Humidity Sensor" },
          { name: "Gas Sensor" },
          { name: "Duct Humidity & Temperature Sensor",                          image: "/product-images-new/image89.jpg" },
          { name: "Water Flow Switch",                 remarks: "WFS6000",      image: "/product-images-new/image94.jpg" },
          { name: "Differential Pressure Switch",      remarks: "DPSN400A",    image: "/product-images-new/image92.jpg" },
          { name: "Differential Pressure Switch",      remarks: "DPSN200A",    image: "/product-images-new/image50.jpg" },
        ]
      },
      {
        name: "Actuators",
        items: [
          { name: "Damper Actuator",                        remarks: "MS4604",    image: "/product-images-new/image58.jpg" },
          { name: "Damper Actuator",                        remarks: "MS4620" },
          { name: "Damper Actuator",                        remarks: "MS4609" },
          { name: "Thermoelectric Modulating Actuator",     remarks: "MLP71TNA", image: "/product-images-new/image64.jpg" },
          { name: "Thermoelectric On/Off Actuator",         remarks: "MLP41TNA", image: "/product-images-new/image53.jpg" },
        ]
      },
      {
        name: "Thermostats & Controllers",
        items: [
          { name: "Modulating Thermostat",          remarks: "T2798",    image: "/product-images-new/image93.jpg" },
          { name: "Room Thermostat",                remarks: "WME428",   image: "/product-images-new/image82.jpg" },
          { name: "Room Thermostat",                remarks: "T6861",    image: "/product-images-new/image39.jpg" },
          { name: "Room Thermostat",                remarks: "T6800",    image: "/product-images-new/image41.jpg" },
          { name: "Room Thermostat",                remarks: "T6360",    image: "/product-images-new/image48.png" },
          { name: "Room Thermostat",                remarks: "T6373",    image: "/product-images-new/image40.jpg" },
          { name: "Modulating FCU Thermostat",      remarks: "WME423" },
        ]
      }
    ]
  },

  HGuru: {
    name: "HGuru",
    description: "Precision instrumentation and measurement devices for industrial and HVAC applications.",
    logo: "/brand-logos/hguru.jpg",
    categories: [
      {
        name: "Measurement Instrumentation",
        items: [
          { name: "Pressure Gauge",            type: "Industrial Grade", image: "/product-images-new/image2.jpg" },
          { name: "Temperature Gauge",         type: "Industrial Grade", image: "/product-images-new/image107.jpg" },
          { name: "Mercury Filled Thermometer",type: "Industrial Grade", image: "/product-images-new/image62.jpg" },
        ]
      }
    ]
  },

  Resistoflex: {
    name: "Resistoflex",
    description: "British-origin vibration isolation, expansion joints, flexible connectors, and anti-vibration mounts for HVAC and industrial systems.",
    logo: "/brand-logos/resistoflex.png",
    endNote: "Other products available on demand. For full specifications and pictures refer to resistoflex.in/british-origin-mounts",
    categories: [
      {
        name: "Rubber Expansion Joints",
        items: [
          { name: "Single Arch Rubber Expansion Joint with Retaining Ring & Control Unit", image: "/resistoflex-images/image7.jpg" },
          { name: "Single Arch Rubber Expansion Joint with Control Unit",                  image: "/resistoflex-images/image6.jpg" },
          { name: "Double Arch Rubber Expansion Joint",                                    image: "/resistoflex-images/image3.jpg" },
          { name: "Flexible Rubber Connector with Standard Union Ends",                    image: "/resistoflex-images/image17.jpg" },
          { name: "Flexible Rubber Connector with Flanged Union Ends",                     image: "/resistoflex-images/image5.jpg" },
        ]
      },
      {
        name: "Metal Expansion Joints & Flexible Duct Connectors",
        items: [
          { name: "Metal Expansion Joint with Control Unit",               image: "/resistoflex-images/image29.png" },
          { name: "RFDC – Flame Resistant Flexible Duct Connector",        image: "/resistoflex-images/image28.png" },
        ]
      },
      {
        name: "Rubber Anti-Vibration Mountings",
        items: [
          { name: "Circular Vibration & Shock Isolator CMS" },
          { name: "Combined Spring & Rubber Unit TSC" },
          { name: "Combined Spring & Rubber Unit SC" },
          { name: "Conical Vibration Shock Mounting BC 530" },
          { name: "Cup Mount Type CT",                              image: "/resistoflex-images/image1.png" },
          { name: "Equifrequency Mounting Type KLR" },
          { name: "Flanged Tubular Vibration Shock Mounting Type FTS" },
          { name: "Flanged Tubular Vibration Shock Mounting Type FT" },
          { name: "Fleximount Rubber Isolator",                     image: "/resistoflex-images/image11.png" },
          { name: "Genflex Rubber Mounting Type GF",                image: "/resistoflex-images/image9.png" },
          { name: "Mobiflex Mounting Type MOB 144",                 image: "/resistoflex-images/image25.png" },
          { name: "Stabiflex Vibration & Shock Isolator Type STB",  image: "/resistoflex-images/image10.png" },
        ]
      },
      {
        name: "Spring Isolators",
        items: [
          { name: "Seismic Restrained Spring Mount",  image: "/resistoflex-images/image13.png" },
          { name: "Enclosed Spring Mount",            image: "/resistoflex-images/image20.png" },
          { name: "Housed Spring Mounting",           image: "/resistoflex-images/image18.png" },
          { name: "Open Restrained Spring",           image: "/resistoflex-images/image4.jpg" },
          { name: "Open Spring Mount",                image: "/resistoflex-images/image12.jpg" },
          { name: "Inertia Pouring Frame",            image: "/resistoflex-images/image22.jpg" },
          { name: "Cup Spring Mount (CS)",            image: "/resistoflex-images/image31.png" },
          { name: "Open Spring Unit Mount (OSU)",     image: "/resistoflex-images/image32.png" },
        ]
      },
      {
        name: "Hangers & Bonded Buffers",
        items: [
          { name: "Buffers",                          image: "/resistoflex-images/image21.png" },
          { name: "Resilient Hanger",                 image: "/resistoflex-images/image8.png" },
          { name: "Spring Cushion Hanger",            image: "/resistoflex-images/image15.png" },
          { name: "Spring Hangers without Connector", image: "/resistoflex-images/image23.png" },
          { name: "Rubber Hangers",                   image: "/resistoflex-images/image14.png" },
        ]
      },
      {
        name: "Rubber Pads & Mats",
        items: [
          { name: "Rubber Pads & Mats",              image: "/resistoflex-images/image19.png" },
          { name: "Super Shock Absorbing Pads",      image: "/resistoflex-images/image27.jpg" },
          { name: "Compression Stud Pad" },
          { name: "Studflex Vibration Isolation Pad", image: "/resistoflex-images/image16.png" },
        ]
      },
      {
        name: "Spring Viscous Damper System & Platform Isolators",
        items: [
          { name: "Spring Viscous Damper System", image: "/resistoflex-images/image26.jpg" },
          { name: "Platform Vibration Isolator",  image: "/resistoflex-images/image30.png" },
        ]
      },
    ]
  },

  SantAirSystem: {
    name: "Sant Air Systems",
    description: "High-performance air movement and ventilation solutions for industrial, commercial, and HVAC applications.",
    logo: "/brand-logos/sant-air.png",
    categories: [
      {
        name: "Industrial Fans & Ventilation",
        items: [
          { name: "HVLS Industrial Ceiling Fan", image: "/product-images-new/image96.jpg" },
          { name: "Circular Inline Fan",          image: "/product-images-new/image98.jpg" },
          { name: "Axial Flow Fan",               image: "/product-images-new/image104.jpg" },
          { name: "Industrial Exhaust Fan",        image: "/product-images-new/image102.jpg" },
          { name: "Jet Fans",                      image: "/product-images-new/image57.jpg" },
          { name: "Cabinet Fan",                   image: "/product-images-new/image34.jpg" },
          { name: "Mixed Flow Duct Blower",        image: "/product-images-new/image99.jpg" },
          { name: "Inline Fan",                    image: "/product-images-new/image47.jpg" },
        ]
      }
    ]
  },

  Tyco: {
    name: "Tyco",
    description: "Leading manufacturer of fire protection, flow control, and safety products — UL Listed & FM Approved. Authorised distributor for sprinklers, valves, fittings, and fire suppression systems.",
    logo: "/brand-logos/tyco-new.png",
    banner: "/tyco-catalogue.jpg",
    categories: [
      {
        name: "Fire & Safety Systems",
        items: [
          { name: "Fire Protection Valves",  remarks: "Available on Demand" },
          { name: "Flow Control Products",   remarks: "Available on Demand" },
          { name: "Safety Equipment",        remarks: "Available on Demand" },
        ]
      }
    ]
  }
};
