"""Write library/pgdei-map.js: the PG Diploma in Early Intervention syllabus, unit by unit,
with each syllabus line linked to a library topic id (or None while it is still to be written)."""
import json, pathlib

P = [
 ("Paper I: Neurobiology (PGDEI 101)", [
  ("Unit I: Anatomy, physiology and embryology", [
   ("Gross anatomy of the CNS: lobes, basal ganglia, cerebellum, brainstem, limbic system, spinal cord, reflex arc, pathways", "cns-anatomy"),
   ("Peripheral and autonomic nervous system", "cns-anatomy"),
   ("Micro anatomy: cell structure, development and function", "neuron-synapse"),
   ("Physiology: neurons, synapses, transmission", "neuron-synapse"),
   ("Embryology: stages of development", "neuroembryology"),
   ("Maturation: myelination, organisation of the brain, cortical and subcortical relay", "neuroembryology")]),
  ("Unit II: Special senses", [
   ("Vision, hearing, vestibular, tactile, proprioceptive and kinaesthetic senses: development, abnormalities, early identification", "special-senses-development"),
   ("Processing of information: input, filtration, organisation, integration, adaptive response", "sensory-processing"),
   ("Sensory integration", "sensory-processing")]),
  ("Unit III: Health, growth and nutrition", [
   ("Principles of growth, normal pattern, growth monitoring, factors, hygiene and child health", "growth-monitoring"),
   ("Nutrition: feeding and weaning, balanced diet, deficiencies and disorders", "child-nutrition"),
   ("Childhood illnesses, newborn babies, medically fragile babies", "high-risk-newborn"),
   ("Rationale of early intervention: plasticity, imprinting, critical periods, neuronal repair", "neuroplasticity-ei"),
   ("Screening and investigations: genetic, biochemical, imaging", "screening-investigations")]),
  ("Unit IV: Causes and prevention", [
   ("Risk factors: preconceptual, prenatal, natal, postnatal, psychosocial", "risk-factors-dd"),
   ("Developmental abnormalities: structural, biochemical, behavioural", "developmental-abnormalities"),
   ("Primary, secondary and tertiary prevention", "prevention-disability"),
   ("Genetic studies and genetic counselling", "genetic-counselling"),
   ("Family planning, guidance and counselling", "prevention-disability"),
   ("Immunization", "immunization")]),
  ("Unit V: Neurological disorders and developmental disabilities", [
   ("Epilepsy, sleep disturbances, abnormal activity levels", "childhood-epilepsy"),
   ("Autism spectrum disorders", "autism"), ("ADHD", "adhd"),
   ("Multiple handicaps", "multiple-disabilities"), ("Genetic syndromes", "genetic-counselling"),
   ("Cerebral palsy", "cp"), ("Spina bifida", "spina-bifida"), ("Poliomyelitis", "polio-residual"),
   ("Intellectual disability", "intellectual-disability")])]),
 ("Paper II: Child Development (PGDEI 102)", [
  ("Unit I: Growth and development", [
   ("Concepts, principles and laws of development; stages, tasks, domains; nature and nurture; factors; hazards", "growth-development-principles"),
   ("Developmental milestones", "milestones"),
   ("Theories: psychoanalytic and ecological", "development-theories")]),
  ("Unit II: Sensory-perceptual and motor development", [
   ("Sensation, perception, perceptual development, attention, memory", "perceptual-development"),
   ("Principles, sequence and characteristics of motor development; motor skills; handedness", "motor-development")]),
  ("Unit III: Cognitive development", [
   ("Concept, stages and factors; cognition and language", "cognitive-development"),
   ("Piaget, Vygotsky and information processing", "cognitive-development")]),
  ("Unit IV: Social and emotional development", [
   ("Social development and socialization", "social-development"),
   ("Emotions, emotional patterns, James-Lange and Cannon-Bard theories, emotional deprivation", "emotional-development")]),
  ("Unit V: Child rearing practices and play", [
   ("Attachment and bonding, mother-infant interaction, family and siblings, parenting styles", "attachment-parenting"),
   ("Play: definition, components, types, stages and influence", "play-development")])]),
 ("Paper III: Physical and Occupational Therapy (PGDEI 103)", [
  ("Unit I: Development", [
   ("Normal and abnormal development", "postural-control-reflexes"), ("Normal postural control mechanism and balance", "postural-control-reflexes"),
   ("Newborn reflexes", "postural-control-reflexes")]),
  ("Unit II: Basic concepts", [
   ("Role of OT and PT; tone, ROM, muscle power; voluntary and involuntary movements; biomechanics", "paediatric-assessment"),
   ("Cerebral palsy", "cp"), ("Facilitation of normal movement", "facilitation-handling"),
   ("Neuro developmental therapy", "ndt-bobath"), ("Sensory integration", "sensory-integration-therapy"),
   ("Rood's approach", "rood-approach"), ("PNF", "pnf"), ("Vojta", "vojta-therapy")]),
  ("Unit III: Assessment", [
   ("Assessment and forming treatment goals; NDT assessment", "paediatric-assessment"),
   ("Sensory integration assessment", "sensory-integration-therapy")]),
  ("Unit IV: Intervention", [
   ("Sensory integration treatment", "sensory-integration-therapy"), ("NDT treatment", "ndt-bobath"),
   ("Rood's, PNF, Vojta", "rood-approach"), ("Hydrotherapy", "hydrotherapy")]),
  ("Unit V: Specific conditions", [
   ("Spina bifida", "spina-bifida"), ("Muscular dystrophy", "dmd"), ("Poliomyelitis", "polio-residual"),
   ("Erb's palsy", "erbs-palsy"), ("CDH (DDH)", "ddh"), ("CTEV", "ctev"), ("Torticollis", "congenital-torticollis"),
   ("Cerebral palsy", "cp"), ("Mental retardation and behavioural problems", "intellectual-disability"),
   ("Intervention for multiple handicaps", "multiple-disabilities"), ("Aids and appliances; ADL", "aids-adl")])]),
 ("Paper IV: Speech, Language and Communication (PGDEI 104)", [
  ("Unit 1: Basic terms and concepts", [
   ("Communication, language and speech; components of language; speech production", "speech-language-basics")]),
  ("Unit 2: Speech-language development", [
   ("Acquisition, prerequisites and stages from birth; development of components", "speech-language-development")]),
  ("Unit 3: Communication disorders", [
   ("Nature, causes, prevalence, range and classification", "communication-disorders")]),
  ("Unit 4: Assessment and evaluation", [
   ("Purposes, methods, tools, family-centred assessment, communicating results, assessment vs evaluation", "speech-language-assessment")]),
  ("Unit 5: Intervention (IEIP)", [
   ("Linking assessment to intervention; techniques; goals; monitoring; parent guidance; referral", "speech-language-intervention"),
   ("Developing and implementing the IEIP", "ieip"),
   ("Augmentative and alternative communication", "aac")])]),
 ("Paper V: Family and Community (PGDEI 105)", [
  ("Unit I: Family and the child", [
   ("Types, life cycle, dynamics, roles, culture, systems, resources; effect of a disabled child; coping", "family-systems")]),
  ("Unit II: Parents and the child", [
   ("Impact on parents, reactions, stress and depression, parent training, parent-to-parent support", "parental-reactions")]),
  ("Unit III: Counselling", [
   ("Case work, individual counselling, family therapy, marital counselling", "counselling-ei")]),
  ("Unit IV: Community", [
   ("Community role, culture and attitudes, awareness, resources, organisation", "community-disability"),
   ("Group work: principles, types, dynamics", "community-disability"),
   ("Community-based rehabilitation", "cbr")]),
  ("Unit V: Organising early intervention services", [
   ("Schemes and benefits; service delivery models; team functions; community programmes; preschool linkage", "ei-services")])]),
]
PR = [
 ("Practical I: Case history and developmental assessment (PGDEI 151)", "Case history and developmental assessment of 0-3 year olds", "ieip"),
 ("Practical II: Therapeutics (PGDEI 152)", "Comprehensive PT, OT and speech assessment and plan", "paediatric-assessment"),
 ("Practical III: Individualised family assessment (PGDEI 153)", "Family assessment and family intervention plan", "family-systems"),
 ("Practical IV: IEIP (PGDEI 154)", "Writing, implementing and evaluating the IEIP", "ieip"),
]
M = {"key": "pgdei", "label": "PG Diploma in Early Intervention (Osmania University)", "university": "Osmania University (with NIEPID, Secunderabad)", "course": "PGDEI",
     "regulation": "w.e.f. 2001-02, revised 2004-05", "tabLabel": "",
     "pattern": "One year. 5 theory papers, each 3 hours, 60 marks external + 20 internal. 4 practicals, each a full-day case exam with viva, 60 external + 90 internal.",
     "years": [
        {"y": "Theory", "s": [{"n": n, "e": True, "u": [{"t": t, "k": [list(k) for k in ks]} for t, ks in us]} for n, us in P]},
        {"y": "Practicals", "s": [{"n": n, "e": True, "u": [{"t": "Exam task", "k": [[t, i]]}]} for n, t, i in PR]}]}
out = pathlib.Path(__file__).resolve().parent.parent / "library" / "pgdei-map.js"
out.write_text("// PG Diploma in Early Intervention syllabus (Osmania University / NIEPID), unit by unit.\n"
               "// Generated by tools/build_pgdei_map.py. Each line is [syllabus text, library topic id].\n"
               "window.COURSE_MAPS = (window.COURSE_MAPS || []).concat([" + json.dumps(M, ensure_ascii=True) + "]);\n")
print("lines", sum(len(u["k"]) for y in M["years"] for s in y["s"] for u in s["u"]))
