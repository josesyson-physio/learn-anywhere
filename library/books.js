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
  mageeMSK: { a: "Magee DJ, Zachazewski JE, Quillen WS, Manske RC (eds.)", t: "Pathology and Intervention in Musculoskeletal Rehabilitation", s: "Musculoskeletal" },
  // Early intervention and child development (PG Diploma in Early Intervention reading list and standard texts)
  finnie: { a: "Bower E (ed.), after Finnie NR", t: "Finnie's Handling the Young Child with Cerebral Palsy at Home", s: "Paediatrics" },
  shepherd: { a: "Shepherd RB", t: "Physiotherapy in Paediatrics", s: "Paediatrics" },
  bundy: { a: "Bundy AC, Lane SJ (eds.)", t: "Sensory Integration: Theory and Practice", s: "Occupational therapy" },
  caseSmith: { a: "Case-Smith J, O'Brien JC", t: "Occupational Therapy for Children and Adolescents", s: "Occupational therapy" },
  hurlock: { a: "Hurlock EB", t: "Child Development", s: "Child development" },
  berk: { a: "Berk LE", t: "Child Development", s: "Child development" },
  batshaw: { a: "Batshaw ML, Roizen NJ, Pellegrino L (eds.)", t: "Children with Disabilities", s: "Early intervention" },
  nelson: { a: "Kliegman RM, et al.", t: "Nelson Textbook of Pediatrics", s: "Paediatrics" },
  ghai: { a: "Paul VK, Bagga A (eds.)", t: "Ghai Essential Pediatrics", s: "Paediatrics" },
  guyton: { a: "Hall JE", t: "Guyton and Hall Textbook of Medical Physiology", s: "Physiology" },
  inderbir: { a: "Singh I", t: "Textbook of Human Neuroanatomy", s: "Anatomy" },
  owens: { a: "Owens RE", t: "Language Development: An Introduction", s: "Speech and language" },
  hanen: { a: "Weitzman E (Hanen Centre)", t: "It Takes Two to Talk", s: "Speech and language" },
  turnbull: { a: "Turnbull A, Turnbull HR, et al.", t: "Families, Professionals, and Exceptionality", s: "Family and community" },
  dunst: { a: "Dunst CJ, Trivette CM, Deal AG", t: "Enabling and Empowering Families", s: "Family and community" },
  emery: { a: "Turnpenny PD, Ellard S", t: "Emery's Elements of Medical Genetics", s: "Genetics" },
  park: { a: "Park K", t: "Park's Textbook of Preventive and Social Medicine", s: "Community medicine" }
};
// Shelf entries the user listed that topics don't cite directly.
window.SHELF_EXTRA = [
  { t: "Research Methods for Evidence-Based Practice in Healthcare", s: "Research" },
  { t: "Orthopaedic Manual Therapy", s: "Manual therapy" }
];
window.LIB_EXTRA = window.LIB_EXTRA || [];
// Free and legal places to read more. Links only; nothing is copied into the app.
window.FREE_READS = [
  { t: "Physiopedia", u: "https://www.physio-pedia.com/", d: "Free physiotherapy encyclopedia (CC BY-SA)" },
  { t: "OpenStax Anatomy and Physiology 2e", u: "https://openstax.org/details/books/anatomy-and-physiology-2e", d: "Full free textbook (CC BY 4.0), PDF download allowed" },
  { t: "NCBI Bookshelf (includes StatPearls)", u: "https://www.ncbi.nlm.nih.gov/books/", d: "Free medical books and chapters" },
  { t: "PubMed Central", u: "https://www.ncbi.nlm.nih.gov/pmc/", d: "Free full-text research articles" },
  { t: "PEDro", u: "https://pedro.org.au/", d: "Free database of physiotherapy trials and guidelines" },
  { t: "NICE guidance", u: "https://www.nice.org.uk/guidance", d: "Free clinical guidelines" },
  { t: "Cochrane Library", u: "https://www.cochranelibrary.com/", d: "Systematic reviews (free summaries)" },
  { t: "WHO Rehabilitation", u: "https://www.who.int/health-topics/rehabilitation", d: "Free WHO rehabilitation resources" }
];
