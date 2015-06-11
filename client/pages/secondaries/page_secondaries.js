var firm = [
"WSP Global Inc.",
"Surveying And Mapping, LLC (SAM)",
"Landpoint  ",
"GATE, Inc.  ",
"Hargrove Engineers + Constructors",
"DeNovo Constructors, Inc.",
"Westwood Professional Services",
"Bowman Consulting",
"EN Engineering, LLC",
"Nova Consulting Group, Inc. ",
"Buckland & Taylor",
"Ware Malcomb",
"Perkins Eastman",
"The Vertex Companies, Inc.",
"EHS Support LLC",
"HGA",
"Natural Resource Technology, Inc.",
"LJA Engineering, Inc.",
"Matrix Technologies, Inc.",
"BSB Design",
"TerraTherm, Inc.",
"JLG Architects",
"Testengeer Inc. ",
"The Thrasher Group Inc. ",
"Bartlett & West, Inc.",
"Apex Companies, LLC",
"SEPI Engineering & Construction, Inc.",
"CRB"
];

var fund = [
"O'Neal, Inc.",
"Arrow Engineering Inc.",
"Woodard & Curran",
"Maser Consulting P.A.",
"I & S Group, Inc.",
"W&M Environmental Group, Inc.",
"Slater Hanifan, Group, Inc.",
"Tectonic Engineering & Surveying Consultants P.C.",
"Cardno",
"CobbFendley",
"A. Morton Thomas and Associates, Inc.",
"Baseline Engineering Corporation",
"BSI Engineering, Inc. ",
"Golder Associates",
"Wantman Group, Inc.",
"Harrison French & Associates, LTD",
"Houston Engineering Inc",
"Hill International, Inc.",
"BL Companies, Inc.",
];

// simple-todos.js
if (Meteor.isClient) {
  // This code only runs on the client
  Template.pageSecondaries.helpers({ 
    companies:[
      { id: Fake.word(), firm: "Firm Name Sample", fund: "Fund Name Sample" },
      { id: Fake.word(), firm: Fake.fromArray(firm), fund: Fake.fromArray(fund) },
      { id: Fake.word(), firm: Fake.fromArray(firm), fund: Fake.fromArray(fund) },
      { id: Fake.word(), firm: Fake.fromArray(firm), fund: Fake.fromArray(fund) },
      { id: Fake.word(), firm: Fake.fromArray(firm), fund: Fake.fromArray(fund) },
      { id: Fake.word(), firm: Fake.fromArray(firm), fund: Fake.fromArray(fund) }
    ]
  });

  Template.pageSecondaries.onRendered({

  });
}
