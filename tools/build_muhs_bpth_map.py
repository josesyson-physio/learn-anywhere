"""Write library/muhs-bpth-map.js: the MUHS (Maharashtra) competency-based BPTh curriculum (September 2022),
year by year, with each syllabus line linked to a library topic id (or None while it is still to be written).

Source: Maharashtra University of Health Sciences, Nashik, Competency-Based Entry Level Physiotherapy
Undergraduate Curriculum (BPTh), the official PDF on muhs.ac.in. Lines are short summaries in our own words;
ids were matched by hand. Run: python3 tools/build_muhs_bpth_map.py
"""
import json, pathlib

N = None
Y = {
 "I": [
  ("Human Anatomy", True, 210, [
   ("General anatomy and histology", [("Fascia, muscles, bones, joints, nerves and vessels", "an-cell-tissue-bone"), ("Histology of tissues and basic embryology", "an-cell-tissue-bone"),
     ("Joint classification", "an-joint-classification"), ("Muscle classification and levers", "an-muscle-classification-levers")]),
   ("Musculoskeletal system", [("Upper limb muscles, joints and nerves", "an-ul-muscles"), ("Upper limb joints", "an-ul-joints"), ("Upper limb nerves and brachial plexus", "an-ul-nerves"),
     ("Lower limb bones, muscles and joints", "an-ll-muscles"), ("Lower limb nerves and lumbosacral plexus", "an-lumbosacral-plexus"),
     ("Back, vertebral column and thoracic cage", "ah-vertebral-column"), ("Head, neck and face: skull, triangles, facial muscles, TMJ", "ah-triangles-neck"),
     ("Living and surface anatomy", "an-femoral-triangle-popliteal-arches")]),
   ("Neuroanatomy", [("Organisation of the nervous system, CNS and cranial nerves", "ah-brain-parts-ans"), ("Peripheral and autonomic nervous system", "an-nerve-neuron-synapse"),
     ("Blood supply of brain and spinal cord", "cn-brain-cord-blood-supply"), ("Anatomical basis of neurological conditions", "cn-lesion-localisation")]),
   ("Systemic anatomy", [("Thoracic wall, mediastinum, heart and great vessels", "ah-heart"), ("Lungs, pleura, diaphragm and intercostals", "ah-respiratory-tract-pleura"),
     ("Abdomen and pelvis musculature; pelvic floor", "ah-abdominal-wall-inguinal-canal"), ("Urinary and genital systems", "ah-urinary-tract-bladder-innervation"),
     ("Sensory organs and skin", "ah-eye-nose-ear-tmj"), ("Endocrine and exocrine glands", N), ("Radiological anatomy", N)])]),
  ("Human Physiology", True, 210, [
   ("General and blood", [("Cell, transport and homeostasis", "ph-cell-membrane-transport"), ("Blood cells, haemoglobin, platelets", "ph-blood-cells-haemoglobin"),
     ("Blood groups, clotting and transfusion", "ph-clotting-blood-groups")]),
   ("Nerve and muscle", [("Nerve: RMP, action potential, degeneration and regeneration", "ph-nerve-degeneration-regeneration"), ("Skeletal muscle, NMJ, myasthenia", "ph-skeletal-muscle-nmj"),
     ("Muscle contraction and fatigue", "muscle-physiology")]),
   ("Nervous system", [("Synapse, receptors, reflexes", "ph-neuron-synapse-reflex"), ("Sensory tracts: touch, pain, temperature, proprioception", "ph-receptors-pain"),
     ("Motor tracts, muscle tone and stretch reflex", "ph-tracts-posture-tone"), ("Basal ganglia, cerebellum, thalamus, cortex, vestibular", "ph-ans-csf-umn-lmn"),
     ("Autonomic nervous system; learning and memory", "ph-ans-csf-umn-lmn")]),
   ("Systems", [("Kidney, micturition, acid-base balance", "ph-renal-micturition"), ("Temperature regulation", "ph-skin-temperature"), ("Endocrine and reproductive physiology", "ph-endocrine-metabolism"),
     ("Special senses: eye and ear", "ph-special-senses"), ("Respiration: mechanics, volumes, gas transport, regulation", "ph-mechanics-respiration"),
     ("Hypoxia and altitude", "ph-hypoxia-acid-base"), ("Heart: cardiac cycle, ECG, cardiac output and BP", "ph-cardiac-cycle-ecg"), ("Gastrointestinal and liver", "ph-gi-digestion")]),
   ("Exercise and ageing", [("Energy metabolism, BMR, oxygen debt", "ph-regional-circ-exercise"), ("Cardio-respiratory responses to exercise and training", "ph-artificial-resp-exercise"),
     ("Physical fitness and its tests (Harvard step test)", "fitt"), ("Effects of ageing on body systems", "md-ageing-theories")])]),
  ("Biochemistry (college exam)", True, 61, [
   ("Biomolecules", [("Carbohydrates and their metabolism; diabetes", "ph-endocrine-metabolism"), ("Proteins and amino acids", N), ("Enzymes", N), ("Lipids, cholesterol and obesity", N)]),
   ("Nutrition and clinical", [("Vitamins and minerals", "cn-nutrition-deficiency"), ("Hormones", "ph-endocrine-metabolism"), ("Nutrition, balanced diet, BMR, malnutrition", "cn-nutrition-deficiency"),
     ("Liver, renal and lipid profile interpretation", N), ("Biochemistry of muscle contraction and connective tissue", "muscle-physiology")])]),
  ("Kinesiology and Movement Science, Paper I", True, N, [
   ("Basic biomechanics", [("Mechanics, kinematics, kinetics, open and closed chains", "bm-kinematic-chains"), ("Axes, planes and Newton's laws", "bm-planes-motion"),
     ("Centre of gravity, line of gravity, base of support, equilibrium", "bm-centre-of-gravity"), ("Force, work, energy, friction, torque", "bm-forces-newton"),
     ("Parallelogram of forces and pulleys", "bm-concurrent-forces-pulleys"), ("Levers", "bm-levers-torque"), ("Mechanics of hydrotherapy", "e1-hydro-principles")]),
   ("Muscle and joint biomechanics", [("Muscle structure, fibre arrangement and types of contraction", "bm-contraction-types"), ("Agonist, antagonist, synergist roles", "e1-group-action"),
     ("Active and passive insufficiency", "bm-insufficiency"), ("Range of muscle work and angle of pull", "e1-range-of-muscle-work"),
     ("Joint design, classification, osteo- and arthrokinematics, concave-convex rule", "bm-joint-classification")]),
   ("Positions and regional kinesiology", [("Starting and derived positions", "e1-fundamental-positions"), ("Shoulder complex and scapulohumeral rhythm", "shoulder-biomechanics"),
     ("Hip joint kinetics and kinematics", "bk-hip-joint-structure")])]),
  ("Physiotherapy Paper I (Electrotherapy I)", True, N, [
   ("Electricity and safety", [("Basic physics, condensers, mains supply, magnetism", "el-static-current-electricity"), ("Electric and earth shock", "el-mains-shock-earthing"),
     ("Pain physiology, pain pathways and modulation", "el-gate-control-descending")]),
   ("Currents", [("Nerve and muscle electrophysiology", "el-rmp-action-potential"), ("Low frequency: faradic, galvanic and interrupted DC", "el-current-types-uses"),
     ("TENS", "tens"), ("Medium frequency: IFT", "el-ifc-production"), ("High frequency: SWD production", "eh-swd-circuits"), ("Ultrasound production and phonophoresis", "eh-us-biophysics")]),
   ("Thermal agents, light and biofeedback", [("Paraffin wax, whirlpool, contrast bath, hot packs, cryotherapy", "wax-bath"), ("UVR lamps and production", "eh-uv-lamps"),
     ("LASER physics", "eh-laser-properties"), ("Biofeedback", "el-biofeedback")])]),
  ("Physiotherapy Paper II (Kinesiotherapy I)", True, N, [
   ("Gymnasium and movements", [("Therapeutic gymnasium and equipment", "pt-therapeutic-gym"), ("Suspension therapy", "suspension"), ("Classification of movements", "e1-active-movements"),
     ("Joint mobility exercises", "e1-relaxed-passive-movements")]),
   ("Measurement and evaluation", [("Goniometry", "goniometry"), ("Vital parameters: temperature, BP, pulse, respiration, chest expansion", N), ("Sensation, reflexes and tone", "pt-tone-reflexes")]),
   ("Techniques", [("Soft tissue manoeuvres (massage)", "massage"), ("Relaxation: Jacobson, Laura Mitchell, Shavasana", "e1-general-relaxation-jacobson"),
     ("Aerobic conditioning, warm-up and cool-down", "px-warmup-aerobics-cooldown"), ("Introduction to yoga, asanas and pranayama", "e1-imagery-autogenic-yoga")])]),
 ],
 "II": [
  ("Pathology", True, N, [
   ("General pathology", [("Cell injury, degeneration, necrosis, apoptosis, amyloid", "md-cell-injury"), ("Inflammation, repair and healing", "md-inflammation-healing"),
     ("Immunity, hypersensitivity, autoimmunity, HIV", "md-immunity-hypersensitivity"), ("Oedema, thrombosis, embolism, infarction, gangrene, shock", "md-haemodynamic-disorders"),
     ("Growth disturbances and neoplasia", "md-atrophy-neoplasia"), ("Genetic disorders", "genetic-counselling")]),
   ("Systemic pathology", [("Cardiovascular: atherosclerosis, MI, hypertension, RHD", "md-cvs-pathology"), ("Respiratory: COPD, pneumonia, TB, occupational lung disease", "cr-pneumonia"),
     ("Nervous system: meningitis, stroke, hydrocephalus, Parkinsonism", "md-cns-infections"), ("Muscular dystrophies and myasthenia", "dmd"),
     ("Bone and joint: osteomyelitis, rickets, osteoporosis, arthritis, gout", "md-bone-joint-pathology"), ("Endocrine, GI, liver and clinical pathology", N)])]),
  ("Microbiology (college exam)", True, N, [
   ("Microbiology", [("General bacteriology and sterilisation", "md-sterilisation-asepsis"), ("Immunology", "md-immunity-hypersensitivity"), ("Systemic bacteriology", "md-pathogenic-bacteria"),
     ("TB, leprosy and mycobacteria", "md-mycobacteria-tb-leprosy"), ("Virology, mycology, parasitology", "md-infections-tetanus-viral"), ("Hospital infection and universal precautions", "md-infection-sources-spread")])]),
  ("Pharmacology", True, N, [
   ("Pharmacology", [("General pharmacology", N), ("Drugs acting on CNS and ANS", N), ("Cardiovascular and respiratory drugs", N), ("Chemotherapy and antibiotics", N),
     ("Endocrine drugs (insulin, steroids, thyroid)", N), ("NSAIDs, analgesics and drugs used in physiotherapy", N)])]),
  ("Psychiatry including Psychology (college exam)", True, N, [
   ("Psychology", [("Psychology and its branches; development across lifespan", "ps-lifespan-development"), ("Learning theories", "ps-learning-theories"), ("Memory, attention and perception", "ps-sensation-perception"),
     ("Motivation, frustration and stress", "ps-frustration-conflict")]),
   ("Psychiatry", [("Mental status examination; psychotic and mood disorders", N), ("Anxiety, somatoform and personality disorders", N), ("Substance abuse", "ps-substance-abuse"),
     ("Childhood disorders: ADHD, intellectual disability, autism", "adhd"), ("Geriatric psychiatry and dementia", N), ("Management: ECT, drugs, CBT", "ps-behaviour-modification")])]),
  ("Kinesiology and Movement Science, Paper II", True, N, [
   ("Regional kinesiology", [("Elbow complex", "bk-elbow-joints"), ("Wrist and hand, prehension", "bk-prehension-grips"), ("Knee: tibiofemoral and patellofemoral", "bk-tibiofemoral-joint"),
     ("Ankle and foot, arches", "bk-foot-arches"), ("Spine, intervertebral disc, sacroiliac joint", "bm-vertebral-articulations"), ("Temporomandibular joint", "ah-eye-nose-ear-tmj")]),
   ("Posture, gait and ADL", [("Posture: development, factors, analysis, deviations", "bk-postural-analysis"), ("Gait: phases, kinematics, kinetics, determinants", "bk-gait-phases-parameters"),
     ("Biomechanics of ADL: sit to stand, stairs, lifting, running", "e2-functional-retraining")])]),
  ("Physiotherapy Paper III (Electrotherapy II)", True, N, [
   ("Low frequency", [("Faradic current: effects, motor points, faradism under pressure", "el-faradic-effects"), ("Galvanic and interrupted galvanic currents", "el-igc-technique"),
     ("Iontophoresis", "iontophoresis"), ("High-voltage, micro and diadynamic currents", "el-hvpgs-diadynamic-fes"), ("TENS: types, placement, uses", "el-tens-placement-uses"),
     ("Strength-duration curve", "sd-curve")]),
   ("Medium and high frequency", [("IFT: parameters, electrodes, effects", "el-ifc-parameters"), ("Russian current", "el-russian-medium-frequency"), ("SWD continuous and pulsed", "swd"),
     ("Ultrasound therapy", "ultrasound")]),
   ("Actinotherapy and advanced", [("Infrared", "irr"), ("UVR and wound care", "uvr"), ("LASER", "laser"), ("Electrotherapy for wound healing", N), ("Advanced modalities (TECAR, shockwave)", N)])]),
  ("Physiotherapy Paper IV (Kinesiotherapy II)", True, N, [
   ("Tissues and strength", [("Biophysical properties of soft tissue; stretching", "stretching"), ("Manual muscle testing", "mmt"), ("Vicarious (trick) movements", "e1-mmt-methods"),
     ("Strength training, 1RM, Delorme and Oxford", "pre")]),
   ("Respiratory and hydro", [("Humidification and nebulisation", "cr-humidification"), ("Breathing exercises, ACBT, autogenic drainage", "breathing-exercises"),
     ("Postural drainage, percussion and vibration", "airway-clearance"), ("Hydrotherapy", "hydrotherapy")]),
   ("Neuromuscular and functional", [("Coordination, Frenkel's exercises and balance", "coordination"), ("Motor control theories", "motor-learning"),
     ("Functional re-education and mat exercises", "e1-mat-rolling-bridging"), ("Home exercise programme and ergonomic advice", N), ("Therapeutic traction", "traction")])]),
 ],
 "III": [
  ("Surgery I (General, cardiothoracic, neuro, plastic)", True, N, [
   ("General surgery", [("Anaesthesia, haemorrhage, shock, fluid balance", "md-surgical-procedures"), ("Wounds, ulcers and dressings; abdominal incisions", "md-abdominal-surgery"),
     ("Mastectomy and oncosurgery", N), ("Amputation", "amputation"), ("Burns", "burns"), ("Varicose veins and peripheral vascular disease", "cr-pvd"), ("Hernia and transplantation", N)]),
   ("Neuro and ENT surgery", [("Head injury, intracranial and spinal tumours", "tbi"), ("Tracheostomy; facial nerve surgery; vertigo", N)]),
   ("Cardiothoracic surgery", [("Cardiopulmonary bypass, incisions, lines and drains", "cr-heart-surgery"), ("Lung, pleura and thoracic surgery", "postop-chest"),
     ("Coronary, valvular and congenital heart surgery", "cr-heart-surgery"), ("Buerger's, Raynaud's, aneurysm, DVT", "md-dvt-pe")]),
   ("Plastic surgery", [("Skin grafts and flaps", "md-skin-grafts-flaps"), ("Tendon transfers and tendon repair", "md-tendon-transfers"), ("Keloid and hypertrophic scar", "md-hypertrophic-scar-keloid"),
     ("Nerve repair and microvascular surgery", N)])]),
  ("Surgery II (Orthopaedics)", True, N, [
   ("Trauma", [("Fractures: types, healing, complications", "co-fracture-types"), ("Fracture management upper limb, lower limb, spine, pelvis", "general-fracture"),
     ("Dislocations: shoulder, elbow, hip, knee", "co-dislocation-subluxation"), ("Soft tissue injuries, whiplash, crush injuries", "co-sprain-strain-bursitis")]),
   ("Deformities", [("Scoliosis, kyphosis, lordosis, torticollis", "co-spinal-deformities"), ("CDH, coxa vara, genu valgum and varum, CTEV, flat foot, hallux valgus", "ctev"),
     ("Shoulder and elbow deformities; Dupuytren's", "pt-dupuytren")]),
   ("Diseases", [("Osteoarthritis, spondylosis, spondylolisthesis", "knee-oa"), ("Pyogenic, tuberculous and rheumatoid arthritis; ankylosing spondylitis", "co-bone-joint-infections"),
     ("Osteoporosis, osteomalacia and rickets", "osteoporosis"), ("Carpal tunnel and entrapment, compartment syndrome, avascular necrosis", "carpal-tunnel"),
     ("Backache and disc prolapse", "lumbar-disc"), ("Bone tumours", "co-bone-tumours")])]),
  ("Medicine I (Cardio-respiratory, general, rheumatology, dermatology)", True, N, [
   ("Cardiovascular", [("Hypertension and ischaemic heart disease", "cr-hypertension"), ("Rheumatic heart disease, endocarditis, cardiomyopathy", "cr-cardiomyopathy-rhd"),
     ("Heart failure and valvular heart disease", "heart-failure"), ("Congenital heart disease", "md-congenital-heart-valve"), ("ECG, stress test and echo basics", "ph-cardiac-cycle-ecg")]),
   ("Respiratory", [("Pneumonia, TB, lung abscess, bronchiectasis", "cr-pneumonia"), ("Pleural effusion, pneumothorax, empyema", "cr-pleural"), ("ILD and occupational lung disease", "cr-tb-ild"),
     ("COPD, asthma and cystic fibrosis", "copd"), ("ICU, BLS, chest X-ray, ABG, PFT", "icu")]),
   ("General medicine and rheumatology", [("Diabetes, thyroid, pituitary and adrenal disorders", "diabetes-exercise"), ("Obesity and nutritional deficiency", "cn-nutrition-deficiency"),
     ("Rheumatoid arthritis, SLE, gout, polymyositis, fibromyalgia, ankylosing spondylitis", "rheumatoid-arthritis"), ("Ageing and geriatric conditions", "md-geriatric-conditions")]),
   ("Dermatology", [("Skin infections, psoriasis, leprosy, HIV skin signs", "pt-leprosy"), ("Keloid, scars, ulcers; PUVA", "uvr")])]),
  ("Medicine II (Neurology and Paediatrics)", True, N, [
   ("Neurology", [("Stroke: types, level of lesion, management", "md-cva-types"), ("Parkinsonism, athetosis, chorea, dystonia", "parkinsons"), ("Neuropathies, myopathies, NMJ disorders", "myasthenia"),
     ("Anterior horn cell: MND, SMA, polio", "mnd"), ("Multiple sclerosis", "ms"), ("CNS infections, tetanus, tabes", "md-cns-infections"), ("Epilepsy and dementia", N),
     ("Cerebellar and cranial nerve disorders", "cerebellar-ataxia"), ("Spinal cord syndromes, bladder and autonomic dysfunction", "pt-bladder-dysfunction")]),
   ("Paediatrics", [("Fetal development, growth, milestones and immunisation", "milestones"), ("Prematurity, sepsis, jaundice, birth injuries", "high-risk-newborn"), ("Cerebral palsy", "cp"),
     ("Spina bifida and hydrocephalus", "spina-bifida"), ("Childhood infections", "md-infections-tetanus-viral"), ("Intellectual disability and Down syndrome", "down-syndrome-pt"),
     ("Muscular dystrophies", "dmd"), ("Malnutrition and rickets; juvenile arthritis", "jia"), ("Childhood respiratory disease", "paeds-respiratory-physio"), ("Congenital heart disease", "md-congenital-heart-valve")])]),
  ("Community Medicine and Sociology", True, N, [
   ("Community medicine", [("Determinants of health and natural history of disease", "cn-natural-history-disease"), ("Levels of prevention", "cn-levels-prevention"),
     ("Health care delivery and administration in India", "cn-health-care-delivery"), ("Maternal and child health, vulnerable groups", "cn-health-schemes-agencies"),
     ("Communicable and non-communicable disease epidemiology", "cn-epid-communicable"), ("Non-communicable diseases", "cn-epid-ncd"), ("Occupational health", "cn-occupational-hazards"),
     ("Nutrition and food hygiene", "cn-nutrition-programmes-adulteration")]),
   ("Sociology", [("Sociology and health; socialisation", "ps-sociology-health"), ("Family, community and culture in health", "ps-family-community"), ("Social problems and disability", "ps-disability-social-problems")])]),
  ("Obstetrics and Gynaecology (college exam)", True, N, [
   ("OBG", [("Puberty and menstruation", N), ("Pregnancy, complications and antenatal care", "antenatal-postnatal"), ("Labour and puerperium", "antenatal-postnatal"),
     ("Uro-genital dysfunction and prolapse", "pelvic-floor"), ("Gynaecological surgery; menopause; PID", N)])]),
  ("Physiotherapy Diagnosis (including Electrodiagnosis)", True, N, [
   ("ICF and musculoskeletal", [("Functional diagnosis with ICF; FIM and Barthel", "icf-soap"), ("Soft tissue flexibility and joint mobility", "pt-rom-endfeel"), ("Muscle strength, endurance and trick movements", "mmt"),
     ("Limb length, posture and gait", "pt-limb-length-girth"), ("Special tests and radiography", "pt-functional-special-tests")]),
   ("Cardio-respiratory", [("Cardio-respiratory evaluation, exercise tests (6MWT, Bruce)", "cr-stress-testing"), ("ABG, PFT, ECG interpretation", "cr-lung-volumes-pft")]),
   ("Neuro and electrodiagnosis", [("Neurological evaluation: higher functions, cranial nerves, sensation, tone", "pt-neuro-assessment-reasoning"), ("Balance and functional scales (Berg, DGI, ASIA)", "e2-balance-tests"),
     ("SD curve, EMG and nerve conduction studies", "el-emg")]),
   ("Women's, occupational and elderly health", [("Pelvic floor assessment (PERFECT), ANC and PNC", "pelvic-floor"), ("Occupational health evaluation", "cn-occupational-hazards"), ("Elderly evaluation and falls", "falls")])]),
  ("Physiotherapy Paper V (Physiotherapeutic skills)", True, N, [
   ("Manual therapy", [("Principles of manual therapy and clinical reasoning", "maitland-grades"), ("Soft tissue mobilisation and myofascial release", "co-myofascial-pain"),
     ("Mulligan NAGS and SNAGS", N), ("Neurodynamic testing", N), ("Muscle energy technique", N), ("McKenzie approach", "lumbar-disc")]),
   ("Neurotherapeutic skills", [("Bobath / NDT", "ndt-bobath"), ("Brunnstrom", "brunnstrom"), ("Rood's approach", "rood-approach"), ("PNF", "pnf"), ("Frenkel's exercises", "coordination"),
     ("Motor relearning programme", "motor-learning")]),
   ("Cardio-respiratory, women's health and sports", [("Exercise planning and breathing techniques", "breathing-exercises"), ("Thoracic mobility and airway clearance", "cr-chest-mobility"),
     ("Antenatal and postnatal exercise", "antenatal-postnatal"), ("Aerobic and anaerobic training and fitness", "fitt")])]),
 ],
 "IV": [
  ("COMPEL Module IV", True, N, [
   ("Professional development", [("Professional practice and ethics", "px-ethics-physiotherapy"), ("Communication skills", "ps-communication-counselling"), ("Leadership, administration and marketing", "ps-leadership"),
     ("Research methodology, critical appraisal, EBP and biostatistics", "research-methods")])]),
  ("Musculoskeletal Physiotherapy", True, N, [
   ("Conditions", [("Trauma: fractures and complications", "general-fracture"), ("Degenerative arthritis and arthroplasty", "knee-oa"), ("Total knee and hip replacement", "tkr"),
     ("Inflammatory conditions: RA, AS", "rheumatoid-arthritis"), ("Bone and joint infections", "co-bone-joint-infections"), ("Metabolic: osteoporosis", "osteoporosis"),
     ("Congenital and acquired deformities", "co-spinal-deformities"), ("Peripheral nerve and plexus injuries; CRPS", "brachial-plexus"), ("Spinal conditions: disc, spondylolisthesis, stenosis", "spondylolisthesis"),
     ("Soft tissue injuries of extremities", "ankle-sprain"), ("Amputations", "amputation"), ("Burns and crush injuries", "burns"), ("Volkmann's ischaemic contracture, compartment syndrome", "co-fracture-complications")]),
   ("Competencies", [("ICF-based assessment and clinical reasoning", "pt-ortho-history"), ("Manual therapy, MET and neurodynamics", "maitland-grades")])]),
  ("Neurophysiotherapy", True, N, [
   ("Principles", [("ICF model in neurology", "icf-soap"), ("Motor control theories and neuroplasticity", "motor-learning"), ("Quality of life and independence measures", N)]),
   ("Adult conditions", [("Stroke", "stroke"), ("Traumatic brain injury", "tbi"), ("Spinal cord injury and autonomic dysreflexia", "sci"), ("Peripheral neuropathy", "brachial-plexus"),
     ("Vestibular disorders", N), ("GBS and multiple sclerosis", "gbs"), ("Ataxia", "cerebellar-ataxia"), ("Parkinson's disease", "parkinsons"), ("Anterior horn cell disease, SMA, polio", "mnd"),
     ("Myopathies", "dmd"), ("Infectious disorders", "md-cns-infections")]),
   ("Paediatric neurology", [("Cerebral palsy", "cp"), ("Brachial plexus injury in children", "erbs-palsy"), ("Post-polio residual paralysis", "polio-residual"), ("Duchenne muscular dystrophy", "dmd"),
     ("SMA and HSMN", N), ("Classifying function in CP", "gmfcs")])]),
  ("Cardiovascular and Respiratory Physiotherapy (including critical care)", True, N, [
   ("Basics and testing", [("Applied anatomy and physiology review", "cr-resp-mechanics"), ("Investigations", "cr-assessment"), ("Exercise testing: 6MWT, shuttle walk", "cr-stress-testing"),
     ("Exercise physiology and HIIT prescription", "fitt")]),
   ("Physiotherapy management", [("Physiotherapy skills and adjuncts", "airway-clearance"), ("ICF in cardio-respiratory conditions", "icf-soap"), ("Cardiac conditions and cardiac rehabilitation", "cardiac-rehab"),
     ("Pulmonary rehabilitation", "cr-pulmonary-rehab"), ("Respiratory disorders: COPD, asthma, bronchiectasis", "copd"), ("Peripheral vascular disease and DVT", "cr-pvd"),
     ("ICU evaluation and management", "icu"), ("Basic life support", "paeds-bls-pals")])]),
  ("Community Physiotherapy", True, N, [
   ("Health and rehabilitation", [("Health, disease and disability; disability calculation", "co-disability-evaluation"), ("Healthcare system and CBR", "cbr"),
     ("Locomotor aids and counselling persons with disability", "crutch-gait")]),
   ("Women's and geriatric health", [("Women's health across the lifespan; laws", "antenatal-postnatal"), ("Pelvic floor and urogenital dysfunction", "pelvic-floor"), ("Geriatric evaluation and falls", "falls")]),
   ("Industrial health and fitness", [("Industrial health and worker evaluation", "cn-occupational-hazards"), ("Ergonomics and CTD/RSI", N), ("Fitness evaluation: BMI, skinfold, WHR", "px-nutrition-athletes-obesity"),
     ("Basics of sports physiotherapy", N), ("Disaster management and rehabilitation", N)])]),
  ("Principles of Bioengineering (college exam)", True, N, [
   ("Orthotics and prosthetics", [("Classification of aids, orthoses and prostheses", "orthotics"), ("AFO, KAFO, spinal orthoses (LSO, TLSO, Milwaukee)", "orthotics"),
     ("Lower limb prostheses, footpieces and gait deviations", "amputation"), ("Upper limb prostheses", "amputation"), ("Splint making (temporary splints)", N)])]),
 ],
}

years = []
for y, subs in Y.items():
    years.append({"y": y, "s": [{"n": n, "e": e, "h": h, "u": [{"t": t, "k": [list(k) for k in ks]} for t, ks in us]} for n, e, h, us in subs]})

M = {"key": "muhs-bpth", "label": "BPTh Physiotherapy (MUHS Maharashtra)", "university": "Maharashtra University of Health Sciences, Nashik", "course": "BPTh",
     "regulation": "Competency-based curriculum, September 2022", "tabLabel": "BPTh",
     "pattern": "Four years plus 6 months internship, annual university exams with internal assessment. Long answer (LAQ), short answer (SAQ) and MCQ theory questions; OSCE/OSPE and case-based practicals. College exams in Biochemistry, Microbiology, Psychiatry, OBG and Bioengineering. Check the MUHS website for the paper pattern of your batch.",
     "years": years}
out = pathlib.Path(__file__).resolve().parent.parent / "library" / "muhs-bpth-map.js"
out.write_text("// MUHS (Maharashtra) competency-based BPTh curriculum (September 2022), year by year, summarised in our own words.\n"
               "// Generated by tools/build_muhs_bpth_map.py. Each line is [syllabus text, library topic id or null].\n"
               "window.COURSE_MAPS = (window.COURSE_MAPS || []).concat([" + json.dumps(M, ensure_ascii=True) + "]);\n")
allk = [k for y in years for s in y["s"] for u in s["u"] for k in u["k"]]
print("lines", len(allk), "linked", sum(1 for k in allk if k[1]))
