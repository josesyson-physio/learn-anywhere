"""Write library/rguhs-mpt-map.js: the RGUHS (Karnataka) MPT 2020 curriculum, paper by paper,
with each syllabus line linked to a library topic id (or None while it is still to be written).

Source: Rajiv Gandhi University of Health Sciences, Ordinance governing Master of Physiotherapy (MPT)
course, Regulation and Curriculum 2020 (the official PDF published by the university). Lines are short
summaries in our own words; the ids were matched by hand. Run: python3 tools/build_rguhs_mpt_map.py
"""
import json, pathlib

N = None
PAPER_I = [
 ("1. Principles of physiotherapy practice", [
  ("Evidence-based practice in physiotherapy", "levels-evidence"),
  ("History taking, assessment, communication, documentation and treatment planning", "icf-soap"),
  ("Documenting assessment and management with the ICF", "icf-soap"),
  ("Standardised scales and their psychometric properties", "paeds-developmental-assessment")]),
 ("2. Professional values and ethics", [
  ("World Physiotherapy standards of practice; core professional values", "px-ethics-physiotherapy"),
  ("ICMR ethical guidelines; ethical issues in physiotherapy practice", "px-ethics-physiotherapy")]),
 ("3. Research methodology and biostatistics", [
  ("Designing clinical research: question, sampling, measurement, sample size", "research-methods"),
  ("Study designs: cross-sectional, case-control, cohort, RCT, diagnostic, qualitative, systematic review", "research-methods"),
  ("Questionnaires, data management and quality control", "px-project-process"),
  ("Biostatistics: distributions, descriptive statistics", "px-descriptive-statistics"),
  ("Hypothesis testing, non-parametric tests, regression and correlation", "px-hypothesis-testing"),
  ("Guidelines, clinical pathways, writing and publishing research", "px-project-report")]),
 ("4. Exercise physiology", [
  ("Energy transfer, nutrition and energy expenditure at rest and exercise", "ph-regional-circ-exercise"),
  ("System responses and adaptations to exercise and training", "ph-artificial-resp-exercise"),
  ("Body composition, obesity and weight control", "px-nutrition-athletes-obesity"),
  ("Training aerobic and anaerobic systems; training muscles to become stronger", "fitt"),
  ("Environment, ergogenic aids, age and gender in exercise", "paeds-exercise-physiology")]),
 ("5. Electrophysiology", [
  ("Peripheral nerve, muscle and neuromuscular junction; electrical properties", "el-rmp-action-potential"),
  ("Instrumentation for neuromuscular electrical stimulation", "el-hvpgs-diadynamic-fes"),
  ("Muscle plasticity and systemic effects of electrical stimulation", N)]),
 ("6. Pedagogy in physiotherapy education", [
  ("Competency-based education, adult learning, Bloom, Miller, Dreyfus", N),
  ("Instructional design, assessment, MCQ writing, rubrics; teaching with technology", N)]),
 ("7. Management, entrepreneurship and leadership", [
  ("Management principles and functions; responsibilities of the physiotherapy manager", N),
  ("Entrepreneurship and leadership in physiotherapy", "ps-leadership")]),
]

SPEC = {
 "Musculoskeletal": [
  ("Paper II: Fundamental principles of musculoskeletal physiotherapy", [
   ("Basic concepts", [("Anatomy and physiology of the musculoskeletal system", "an-cell-tissue-bone"),
     ("Anthropometry and body composition", N), ("Kinetics, kinematics, force, moments, equilibrium, energetics", "bm-forces-newton")]),
   ("Movement across the lifespan", [("Growth of the musculoskeletal system; gait in children and older adults", "paeds-gait-development"),
     ("Physiological basis of movement and exercise capacity", "paeds-exercise-physiology")]),
   ("Joint mechanics, posture and gait", [("Mechanics and pathomechanics of upper limb, lower limb, spinal and TM joints", "bm-joint-injury-disease"),
     ("Normal and abnormal posture, analysis and deformities", "bk-postural-analysis"), ("Gait cycle, biomechanical analysis, pathological gaits, energy cost", "gait-cycle")]),
   ("Pain and electrophysics", [("Pain pathways, acute and chronic pain, theories, assessment tools", "pain-science"),
     ("Biophysical effects of heat and cold; tissue healing; choosing modalities", "el-current-selection")])]),
  ("Paper III: Physical and functional diagnosis in musculoskeletal disorders", [
   ("Screening and direct access", [("Screening head, neck, back, upper and lower quadrant, chest", "pt-functional-special-tests"),
     ("Direct access, primary care and decision making", N)]),
   ("Physiotherapy diagnosis", [("Special tests and red flags for referred pain", "pt-functional-special-tests"),
     ("Diagnostic imaging and electrodiagnosis in musculoskeletal conditions", "el-emg"), ("Exercise testing in musculoskeletal conditions", "cr-stress-testing")]),
   ("Specific assessments", [("Fractures: pre- and post-operative assessment", "general-fracture"), ("Hand injuries and soft tissue repairs", "co-hand-injuries"),
     ("Amputations", "amputation"), ("Degenerative and paediatric orthopaedic conditions", "co-arthritis-deformities")]),
   ("Function and work", [("Functional assessment scales and outcome measures; ICF", "icf-soap"), ("Ergonomic risk assessment; work capacity and return to work", "cn-occupational-hazards"),
     ("Clinical reasoning in manual therapy", "maitland-grades")])]),
  ("Paper IV: Physiotherapy interventions in musculoskeletal disorders", [
   ("Impairments and pain", [("Impaired muscle performance, endurance, mobility and neuromuscular control", "pre"),
     ("Pharmacological, electrotherapeutic and behavioural pain management", "co-pain-theories-modalities")]),
   ("Rehabilitation methods", [("Postural stability, balance and core stability", "balance-training"), ("Functional training and activity promotion", "e2-functional-retraining")]),
   ("Advanced techniques", [("Manual therapy and myofascial schools of thought", "maitland-grades"), ("Myofascial pain and trigger points", "co-myofascial-pain"),
     ("Neurodynamics and functional methods", N), ("Taping and external applications", N)]),
   ("Electromodalities, ergonomics and trauma", [("Evidence-based electrotherapy in musculoskeletal disorders", "ultrasound"),
     ("Work-related disorders, work hardening and assistive devices", "co-prevocational"), ("Fractures and post-operative rehabilitation", "general-fracture"),
     ("Tendon transfers, soft tissue injuries and degenerative conditions", "co-tendon-transfer-reeducation")])]),
 ],
 "Sports": [
  ("Paper II: Basic medical sciences for sports physiotherapy", [
   ("Applied sciences", [("Growth, maturation and movement control", "gallahue-motor-development"), ("Cardio-respiratory, endocrine and bio-energetics", "ph-regional-circ-exercise"),
     ("Muscle, tendon and ligament injury pathophysiology", "co-sprain-strain-bursitis"), ("Biomechanics, motor learning and pain neuroscience education", "motor-learning")]),
   ("Sports psychology and nutrition", [("Psychology of injury, anxiety, motivation and doping", "ps-motivation"), ("Sports nutrition and weight management", "px-nutrition-athletes-obesity")]),
   ("Sports medicine", [("Anti-doping (NADA, WADA) and sports pharmacology", N), ("Training principles, thermoregulation, altitude and body composition", "fitt"),
     ("Medical conditions in sport: diabetes, hypertension, COPD", "diabetes-exercise")])]),
  ("Paper III: Sports assessment, injury evaluation and exercise physiology", [
   ("Assessment", [("Interview, examination, reliability and validity, field and lab tests", "pt-functional-special-tests"), ("Health and skill related fitness tests", "cr-stress-testing"),
     ("Pre-participation, on- and off-field assessment", N), ("Lower limb, upper limb, spine and gait in sport", "acl")]),
   ("Return to sport and advanced methods", [("Criteria for return to sport", "acl"), ("Isokinetics, force plates, EMG and movement analysis", "el-emg")])]),
  ("Paper IV: Sports injuries: prevention, management and rehabilitation", [
   ("Prevention", [("Protective devices, technique, play surface and shoes", N)]),
   ("Injuries", [("Ligament injuries", "ankle-sprain"), ("Muscle injuries", "hamstring"), ("Tendon injuries", "achilles-rupture"), ("Bone and cartilage injuries", "pfps"),
     ("Sports emergencies and first aid; CPR on and off field", "paeds-bls-pals")]),
   ("Special populations and topics", [("Children, women, elderly and para-athletes", "youth-resistance-training"), ("Female athlete triad and menstrual cycle", N),
     ("Exercise prescription for special populations", "fitt")])]),
 ],
 "Cardio-pulmonary": [
  ("Paper II: Basics of cardiovascular and pulmonary sciences", [
   ("Respiratory system", [("Applied and developmental anatomy and physiology", "cr-bronchial-tree"), ("Regulation and biomechanics of respiration; positioning", "cr-resp-mechanics"),
     ("Pathophysiology of acute and chronic respiratory disease", "copd")]),
   ("Cardiovascular and integumentary", [("Cardiovascular anatomy, control and pathophysiology", "ph-cardiac-output-bp"), ("Integumentary system", "ph-skin-temperature")]),
   ("Exercise physiology and health", [("Nutrition, energy transfer, METs and body composition", "ph-regional-circ-exercise"), ("Responses and adaptations to training", "fitt"),
     ("Exercise intolerance in disease across lifespan", "paeds-exercise-physiology"), ("Pain physiology", "pain-science")])]),
  ("Paper III: Assessment and functional diagnosis", [
   ("Critical care", [("Evaluating the critically ill; weaning criteria; ICU monitoring", "icu"), ("ECG, ABG, biochemistry and chest imaging", "cr-assessment")]),
   ("Respiratory and cardiac", [("Respiratory examination, PFT, ABG", "cr-lung-volumes-pft"), ("Cardiac examination, ECG, echo, Holter", "ph-cardiac-cycle-ecg"),
     ("CPET and exercise tolerance testing; risk stratification", "cr-stress-testing")]),
   ("Other systems", [("Peripheral vascular, wound and oedema assessment", "cr-pvd"), ("Burns and skin", "burns"), ("Oncology assessment", N), ("Renal dysfunction and ANS testing", "md-renal-failure-uti")])]),
  ("Paper IV: Physiotherapy interventions", [
   ("Acute and critical care", [("CPR and BLS training", "paeds-bls-pals"), ("Ventilated patients, artificial airway, weaning", "icu"),
     ("ICU care for COPD, asthma, cardiac surgery, failure", "cr-heart-surgery"), ("Secondary dysfunction: neuromuscular, trauma, head and spinal injury", "tbi"),
     ("Neonatal and paediatric critical care", "nicu-physiotherapy")]),
   ("Therapeutics", [("Lung expansion and bronchial hygiene", "airway-clearance"), ("Reducing work of breathing; energy conservation", "cr-relaxation-positions"),
     ("Oxygen therapy", N), ("Airway pharmacology", N)]),
   ("Rehabilitation and prevention", [("Cardiac rehabilitation", "cardiac-rehab"), ("Pulmonary rehabilitation", "cr-pulmonary-rehab"), ("Smoking cessation and primary prevention", "cn-epid-ncd"),
     ("Arterial, venous and lymphatic disease; ulcers", "cr-pvd"), ("Exercise prescription in renal, obesity and connective tissue disease", "diabetes-exercise"),
     ("Cancer rehabilitation and palliative care", "cr-pulm-htn-pe-cancer"), ("Burns: exercise and scar management", "burns")])]),
 ],
 "Paediatrics": [
  ("Paper II: Applied anatomy, physiology and biomechanics in paediatrics", [
   ("General paediatrics", [("Neonatal and paediatric advanced life support (NALS, PALS)", "paeds-bls-pals"), ("Genetics in paediatrics", "genetic-counselling"),
     ("Exercise physiology in children", "paeds-exercise-physiology"), ("Nutrition and immunisation", "immunization"), ("Pain theories in children", "paeds-pain")]),
   ("Developmental paediatrics", [("Embryology by system", "neuroembryology"), ("Growth, development and maturation", "growth-development-principles"),
     ("Theories, typical and atypical development, reflex maturation", "postural-control-reflexes"), ("Phases of motor development", "gallahue-motor-development")]),
   ("System-based applied paediatrics", [("Motor control and motor learning", "motor-learning"), ("Bowel and bladder development", N),
     ("Balance, coordination and gait development", "paeds-gait-development"), ("Posture development and deviations", "e1-faulty-postures"), ("Cardio-respiratory physiology in children", "paeds-respiratory-physio")])]),
  ("Paper III: Physical and functional diagnosis in paediatrics", [
   ("General", [("Prenatal screening; identifying genetic abnormalities", "screening-investigations"), ("ICF-based interpretation", "icf-soap"),
     ("Sensory, perceptual and behavioural disorders (autism)", "autism"), ("Gait, balance and coordination assessment", "paeds-gait-development"),
     ("Selective motor control and standardised scales", "paeds-developmental-assessment"), ("Ergonomics of children in integrated schools", "school-based-pt")]),
   ("Developmental", [("Growth assessment", "growth-monitoring"), ("Developmental screening and assessment tools", "paeds-developmental-assessment"),
     ("High-risk neonates", "gma-hine"), ("Down syndrome and bleeding disorders", "down-syndrome-pt")]),
   ("System-based", [("Assessment in the ICU", "nicu-physiotherapy"), ("Neuro, cardio-respiratory, metabolic and musculoskeletal conditions", "paediatric-assessment"),
     ("Fitness and exercise tolerance testing", "paeds-exercise-physiology"), ("Oncology and burns", N), ("Pain in neonates and children", "paeds-pain"),
     ("DCD, learning disability and ADHD", "dcd"), ("Classifying function in CP", "gmfcs")])]),
  ("Paper IV: Paediatric physiotherapeutics", [
   ("General", [("ICF goal setting", "icf-soap"), ("Early intervention in neurodevelopmental and orthopaedic disorders", "gma-hine"),
     ("Sensory, perceptual and behavioural disorders", "sensory-integration-therapy"), ("Physical activity and fitness", "youth-resistance-training"),
     ("Orthoses, seating and mobility devices", "orthotics"), ("Role in mainstream, integrated and special schools", "school-based-pt"),
     ("Neural plasticity and recovery", "neuroplasticity-ei"), ("Community paediatric physiotherapy", "cbr"), ("Exercise prescription in adolescents", "youth-resistance-training")]),
   ("Developmental", [("Growth disorders", N), ("Down syndrome, bleeding disorders, inborn errors, muscular dystrophies", "down-syndrome-pt"), ("Muscular dystrophy", "dmd")]),
   ("System-based", [("NICU, PICU and high-risk babies", "nicu-physiotherapy"), ("Cerebral palsy", "cp"), ("Paediatric respiratory conditions", "paeds-respiratory-physio"),
     ("Juvenile arthritis and musculoskeletal conditions", "jia"), ("Pain management in neonates and children", "paeds-pain"),
     ("Oromotor and orosensory dysfunction", N), ("LD, ADHD and DCD", "dcd"), ("Yoga for children", N)])]),
 ],
 "Neurology": [
  ("Paper II: Basic sciences for neurological physiotherapy", [
   ("Nervous system", [("CNS, PNS and ANS anatomy and physiology", "cns-anatomy"), ("Pathology of progressive and non-progressive disorders", "cn-lesion-localisation")]),
   ("Motor control and development", [("Physiology and theories of motor control", "motor-learning"), ("Motor, sensory, cognitive and social development", "motor-development"),
     ("Walking, postural control and reaching across the lifespan", "postural-control-reflexes")]),
   ("Learning and recovery", [("Motor learning: stages, practice and feedback", "motor-learning"), ("Health behaviour change and exercise promotion", N),
     ("Neural plasticity and reorganisation", "neuroplasticity-ei")])]),
  ("Paper III: Neurophysiotherapy assessment", [
   ("Body structure and function", [("Cortical function: consciousness, cognition, perception, speech", "pt-higher-function-cranial"), ("Basal ganglia and movement disorders", "parkinsons"),
     ("Cerebellar function and disorders", "cerebellar-ataxia"), ("Spinal cord and brainstem", "sci"), ("Peripheral nerve, NMJ and muscle", "brachial-plexus"),
     ("Falls risk and secondary impairments", "falls")]),
   ("Investigations", [("EMG, SD curve, nerve conduction, evoked potentials", "el-ncs-h-f"), ("Neuroimaging and biochemical tests", N)]),
   ("Activity and participation", [("Postural control, gait, reach and grasp assessment", "pt-neuro-gait-posture"), ("ADL, IADL, participation and quality of life measures", "icf-soap"),
     ("Goal setting by prognosis", "pt-neuro-assessment-reasoning")])]),
  ("Paper IV: Neurophysiotherapy treatment", [
   ("Impairments", [("Cortical dysfunction and motor planning", "stroke"), ("Movement and cerebellar disorders", "cerebellar-ataxia"), ("Sensory re-education and proprioception", "pt-sensory-reeducation"),
     ("Muscle power, tone and endurance; electrical stimulation", "spasticity"), ("Autonomic training and biofeedback", "el-biofeedback"), ("Falls prevention", "falls")]),
   ("Approaches and technology", [("Rood, Bobath/NDT, Brunnstrom, PNF, sensory integration", "ndt-bobath"), ("Virtual reality, robotics, FES, brain stimulation", "el-hvpgs-diadynamic-fes")]),
   ("Neuroplasticity-based training", [("Motor relearning programme", "motor-learning"), ("Task-oriented training", "pt-transfers-gait-training"), ("Action observation and mirror therapy", N),
     ("Behaviour change, environmental and social enrichment", N)])]),
 ],
 "Community Health": [
  ("Paper II: Theories and global perspectives", [
   ("Health and behaviour", [("Medical anthropology and global health", "ps-culture-sickness"), ("Behavioural medicine and behaviour change", "ps-behaviour-modification"),
     ("Health education principles and communication", "cn-health-education")]),
   ("Health systems", [("Community health and the Sustainable Development Goals", "cn-levels-prevention"), ("Health care delivery in India; national programmes", "cn-health-care-delivery"),
     ("Telehealth and health informatics", "px-internet-telehealth")]),
   ("Disability and rehabilitation", [("Models of disability and the ICF", "icf-soap"), ("Disability laws and conventions", "ps-disability-legislation"),
     ("Rehabilitation in health systems; CBR", "cbr"), ("Assistive technology, universal design, prosthetics and orthotics", "orthotics")]),
   ("Special areas", [("Occupational biomechanics and ergonomics", "cn-occupational-hazards"), ("Gerontology and theories of ageing", "md-ageing-theories"),
     ("Gender and health; pregnancy and pelvic floor", "pelvic-floor"), ("Oncology and survivorship", N)])]),
  ("Paper III: Assessment framework", [
   ("Measures", [("ICD and ICF; outcome measures for body, activity and participation", "icf-soap"), ("Health behaviour and health literacy assessment", N),
     ("Community health assessment and planning models", "cn-natural-history-disease"), ("Physical fitness assessment including disability", "cr-stress-testing")]),
   ("Specific", [("Disability assessment across the lifespan", "co-disability-evaluation"), ("Wheelchair, seating, orthotic and prosthetic assessment", "orthotics"),
     ("Occupational hazards and ergonomic tools; return to work", "cn-occupational-hazards"), ("Falls and frailty in elderly", "falls"),
     ("Pelvic floor, antenatal and postnatal assessment", "antenatal-postnatal"), ("Accessibility audit", "co-architectural-barriers")])]),
  ("Paper IV: Planning and management", [
   ("Services", [("Clinical care pathways and advocacy", N), ("Health promotion in schools, workplaces and communities", "cn-health-education"),
     ("Behaviour change interventions for chronic disease", "ps-behaviour-modification")]),
   ("Rehabilitation programmes", [("WHO rehabilitation in health systems", "cn-international-agencies-rehab"), ("Community-based rehabilitation and WHO CBR guidelines", "cbr"),
     ("Wheelchair service and assistive products list", "orthotics"), ("Workplace ergonomics and work hardening", "co-prevocational"),
     ("Healthy ageing and geriatric rehabilitation", "md-geriatric-conditions"), ("Pelvic floor, antenatal and postnatal exercise", "pelvic-floor"),
     ("Cancer and palliative care", N), ("Community participation and action research", "research-methods")])]),
 ],
 "Movement Science": [
  ("Paper II: Fundamental principles of movement", [
   ("Basis of movement", [("Anatomy, physiology and energy systems", "ph-regional-circ-exercise"), ("Motor control: postural control, mobility, reach and grasp", "motor-learning"),
     ("Development and ageing of movement", "gallahue-motor-development"), ("Exercise physiology and electrophysiology", "paeds-exercise-physiology")])]),
  ("Paper III: Measurement and assessment in movement", [
   ("Testing", [("Exercise testing, prescription and safety", "cr-stress-testing"), ("Biomechanics of tissues and joints", "bm-joint-tissues"),
     ("Posture, balance and gait analysis", "gait-cycle"), ("Fundamental movement skills analysis", "gallahue-motor-development"), ("Ergonomic evaluation", "cn-occupational-hazards")])]),
  ("Paper IV: Movement remediation", [
   ("Psychosocial and occupational", [("Culture, beliefs and counselling in exercise", "ps-culture-sickness"), ("Occupational biomechanics models and work capacity", "cn-occupational-hazards"),
     ("Anthropometry and bioinstrumentation", N), ("Workplace, hand tool and product design", N)]),
   ("Remediation", [("Health beliefs, CBT and activity promotion", "ps-behaviour-modification"), ("Integrating fundamental movement skills", "gallahue-motor-development")])]),
 ],
}

def subj(n, units):
    return {"n": n, "e": True, "u": [{"t": t, "k": [list(k) for k in ks]} for t, ks in units]}

years = [{"y": "Paper I (all)", "s": [{"n": "Paper I: Fundamentals of practice, pedagogy and research (common to all specialties)", "e": True,
                                       "u": [{"t": t, "k": [list(k) for k in ks]} for t, ks in PAPER_I]}]}]
for spec, papers in SPEC.items():
    years.append({"y": spec, "s": [subj(n, us) for n, us in papers]})

M = {"key": "rguhs-mpt", "label": "MPT Physiotherapy (RGUHS Karnataka)", "university": "Rajiv Gandhi University of Health Sciences, Karnataka", "course": "MPT",
     "regulation": "Regulation and curriculum 2020", "tabLabel": "",
     "pattern": "Two years, exam at the end of year 2. Four theory papers of 3 hours and 100 marks each, 10 long essays of 10 marks (no choice). Paper I is common to all specialties; Papers II-IV are specialty papers. Practicals: long case 100 + viva 50, elective long case 100 + viva 50. Pass: 50% in theory and 50% in practical with viva.",
     "years": years}
out = pathlib.Path(__file__).resolve().parent.parent / "library" / "rguhs-mpt-map.js"
out.write_text("// RGUHS (Karnataka) MPT curriculum 2020, paper by paper, summarised in our own words.\n"
               "// Generated by tools/build_rguhs_mpt_map.py. Each line is [syllabus text, library topic id or null].\n"
               "window.COURSE_MAPS = (window.COURSE_MAPS || []).concat([" + json.dumps(M, ensure_ascii=True) + "]);\n")
allk = [k for y in years for s in y["s"] for u in s["u"] for k in u["k"]]
print("lines", len(allk), "linked", sum(1 for k in allk if k[1]))
