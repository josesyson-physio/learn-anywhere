// Basic and applied physics, orientation, physical education, project work and biostatistics for BPT. Written in Learn Anywhere's own words.
window.LIB_EXTRA = (window.LIB_EXTRA || []).concat([
{
  id: "px-force-composition",
  title: "Force: composition, resolution and angle of pull of muscle",
  subject: "Physics",
  region: "Mechanics",
  stages: "steps",
  aliases: ["composition of forces", "resolution of forces", "parallelogram of forces", "angle of pull", "rotary component", "resultant force", "vector"],
  simple: "A force is a push or pull that has both size and direction, so it is a vector. Two or more forces can be combined into one resultant (composition), and one force can be split into two parts at right angles (resolution). A muscle pulls on a bone at an angle, so part of its force turns the joint and part pushes the joint together or pulls it apart.",
  flow: [
    "Force is a vector: magnitude, direction, point of application",
    "Composition: combine forces into one resultant",
    "Parallelogram law gives size and direction of resultant",
    "Resolution: split one force into two perpendicular components",
    "Muscle force splits into rotary and stabilising or distracting parts",
    "Angle of pull 90 degrees gives maximum rotary effect"
  ],
  exam: [
    { h: "Definition", p: [
      "Force: a push or pull that changes or tends to change the state of rest or uniform motion of a body. Unit newton (N); 1 N accelerates 1 kg at 1 m/s2.",
      "Force is a vector quantity: it has magnitude, direction, line of action and point of application, so it is drawn as an arrow."
    ]},
    { h: "Composition of forces", p: [
      "Composition means replacing two or more forces acting on a point by a single resultant that has the same effect.",
      "Forces in the same line add; opposite forces subtract (linear force system).",
      "Two forces at an angle: parallelogram law. Draw both forces as adjacent sides; the diagonal from the common point is the resultant in size and direction.",
      "Concurrent forces (more than two): use the polygon of forces, placing arrows head to tail; the closing side is the resultant."
    ]},
    { h: "Resolution of forces", p: [
      "Resolution is the reverse: one force is split into two components at right angles.",
      "If a force F acts at angle theta to a surface (or bone), the perpendicular component is F sin theta and the parallel component is F cos theta.",
      "Only the perpendicular component produces rotation about a joint axis."
    ]},
    { h: "Angle of pull of muscle", p: [
      "Angle of pull: the angle between the line of action of the muscle and the long axis of the bone it moves.",
      "Rotary (turning) component: perpendicular to the bone; it moves the joint. Non-rotary component: along the bone.",
      "Angle less than 90 degrees: the non-rotary part pulls the bone towards the joint (compressive, stabilising), for example biceps early in elbow flexion.",
      "Angle of 90 degrees: almost all force is rotary, so the muscle is mechanically most efficient (biceps near 90 degrees of elbow flexion).",
      "Angle more than 90 degrees: the non-rotary part pulls the bone away from the joint (distracting or dislocating component)."
    ]},
    { h: "Applications in physiotherapy equipment and practice", p: [
      "Traction: the pull of a cervical or lumbar traction unit can be resolved into a distracting component along the spine and a lifting component; changing the angle of the rope changes these.",
      "Pulley and weight exercise: resistance is greatest when the rope is at 90 degrees to the moving limb segment, so the therapist adjusts the pulley position to load the weak part of range.",
      "Suspension and slings: combined pulls of two ropes act as one resultant, which decides the arc of movement.",
      "Russell traction and similar fracture traction set-ups use composition of forces to get a resultant along the shaft of the femur.",
      "Manual resistance and cuff weights are most effective when applied perpendicular to the segment."
    ]},
    { h: "Conclusion", p: [
      "Composition and resolution of forces explain why muscles are strong in some parts of range and weak in others, and help the therapist place pulleys, traction and resistance correctly."
    ]}
  ],
  tip: "Draw the forearm as a line hinged at the elbow with the biceps arrow inserting at three angles (30, 90 and 120 degrees). At each, resolve the arrow into a perpendicular rotary arrow and a parallel arrow labelled stabilising or distracting. Add a small parallelogram of forces in a corner.",
  evidence: [
    ["Vector analysis of muscle moment arms", "Explains strength variation through range; basis of biomechanics teaching", "Established physics"],
    ["Setting resistance perpendicular to segment", "Gives maximum torque for a given load; standard teaching", "Expert consensus"]
  ],
  evidenceSource: "Levangie and Norkin, Joint Structure and Function; Neumann, Kinesiology of the Musculoskeletal System",
  outcomes: [
    ["Manual muscle testing", "Strength in different parts of range"],
    ["Handheld dynamometry at set joint angles", "Torque changes with angle of pull"]
  ],
  recent: [
    "Motion-capture and musculoskeletal modelling software now calculate muscle moment arms and joint forces in each part of range, using the same vector principles."
  ],
  mnemonic: {
    word: "SIN ROTATES",
    items: [["SIN", "F sin theta = rotary (turning) part"], ["COS", "F cos theta = part along the bone"], ["90", "At 90 degrees the rotary part is largest"]],
    extra: "Below 90 the bone is pulled into the joint; above 90 it is pulled away."
  },
  example: "A first-year student in Chennai sets up an overhead pulley for a patient with weak shoulder flexors. By moving the pulley so the rope is at right angles to the arm at 60-90 degrees of flexion, she puts maximum resistance where the patient needs strengthening.",
  flags: [
    "Large distracting component near end range may stress an unstable joint",
    "Wrong traction angle can push the force into the wrong segment",
    "Misread force diagrams lead to wrong resistance placement"
  ],
  viva: [
    ["What is the parallelogram law of forces?", "If two forces acting at a point are drawn as adjacent sides of a parallelogram, the diagonal through that point gives the resultant in size and direction."],
    ["At what angle of pull is a muscle most efficient?", "At 90 degrees, when nearly all its force is rotary."],
    ["What happens beyond 90 degrees?", "A distracting component appears that tends to pull the bone away from the joint."]
  ],
  refs: [
    { b: "levangie", ch: "Biomechanical applications to joint structure and function" },
    { b: "neumann", ch: "Basic principles of kinesiology" },
    { c: "Forster A, Palastanga N. Clayton's Electrotherapy: Theory and Practice. Chapter: Basic physics" }
  ],
  keywords: ["force", "vector", "resultant", "parallelogram", "angle of pull", "rotary component"],
  mcq: [
    ["The rotary component of a muscle force acting at angle theta to the bone is:", ["F cos theta", "F sin theta", "F tan theta", "F / theta"], 1, "The perpendicular (turning) component is F sin theta, largest at 90 degrees."],
    ["When the angle of pull is less than 90 degrees, the non-rotary component is:", ["Distracting", "Zero", "Stabilising (compressive)", "Equal to the rotary component always"], 2, "Below 90 degrees the along-the-bone component pulls the bone into the joint."]
  ]
},
{
  id: "px-gravity-equilibrium",
  title: "Gravity, centre of gravity, line of gravity and equilibrium",
  subject: "Physics",
  region: "Mechanics",
  stages: "steps",
  aliases: ["centre of gravity", "COG", "line of gravity", "LOG", "base of support", "stability", "equilibrium types"],
  simple: "Gravity pulls every part of the body down towards the earth. The centre of gravity is the single point where the whole body weight can be thought to act, and the line of gravity is the vertical line through it. A body stays stable while its line of gravity falls within its base of support.",
  flow: [
    "Gravity pulls body mass downward (weight = mg)",
    "Centre of gravity: point where total weight acts",
    "Line of gravity: vertical line through centre of gravity",
    "Base of support: area under and between contact points",
    "Stable while line of gravity falls within base",
    "Wider base and lower COG improve stability"
  ],
  exam: [
    { h: "Definitions", p: [
      "Gravity: the force of attraction of the earth on a body; weight = mass x g (g about 9.8 m/s2).",
      "Centre of gravity (COG): the point at which the whole weight of a body may be considered to act. In an adult in the anatomical position it lies roughly anterior to the second sacral vertebra, a little higher in men than in women.",
      "Line of gravity (LOG): the vertical line passing through the COG towards the ground.",
      "Base of support (BOS): the area enclosed by the points of contact with the supporting surface."
    ]},
    { h: "Line of gravity in standing posture", p: [
      "In ideal standing posture (side view) the LOG passes close to the ear lobe, through the shoulder joint, through the bodies of the lumbar vertebrae, slightly behind the hip joint axis, slightly in front of the knee axis and slightly in front of the lateral malleolus.",
      "Because it passes behind the hip and in front of the knee, these joints are held passively by ligaments with minimal muscle work."
    ]},
    { h: "Equilibrium and its types", p: [
      "A body is in equilibrium when the sum of forces and the sum of moments acting on it are zero.",
      "Stable equilibrium: when slightly displaced, the COG rises and the body returns (a cone on its base, lying supine).",
      "Unstable equilibrium: when slightly displaced, the COG falls and the body topples (cone on its tip, standing on one toe).",
      "Neutral equilibrium: COG stays at the same height and the body stays in its new position (a ball rolling, a wheelchair on level ground)."
    ]},
    { h: "Factors affecting stability", p: [
      "Larger base of support increases stability.",
      "Lower COG increases stability (crouching, sitting).",
      "LOG near the centre of the base increases stability.",
      "Greater mass and greater friction with the surface increase stability."
    ]},
    { h: "Applications in physiotherapy", p: [
      "Starting positions: lying is most stable, standing on one leg least stable; progression of exercise moves from stable to less stable positions.",
      "Walking aids (walker, quadripod, crutches, cane) widen the base of support so the LOG stays within it.",
      "Balance training deliberately narrows the base or raises the COG to challenge postural control.",
      "Amputees and pregnant women have a shifted COG, so posture and gait training must correct for it.",
      "Patient handling: the therapist widens the stance and lowers the COG to protect the back during transfers."
    ]},
    { h: "Conclusion", p: [
      "COG, LOG and base of support explain posture, falls and the design of walking aids; every balance and transfer technique depends on keeping the LOG within the base."
    ]}
  ],
  tip: "Draw a side-view stick figure with a dotted vertical LOG and label where it passes: ear, shoulder, lumbar bodies, behind hip, in front of knee, in front of ankle. Next to it draw three cones for stable, unstable and neutral equilibrium.",
  evidence: [
    ["Walking aids for balance impairment", "Widening base improves stability and confidence", "Moderate"],
    ["Progressive balance training (narrowing base)", "Reduces falls in older adults", "High"]
  ],
  evidenceSource: "Levangie and Norkin, Joint Structure and Function; Sherrington et al, Cochrane review of exercise for preventing falls in older people (2019)",
  outcomes: [
    ["Berg Balance Scale", "Static and dynamic balance"],
    ["Functional reach test", "How far the LOG can move within base"],
    ["Posturography (force plate)", "Centre of pressure sway"]
  ],
  recent: [
    "Low-cost force plates and phone sensors are used to measure centre of pressure sway in balance clinics."
  ],
  mnemonic: {
    word: "WIDE LOW",
    items: [["WIDE", "Wide base of support"], ["LOW", "Low centre of gravity"], ["IN", "Line of gravity inside the base"]],
    extra: "Stability = wide, low and centred."
  },
  example: "A 72-year-old man in Coimbatore with Parkinsonism keeps falling forward. The physiotherapist explains that his stooped posture moves his LOG near the front edge of his feet and gives him a wheeled walker to enlarge his base.",
  flags: [
    "LOG outside the base during transfers: high fall risk",
    "Sudden change in COG after amputation or casting",
    "Therapist lifting with a narrow base and high COG risks back injury"
  ],
  viva: [
    ["Where is the COG of an adult in standing?", "Roughly anterior to the second sacral vertebra."],
    ["Give an example of neutral equilibrium.", "A ball on a level floor or a wheelchair on level ground."],
    ["How do crutches improve stability?", "They widen the base of support so the LOG stays inside it."]
  ],
  refs: [
    { b: "levangie", ch: "Posture" },
    { b: "kisner", ch: "Balance and stability; posture" },
    { c: "Sherrington C et al. Exercise for preventing falls in older people living in the community. Cochrane Database Syst Rev 2019", q: "Sherrington exercise preventing falls community Cochrane 2019" }
  ],
  keywords: ["gravity", "centre of gravity", "line of gravity", "base of support", "equilibrium", "stability"],
  mcq: [
    ["In ideal standing posture the line of gravity passes:", ["Behind the knee joint", "In front of the knee joint", "Through the patella", "Behind the ankle"], 1, "It falls slightly in front of the knee axis, so the knee is held in extension passively."],
    ["Which change does NOT increase stability?", ["Widening the base", "Lowering the COG", "Raising the COG", "Increasing friction"], 2, "A higher COG makes the body less stable."]
  ]
},
{
  id: "px-levers-pulleys-springs",
  title: "Levers, pulleys and springs and their applications",
  subject: "Physics",
  region: "Mechanics",
  stages: "steps",
  aliases: ["levers", "orders of lever", "mechanical advantage", "pulleys", "springs", "Hooke's law springs", "anatomical pulley"],
  simple: "A lever is a rigid bar that turns about a fixed point (fulcrum); bones act as levers and joints as fulcrums. Pulleys change the direction of a force or reduce the force needed, and springs give resistance that increases as they are stretched. Physiotherapists use all three in exercise equipment and suspension therapy.",
  flow: [
    "Lever: rigid bar, fulcrum, effort and load",
    "Three orders by position of fulcrum, effort, load",
    "Mechanical advantage = effort arm / load arm",
    "Fixed pulley changes direction; movable pulley halves effort",
    "Springs: resistance rises with stretch (Hooke's law)",
    "Choose equipment to assist or resist movement"
  ],
  exam: [
    { h: "Levers: definition and orders", p: [
      "Lever: a rigid bar that can rotate about a fixed point (fulcrum, F) when an effort (E) acts to overcome a load or resistance (W).",
      "First order: fulcrum between effort and load (see-saw; head nodding at the atlanto-occipital joint, triceps extending the elbow).",
      "Second order: load between fulcrum and effort (wheelbarrow; rising on the toes, with fulcrum at the metatarsal heads, is the usual exam example).",
      "Third order: effort between fulcrum and load (forceps; biceps flexing the elbow). Most body levers are third order: they favour speed and range over force."
    ]},
    { h: "Mechanical advantage and torque", p: [
      "Torque (moment) = force x perpendicular distance from the fulcrum.",
      "Mechanical advantage (MA) = effort arm / load arm. Second order MA is more than 1 (force gain); third order MA is less than 1 (speed and range gain); first order can be either.",
      "Applications: a cuff weight placed at the ankle gives far more resistance to the quadriceps than the same weight at mid-shin. Early rehabilitation uses a short lever (bent knee, weight near the joint) and progresses to a long lever.",
      "Manual resistance: the therapist's hand placed distally gives more resistance for the same effort."
    ]},
    { h: "Pulleys", p: [
      "Pulley: a wheel with a grooved rim over which a rope runs.",
      "Fixed pulley: changes direction of force only, MA = 1 (overhead pulley for shoulder range, wall pulley weights).",
      "Movable pulley: MA = 2, so the effort needed is halved (used in some traction and lifting set-ups).",
      "Pulley circuits in exercise therapy: a weight-and-pulley circuit can assist, resist or be used for self-assisted exercise; suspension frames use pulleys to hang slings.",
      "Anatomical pulleys: the patella increases the moment arm of the quadriceps; the lateral malleolus redirects peroneus longus; the trochlea of the eye redirects superior oblique."
    ]},
    { h: "Springs", p: [
      "A spring stretches in proportion to the load within its elastic limit (Hooke's law, F = kx, k = stiffness).",
      "Springs in series: each carries the full load, total stretch adds, so the combination is softer. Springs in parallel: load is shared, so the combination is stiffer (roughly double for two equal springs).",
      "Resistance increases as the spring is stretched, so the greatest resistance falls at the end of range.",
      "Uses: spring resistance in suspension therapy (pendular and resisted exercise), spring-loaded hand exercisers, elastic bands (Theraband), dynamic splints such as outrigger splints for radial nerve palsy."
    ]},
    { h: "Applications summary for equipment", p: [
      "Quadriceps table (quadriceps chair) uses a lever arm with an adjustable weight to grade resistance.",
      "Traction units, overhead pulleys and wall pulley machines rely on pulley principles.",
      "Suspension therapy combines pulleys, ropes, slings and springs for assisted and resisted exercise.",
      "Walking aids and orthoses are designed as levers (for example a three-point pressure orthosis)."
    ]},
    { h: "Conclusion", p: [
      "Levers explain why body segments are built for speed rather than force, while pulleys and springs let the therapist grade assistance and resistance precisely."
    ]}
  ],
  tip: "Draw three horizontal bars with a triangle fulcrum and arrows for E and W: FEW-order labels for each type, and a body example beside each. Then draw a fixed pulley (MA 1) and a movable pulley (MA 2), and a spring with its F = kx line graph.",
  evidence: [
    ["Progressive resisted exercise using lever-arm and pulley loading", "Improves muscle strength", "High"],
    ["Elastic band resistance versus free weights", "Similar strength gains in many trials", "Moderate"]
  ],
  evidenceSource: "Kisner and Colby, Therapeutic Exercise; Lopes et al, systematic review of elastic bands versus conventional resistance training (SAGE Open Med 2019)",
  outcomes: [
    ["1-RM or 10-RM", "Load for progressive resisted exercise"],
    ["Goniometry", "Range gained with pulley exercise"]
  ],
  recent: [
    "Elastic resistance bands are now graded by colour for stiffness and are widely used in home exercise programmes as a cheap alternative to pulleys and weights."
  ],
  mnemonic: {
    word: "FLE (1-2-3)",
    items: [["1", "F in the middle (first order)"], ["2", "L (load) in the middle (second order)"], ["3", "E (effort) in the middle (third order)"]],
    extra: "Say F-L-E: whatever is in the middle names the order."
  },
  example: "A 25-year-old footballer in Bengaluru after ACL reconstruction starts straight leg raises with a 1 kg weight above the knee. Two weeks later the weight is moved to the ankle: the longer lever arm increases resistance without adding weight.",
  flags: [
    "Long lever with heavy load too early can stress healing tissue",
    "Worn ropes or springs can snap during suspension or pulley exercise",
    "Springs give peak resistance at end range, which may be the painful range"
  ],
  viva: [
    ["Give an example of a third order lever in the body.", "Biceps brachii flexing the elbow."],
    ["What is the mechanical advantage of a fixed pulley?", "One; it only changes direction of force."],
    ["What happens when two equal springs are in parallel?", "The combination becomes stiffer, about twice as stiff."]
  ],
  refs: [
    { b: "kisner", ch: "Resistance exercise and equipment" },
    { b: "levangie", ch: "Biomechanical applications: levers and torque" },
    { c: "Gardiner MD. The Principles of Exercise Therapy. Chapter: Mechanical principles" }
  ],
  keywords: ["lever", "fulcrum", "mechanical advantage", "torque", "pulley", "spring", "suspension therapy"],
  mcq: [
    ["Mechanical advantage of a third order lever is:", ["More than 1", "Exactly 1", "Less than 1", "Infinite"], 2, "The effort arm is shorter than the load arm, favouring speed and range."],
    ["Two identical springs connected in parallel will:", ["Become stiffer", "Become softer", "Stretch twice as far", "Lose elasticity"], 0, "Load is shared, so the combination is stiffer."]
  ]
},
{
  id: "px-motion-newton",
  title: "Speed, velocity, work, energy, power, momentum and Newton's laws of motion",
  subject: "Physics",
  region: "Mechanics",
  stages: "steps",
  aliases: ["Newton's laws", "inertia", "momentum", "work energy power", "velocity acceleration", "kinetic energy", "ground reaction force"],
  simple: "Speed tells how fast something moves, while velocity also tells the direction. Work is done when a force moves something, energy is the ability to do work and power is how fast work is done. Newton's three laws explain how forces change movement, which is the basis of exercise, gait and sports physiotherapy.",
  flow: [
    "Speed = distance / time; velocity adds direction",
    "Acceleration = change of velocity / time",
    "Work = force x distance; energy stored as KE, PE",
    "Power = work / time (watt)",
    "Momentum = mass x velocity",
    "Newton's laws: inertia, F = ma, action-reaction"
  ],
  exam: [
    { h: "Basic quantities", p: [
      "Speed: distance / time (scalar, m/s). Velocity: displacement / time in a stated direction (vector).",
      "Acceleration: rate of change of velocity (m/s2). Angular velocity in joints is measured in degrees per second.",
      "Work: force x distance moved in the direction of force; unit joule (J). No movement means no external work (isometric contraction does no mechanical work but uses energy).",
      "Energy: capacity to do work. Kinetic energy = 1/2 mv2; potential energy = mgh. Energy changes form but is conserved.",
      "Power: work / time, unit watt (W). Power = force x velocity.",
      "Momentum: mass x velocity (kg m/s). Impulse = force x time = change in momentum."
    ]},
    { h: "Newton's laws of motion", p: [
      "First law (inertia): a body stays at rest or in uniform motion in a straight line unless acted on by an external force.",
      "Second law: rate of change of momentum is proportional to the applied force; F = ma.",
      "Third law: every action has an equal and opposite reaction (ground reaction force during walking, push-off in a wheelchair)."
    ]},
    { h: "Applications of Newton's laws in physiotherapy", p: [
      "Inertia: more effort is needed to start a heavy limb moving; ballistic movements and swinging carry momentum into end range, so ballistic stretching is risky.",
      "F = ma: faster acceleration of the same weight needs more muscle force, which is used in power training and plyometrics.",
      "Action-reaction: ground reaction force measured by force plates in gait analysis; crutch walking pushes down to lift the body.",
      "Impulse: landing with knees bent increases the time of impact and reduces peak force on joints (landing technique training after ACL injury)."
    ]},
    { h: "Applications of work, energy and power", p: [
      "Isokinetic dynamometers hold angular velocity constant (for example 60 or 180 degrees per second) and measure torque, work and power.",
      "Power declines faster than strength with ageing, so older adults benefit from power training for function and falls.",
      "Walking efficiency: normal gait exchanges kinetic and potential energy like a pendulum; abnormal gait wastes energy and increases oxygen cost.",
      "Cycle ergometers display power in watts for exercise testing and training."
    ]},
    { h: "Conclusion", p: [
      "These quantities and laws are the language of exercise prescription: they explain how to grade load, speed and impact and how equipment such as isokinetic machines and ergometers measure performance."
    ]}
  ],
  tip: "Make a neat table with quantity, formula, unit and a physiotherapy example. Then draw a walking figure with a ground reaction force arrow from the foot to show Newton's third law.",
  evidence: [
    ["Power training in older adults", "Improves functional performance, often more than slow strength training", "Moderate"],
    ["Landing and neuromuscular training", "Reduces ACL injury risk in athletes", "Moderate"]
  ],
  evidenceSource: "ACSM's Guidelines for Exercise Testing and Prescription; systematic reviews of neuromuscular ACL injury prevention programmes",
  outcomes: [
    ["Isokinetic peak torque and power", "Muscle performance at set speeds"],
    ["Gait speed (m/s)", "Overall walking function"],
    ["Cycle ergometer watts", "Work capacity"]
  ],
  recent: [
    "Wearable inertial sensors in phones and watches now measure acceleration and angular velocity for gait and fall-risk analysis outside the lab."
  ],
  mnemonic: {
    word: "IAR",
    items: [["I", "Inertia (first law)"], ["A", "Acceleration: F = ma (second law)"], ["R", "Reaction: equal and opposite (third law)"]],
    extra: "Work = F x d, Power = W / t, Momentum = m x v."
  },
  example: "A 68-year-old woman in Pune can lift a 2 kg weight slowly but cannot rise quickly from a chair. Her physiotherapist adds fast sit-to-stand practice to train power (force x velocity) rather than only strength.",
  flags: [
    "Ballistic momentum can overstretch tissue",
    "High impact landings without control raise injury risk",
    "Isokinetic testing at high speed can be unsafe in acute injury"
  ],
  viva: [
    ["State Newton's second law.", "Force equals mass times acceleration; rate of change of momentum is proportional to the force."],
    ["What is the unit of power?", "Watt, which is one joule per second."],
    ["Does an isometric contraction do mechanical work?", "No external mechanical work, because there is no movement, though metabolic energy is used."]
  ],
  refs: [
    { b: "levangie", ch: "Biomechanical applications: kinetics" },
    { b: "acsm", ch: "Exercise prescription: resistance and power training" },
    { c: "Hamill J, Knutzen KM. Biomechanical Basis of Human Movement. Chapter: Linear kinetics" }
  ],
  keywords: ["velocity", "acceleration", "work", "energy", "power", "momentum", "Newton's laws", "isokinetic"],
  mcq: [
    ["Ground reaction force in walking is an example of Newton's:", ["First law", "Second law", "Third law", "Law of gravitation"], 2, "The foot pushes on the ground and the ground pushes back equally."],
    ["Power is defined as:", ["Force x distance", "Work / time", "Mass x velocity", "Force x time"], 1, "Power is the rate of doing work, in watts."]
  ]
},
{
  id: "px-friction-elasticity",
  title: "Friction, elasticity and Hooke's law",
  subject: "Physics",
  region: "Mechanics",
  stages: "steps",
  aliases: ["friction", "coefficient of friction", "elasticity", "Hooke's law", "stress strain curve", "Young's modulus", "viscoelasticity"],
  simple: "Friction is the force that resists sliding between two surfaces. Elasticity is the ability of a material to return to its shape after a force is removed, and Hooke's law says the stretch is proportional to the force until the elastic limit. Tissues like tendons and ligaments behave in an elastic and viscous way, which is why sustained stretching works.",
  flow: [
    "Friction opposes sliding between surfaces in contact",
    "Friction = coefficient x normal reaction",
    "Elastic material returns to shape after force removed",
    "Hooke's law: stretch proportional to force within elastic limit",
    "Beyond elastic limit: plastic deformation, then failure",
    "Tissues are viscoelastic: creep and stress relaxation"
  ],
  exam: [
    { h: "Friction: definition and laws", p: [
      "Friction: the force that opposes relative movement between two surfaces in contact.",
      "Limiting friction F = mu x R, where mu is the coefficient of friction and R is the normal reaction.",
      "Static friction (before movement) is greater than kinetic (sliding) friction; rolling friction is much smaller than sliding friction.",
      "Friction depends on the nature of surfaces, not on the area of contact."
    ]},
    { h: "Applications of friction in physiotherapy", p: [
      "Reducing friction: powder boards and skateboards for gravity-eliminated exercise, sliding boards for transfers, ball bearings in pulleys, oil or powder as massage medium.",
      "Increasing friction: rubber ferrules on crutches and canes, non-slip mats in hydrotherapy and bathrooms, good footwear to prevent falls.",
      "Friction massage (transverse frictions) uses skin-to-tissue friction to move deeper tissue.",
      "Shear and friction on skin cause pressure ulcers in bedridden patients, so correct lifting rather than dragging."
    ]},
    { h: "Elasticity and Hooke's law", p: [
      "Elasticity: property by which a body regains its original shape and size when the deforming force is removed.",
      "Stress = force / area; strain = change in length / original length. Young's modulus = stress / strain (stiffness of the material).",
      "Hooke's law: within the elastic limit, extension is directly proportional to the applied force (F = kx).",
      "Beyond the elastic limit the material undergoes plastic (permanent) deformation and finally breaks."
    ]},
    { h: "Stress-strain curve of soft tissue", p: [
      "Toe region: crimped collagen straightens with little force.",
      "Linear (elastic) region: behaves like Hooke's law; tissue returns to length.",
      "Plastic region: microfailure of fibres, permanent lengthening.",
      "Failure point: rupture of tendon or ligament.",
      "Viscoelasticity: creep (lengthening under constant low load over time) and stress relaxation (force falls when length is held). These justify prolonged low-load stretching and serial casting."
    ]},
    { h: "Equipment applications", p: [
      "Springs and elastic bands give resistance following Hooke's law.",
      "Heat before stretching (hot packs, ultrasound, SWD) increases tissue extensibility, so a given load gives more lasting length gain.",
      "Dynamic splints use elastic recoil to give a constant low-load stretch to stiff joints."
    ]},
    { h: "Conclusion", p: [
      "Friction must be controlled for safe exercise and mobility, and elasticity and viscoelasticity explain how stretching, splinting and heat change the length of soft tissues."
    ]}
  ],
  tip: "Draw the soft tissue stress-strain curve with four labelled regions (toe, elastic, plastic, failure) and mark the elastic limit. Beside it draw a block on a surface with arrows for applied force, friction, weight and normal reaction.",
  evidence: [
    ["Prolonged low-load stretch for contracture", "Small gains in range; effect often not lasting", "Low to moderate"],
    ["Heat before stretching", "Modest additional gain in range", "Low"]
  ],
  evidenceSource: "Harvey et al, Cochrane review of stretch for contractures (2017); Cameron, Physical Agents in Rehabilitation",
  outcomes: [
    ["Goniometry", "Range of motion after stretching"],
    ["Timed up and go with footwear", "Effect of friction aids on mobility safety"]
  ],
  recent: [
    "A Cochrane review found stretch alone produces little lasting change in established contractures, so stretching is combined with active use and positioning."
  ],
  mnemonic: {
    word: "TEPF",
    items: [["T", "Toe region"], ["E", "Elastic (Hooke) region"], ["P", "Plastic region"], ["F", "Failure"]],
    extra: "Friction: F = mu R; static is more than kinetic."
  },
  example: "A 45-year-old man in Hyderabad with a stiff elbow after fracture receives hot pack followed by a sustained low-load stretch with a turnbuckle splint, using creep to gain range gradually.",
  flags: [
    "Forceful stretch into the plastic region can tear tissue",
    "Slippery floors or worn crutch tips: fall risk",
    "Dragging a patient causes shear injury to skin"
  ],
  viva: [
    ["State Hooke's law.", "Within the elastic limit, extension is proportional to the applied force."],
    ["What is creep?", "Gradual lengthening of tissue under a constant load over time."],
    ["Why are rubber tips used on crutches?", "To increase friction and prevent slipping."]
  ],
  refs: [
    { b: "levangie", ch: "Joint structure: properties of connective tissue" },
    { b: "kisner", ch: "Stretching for impaired mobility" },
    { c: "Harvey LA et al. Stretch for the treatment and prevention of contractures. Cochrane Database Syst Rev 2017", q: "Harvey stretch contractures Cochrane 2017" }
  ],
  keywords: ["friction", "coefficient", "elasticity", "Hooke's law", "stress", "strain", "creep", "viscoelastic"],
  mcq: [
    ["Which is true of friction?", ["Kinetic friction is greater than static", "It depends mainly on area of contact", "Static friction is greater than kinetic", "Rolling friction is greater than sliding"], 2, "More force is needed to start sliding than to keep sliding."],
    ["Lengthening of tissue under constant load over time is:", ["Creep", "Stress relaxation", "Hysteresis", "Plasticity"], 0, "Creep is the time-dependent lengthening under a constant load."]
  ]
},
{
  id: "px-ac-dc",
  title: "Direct and alternating current: sine wave, frequency and RMS value",
  subject: "Physics",
  region: "Electricity",
  stages: "steps",
  aliases: ["DC", "AC", "alternating current", "sine wave", "RMS value", "peak value", "frequency Hz", "mains supply"],
  simple: "Direct current flows steadily in one direction, like from a battery. Alternating current keeps reversing direction, usually following a smooth sine wave, like the mains supply in India at 230 V and 50 Hz. The RMS value is the steady DC value that would produce the same heating effect.",
  flow: [
    "DC: flow of charge in one direction only",
    "AC: direction reverses many times per second",
    "Sine wave: smooth rise and fall of voltage",
    "Frequency = cycles per second (Hz); period = 1/f",
    "RMS value = 0.707 x peak value",
    "Therapeutic currents are modified DC or AC"
  ],
  exam: [
    { h: "Definitions", p: [
      "Electric current: rate of flow of electric charge, I = Q / t, unit ampere (A).",
      "Direct current (DC): current flows in one direction only; may be constant (galvanic) or interrupted (pulses).",
      "Alternating current (AC): current reverses direction periodically; the mains supply is a sinusoidal AC."
    ]},
    { h: "The sine wave and its terms", p: [
      "Cycle: one complete positive and negative alternation. Frequency (f): cycles per second, hertz (Hz). Period T = 1/f.",
      "Peak value (amplitude): maximum value in one direction; peak-to-peak is twice this.",
      "Indian mains supply: 230 V RMS, 50 Hz; peak voltage about 325 V.",
      "Phase: the position in the cycle; two AC waves can be in or out of phase (basis of interference in IFT)."
    ]},
    { h: "RMS and average values", p: [
      "RMS (root mean square) value: the value of DC that produces the same heating in a resistor as the AC. For a sine wave, RMS = peak / square root of 2 = 0.707 x peak.",
      "Average value over a full cycle of a symmetrical sine wave is zero; over a half cycle it is 0.637 x peak.",
      "Meters for AC normally read RMS values."
    ]},
    { h: "Comparison of AC and DC", p: [
      "DC has chemical (polar) effects at electrodes: acid at anode, alkali at cathode, risk of chemical burns; used in iontophoresis and for denervated muscle.",
      "Symmetrical AC has no net chemical effect, so it is more comfortable on the skin and used in TENS (biphasic), IFT and Russian current.",
      "AC can be stepped up or down with transformers; DC cannot, which is why mains supply is AC."
    ]},
    { h: "Applications in electrotherapy equipment", p: [
      "Every machine is powered from 230 V AC mains, transformed and rectified to low-voltage DC inside, then shaped into therapeutic waveforms by oscillator circuits.",
      "Frequency choice decides effect: low frequency (below 1000 Hz) stimulates nerves directly; medium frequency (1-10 kHz) passes skin more easily; high frequency (above 100 kHz, for example SWD 27.12 MHz) produces heat without stimulating nerves.",
      "Pulse duration and frequency settings on TENS and NMES are direct uses of these terms."
    ]},
    { h: "Conclusion", p: [
      "Understanding DC, AC, frequency and RMS is essential for selecting and dosing every electrotherapy current safely."
    ]}
  ],
  tip: "Draw a sine wave on a time axis, mark one cycle, the period T, peak, peak-to-peak and a dotted line at 0.707 of peak labelled RMS. Next to it draw a flat DC line and a square pulsed DC train.",
  evidence: [
    ["Biphasic (AC-type) waveforms versus monophasic for NMES", "Biphasic generally more comfortable with no polar effects", "Moderate"],
    ["Constant DC iontophoresis", "Effective drug delivery for selected superficial conditions; evidence modest", "Low to moderate"]
  ],
  evidenceSource: "Forster and Palastanga, Clayton's Electrotherapy; Cameron, Physical Agents in Rehabilitation",
  outcomes: [
    ["Meter reading (mA RMS)", "Dose delivered"],
    ["Patient comfort rating", "Tolerance of waveform"]
  ],
  recent: [
    "Modern stimulators are fully digital, generating waveforms from microcontrollers, with displays of frequency, pulse width and current."
  ],
  mnemonic: {
    word: "230-50-325",
    items: [["230", "Indian mains RMS voltage"], ["50", "Mains frequency in Hz"], ["325", "Approximate peak voltage (230 x 1.414)"]],
    extra: "RMS = 0.707 peak; peak = 1.414 RMS."
  },
  example: "During a practical viva in Madurai, the examiner points to the TENS display reading 100 Hz, 200 microseconds and asks the student to explain each term in relation to the wave diagram.",
  flags: [
    "Mains AC at 50 Hz is the most dangerous frequency for the heart",
    "Constant DC risks chemical burns under electrodes",
    "Never touch internal circuits of a plugged-in machine"
  ],
  viva: [
    ["What is the RMS value of a sine wave?", "0.707 times the peak value."],
    ["What is the frequency of Indian mains supply?", "50 Hz at 230 V RMS."],
    ["Why is DC more likely to cause skin burns than AC?", "DC has polar chemical effects producing acid and alkali under electrodes."]
  ],
  refs: [
    { c: "Forster A, Palastanga N. Clayton's Electrotherapy: Theory and Practice. Chapter: Electrical currents" },
    { c: "Low J, Reed A. Electrotherapy Explained: Principles and Practice. Chapter: Physical principles" },
    { b: "cameron", ch: "Introduction to electrical currents" }
  ],
  keywords: ["direct current", "alternating current", "sine wave", "frequency", "RMS", "peak", "hertz"],
  mcq: [
    ["Peak voltage of 230 V RMS mains is about:", ["163 V", "230 V", "325 V", "460 V"], 2, "Peak = 1.414 x 230, about 325 V."],
    ["The frequency of SWD is:", ["50 Hz", "4000 Hz", "27.12 MHz", "1 MHz"], 2, "SWD uses 27.12 MHz high-frequency current."]
  ]
},
{
  id: "px-ohms-law",
  title: "Ohm's law and resistances in series and parallel",
  subject: "Physics",
  region: "Electricity",
  stages: "steps",
  aliases: ["Ohm's law", "V = IR", "resistance", "series circuit", "parallel circuit", "skin resistance", "current density"],
  simple: "Ohm's law says the current through a conductor equals the voltage divided by its resistance. Resistances joined end to end (series) add up, while resistances side by side (parallel) give a smaller total. In electrotherapy, skin is the main resistance, so preparing the skin and choosing the right electrode size change how much current flows.",
  flow: [
    "Voltage drives current through resistance",
    "Ohm's law: V = I x R",
    "Series: total R = R1 + R2 + R3",
    "Parallel: 1/R = 1/R1 + 1/R2 + 1/R3",
    "Skin is the main resistance in the patient circuit",
    "Reduce skin resistance for comfortable stimulation"
  ],
  exam: [
    { h: "Definition and statement", p: [
      "Ohm's law: at constant temperature, the current through a conductor is directly proportional to the potential difference across it. V = IR.",
      "Resistance (R): opposition to current flow, unit ohm. It depends on material (resistivity), length (directly) and cross-sectional area (inversely), and on temperature.",
      "Power dissipated: P = VI = I2R, which is the heating (Joule) effect."
    ]},
    { h: "Resistances in series", p: [
      "Joined end to end; the same current flows through each.",
      "Total resistance R = R1 + R2 + R3; voltage divides in proportion to each resistance.",
      "Example: skin, subcutaneous fat and the second skin layer in a patient circuit act in series."
    ]},
    { h: "Resistances in parallel", p: [
      "Joined side by side; the same voltage acts across each.",
      "1/R = 1/R1 + 1/R2 + 1/R3; total is less than the smallest resistance.",
      "Current divides, more passing through the lower resistance path. Example: current under an electrode spreads mainly through low-resistance tissues such as blood and muscle, rather than fat and bone."
    ]},
    { h: "Applications in electrotherapy", p: [
      "Skin resistance is high when dry or greasy; washing, removing oils and wetting the pad or using gel reduce it so a lower voltage gives the needed current.",
      "Current density = current / electrode area. A small electrode concentrates current (used as active electrode in motor point stimulation); uneven contact causes local high density and burns.",
      "Constant current stimulators adjust voltage automatically as resistance changes; constant voltage stimulators let current rise if resistance falls.",
      "Tissue resistance: nerve and muscle conduct well; fat, bone and dry skin conduct poorly. Hence stimulating through thick fat needs more intensity."
    ]},
    { h: "Safety relevance", p: [
      "If skin is broken, resistance there falls and current concentrates: cover small cuts with petroleum jelly or avoid the area.",
      "Body resistance falls when wet, which increases shock current from a faulty appliance (hydrotherapy areas need extra protection)."
    ]},
    { h: "Conclusion", p: [
      "Ohm's law and series-parallel rules explain skin preparation, electrode sizing and why constant-current machines are safer and more comfortable."
    ]}
  ],
  tip: "Draw a series circuit (battery, three resistors in a line) and a parallel circuit (three resistors in branches) with the formula under each. Then sketch two electrodes on a forearm with layers of skin, fat and muscle, showing current lines spreading through muscle.",
  evidence: [
    ["Skin preparation before stimulation", "Lowers impedance and improves comfort; standard practice", "Expert consensus"],
    ["Constant current stimulators", "More consistent dosing when impedance changes", "Expert consensus"]
  ],
  evidenceSource: "Low and Reed, Electrotherapy Explained; Cameron, Physical Agents in Rehabilitation",
  outcomes: [
    ["Current reading on milliammeter", "Actual dose delivered"],
    ["Skin inspection after treatment", "Signs of current concentration"]
  ],
  recent: [
    "Self-adhesive hydrogel electrodes have largely replaced sponge and rubber pads, giving more even contact and current density."
  ],
  mnemonic: {
    word: "VIR",
    items: [["V", "Voltage = I x R"], ["I", "Current = V / R"], ["R", "Resistance = V / I"]],
    extra: "Series adds; parallel reduces."
  },
  example: "A student in Trichy finds a patient with very dry, rough skin barely feels the faradic current at high intensity. After washing the area with warm water and using fresh gel, the same current is felt at a much lower setting.",
  flags: [
    "Broken skin or small cuts concentrate current: burn risk",
    "Wet hands and floors lower body resistance: shock risk",
    "Poor electrode contact gives high current density at edges"
  ],
  viva: [
    ["State Ohm's law.", "At constant temperature, V = IR."],
    ["What is the total of 6 ohm and 3 ohm in parallel?", "2 ohm (1/R = 1/6 + 1/3 = 1/2)."],
    ["Which tissue has the highest resistance?", "Dry skin, followed by bone and fat."]
  ],
  refs: [
    { c: "Low J, Reed A. Electrotherapy Explained: Principles and Practice. Chapter: Electrical principles" },
    { c: "Forster A, Palastanga N. Clayton's Electrotherapy: Theory and Practice. Chapter: Electricity and Ohm's law" },
    { b: "cameron", ch: "Electrical currents: impedance and electrodes" }
  ],
  keywords: ["Ohm's law", "resistance", "series", "parallel", "current density", "skin preparation"],
  mcq: [
    ["Three 3-ohm resistors in series give:", ["1 ohm", "3 ohm", "6 ohm", "9 ohm"], 3, "In series resistances add: 3 + 3 + 3 = 9."],
    ["Current density increases when:", ["Electrode area is reduced", "Electrode area is increased", "Current is reduced", "Gel is used"], 0, "Density = current / area, so a smaller electrode concentrates current."]
  ]
},
{
  id: "px-capacitors-rheostats",
  title: "Capacitors (condensers) and rheostats",
  subject: "Physics",
  region: "Electricity",
  stages: "steps",
  aliases: ["capacitor", "condenser", "capacitance", "farad", "rheostat", "potentiometer", "variable resistor", "time constant"],
  simple: "A capacitor (condenser) is two conducting plates separated by an insulator that stores electric charge. It blocks steady DC but lets AC pass, more easily at higher frequency. A rheostat is a variable resistor used to control current, like the intensity knob on an old stimulator.",
  flow: [
    "Two plates separated by dielectric store charge",
    "Capacitance C = Q / V, unit farad",
    "Charges and discharges with time constant RC",
    "Blocks DC; passes AC, better at high frequency",
    "Rheostat varies resistance to control current",
    "Used in stimulators, SWD condenser field, timing circuits"
  ],
  exam: [
    { h: "Capacitor: definition and structure", p: [
      "A capacitor (condenser) is a device that stores electric charge, made of two conductors (plates) separated by an insulator (dielectric).",
      "Capacitance C = Q / V, unit farad (practical units microfarad).",
      "Capacitance increases with larger plate area, smaller distance between plates and a dielectric of higher permittivity."
    ]},
    { h: "Charging, discharging and behaviour with AC", p: [
      "When connected to DC the capacitor charges until its voltage equals the supply; then current stops. On discharge the charge flows back.",
      "Time constant = R x C: time to reach about 63 percent of full charge. Used to set pulse length and timing in older stimulators.",
      "With AC the capacitor charges and discharges every cycle, so current passes. Capacitive reactance Xc = 1 / (2 pi f C): higher frequency, lower opposition.",
      "Capacitors in parallel add (C = C1 + C2); in series 1/C = 1/C1 + 1/C2."
    ]},
    { h: "Applications of capacitors in physiotherapy", p: [
      "Skin acts like a capacitor (cell membranes as dielectric), so skin impedance falls as frequency rises. That is why medium frequency currents such as IFT (about 4000 Hz) pass the skin more comfortably than low frequency.",
      "SWD condenser (capacitor) field method: the two plates and the patient's tissues form a capacitor; tissues act as the dielectric and are heated.",
      "Smoothing capacitors in power supplies convert rectified AC to steady DC for galvanic current.",
      "Timing circuits for surged faradic and interrupted currents."
    ]},
    { h: "Rheostats", p: [
      "Rheostat: a variable resistor, usually a coil of resistance wire with a sliding contact.",
      "Series rheostat: placed in series with the patient to vary current; it never reduces current to zero, so it is unsafe as the only control.",
      "Potentiometer (shunt) rheostat: connected across the supply, the patient takes voltage from a slider, so output can be turned smoothly from zero. This is preferred in stimulators.",
      "Modern machines use electronic potentiometers, but the principle is the same."
    ]},
    { h: "Safety points", p: [
      "Always start with the intensity at zero and increase slowly; never switch on with the control turned up.",
      "Large capacitors can hold charge after the machine is switched off, so only technicians should open machines."
    ]},
    { h: "Conclusion", p: [
      "Capacitors explain skin impedance, SWD condenser heating and waveform timing, while rheostats and potentiometers allow safe graded control of current intensity."
    ]}
  ],
  tip: "Draw a parallel plate capacitor with plus and minus charges and the dielectric labelled. Draw the charging curve rising to 63 percent at one RC. Then draw a potentiometer circuit with the patient between the slider and one end, showing output from zero.",
  evidence: [
    ["Medium frequency (IFT) versus low frequency for comfort", "Mixed evidence; skin impedance is lower but clinical superiority not proven", "Low"],
    ["SWD condenser field", "Effective heating of superficial and fat-rich tissues", "Established physics"]
  ],
  evidenceSource: "Low and Reed, Electrotherapy Explained; Clayton's Electrotherapy",
  outcomes: [
    ["Milliammeter reading", "Current set by intensity control"],
    ["Patient sensation", "Comfort at each intensity"]
  ],
  recent: [
    "Supercapacitors and digital intensity controls are used in portable, battery-run stimulators."
  ],
  mnemonic: {
    word: "CAD",
    items: [["C", "Capacitance up with larger area"], ["A", "And closer plates"], ["D", "And better dielectric"]],
    extra: "Xc = 1 / (2 pi f C): higher frequency passes more easily."
  },
  example: "In an electrotherapy practical in Salem, the tutor shows why IFT feels smoother than faradic current at the same depth: the skin's capacitive impedance is much lower at 4000 Hz.",
  flags: [
    "Turning on a machine with intensity not at zero: sudden shock",
    "Stored charge in capacitors after switching off",
    "Series rheostat alone cannot reduce current to zero"
  ],
  viva: [
    ["What is the unit of capacitance?", "Farad."],
    ["Why does skin impedance fall with frequency?", "Skin behaves like a capacitor whose reactance is inversely proportional to frequency."],
    ["Why is a potentiometer preferred to a series rheostat?", "It allows output to be reduced smoothly to zero."]
  ],
  refs: [
    { c: "Forster A, Palastanga N. Clayton's Electrotherapy: Theory and Practice. Chapter: Capacitors and rheostats" },
    { c: "Low J, Reed A. Electrotherapy Explained: Principles and Practice. Chapter: Capacitance and impedance" },
    { b: "cameron", ch: "Diathermy: capacitive technique" }
  ],
  keywords: ["capacitor", "condenser", "capacitance", "reactance", "rheostat", "potentiometer", "time constant"],
  mcq: [
    ["Capacitive reactance is:", ["Directly proportional to frequency", "Inversely proportional to frequency", "Independent of frequency", "Zero for DC"], 1, "Xc = 1 / (2 pi f C), so it falls as frequency rises."],
    ["Which control allows output to be reduced to zero?", ["Series rheostat", "Fuse", "Potentiometer", "Capacitor"], 2, "A potentiometer taps voltage from zero upwards."]
  ]
},
{
  id: "px-electric-shock",
  title: "Effects of electric current and prevention of electric and earth shock",
  subject: "Physics",
  region: "Electricity",
  stages: "steps",
  aliases: ["electric shock", "earth shock", "earthing", "effects of current", "heating effect", "chemical effect", "ELCB RCCB", "fuse"],
  simple: "Electric current produces heat, chemical changes, magnetism and stimulation of nerves and muscles. An electric shock happens when current passes through the body; an earth shock happens when a person touches a live part while connected to earth. Earthing, fuses, circuit breakers and good habits prevent shocks in the physiotherapy department.",
  flow: [
    "Current has heating, chemical, magnetic, physiological effects",
    "Shock: current passes through body to earth or other line",
    "Severity depends on current, path, time, frequency",
    "Faulty wiring or wet conditions cause earth shock",
    "Prevent with earthing, fuses, RCCB, insulation, checks",
    "Treat: switch off, do not touch, start CPR"
  ],
  exam: [
    { h: "Effects of electric current", p: [
      "Heating (Joule) effect: heat = I2Rt; basis of diathermy and the cause of burns.",
      "Chemical (electrolytic) effect: DC breaks salts into ions; acid at anode and alkali at cathode; used in iontophoresis, risk of chemical burns.",
      "Magnetic effect: current produces a magnetic field; used in meters, transformers and inductive SWD.",
      "Physiological effect: depolarisation of nerve and muscle; used in TENS and NMES; dangerous to the heart at mains frequency."
    ]},
    { h: "Electric shock and earth shock", p: [
      "Electric shock: unpleasant or harmful current through the body. Severity depends on current magnitude, path (hand to hand or hand to foot across the chest is worst), duration, frequency (50-60 Hz most dangerous) and body resistance (lower when wet).",
      "Approximate effects at mains frequency: about 1 mA is felt; around 10-20 mA muscles may grip and the person cannot let go; currents around 100 mA across the chest can cause ventricular fibrillation.",
      "Earth shock: occurs when a person touching a live conductor is also in contact with earth (floor, water pipe, metal bed), completing the circuit through the body. Causes: insulation failure, faulty plug or socket, missing earth wire, live casing."
    ]},
    { h: "Prevention", p: [
      "Earthing: the metal casing is connected by the earth wire (green or green-yellow) to earth, so a fault current flows to earth and blows the fuse instead of passing through the person.",
      "Fuses and miniature circuit breakers cut supply when current is excessive.",
      "Residual current device (RCCB or ELCB), typically 30 mA trip, cuts supply when current leaks to earth.",
      "Use three-pin plugs, intact cables, no adapters, dry hands and floors, wooden or insulated couches, regular servicing and documented safety checks.",
      "Patient circuit isolation in modern machines; patient must not touch metal or the machine during treatment."
    ]},
    { h: "Management of electric shock", p: [
      "Switch off the supply at the mains first; if impossible, separate the person using a dry non-conducting object.",
      "Check response and breathing; call for help; begin CPR and use an AED if available.",
      "Treat burns, check for injuries from a fall, and record and report the incident; take the machine out of use."
    ]},
    { h: "Conclusion", p: [
      "Every electrotherapy department must understand the effects of current and keep earthing, circuit breakers and safety checks in order, because shocks are preventable."
    ]}
  ],
  tip: "Draw a machine with a live wire touching its metal casing. Show path A (with earth wire: current goes to earth, fuse blows) and path B (no earth: current goes through the person's hand to feet to floor). Label fuse, earth wire and RCCB.",
  evidence: [
    ["Residual current devices", "Greatly reduce fatal shock risk from earth leakage", "Established engineering standard"],
    ["Regular electrical safety testing of medical equipment", "Detects faults before patient harm", "Expert consensus"]
  ],
  evidenceSource: "IEC 60601-1 medical electrical equipment safety standard; Clayton's Electrotherapy",
  outcomes: [
    ["Equipment safety log", "Date of last inspection and earth continuity"],
    ["Incident reports", "Shocks or burns in the department"]
  ],
  recent: [
    "Medical electrical equipment is designed to the IEC 60601 family of standards, which set limits on leakage current and patient isolation."
  ],
  mnemonic: {
    word: "SEPARATE",
    items: [["S", "Switch off at mains"], ["E", "Earth wire and fuse checked"], ["P", "Plug three-pin, no adapters"], ["A", "Always dry hands and floors"]],
    extra: "Then call for help and begin CPR if needed."
  },
  example: "In a busy OPD in Vellore, a student notices a cracked SWD cable and the patient feeling tingling from the machine casing. She switches off at the wall, removes the machine from use and reports it for an earth continuity check.",
  flags: [
    "Wet floor near hydrotherapy or ice therapy with electrical machines",
    "Frayed cables, missing earth pin or multi-plug adapters",
    "Patients with pacemakers: no electrotherapy near the chest without specialist advice",
    "Touching a shock victim before switching off the supply"
  ],
  viva: [
    ["What is an earth shock?", "Shock when a person touches a live part while in contact with earth, completing the circuit through the body."],
    ["What is the function of the earth wire?", "It carries fault current from the casing to earth so the fuse blows."],
    ["What is the first step in managing electric shock?", "Switch off the supply before touching the victim."]
  ],
  refs: [
    { c: "Forster A, Palastanga N. Clayton's Electrotherapy: Theory and Practice. Chapter: Electrical safety and shock" },
    { c: "Low J, Reed A. Electrotherapy Explained: Principles and Practice. Chapter: Safety" },
    { b: "cameron", ch: "Electrical currents: safety" }
  ],
  keywords: ["electric shock", "earth shock", "earthing", "fuse", "RCCB", "Joule heating", "electrolysis"],
  mcq: [
    ["The colour of the earth wire is usually:", ["Red", "Black", "Green or green-yellow", "Blue"], 2, "Earth is green or green-yellow."],
    ["Which frequency of AC is most dangerous to the heart?", ["50-60 Hz", "4000 Hz", "27 MHz", "1 MHz"], 0, "Low frequency mains current is most likely to cause ventricular fibrillation."]
  ]
},
{
  id: "px-magnetism-induction",
  title: "Magnetism, electromagnetic induction, inductance and impedance",
  subject: "Physics",
  region: "Electricity",
  stages: "steps",
  aliases: ["magnetism", "electromagnetic induction", "Faraday's law", "transformer", "inductance", "impedance", "eddy currents", "choke coil"],
  simple: "A current flowing in a wire creates a magnetic field, and a changing magnetic field creates a current in a nearby wire: this is electromagnetic induction. Transformers, coils and the cable method of short wave diathermy all work this way. Impedance is the total opposition to AC, made of resistance and reactance.",
  flow: [
    "Current in a wire produces a magnetic field",
    "Changing magnetic field induces a voltage (Faraday)",
    "Transformer steps voltage up or down by turns ratio",
    "Inductance opposes change of current (henry)",
    "Impedance combines resistance and reactance for AC",
    "Resonance tunes SWD; eddy currents heat tissue"
  ],
  exam: [
    { h: "Magnetism", p: [
      "A magnet has north and south poles; like poles repel and unlike attract. Lines of force run from north to south outside the magnet.",
      "Electromagnetism: a current-carrying conductor produces a magnetic field around it; a coil (solenoid) with an iron core forms an electromagnet.",
      "Magnetic effect is used in moving coil meters, relays and loudspeakers."
    ]},
    { h: "Electromagnetic induction", p: [
      "Faraday's law: when magnetic flux linked with a circuit changes, an EMF is induced proportional to the rate of change.",
      "Lenz's law: the induced current opposes the change that produced it.",
      "Mutual induction: changing current in one coil induces EMF in a neighbouring coil (basis of the transformer).",
      "Transformer: Vs / Vp = Ns / Np. Step-down transformers reduce mains voltage for stimulators; step-up for high-voltage circuits. Works only with AC."
    ]},
    { h: "Inductance", p: [
      "Self-inductance: a coil opposes any change in its own current by inducing a back EMF; unit henry (H).",
      "Inductive reactance XL = 2 pi f L, so a coil (choke) opposes high frequency more.",
      "Uses: choke coils for smoothing; inductance in the oscillator (LC tank) circuit."
    ]},
    { h: "Impedance and resonance", p: [
      "Impedance (Z): total opposition to AC, combining resistance, inductive reactance and capacitive reactance: Z = square root of [R2 + (XL - XC)2].",
      "Resonance: when XL = XC, impedance is minimum and current is maximum; resonant frequency f = 1 / (2 pi square root of LC).",
      "Tuning SWD: the patient circuit is tuned into resonance with the 27.12 MHz oscillator for maximum power transfer."
    ]},
    { h: "Applications in physiotherapy equipment", p: [
      "Inductive SWD (cable, drum or monode): the high-frequency current in the coil creates a changing magnetic field that induces eddy currents in tissue, heating conductive tissues such as muscle.",
      "Pulsed electromagnetic field therapy uses induced currents in tissue; clinical evidence is limited.",
      "Transformers and isolation transformers inside every machine reduce voltage and separate the patient from mains.",
      "Magnetic stimulation (for example peripheral magnetic stimulation) uses rapidly changing fields to stimulate nerves without electrodes."
    ]},
    { h: "Conclusion", p: [
      "Electromagnetic induction powers transformers and inductive diathermy, and impedance and resonance explain why SWD must be tuned for safe effective heating."
    ]}
  ],
  tip: "Draw a transformer with primary and secondary coils on an iron core and write Vs/Vp = Ns/Np. Beside it draw an LC tank circuit and the resonance curve (current peak at resonant frequency). Add a cable electrode coiled around a thigh showing eddy currents.",
  evidence: [
    ["Inductive SWD heating of muscle", "Raises deep muscle temperature", "Established"],
    ["PEMF for pain and healing", "Small or inconsistent clinical effects", "Low"]
  ],
  evidenceSource: "Cameron, Physical Agents in Rehabilitation; Clayton's Electrotherapy",
  outcomes: [
    ["Tuning meter on SWD", "Resonance achieved"],
    ["Patient warmth report", "Thermal dose"]
  ],
  recent: [
    "Repetitive peripheral magnetic stimulation is being studied for spasticity and pain, with early but inconsistent evidence."
  ],
  mnemonic: {
    word: "FLIT",
    items: [["F", "Faraday: changing flux induces EMF"], ["L", "Lenz: induced current opposes change"], ["I", "Inductance in henry"], ["T", "Transformer: Vs/Vp = Ns/Np"]],
    extra: "Resonance: XL = XC, impedance minimum."
  },
  example: "A 40-year-old man in Kochi with chronic hamstring tightness is treated with cable-method SWD. The physiotherapist tunes the machine until the meter shows resonance, then sets a mild warm dose.",
  flags: [
    "Metal in the field gets heated by induced currents: burn risk",
    "Pacemakers and implanted stimulators are affected by changing magnetic fields",
    "Cables crossing or touching concentrate the field"
  ],
  viva: [
    ["State Faraday's law.", "Induced EMF is proportional to the rate of change of magnetic flux."],
    ["What is impedance?", "Total opposition to AC, combining resistance and reactance."],
    ["How does inductive SWD heat tissue?", "Changing magnetic field induces eddy currents in conductive tissues."]
  ],
  refs: [
    { c: "Forster A, Palastanga N. Clayton's Electrotherapy: Theory and Practice. Chapter: Magnetism and electromagnetic induction" },
    { b: "cameron", ch: "Diathermy: inductive technique" },
    { c: "Low J, Reed A. Electrotherapy Explained: Principles and Practice. Chapter: Electromagnetic fields" }
  ],
  keywords: ["magnetism", "induction", "Faraday", "Lenz", "transformer", "inductance", "impedance", "resonance"],
  mcq: [
    ["A transformer works only with:", ["DC", "AC", "Static charge", "Permanent magnets"], 1, "Induction needs a changing current, so only AC works."],
    ["At resonance in an LC circuit:", ["XL = XC and impedance is minimum", "XL is zero", "Current is zero", "Impedance is maximum"], 0, "Reactances cancel, leaving only resistance."]
  ]
},
{
  id: "px-radiation-laws",
  title: "Laws of radiation: cosine law, inverse square law and law of Grotthus",
  subject: "Physics",
  region: "Electricity",
  stages: "steps",
  aliases: ["cosine law", "Lambert's law", "inverse square law", "Grotthus-Draper law", "laws of radiation", "Arndt-Schulz law", "lamp distance"],
  simple: "Radiation such as infrared and ultraviolet becomes weaker with distance and when it strikes the skin at an angle. The inverse square law covers distance, the cosine law covers angle, and the law of Grotthus says only absorbed radiation has an effect. These laws decide how far and at what angle to place a lamp.",
  flow: [
    "Radiation spreads from a source in all directions",
    "Inverse square: intensity falls with distance squared",
    "Cosine law: intensity falls as angle from perpendicular rises",
    "Grotthus: only absorbed radiation produces an effect",
    "Arndt-Schulz: dose decides stimulate or inhibit",
    "Set lamp perpendicular and at correct distance"
  ],
  exam: [
    { h: "Introduction", p: [
      "Electromagnetic radiations used in physiotherapy include infrared (IRR), visible light, ultraviolet (UVR) and laser; ultrasound obeys similar absorption ideas.",
      "Their effect on tissue depends on intensity at the skin, which these laws govern."
    ]},
    { h: "Inverse square law", p: [
      "Intensity of radiation from a point source is inversely proportional to the square of the distance: I is proportional to 1 / d2.",
      "Doubling the distance reduces intensity to one quarter; halving it increases intensity fourfold.",
      "Application: in UVR, if the test dose was found at 50 cm and treatment is given at 100 cm, exposure time must be multiplied by four for the same dose. IRR lamps are usually placed about 50-75 cm from the skin."
    ]},
    { h: "Cosine law (Lambert)", p: [
      "Intensity at a surface is proportional to the cosine of the angle between the incident rays and the normal (perpendicular) to the surface: I = I0 cos theta.",
      "Maximum intensity when rays strike at right angles (cos 0 = 1); intensity falls as the angle increases.",
      "Application: the lamp is placed so rays fall perpendicular to the treated area; curved parts such as the shoulder or knee receive uneven doses."
    ]},
    { h: "Law of Grotthus (Grotthus-Draper)", p: [
      "Only radiation that is absorbed by a tissue can produce a chemical or biological effect; reflected or transmitted radiation has no effect there.",
      "Application: penetration and absorption depend on wavelength; UVR is absorbed in the epidermis, near infrared penetrates a few millimetres, far infrared is absorbed superficially.",
      "Arndt-Schulz law (related): weak stimuli increase activity, moderate stimuli increase it further, strong stimuli inhibit, very strong stimuli abolish. Used to explain dose windows in laser and UVR."
    ]},
    { h: "Clinical application summary", p: [
      "Lamp is set perpendicular, at a measured distance, and the skin is clean and free of creams so radiation is absorbed evenly.",
      "Record distance and time each session; any change in distance must be corrected using the inverse square law.",
      "Protect eyes with goggles for UVR and laser; check thermal sensation for IRR."
    ]},
    { h: "Conclusion", p: [
      "The inverse square law, cosine law and law of Grotthus together set the dose of every radiation treatment; misusing them is a common cause of burns or no effect."
    ]}
  ],
  tip: "Draw a point source with rays reaching two squares at distance d and 2d; the far square is four times the area. Then draw a lamp beam meeting skin at angle theta with the normal and label I = I0 cos theta.",
  evidence: [
    ["Dose correction by inverse square law in UVR", "Accurate erythema dosing; established practice", "Established physics"],
    ["Biphasic dose response in photobiomodulation", "Supported by laboratory studies; clinical dose windows still debated", "Low to moderate"]
  ],
  evidenceSource: "Clayton's Electrotherapy; Cameron, Physical Agents in Rehabilitation",
  outcomes: [
    ["Erythema grade after UVR", "Dose actually delivered"],
    ["Skin temperature and warmth report after IRR", "Thermal dose"]
  ],
  recent: [
    "LED-based photobiomodulation devices with wide beams are increasingly used, and their dosing also depends on distance and angle."
  ],
  mnemonic: {
    word: "DAG",
    items: [["D", "Distance: inverse square law"], ["A", "Angle: cosine law"], ["G", "Grotthus: only absorbed works"]],
    extra: "Double the distance, four times the time."
  },
  example: "A psoriasis patient in Chennai had a UVR test dose at 50 cm. When the lamp has to be moved to 100 cm to cover the whole back, the therapist multiplies the time by four, as the inverse square law requires.",
  flags: [
    "Moving the lamp closer without changing time: burns",
    "Unprotected eyes during UVR or laser",
    "Photosensitising drugs or creams increase absorption"
  ],
  viva: [
    ["State the inverse square law.", "Intensity is inversely proportional to the square of the distance from a point source."],
    ["At what angle is intensity maximum by the cosine law?", "When rays are perpendicular to the surface (angle zero to the normal)."],
    ["State the law of Grotthus.", "Only absorbed radiation produces an effect in the tissue."]
  ],
  refs: [
    { c: "Forster A, Palastanga N. Clayton's Electrotherapy: Theory and Practice. Chapter: Laws governing radiation" },
    { b: "cameron", ch: "Ultraviolet and infrared radiation" },
    { c: "Low J, Reed A. Electrotherapy Explained: Principles and Practice. Chapter: Electromagnetic radiation" }
  ],
  keywords: ["inverse square law", "cosine law", "Grotthus", "Arndt-Schulz", "radiation", "IRR", "UVR"],
  mcq: [
    ["If lamp distance is doubled, intensity becomes:", ["Half", "One quarter", "Double", "Four times"], 1, "I is proportional to 1 / d2."],
    ["The law stating that only absorbed radiation produces an effect is:", ["Cosine law", "Inverse square law", "Law of Grotthus", "Ohm's law"], 2, "Grotthus-Draper law."]
  ]
},
{
  id: "px-valves-cro",
  title: "Thermionic valves and the cathode ray oscilloscope",
  subject: "Physics",
  region: "Electronics",
  stages: "steps",
  aliases: ["thermionic valve", "diode valve", "triode", "thermionic emission", "CRO", "cathode ray oscilloscope", "electron gun"],
  simple: "A thermionic valve is a glass vacuum tube in which a heated cathode gives off electrons that flow to a positive anode. Diode valves rectify AC and triode valves amplify and oscillate; old SWD machines used them. The cathode ray oscilloscope uses a beam of electrons on a screen to show the shape of an electrical wave.",
  flow: [
    "Heated cathode emits electrons (thermionic emission)",
    "Diode valve: current flows one way only (rectifier)",
    "Triode adds grid: small signal controls large current",
    "Triode used as amplifier and oscillator in old SWD",
    "CRO: electron gun, deflecting plates, fluorescent screen",
    "CRO displays waveform, frequency and amplitude"
  ],
  exam: [
    { h: "Thermionic emission and the diode valve", p: [
      "Thermionic emission: release of electrons from a heated metal surface.",
      "Diode valve: an evacuated glass tube with a heated cathode (filament) and an anode (plate). Electrons flow only when the anode is positive, so current passes in one direction.",
      "Use: rectification of AC to DC (half-wave with one diode, full-wave with two)."
    ]},
    { h: "Triode valve", p: [
      "A triode adds a wire mesh grid between cathode and anode. A small change of grid voltage produces a large change of anode current.",
      "Uses: amplifier and oscillator. In older SWD machines a triode oscillator produced the 27.12 MHz current.",
      "Disadvantages: bulky, fragile, need warm-up time, produce heat and consume much power; now replaced by transistors and solid-state devices."
    ]},
    { h: "Cathode ray oscilloscope (CRO): structure", p: [
      "Electron gun: heated cathode, control grid (brightness) and accelerating and focusing anodes produce a fine electron beam.",
      "Deflection system: X plates move the beam horizontally (time base sweep); Y plates move it vertically according to the input signal.",
      "Fluorescent screen: glows where the beam strikes, drawing the waveform.",
      "All are enclosed in an evacuated glass tube."
    ]},
    { h: "Uses of CRO in physiotherapy", p: [
      "Displays and checks therapeutic waveforms from stimulators: pulse shape, pulse duration, frequency and amplitude.",
      "Calibration and fault checking of electrotherapy equipment.",
      "Earlier EMG and nerve conduction machines used CRO screens to show muscle and nerve action potentials.",
      "Today digital storage oscilloscopes and computer displays have replaced most analogue CROs, but the principle is examined."
    ]},
    { h: "Conclusion", p: [
      "Valves introduced rectification, amplification and oscillation that all therapeutic machines need, and the CRO lets the physiotherapist see the current actually delivered."
    ]}
  ],
  tip: "Draw a long glass tube: cathode and grid at the left, anodes, then two pairs of plates labelled X and Y, and the screen at the right with a sine wave on it. Draw a triode symbol separately with cathode, grid and anode labelled.",
  evidence: [
    ["Waveform verification with oscilloscope", "Detects faulty output not visible on the meter", "Expert consensus"],
    ["Solid-state versus valve oscillators", "Solid-state are smaller, more stable and efficient", "Established engineering"]
  ],
  evidenceSource: "Clayton's Electrotherapy; Low and Reed, Electrotherapy Explained",
  outcomes: [
    ["Oscilloscope trace", "Pulse width, frequency and amplitude delivered"],
    ["Service record", "Equipment calibration"]
  ],
  recent: [
    "Low-cost USB and digital storage oscilloscopes now allow departments to check stimulator output on a laptop."
  ],
  mnemonic: {
    word: "GDS",
    items: [["G", "Gun (electron gun)"], ["D", "Deflection plates X and Y"], ["S", "Screen (fluorescent)"]],
    extra: "Valve: diode rectifies, triode amplifies and oscillates."
  },
  example: "In a college lab in Madurai, students connect a faradic stimulator to an oscilloscope and see that the pulse is 1 ms long and repeats 50 times per second, matching the dial.",
  flags: [
    "Valves and CRO tubes run at high voltage: only trained staff open them",
    "Hot valve surfaces can burn",
    "Ageing valve oscillators drift in frequency"
  ],
  viva: [
    ["What is thermionic emission?", "Emission of electrons from a heated metal surface."],
    ["What does the grid in a triode do?", "Controls the anode current; a small grid change gives a large current change."],
    ["Which plates give the time base in a CRO?", "The X (horizontal) plates."]
  ],
  refs: [
    { c: "Forster A, Palastanga N. Clayton's Electrotherapy: Theory and Practice. Chapter: Thermionic valves and the oscilloscope" },
    { c: "Low J, Reed A. Electrotherapy Explained: Principles and Practice. Chapter: Electronic components" }
  ],
  keywords: ["thermionic valve", "diode", "triode", "oscillator", "CRO", "electron gun", "waveform"],
  mcq: [
    ["In a CRO, the signal to be studied is applied to the:", ["X plates", "Y plates", "Cathode", "Screen"], 1, "Y plates give vertical deflection proportional to the signal; X plates give time base."],
    ["Old SWD machines produced high frequency using a:", ["Diode valve", "Triode valve oscillator", "Rheostat", "Transformer only"], 1, "A triode in an oscillator circuit generated the high frequency."]
  ]
},
{
  id: "px-semiconductors",
  title: "Semiconductors, rectifiers and oscillators",
  subject: "Physics",
  region: "Electronics",
  stages: "steps",
  aliases: ["semiconductor", "p-n junction", "diode", "transistor", "rectifier", "bridge rectifier", "oscillator", "multivibrator"],
  simple: "Semiconductors such as silicon conduct electricity better than insulators but less than metals, and adding impurities makes p-type and n-type material. A p-n junction diode lets current flow one way, so it can rectify AC into DC. Transistors amplify signals and, with suitable circuits, oscillate to produce the pulses and high frequencies used in electrotherapy machines.",
  flow: [
    "Pure silicon or germanium is a weak conductor",
    "Doping makes n-type (electrons) and p-type (holes)",
    "p-n junction diode conducts in forward bias only",
    "Rectifier: diodes convert AC to DC, capacitor smooths",
    "Transistor amplifies and switches",
    "Oscillator circuits generate therapeutic frequencies"
  ],
  exam: [
    { h: "Semiconductors", p: [
      "Materials with conductivity between conductors and insulators (silicon, germanium); conductivity rises with temperature.",
      "Intrinsic semiconductor: pure crystal. Extrinsic: doped with impurity.",
      "n-type: doped with a pentavalent element (for example phosphorus), extra free electrons are majority carriers.",
      "p-type: doped with a trivalent element (for example boron), holes are majority carriers."
    ]},
    { h: "p-n junction diode", p: [
      "Where p and n regions meet, a depletion layer forms.",
      "Forward bias (p to positive): depletion layer narrows and current flows. Reverse bias: depletion layer widens and almost no current flows.",
      "Special diodes: Zener diode (voltage regulation), LED (light emitting; used in LED photobiomodulation), laser diode (used in low-level laser units), photodiode."
    ]},
    { h: "Rectifiers", p: [
      "Half-wave rectifier: one diode passes only one half of each AC cycle; output is pulsating DC.",
      "Full-wave rectifier: two diodes with a centre-tapped transformer, or four diodes in a bridge, use both halves of the cycle.",
      "Smoothing: a capacitor (and sometimes a choke) across the output fills the gaps to give steady DC.",
      "Application: constant galvanic current for iontophoresis and the DC power supply inside every stimulator."
    ]},
    { h: "Transistors and oscillators", p: [
      "Transistor: three-layer device (npn or pnp) with emitter, base and collector; a small base current controls a large collector current, so it amplifies or acts as a switch.",
      "Oscillator: an amplifier with positive feedback and a tuned (LC) or RC network that sustains continuous oscillation. Frequency of an LC oscillator f = 1 / (2 pi square root of LC).",
      "Multivibrator (astable): two transistors switching alternately produce square pulses; used to generate faradic, TENS and interrupted DC pulses.",
      "High-frequency oscillators drive SWD (27.12 MHz) and microwave units; piezoelectric crystals driven by oscillators produce ultrasound at 1 or 3 MHz."
    ]},
    { h: "Advantages of solid-state electronics", p: [
      "Small, light, robust, low power, no warm-up time, more stable output, battery operation possible (portable TENS).",
      "Microcontrollers now generate precise programmable waveforms."
    ]},
    { h: "Conclusion", p: [
      "Semiconductor diodes, transistors and oscillators form the heart of modern electrotherapy equipment, turning mains AC into the controlled therapeutic currents the physiotherapist selects."
    ]}
  ],
  tip: "Draw the bridge rectifier as a diamond of four diodes with AC input on two corners and DC output on the other two, and show the output wave before and after a smoothing capacitor. Add a simple block diagram: mains, transformer, rectifier, oscillator, output to patient.",
  evidence: [
    ["Portable battery TENS units", "Allow home use for pain control; evidence for TENS is mixed but supportive in some pain", "Low to moderate"],
    ["Diode laser and LED photobiomodulation", "Some benefit in selected conditions; dosing varies", "Low to moderate"]
  ],
  evidenceSource: "Low and Reed, Electrotherapy Explained; Johnson et al, systematic review and meta-analysis of TENS for pain (BMJ Open 2022)",
  outcomes: [
    ["Output waveform check", "Correct rectification and pulse shape"],
    ["Battery and output test", "Portable unit function"]
  ],
  recent: [
    "Wearable stimulators controlled by smartphone apps use microcontrollers and switching transistors instead of discrete oscillator circuits."
  ],
  mnemonic: {
    word: "TROD",
    items: [["T", "Transformer reduces voltage"], ["R", "Rectifier makes DC"], ["O", "Oscillator makes waveform"], ["D", "Dial controls intensity to patient"]],
    extra: "n-type = negative electrons; p-type = positive holes."
  },
  example: "A portable TENS unit given to a 50-year-old teacher in Tirunelveli runs on a 9 V battery; inside, transistor switching circuits produce 100 Hz pulses of 200 microseconds.",
  flags: [
    "Faulty rectifier can let AC ripple reach a galvanic treatment",
    "Overheating components in poorly ventilated machines",
    "Damaged battery units can give erratic output"
  ],
  viva: [
    ["What is doping?", "Adding a small amount of impurity to a semiconductor to increase its conductivity."],
    ["How many diodes are in a bridge rectifier?", "Four."],
    ["What makes an amplifier oscillate?", "Positive feedback with a frequency-selective network."]
  ],
  refs: [
    { c: "Low J, Reed A. Electrotherapy Explained: Principles and Practice. Chapter: Electronic components and circuits" },
    { c: "Forster A, Palastanga N. Clayton's Electrotherapy: Theory and Practice. Chapter: Semiconductors and rectification" },
    { c: "Johnson MI et al. Efficacy and safety of transcutaneous electrical nerve stimulation (TENS) for acute and chronic pain in adults: a systematic review and meta-analysis. BMJ Open 2022", q: "Johnson TENS meta-analysis BMJ Open 2022" }
  ],
  keywords: ["semiconductor", "p-n junction", "diode", "rectifier", "transistor", "oscillator", "multivibrator"],
  mcq: [
    ["In n-type semiconductor the majority carriers are:", ["Holes", "Electrons", "Protons", "Ions"], 1, "Pentavalent doping adds free electrons."],
    ["A full-wave bridge rectifier uses:", ["One diode", "Two diodes", "Three diodes", "Four diodes"], 3, "Four diodes arranged in a bridge."]
  ]
},
{
  id: "px-meters",
  title: "Meters: ammeter, voltmeter, ohmmeter and Wheatstone bridge",
  subject: "Physics",
  region: "Electronics",
  stages: "steps",
  aliases: ["moving coil galvanometer", "ammeter", "milliammeter", "voltmeter", "ohmmeter", "Wheatstone bridge", "shunt"],
  simple: "Most electrical meters are built from a moving coil galvanometer, which deflects when current passes through it. Adding a small resistance in parallel makes it an ammeter, and a large resistance in series makes it a voltmeter. The Wheatstone bridge compares resistances very precisely and is used inside many measuring devices.",
  flow: [
    "Moving coil galvanometer: coil turns in magnetic field",
    "Ammeter: galvanometer + low shunt in parallel, in series",
    "Voltmeter: galvanometer + high resistance in series, in parallel",
    "Ohmmeter: battery drives current; scale reads ohms",
    "Wheatstone bridge balances when P/Q = R/S",
    "Milliammeter on stimulators shows patient current"
  ],
  exam: [
    { h: "Moving coil galvanometer", p: [
      "A coil pivoted between the poles of a permanent magnet; current through the coil produces a torque so it turns against a spring; the pointer deflection is proportional to current.",
      "Detects small currents; it is the basis of ammeters and voltmeters. Reads DC; for AC a rectifier is added."
    ]},
    { h: "Ammeter and milliammeter", p: [
      "Measures current; connected in series with the circuit.",
      "Made by placing a low resistance (shunt) in parallel with the galvanometer, so most current bypasses the coil. Ideal ammeter has very low resistance.",
      "Milliammeter on electrotherapy machines (galvanic, faradic, iontophoresis) shows the actual current in the patient circuit, needed for dose (for example mA-minutes in iontophoresis)."
    ]},
    { h: "Voltmeter", p: [
      "Measures potential difference; connected in parallel across the component.",
      "Made by placing a high resistance in series with the galvanometer. Ideal voltmeter has very high resistance so it draws almost no current."
    ]},
    { h: "Ohmmeter and multimeter", p: [
      "Ohmmeter: an internal battery drives current through the unknown resistance; the scale is calibrated in ohms (reverse, non-linear scale: zero at full deflection).",
      "Multimeter combines ammeter, voltmeter and ohmmeter; used to check leads, electrodes and continuity of the earth wire."
    ]},
    { h: "Wheatstone bridge", p: [
      "Four resistances P, Q, R, S arranged in a diamond, with a galvanometer across one diagonal and a battery across the other.",
      "At balance (no galvanometer deflection) P / Q = R / S, so an unknown resistance can be found precisely.",
      "Applications: strain gauges in force transducers, load cells in dynamometers and force plates, and some temperature-sensing circuits use the bridge principle."
    ]},
    { h: "Conclusion", p: [
      "Meters let the physiotherapist know the exact current or voltage delivered, check equipment safety and measure forces, so they are essential for safe and reproducible treatment."
    ]}
  ],
  tip: "Draw the galvanometer G with a small shunt S in parallel (ammeter) and a large R in series (voltmeter). Then draw the Wheatstone bridge diamond with P, Q, R, S, galvanometer in the middle and write P/Q = R/S.",
  evidence: [
    ["Current-based dosing in iontophoresis", "Reproducible dose in mA-min", "Expert consensus"],
    ["Strain gauge dynamometers", "Reliable measurement of muscle force", "Moderate to high reliability"]
  ],
  evidenceSource: "Clayton's Electrotherapy; reliability studies of handheld dynamometry",
  outcomes: [
    ["Milliammeter reading", "Treatment current"],
    ["Handheld dynamometer (strain gauge) force", "Muscle strength"]
  ],
  recent: [
    "Digital handheld dynamometers using strain gauge bridges are now affordable and reliable for clinical strength testing."
  ],
  mnemonic: {
    word: "A-S-P, V-S-S",
    items: [["Ammeter", "Shunt in Parallel, meter in series"], ["Voltmeter", "Series resistor, meter across (parallel)"]],
    extra: "Bridge balance: P/Q = R/S."
  },
  example: "During iontophoresis with dexamethasone in Chennai, the physiotherapist watches the milliammeter to keep the current at 2 mA for 20 minutes, giving a 40 mA-min dose.",
  flags: [
    "Ammeter connected in parallel can short-circuit and damage the meter",
    "Never use a meter beyond its range",
    "A broken milliammeter hides an overdose"
  ],
  viva: [
    ["How is a galvanometer converted to an ammeter?", "By connecting a low resistance shunt in parallel."],
    ["What is the balance condition of a Wheatstone bridge?", "P/Q = R/S."],
    ["Why must a voltmeter have high resistance?", "So it draws negligible current and does not disturb the circuit."]
  ],
  refs: [
    { c: "Forster A, Palastanga N. Clayton's Electrotherapy: Theory and Practice. Chapter: Measuring instruments" },
    { c: "Low J, Reed A. Electrotherapy Explained: Principles and Practice. Chapter: Measurement" }
  ],
  keywords: ["galvanometer", "ammeter", "voltmeter", "ohmmeter", "Wheatstone bridge", "shunt", "multimeter"],
  mcq: [
    ["An ammeter is connected:", ["In parallel", "In series", "Across the battery only", "To earth"], 1, "It must carry the circuit current, so it is placed in series."],
    ["A Wheatstone bridge is balanced when:", ["P/Q = R/S", "P + Q = R + S", "P x R = Q / S", "Galvanometer shows maximum deflection"], 0, "No current flows through the galvanometer at P/Q = R/S."]
  ]
},
{
  id: "px-therapeutic-energies",
  title: "Therapeutic energies: thermal, mechanical, electrical and electromagnetic",
  subject: "Physics",
  region: "Electrotherapy physics",
  stages: "steps",
  aliases: ["physical agents", "modes of heat transfer", "conduction convection radiation conversion", "electromagnetic spectrum", "mechanical energy", "therapeutic modalities classification"],
  simple: "Physiotherapists use energy in four main forms: heat and cold (thermal), movement and vibration (mechanical), electric current (electrical) and electromagnetic waves (radiation). Each form enters the body in a particular way and has particular effects. Knowing the form of energy helps choose the right machine, dose and safety checks.",
  flow: [
    "Energy delivered to tissue produces physiological effect",
    "Thermal: conduction, convection, radiation, conversion",
    "Mechanical: ultrasound, traction, massage, compression, vibration",
    "Electrical: currents that stimulate nerve and muscle",
    "Electromagnetic: SWD, microwave, IR, visible, UV, laser",
    "Choose energy by depth, target tissue and safety"
  ],
  exam: [
    { h: "Introduction", p: [
      "Physical agents are forms of energy applied to the body to produce therapeutic effects. Energy can be transferred and converted but not destroyed.",
      "Classification by energy form: thermal, mechanical, electrical and electromagnetic."
    ]},
    { h: "Thermal energy", p: [
      "Conduction (direct contact): hot packs, paraffin wax, ice packs. Superficial, about 1-2 cm.",
      "Convection (moving fluid or air): whirlpool, fluidotherapy, hydrotherapy pool.",
      "Radiation: infrared lamps transfer heat without contact.",
      "Conversion: another energy turns into heat inside tissue: SWD, microwave diathermy and continuous ultrasound (deep heating).",
      "Effects of heat: vasodilation, increased metabolism, pain relief, reduced spasm, increased collagen extensibility. Cold: vasoconstriction, reduced metabolism, reduced nerve conduction velocity, reduced pain and swelling."
    ]},
    { h: "Mechanical energy", p: [
      "Ultrasound: mechanical pressure waves at 1 MHz (deeper, about 2-5 cm) or 3 MHz (superficial, about 1-2 cm); thermal or non-thermal (pulsed) effects.",
      "Traction, compression (intermittent pneumatic compression), massage, vibration and extracorporeal shock wave therapy.",
      "Effects: tissue stretch, fluid movement, mechanotransduction in cells."
    ]},
    { h: "Electrical energy", p: [
      "Currents applied through electrodes: direct (galvanic, iontophoresis), low frequency (TENS, faradic, interrupted DC), medium frequency (IFT, Russian).",
      "Effects: nerve depolarisation for pain modulation and muscle contraction; ion movement; tissue healing claims (weaker evidence)."
    ]},
    { h: "Electromagnetic energy", p: [
      "Spectrum used in therapy, from long to short wavelength: radio frequency (SWD 27.12 MHz), microwave (2450 MHz), infrared (about 770 nm - 1 mm; IRR lamps, near infrared lasers), visible light, ultraviolet (about 100-400 nm; UVA, UVB, UVC).",
      "Longer wavelength in the radio range penetrates deeper as heat; infrared heats superficially; UV causes photochemical effects (erythema, vitamin D synthesis) without significant heat.",
      "Laser: monochromatic, coherent, collimated light used for photobiomodulation."
    ]},
    { h: "Selection and safety", p: [
      "Choose by target depth, tissue type, stage of healing and patient factors.",
      "Common checks: thermal sensation, circulation, metal implants, pacemakers, pregnancy, malignancy, skin integrity.",
      "Physical agents should support active exercise and education, not replace them."
    ]},
    { h: "Conclusion", p: [
      "Classifying modalities by energy form helps students link physics to effects, depth, dosage and contraindications of each piece of equipment."
    ]}
  ],
  tip: "Draw a four-box chart (thermal, mechanical, electrical, electromagnetic) with two or three devices in each. Under it draw the electromagnetic spectrum as a long arrow from radio waves to UV, marking SWD, microwave, IR, visible and UV with their wavelengths.",
  evidence: [
    ["Superficial heat for acute and subacute low back pain", "Small short-term pain relief", "Moderate"],
    ["Therapeutic ultrasound for musculoskeletal pain", "Limited evidence of benefit over placebo", "Low"],
    ["Physical agents as adjunct to exercise", "Exercise remains the core intervention", "Moderate"]
  ],
  evidenceSource: "Cameron, Physical Agents in Rehabilitation; French et al, Cochrane review of superficial heat or cold for low back pain (2006)",
  outcomes: [
    ["NPRS", "Pain response to modality"],
    ["Goniometry", "Range after heat and stretch"]
  ],
  recent: [
    "Clinical practice guidelines increasingly place passive physical agents as optional adjuncts, with exercise and education as first-line care."
  ],
  mnemonic: {
    word: "TMEE",
    items: [["T", "Thermal: hot packs, wax, ice"], ["M", "Mechanical: ultrasound, traction, massage"], ["E", "Electrical: TENS, NMES, IFT"], ["E", "Electromagnetic: SWD, IR, UV, laser"]],
    extra: "Heat transfer: Conduction, Convection, Radiation, Conversion (CCRC)."
  },
  example: "A 35-year-old software engineer in Bengaluru with neck stiffness receives a hot pack (conduction) before exercises, while a colleague with chronic knee OA gets SWD (conversion) for deeper heating.",
  flags: [
    "Impaired sensation or circulation with any thermal agent",
    "Pacemakers with electrical and electromagnetic agents",
    "Eyes and UV or laser exposure",
    "Malignancy and pregnancy over the treatment area"
  ],
  viva: [
    ["Give an example of heating by conversion.", "SWD, microwave diathermy or continuous ultrasound."],
    ["What frequency of ultrasound treats deeper tissue?", "1 MHz."],
    ["Which radiation produces vitamin D in skin?", "Ultraviolet B."]
  ],
  refs: [
    { b: "cameron", ch: "Physical agents: introduction and classification" },
    { b: "prentice", ch: "Classification of therapeutic modalities" },
    { c: "French SD et al. Superficial heat or cold for low back pain. Cochrane Database Syst Rev 2006", q: "French superficial heat cold low back pain Cochrane" }
  ],
  keywords: ["physical agents", "thermal", "mechanical", "electrical", "electromagnetic spectrum", "conduction", "conversion"],
  mcq: [
    ["Paraffin wax heats by:", ["Conduction", "Convection", "Conversion", "Radiation"], 0, "Direct contact transfer of heat is conduction."],
    ["Ultrasound is which form of energy?", ["Electromagnetic", "Mechanical", "Electrical", "Chemical"], 1, "Ultrasound is a mechanical pressure wave."]
  ]
},
{
  id: "px-therapeutic-currents",
  title: "Low frequency, medium frequency and direct currents",
  subject: "Physics",
  region: "Electrotherapy physics",
  stages: "steps",
  aliases: ["low frequency current", "medium frequency current", "galvanic current", "faradic current", "IFT", "Russian current", "TENS", "interrupted direct current"],
  simple: "Therapeutic currents are grouped by frequency. Direct current flows one way and is used for iontophoresis and for stimulating denervated muscle with long pulses. Low frequency currents (below 1000 Hz) stimulate nerves directly, as in TENS and faradic, while medium frequency currents (1000-10000 Hz) such as IFT and Russian current pass the skin comfortably and are modulated to stimulate.",
  flow: [
    "Classify currents by frequency and direction",
    "Direct current: galvanic constant or interrupted long pulses",
    "Low frequency (below 1 kHz): TENS, faradic, NMES",
    "Medium frequency (1-10 kHz): IFT, Russian, AMF",
    "High frequency (above 100 kHz): heat, no stimulation",
    "Set frequency, pulse duration, intensity, time"
  ],
  exam: [
    { h: "Classification", p: [
      "Direct current: constant (galvanic) or interrupted (pulsed unidirectional).",
      "Low frequency: 1-1000 Hz, each pulse can produce a nerve action potential.",
      "Medium frequency: 1000-10000 Hz (1-10 kHz); individual cycles are too short to stimulate one by one, so they are modulated (beat or burst).",
      "High frequency: above 100 kHz (SWD, microwave); no nerve stimulation, used for heating."
    ]},
    { h: "Direct current", p: [
      "Constant galvanic current: polar effects, acid under anode and alkali under cathode; used for iontophoresis (current density usually kept below about 0.5 mA per square cm, dose often about 40-80 mA-min).",
      "Interrupted direct current (IDC): long-duration rectangular or triangular pulses (about 100-300 ms, 30 pulses per minute) to stimulate denervated muscle, which needs long pulses.",
      "Dangers: chemical burns, so check skin and use well-soaked pads or buffered electrodes."
    ]},
    { h: "Low frequency currents", p: [
      "Faradic type: pulse duration 0.1-1 ms, frequency 50-100 Hz, surged to produce tetanic contraction of innervated muscle (muscle re-education, pelvic floor training).",
      "TENS: biphasic pulses 50-250 microseconds; conventional 80-120 Hz at strong comfortable tingling; acupuncture-like 2-4 Hz at higher intensity; for pain modulation.",
      "NMES or functional electrical stimulation: 20-50 Hz, 200-400 microseconds, with on and off times, for strengthening and function (for example foot drop)."
    ]},
    { h: "Medium frequency currents", p: [
      "Interferential therapy (IFT): two medium frequency currents (for example 4000 Hz and 4100 Hz) cross in the tissue and produce a beat (amplitude modulated) frequency equal to the difference (0-250 Hz). Used for pain and in some clinics for stimulation; evidence modest.",
      "Russian current: 2500 Hz carrier delivered in 50 Hz bursts (10 ms on, 10 ms off), with a 10 s on, 50 s off cycle for strengthening.",
      "Advantage: lower skin impedance at medium frequency, so more comfortable for deeper stimulation."
    ]},
    { h: "Common dangers and contraindications", p: [
      "Dangers: electric shock, burns (especially DC), skin irritation, muscle fatigue or soreness.",
      "Contraindications: pacemaker or implanted defibrillator, over the anterior neck or carotid sinus, over the pregnant uterus, active malignancy, DVT, broken or anaesthetic skin, epilepsy (head and neck), over the eyes, cognitively impaired patient who cannot report sensation."
    ]},
    { h: "Conclusion", p: [
      "Frequency and pulse duration decide what a current does: DC moves ions and stimulates denervated muscle, low frequency stimulates nerves, and medium frequency penetrates comfortably; the physiotherapist chooses parameters accordingly."
    ]}
  ],
  tip: "Draw a horizontal frequency line from 0 Hz to MHz and mark DC, low (up to 1 kHz), medium (1-10 kHz) and high (above 100 kHz) with example machines. Under it sketch three waveforms: constant DC, faradic surged pulses and two IFT sine waves producing a beat envelope.",
  evidence: [
    ["NMES for quadriceps strength after knee surgery", "Improves early quadriceps strength when added to exercise", "Moderate"],
    ["TENS for pain", "Pain reduction during and soon after use; quality of trials variable", "Low to moderate"],
    ["IFT for musculoskeletal pain", "Possible short-term benefit, often as adjunct", "Low"]
  ],
  evidenceSource: "Johnson et al, BMJ Open 2022 TENS meta-analysis; Cameron, Physical Agents in Rehabilitation",
  outcomes: [
    ["NPRS", "Pain response to TENS or IFT"],
    ["Manual muscle test or dynamometry", "Strength with NMES"],
    ["Strength-duration curve", "Innervation status before choosing DC pulses"]
  ],
  recent: [
    "Wearable NMES and functional electrical stimulation devices for foot drop and home strengthening are becoming common in India."
  ],
  mnemonic: {
    word: "D-L-M-H",
    items: [["D", "Direct: ions and denervated muscle"], ["L", "Low (below 1 kHz): TENS, faradic"], ["M", "Medium (1-10 kHz): IFT, Russian"], ["H", "High (above 100 kHz): heat only"]],
    extra: "Russian: 2500 Hz, 50 bursts, 10/50/10."
  },
  example: "A 30-year-old man in Madurai with a radial nerve injury shows reaction of degeneration. His wrist extensors respond only to long-duration interrupted DC pulses, while his innervated biceps responds to faradic current.",
  flags: [
    "Pacemaker or implanted defibrillator",
    "Anterior neck or carotid sinus, and over the pregnant uterus",
    "Broken skin or loss of sensation under electrodes",
    "Constant DC: risk of chemical burn"
  ],
  viva: [
    ["What is the beat frequency in IFT with 4000 Hz and 4100 Hz?", "100 Hz."],
    ["Why does denervated muscle need long pulses?", "Without nerve supply the muscle membrane has a much higher chronaxie and needs pulses of about 100 ms or more."],
    ["What are Russian current parameters?", "2500 Hz carrier in 50 Hz bursts, 10 s on and 50 s off, for 10 contractions."]
  ],
  refs: [
    { b: "cameron", ch: "Electrical currents for pain control and muscle contraction" },
    { b: "prentice", ch: "Basic principles of electricity and electrical stimulating currents" },
    { c: "Forster A, Palastanga N. Clayton's Electrotherapy: Theory and Practice. Chapter: Low and medium frequency currents" }
  ],
  keywords: ["direct current", "galvanic", "low frequency", "medium frequency", "IFT", "Russian current", "TENS", "faradic"],
  mcq: [
    ["Medium frequency currents range from:", ["0-100 Hz", "100-1000 Hz", "1-10 kHz", "1-10 MHz"], 2, "Medium frequency is usually 1000-10000 Hz."],
    ["Which current is used to stimulate denervated muscle?", ["Faradic", "Interrupted direct current with long pulses", "Conventional TENS", "SWD"], 1, "Denervated muscle needs pulses of about 100 ms or longer."]
  ]
},
{
  id: "px-computer-basics",
  title: "Computer basics: parts of a computer and working principles",
  subject: "Professional practice",
  region: "Computer applications",
  stages: "steps",
  aliases: ["parts of computer", "CPU", "input output devices", "hardware software", "memory RAM ROM", "operating system", "block diagram of computer"],
  simple: "A computer is an electronic machine that takes in data, processes it by following a set of instructions (a program), stores it and gives out results. Its physical parts are hardware; the programs are software. Physiotherapists use computers for records, exercise handouts, outcome scoring, research and computerised equipment.",
  flow: [
    "Input: keyboard, mouse, scanner, sensors enter data",
    "CPU: control unit and ALU process the data",
    "Memory: RAM holds working data, ROM holds start-up code",
    "Storage: hard disk, SSD, pen drive, cloud keep files",
    "Output: monitor, printer, speakers give results",
    "Software: operating system and application programs run everything"
  ],
  exam: [
    { h: "Definition and characteristics", p: [
      "Computer: a programmable electronic device that accepts input, processes it according to stored instructions, stores data and produces output.",
      "Characteristics: speed, accuracy, storage capacity, automation, versatility and diligence (no fatigue); it has no judgement of its own (garbage in, garbage out).",
      "Data is represented in binary (0 and 1); 8 bits make a byte; capacity is given in KB, MB, GB and TB."
    ]},
    { h: "Block diagram and working principle", p: [
      "Input-Process-Output (IPO) cycle with storage, based on the stored-program (von Neumann) idea where instructions and data share memory.",
      "Central processing unit (CPU): control unit (directs operations), arithmetic logic unit (calculations and comparisons) and registers.",
      "The CPU fetches an instruction from memory, decodes it, executes it and stores the result (fetch-decode-execute cycle), millions of times per second (clock speed in GHz)."
    ]},
    { h: "Hardware", p: [
      "Input devices: keyboard, mouse, touch screen, scanner, webcam, microphone, barcode reader; in physiotherapy also force plates, EMG and goniometer sensors.",
      "Output devices: monitor, printer, speakers, projector.",
      "Primary memory: RAM (volatile, working memory) and ROM (non-volatile, holds start-up firmware); cache for speed.",
      "Secondary storage: hard disk, solid state drive, pen drive, optical disc, cloud storage."
    ]},
    { h: "Software", p: [
      "System software: operating system (Windows, Linux, macOS, Android) that manages hardware, files and memory; utilities such as antivirus.",
      "Application software: word processor, spreadsheet, presentation, database, hospital information systems, exercise prescription software.",
      "Programming languages translate human instructions into machine code (compilers and interpreters)."
    ]},
    { h: "Types and generations", p: [
      "By size: supercomputer, mainframe, minicomputer (server), microcomputer (desktop, laptop, tablet, smartphone).",
      "Generations: vacuum tubes, transistors, integrated circuits, microprocessors, and the current era of artificial intelligence and networked devices."
    ]},
    { h: "Uses in physiotherapy", p: [
      "Electronic medical records and SOAP notes, appointment scheduling and billing.",
      "Exercise handouts with pictures, home programme videos and patient education slides.",
      "Microprocessor-controlled electrotherapy, isokinetic dynamometers, gait analysis and biofeedback units.",
      "Research: literature search, data entry in spreadsheets and statistical analysis.",
      "Care: back up data, protect patient confidentiality with passwords and keep posture ergonomic at the workstation."
    ]},
    { h: "Conclusion", p: [
      "Knowing the parts and working of a computer lets the physiotherapist use clinical software, modern equipment and research tools safely and efficiently."
    ]}
  ],
  tip: "Draw the block diagram: Input box on the left, CPU in the centre (control unit and ALU inside) with Memory below it, Output on the right; arrows for data flow and dotted arrows for control signals. Add Secondary storage linked to memory.",
  evidence: [
    ["Electronic health records", "Improve legibility and access to notes; benefits depend on good implementation", "Moderate"],
    ["Computer-generated exercise handouts with pictures", "Patients remember and follow programmes better than verbal advice alone", "Low to moderate"]
  ],
  evidenceSource: "General health informatics literature; textbook knowledge (Rajaraman, Fundamentals of Computers)",
  outcomes: [
    ["Practical skill test", "Ability to create, save and retrieve a patient file"],
    ["Typing speed and accuracy", "Basic keyboard competence"]
  ],
  recent: [
    "India's Ayushman Bharat Digital Mission gives citizens an ABHA health ID so records can be linked digitally across providers."
  ],
  mnemonic: {
    word: "I-P-O-S",
    items: [["I", "Input"], ["P", "Process (CPU: CU + ALU)"], ["O", "Output"], ["S", "Storage (RAM, ROM, disk)"]],
    extra: "Hardware you can touch; software you cannot."
  },
  example: "A BPT intern in Coimbatore types her SOAP note for a knee replacement patient into the hospital system, prints a picture-based home exercise sheet, and saves the outcome scores for her project in a spreadsheet.",
  flags: [
    "Loss of patient data without backup",
    "Sharing patient files on unsecured devices breaks confidentiality",
    "Prolonged poor sitting posture at the computer causes neck and back pain"
  ],
  viva: [
    ["What are the parts of a CPU?", "Control unit, arithmetic logic unit and registers."],
    ["Difference between RAM and ROM?", "RAM is volatile working memory; ROM is non-volatile and holds permanent start-up instructions."],
    ["Give two uses of computers in physiotherapy.", "Electronic records and computer-controlled equipment such as isokinetic dynamometers."]
  ],
  refs: [
    { c: "Rajaraman V, Adabala N. Fundamentals of Computers. Chapter: Computer organisation" },
    { c: "Sinha PK, Sinha P. Computer Fundamentals. Chapter: Basic computer organisation" }
  ],
  keywords: ["computer", "CPU", "ALU", "RAM", "ROM", "hardware", "software", "input output"],
  mcq: [
    ["Which memory loses its contents when power is switched off?", ["ROM", "Hard disk", "RAM", "Pen drive"], 2, "RAM is volatile."],
    ["The part of the CPU that performs calculations and comparisons is the:", ["Arithmetic logic unit", "Control unit", "Monitor", "Cache"], 0, "The ALU does arithmetic and logical operations."]
  ]
},
{
  id: "px-office-software",
  title: "MS Office, Corel Draw, Photoshop and web designing for physiotherapists",
  subject: "Professional practice",
  region: "Computer applications",
  stages: "steps",
  aliases: ["MS Word", "MS Excel", "PowerPoint", "Corel Draw", "Photoshop", "web designing HTML", "application software"],
  simple: "Application software helps us do everyday work on a computer. MS Word makes documents, Excel handles tables and calculations, PowerPoint makes slides, Corel Draw makes vector drawings, Photoshop edits photos and web designing builds websites. A physiotherapist uses them for reports, data, teaching and promoting a clinic.",
  flow: [
    "Word: type, format and print reports and letters",
    "Excel: tables, formulas, charts for patient data",
    "PowerPoint: slides for seminars and patient education",
    "Corel Draw: vector drawings, posters, logos",
    "Photoshop: edit photos, posture images with care",
    "Web design: HTML pages for a clinic or project"
  ],
  exam: [
    { h: "Introduction", p: [
      "Application software performs specific user tasks on top of the operating system. MS Office is a suite of such programs; free alternatives include LibreOffice and Google Docs, Sheets and Slides."
    ]},
    { h: "MS Word (word processor)", p: [
      "Create, edit, format and print documents: fonts, paragraphs, bullets, tables, headers and footers, page numbers.",
      "Useful tools: spell check, track changes, mail merge (letters to many patients), templates, insert images, table of contents and references for a project report.",
      "Physiotherapy uses: assessment formats, discharge summaries, referral letters, exercise handouts, dissertation."
    ]},
    { h: "MS Excel (spreadsheet)", p: [
      "Data in rows and columns of cells; formulas (=SUM, =AVERAGE, =STDEV, =IF), sorting, filtering and charts (bar, line, pie).",
      "Physiotherapy uses: outcome score records, attendance, inventory of equipment, entering project data and simple statistics before SPSS."
    ]},
    { h: "MS PowerPoint and Access", p: [
      "PowerPoint: slides with text, images, animation and video for seminars, case presentations and patient education. Keep slides simple: few words, large font, clear images.",
      "Access: database for patient registers and searching records (many clinics now use dedicated software instead)."
    ]},
    { h: "Corel Draw and Photoshop", p: [
      "Corel Draw: vector graphics (made of lines and curves, can be enlarged without blur); used for posters, logos, brochures, flow charts and anatomical line diagrams.",
      "Photoshop: raster (pixel) image editing; crop, resize, adjust brightness, add labels and layers; used for posture photographs, before-and-after images and presentation figures.",
      "Ethics: never alter clinical images to change findings; obtain consent and hide the patient's identity (face, name) before using photos."
    ]},
    { h: "Web designing", p: [
      "Web pages are written in HTML (structure), styled with CSS (appearance) and made interactive with JavaScript; hosted on a web server with a domain name.",
      "Tools: text editors, website builders and content management systems (for example WordPress).",
      "Uses: clinic website, online appointment form, home exercise video pages, departmental notices; follow advertising ethics and data privacy rules."
    ]},
    { h: "Conclusion", p: [
      "Basic skill in office, graphics and web software lets a physiotherapist document, analyse, teach and communicate professionally."
    ]}
  ],
  tip: "Draw a table with four columns: Software, Type, Main features, Physiotherapy use. Fill rows for Word, Excel, PowerPoint, Corel Draw, Photoshop and HTML. Add a small sketch comparing a vector circle (smooth when enlarged) with a raster circle (pixelated).",
  evidence: [
    ["Written plus visual exercise instructions", "Better recall and adherence than verbal instructions alone", "Low to moderate"],
    ["Spreadsheet-based data entry with checks", "Reduces data entry errors in research", "Expert consensus"]
  ],
  evidenceSource: "Health education and research methods literature; Portney and Watkins, Foundations of Clinical Research",
  outcomes: [
    ["Practical exam task", "Make a formatted report, a chart and a 5-slide presentation"],
    ["Peer review of handouts", "Clarity and readability of patient materials"]
  ],
  recent: [
    "Free cloud office suites allow students and therapists to share and edit documents together in real time."
  ],
  mnemonic: {
    word: "WEP-CPW",
    items: [["W", "Word: write"], ["E", "Excel: enumerate and calculate"], ["P", "PowerPoint: present"], ["C", "Corel: curves (vector)"], ["P", "Photoshop: pixels (raster)"], ["W", "Web: HTML, CSS, JavaScript"]],
    extra: "Vector stays sharp; pixels blur when enlarged."
  },
  example: "A final-year BPT student in Salem enters her low back pain project scores in Excel, makes a bar chart, pastes it into her Word report and presents the results in PowerPoint, after blurring patients' faces in Photoshop.",
  flags: [
    "Using patient photographs without consent",
    "Editing clinical images in a way that misrepresents findings",
    "Pirated software may carry malware and is illegal"
  ],
  viva: [
    ["Which software is a spreadsheet?", "MS Excel."],
    ["Difference between Corel Draw and Photoshop?", "Corel Draw makes vector graphics; Photoshop edits pixel-based raster images."],
    ["What does HTML stand for?", "HyperText Markup Language."]
  ],
  refs: [
    { c: "Rajaraman V, Adabala N. Fundamentals of Computers. Chapter: Application software" },
    { c: "Portney LG. Foundations of Clinical Research: Applications to Evidence-Based Practice. Chapter: Data management" }
  ],
  keywords: ["MS Office", "Word", "Excel", "PowerPoint", "Corel Draw", "Photoshop", "HTML", "web design"],
  mcq: [
    ["Images that stay sharp at any size are:", ["Raster images", "Vector images", "JPEG photos", "Scanned images"], 1, "Vector graphics are made of paths, not pixels."],
    ["The Excel function for mean is:", ["=SUM", "=COUNT", "=MAX", "=AVERAGE"], 3, "=AVERAGE gives the arithmetic mean."]
  ]
},
{
  id: "px-internet-telehealth",
  title: "Internet, teleconferencing and videoconferencing (telerehabilitation)",
  subject: "Professional practice",
  region: "Computer applications",
  stages: "steps",
  aliases: ["internet", "email", "teleconferencing", "videoconferencing", "telerehabilitation", "telemedicine", "WWW browser"],
  simple: "The internet is a worldwide network of computers that share information. Teleconferencing links people by audio, and videoconferencing adds live video. Physiotherapists use them to search research, attend online classes and give telerehabilitation to patients at home.",
  flow: [
    "Internet: global network using TCP/IP protocol",
    "Connect by broadband, WiFi or mobile data via ISP",
    "Services: web, email, search, cloud, social media",
    "Teleconference: audio link between several people",
    "Videoconference: live audio plus video, screen sharing",
    "Telerehab: assess, teach and monitor patients remotely"
  ],
  exam: [
    { h: "Internet: definition and working", p: [
      "Internet: a global network of networks that exchange data using the TCP/IP protocol.",
      "Each device has an IP address; websites have domain names translated by DNS; access is through an internet service provider.",
      "Connections: broadband, fibre, WiFi, mobile data (4G, 5G); LAN within a hospital, WAN across cities."
    ]},
    { h: "Internet services", p: [
      "World Wide Web: web pages viewed in a browser through URLs (http or https).",
      "Email, search engines, cloud storage, online learning, social media and messaging.",
      "Research: PubMed, PEDro, Cochrane Library and Google Scholar for evidence-based practice."
    ]},
    { h: "Teleconferencing and videoconferencing", p: [
      "Teleconferencing: real-time audio meeting of three or more people at different places through phone or internet.",
      "Videoconferencing: real-time audio and video, with screen sharing and chat (for example Zoom, Google Meet, Microsoft Teams).",
      "Requirements: device with camera and microphone, stable bandwidth, software, good lighting, quiet room."
    ]},
    { h: "Applications in physiotherapy (telerehabilitation)", p: [
      "Synchronous (live video) sessions to assess, teach and supervise home exercise; asynchronous review of recorded videos.",
      "Useful for rural patients, post-operative follow-up, cardiac and pulmonary rehabilitation, chronic pain and stroke programmes.",
      "Continuing education: webinars, online conferences, case discussions with experts."
    ]},
    { h: "Limitations and safety", p: [
      "No hands-on assessment or manual therapy; limited view of movement; network failures.",
      "Screen for suitability: fall risk, cardiac risk and cognitive status; have a caregiver present and an emergency plan.",
      "Privacy: consent, secure platforms, no recording without permission; follow India's Telemedicine Practice Guidelines 2020 and data protection law."
    ]},
    { h: "Conclusion", p: [
      "The internet and videoconferencing widen access to physiotherapy and learning, provided safety, consent and confidentiality are maintained."
    ]}
  ],
  tip: "Draw two houses (patient and clinic) each with a laptop and webcam, linked through a cloud labelled Internet (ISP, TCP/IP). Label audio only as teleconference and audio plus video as videoconference. List safety checks beside the patient house.",
  evidence: [
    ["Telerehabilitation after total knee arthroplasty", "Outcomes similar to in-person rehabilitation in several trials", "Moderate"],
    ["Home-based or tele cardiac rehabilitation", "Similar effects to centre-based programmes in suitable patients", "Moderate"]
  ],
  evidenceSource: "Systematic reviews of telerehabilitation (Cochrane and others); Telemedicine Practice Guidelines, Government of India 2020",
  outcomes: [
    ["Patient satisfaction questionnaire", "Acceptability of telesessions"],
    ["Usual outcome measures (NPRS, TUG, WOMAC)", "Clinical progress assessed remotely"]
  ],
  recent: [
    "Telemedicine Practice Guidelines were issued in India in March 2020, and eSanjeevani provides national teleconsultation services."
  ],
  mnemonic: {
    word: "SAFE CALL",
    items: [["S", "Secure platform"], ["A", "Assess suitability"], ["F", "Family or caregiver present"], ["E", "Emergency plan ready"]],
    extra: "Consent before every recorded or shared session."
  },
  example: "A 62-year-old farmer near Villupuram after knee replacement joins a weekly video call with his physiotherapist, who watches his sit-to-stand and progresses his exercises with his son helping.",
  flags: [
    "Patient at high fall risk exercising alone on video",
    "Chest pain or breathlessness during a session: stop and call emergency services",
    "Unsecured platforms or recordings shared without consent"
  ],
  viva: [
    ["What protocol does the internet use?", "TCP/IP."],
    ["Difference between teleconferencing and videoconferencing?", "Teleconferencing is audio only; videoconferencing adds live video."],
    ["Name a limitation of telerehabilitation.", "No hands-on assessment or manual therapy."]
  ],
  refs: [
    { c: "Board of Governors in supersession of the Medical Council of India, with NITI Aayog. Telemedicine Practice Guidelines. 2020" },
    { c: "Rajaraman V, Adabala N. Fundamentals of Computers. Chapter: Computer networks and the internet" },
    { c: "Telerehabilitation in physiotherapy systematic review", q: "telerehabilitation physiotherapy systematic review" }
  ],
  keywords: ["internet", "TCP/IP", "email", "teleconferencing", "videoconferencing", "telerehabilitation", "telemedicine"],
  mcq: [
    ["Real-time meeting with live audio and video is called:", ["Email", "Teleconferencing", "Videoconferencing", "Fax"], 2, "Videoconferencing adds video to audio."],
    ["A main limitation of telerehabilitation is:", ["No hands-on examination", "No exercise possible", "Always costlier", "Cannot measure pain"], 0, "Hands-on assessment and manual therapy are not possible remotely."]
  ]
},
{
  id: "px-history-physiotherapy",
  title: "History of physiotherapy (world and India)",
  subject: "Professional practice",
  region: "Orientation to physiotherapy",
  stages: "steps",
  aliases: ["history of physiotherapy", "origin of physiotherapy", "Per Henrik Ling", "WCPT World Physiotherapy", "IAP history", "physiotherapy in India"],
  simple: "Treating the body with movement, massage, heat and water is very old, seen in ancient Indian, Chinese and Greek medicine. Modern physiotherapy grew from Swedish gymnastics and massage in the 1800s and expanded rapidly to rehabilitate soldiers in the World Wars and children with polio. In India it began in the early 1950s and has grown into an autonomous profession.",
  flow: [
    "Ancient: yoga, massage, hydrotherapy, exercise in old medicine",
    "1813: Per Henrik Ling's Swedish gymnastics institute",
    "1894: trained masseuses' society in Britain",
    "World Wars and polio: rehabilitation services expand",
    "1951: WCPT and Indian Association of Physiotherapists founded",
    "Today: degrees, specialties, direct access, regulation"
  ],
  exam: [
    { h: "Introduction", p: [
      "Physiotherapy (physical therapy) is the health profession that uses movement, exercise, manual therapy, physical agents and education to restore function and prevent disability.",
      "The word comes from Greek physis (nature) and therapeia (healing)."
    ]},
    { h: "Ancient period", p: [
      "India: yoga, massage (abhyanga) and oil therapies in Ayurveda; China: massage and exercise (Cong Fu); Greece: Hippocrates described massage and hydrotherapy; Rome: baths and exercise for health.",
      "Sunlight, water, heat and exercise were used long before scientific explanations existed."
    ]},
    { h: "Development of modern physiotherapy", p: [
      "Per Henrik Ling (Sweden) founded the Royal Central Institute of Gymnastics in 1813, systematising medical gymnastics and massage.",
      "In Britain, nurses and masseuses formed a society in 1894; it later became the Chartered Society of Physiotherapy.",
      "First World War: reconstruction aides in the USA rehabilitated injured soldiers; the American physiotherapy association formed in 1921.",
      "Polio epidemics (Sister Kenny's methods, muscle testing by Lovett and Kendall) and the Second World War expanded exercise therapy and electrotherapy.",
      "World Confederation for Physical Therapy (WCPT) founded in 1951; renamed World Physiotherapy in 2020."
    ]},
    { h: "Physiotherapy in India", p: [
      "The Indian Association of Physiotherapists (IAP) was formed in 1951.",
      "The first physiotherapy school started in Mumbai in the early 1950s with international support, followed by courses in other cities such as Chennai.",
      "Courses progressed from diploma to Bachelor (BPT) and Master (MPT) degrees and PhD; universities such as the Tamil Nadu Dr. M.G.R. Medical University run BPT programmes.",
      "The National Commission for Allied and Healthcare Professions Act 2021 brings physiotherapy under national regulation as an allied health profession."
    ]},
    { h: "Present scope", p: [
      "Specialties: musculoskeletal, neurological, cardiorespiratory, paediatric, sports, women's health, geriatrics, community and ICU physiotherapy.",
      "Roles: clinician, educator, researcher, administrator and first-contact practitioner in many countries; evidence-based practice is central."
    ]},
    { h: "Conclusion", p: [
      "Physiotherapy evolved from ancient exercise and massage into a science-based, regulated profession shaped by wars, epidemics and research."
    ]}
  ],
  tip: "Draw a horizontal timeline: Ancient (yoga, Hippocrates) - 1813 Ling - 1894 British society - 1914-18 WWI - 1921 USA association - 1951 WCPT and IAP - 1950s first Indian school - 2020 World Physiotherapy - 2021 NCAHP Act.",
  evidence: [
    ["Growth of research-based practice", "Profession has shifted from tradition to evidence-based care", "Historical consensus"],
    ["Direct access to physiotherapy in some countries", "Safe with appropriate screening", "Moderate"]
  ],
  evidenceSource: "World Physiotherapy historical records; Indian Association of Physiotherapists; professional texts",
  outcomes: [
    ["Short answer or essay", "Student can describe key milestones"],
    ["Timeline drawing", "Correct sequence of events"]
  ],
  recent: [
    "The National Commission for Allied and Healthcare Professions Act was passed in India in 2021.",
    "WCPT adopted the name World Physiotherapy in 2020."
  ],
  mnemonic: {
    word: "LIW-W",
    items: [["L", "Ling 1813, Sweden"], ["I", "IAP 1951, India"], ["W", "Wars and polio expanded rehab"], ["W", "WCPT 1951, World Physiotherapy 2020"]],
    extra: "8 September is World Physiotherapy Day."
  },
  example: "During World Physiotherapy Day on 8 September, first-year students in Chennai prepare a poster timeline from Ling's Swedish gymnastics to the 2021 national commission act.",
  flags: [
    "Practising without registration or recognised qualification",
    "Confusing traditional massage practice with qualified physiotherapy"
  ],
  viva: [
    ["Who is called the father of Swedish gymnastics?", "Per Henrik Ling."],
    ["When was the IAP founded?", "1951."],
    ["When is World Physiotherapy Day?", "8 September."]
  ],
  refs: [
    { c: "World Physiotherapy. History of World Physiotherapy (WCPT), founded 1951" },
    { c: "Indian Association of Physiotherapists. About IAP, founded 1951" },
    { b: "kisner", ch: "Therapeutic exercise: foundational concepts" }
  ],
  keywords: ["history", "Ling", "WCPT", "World Physiotherapy", "IAP", "NCAHP", "physiotherapy in India"],
  mcq: [
    ["Per Henrik Ling is associated with:", ["Electrotherapy", "Swedish medical gymnastics", "Hydrotherapy in Rome", "Polio vaccine"], 1, "Ling founded the Royal Central Institute of Gymnastics in 1813."],
    ["World Physiotherapy Day is observed on:", ["7 April", "21 June", "1 July", "8 September"], 3, "8 September, the date WCPT was founded in 1951."]
  ]
},
{
  id: "px-ethics-physiotherapy",
  title: "Ethical rules and guidelines for physiotherapists",
  subject: "Professional practice",
  region: "Orientation to physiotherapy",
  stages: "steps",
  aliases: ["code of ethics", "professional ethics", "informed consent", "confidentiality", "IAP code of conduct", "principles of medical ethics", "autonomy beneficence"],
  simple: "Ethics are the moral rules that guide how a physiotherapist behaves with patients, colleagues and society. The key ideas are respecting the patient's choice, doing good, avoiding harm and being fair. In practice this means getting consent, keeping information private, working within your skills and never exploiting a patient.",
  flow: [
    "Four principles: autonomy, beneficence, non-maleficence, justice",
    "Informed consent before assessment and treatment",
    "Confidentiality and secure records",
    "Professional boundaries and honest conduct",
    "Competence, referral and continuing education",
    "Follow IAP and World Physiotherapy codes, national law"
  ],
  exam: [
    { h: "Definition", p: [
      "Ethics: the study of right and wrong conduct. Professional ethics are the standards a profession sets for its members to protect patients and public trust.",
      "Code of ethics: a written set of rules adopted by the professional body (for physiotherapists, the IAP code and World Physiotherapy ethical principles)."
    ]},
    { h: "Basic principles of health care ethics", p: [
      "Autonomy: respect the patient's right to decide, after full information.",
      "Beneficence: act in the patient's best interest.",
      "Non-maleficence: do no harm; avoid unsafe or unnecessary treatment.",
      "Justice: fair and equal care regardless of caste, religion, gender, income or disability.",
      "Also: veracity (truthfulness), fidelity (keeping promises) and accountability."
    ]},
    { h: "Ethical rules in practice", p: [
      "Informed consent: explain the problem, treatment, risks, alternatives and expected results in the patient's language; written consent for procedures with risk and for research or photographs; guardian consent for minors.",
      "Confidentiality: share information only with those involved in care or as required by law; protect paper and electronic records.",
      "Professional boundaries: no sexual or financial exploitation; chaperone for intimate examinations; respectful draping.",
      "Competence: practise only within training; refer when beyond scope or when red flags appear; continuing professional development.",
      "Honesty: accurate documentation and billing; no false claims or misleading advertising; no fee-splitting or kickbacks."
    ]},
    { h: "Responsibilities to colleagues and society", p: [
      "Respect and cooperate with doctors and other team members; do not criticise colleagues in front of patients.",
      "Report unsafe or unethical practice through proper channels.",
      "Contribute to public health, disability inclusion, teaching and research done with ethics committee approval."
    ]},
    { h: "Legal aspects", p: [
      "Negligence: failure to give a reasonable standard of care causing harm; patients may seek compensation under consumer protection law.",
      "Regulation under the National Commission for Allied and Healthcare Professions Act 2021 and state councils; data protection under Indian law."
    ]},
    { h: "Conclusion", p: [
      "Ethical practice, built on autonomy, beneficence, non-maleficence and justice, protects patients and gives the profession its credibility."
    ]}
  ],
  tip: "Draw a four-pillar temple labelled Autonomy, Beneficence, Non-maleficence, Justice holding a roof called Professional Ethics; the base is Consent, Confidentiality, Competence. List one practical example under each pillar.",
  evidence: [
    ["Structured informed consent processes", "Improve patient understanding and satisfaction", "Moderate"],
    ["Ethics education in curricula", "Improves recognition of ethical issues", "Low to moderate"]
  ],
  evidenceSource: "World Physiotherapy ethical principles policy; Beauchamp and Childress, Principles of Biomedical Ethics",
  outcomes: [
    ["Consent documentation audit", "Whether consent is recorded properly"],
    ["Patient complaints and incident reports", "Ethical problems in a department"]
  ],
  recent: [
    "India's Digital Personal Data Protection Act 2023 adds duties for protecting personal data, including health information."
  ],
  mnemonic: {
    word: "ABNJ plus 3C",
    items: [["A", "Autonomy"], ["B", "Beneficence"], ["N", "Non-maleficence"], ["J", "Justice"], ["3C", "Consent, Confidentiality, Competence"]],
    extra: "When unsure: ask, document, refer."
  },
  example: "A young woman with pelvic pain is referred to a clinic in Madurai. The physiotherapist explains the examination in Tamil, takes written consent, offers a female chaperone and keeps her records locked, refusing to discuss her case with a curious relative.",
  flags: [
    "Treating without consent or beyond one's competence",
    "Sharing patient photos or details on social media",
    "Any sexual or financial relationship with a patient",
    "Ignoring red flags instead of referring"
  ],
  viva: [
    ["Name the four principles of medical ethics.", "Autonomy, beneficence, non-maleficence and justice."],
    ["What makes consent informed?", "Explanation of nature, benefits, risks and alternatives in understandable language, given voluntarily by a competent person."],
    ["What is negligence?", "Breach of the duty of reasonable care that causes harm to the patient."]
  ],
  refs: [
    { c: "World Physiotherapy. Policy statement: Ethical responsibilities of physiotherapists and World Physiotherapy members" },
    { c: "Beauchamp TL, Childress JF. Principles of Biomedical Ethics. Chapter: Moral principles" },
    { c: "Indian Association of Physiotherapists. Code of ethics and conduct" }
  ],
  keywords: ["ethics", "autonomy", "beneficence", "non-maleficence", "justice", "consent", "confidentiality", "negligence"],
  mcq: [
    ["'Do no harm' is the principle of:", ["Autonomy", "Justice", "Non-maleficence", "Veracity"], 2, "Non-maleficence means avoiding harm."],
    ["Informed consent mainly respects the principle of:", ["Autonomy", "Justice", "Fidelity", "Beneficence"], 0, "Consent respects the patient's right to choose."]
  ]
},
{
  id: "px-medical-terminology",
  title: "Medical terminology and its use with the regional language",
  subject: "Professional practice",
  region: "Medical terminology",
  stages: "steps",
  aliases: ["medical terminology", "prefix suffix root", "word roots", "medical abbreviations", "terms of position and movement", "regional language communication"],
  simple: "Medical terms are built from word parts: a root that names the body part, a prefix at the start and a suffix at the end. Knowing these parts lets you understand new words like arthroplasty or tachycardia. A physiotherapist must also explain the same idea in simple Tamil, Hindi or the patient's own language.",
  flow: [
    "Medical word = prefix + root + combining vowel + suffix",
    "Learn common roots: arthr, my, oste, neur, cardi",
    "Learn prefixes: hyper, hypo, brady, tachy, dys",
    "Learn suffixes: itis, ectomy, plasty, algia, pathy",
    "Use standard abbreviations carefully in notes",
    "Translate terms into simple regional language for patients"
  ],
  exam: [
    { h: "Introduction", p: [
      "Medical terminology is the standard language of health care, mostly from Greek and Latin roots, allowing precise communication between professionals.",
      "A term is analysed by reading the suffix first, then the prefix, then the root (for example osteo-arthr-itis: inflammation of bone and joint)."
    ]},
    { h: "Word roots relevant to physiotherapy", p: [
      "arthr (joint), my or myo (muscle), oste (bone), chondr (cartilage), ten or tendin (tendon), neur (nerve), myel (spinal cord or marrow), encephal (brain), cardi (heart), pulmo or pneum (lung), spondyl (vertebra), kinesi (movement)."
    ]},
    { h: "Prefixes and suffixes", p: [
      "Prefixes: a or an (without), brady (slow), tachy (fast), dys (difficult or abnormal), hemi (half), para (beside, both legs), quadri or tetra (four), hyper (above), hypo (below), peri (around), intra (within).",
      "Suffixes: itis (inflammation), algia (pain), ectomy (removal), otomy (cutting), plasty (repair), osis (condition), pathy (disease), plegia (paralysis), paresis (weakness), trophy (growth), graphy (recording)."
    ]},
    { h: "Terms of position, direction and movement", p: [
      "Anatomical position; anterior or posterior, superior or inferior, medial or lateral, proximal or distal, superficial or deep; prone and supine.",
      "Movements: flexion, extension, abduction, adduction, rotation, circumduction, pronation, supination, inversion, eversion, dorsiflexion, plantarflexion.",
      "Common abbreviations: ROM, MMT, ADL, SOAP, NWB, PWB, FWB, TKR, THR, CVA, COPD, bd, tds; use only approved abbreviations to avoid errors."
    ]},
    { h: "Medical terminology and the regional language", p: [
      "Patients understand plain words in their own language better than medical terms; explain diagnosis, exercises and precautions in Tamil, Hindi or the local language.",
      "Avoid jargon; use local words for body parts and actions, demonstrate exercises and check understanding with teach-back.",
      "Prepare bilingual exercise handouts with pictures; use trained interpreters rather than relatives for sensitive topics where possible."
    ]},
    { h: "Conclusion", p: [
      "Mastery of word parts makes medical vocabulary easy to learn, and translating it into the patient's language makes care safe and understood."
    ]}
  ],
  tip: "Draw a word broken into boxes: [prefix] + [root] + [combining vowel] + [suffix], using 'hemi-pleg-ia' and 'osteo-arthr-itis' as examples. Add a two-column table: medical term and simple regional-language explanation.",
  evidence: [
    ["Teach-back method for patient education", "Improves understanding and recall of instructions", "Moderate"],
    ["Plain language and pictorial handouts", "Better comprehension in patients with low health literacy", "Moderate"]
  ],
  evidenceSource: "Health literacy research; Chabner, The Language of Medicine",
  outcomes: [
    ["Terminology quiz", "Ability to analyse unknown terms"],
    ["Teach-back check", "Patient's understanding of explanation"]
  ],
  recent: [
    "Many Indian hospitals now provide bilingual patient education leaflets and translated consent forms."
  ],
  mnemonic: {
    word: "S-P-R",
    items: [["S", "Read the Suffix first"], ["P", "Then the Prefix"], ["R", "Then the Root"]],
    extra: "Hemiplegia: half (hemi) + paralysis (plegia)."
  },
  example: "A grandmother in Thanjavur is told she has 'osteoarthritis of the knee'. The physiotherapist explains in Tamil that the cushion inside her knee joint has worn down, shows a picture and asks her to repeat the exercises back.",
  flags: [
    "Ambiguous abbreviations causing medication or treatment errors",
    "Patient not understanding precautions (for example weight-bearing status)",
    "Using relatives as interpreters for sensitive issues"
  ],
  viva: [
    ["What does the suffix 'itis' mean?", "Inflammation."],
    ["Meaning of bradycardia?", "Slow heart rate (brady slow, cardi heart)."],
    ["Difference between plegia and paresis?", "Plegia is paralysis; paresis is weakness."]
  ],
  refs: [
    { c: "Chabner DE. The Language of Medicine. Chapter: Basic word structure" },
    { c: "Teach-back method patient education", q: "teach-back method patient comprehension" }
  ],
  keywords: ["terminology", "prefix", "suffix", "root", "abbreviations", "regional language", "health literacy"],
  mcq: [
    ["The suffix meaning surgical repair is:", ["ectomy", "otomy", "itis", "plasty"], 3, "plasty means repair or reconstruction."],
    ["Paralysis of one half of the body is:", ["Paraplegia", "Hemiplegia", "Quadriplegia", "Monoplegia"], 1, "hemi means half."]
  ]
},
{
  id: "px-warmup-aerobics-cooldown",
  title: "Warm up, aerobic exercise and cool down",
  subject: "Professional practice",
  region: "Physical education",
  stages: "steps",
  aliases: ["warm up", "cool down", "aerobics", "aerobic training", "FITT principle", "target heart rate", "Karvonen formula"],
  simple: "A warm up gradually raises heart rate, body temperature and joint mobility before exercise. Aerobic exercise uses large muscles rhythmically for a long time, powered mainly by oxygen, and improves heart and lung fitness. A cool down slowly brings the body back to rest so blood does not pool in the legs.",
  flow: [
    "Screen: health questions, resting HR and BP",
    "Warm up 5-10 min: light aerobic plus dynamic mobility",
    "Aerobic phase 20-60 min at moderate to vigorous intensity",
    "Monitor HR, RPE, talk test and symptoms",
    "Cool down 5-10 min: slow walking, then stretching",
    "Progress by FITT: frequency, intensity, time, type"
  ],
  exam: [
    { h: "Definitions", p: [
      "Warm up: a period of low-intensity activity before the main exercise to prepare the body physiologically and mentally.",
      "Aerobic exercise: rhythmic, continuous activity of large muscle groups sustained by aerobic metabolism (walking, jogging, cycling, swimming, dance aerobics).",
      "Cool down: a period of gradually decreasing activity after exercise to return the body towards resting state."
    ]},
    { h: "Warm up: components and effects", p: [
      "Components: 5-10 minutes of light aerobic activity (brisk walk, easy cycling) followed by dynamic stretches and sport-specific movements.",
      "Effects: raises muscle temperature, speeds nerve conduction, increases enzyme activity and oxygen release from haemoglobin, reduces muscle viscosity, increases blood flow to the heart and prepares the mind.",
      "Structured programmes such as FIFA 11+ reduce injuries in team sports."
    ]},
    { h: "Aerobic training: prescription (FITT)", p: [
      "Frequency: at least 3-5 days a week; adults should accumulate about 150-300 minutes of moderate or 75-150 minutes of vigorous activity weekly (WHO 2020).",
      "Intensity: moderate 40-59 percent and vigorous 60-89 percent of heart rate reserve; RPE about 12-16 on the Borg 6-20 scale; talk test.",
      "Karvonen formula: target HR = [(HRmax - HRrest) x intensity] + HRrest; age-predicted HRmax about 220 - age (rough estimate).",
      "Time: 20-60 minutes, continuous or in bouts of at least 10 minutes; Type: walking, cycling, swimming, step or dance aerobics, rowing.",
      "Benefits: higher VO2max, lower resting HR and BP, better lipid profile and insulin sensitivity, weight control, improved mood."
    ]},
    { h: "Cool down", p: [
      "5-10 minutes of slowly reducing activity, then static stretching (15-30 seconds per muscle) and relaxation breathing.",
      "Effects: prevents venous pooling and post-exercise dizziness, lowers heart rate and BP gradually, helps clear metabolites, reduces risk of arrhythmia in cardiac patients."
    ]},
    { h: "Precautions and contraindications", p: [
      "Pre-participation screening (PAR-Q+) and medical clearance for known cardiac, metabolic or renal disease with symptoms.",
      "Stop for chest pain, severe breathlessness, dizziness, palpitations, pallor or confusion.",
      "Avoid vigorous exercise with fever, uncontrolled hypertension (resting BP above about 180/110), unstable angina or in extreme heat without hydration."
    ]},
    { h: "Conclusion", p: [
      "Every exercise session should follow warm up, conditioning and cool down; aerobic training prescribed by FITT improves cardiorespiratory fitness safely."
    ]}
  ],
  tip: "Draw a heart rate versus time graph: a gentle ramp (warm up 5-10 min), a plateau within a shaded target heart rate zone (aerobic phase), and a gradual slope down (cool down). Write the Karvonen formula beside it.",
  evidence: [
    ["Structured neuromuscular warm up (FIFA 11+)", "Reduces injury rates in football players", "High"],
    ["Regular aerobic exercise", "Improves VO2max and lowers blood pressure and cardiovascular risk", "High"],
    ["Active cool down", "Little effect on next-day soreness; mainly helps safe return to rest", "Low to moderate"]
  ],
  evidenceSource: "ACSM's Guidelines for Exercise Testing and Prescription; WHO Guidelines on Physical Activity and Sedentary Behaviour 2020",
  outcomes: [
    ["Six-minute walk test", "Functional aerobic capacity"],
    ["Resting heart rate and BP", "Cardiovascular adaptation"],
    ["Borg RPE", "Perceived intensity during sessions"]
  ],
  recent: [
    "WHO 2020 guidelines state that any amount of physical activity is better than none and recommend limiting sedentary time."
  ],
  mnemonic: {
    word: "FITT",
    items: [["F", "Frequency 3-5 days a week"], ["I", "Intensity 40-89 percent HRR or RPE 12-16"], ["T", "Time 20-60 min"], ["T", "Type: rhythmic large-muscle activity"]],
    extra: "Sandwich every session: warm up - work - cool down."
  },
  example: "A 21-year-old college student in Trichy joins a Zumba class. The instructor starts with 8 minutes of easy marching and arm swings, runs 30 minutes at a level where students can talk but not sing, and ends with slow walking and stretches.",
  flags: [
    "Chest pain, fainting or severe breathlessness during exercise",
    "Skipping cool down in cardiac patients (risk of hypotension and arrhythmia)",
    "Exercising in high heat without fluids",
    "Fever or acute illness"
  ],
  viva: [
    ["What is the Karvonen formula?", "Target HR = (HRmax - HRrest) x intensity + HRrest."],
    ["Why is cool down important?", "It prevents venous pooling and dizziness and lets heart rate and BP fall gradually."],
    ["WHO weekly activity recommendation for adults?", "150-300 minutes moderate or 75-150 minutes vigorous aerobic activity plus muscle strengthening twice weekly."]
  ],
  refs: [
    { b: "acsm", ch: "General principles of exercise prescription" },
    { b: "kisner", ch: "Aerobic exercise" },
    { c: "World Health Organization. WHO Guidelines on Physical Activity and Sedentary Behaviour. 2020" }
  ],
  keywords: ["warm up", "cool down", "aerobic", "FITT", "Karvonen", "heart rate reserve", "RPE"],
  mcq: [
    ["Venous pooling after exercise is prevented mainly by:", ["Warm up", "Cool down", "Static stretching before exercise", "Carbohydrate loading"], 1, "Gradual cool down keeps the muscle pump working."],
    ["Using Karvonen, HRmax 200, HRrest 70 and 60 percent intensity gives a target HR of:", ["120", "140", "148", "160"], 2, "(200-70) x 0.6 + 70 = 148."]
  ]
},
{
  id: "px-recreational-fitness",
  title: "Group and recreational fitness activities",
  subject: "Professional practice",
  region: "Physical education",
  stages: "steps",
  aliases: ["group exercise", "recreational activities", "circuit training", "yoga group", "games and sports", "community fitness", "leisure activities"],
  simple: "Group and recreational fitness activities are exercise done together or for enjoyment, such as games, yoga, dance, walking clubs and circuit classes. Doing exercise with others makes it more fun, builds motivation and helps people keep exercising. Physiotherapists use group classes for fitness, falls prevention, back care and cardiac or pulmonary rehabilitation.",
  flow: [
    "Assess group: age, fitness, health conditions",
    "Set goal: fitness, social, rehab or fun",
    "Choose activity: games, yoga, dance, circuits, walking",
    "Plan session: warm up, main activity, cool down",
    "Supervise: safety, ratio, modifications, hydration",
    "Review: attendance, enjoyment and fitness outcomes"
  ],
  exam: [
    { h: "Definitions", p: [
      "Group fitness: structured exercise performed by several people together under a leader.",
      "Recreational activity: physical activity chosen in leisure time mainly for enjoyment and relaxation, which also improves health (games, trekking, swimming, cycling, dance)."
    ]},
    { h: "Types of activities", p: [
      "Group exercise classes: aerobics, step, Zumba, circuit training, aqua aerobics, Pilates, yoga.",
      "Minor and lead-up games: relays, tag games, ball games for children and adolescents.",
      "Major games and sports: cricket, football, volleyball, kabaddi, badminton.",
      "Outdoor recreation: walking clubs, cycling, trekking, swimming; traditional Indian activities such as yoga and folk dance.",
      "Therapeutic groups: back school, falls prevention (balance and Tai Chi), antenatal classes, cardiac and pulmonary rehabilitation, stroke circuit classes."
    ]},
    { h: "Benefits", p: [
      "Physical: cardiorespiratory fitness, strength, flexibility, balance, body composition.",
      "Psychological: reduced stress, anxiety and depression; enjoyment; improved self-esteem.",
      "Social: peer support, team spirit, reduced isolation in elderly, better long-term adherence.",
      "Economic: one therapist can serve many patients."
    ]},
    { h: "Organising a group session", p: [
      "Screen participants (PAR-Q+), group by ability, keep a safe instructor-to-participant ratio.",
      "Structure: warm up 10 minutes, main activity 20-40 minutes, cool down 5-10 minutes.",
      "Circuit example: 6-10 stations, 30-60 seconds work and 15-30 seconds rest, 2-3 rounds.",
      "Provide modifications (seated options, lower impact), music with suitable tempo, water breaks, first aid kit and emergency plan."
    ]},
    { h: "Precautions", p: [
      "Contact and collision games carry injury risk; avoid in osteoporosis or after recent surgery.",
      "Heat illness in Indian summers: schedule early morning or evening, ensure hydration.",
      "Watch for participants hiding symptoms because of group pressure."
    ]},
    { h: "Conclusion", p: [
      "Group and recreational activities make exercise enjoyable and sustainable; well-planned classes add social benefit to physical fitness."
    ]}
  ],
  tip: "Draw a circuit as a circle of 8 numbered stations (step-ups, wall push-ups, squats, marching, ball throw, balance, bridging, skipping) with arrows showing rotation and a timer note '45 s work, 15 s rest'.",
  evidence: [
    ["Group-based balance and strength exercise (including Tai Chi)", "Reduces falls in older adults", "High"],
    ["Group circuit class training after stroke", "Improves walking distance and speed", "Moderate"],
    ["Exercise with social support", "Better adherence than solo programmes", "Moderate"]
  ],
  evidenceSource: "Cochrane reviews on exercise for preventing falls (Sherrington et al 2019) and circuit class therapy after stroke",
  outcomes: [
    ["Attendance and adherence rate", "Engagement in the programme"],
    ["Six-minute walk test, TUG, Berg Balance Scale", "Fitness and balance change"],
    ["Quality of life questionnaire", "Psychosocial benefit"]
  ],
  recent: [
    "The Fit India Movement (2019) promotes community walking, cycling and fitness events across India."
  ],
  mnemonic: {
    word: "GROUP",
    items: [["G", "Goals clear"], ["R", "Risk screened"], ["O", "Options for every level"], ["U", "Unity: social support"], ["P", "Progress and praise"]],
    extra: "Fun keeps people coming back."
  },
  example: "In a residential colony in Chennai, a physiotherapist runs a twice-weekly morning class for 15 elderly residents: 10 minutes warm up, a chair-based circuit and balance games, then breathing and stretches. Falls reduce and friendships grow.",
  flags: [
    "Unscreened participants with cardiac symptoms",
    "Too large a group for safe supervision",
    "Heat exhaustion in hot weather",
    "Competitive pressure pushing participants beyond safe limits"
  ],
  viva: [
    ["Give two benefits of group exercise.", "Better motivation and adherence, and social interaction."],
    ["What is circuit training?", "Exercises at a series of stations done in sequence with timed work and rest periods."],
    ["Which group exercise reduces falls in the elderly?", "Balance and strength programmes such as Tai Chi."]
  ],
  refs: [
    { b: "acsm", ch: "Exercise prescription for healthy populations" },
    { c: "Sherrington C, et al. Exercise for preventing falls in older people living in the community. Cochrane Database of Systematic Reviews 2019", q: "Sherrington exercise preventing falls older people community Cochrane 2019" },
    { c: "English C, Hillier SL. Circuit class therapy for improving mobility after stroke. Cochrane Database of Systematic Reviews", q: "circuit class therapy mobility after stroke Cochrane" }
  ],
  keywords: ["group exercise", "recreation", "circuit training", "games", "yoga", "adherence", "falls prevention"],
  mcq: [
    ["A key advantage of group exercise over individual exercise is:", ["Higher intensity always", "Better social support and adherence", "No supervision needed", "No warm up needed"], 1, "Social support improves adherence."],
    ["Exercise stations done one after another with timed work and rest are called:", ["Interval sprinting", "Fartlek", "Plyometrics", "Circuit training"], 3, "Circuit training rotates through stations."]
  ]
},
{
  id: "px-nutrition-athletes-obesity",
  title: "Diet and nutrition, food for athletes and obesity",
  subject: "Professional practice",
  region: "Physical education",
  stages: "steps",
  aliases: ["balanced diet", "nutrition", "sports nutrition", "food for athletes", "obesity", "BMI", "carbohydrate loading"],
  simple: "A balanced diet gives the right amounts of carbohydrates, proteins, fats, vitamins, minerals, water and fibre. Athletes need more energy and fluid, carbohydrate for fuel and protein for muscle repair, timed around training. Obesity is too much body fat, measured by BMI and waist size, and is managed with diet, exercise and behaviour change.",
  flow: [
    "Nutrients: carbohydrate, protein, fat, vitamins, minerals, water",
    "Balanced diet: food groups in right proportion",
    "Athlete: more energy, carbs, protein, fluids, timing",
    "Obesity: BMI 25 or more (Asian Indian cut-off)",
    "Assess: BMI, waist, diet history, comorbidities",
    "Manage: calorie deficit, 150-300 min exercise, behaviour"
  ],
  exam: [
    { h: "Nutrients and balanced diet", p: [
      "Carbohydrates (4 kcal per g): main energy source; prefer whole grains, millets, pulses.",
      "Proteins (4 kcal per g): growth and repair; adult need about 0.8-1 g per kg per day; dal, milk, eggs, fish, meat, soya.",
      "Fats (9 kcal per g): energy, fat-soluble vitamins; limit saturated and trans fats.",
      "Vitamins and minerals: calcium and vitamin D for bone, iron for haemoglobin, B vitamins for energy metabolism.",
      "Water and fibre: hydration and bowel health. Balanced diet: about half the plate vegetables and fruits, a quarter cereals, a quarter protein foods (ICMR-NIN guidance)."
    ]},
    { h: "Food for athletes", p: [
      "Energy: higher daily needs depending on sport and training load.",
      "Carbohydrate: about 5-7 g per kg per day for moderate training, up to 8-12 g per kg for heavy endurance training; carbohydrate loading before events longer than about 90 minutes.",
      "Protein: about 1.2-2.0 g per kg per day, spread through the day, with 20-40 g after training for muscle repair.",
      "Timing: meal 2-4 hours before; small carbohydrate snack 1 hour before; carbohydrate and protein within about 1-2 hours after.",
      "Fluids: drink to avoid more than about 2 percent body-weight loss; electrolytes in long sessions and heat; avoid unregulated supplements (doping risk)."
    ]},
    { h: "Obesity: definition and classification", p: [
      "Obesity: abnormal or excess body fat that impairs health.",
      "BMI = weight (kg) / height (m) squared. WHO: overweight 25-29.9, obese 30 or more. Asian Indian consensus: normal 18-22.9, overweight 23-24.9, obese 25 or more.",
      "Central obesity: waist above about 90 cm in men and 80 cm in women (Indian cut-offs); waist-hip ratio.",
      "Causes: excess energy intake, sedentary life, genetics, hormonal (hypothyroidism, Cushing), drugs, sleep loss, stress."
    ]},
    { h: "Effects of obesity relevant to physiotherapy", p: [
      "Type 2 diabetes, hypertension, dyslipidaemia, coronary disease, stroke.",
      "Knee and hip osteoarthritis, low back pain, plantar fasciitis, reduced balance.",
      "Sleep apnoea, reduced exercise tolerance, depression and social stigma."
    ]},
    { h: "Management of obesity", p: [
      "Diet: energy deficit of about 500-750 kcal per day for 0.5-1 kg loss per week; high fibre, fewer refined carbohydrates and fried foods.",
      "Exercise: 150-300 minutes per week moderate aerobic activity (more for weight maintenance), low-impact options (cycling, aquatic, walking), resistance training 2-3 days per week.",
      "Behaviour: goal setting, food and step diaries, sleep, family involvement; medical or surgical options for severe obesity.",
      "Physiotherapy role: joint-friendly exercise, pain management, motivation and monitoring."
    ]},
    { h: "Conclusion", p: [
      "Good nutrition fuels health and performance; obesity is preventable and is best managed by combining diet, regular exercise and behaviour change."
    ]}
  ],
  tip: "Draw a plate divided into vegetables and fruits (half), cereals or millets (quarter) and protein foods (quarter) with a glass of water and a small curd bowl. Beside it, draw a BMI scale with the Asian Indian cut-offs 18.5, 23 and 25.",
  evidence: [
    ["Diet plus exercise for weight loss", "More effective than either alone, and exercise helps maintenance", "High"],
    ["Weight loss in knee osteoarthritis with obesity", "Reduces pain and improves function", "High"],
    ["Carbohydrate intake for endurance performance", "Improves performance in events lasting over about 90 minutes", "Moderate to high"]
  ],
  evidenceSource: "Joint position statement on nutrition and athletic performance (ACSM, Academy of Nutrition and Dietetics, Dietitians of Canada 2016); Asian Indian obesity consensus; ICMR-NIN dietary guidelines",
  outcomes: [
    ["BMI and waist circumference", "Obesity status"],
    ["Body fat percentage (skinfold or bioimpedance)", "Body composition"],
    ["Six-minute walk test", "Functional fitness"]
  ],
  recent: [
    "ICMR-NIN released revised Dietary Guidelines for Indians in 2024.",
    "Newer GLP-1 receptor agonist drugs are increasingly used for obesity, and exercise remains important to preserve muscle during weight loss."
  ],
  mnemonic: {
    word: "CPF-VMW",
    items: [["C", "Carbohydrate: fuel"], ["P", "Protein: repair"], ["F", "Fat: reserve"], ["V", "Vitamins"], ["M", "Minerals"], ["W", "Water"]],
    extra: "Indian BMI: 23 overweight, 25 obese."
  },
  example: "A 45-year-old software engineer in Bengaluru with BMI 29 and knee pain is advised a 500 kcal daily deficit, stationary cycling 30 minutes five days a week and quadriceps strengthening; after 4 months his knee pain eases.",
  flags: [
    "Rapid crash dieting or eating disorders in athletes",
    "Unregulated supplements containing banned substances",
    "Chest pain or breathlessness in obese patients starting exercise",
    "High-impact exercise in obese patients with knee osteoarthritis"
  ],
  viva: [
    ["What is the BMI cut-off for obesity in Asian Indians?", "25 kg per square metre or more."],
    ["How much protein do athletes need?", "About 1.2-2.0 g per kg per day."],
    ["Calories in 1 g of fat?", "About 9 kcal."]
  ],
  refs: [
    { b: "acsm", ch: "Exercise prescription for overweight and obesity" },
    { c: "Thomas DT, Erdman KA, Burke LM. Nutrition and Athletic Performance: joint position statement. Medicine and Science in Sports and Exercise 2016", q: "Thomas Erdman Burke nutrition athletic performance 2016 position" },
    { c: "Misra A, et al. Consensus statement for diagnosis of obesity, abdominal obesity and the metabolic syndrome for Asian Indians. J Assoc Physicians India 2009", q: "Misra consensus obesity Asian Indians 2009" },
    { b: "park", ch: "Nutrition and health" }
  ],
  keywords: ["nutrition", "balanced diet", "sports nutrition", "carbohydrate loading", "obesity", "BMI", "waist circumference"],
  mcq: [
    ["Energy provided by 1 g of fat is about:", ["4 kcal", "7 kcal", "9 kcal", "12 kcal"], 2, "Fat gives about 9 kcal per gram."],
    ["Obesity in Asian Indian adults is defined as BMI of:", ["25 or more", "30 or more", "23 or more", "27.5 or more"], 0, "The Indian consensus cut-off for obesity is 25."]
  ]
},
{
  id: "px-project-process",
  title: "Clinical project work: review of literature, data collection and analysis",
  subject: "Research",
  region: "Project work",
  stages: "steps",
  aliases: ["BPT project", "case study", "review of literature", "data collection", "research proposal", "dissertation", "ethics committee approval"],
  simple: "The BPT project is a small study or case study begun in third year. You choose a clinical question, read what is already known (review of literature), get ethics approval, collect data from patients with proper tools, then analyse the results with statistics. It trains you to think like an evidence-based physiotherapist.",
  flow: [
    "Choose topic; frame question with PICO",
    "Review literature: PubMed, PEDro, Google Scholar",
    "Write proposal; obtain guide and ethics approval",
    "Recruit with consent; collect data with valid tools",
    "Enter data in spreadsheet; check and clean",
    "Analyse with suitable statistics; interpret results"
  ],
  exam: [
    { h: "Introduction", p: [
      "Project work is a supervised clinical study or case study in the BPT course, begun in third year, that applies research methods to a physiotherapy question.",
      "Types: case report or case series, survey, correlational study, small comparative or experimental study."
    ]},
    { h: "Selecting the topic and question", p: [
      "Feasible (patients, time, equipment available), interesting, relevant, ethical (FINER criteria).",
      "Frame the question with PICO: Population, Intervention, Comparison, Outcome (for example, in desk workers with neck pain, does deep neck flexor training compared with conventional exercise reduce NDI scores).",
      "State aim, objectives, hypothesis (null and alternative) and variables."
    ]},
    { h: "Review of literature", p: [
      "Purpose: know what is already known, find gaps, choose methods and outcome measures, avoid repetition.",
      "Sources: PubMed, PEDro, Cochrane Library, Google Scholar, textbooks, journals; keywords and Boolean operators (AND, OR, NOT).",
      "Read critically: design, sample, bias, results; summarise in your own words in a logical order and cite in one style (Vancouver or APA).",
      "Use a reference manager (Zotero, Mendeley) to avoid errors; never plagiarise."
    ]},
    { h: "Methodology and data collection", p: [
      "Proposal: design, setting, sample size, inclusion and exclusion criteria, sampling method, intervention protocol, outcome measures, duration.",
      "Approval by guide and Institutional Ethics Committee; written informed consent in the patient's language; confidentiality with coded data.",
      "Collect data with valid and reliable tools (NPRS, goniometer, ODI, 6MWT) using standardised procedures; record on a pre-designed data sheet; note dropouts and adverse events."
    ]},
    { h: "Data analysis", p: [
      "Enter data in a spreadsheet; check for errors and missing values.",
      "Descriptive statistics: mean and SD (or median and IQR), frequency and percentage, tables and graphs.",
      "Inferential statistics: paired t test for before-after in one group, unpaired t test for two groups, chi-square for categories, Wilcoxon or Mann-Whitney for non-normal data; p less than 0.05 taken as significant.",
      "Interpret: statistical versus clinical significance (compare change with the minimal clinically important difference)."
    ]},
    { h: "Conclusion", p: [
      "A well-planned project moves from a clear question through literature review, ethical data collection and correct analysis to a conclusion that can guide practice."
    ]}
  ],
  tip: "Draw a vertical flow chart: Topic (FINER) - PICO question - Literature review - Proposal - Ethics approval - Consent and recruitment - Data collection - Data entry - Analysis - Results - Discussion - Conclusion. Mark the review of literature as feeding back into the methods box.",
  evidence: [
    ["Research training in undergraduate courses", "Builds evidence-based practice skills and critical appraisal", "Low to moderate"],
    ["Reporting guidelines (CONSORT, CARE, STROBE)", "Improve completeness of research reports", "Moderate"]
  ],
  evidenceSource: "Portney and Watkins, Foundations of Clinical Research; EQUATOR Network reporting guidelines",
  outcomes: [
    ["Guide's progress log", "Timely completion of each stage"],
    ["Ethics approval letter", "Compliance with research ethics"]
  ],
  recent: [
    "Many Indian institutions now require registration of interventional studies with the Clinical Trials Registry - India (CTRI)."
  ],
  mnemonic: {
    word: "PICO-FINER",
    items: [["PICO", "Population, Intervention, Comparison, Outcome"], ["FINER", "Feasible, Interesting, Novel, Ethical, Relevant"]],
    extra: "No consent, no data; no approval, no study."
  },
  example: "A third-year student in Coimbatore asks whether Mulligan SNAGs reduce neck pain better than conventional exercise in IT workers. She searches PubMed and PEDro, gets ethics approval, recruits 30 consenting patients, records NPRS and NDI, and analyses with t tests.",
  flags: [
    "Collecting data before ethics approval and consent",
    "Plagiarism or fabricated data (academic misconduct)",
    "Using unvalidated outcome tools",
    "Unsafe intervention without supervision"
  ],
  viva: [
    ["What is PICO?", "Population, Intervention, Comparison, Outcome: a format for a clinical question."],
    ["Why do a review of literature?", "To know existing evidence, find gaps and choose methods and outcome measures."],
    ["Which test compares pre and post scores in one group?", "Paired t test (or Wilcoxon signed-rank if not normal)."]
  ],
  refs: [
    { c: "Portney LG. Foundations of Clinical Research: Applications to Evidence-Based Practice. Chapter: Formulating the research question; Reviewing the literature" },
    { c: "Indian Council of Medical Research. National Ethical Guidelines for Biomedical and Health Research Involving Human Participants. 2017" },
    { c: "Kothari CR. Research Methodology: Methods and Techniques. Chapter: Research process" }
  ],
  keywords: ["project", "case study", "PICO", "review of literature", "ethics committee", "data collection", "analysis"],
  mcq: [
    ["In PICO, the letter C stands for:", ["Consent", "Comparison", "Control group only", "Conclusion"], 1, "C is the comparison intervention."],
    ["Before collecting data from patients, the student must obtain:", ["Publication", "Statistical results", "Ethics committee approval and informed consent", "Patent"], 2, "Ethics approval and consent come first."]
  ]
},
{
  id: "px-project-report",
  title: "Writing and submitting the project report and its evaluation",
  subject: "Research",
  region: "Project work",
  stages: "steps",
  aliases: ["project report format", "dissertation writing", "IMRAD", "abstract", "project viva", "project marks", "references Vancouver"],
  simple: "The project ends with a written report in a standard format: introduction, methods, results and discussion. It must be submitted about one month before the final theory exam. It is marked by internal and external examiners and defended in a viva, for 150 marks in total with 75 needed to pass.",
  flow: [
    "Write in IMRAD format with abstract and references",
    "Get guide corrections; check plagiarism and formatting",
    "Bind and submit one month before final theory exam",
    "Internal assessment: 50 marks",
    "External evaluation: 50 marks",
    "Viva voce: 50 marks; total 150, pass 75"
  ],
  exam: [
    { h: "Structure of the report", p: [
      "Preliminary pages: title page, certificates (guide, head, institution), declaration, acknowledgement, contents, list of tables and figures, abbreviations, abstract (about 250 words: background, methods, results, conclusion).",
      "Introduction: background, need for the study, aim, objectives and hypothesis.",
      "Review of literature: organised summary of relevant studies in your own words.",
      "Methodology: design, setting, sample and sampling, criteria, procedure and protocol (with dosage), outcome measures, statistical methods, ethics approval.",
      "Results: tables and graphs with statistics, without opinion.",
      "Discussion: interpret results, compare with earlier studies, explain mechanisms, limitations and future scope; then conclusion, references and appendices (consent form, data sheet, scales)."
    ]},
    { h: "Writing rules", p: [
      "Past tense for methods and results; clear, concise, formal language.",
      "Consistent referencing style (Vancouver numbered or APA author-date); every in-text citation listed and vice versa.",
      "Number tables and figures; label axes and units; avoid duplicating the same data in table and graph.",
      "Similarity check for plagiarism; keep raw data for verification."
    ]},
    { h: "Submission", p: [
      "Draft corrected by the guide, then final copies typed and bound as per university format.",
      "Submitted to the university or institution about one month before the final year theory examination, with required certificates signed."
    ]},
    { h: "Evaluation and marks", p: [
      "Internal assessment: 50 marks (work done during the year, regularity, guide's evaluation).",
      "External assessment: 50 marks (examiner's evaluation of the report).",
      "Viva voce: 50 marks (presentation and defence of the project).",
      "Total 150 marks; the minimum to pass is 75 (50 percent)."
    ]},
    { h: "Preparing for the project viva", p: [
      "Prepare a short presentation (8-10 slides): background, aim, methods, key results, conclusion.",
      "Know your statistics (why the test was chosen, what p value means), outcome measures, limitations and clinical implications.",
      "Be honest about limitations; answer briefly and confidently."
    ]},
    { h: "Conclusion", p: [
      "A clear, honest, well-formatted report and a confident viva together decide the 150 project marks and show readiness for evidence-based practice."
    ]}
  ],
  tip: "Draw the report as a stack of labelled blocks: Preliminary pages - Introduction - Review of literature - Methods - Results - Discussion - Conclusion - References - Appendices. Beside it draw a pie split into three equal parts: Internal 50, External 50, Viva 50 (pass 75 of 150).",
  evidence: [
    ["Use of reporting guidelines", "Improves clarity and completeness of reports", "Moderate"],
    ["Structured abstracts", "Easier for readers to find key information", "Moderate"]
  ],
  evidenceSource: "EQUATOR Network reporting guidelines; ICMJE recommendations for manuscripts",
  outcomes: [
    ["Marks in internal, external and viva", "Overall project performance (pass 75 of 150)"],
    ["Plagiarism similarity report", "Originality of writing"]
  ],
  recent: [
    "Plagiarism detection software is widely used by Indian universities to check dissertations before acceptance."
  ],
  mnemonic: {
    word: "IMRAD",
    items: [["I", "Introduction"], ["M", "Methods"], ["R", "Results"], ["A", "And"], ["D", "Discussion"]],
    extra: "50 + 50 + 50 = 150; pass at 75."
  },
  example: "A final-year student in Madurai submits her bound report on balance training in elderly women a month before her theory exams, then presents 9 slides in her viva and clearly explains why she used a paired t test.",
  flags: [
    "Late submission beyond the university deadline",
    "Plagiarised review of literature",
    "Results not matching raw data",
    "Missing ethics approval or consent forms in the appendix"
  ],
  viva: [
    ["What does IMRAD stand for?", "Introduction, Methods, Results and Discussion."],
    ["How are project marks divided?", "Internal 50, external 50 and viva 50; total 150, pass 75."],
    ["What goes in the discussion?", "Interpretation of results, comparison with earlier studies, limitations and future scope."]
  ],
  refs: [
    { c: "Portney LG. Foundations of Clinical Research: Applications to Evidence-Based Practice. Chapter: Writing a research report" },
    { c: "International Committee of Medical Journal Editors. Recommendations for the Conduct, Reporting, Editing and Publication of Scholarly Work in Medical Journals" },
    { c: "The Tamil Nadu Dr. M.G.R. Medical University. BPT curriculum and regulations: Project work" }
  ],
  keywords: ["project report", "IMRAD", "abstract", "references", "submission", "viva", "marks"],
  mcq: [
    ["Total marks for BPT project work and the pass mark are:", ["100 and 50", "150 and 75", "200 and 100", "150 and 50"], 1, "Internal 50 + external 50 + viva 50 = 150; pass 75."],
    ["Comparison of your results with earlier studies belongs in the:", ["Methods", "Results", "Abstract", "Discussion"], 3, "Interpretation and comparison go in the discussion."]
  ]
},
{
  id: "px-data-presentation",
  title: "Data analysis, interpretation and presentation",
  subject: "Research",
  region: "Biostatistics",
  stages: "steps",
  aliases: ["presentation of data", "tables and graphs", "histogram", "bar diagram", "pie chart", "types of data", "scales of measurement"],
  simple: "After collecting data we must organise, analyse and show it clearly. First decide the type of data (categories or numbers), then summarise it in tables and suitable graphs, apply the right statistics and explain what the results mean for patients. Good presentation lets a reader understand the findings at a glance.",
  flow: [
    "Identify data type: qualitative or quantitative",
    "Scale: nominal, ordinal, interval, ratio",
    "Clean and code data; make frequency tables",
    "Choose graph: bar or pie for categories, histogram for numbers",
    "Apply descriptive then inferential statistics",
    "Interpret: statistical and clinical meaning, limitations"
  ],
  exam: [
    { h: "Types of data and scales of measurement", p: [
      "Qualitative (categorical): nominal (gender, diagnosis) and ordinal (MMT grades, Modified Ashworth Scale).",
      "Quantitative (numerical): discrete (number of falls) and continuous (ROM in degrees, 6MWT distance); interval (temperature in Celsius, no true zero) and ratio (weight, force, true zero).",
      "Scale decides which statistics and graphs are valid."
    ]},
    { h: "Data analysis steps", p: [
      "Editing and cleaning: check errors, outliers and missing values.",
      "Coding and entry into spreadsheet or software (Excel, SPSS, R, Jamovi).",
      "Classification and tabulation: frequency distribution with class intervals.",
      "Descriptive statistics, then inferential statistics chosen by data type, distribution (normal or not) and design (paired or independent)."
    ]},
    { h: "Tabular presentation", p: [
      "Table: number, clear title, column and row headings, units, totals, source and footnotes.",
      "Simple (one variable), complex (two or more variables), frequency distribution table, contingency (2 x 2) table."
    ]},
    { h: "Graphical presentation", p: [
      "Qualitative data: simple, multiple or component bar diagrams (bars separated); pie chart (sector angle = frequency / total x 360 degrees).",
      "Quantitative data: histogram (adjoining bars, area represents frequency), frequency polygon, cumulative frequency curve (ogive), line graph for trends over time, box-and-whisker plot (median, IQR, outliers).",
      "Relationship between two variables: scatter diagram. Others: pictogram, spot or map diagram."
    ]},
    { h: "Interpretation", p: [
      "Describe the main finding, direction and size of effect, with confidence intervals and p values.",
      "Separate statistical significance from clinical significance (compare change with minimal clinically important difference).",
      "Consider bias, confounders, sample size and generalisability; association does not prove causation."
    ]},
    { h: "Applications in physiotherapy", p: [
      "Line graph of pain score across sessions; bar chart comparing groups; box plot of ROM before and after; scatter plot of BMI against knee pain.",
      "Clear data presentation in case reports, audits and project reports."
    ]},
    { h: "Conclusion", p: [
      "Correct identification of data type guides analysis, and clear tables and graphs with honest interpretation turn raw numbers into useful clinical knowledge."
    ]}
  ],
  tip: "Draw side by side a bar diagram (gaps between bars, for categories such as diagnosis) and a histogram (no gaps, for continuous data such as age groups), plus a small pie chart with the formula for sector angle. Label axes and give a figure title.",
  evidence: [
    ["Reporting effect sizes and confidence intervals with p values", "Gives more useful clinical information than p values alone", "Expert consensus"],
    ["Use of appropriate graphs for data type", "Reduces misinterpretation by readers", "Expert consensus"]
  ],
  evidenceSource: "Mahajan, Methods in Biostatistics; Portney and Watkins, Foundations of Clinical Research",
  outcomes: [
    ["Correct choice of graph and test", "Competence in data handling"],
    ["Readable tables and figures", "Quality of research presentation"]
  ],
  recent: [
    "Free statistical software such as R and Jamovi is now widely used by students for analysis and graphs."
  ],
  mnemonic: {
    word: "NOIR",
    items: [["N", "Nominal: names"], ["O", "Ordinal: order"], ["I", "Interval: equal gaps, no true zero"], ["R", "Ratio: true zero"]],
    extra: "Bars with gaps for categories; histogram without gaps for numbers."
  },
  example: "A BPT student in Tirunelveli presents her data on 40 low back pain patients: a pie chart of occupations, a histogram of ages and a line graph showing mean ODI scores falling over 6 weeks.",
  flags: [
    "Using a histogram for categorical data or a pie chart for many small categories",
    "Truncated axes that exaggerate differences",
    "Claiming causation from correlation",
    "Reporting only p values without effect size"
  ],
  viva: [
    ["Difference between bar diagram and histogram?", "Bar diagram is for categorical data with gaps; histogram is for continuous data with adjoining bars and area proportional to frequency."],
    ["What scale is MMT grading?", "Ordinal."],
    ["How is a pie chart sector angle calculated?", "Frequency divided by total, times 360 degrees."]
  ],
  refs: [
    { c: "Mahajan BK. Methods in Biostatistics for Medical Students and Research Workers. Chapter: Presentation of data" },
    { c: "Portney LG. Foundations of Clinical Research: Applications to Evidence-Based Practice. Chapter: Descriptive statistics" },
    { b: "park", ch: "Health information and basic medical statistics" }
  ],
  keywords: ["data presentation", "tables", "graphs", "histogram", "bar diagram", "pie chart", "scales of measurement"],
  mcq: [
    ["The Modified Ashworth Scale produces data on which scale?", ["Nominal", "Ordinal", "Interval", "Ratio"], 1, "Grades are ordered but gaps are not equal."],
    ["Which graph is used for continuous data in class intervals?", ["Histogram", "Pie chart", "Simple bar diagram", "Pictogram"], 0, "Histogram has adjoining bars for continuous data."]
  ]
},
{
  id: "px-descriptive-statistics",
  title: "Measures of central tendency, dispersion, correlation and regression",
  subject: "Research",
  region: "Biostatistics",
  stages: "steps",
  aliases: ["mean median mode", "standard deviation", "range variance", "coefficient of variation", "correlation coefficient", "regression line", "normal distribution"],
  simple: "Central tendency tells the typical value of data: mean, median and mode. Dispersion tells how spread out the values are: range, interquartile range, variance and standard deviation. Correlation tells how strongly two variables move together, and regression gives an equation to predict one from the other.",
  flow: [
    "Central tendency: mean, median, mode",
    "Dispersion: range, IQR, variance, SD, CV",
    "Normal curve: mean plus or minus 1, 2, 3 SD",
    "Correlation: r from -1 to +1, scatter diagram",
    "Regression: Y = a + bX predicts outcome",
    "Choose by data type and distribution"
  ],
  exam: [
    { h: "Measures of central tendency", p: [
      "Mean: sum of values / number of values; uses all data; affected by extreme values; for normally distributed interval or ratio data.",
      "Median: middle value of ordered data (position (n+1)/2); not affected by outliers; for skewed or ordinal data.",
      "Mode: most frequent value; for nominal data; a distribution may be bimodal.",
      "In a normal distribution mean = median = mode; in positive skew mean is greater than median."
    ]},
    { h: "Measures of dispersion", p: [
      "Range: highest minus lowest; simple but affected by extremes.",
      "Interquartile range: Q3 minus Q1 (middle 50 percent); used with the median.",
      "Variance: average of squared deviations from the mean; standard deviation (SD) is the square root of variance, in original units.",
      "Coefficient of variation: SD / mean x 100; compares variability of different measures.",
      "Standard error of mean = SD / square root of n; used for confidence intervals."
    ]},
    { h: "Normal distribution", p: [
      "Bell-shaped, symmetrical curve: about 68 percent of values within mean plus or minus 1 SD, 95 percent within 2 SD (1.96 exactly) and 99.7 percent within 3 SD.",
      "Basis of parametric tests and reference ranges; check normality with histogram or Shapiro-Wilk test."
    ]},
    { h: "Correlation", p: [
      "Measures strength and direction of linear relationship between two variables; shown by a scatter diagram.",
      "Pearson r (parametric, continuous normal data) and Spearman rho (ordinal or non-normal data); range -1 to +1; 0 means no linear relation.",
      "Rough guide: below 0.3 weak, 0.3-0.7 moderate, above 0.7 strong.",
      "Coefficient of determination r squared gives proportion of variance shared; correlation does not imply causation."
    ]},
    { h: "Regression", p: [
      "Predicts a dependent variable (Y) from an independent variable (X): Y = a + bX, where a is intercept and b is the regression coefficient (slope).",
      "Line fitted by least squares; multiple regression uses several predictors; logistic regression for a yes or no outcome.",
      "Physiotherapy example: predicting 6MWT distance from age and height, or predicting fall risk from balance scores."
    ]},
    { h: "Applications in physiotherapy", p: [
      "Report mean and SD of ROM or strength; median and IQR of pain scores or MMT.",
      "Correlate BMI with knee pain, or grip strength with function; reliability studies of goniometry use related statistics such as ICC."
    ]},
    { h: "Conclusion", p: [
      "Central tendency and dispersion describe a data set, while correlation and regression describe and predict relationships between variables; choice depends on data type and distribution."
    ]}
  ],
  tip: "Draw a bell curve with mean, median and mode at the centre and shaded bands for 1, 2 and 3 SD (68, 95, 99.7 percent). Beside it draw three small scatter plots showing r = +1, r = 0 and r = -1, and one scatter with a regression line labelled Y = a + bX.",
  evidence: [
    ["Median and IQR for skewed data", "More representative than mean and SD", "Established statistical practice"],
    ["Correlation for association", "Shows relationship but not cause", "Established statistical practice"]
  ],
  evidenceSource: "Mahajan, Methods in Biostatistics; Portney and Watkins, Foundations of Clinical Research",
  outcomes: [
    ["Calculation exercises", "Ability to compute mean, median, SD and r"],
    ["Interpretation questions", "Understanding of strength and direction of relationships"]
  ],
  recent: [
    "Reporting guidelines encourage giving medians and IQRs for skewed outcomes and confidence intervals for regression estimates."
  ],
  mnemonic: {
    word: "MMM-RIVS",
    items: [["MMM", "Mean, Median, Mode"], ["R", "Range"], ["I", "Interquartile range"], ["V", "Variance"], ["S", "Standard deviation"]],
    extra: "68-95-99.7 for 1-2-3 SD; r runs from -1 to +1."
  },
  example: "In a study of 50 office workers in Chennai, the mean neck flexion ROM is 45 degrees (SD 8). Forward head angle and neck pain show r = 0.62, and a regression line predicts pain from posture angle.",
  flags: [
    "Using mean for highly skewed data or ordinal scales",
    "Interpreting correlation as causation",
    "Extrapolating a regression line beyond the data range",
    "Ignoring outliers that distort r"
  ],
  viva: [
    ["Which measure of central tendency is not affected by extreme values?", "Median."],
    ["What percentage of values lie within mean plus or minus 2 SD?", "About 95 percent."],
    ["What does r = -0.8 mean?", "A strong negative linear relationship."]
  ],
  refs: [
    { c: "Mahajan BK. Methods in Biostatistics for Medical Students and Research Workers. Chapters: Measures of central tendency; Measures of variability; Correlation and regression" },
    { c: "Portney LG. Foundations of Clinical Research: Applications to Evidence-Based Practice. Chapter: Correlation and regression" },
    { b: "park", ch: "Health information and basic medical statistics" }
  ],
  keywords: ["mean", "median", "mode", "standard deviation", "variance", "correlation", "regression", "normal distribution"],
  mcq: [
    ["In a positively skewed distribution:", ["Mean = median = mode", "Mean is less than median", "Mean is greater than median", "Mode is greater than mean"], 2, "The long right tail pulls the mean upward."],
    ["A correlation coefficient of 0 means:", ["Perfect positive relation", "Perfect negative relation", "Strong relation", "No linear relation"], 3, "r = 0 means no linear association."]
  ]
},
{
  id: "px-hypothesis-testing",
  title: "Hypothesis testing: null hypothesis, errors, p value and tests of significance",
  subject: "Research",
  region: "Biostatistics",
  stages: "steps",
  aliases: ["null hypothesis", "alternative hypothesis", "p value", "type I type II error", "t test", "chi square test", "tests of significance"],
  simple: "Hypothesis testing checks whether a difference found in a sample is likely to be real or just due to chance. We start by assuming there is no difference (null hypothesis), calculate a test statistic and its p value, and reject the null if p is below 0.05. The right test depends on the type of data, the number of groups and whether the data are normal.",
  flow: [
    "State null (H0) and alternative (H1) hypotheses",
    "Fix significance level alpha, usually 0.05",
    "Choose test by data type, groups, normality",
    "Calculate test statistic and p value",
    "p below 0.05: reject H0; else fail to reject",
    "Interpret with effect size, CI and clinical meaning"
  ],
  exam: [
    { h: "Definitions", p: [
      "Hypothesis: a testable statement about a population.",
      "Null hypothesis (H0): there is no difference or no relationship (for example, IFT and TENS give equal pain relief).",
      "Alternative hypothesis (H1): there is a difference; two-tailed (any direction) or one-tailed (one direction)."
    ]},
    { h: "Steps of hypothesis testing", p: [
      "State H0 and H1; set significance level alpha (0.05).",
      "Select the appropriate test and calculate the test statistic (t, chi-square, F, z).",
      "Find the p value: the probability of getting results this extreme if H0 were true.",
      "Decision: p less than alpha, reject H0 (statistically significant); otherwise fail to reject H0.",
      "Report with confidence interval and effect size and judge clinical importance."
    ]},
    { h: "Errors and power", p: [
      "Type I error (alpha): rejecting a true H0, a false positive.",
      "Type II error (beta): failing to reject a false H0, a false negative; often due to small sample.",
      "Power = 1 - beta, usually set at 80 percent; increases with larger sample size, larger effect and lower variability; used for sample size calculation."
    ]},
    { h: "Parametric tests (normal, interval or ratio data)", p: [
      "Paired t test: same group before and after (pre and post ROM).",
      "Unpaired (independent) t test: two different groups.",
      "One-way ANOVA: three or more groups; repeated measures ANOVA for several time points.",
      "Pearson correlation for relationship between two continuous variables."
    ]},
    { h: "Non-parametric tests (ordinal or non-normal data)", p: [
      "Wilcoxon signed-rank test (paired alternative), Mann-Whitney U test (unpaired alternative), Kruskal-Wallis (three or more groups), Friedman (repeated measures), Spearman rank correlation.",
      "Chi-square test: association between categorical variables (for example gender and presence of back pain); Fisher exact test for small expected counts."
    ]},
    { h: "Applications in physiotherapy", p: [
      "Testing whether a new exercise protocol improves function more than standard care.",
      "Pain on NPRS is often treated as ordinal, so Wilcoxon or Mann-Whitney may be chosen if data are skewed."
    ]},
    { h: "Conclusion", p: [
      "Hypothesis testing gives a disciplined way to decide whether findings are beyond chance, but the result must be read with effect size, confidence intervals and clinical relevance."
    ]}
  ],
  tip: "Draw a 2 x 2 decision table: columns 'H0 true' and 'H0 false', rows 'Reject H0' and 'Do not reject H0'; fill in Type I error (alpha), correct decision (power), correct decision, Type II error (beta). Add a small flow chart for choosing a test: data type - groups - paired or unpaired - normal or not.",
  evidence: [
    ["Reporting confidence intervals and effect sizes", "Recommended over p values alone (ASA statement 2016)", "Expert consensus"],
    ["Adequate sample size by power analysis", "Reduces Type II error", "Established statistical practice"]
  ],
  evidenceSource: "Wasserstein RL, Lazar NA. The ASA statement on p-values. The American Statistician 2016; Mahajan, Methods in Biostatistics",
  outcomes: [
    ["Test selection exercise", "Ability to choose the right test"],
    ["Interpretation of p value and CI", "Correct statistical reasoning"]
  ],
  recent: [
    "The American Statistical Association's 2016 statement warned against using p below 0.05 as the only basis for scientific conclusions."
  ],
  mnemonic: {
    word: "PUNCH",
    items: [["P", "Paired t: same group twice"], ["U", "Unpaired t: two groups"], ["N", "Non-normal: Wilcoxon or Mann-Whitney"], ["C", "Categories: chi-square"], ["H", "Higher number of groups (3 or more): ANOVA"]],
    extra: "Type I is a false alarm; Type II is a missed fire."
  },
  example: "A student in Erode compares knee flexion ROM in 15 patients given CPM with 15 given conventional exercise. Data are normal and the groups are independent, so she uses an unpaired t test; p = 0.03 leads her to reject H0, and she reports the mean difference with its 95 percent CI.",
  flags: [
    "Treating p above 0.05 as proof of no effect",
    "Using parametric tests on skewed or ordinal data without checking",
    "Multiple testing without correction inflating Type I error",
    "Small samples leading to Type II error"
  ],
  viva: [
    ["What is a Type I error?", "Rejecting a true null hypothesis (false positive)."],
    ["Which test compares two independent groups with normal data?", "Unpaired (independent samples) t test."],
    ["What is power?", "The probability of detecting a true effect, 1 - beta, usually 80 percent."]
  ],
  refs: [
    { c: "Mahajan BK. Methods in Biostatistics for Medical Students and Research Workers. Chapter: Tests of significance" },
    { c: "Wasserstein RL, Lazar NA. The ASA statement on p-values: context, process, and purpose. The American Statistician 2016", q: "Wasserstein Lazar ASA statement on p-values 2016" },
    { c: "Portney LG. Foundations of Clinical Research: Applications to Evidence-Based Practice. Chapter: Foundations of statistical inference" }
  ],
  keywords: ["hypothesis", "null hypothesis", "p value", "Type I error", "Type II error", "power", "t test", "chi-square"],
  mcq: [
    ["Rejecting a true null hypothesis is a:", ["Type I error", "Type II error", "Power", "Confidence interval"], 0, "Type I error is a false positive with probability alpha."],
    ["The test of association between two categorical variables is:", ["Paired t test", "Pearson correlation", "ANOVA", "Chi-square test"], 3, "Chi-square tests association in contingency tables."]
  ]
}
]);
