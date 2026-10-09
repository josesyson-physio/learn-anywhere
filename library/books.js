// Reference shelf. Topics cite these as {b: "key", ch: "chapter or subject"}.
// Learn Anywhere summarises standard physiotherapy knowledge in its own words
// and points students to these books for further reading. No text is copied.
window.BOOKS = {
  kisner: { a: "Kisner C, Colby LA, Borstad J", t: "Therapeutic Exercise: Foundations and Techniques", s: "Exercise therapy" },
  magee: { a: "Magee DJ", t: "Orthopedic Physical Assessment", s: "Musculoskeletal" },
  osullivan: { a: "O'Sullivan SB, Schmitz TJ, Fulk GD", t: "Physical Rehabilitation", s: "Rehabilitation" },
  umphred: { a: "Umphred DA, et al.", t: "Umphred's Neurological Rehabilitation", s: "Neurology" },
  brunnstrom: { a: "Houglum PA, Bertoti DB", t: "Brunnstrom's Clinical Kinesiology", s: "Kinesiology" },
  neumann: { a: "Neumann DA", t: "Kinesiology of the Musculoskeletal System", s: "Kinesiology" },
  ehrman: { a: "Ehrman JK, Gordon PM, Visich PS, Keteyian SJ", t: "Clinical Exercise Physiology", s: "Exercise physiology" },
  frownfelter: { a: "Frownfelter D, Dean E", t: "Cardiovascular and Pulmonary Physical Therapy", s: "Cardio-respiratory" },
  cashNeuro: { a: "Downie PA (ed.)", t: "Cash's Textbook of Neurology for Physiotherapists", s: "Neurology" },
  cashOrtho: { a: "Downie PA (ed.)", t: "Cash's Textbook of Orthopaedics and Rheumatology for Physiotherapists", s: "Musculoskeletal" },
  cashMed: { a: "Downie PA (ed.)", t: "Cash's Textbook of General Medical and Surgical Conditions for Physiotherapists", s: "Medical and surgical" },
  maitlandV: { a: "Hengeveld E, Banks K (eds.)", t: "Maitland's Vertebral Manipulation", s: "Manual therapy" },
  maitlandP: { a: "Hengeveld E, Banks K (eds.)", t: "Maitland's Peripheral Manipulation", s: "Manual therapy" },
  prentice: { a: "Prentice WE", t: "Therapeutic Modalities in Rehabilitation", s: "Electrotherapy" },
  brukner: { a: "Brukner P, Khan K, et al.", t: "Brukner & Khan's Clinical Sports Medicine", s: "Sports" },
  kendall: { a: "Kendall FP, McCreary EK, Provance PG, et al.", t: "Muscles: Testing and Function with Posture and Pain", s: "Assessment" },
  levangie: { a: "Levangie PK, Norkin CC", t: "Joint Structure and Function: A Comprehensive Analysis", s: "Kinesiology" },
  norkin: { a: "Norkin CC, White DJ", t: "Measurement of Joint Motion: A Guide to Goniometry", s: "Assessment" },
  shumway: { a: "Shumway-Cook A, Woollacott MH", t: "Motor Control: Translating Research into Clinical Practice", s: "Neurology" },
  gillen: { a: "Gillen G", t: "Stroke Rehabilitation: A Function-Based Approach", s: "Neurology" },
  tecklin: { a: "Tecklin JS", t: "Pediatric Physical Therapy", s: "Paediatrics" },
  campbell: { a: "Campbell SK, et al.", t: "Physical Therapy for Children", s: "Paediatrics" },
  brotzman: { a: "Brotzman SB, et al.", t: "Clinical Orthopaedic Rehabilitation", s: "Musculoskeletal" },
  goodman: { a: "Goodman CC, Fuller KS", t: "Pathology: Implications for the Physical Therapist", s: "Pathology" },
  sahrmann: { a: "Sahrmann SA", t: "Diagnosis and Treatment of Movement Impairment Syndromes", s: "Musculoskeletal" },
  explainPain: { a: "Butler DS, Moseley GL", t: "Explain Pain", s: "Pain science" },
  butlerSNS: { a: "Butler DS", t: "The Sensitive Nervous System", s: "Pain science" },
  travell: { a: "Travell JG, Simons DG", t: "Travell & Simons' Myofascial Pain and Dysfunction: The Trigger Point Manual", s: "Musculoskeletal" },
  acsm: { a: "American College of Sports Medicine", t: "ACSM's Guidelines for Exercise Testing and Prescription", s: "Exercise physiology" },
  irwin: { a: "Irwin S, Tecklin JS", t: "Cardiopulmonary Physical Therapy: A Guide to Practice", s: "Cardio-respiratory" },
  mansfield: { a: "Mansfield PJ, Neumann DA", t: "Essentials of Kinesiology for the Physical Therapist Assistant", s: "Kinesiology" },
  houglum: { a: "Houglum PA", t: "Therapeutic Exercise for Musculoskeletal Injuries", s: "Exercise therapy" },
  higgs: { a: "Higgs J, Jensen GM, Loftus S, Christensen N (eds.)", t: "Clinical Reasoning in the Health Professions", s: "Clinical reasoning" },
  jewell: { a: "Jewell DV", t: "Guide to Evidence-Based Physical Therapist Practice", s: "Research" },
  cameron: { a: "Cameron MH", t: "Physical Agents in Rehabilitation", s: "Electrotherapy" },
  mageeMSK: { a: "Magee DJ, Zachazewski JE, Quillen WS, Manske RC (eds.)", t: "Pathology and Intervention in Musculoskeletal Rehabilitation", s: "Musculoskeletal" }
};
// Shelf entries the user listed that topics don't cite directly.
window.SHELF_EXTRA = [
  { t: "Research Methods for Evidence-Based Practice in Healthcare", s: "Research" },
  { t: "Orthopaedic Manual Therapy", s: "Manual therapy" }
];
window.LIB_EXTRA = window.LIB_EXTRA || [];
