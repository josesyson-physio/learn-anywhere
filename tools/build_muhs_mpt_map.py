"""Write library/muhs-mpt-map.js: the MUHS (Maharashtra) Master of Physiotherapy syllabus (approved by the
Academic Council on 18/09/2019, resolution 110/2019), module by module and paper by paper, with each line
linked to a library topic id (or None while it is still to be written).

Lines are short summaries in our own words; the ids were matched by hand. Run: python3 tools/build_muhs_mpt_map.py
"""
import json, pathlib

N = None

MODULES = [
 ("A. Professional practice, ethics and administration", [
  ("Development of the physiotherapy profession", "px-history-physiotherapy"),
  ("Laws governing practice; PWD Act; rights of physiotherapist and client", "ps-disability-legislation"),
  ("Ethics in clinical work, research and teaching; code of conduct", "px-ethics-physiotherapy"),
  ("Administration: planning, budget, quality assurance, setting up a department", N),
  ("Physiotherapist as leader and manager; communication and teamwork", "ps-leadership"),
  ("Roles of the physiotherapist (WCPT/World Physiotherapy, WHO); standards and competencies", "px-ethics-physiotherapy"),
  ("Documentation systems and ICF-based documentation", "icf-soap"),
  ("Professionalism; aligning physiotherapy with national health goals", "cn-health-care-delivery")]),
 ("B. Teaching technology", [
  ("Pedagogy, Kirkpatrick model and adult learning theories", N),
  ("Curriculum planning, teaching-learning methods, audio-visual aids, clinical teaching", N),
  ("Assessing student learning; oral and poster presentation", N)]),
 ("C. Research methodology", [
  ("Types of research; framing a research question", "research-methods"),
  ("Qualitative designs (grounded theory, phenomenology) and the Delphi process", "research-methods"),
  ("Quantitative designs: case series, cohort, pre-post, time series, repeated measures, RCT; bias", "research-methods"),
  ("Sampling and minimum sample size", "px-project-process"),
  ("Measurement: reliability, validity, responsiveness, MCID; outcome measures", "paeds-developmental-assessment"),
  ("Evidence-based practice: clinical questions, appraisal, guidelines, clinical prediction rules", "levels-evidence")]),
 ("C. Applied biostatistics", [
  ("Descriptive statistics and variability", "px-descriptive-statistics"),
  ("Inference, t-test, ANOVA, multiple comparisons, non-parametric tests", "px-hypothesis-testing"),
  ("Correlation, regression and chi-square", "px-hypothesis-testing"),
  ("Reliability statistics and power analysis", "px-hypothesis-testing"),
  ("Epidemiological measures: rate, ratio, incidence, prevalence, relative risk, odds ratio", "cn-epid-communicable")]),
 ("C. Scientific writing", [
  ("Kinds of scientific documents; authorship roles", "px-project-report"),
  ("Structure, style manuals (APA, MLA) and citation", "px-project-report"),
  ("Report writing, abstracts, oral and poster presentation; thesis structure", "px-data-presentation")]),
]

PAPER_I = [
 ("Applied biomechanics and clinical kinesiology", [
  ("Biomechanics of tissues and body systems", "bm-joint-tissues"),
  ("Applied and altered physiology of body systems", "ph-regional-circ-exercise"),
  ("Clinical kinesiology of posture and gait", "bk-posture-line-of-gravity"),
  ("Ergonomics of lifting, handling, transfers and workspace design", "ph-lifting-transfers"),
  ("Movement analysis; laboratory kinetics and kinematics", "gait-cycle"),
  ("Neurophysiology of pain; referred visceral pain; central processing", "pain-science")]),
 ("Exercise physiology and nutrition", [
  ("Energy transfer and expenditure at rest, activity and disease", "ph-regional-circ-exercise"),
  ("Responses and adaptations of body systems to training", "ph-artificial-resp-exercise"),
  ("Environment and performance", "paeds-exercise-physiology"),
  ("Body composition, nutrition and caloric balance", "px-nutrition-athletes-obesity"),
  ("Components of exercise programming", "fitt"),
  ("Fatigue assessment and work-rest scheduling", N),
  ("Introduction to sports science; psychology of exercise", "ps-motivation"),
  ("Nutrition and supplements in health and disease", "child-nutrition"),
  ("Benefits of exercise and exercise advocacy", "px-warmup-aerobics-cooldown")]),
 ("Electrophysiology and electrodiagnosis", [
  ("Clinical decision making in electrotherapy; stimulators and assessment devices", "el-current-selection"),
  ("Instrumentation for neuromuscular electrical stimulation", "el-hvpgs-diadynamic-fes"),
  ("Muscle plasticity and systemic effects of electrical stimulation", N),
  ("Electrophysiological testing and its use in prognosis", "el-ncs-h-f"),
  ("EMG and biofeedback", "el-biofeedback")]),
]

PAPER_II = [
 ("Physiotherapy (functional) diagnosis and clinical reasoning", [
  ("Clinical examination and detecting movement dysfunction", "pt-ortho-history"),
  ("Investigations and imaging in neuromusculoskeletal and cardiopulmonary disorders", "cr-assessment"),
  ("Developmental screening; motor control assessment", "paeds-developmental-assessment"),
  ("Anthropometry and physical fitness testing", "cr-stress-testing"),
  ("Special tests in musculoskeletal, neurological and cardiopulmonary disorders", "pt-functional-special-tests"),
  ("Aids, appliances and adaptive devices", "aids-adl"),
  ("Disability evaluation and diagnosis", "co-disability-evaluation"),
  ("Posture and gait evaluation with reasoning", "pathological-gaits"),
  ("Pain assessment: systemic vs musculoskeletal, viscerogenic, psychological overlay", "pain-science"),
  ("Assessment and decision making in the elderly", "md-geriatric-conditions"),
  ("Screening for referral: direct access, red flags, differential diagnosis", N),
  ("Systems screening and the screening interview; cultural competence", N),
  ("Integrating ICF; assessing function and quality of life", "icf-soap")]),
 ("Evidence-based practice", [
  ("Sackett's steps; literature search", "levels-evidence"),
  ("Appraising RCTs and systematic reviews", "levels-evidence"),
  ("Shared decision making; linking evidence to practice", N)]),
 ("Advanced physiotherapeutic approaches", [
  ("Maternal and child care", "antenatal-postnatal"),
  ("Neurological approaches; motor control and learning theories", "motor-learning"),
  ("Pharmacodynamics and activity", N),
  ("Advanced therapeutic exercise", "pre"),
  ("Advanced electrotherapy: dosage monitoring and safety", "el-equipment-maintenance-safety"),
  ("Plan of care for function, discharge and participation", "icf-soap"),
  ("Health and stress management", "ps-stress-burnout"),
  ("Manual therapy and soft tissue mobilisation", "maitland-grades"),
  ("Oncology, disaster care, plastic surgery and burns, skin, obstetrics and gynaecology", "burns"),
  ("CPR, monitoring, defibrillators and ventilators", "paeds-bls-pals"),
  ("Yoga in physiotherapy", "e1-imagery-autogenic-yoga"),
  ("Community practice; alternative therapies", "cbr")]),
]

def quad(side, other):
    return [
     ("Basis and clinical reasoning", [
      (f"Anatomical, physiological and biomechanical basis of {side} quadrant dysfunction", "bm-joint-injury-disease"),
      (f"Clinical decision making for children, adults and older adults ({side} quadrant)", "maitland-grades"),
      ("Functional diagnosis and outcome measures", "pt-functional-special-tests"),
      ("Pain mechanisms and recent advances in pain care", "pain-science")]),
     ("Treatment", [
      ("Advances in manual therapy", "maitland-grades"),
      ("Sports injuries and performance fitness", "acl" if side == "lower" else "subacromial-pain"),
      ("Industrial fitness and work-related disorders; ergonomics", "cn-occupational-hazards"),
      ("Assistive technology for stability and mobility", "orthotics"),
      (f"Yogasanas for musculoskeletal health ({side} quadrant)", "e1-imagery-autogenic-yoga")]),
     ("Wider practice", [
      ("Evidence-based assessment and treatment planning", "levels-evidence"),
      ("Disability evaluation; legislation and social care", "co-disability-evaluation"),
      ("Skin (integumentary) problems from musculoskeletal dysfunction", "burns"),
      ("Pharmacotherapy in musculoskeletal conditions", N),
      (f"Effect on {other} quadrant function", "lbp" if side == "lower" else "cervical-radiculopathy")])]

SPEC = {
 "Musculoskeletal": [
  ("Part I (Paper III): Upper quadrant: cervical and thoracic spine, shoulder girdle, upper limb", quad("upper", "lower")),
  ("Part II (Paper IV): Lower quadrant: lumbar spine, pelvis, lower limb", quad("lower", "upper"))],
 "Neuro": [
  ("Part I (Paper III): Paediatric neurology", [
   ("Development and assessment", [("Gross and fine motor development; posture, gait and function", "motor-development"),
     ("Congenital and acquired disorders of growth and development", "cp"), ("Advanced paediatric neuro assessment", "paediatric-assessment"),
     ("Motor control, perceptual-motor and sensory issues in children", "sensory-integration-therapy"), ("Early identification and early intervention", "gma-hine")]),
   ("Treatment", [("Facilitating development; handling in neuro approaches", "facilitation-handling"), ("Evidence-based treatment planning", "levels-evidence"),
     ("Progressive conditions and the terminally ill child", "dmd"), ("NICU physiotherapy", "nicu-physiotherapy"),
     ("School and community inclusion: environment, assistive technology, law", "school-based-pt"), ("Skin and secondary impairments", N),
     ("Pharmacotherapy in neurological conditions", N)])]),
  ("Part II (Paper IV): Adult neurology", [
   ("Assessment", [("Neurodevelopmental and neurophysiological approaches in adults", "ndt-bobath"), ("Advanced adult neuro assessment", "pt-neuro-assessment-reasoning"),
     ("Outcome measures in adult and older adult neurology", "stroke")]),
   ("Treatment", [("Evidence-based treatment planning", "levels-evidence"), ("Advanced neuro-therapeutic skills", "motor-learning"),
     ("Progressive conditions and the terminally ill", "mnd"), ("Ageing: coping and preventing complications", "falls"),
     ("Community inclusion: environment, assistive technology, law", "cbr"), ("Pharmacotherapy in neurological conditions", N)])])],
 "Cardio-respiratory": [
  ("Part I (Paper III): Respiratory physiotherapy", [
   ("Basis and assessment", [("Structure, function and biomechanics of the respiratory system across the lifespan", "cr-resp-mechanics"),
     ("Clinical reasoning from neonate to older adult, acute and rehab", "cr-assessment"), ("Outcome measures and investigations", "cr-lung-volumes-pft")]),
   ("Treatment", [("Evidence-based respiratory care", "airway-clearance"), ("Pulmonary rehabilitation", "cr-pulmonary-rehab"),
     ("Energy conservation and assistive devices", "cr-relaxation-positions"), ("Pain after medical and surgical chest conditions", "postop-chest")]),
   ("Critical care", [("ICU decision making across the lifespan", "icu"), ("Airways, ventilation, oxygen therapy, weaning and monitoring", "icu"),
     ("Post-operative respiratory care", "postop-chest"), ("Risk stratification, prevention and health promotion", "cn-epid-ncd"),
     ("Respiratory pharmacology", N)])]),
  ("Part II (Paper IV): Cardiovascular physiotherapy", [
   ("Basis and assessment", [("Structure and function of heart, vessels and mediastinum across the lifespan", "ph-cardiac-output-bp"),
     ("Clinical decision making from neonate to older adult", "cr-assessment"), ("Outcome measures and investigations (ECG, echo, lab)", "ph-cardiac-cycle-ecg")]),
   ("Treatment", [("Evidence-based care in cardiac and vascular failure", "heart-failure"), ("Energy conservation and assistive devices", "cr-relaxation-positions"),
     ("ICU care; airways, ventilation, oxygen and weaning", "icu"), ("Post-operative care", "cr-heart-surgery"), ("Cardiac rehabilitation", "cardiac-rehab"),
     ("Vascular rehabilitation", "cr-pvd")]),
   ("Prevention and fitness", [("Risk stratification; metabolic and endocrine disorders", "diabetes-exercise"), ("Lifestyle disorders", "cn-epid-ncd"),
     ("Cardio-respiratory fitness testing and training", "cr-stress-testing"), ("Basic life support", "paeds-bls-pals"),
     ("Cardiac pharmacology", N), ("Skin and other secondary impairments", "cr-pvd")])])],
 "Community": [
  ("Part I (Paper III): Essentials of community physiotherapy", [
   ("Health and rehabilitation", [("Health, illness, levels of care and fitness", "cn-levels-prevention"), ("Fitness training for health promotion", "px-recreational-fitness"),
     ("Foundations of rehabilitation; institution-based services and teams", "co-rehab-team")]),
   ("Community-based rehabilitation", [("CBR methods within the national health system", "cbr"), ("National institutes, DRC and PHC roles", "cn-health-care-delivery"),
     ("Public awareness and health messages", "cn-health-education"), ("National and UN disability laws", "ps-disability-legislation"),
     ("Disability detection and early intervention", "prevention-disability"), ("Appropriate technology and assistive devices", "orthotics"),
     ("Home exercise programmes", N), ("Yoga and stress management", "e1-imagery-autogenic-yoga"), ("Outreach and home-based services", "ei-services"),
     ("Government, NGOs and inter-sectoral working in CBR", "community-disability"), ("Physiotherapist as master trainer", N),
     ("Disaster management", N)])]),
  ("Part II (Paper IV): Women's, industrial and geriatric health", [
   ("Geriatrics", [("Theories of ageing; assessing the elderly", "md-ageing-theories"), ("Exercise prescription, psychosocial and safety issues", "falls"),
     ("Geriatric rehabilitation and holistic care", "md-geriatric-conditions")]),
   ("Women's health", [("Maternal and child health; reproductive health", "antenatal-postnatal"), ("Pre- and post-natal exercise", "antenatal-postnatal"),
     ("Musculoskeletal pain in pregnancy and after menopause", "osteoporosis"), ("Incontinence and pelvic floor dysfunction", "pelvic-floor")]),
   ("Industrial health", [("Occupational hazards, hygiene, vulnerable workers and labour law", "cn-occupational-hazards"),
     ("Injury prevention and return to work", "co-prevocational"), ("Ergonomics: tools, posture, lifting, workspace and displays", "ph-lifting-transfers"),
     ("Workers' compensation and ESI", "cn-workmens-compensation"), ("Evidence-based community practice", "levels-evidence")])])],
 "Sports": [
  ("Part I (Paper III): Sports science and traumatology", [
   ("Sports science", [("Sports science and exercise physiology", "ph-regional-circ-exercise"), ("Rules, equipment and demands of common sports", N),
     ("Body composition", "px-nutrition-athletes-obesity"), ("Sports biomechanics: running, throwing, swimming, jumping; 2D and 3D analysis", "gait-cycle"),
     ("Strength training principles; fitness and strength testing", "pre"), ("Sport-specific conditioning and agility", "fitt"),
     ("Psychology in sport", "ps-motivation"), ("Doping and performance-enhancing drugs", N), ("Protective equipment and orthotics", "orthotics")]),
   ("Sports traumatology", [("Tissue healing", "md-inflammation-healing"), ("Lower limb soft tissue injuries", "hamstring"),
     ("Upper limb soft tissue injuries", "subacromial-pain"), ("Fractures and dislocations", "general-fracture"), ("Spinal injuries", "spinal-fracture"),
     ("Head injury in sport", "tbi"), ("Overuse injuries", "tennis-elbow"), ("Female, young and older athletes", "youth-resistance-training"),
     ("On-field assessment and injury prevention", N), ("Sports pharmacology", N)])]),
  ("Part II (Paper IV): Sports injury management", [
   ("Acute care", [("Principles of sports injury management", "co-sprain-strain-bursitis"), ("Sporting emergencies", "paeds-bls-pals"),
     ("Initial management of acute injuries", "ankle-sprain"), ("Fluid and electrolyte balance", N), ("Surgery and arthroscopy overview", "acl")]),
   ("Rehabilitation", [("Overuse injury management", "pfps"), ("Electrophysical agents in sport", "ultrasound"), ("Rehabilitation and return to sport", "acl"),
     ("Manual therapy in sport", "maitland-grades"), ("Para and physically challenged athletes", "sci")]),
   ("Event and team work", [("Medical cover at events; travelling with a team", N), ("Pre-, in- and post-season screening", N)])])],
}

def subj(n, units):
    return {"n": n, "e": True, "u": [{"t": t, "k": [list(k) for k in ks]} for t, ks in units]}

years = [
 {"y": "Modules (all)", "s": [subj("Compulsory modules A to C, first six months (common to all specialties)", MODULES)]},
 {"y": "Paper I", "s": [subj("Paper I: Applied physiotherapeutics I (common)", PAPER_I)]},
 {"y": "Paper II", "s": [subj("Paper II: Applied physiotherapeutics II (common)", PAPER_II)]},
]
for spec, parts in SPEC.items():
    years.append({"y": spec, "s": [subj(n, us) for n, us in parts]})

M = {"key": "muhs-mpt", "label": "MPT Physiotherapy (MUHS Maharashtra)", "university": "Maharashtra University of Health Sciences, Nashik", "course": "MPT",
     "regulation": "Syllabus approved by the Academic Council, 18/09/2019", "tabLabel": "",
     "pattern": "Two years, university exam at the end of year 2. Four theory papers of 3 hours and 100 marks each: two long answers of 30 marks (choose one of two in each) and four of five short answers of 10 marks. Papers I and II are common, set to the specialty; Papers III and IV are the specialty papers. Practical 400: two specialty long cases of 150, allied short case 50, dissertation viva 30, teaching skills 20. Modules A to C, 90% attendance and an accepted dissertation are needed to sit the exam.",
     "years": years}
out = pathlib.Path(__file__).resolve().parent.parent / "library" / "muhs-mpt-map.js"
out.write_text("// MUHS (Maharashtra) MPT syllabus 2019, module and paper by paper, summarised in our own words.\n"
               "// Generated by tools/build_muhs_mpt_map.py. Each line is [syllabus text, library topic id or null].\n"
               "window.COURSE_MAPS = (window.COURSE_MAPS || []).concat([" + json.dumps(M, ensure_ascii=True) + "]);\n")
allk = [k for y in years for s in y["s"] for u in s["u"] for k in u["k"]]
print("lines", len(allk), "linked", sum(1 for k in allk if k[1]))
