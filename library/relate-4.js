// Relatable examples and thinking activities (electrotherapy, exercise therapy and paediatric therapy). Written in Learn Anywhere's own words.
window.RELATE = Object.assign(window.RELATE || {}, {
  "swd": {
    r: "Think of how a microwave warms your leftover biryani: a rapidly flipping field makes water molecules and ions jiggle, and that jiggling becomes heat. SWD uses a similar idea at 27.12 MHz to warm joints and muscles deeper than a hot water bag can reach. Pulsed mode is like switching the microwave on and off quickly, so the food barely gets warm between bursts.",
    b: "The analogy breaks because a microwave oven works at a much higher frequency and power, and the body has blood flow that carries heat away, which food does not.",
    p: "Spot it: walk around your hostel or home and list every gadget that uses an oscillating electromagnetic field (WiFi router, induction stove, phone). Then explain why a patient must take off a metal watch before SWD but nobody worries about their WiFi."
  },
  "faradic": {
    r: "Faradic current is like a coach blowing a whistle in quick short bursts during cricket practice: each tiny pulse tells the motor nerve to fire, and fast enough pulses blend into one steady contraction. Surging is the coach saying 'go, hold, rest' in a rhythm, so the muscle works and then recovers. The patient joins in on each 'go' until they can do it without the whistle.",
    b: "The analogy breaks because the current acts on the nerve, not on a willing listener, and the muscle only responds if its nerve supply is intact.",
    p: "Invent it: design a phone app screen that shows the surge rhythm as a rising and falling wave and cheers when the patient tries to contract along with it. What would you show when they finally contract without the current?"
  },
  "galvanic-ids": {
    r: "Imagine a WhatsApp group where the admin (the nerve) has left. Quick forwarded messages no longer get anyone moving, but a long, persistent call to each member individually still gets a slow reply. Long-duration direct current pulses work like that, stimulating the muscle fibres themselves because the nerve is not there to relay a short signal.",
    b: "The analogy breaks because muscle fibres do not choose to answer, and the slow, worm-like contraction is a property of denervated tissue, not of patience.",
    p: "What if: a muscle could send you a weekly status update while its nerve regrew. Write three short status messages it might post, from 'just denervated' to 'my admin is back'."
  },
  "sd-curve": {
    r: "Think of pushing a stalled auto-rickshaw: a short shove needs huge force, but a long steady push gets it moving with less effort. Below a certain push strength, no amount of time works; that minimum is like rheobase. Chronaxie is the push time needed at double that minimum, and a healthy nerve-muscle unit responds to short, gentle pushes while a denervated one needs long ones.",
    b: "The analogy breaks because the curve measures the threshold for a just-visible contraction, not how much total work moves the muscle.",
    p: "Connect it: sketch two curves on graph paper, a normal one and a denervated one, and then draw a third showing a nerve halfway through recovery. Explain to a friend why a kink appears in partial denervation."
  },
  "uvr": {
    r: "You know how a day at the beach in Goa can leave some friends slightly pink and others painfully red, even with the same sun? UV dosing starts with a small patch test to find the minimal dose that just reddens that person's skin. Every later dose is planned from that personal baseline, and moving the lamp farther away cuts the dose by the inverse square law.",
    b: "The analogy breaks because therapeutic UV uses controlled lamps, measured times and specific erythema grades, not random sun exposure.",
    p: "Teach it: write a 30-second reel script explaining the inverse square law using a phone torch on a wall, showing how the spot gets bigger and dimmer as you step back."
  },
  "irr": {
    r: "Standing near a tandoor or a heater on a winter night, your skin warms fast but your bones do not. Infrared lamps work the same way: the rays are absorbed in the skin and just below it, so the heat stays superficial. That warmth relaxes the area and eases pain, which makes exercise or massage afterwards easier.",
    b: "The analogy breaks because a therapy lamp is used at a set distance and time with skin checks, while a tandoor gives uncontrolled heat.",
    p: "Spot it: list five things in daily life that give off infrared (chai cup, phone charger, sunlit wall). Which of them would a thermal camera light up the brightest, and why?"
  },
  "laser": {
    r: "Ordinary light from a tube light is like a crowd leaving a cricket stadium, everyone walking in different directions at different paces. A laser is like a marching band, one colour and all in step. At low power it does not heat the tissue; the idea is that the cells absorb the light and change their energy production and signalling.",
    b: "The analogy breaks because marching in step does not explain cell effects, and the evidence for low-level laser benefits varies across conditions.",
    p: "Invent it: design a safety poster for a laser room that a first-year student would actually stop and read. What one picture would remind everyone to protect their eyes?"
  },
  "iontophoresis": {
    r: "Remember playing with two magnets and feeling them push apart when the same poles face each other? Iontophoresis uses that rule: a negatively charged drug sits under the negative electrode and gets repelled into the skin by a small direct current. The dose is counted in mA-minutes, like counting both how hard and how long you push.",
    b: "The analogy breaks because magnets push by magnetic force, while iontophoresis moves charged ions with an electric field through skin that resists it.",
    p: "Connect it: make a two-column list of common ions you know from chemistry class and sort them by charge. For each, say which electrode it would sit under if it were a drug."
  },
  "cryotherapy": {
    r: "When you get hit by a cricket ball, putting an ice pack on it is like slowing traffic on a busy road: blood vessels narrow, metabolism slows and nerve signals move more slowly, so pain and swelling settle. People usually feel cold, then burning, then aching, then numbness. A contrast bath, switching warm and cold, is like a pump that squeezes and relaxes vessels to move fluid out.",
    b: "The analogy breaks because nerves and skin can be injured by cold left too long, while slow traffic does not damage the road.",
    p: "What if: ice packs had a smart timer built in. Design what it would show or beep at each stage of the cold sensation sequence to remind the user to remove it in time."
  },
  "wax-bath": {
    r: "When a candle drips onto your finger, it feels warm and then hardens into a thin shell. A wax bath uses this: as melted paraffin turns solid on the hand it releases stored latent heat, giving a gentle, even warmth around every small joint. Several dips make an insulating glove that holds the heat in.",
    b: "The analogy breaks because therapeutic wax is mixed with mineral oil and kept at a controlled temperature, unlike hot candle wax.",
    p: "Connect it: link latent heat in wax to why steam from a pressure cooker burns more than boiling water. Draw one diagram that explains both."
  },
  "massage": {
    r: "Think of how a good chai wala first stirs gently, then mixes more firmly, then slows down again to finish. Massage follows a similar plan: start with light effleurage, move to deeper petrissage or friction as the goal needs, and finish with soothing strokes. It feels great and can ease pain in the short term, but it works best when followed by exercise.",
    b: "The analogy breaks because massage strokes are chosen for specific tissue effects and contraindications, not just for a pleasant sequence.",
    p: "Teach it: explain the difference between effleurage, petrissage and friction to a 10-year-old using only kitchen actions like rolling dough or wiping a table."
  },
  "traction": {
    r: "Picture a stack of chapatis pressed together; gently pulling the top and bottom apart creates tiny gaps between them. Spinal traction does something similar, applying a pulling force along the spine to separate vertebrae slightly and stretch soft tissue, which may ease pressure around a nerve root. The pull starts light and increases over sessions while the therapist watches symptoms.",
    b: "The analogy breaks because the spine is joined by discs, ligaments and muscles that resist and recoil, and traction alone has weak evidence.",
    p: "Spot it: notice how you hang from a metro handle or a pull-up bar and describe what you feel in your back. Then list reasons why that is not the same as clinical traction."
  },
  "stretching": {
    r: "Stretching a muscle is like stretching a new rubber band slowly: a gentle hold lets it lengthen a bit, while a sudden jerk can make it snap or spring back. A 15 to 30 second hold done regularly is enough for healthy muscle. A long-standing contracture is more like old hardened plastic, needing long, low-load stretch over time.",
    b: "The analogy breaks because muscles adapt by changing tolerance and structure over weeks, which a rubber band never does.",
    p: "Invent it: design a stretch reminder for a hostel room that turns a 30-second hold into something fun, like a timer that plays a song clip. Which stretches would you put on it?"
  },
  "coordination": {
    r: "When you first learn to type on a phone keyboard, you watch every key; later your fingers know where to go. In ataxia, that automatic sense is lost, so Frenkel's exercises teach the patient to watch and concentrate to guide each movement again. They start simple and slow in lying and build up to walking.",
    b: "The analogy breaks because typing improves by building a new skill, while Frenkel's exercises often use vision to replace lost position sense.",
    p: "Invent it: create a simple floor game using chalk footprints that would train precision and timing step by step. How would you make level 1 easy and level 5 hard?"
  },
  "balance-training": {
    r: "Standing in a moving metro without holding the rail is pure balance: your eyes, inner ear and feet all send updates so your body keeps its centre of mass over your feet. Balance training gradually removes help, like narrowing your stance, closing your eyes or standing on foam. Each step makes one system work harder so the body learns to react.",
    b: "The analogy breaks because training follows planned progressions and safety measures, while a metro jerk is unplanned and risky.",
    p: "Spot it: on your next ride in a bus or metro, notice which of your three balance systems you lean on most when it brakes. Write down what changes when you look at your phone."
  },
  "breathing-exercises": {
    r: "Blowing slowly through a straw into your chai to cool it is a lot like pursed-lip breathing: the narrow opening slows the outflow and keeps airways from collapsing early. Diaphragmatic breathing is like filling a balloon from the bottom, with the belly rising rather than the shoulders. Segmental breathing focuses the breath into one area, guided by the therapist's hand.",
    b: "The analogy breaks because the lungs have elastic recoil and airway pressure effects that a straw and balloon only partly show.",
    p: "Connect it: compare pursed-lip breathing with how a singer or flute player controls breath. Write one sentence on what each could teach the other."
  },
  "crutch-gait": {
    r: "Using crutches is like adding extra legs to a table so it stands more firmly: the base widens and weight is shared away from the injured leg. The gait pattern is chosen by how much weight the leg can take, just like choosing a slower or faster traffic lane depending on your vehicle. Height must be right, or it is like riding a cycle with the seat set wrong.",
    b: "The analogy breaks because a person also needs strength, balance and coordination to move the aids, which a table never does.",
    p: "Teach it: make a quick sketch-sequence of the 3-point gait using stick figures, as if it were a meme strip. Show the crutches and injured leg moving together."
  },
  "suspension": {
    r: "Hanging laundry on a clothes line takes the weight off the clothes; suspension slings do the same for a heavy limb. With the weight held up, even a very weak muscle can swing it, like a pendulum. Changing where the rope is fixed changes whether the movement is gravity-free, assisted or resisted.",
    b: "The analogy breaks because the sling fixation point is set precisely relative to the joint axis, which matters far more than with laundry.",
    p: "What if: you could put any everyday object in suspension slings, like a backpack or a laptop. Describe which object would become easiest to move and explain why using the centre of gravity."
  },
  "hydrotherapy": {
    r: "Getting into a swimming pool after a gym session, you feel lighter because water pushes up on you (buoyancy) and squeezes evenly around your body (hydrostatic pressure). Fast movements feel heavier because water resists (viscosity). This lets people with pain or weakness move more easily and safely.",
    b: "The analogy breaks because therapeutic pools are warmer and supervised, with screening for safety and wounds.",
    p: "Invent it: design a pool exercise game for kids that uses floats to make movements easier or harder. Explain how you would grade the difficulty."
  },
  "pathological-gaits": {
    r: "Walk barefoot on a hot terrace and you instantly shorten the time on each foot; that quick, short step is exactly what an antalgic gait does to avoid pain. Every abnormal gait is the body solving a problem: a weak hip abductor lets the pelvis drop (Trendelenburg), weak dorsiflexors make the foot lift high to clear the ground. So the pattern is a clue that points back to its cause.",
    b: "The analogy breaks because real pathological gaits often mix several causes and need specific tests to confirm, not one obvious trigger like a hot floor.",
    p: "Spot it: watch a Bollywood scene where an actor limps or walks unusually. Write down what gait pattern it might be and what clue gives it away."
  },
  "postural-control-reflexes": {
    r: "A newborn's reflexes are like the default settings on a new phone, automatic and pre-installed. As the brain matures, these are updated and replaced by smarter features like righting and protective reactions. A reflex that refuses to uninstall, or an update that never comes, is a warning sign.",
    b: "The analogy breaks because brain development is gradual and biological, not a single software update.",
    p: "Teach it: write a 30-second reel script showing how a baby's reflexes 'upgrade' to balance reactions, using a phone update theme."
  },
  "paediatric-assessment": {
    r: "Before a cricket coach plans training for a young player, they check batting style, fitness and what the player wants to achieve. Paediatric assessment works the same way: observing movement, tone and range, using standard tests, and then setting goals with the family. The plan is about real-life skills, not just numbers.",
    b: "The analogy breaks because paediatric assessment uses validated tools and must consider development stages, not just performance.",
    p: "Invent it: design a simple goal-tracking chart a family could stick on the fridge to see progress in a child's skills."
  },
  "sensory-integration-therapy": {
    r: "Imagine a crowded mall: lights, music, people bumping into you. Some people handle it easily, while others feel overwhelmed or under-reactive. Sensory integration therapy helps children organise this sensory traffic so they can play and learn better, using fun activities like swinging and climbing.",
    b: "The analogy breaks because sensory processing involves specific brain systems, not just personal preference for crowds.",
    p: "Spot it: list three places in your daily life that feel 'too much' for your senses and three that feel calming. What makes the difference?"
  },
  "rood-approach": {
    r: "Rood's idea is like using an alarm or a lullaby: quick, sharp sounds wake you up, while slow, rhythmic music calms you down. Quick stimuli like brushing or tapping can wake up a weak muscle, while slow stroking or warmth can calm a tight one. Activities are then graded following the order in which babies gain control.",
    b: "The analogy breaks because muscles respond to specific sensory inputs, not to general mood like an alarm or music.",
    p: "Connect it: make a list of daily sensations that make you more alert or more relaxed. Which ones match Rood's facilitation or inhibition ideas?"
  },
  "vojta-therapy": {
    r: "Pressing a specific button on a game controller makes a character jump or crawl automatically. Vojta therapy uses pressure at particular body points to trigger automatic movement patterns like crawling or rolling. These patterns are used in therapy and assessment.",
    b: "The analogy breaks because the body responds through complex nervous system pathways, not simple button presses.",
    p: "Teach it: explain Vojta therapy to a 10-year-old using the example of a video game character and special moves."
  },
  "facilitation-handling": {
    r: "Think of how holding a phone at the right angle changes your whole neck and shoulder posture for hours. In the same way, how a parent carries, feeds and positions a child repeated many times a day shapes tone, alignment and what movement the child practises. Handling through key points like the shoulders and pelvis gives the child a better starting position to move from.",
    b: "The analogy breaks because the goal is to guide the child's own active movement, not just to hold them in a nice position.",
    p: "Invent it: design an illustrated home programme poster that shows parents the right way to carry and position their child."
  },
  "erbs-palsy": {
    r: "Imagine a phone charger cable that gets stretched too far; it may still work a bit, or stop charging entirely. In Erb's palsy, nerves in the baby's neck are stretched during birth, so the arm can't move normally. Most recover with time and gentle exercise, but some need repair.",
    b: "The analogy breaks because nerves can sometimes regrow, unlike a broken cable.",
    p: "What if: you could design a baby onesie that helps with gentle positioning for Erb's palsy. What features would you include?"
  },
  "ddh": {
    r: "Think of a ball sitting loosely in a shallow bowl, easily slipping out. In DDH, the thigh bone's ball does not fit snugly in the hip socket. Early treatment with a harness helps the hip settle into place, like gently guiding the ball into the bowl.",
    b: "The analogy breaks because the hip joint develops and changes as the baby grows, unlike a fixed bowl.",
    p: "Spot it: look for objects at home that fit together like a ball and socket. Which fit best, and what makes them stable?"
  },
  "congenital-torticollis": {
    r: "If you sleep with your head tilted on the hostel bed, you might wake up with a stiff neck. In congenital torticollis, a baby's neck muscle is short and tight, so the head tilts. Gentle stretching, positioning and tummy time started early help the muscle lengthen.",
    b: "The analogy breaks because the baby's muscle is shortened from birth, not just stiff from sleep.",
    p: "Teach it: make a 30-second reel showing how tummy time helps babies with tight neck muscles."
  },
  "aids-adl": {
    r: "A phone stand frees your hands for the video call; a well-fitted seat frees a child's hands for play and eating because the trunk no longer needs all its effort to stay upright. ADL training breaks a task like dressing into small steps, the way a recipe reel shows one step at a time, and the child learns them in order. When a child has more than one disability, the team and family work like a group project with one shared plan.",
    b: "The analogy breaks because children grow, so aids need regular refitting, and a badly fitted aid can do harm, unlike a phone stand.",
    p: "Invent it: design a simple aid that would help a child with limited hand use eat independently. Sketch it and explain how it works."
  }
});
