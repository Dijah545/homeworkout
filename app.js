
const DAYS=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const DAY_NAMES=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const exercises=[
{id:"pushup",name:"Push-Ups",area:"Upper Body & Core",equipment:"Exercise Mat",img:null,sets:"3 sets × 10–12 reps",tips:["Hands slightly wider than shoulders.","Brace your core and keep a straight line.","Lower with control, then press through your palms."]},
{id:"dbsquat",name:"Dumbbell Squat",area:"Lower Body",equipment:"Adjustable Dumbbells",img:"assets/dumbbell-squat.jpg",sets:"3 sets × 10–12 reps",tips:["Hold dumbbells at your sides or shoulders.","Sit hips back and keep knees tracking over toes.","Drive through the whole foot to stand."]},
{id:"kbswing",name:"Kettlebell Swing",area:"Full Body",equipment:"Kettlebell",img:null,sets:"3 sets × 15 reps",tips:["Hinge at the hips rather than squatting.","Snap hips forward to power the bell.","Keep arms relaxed and ribs stacked."]},
{id:"bandrow",name:"Resistance Band Row",area:"Upper Body",equipment:"Resistance Bands",img:"assets/resistance-band-row.jpg",sets:"3 sets × 12 reps",tips:["Anchor the band securely.","Pull elbows toward your ribs.","Squeeze shoulder blades without shrugging."]},
{id:"jumprope",name:"Skipping Rope",area:"Cardio",equipment:"Skipping Rope",img:null,sets:"5 × 45 sec",tips:["Keep jumps low and land softly.","Rotate the rope from your wrists.","Maintain a relaxed upright posture."]},
{id:"glutebridge",name:"Glute Bridge",area:"Lower Body & Core",equipment:"Exercise Mat",img:null,sets:"3 sets × 12–15 reps",tips:["Feet hip-width apart.","Drive through heels and squeeze glutes.","Avoid over-arching your lower back."]},
{id:"climbers",name:"Mountain Climbers",area:"Core & Cardio",equipment:"Exercise Mat",img:null,sets:"3 × 30 sec",tips:["Stack shoulders over wrists.","Keep hips relatively level.","Drive knees forward with control."]},
{id:"stepups",name:"Mini Stepper Intervals",area:"Lower Body & Cardio",equipment:"Mini Stepper",img:null,sets:"6 × 60 sec",tips:["Stay tall and keep light pressure on the handles/bands.","Push evenly through both feet.","Use a steady rhythm before increasing speed."]},
{id:"sliders",name:"Plank with Sliders",area:"Core",equipment:"Disc Sliders",img:null,sets:"3 × 8 each side",tips:["Start in a strong plank.","Slide one foot out or forward without twisting.","Move slowly and keep tension through the core."]},
{id:"dbpress",name:"Dumbbell Shoulder Press",area:"Upper Body",equipment:"Adjustable Dumbbells",img:null,sets:"3 sets × 10 reps",tips:["Brace your core.","Press overhead without flaring ribs.","Lower weights under control."]},
{id:"bentrow",name:"Bent-Over Dumbbell Row",area:"Upper Body",equipment:"Adjustable Dumbbells",img:null,sets:"3 sets × 12 reps",tips:["Hinge with a neutral spine.","Pull elbows toward hips.","Pause briefly at the top."]},
{id:"rdl",name:"Barbell Romanian Deadlift",area:"Lower Body",equipment:"Barbell",img:"assets/barbell-romanian-deadlift.jpg",sets:"3 sets × 10 reps",tips:["Keep the bar close to the legs.","Push hips backward with soft knees.","Stop when hamstrings are loaded without rounding."]},
{id:"bike",name:"Stationary Bike Intervals",area:"Cardio",equipment:"Stationary Bike",img:null,sets:"10 min",tips:["Warm up before hard intervals.","Keep cadence smooth.","Increase resistance gradually."]},
{id:"bandwalk",name:"Loop Band Lateral Walk",area:"Lower Body",equipment:"Resistance Bands",img:"assets/loop-band-lateral-walk.jpg",sets:"3 × 12 steps each way",tips:["Keep band under constant tension.","Take small controlled steps.","Keep knees softly bent."]},
{id:"deadbug",name:"Dead Bug",area:"Core",equipment:"Exercise Mat",img:null,sets:"3 × 10 each side",tips:["Press lower back gently into the mat.","Move opposite arm and leg slowly.","Exhale as you extend."]},
{id:"sliderlunge",name:"Slider Reverse Lunge",area:"Lower Body",equipment:"Disc Sliders",img:"assets/slider-reverse-lunge.jpg",sets:"3 × 10 each side",tips:["Keep most weight in the front foot.","Slide the rear foot backward.","Drive through front heel to return."]},
{id:"bandpress",name:"Resistance Band Chest Press",area:"Upper Body",equipment:"Resistance Bands",img:"assets/resistance-band-chest-press.jpg",sets:"3 sets × 12 reps",tips:["Secure anchor behind you.","Press forward at chest height.","Control the return."]},
{id:"db-goblet-squat",name:"Dumbbell Goblet Squat",area:"Lower Body",equipment:"Adjustable Dumbbells",img:null,sets:"3 sets \u00d7 10\u201312 reps",tips:["Hold one dumbbell at chest height.","Sit hips down and back with chest tall.","Drive through your feet to stand."],sourceGroup:"Adjustable Dumbbells"},
{id:"db-front-squat",name:"Dumbbell Front Squat",area:"Lower Body",equipment:"Adjustable Dumbbells",img:null,sets:"3 sets \u00d7 8\u201312 reps",tips:["Hold two dumbbells at shoulder height.","Brace your core and keep elbows slightly forward.","Squat under control, then stand tall."],sourceGroup:"Adjustable Dumbbells"},
{id:"db-sumo-squat",name:"Dumbbell Sumo Squat",area:"Lower Body",equipment:"Adjustable Dumbbells",img:null,sets:"3 sets \u00d7 10\u201315 reps",tips:["Take a wide stance with toes slightly out.","Hold one dumbbell between your legs.","Track knees over toes as you squat."],sourceGroup:"Adjustable Dumbbells"},
{id:"db-rdl",name:"Dumbbell Romanian Deadlift",area:"Lower Body",equipment:"Adjustable Dumbbells",img:null,sets:"3 sets \u00d7 10\u201312 reps",tips:["Hold dumbbells in front of thighs.","Push hips back with soft knees.","Keep weights close to legs and squeeze glutes to stand."],sourceGroup:"Adjustable Dumbbells"},
{id:"db-stiff-leg-deadlift",name:"Dumbbell Stiff-Leg Deadlift",area:"Lower Body",equipment:"Adjustable Dumbbells",img:null,sets:"3 sets \u00d7 8\u201312 reps",tips:["Keep knees only slightly bent.","Hinge at the hips with a neutral back.","Stop when hamstrings are loaded, then stand."],sourceGroup:"Adjustable Dumbbells"},
{id:"db-reverse-lunge",name:"Dumbbell Reverse Lunge",area:"Lower Body",equipment:"Adjustable Dumbbells",img:null,sets:"3 sets \u00d7 10 each side",tips:["Hold dumbbells at your sides.","Step one leg backward and lower both knees.","Push through the front foot to return."],sourceGroup:"Adjustable Dumbbells"},
{id:"db-forward-lunge",name:"Dumbbell Forward Lunge",area:"Lower Body",equipment:"Adjustable Dumbbells",img:null,sets:"3 sets \u00d7 10 each side",tips:["Step forward while keeping torso upright.","Lower until both knees are comfortably bent.","Push back through the front foot."],sourceGroup:"Adjustable Dumbbells"},
{id:"db-walking-lunge",name:"Dumbbell Walking Lunge",area:"Lower Body",equipment:"Adjustable Dumbbells",img:null,sets:"3 sets \u00d7 12 steps",tips:["Hold dumbbells by your sides.","Step into each lunge with control.","Keep knees aligned with toes."],sourceGroup:"Adjustable Dumbbells"},
{id:"db-lateral-lunge",name:"Dumbbell Lateral Lunge",area:"Lower Body",equipment:"Adjustable Dumbbells",img:null,sets:"3 sets \u00d7 8\u201310 each side",tips:["Step wide to one side.","Push hips back over the working leg.","Drive through that leg to return."],sourceGroup:"Adjustable Dumbbells"},
{id:"db-bulgarian-split-squat",name:"Dumbbell Bulgarian Split Squat",area:"Lower Body",equipment:"Adjustable Dumbbells",img:null,sets:"3 sets \u00d7 8\u201310 each side",tips:["Place rear foot on a stable step.","Lower the back knee toward the floor.","Drive through the front heel to stand."],sourceGroup:"Adjustable Dumbbells"},
{id:"db-step-up",name:"Dumbbell Step-Up",area:"Lower Body",equipment:"Adjustable Dumbbells",img:null,sets:"3 sets \u00d7 10 each side",tips:["Use a stable platform.","Plant the full working foot on the step.","Drive through that foot and lower slowly."],sourceGroup:"Adjustable Dumbbells"},
{id:"db-glute-bridge",name:"Dumbbell Glute Bridge",area:"Lower Body",equipment:"Adjustable Dumbbells",img:null,sets:"3 sets \u00d7 12\u201315 reps",tips:["Lie on your back with knees bent.","Place a dumbbell securely across your hips.","Drive through heels and squeeze glutes."],sourceGroup:"Adjustable Dumbbells"},
{id:"db-hip-thrust",name:"Dumbbell Hip Thrust",area:"Lower Body",equipment:"Adjustable Dumbbells",img:null,sets:"3 sets \u00d7 10\u201315 reps",tips:["Support upper back on a stable surface.","Place a dumbbell across your hips.","Drive hips upward and squeeze glutes."],sourceGroup:"Adjustable Dumbbells"},
{id:"db-calf-raise",name:"Dumbbell Calf Raise",area:"Lower Body",equipment:"Adjustable Dumbbells",img:null,sets:"3 sets \u00d7 15\u201320 reps",tips:["Stand tall with dumbbells at your sides.","Rise onto the balls of your feet.","Pause, then lower slowly."],sourceGroup:"Adjustable Dumbbells"},
{id:"db-single-leg-rdl",name:"Dumbbell Single-Leg Romanian Deadlift",area:"Lower Body",equipment:"Adjustable Dumbbells",img:null,sets:"3 sets \u00d7 8\u201310 each side",tips:["Balance on one leg.","Hinge forward while extending the free leg behind you.","Keep hips square and return by squeezing the glute."],sourceGroup:"Adjustable Dumbbells"},
{id:"db-chest-press",name:"Dumbbell Chest Press",area:"Upper Body",equipment:"Adjustable Dumbbells",img:null,sets:"3 sets \u00d7 8\u201312 reps",tips:["Lie down with dumbbells at chest level.","Press upward until arms extend.","Lower with control."],sourceGroup:"Adjustable Dumbbells"},
{id:"db-floor-press",name:"Dumbbell Floor Press",area:"Upper Body",equipment:"Adjustable Dumbbells",img:null,sets:"3 sets \u00d7 8\u201312 reps",tips:["Lie on the floor with knees bent.","Start with elbows lightly touching the floor.","Press upward, then lower under control."],sourceGroup:"Adjustable Dumbbells"},
{id:"db-chest-fly",name:"Dumbbell Chest Fly",area:"Upper Body",equipment:"Adjustable Dumbbells",img:null,sets:"3 sets \u00d7 10\u201312 reps",tips:["Start with dumbbells above your chest.","Open arms in a wide arc with soft elbows.","Bring weights back together slowly."],sourceGroup:"Adjustable Dumbbells"},
{id:"db-shoulder-press",name:"Dumbbell Shoulder Press",area:"Upper Body",equipment:"Adjustable Dumbbells",img:null,sets:"3 sets \u00d7 8\u201312 reps",tips:["Hold dumbbells at shoulder height.","Brace your core and press overhead.","Lower back to shoulder level."],sourceGroup:"Adjustable Dumbbells"},
{id:"db-arnold-press",name:"Dumbbell Arnold Press",area:"Upper Body",equipment:"Adjustable Dumbbells",img:null,sets:"3 sets \u00d7 8\u201310 reps",tips:["Start with palms facing you.","Rotate palms forward as you press.","Reverse the motion on the way down."],sourceGroup:"Adjustable Dumbbells"},
{id:"db-front-raise",name:"Dumbbell Front Raise",area:"Upper Body",equipment:"Adjustable Dumbbells",img:null,sets:"3 sets \u00d7 10\u201312 reps",tips:["Hold dumbbells in front of thighs.","Raise to about shoulder height.","Lower slowly without swinging."],sourceGroup:"Adjustable Dumbbells"},
{id:"db-lateral-raise",name:"Dumbbell Lateral Raise",area:"Upper Body",equipment:"Adjustable Dumbbells",img:null,sets:"3 sets \u00d7 10\u201315 reps",tips:["Hold weights by your sides.","Raise arms out to shoulder height.","Lower slowly and avoid shrugging."],sourceGroup:"Adjustable Dumbbells"},
{id:"db-bent-over-row",name:"Dumbbell Bent-Over Row",area:"Upper Body",equipment:"Adjustable Dumbbells",img:"assets/dumbbell-bent-over-row.jpg",sets:"3 sets \u00d7 8\u201312 reps",tips:["Hinge at the hips with a neutral spine.","Pull dumbbells toward your ribs.","Squeeze shoulder blades, then lower."],sourceGroup:"Adjustable Dumbbells"},
{id:"db-single-arm-row",name:"Dumbbell Single-Arm Row",area:"Upper Body",equipment:"Adjustable Dumbbells",img:null,sets:"3 sets \u00d7 10 each side",tips:["Support one hand on a stable surface.","Pull the dumbbell toward your hip.","Lower fully before the next rep."],sourceGroup:"Adjustable Dumbbells"},
{id:"db-reverse-fly",name:"Dumbbell Reverse Fly",area:"Upper Body",equipment:"Adjustable Dumbbells",img:null,sets:"3 sets \u00d7 10\u201315 reps",tips:["Hinge forward with a flat back.","Lift dumbbells out to the sides.","Squeeze rear shoulders and upper back."],sourceGroup:"Adjustable Dumbbells"},
{id:"db-pullover",name:"Dumbbell Pullover",area:"Upper Body",equipment:"Adjustable Dumbbells",img:null,sets:"3 sets \u00d7 10\u201312 reps",tips:["Hold one dumbbell above your chest.","Lower it behind your head with soft elbows.","Pull it back over your chest."],sourceGroup:"Adjustable Dumbbells"},
{id:"db-bicep-curl",name:"Dumbbell Bicep Curl",area:"Upper Body",equipment:"Adjustable Dumbbells",img:null,sets:"3 sets \u00d7 10\u201315 reps",tips:["Stand tall with palms forward.","Curl without moving upper arms.","Lower fully without swinging."],sourceGroup:"Adjustable Dumbbells"},
{id:"db-hammer-curl",name:"Dumbbell Hammer Curl",area:"Upper Body",equipment:"Adjustable Dumbbells",img:null,sets:"3 sets \u00d7 10\u201315 reps",tips:["Keep palms facing each other.","Curl with elbows close to your sides.","Lower slowly."],sourceGroup:"Adjustable Dumbbells"},
{id:"db-concentration-curl",name:"Dumbbell Concentration Curl",area:"Upper Body",equipment:"Adjustable Dumbbells",img:null,sets:"3 sets \u00d7 10 each side",tips:["Brace your elbow against inner thigh.","Curl toward your shoulder.","Lower slowly without moving the upper arm."],sourceGroup:"Adjustable Dumbbells"},
{id:"db-tricep-extension",name:"Dumbbell Tricep Extension",area:"Upper Body",equipment:"Adjustable Dumbbells",img:null,sets:"3 sets \u00d7 10\u201312 reps",tips:["Hold one dumbbell overhead.","Bend elbows to lower behind your head.","Straighten elbows without flaring."],sourceGroup:"Adjustable Dumbbells"},
{id:"db-tricep-kickback",name:"Dumbbell Tricep Kickback",area:"Upper Body",equipment:"Adjustable Dumbbells",img:null,sets:"3 sets \u00d7 10\u201315 reps",tips:["Hinge forward and keep upper arms close.","Extend elbows until arms are straight.","Return slowly without swinging."],sourceGroup:"Adjustable Dumbbells"},
{id:"db-skull-crusher",name:"Dumbbell Skull Crusher",area:"Upper Body",equipment:"Adjustable Dumbbells",img:null,sets:"3 sets \u00d7 8\u201312 reps",tips:["Lie down with dumbbells above chest.","Keep upper arms mostly still.","Lower toward sides of head, then extend."],sourceGroup:"Adjustable Dumbbells"},
{id:"db-thruster",name:"Dumbbell Thruster",area:"Full Body",equipment:"Adjustable Dumbbells",img:null,sets:"3 sets \u00d7 8\u201312 reps",tips:["Hold dumbbells at shoulders and squat.","Drive powerfully upward.","Use the leg drive to press overhead."],sourceGroup:"Adjustable Dumbbells"},
{id:"db-squat-to-press",name:"Dumbbell Squat to Press",area:"Full Body",equipment:"Adjustable Dumbbells",img:null,sets:"3 sets \u00d7 10 reps",tips:["Hold dumbbells at shoulders.","Perform a controlled squat.","Stand fully, then press overhead."],sourceGroup:"Adjustable Dumbbells"},
{id:"db-clean-press",name:"Dumbbell Clean and Press",area:"Full Body",equipment:"Adjustable Dumbbells",img:null,sets:"3 sets \u00d7 8\u201310 reps",tips:["Start with dumbbells near thighs.","Use hips to guide weights to shoulders.","Press overhead once stable."],sourceGroup:"Adjustable Dumbbells"},
{id:"db-deadlift-row",name:"Dumbbell Deadlift to Row",area:"Full Body",equipment:"Adjustable Dumbbells",img:null,sets:"3 sets \u00d7 8\u201310 reps",tips:["Deadlift from a hip hinge.","Hinge again and row toward ribs.","Stand tall before repeating."],sourceGroup:"Adjustable Dumbbells"},
{id:"db-renegade-row",name:"Dumbbell Renegade Row",area:"Full Body",equipment:"Adjustable Dumbbells",img:null,sets:"3 sets \u00d7 6\u201310 each side",tips:["Start in a high plank on dumbbells.","Brace your core and row one weight.","Keep hips as square as possible."],sourceGroup:"Adjustable Dumbbells"},
{id:"db-farmers-carry",name:"Dumbbell Farmer's Carry",area:"Full Body",equipment:"Adjustable Dumbbells",img:null,sets:"3 \u00d7 30\u201360 sec",tips:["Hold heavy dumbbells at your sides.","Stand tall with core braced.","Walk with controlled steps without leaning."],sourceGroup:"Adjustable Dumbbells"},
{id:"db-reverse-lunge-curl",name:"Dumbbell Reverse Lunge to Curl",area:"Full Body",equipment:"Adjustable Dumbbells",img:null,sets:"3 sets \u00d7 8\u201310 each side",tips:["Step backward into a lunge.","Return to standing and curl the weights.","Lower before the next rep."],sourceGroup:"Adjustable Dumbbells"},
{id:"db-rdl-row",name:"Dumbbell Romanian Deadlift to Row",area:"Full Body",equipment:"Adjustable Dumbbells",img:null,sets:"3 sets \u00d7 8\u201310 reps",tips:["Hinge into an RDL position.","Hold the hinge and row toward ribs.","Lower weights, then drive hips forward."],sourceGroup:"Adjustable Dumbbells"},
{id:"bb-back-squat",name:"Barbell Back Squat",area:"Lower Body",equipment:"Barbell",img:null,sets:"3 sets \u00d7 8\u201312 reps",tips:["Position the bar securely across your upper back.","Keep your chest tall and brace your core.","Sit hips down and back, then drive through your feet to stand."],sourceGroup:"Barbell Configuration"},
{id:"bb-front-squat",name:"Barbell Front Squat",area:"Lower Body",equipment:"Barbell",img:null,sets:"3 sets \u00d7 8\u201310 reps",tips:["Rest the bar across the front of your shoulders.","Keep elbows high and torso upright.","Squat under control, then drive up through the midfoot."],sourceGroup:"Barbell Configuration"},
{id:"bb-sumo-squat",name:"Barbell Sumo Squat",area:"Lower Body",equipment:"Barbell",img:null,sets:"3 sets \u00d7 10\u201312 reps",tips:["Use a wide stance with toes slightly turned out.","Keep the bar balanced and your core braced.","Track knees over toes as you squat and stand."],sourceGroup:"Barbell Configuration"},
{id:"bb-rdl",name:"Barbell Romanian Deadlift",area:"Lower Body",equipment:"Barbell",img:null,sets:"3 sets \u00d7 8\u201312 reps",tips:["Hold the bar close to your thighs.","Push your hips back with a soft knee bend.","Keep the bar close to your legs and squeeze glutes to stand."],sourceGroup:"Barbell Configuration"},
{id:"bb-conventional-deadlift",name:"Barbell Conventional Deadlift",area:"Lower Body",equipment:"Barbell",img:null,sets:"3 sets \u00d7 6\u201310 reps",tips:["Stand with feet about hip-width and the bar over midfoot.","Brace your core and keep your back neutral.","Push the floor away and stand tall without leaning back."],sourceGroup:"Barbell Configuration"},
{id:"bb-good-morning",name:"Barbell Good Morning",area:"Lower Body",equipment:"Barbell",img:null,sets:"3 sets \u00d7 10\u201312 reps",tips:["Place the bar across your upper back.","Keep a soft bend in the knees and hinge at the hips.","Stop when hamstrings are loaded, then squeeze glutes to return."],sourceGroup:"Barbell Configuration"},
{id:"bb-reverse-lunge",name:"Barbell Reverse Lunge",area:"Lower Body",equipment:"Barbell",img:null,sets:"3 sets \u00d7 8\u201310 each side",tips:["Position the bar securely across your upper back.","Step one leg backward into a lunge.","Drive through the front foot to return to standing."],sourceGroup:"Barbell Configuration"},
{id:"bb-hip-thrust",name:"Barbell Hip Thrust",area:"Lower Body",equipment:"Barbell",img:null,sets:"3 sets \u00d7 10\u201315 reps",tips:["Support your upper back on a stable surface.","Place the padded bar across your hips.","Drive hips upward and squeeze your glutes at the top."],sourceGroup:"Barbell Configuration"},
{id:"bb-glute-bridge",name:"Barbell Glute Bridge",area:"Lower Body",equipment:"Barbell",img:null,sets:"3 sets \u00d7 12\u201315 reps",tips:["Lie on your back with knees bent.","Position the padded bar securely across your hips.","Drive through your heels and squeeze glutes at the top."],sourceGroup:"Barbell Configuration"},
{id:"bb-calf-raise",name:"Barbell Calf Raise",area:"Lower Body",equipment:"Barbell",img:null,sets:"3 sets \u00d7 15\u201320 reps",tips:["Position the bar securely and stand tall.","Rise onto the balls of your feet.","Pause at the top, then lower slowly."],sourceGroup:"Barbell Configuration"},
{id:"bb-bent-over-row",name:"Barbell Bent-Over Row",area:"Upper Body",equipment:"Barbell",img:null,sets:"3 sets \u00d7 8\u201312 reps",tips:["Hinge at the hips with a neutral spine.","Pull the bar toward your lower ribs.","Squeeze your shoulder blades, then lower with control."],sourceGroup:"Barbell Configuration"},
{id:"bb-overhead-press",name:"Barbell Overhead Press",area:"Upper Body",equipment:"Barbell",img:null,sets:"3 sets \u00d7 8\u201310 reps",tips:["Start with the bar at upper-chest height.","Brace your core and press the bar overhead.","Lower the bar back to the starting position under control."],sourceGroup:"Barbell Configuration"},
{id:"bb-floor-press",name:"Barbell Floor Press",area:"Upper Body",equipment:"Barbell",img:null,sets:"3 sets \u00d7 8\u201312 reps",tips:["Lie on the floor with the bar positioned over your chest.","Lower until your upper arms gently touch the floor.","Press the bar upward without bouncing."],sourceGroup:"Barbell Configuration"},
{id:"bb-bicep-curl",name:"Barbell Bicep Curl",area:"Upper Body",equipment:"Barbell",img:null,sets:"3 sets \u00d7 10\u201315 reps",tips:["Stand tall with an underhand grip.","Curl the bar while keeping elbows close to your sides.","Lower slowly without swinging."],sourceGroup:"Barbell Configuration"},
{id:"bb-upright-row",name:"Barbell Upright Row",area:"Upper Body",equipment:"Barbell",img:null,sets:"3 sets \u00d7 10\u201312 reps",tips:["Hold the bar in front of your thighs.","Pull upward toward mid-chest with elbows leading.","Lower slowly and avoid shrugging excessively."],sourceGroup:"Barbell Configuration"},
{id:"bb-close-grip-floor-press",name:"Barbell Close-Grip Floor Press",area:"Upper Body",equipment:"Barbell",img:null,sets:"3 sets \u00d7 8\u201312 reps",tips:["Lie on the floor and use a shoulder-width or slightly narrower grip.","Keep elbows closer to your torso as you lower.","Press upward while focusing on the triceps."],sourceGroup:"Barbell Configuration"},
{id:"bb-deadlift",name:"Barbell Deadlift",area:"Full Body",equipment:"Barbell",img:null,sets:"3 sets \u00d7 6\u201310 reps",tips:["Set the bar over midfoot and brace your core.","Keep the bar close as you push through the floor.","Finish standing tall with hips and knees extended."],sourceGroup:"Barbell Configuration"},
{id:"bb-clean-press",name:"Barbell Clean and Press",area:"Full Body",equipment:"Barbell",img:null,sets:"3 sets \u00d7 6\u20138 reps",tips:["Start with the bar near your thighs or floor depending on setup.","Use your hips to guide the bar to shoulder height.","Once stable, press the bar overhead."],sourceGroup:"Barbell Configuration"},
{id:"bb-thruster",name:"Barbell Thruster",area:"Full Body",equipment:"Barbell",img:null,sets:"3 sets \u00d7 8\u201310 reps",tips:["Hold the bar at the front of your shoulders.","Squat while keeping your torso upright.","Drive upward and use the leg power to press overhead."],sourceGroup:"Barbell Configuration"},
{id:"bb-squat-to-press",name:"Barbell Squat to Press",area:"Full Body",equipment:"Barbell",img:null,sets:"3 sets \u00d7 8\u201310 reps",tips:["Hold the bar at shoulder height.","Perform a controlled squat.","Stand fully, then press the bar overhead."],sourceGroup:"Barbell Configuration"},
{id:"kb-goblet-squat",name:"Kettlebell Goblet Squat",area:"Lower Body",equipment:"Kettlebell",img:null,sets:"3 sets \u00d7 10\u201312 reps",tips:["Hold the kettlebell at chest height by the horns.","Brace your core and squat with knees tracking over toes.","Drive through your feet to stand tall."],sourceGroup:"Kettlebell Configuration"},
{id:"kb-sumo-squat",name:"Kettlebell Sumo Squat",area:"Lower Body",equipment:"Kettlebell",img:null,sets:"3 sets \u00d7 10\u201315 reps",tips:["Take a wide stance with toes slightly outward.","Hold the kettlebell between your legs.","Sit down between your hips and drive back to standing."],sourceGroup:"Kettlebell Configuration"},
{id:"kb-deadlift",name:"Kettlebell Deadlift",area:"Lower Body",equipment:"Kettlebell",img:null,sets:"3 sets \u00d7 10\u201312 reps",tips:["Place the kettlebell between your feet.","Hinge at the hips with a neutral spine and grip the handle.","Push through the floor and extend your hips to stand."],sourceGroup:"Kettlebell Configuration"},
{id:"kb-rdl",name:"Kettlebell Romanian Deadlift",area:"Lower Body",equipment:"Kettlebell",img:null,sets:"3 sets \u00d7 10\u201312 reps",tips:["Hold the kettlebell in front of your thighs.","Push your hips backward with soft knees.","Squeeze your glutes to return to standing."],sourceGroup:"Kettlebell Configuration"},
{id:"kb-reverse-lunge",name:"Kettlebell Reverse Lunge",area:"Lower Body",equipment:"Kettlebell",img:null,sets:"3 sets \u00d7 8\u201310 each side",tips:["Hold the kettlebell securely at your chest or side.","Step one leg backward and lower with control.","Drive through the front foot to return."],sourceGroup:"Kettlebell Configuration"},
{id:"kb-lateral-lunge",name:"Kettlebell Lateral Lunge",area:"Lower Body",equipment:"Kettlebell",img:null,sets:"3 sets \u00d7 8\u201310 each side",tips:["Hold the kettlebell at chest height.","Step wide to one side and push your hips backward.","Drive through the working leg to return to center."],sourceGroup:"Kettlebell Configuration"},
{id:"kb-single-leg-deadlift",name:"Kettlebell Single-Leg Deadlift",area:"Lower Body",equipment:"Kettlebell",img:null,sets:"3 sets \u00d7 8\u201310 each side",tips:["Balance on one leg with the kettlebell in the opposite or same-side hand.","Hinge while extending the free leg behind you.","Keep hips square and squeeze the standing-side glute to return."],sourceGroup:"Kettlebell Configuration"},
{id:"kb-swing",name:"Kettlebell Swing",area:"Full Body & Cardio",equipment:"Kettlebell",img:null,sets:"4 sets \u00d7 15 reps",tips:["Hike the kettlebell back between your legs.","Drive your hips forward powerfully without lifting with your arms.","Let the kettlebell float, then hinge again for the next rep."],sourceGroup:"Kettlebell Configuration"},
{id:"kb-clean",name:"Kettlebell Clean",area:"Full Body & Cardio",equipment:"Kettlebell",img:null,sets:"3 sets \u00d7 8\u201310 each side",tips:["Start with the kettlebell between or slightly in front of your feet.","Use your hips to guide it upward close to your body.","Finish softly in the rack position without letting the bell slam your forearm."],sourceGroup:"Kettlebell Configuration"},
{id:"kb-clean-press",name:"Kettlebell Clean and Press",area:"Full Body & Cardio",equipment:"Kettlebell",img:null,sets:"3 sets \u00d7 8 each side",tips:["Clean the kettlebell into the rack position.","Brace your core and press it overhead.","Lower to the rack under control before repeating."],sourceGroup:"Kettlebell Configuration"},
{id:"kb-thruster",name:"Kettlebell Thruster",area:"Full Body & Cardio",equipment:"Kettlebell",img:null,sets:"3 sets \u00d7 10 reps",tips:["Hold the kettlebell in the rack or goblet position.","Squat with your torso controlled.","Drive out of the squat and press overhead in one fluid movement."],sourceGroup:"Kettlebell Configuration"},
{id:"kb-high-pull",name:"Kettlebell High Pull",area:"Full Body & Cardio",equipment:"Kettlebell",img:null,sets:"3 sets \u00d7 10\u201312 reps",tips:["Begin with a hip-driven swing.","As the bell rises, guide your elbow up and back.","Keep the kettlebell close to your body and control the return."],sourceGroup:"Kettlebell Configuration"},
{id:"kb-deadlift-high-pull",name:"Kettlebell Deadlift to High Pull",area:"Full Body & Cardio",equipment:"Kettlebell",img:null,sets:"3 sets \u00d7 10 reps",tips:["Deadlift the kettlebell using your hips and legs.","Continue the upward drive and guide the bell toward chest height.","Lower with control and reset your hinge."],sourceGroup:"Kettlebell Configuration"},
{id:"kb-squat-press",name:"Kettlebell Squat to Press",area:"Full Body & Cardio",equipment:"Kettlebell",img:null,sets:"3 sets \u00d7 10 reps",tips:["Hold the kettlebell at chest or rack position.","Complete a controlled squat.","Stand fully and press overhead."],sourceGroup:"Kettlebell Configuration"},
{id:"kb-farmers-carry",name:"Kettlebell Farmer's Carry",area:"Full Body & Cardio",equipment:"Kettlebell",img:null,sets:"3 \u00d7 30\u201360 sec",tips:["Hold the kettlebell securely at your side; use two if available.","Stand tall with your ribs stacked and core braced.","Walk with controlled steps without leaning."],sourceGroup:"Kettlebell Configuration"},
{id:"kb-figure-eight",name:"Kettlebell Figure Eight",area:"Full Body & Cardio",equipment:"Kettlebell",img:null,sets:"3 \u00d7 30\u201345 sec",tips:["Take a slightly wider athletic stance.","Pass the kettlebell behind one leg and transfer it to the other hand.","Continue tracing a controlled figure-eight path while keeping your hips back."],sourceGroup:"Kettlebell Configuration"},
{id:"loop-0",name:"Banded Squat",area:"Lower Body",equipment:"Resistance Loop Bands",img:null,sets:"3 sets \u00d7 12\u201315 reps",tips:["Place the loop band securely and keep it under tension.","Move slowly through the full comfortable range.","Keep your core braced and control the return."],sourceGroup:"Resistance Loop Bands"},
{id:"loop-1",name:"Banded Sumo Squat",area:"Lower Body",equipment:"Resistance Loop Bands",img:null,sets:"3 sets \u00d7 12\u201315 reps",tips:["Place the loop band securely and keep it under tension.","Move slowly through the full comfortable range.","Keep your core braced and control the return."],sourceGroup:"Resistance Loop Bands"},
{id:"loop-2",name:"Banded Squat Pulses",area:"Lower Body",equipment:"Resistance Loop Bands",img:null,sets:"3 sets \u00d7 12\u201315 reps",tips:["Place the loop band securely and keep it under tension.","Move slowly through the full comfortable range.","Keep your core braced and control the return."],sourceGroup:"Resistance Loop Bands"},
{id:"loop-3",name:"Banded Lateral Walk",area:"Lower Body",equipment:"Resistance Loop Bands",img:null,sets:"3 sets \u00d7 12\u201315 reps",tips:["Place the loop band securely and keep it under tension.","Move slowly through the full comfortable range.","Keep your core braced and control the return."],sourceGroup:"Resistance Loop Bands"},
{id:"loop-4",name:"Banded Monster Walk",area:"Lower Body",equipment:"Resistance Loop Bands",img:null,sets:"3 sets \u00d7 12\u201315 reps",tips:["Place the loop band securely and keep it under tension.","Move slowly through the full comfortable range.","Keep your core braced and control the return."],sourceGroup:"Resistance Loop Bands"},
{id:"loop-5",name:"Banded Glute Bridge",area:"Lower Body",equipment:"Resistance Loop Bands",img:null,sets:"3 sets \u00d7 12\u201315 reps",tips:["Place the loop band securely and keep it under tension.","Move slowly through the full comfortable range.","Keep your core braced and control the return."],sourceGroup:"Resistance Loop Bands"},
{id:"loop-6",name:"Banded Glute Bridge Abduction",area:"Lower Body",equipment:"Resistance Loop Bands",img:null,sets:"3 sets \u00d7 12\u201315 reps",tips:["Place the loop band securely and keep it under tension.","Move slowly through the full comfortable range.","Keep your core braced and control the return."],sourceGroup:"Resistance Loop Bands"},
{id:"loop-7",name:"Banded Hip Thrust",area:"Lower Body",equipment:"Resistance Loop Bands",img:null,sets:"3 sets \u00d7 12\u201315 reps",tips:["Place the loop band securely and keep it under tension.","Move slowly through the full comfortable range.","Keep your core braced and control the return."],sourceGroup:"Resistance Loop Bands"},
{id:"loop-8",name:"Banded Donkey Kick",area:"Lower Body",equipment:"Resistance Loop Bands",img:null,sets:"3 sets \u00d7 12\u201315 reps",tips:["Place the loop band securely and keep it under tension.","Move slowly through the full comfortable range.","Keep your core braced and control the return."],sourceGroup:"Resistance Loop Bands"},
{id:"loop-9",name:"Banded Fire Hydrant",area:"Lower Body",equipment:"Resistance Loop Bands",img:null,sets:"3 sets \u00d7 12\u201315 reps",tips:["Place the loop band securely and keep it under tension.","Move slowly through the full comfortable range.","Keep your core braced and control the return."],sourceGroup:"Resistance Loop Bands"},
{id:"loop-10",name:"Banded Standing Kickback",area:"Lower Body",equipment:"Resistance Loop Bands",img:null,sets:"3 sets \u00d7 12\u201315 reps",tips:["Place the loop band securely and keep it under tension.","Move slowly through the full comfortable range.","Keep your core braced and control the return."],sourceGroup:"Resistance Loop Bands"},
{id:"loop-11",name:"Banded Side Leg Raise",area:"Lower Body",equipment:"Resistance Loop Bands",img:null,sets:"3 sets \u00d7 12\u201315 reps",tips:["Place the loop band securely and keep it under tension.","Move slowly through the full comfortable range.","Keep your core braced and control the return."],sourceGroup:"Resistance Loop Bands"},
{id:"loop-12",name:"Banded Clamshell",area:"Lower Body",equipment:"Resistance Loop Bands",img:null,sets:"3 sets \u00d7 12\u201315 reps",tips:["Place the loop band securely and keep it under tension.","Move slowly through the full comfortable range.","Keep your core braced and control the return."],sourceGroup:"Resistance Loop Bands"},
{id:"loop-13",name:"Banded Hip Abduction",area:"Lower Body",equipment:"Resistance Loop Bands",img:null,sets:"3 sets \u00d7 12\u201315 reps",tips:["Place the loop band securely and keep it under tension.","Move slowly through the full comfortable range.","Keep your core braced and control the return."],sourceGroup:"Resistance Loop Bands"},
{id:"loop-14",name:"Banded Reverse Lunge",area:"Lower Body",equipment:"Resistance Loop Bands",img:null,sets:"3 sets \u00d7 12\u201315 reps",tips:["Place the loop band securely and keep it under tension.","Move slowly through the full comfortable range.","Keep your core braced and control the return."],sourceGroup:"Resistance Loop Bands"},
{id:"loop-15",name:"Banded Curtsy Lunge",area:"Lower Body",equipment:"Resistance Loop Bands",img:null,sets:"3 sets \u00d7 12\u201315 reps",tips:["Place the loop band securely and keep it under tension.","Move slowly through the full comfortable range.","Keep your core braced and control the return."],sourceGroup:"Resistance Loop Bands"},
{id:"loop-16",name:"Banded Standing Hip Extension",area:"Lower Body",equipment:"Resistance Loop Bands",img:null,sets:"3 sets \u00d7 12\u201315 reps",tips:["Place the loop band securely and keep it under tension.","Move slowly through the full comfortable range.","Keep your core braced and control the return."],sourceGroup:"Resistance Loop Bands"},
{id:"loop-core-0",name:"Banded Mountain Climbers",area:"Core",equipment:"Resistance Loop Bands",img:null,sets:"3 sets \u00d7 10\u201315 reps",tips:["Set the band so it stays secure throughout the movement.","Brace your abdomen before starting each repetition.","Move with control and resist the band on the return."],sourceGroup:"Resistance Loop Bands"},
{id:"loop-core-1",name:"Banded Plank Leg Raises",area:"Core",equipment:"Resistance Loop Bands",img:null,sets:"3 sets \u00d7 10\u201315 reps",tips:["Set the band so it stays secure throughout the movement.","Brace your abdomen before starting each repetition.","Move with control and resist the band on the return."],sourceGroup:"Resistance Loop Bands"},
{id:"loop-core-2",name:"Banded Bicycle Crunch",area:"Core",equipment:"Resistance Loop Bands",img:null,sets:"3 sets \u00d7 10\u201315 reps",tips:["Set the band so it stays secure throughout the movement.","Brace your abdomen before starting each repetition.","Move with control and resist the band on the return."],sourceGroup:"Resistance Loop Bands"},
{id:"loop-core-3",name:"Banded Dead Bug",area:"Core",equipment:"Resistance Loop Bands",img:null,sets:"3 sets \u00d7 10\u201315 reps",tips:["Set the band so it stays secure throughout the movement.","Brace your abdomen before starting each repetition.","Move with control and resist the band on the return."],sourceGroup:"Resistance Loop Bands"},
{id:"tube-u-0",name:"Resistance Band Chest Press",area:"Upper Body",equipment:"Resistance/Toning Tubes",img:null,sets:"3 sets \u00d7 10\u201315 reps",tips:["Anchor or position the tube securely before starting.","Keep steady tension through the working range.","Control both the effort and return phase."],sourceGroup:"Resistance/Toning Tubes"},
{id:"tube-u-1",name:"Resistance Band Chest Fly",area:"Upper Body",equipment:"Resistance/Toning Tubes",img:null,sets:"3 sets \u00d7 10\u201315 reps",tips:["Anchor or position the tube securely before starting.","Keep steady tension through the working range.","Control both the effort and return phase."],sourceGroup:"Resistance/Toning Tubes"},
{id:"tube-u-2",name:"Resistance Band Row",area:"Upper Body",equipment:"Resistance/Toning Tubes",img:null,sets:"3 sets \u00d7 10\u201315 reps",tips:["Anchor or position the tube securely before starting.","Keep steady tension through the working range.","Control both the effort and return phase."],sourceGroup:"Resistance/Toning Tubes"},
{id:"tube-u-3",name:"Resistance Band Lat Pulldown",area:"Upper Body",equipment:"Resistance/Toning Tubes",img:null,sets:"3 sets \u00d7 10\u201315 reps",tips:["Anchor or position the tube securely before starting.","Keep steady tension through the working range.","Control both the effort and return phase."],sourceGroup:"Resistance/Toning Tubes"},
{id:"tube-u-4",name:"Resistance Band Shoulder Press",area:"Upper Body",equipment:"Resistance/Toning Tubes",img:null,sets:"3 sets \u00d7 10\u201315 reps",tips:["Anchor or position the tube securely before starting.","Keep steady tension through the working range.","Control both the effort and return phase."],sourceGroup:"Resistance/Toning Tubes"},
{id:"tube-u-5",name:"Resistance Band Front Raise",area:"Upper Body",equipment:"Resistance/Toning Tubes",img:null,sets:"3 sets \u00d7 10\u201315 reps",tips:["Anchor or position the tube securely before starting.","Keep steady tension through the working range.","Control both the effort and return phase."],sourceGroup:"Resistance/Toning Tubes"},
{id:"tube-u-6",name:"Resistance Band Lateral Raise",area:"Upper Body",equipment:"Resistance/Toning Tubes",img:null,sets:"3 sets \u00d7 10\u201315 reps",tips:["Anchor or position the tube securely before starting.","Keep steady tension through the working range.","Control both the effort and return phase."],sourceGroup:"Resistance/Toning Tubes"},
{id:"tube-u-7",name:"Resistance Band Reverse Fly",area:"Upper Body",equipment:"Resistance/Toning Tubes",img:null,sets:"3 sets \u00d7 10\u201315 reps",tips:["Anchor or position the tube securely before starting.","Keep steady tension through the working range.","Control both the effort and return phase."],sourceGroup:"Resistance/Toning Tubes"},
{id:"tube-u-8",name:"Resistance Band Face Pull",area:"Upper Body",equipment:"Resistance/Toning Tubes",img:null,sets:"3 sets \u00d7 10\u201315 reps",tips:["Anchor or position the tube securely before starting.","Keep steady tension through the working range.","Control both the effort and return phase."],sourceGroup:"Resistance/Toning Tubes"},
{id:"tube-u-9",name:"Resistance Band Bicep Curl",area:"Upper Body",equipment:"Resistance/Toning Tubes",img:null,sets:"3 sets \u00d7 10\u201315 reps",tips:["Anchor or position the tube securely before starting.","Keep steady tension through the working range.","Control both the effort and return phase."],sourceGroup:"Resistance/Toning Tubes"},
{id:"tube-u-10",name:"Resistance Band Hammer Curl",area:"Upper Body",equipment:"Resistance/Toning Tubes",img:null,sets:"3 sets \u00d7 10\u201315 reps",tips:["Anchor or position the tube securely before starting.","Keep steady tension through the working range.","Control both the effort and return phase."],sourceGroup:"Resistance/Toning Tubes"},
{id:"tube-u-11",name:"Resistance Band Tricep Extension",area:"Upper Body",equipment:"Resistance/Toning Tubes",img:"assets/resistance-band-tricep-extension.jpg",sets:"3 sets \u00d7 10\u201315 reps",tips:["Anchor or position the tube securely before starting.","Keep steady tension through the working range.","Control both the effort and return phase."],sourceGroup:"Resistance/Toning Tubes"},
{id:"tube-u-12",name:"Resistance Band Tricep Pushdown",area:"Upper Body",equipment:"Resistance/Toning Tubes",img:null,sets:"3 sets \u00d7 10\u201315 reps",tips:["Anchor or position the tube securely before starting.","Keep steady tension through the working range.","Control both the effort and return phase."],sourceGroup:"Resistance/Toning Tubes"},
{id:"tube-u-13",name:"Resistance Band Upright Row",area:"Upper Body",equipment:"Resistance/Toning Tubes",img:null,sets:"3 sets \u00d7 10\u201315 reps",tips:["Anchor or position the tube securely before starting.","Keep steady tension through the working range.","Control both the effort and return phase."],sourceGroup:"Resistance/Toning Tubes"},
{id:"tube-l-0",name:"Resistance Band Squat",area:"Lower Body",equipment:"Resistance/Toning Tubes",img:null,sets:"3 sets \u00d7 10\u201315 reps",tips:["Stand securely on or anchor the tube as required.","Brace your core and keep knees aligned with toes.","Maintain band tension while moving under control."],sourceGroup:"Resistance/Toning Tubes"},
{id:"tube-l-1",name:"Resistance Band Deadlift",area:"Lower Body",equipment:"Resistance/Toning Tubes",img:null,sets:"3 sets \u00d7 10\u201315 reps",tips:["Stand securely on or anchor the tube as required.","Brace your core and keep knees aligned with toes.","Maintain band tension while moving under control."],sourceGroup:"Resistance/Toning Tubes"},
{id:"tube-l-2",name:"Resistance Band Romanian Deadlift",area:"Lower Body",equipment:"Resistance/Toning Tubes",img:null,sets:"3 sets \u00d7 10\u201315 reps",tips:["Stand securely on or anchor the tube as required.","Brace your core and keep knees aligned with toes.","Maintain band tension while moving under control."],sourceGroup:"Resistance/Toning Tubes"},
{id:"tube-l-3",name:"Resistance Band Good Morning",area:"Lower Body",equipment:"Resistance/Toning Tubes",img:null,sets:"3 sets \u00d7 10\u201315 reps",tips:["Stand securely on or anchor the tube as required.","Brace your core and keep knees aligned with toes.","Maintain band tension while moving under control."],sourceGroup:"Resistance/Toning Tubes"},
{id:"tube-l-4",name:"Resistance Band Lunge",area:"Lower Body",equipment:"Resistance/Toning Tubes",img:null,sets:"3 sets \u00d7 10\u201315 reps",tips:["Stand securely on or anchor the tube as required.","Brace your core and keep knees aligned with toes.","Maintain band tension while moving under control."],sourceGroup:"Resistance/Toning Tubes"},
{id:"tube-l-5",name:"Resistance Band Glute Kickback",area:"Lower Body",equipment:"Resistance/Toning Tubes",img:null,sets:"3 sets \u00d7 10\u201315 reps",tips:["Stand securely on or anchor the tube as required.","Brace your core and keep knees aligned with toes.","Maintain band tension while moving under control."],sourceGroup:"Resistance/Toning Tubes"},
{id:"tube-c-0",name:"Resistance Band Wood Chop",area:"Core",equipment:"Resistance/Toning Tubes",img:null,sets:"3 sets \u00d7 10\u201312 each side",tips:["Anchor the tube securely.","Brace your core before pulling or resisting rotation.","Keep hips and shoulders controlled throughout."],sourceGroup:"Resistance/Toning Tubes"},
{id:"tube-c-1",name:"Resistance Band Pallof Press",area:"Core",equipment:"Resistance/Toning Tubes",img:null,sets:"3 sets \u00d7 10\u201312 each side",tips:["Anchor the tube securely.","Brace your core before pulling or resisting rotation.","Keep hips and shoulders controlled throughout."],sourceGroup:"Resistance/Toning Tubes"},
{id:"tube-c-2",name:"Resistance Band Standing Rotation",area:"Core",equipment:"Resistance/Toning Tubes",img:null,sets:"3 sets \u00d7 10\u201312 each side",tips:["Anchor the tube securely.","Brace your core before pulling or resisting rotation.","Keep hips and shoulders controlled throughout."],sourceGroup:"Resistance/Toning Tubes"},
{id:"tube-c-3",name:"Resistance Band Kneeling Crunch",area:"Core",equipment:"Resistance/Toning Tubes",img:null,sets:"3 sets \u00d7 10\u201312 each side",tips:["Anchor the tube securely.","Brace your core before pulling or resisting rotation.","Keep hips and shoulders controlled throughout."],sourceGroup:"Resistance/Toning Tubes"},
{id:"slider-c-0",name:"Slider Mountain Climbers",area:"Core",equipment:"Disc Sliders",img:null,sets:"3 sets \u00d7 8\u201312 reps",tips:["Place sliders securely under the hands or feet required.","Brace your core and keep your trunk stable.","Slide smoothly rather than using momentum."],sourceGroup:"Disc Sliders"},
{id:"slider-c-1",name:"Slider Plank Knee Tucks",area:"Core",equipment:"Disc Sliders",img:null,sets:"3 sets \u00d7 8\u201312 reps",tips:["Place sliders securely under the hands or feet required.","Brace your core and keep your trunk stable.","Slide smoothly rather than using momentum."],sourceGroup:"Disc Sliders"},
{id:"slider-c-2",name:"Slider Pike",area:"Core",equipment:"Disc Sliders",img:null,sets:"3 sets \u00d7 8\u201312 reps",tips:["Place sliders securely under the hands or feet required.","Brace your core and keep your trunk stable.","Slide smoothly rather than using momentum."],sourceGroup:"Disc Sliders"},
{id:"slider-c-3",name:"Slider Body Saw",area:"Core",equipment:"Disc Sliders",img:null,sets:"3 sets \u00d7 8\u201312 reps",tips:["Place sliders securely under the hands or feet required.","Brace your core and keep your trunk stable.","Slide smoothly rather than using momentum."],sourceGroup:"Disc Sliders"},
{id:"slider-c-4",name:"Slider Plank Jacks",area:"Core",equipment:"Disc Sliders",img:null,sets:"3 sets \u00d7 8\u201312 reps",tips:["Place sliders securely under the hands or feet required.","Brace your core and keep your trunk stable.","Slide smoothly rather than using momentum."],sourceGroup:"Disc Sliders"},
{id:"slider-c-5",name:"Slider Bear Crawl",area:"Core",equipment:"Disc Sliders",img:null,sets:"3 sets \u00d7 8\u201312 reps",tips:["Place sliders securely under the hands or feet required.","Brace your core and keep your trunk stable.","Slide smoothly rather than using momentum."],sourceGroup:"Disc Sliders"},
{id:"slider-c-6",name:"Slider Single-Leg Knee Tuck",area:"Core",equipment:"Disc Sliders",img:null,sets:"3 sets \u00d7 8\u201312 reps",tips:["Place sliders securely under the hands or feet required.","Brace your core and keep your trunk stable.","Slide smoothly rather than using momentum."],sourceGroup:"Disc Sliders"},
{id:"slider-c-7",name:"Slider Cross-Body Mountain Climbers",area:"Core",equipment:"Disc Sliders",img:null,sets:"3 sets \u00d7 8\u201312 reps",tips:["Place sliders securely under the hands or feet required.","Brace your core and keep your trunk stable.","Slide smoothly rather than using momentum."],sourceGroup:"Disc Sliders"},
{id:"slider-l-0",name:"Slider Reverse Lunge",area:"Lower Body",equipment:"Disc Sliders",img:null,sets:"3 sets \u00d7 8\u201312 each side",tips:["Keep the supporting foot firmly planted.","Slide the working leg slowly through the movement.","Use the standing leg and core to return under control."],sourceGroup:"Disc Sliders"},
{id:"slider-l-1",name:"Slider Lateral Lunge",area:"Lower Body",equipment:"Disc Sliders",img:null,sets:"3 sets \u00d7 8\u201312 each side",tips:["Keep the supporting foot firmly planted.","Slide the working leg slowly through the movement.","Use the standing leg and core to return under control."],sourceGroup:"Disc Sliders"},
{id:"slider-l-2",name:"Slider Curtsy Lunge",area:"Lower Body",equipment:"Disc Sliders",img:null,sets:"3 sets \u00d7 8\u201312 each side",tips:["Keep the supporting foot firmly planted.","Slide the working leg slowly through the movement.","Use the standing leg and core to return under control."],sourceGroup:"Disc Sliders"},
{id:"slider-l-3",name:"Slider Hamstring Curl",area:"Lower Body",equipment:"Disc Sliders",img:null,sets:"3 sets \u00d7 8\u201312 each side",tips:["Keep the supporting foot firmly planted.","Slide the working leg slowly through the movement.","Use the standing leg and core to return under control."],sourceGroup:"Disc Sliders"},
{id:"slider-l-4",name:"Slider Glute Bridge Hamstring Curl",area:"Lower Body",equipment:"Disc Sliders",img:null,sets:"3 sets \u00d7 8\u201312 each side",tips:["Keep the supporting foot firmly planted.","Slide the working leg slowly through the movement.","Use the standing leg and core to return under control."],sourceGroup:"Disc Sliders"},
{id:"slider-l-5",name:"Slider Side Lunge",area:"Lower Body",equipment:"Disc Sliders",img:null,sets:"3 sets \u00d7 8\u201312 each side",tips:["Keep the supporting foot firmly planted.","Slide the working leg slowly through the movement.","Use the standing leg and core to return under control."],sourceGroup:"Disc Sliders"},
{id:"slider-l-6",name:"Slider Single-Leg Lunge",area:"Lower Body",equipment:"Disc Sliders",img:null,sets:"3 sets \u00d7 8\u201312 each side",tips:["Keep the supporting foot firmly planted.","Slide the working leg slowly through the movement.","Use the standing leg and core to return under control."],sourceGroup:"Disc Sliders"},
{id:"slider-f-0",name:"Slider Burpee",area:"Full Body",equipment:"Disc Sliders",img:null,sets:"3 sets \u00d7 8\u201312 reps",tips:["Start from a stable plank or standing position as required.","Keep the sliders controlled during transitions.","Maintain core tension throughout the movement."],sourceGroup:"Disc Sliders"},
{id:"slider-f-1",name:"Slider Squat Thrust",area:"Full Body",equipment:"Disc Sliders",img:null,sets:"3 sets \u00d7 8\u201312 reps",tips:["Start from a stable plank or standing position as required.","Keep the sliders controlled during transitions.","Maintain core tension throughout the movement."],sourceGroup:"Disc Sliders"},
{id:"slider-f-2",name:"Slider Plank to Lunge",area:"Full Body",equipment:"Disc Sliders",img:null,sets:"3 sets \u00d7 8\u201312 reps",tips:["Start from a stable plank or standing position as required.","Keep the sliders controlled during transitions.","Maintain core tension throughout the movement."],sourceGroup:"Disc Sliders"},
{id:"rope-0",name:"Basic Jump",area:"Cardio",equipment:"Skipping Rope",img:null,sets:"5 \u00d7 45 sec",tips:["Keep jumps low and land softly on the balls of your feet.","Turn the rope mainly from your wrists.","Keep shoulders relaxed and maintain a steady rhythm."],sourceGroup:"Skipping Rope"},
{id:"rope-1",name:"Alternate-Foot Jump",area:"Cardio",equipment:"Skipping Rope",img:null,sets:"5 \u00d7 45 sec",tips:["Keep jumps low and land softly on the balls of your feet.","Turn the rope mainly from your wrists.","Keep shoulders relaxed and maintain a steady rhythm."],sourceGroup:"Skipping Rope"},
{id:"rope-2",name:"Boxer Step",area:"Cardio",equipment:"Skipping Rope",img:null,sets:"5 \u00d7 45 sec",tips:["Keep jumps low and land softly on the balls of your feet.","Turn the rope mainly from your wrists.","Keep shoulders relaxed and maintain a steady rhythm."],sourceGroup:"Skipping Rope"},
{id:"rope-3",name:"High-Knee Jump",area:"Cardio",equipment:"Skipping Rope",img:null,sets:"5 \u00d7 45 sec",tips:["Keep jumps low and land softly on the balls of your feet.","Turn the rope mainly from your wrists.","Keep shoulders relaxed and maintain a steady rhythm."],sourceGroup:"Skipping Rope"},
{id:"rope-4",name:"Side-to-Side Jump",area:"Cardio",equipment:"Skipping Rope",img:null,sets:"5 \u00d7 45 sec",tips:["Keep jumps low and land softly on the balls of your feet.","Turn the rope mainly from your wrists.","Keep shoulders relaxed and maintain a steady rhythm."],sourceGroup:"Skipping Rope"},
{id:"rope-5",name:"Forward-and-Back Jump",area:"Cardio",equipment:"Skipping Rope",img:null,sets:"5 \u00d7 45 sec",tips:["Keep jumps low and land softly on the balls of your feet.","Turn the rope mainly from your wrists.","Keep shoulders relaxed and maintain a steady rhythm."],sourceGroup:"Skipping Rope"},
{id:"rope-6",name:"Skier Jump",area:"Cardio",equipment:"Skipping Rope",img:null,sets:"5 \u00d7 45 sec",tips:["Keep jumps low and land softly on the balls of your feet.","Turn the rope mainly from your wrists.","Keep shoulders relaxed and maintain a steady rhythm."],sourceGroup:"Skipping Rope"},
{id:"rope-7",name:"Bell Jump",area:"Cardio",equipment:"Skipping Rope",img:null,sets:"5 \u00d7 45 sec",tips:["Keep jumps low and land softly on the balls of your feet.","Turn the rope mainly from your wrists.","Keep shoulders relaxed and maintain a steady rhythm."],sourceGroup:"Skipping Rope"},
{id:"rope-8",name:"Running Skip",area:"Cardio",equipment:"Skipping Rope",img:null,sets:"5 \u00d7 45 sec",tips:["Keep jumps low and land softly on the balls of your feet.","Turn the rope mainly from your wrists.","Keep shoulders relaxed and maintain a steady rhythm."],sourceGroup:"Skipping Rope"},
{id:"rope-9",name:"Double Under",area:"Cardio",equipment:"Skipping Rope",img:null,sets:"5 \u00d7 45 sec",tips:["Keep jumps low and land softly on the balls of your feet.","Turn the rope mainly from your wrists.","Keep shoulders relaxed and maintain a steady rhythm."],sourceGroup:"Skipping Rope"},
{id:"rope-int-0",name:"30 sec Jump / 30 sec Rest",area:"Cardio",equipment:"Skipping Rope",img:null,sets:"10 rounds",tips:["Use Basic Jump or another comfortable skipping style.","Keep effort appropriate for the full interval.","Use rest periods to recover before the next round."],sourceGroup:"Skipping Rope"},
{id:"rope-int-1",name:"45 sec Jump / 15 sec Rest",area:"Cardio",equipment:"Skipping Rope",img:null,sets:"10 rounds",tips:["Use Basic Jump or another comfortable skipping style.","Keep effort appropriate for the full interval.","Use rest periods to recover before the next round."],sourceGroup:"Skipping Rope"},
{id:"rope-int-2",name:"60 sec Jump / 30 sec Rest",area:"Cardio",equipment:"Skipping Rope",img:null,sets:"8 rounds",tips:["Use Basic Jump or another comfortable skipping style.","Keep effort appropriate for the full interval.","Use rest periods to recover before the next round."],sourceGroup:"Skipping Rope"},
{id:"rope-int-3",name:"5-Minute Continuous Moderate Skipping",area:"Cardio",equipment:"Skipping Rope",img:null,sets:"5 min",tips:["Use Basic Jump or another comfortable skipping style.","Keep effort appropriate for the full interval.","Use rest periods to recover before the next round."],sourceGroup:"Skipping Rope"},
{id:"rope-int-4",name:"10-Minute Interval Skipping Session",area:"Cardio",equipment:"Skipping Rope",img:null,sets:"10 min",tips:["Use Basic Jump or another comfortable skipping style.","Keep effort appropriate for the full interval.","Use rest periods to recover before the next round."],sourceGroup:"Skipping Rope"},
{id:"tm-w-0",name:"Easy Walk",area:"Cardio",equipment:"Treadmill",img:null,sets:"10\u201320 min",tips:["Start at an easy pace before increasing speed or incline.","Walk tall with a natural arm swing.","Reduce speed and incline gradually to finish."],sourceGroup:"Treadmill"},
{id:"tm-w-1",name:"Brisk Walk",area:"Cardio",equipment:"Treadmill",img:null,sets:"10\u201320 min",tips:["Start at an easy pace before increasing speed or incline.","Walk tall with a natural arm swing.","Reduce speed and incline gradually to finish."],sourceGroup:"Treadmill"},
{id:"tm-w-2",name:"Incline Walk",area:"Cardio",equipment:"Treadmill",img:null,sets:"10\u201320 min",tips:["Start at an easy pace before increasing speed or incline.","Walk tall with a natural arm swing.","Reduce speed and incline gradually to finish."],sourceGroup:"Treadmill"},
{id:"tm-w-3",name:"Progressive Incline Walk",area:"Cardio",equipment:"Treadmill",img:null,sets:"10\u201320 min",tips:["Start at an easy pace before increasing speed or incline.","Walk tall with a natural arm swing.","Reduce speed and incline gradually to finish."],sourceGroup:"Treadmill"},
{id:"tm-w-4",name:"Power Walk",area:"Cardio",equipment:"Treadmill",img:null,sets:"10\u201320 min",tips:["Start at an easy pace before increasing speed or incline.","Walk tall with a natural arm swing.","Reduce speed and incline gradually to finish."],sourceGroup:"Treadmill"},
{id:"tm-w-5",name:"Incline Power Walk",area:"Cardio",equipment:"Treadmill",img:null,sets:"10\u201320 min",tips:["Start at an easy pace before increasing speed or incline.","Walk tall with a natural arm swing.","Reduce speed and incline gradually to finish."],sourceGroup:"Treadmill"},
{id:"tm-r-0",name:"Easy Jog",area:"Cardio",equipment:"Treadmill",img:null,sets:"10\u201320 min",tips:["Warm up before increasing running intensity.","Use a pace that allows you to maintain safe, controlled form.","Cool down by gradually reducing speed."],sourceGroup:"Treadmill"},
{id:"tm-r-1",name:"Steady-State Run",area:"Cardio",equipment:"Treadmill",img:null,sets:"10\u201320 min",tips:["Warm up before increasing running intensity.","Use a pace that allows you to maintain safe, controlled form.","Cool down by gradually reducing speed."],sourceGroup:"Treadmill"},
{id:"tm-r-2",name:"Running Intervals",area:"Cardio",equipment:"Treadmill",img:null,sets:"10\u201320 min",tips:["Warm up before increasing running intensity.","Use a pace that allows you to maintain safe, controlled form.","Cool down by gradually reducing speed."],sourceGroup:"Treadmill"},
{id:"tm-r-3",name:"Sprint Intervals",area:"Cardio",equipment:"Treadmill",img:null,sets:"10\u201320 min",tips:["Warm up before increasing running intensity.","Use a pace that allows you to maintain safe, controlled form.","Cool down by gradually reducing speed."],sourceGroup:"Treadmill"},
{id:"tm-r-4",name:"Walk/Jog Intervals",area:"Cardio",equipment:"Treadmill",img:null,sets:"10\u201320 min",tips:["Warm up before increasing running intensity.","Use a pace that allows you to maintain safe, controlled form.","Cool down by gradually reducing speed."],sourceGroup:"Treadmill"},
{id:"stepper-regular",name:"Regular Stepping",area:"Cardio",equipment:"Mini Stepper",img:null,sets:"3 \u00d7 5 min",tips:["Stand tall on the stepper with your core lightly braced.","Press each pedal down smoothly and keep a steady rhythm.","Keep your knees tracking forward and avoid leaning heavily on supports."],sourceGroup:"Mini Stepper"},
{id:"stepper-fast",name:"Fast Stepping",area:"Cardio",equipment:"Mini Stepper",img:null,sets:"6 \u00d7 60 sec",tips:["Begin with an easy warm-up pace.","Increase cadence while keeping each step controlled.","Slow down if your posture or stepping rhythm starts to break down."],sourceGroup:"Mini Stepper"},
{id:"stepper-slow-resistance",name:"Slow Resistance Stepping",area:"Cardio",equipment:"Mini Stepper",img:null,sets:"4 \u00d7 2 min",tips:["Use a higher resistance if your stepper allows it.","Take slower, deliberate steps through a comfortable range.","Drive through your legs rather than bouncing."],sourceGroup:"Mini Stepper"},
{id:"stepper-interval",name:"Interval Stepping",area:"Cardio",equipment:"Mini Stepper",img:null,sets:"10 min \u00b7 45 sec work / 30 sec easy",tips:["Warm up at an easy pace.","Alternate faster stepping with easy recovery periods.","Keep moving during recovery rather than stopping completely."],sourceGroup:"Mini Stepper"},
{id:"stepper-deep",name:"Deep Step",area:"Cardio & Lower Body",equipment:"Mini Stepper",img:null,sets:"3 \u00d7 2 min",tips:["Use a slower cadence and allow a deeper controlled pedal stroke.","Keep your torso tall and knees aligned.","Press through each foot smoothly without forcing excessive depth."],sourceGroup:"Mini Stepper"},
{id:"stepper-half-squat",name:"Half-Squat Stepping",area:"Cardio & Lower Body",equipment:"Mini Stepper",img:null,sets:"3 \u00d7 60 sec",tips:["Lower into a shallow squat while maintaining a neutral spine.","Keep your knees aligned over your feet as you step.","Use a controlled pace and return upright if form deteriorates."],sourceGroup:"Mini Stepper"},
{id:"stepper-bicep-curl",name:"Stepper Bicep Curl",area:"Cardio & Upper Body",equipment:"Mini Stepper",img:null,sets:"3 \u00d7 12\u201315 reps",tips:["Maintain a steady stepping rhythm.","Hold the resistance-band handles with palms forward.","Curl toward your shoulders while keeping elbows close to your sides."],sourceGroup:"Mini Stepper"},
{id:"stepper-hammer-curl",name:"Stepper Hammer Curl",area:"Cardio & Upper Body",equipment:"Mini Stepper",img:null,sets:"3 \u00d7 12\u201315 reps",tips:["Step at a manageable pace.","Keep palms facing each other throughout the curl.","Avoid swinging your upper arms as you curl."],sourceGroup:"Mini Stepper"},
{id:"stepper-shoulder-press",name:"Stepper Shoulder Press",area:"Cardio & Upper Body",equipment:"Mini Stepper",img:null,sets:"3 \u00d7 10\u201312 reps",tips:["Maintain stable stepping before adding the press.","Start with handles near shoulder height.","Brace your core and press overhead without arching your back."],sourceGroup:"Mini Stepper"},
{id:"stepper-front-raise",name:"Stepper Front Raise",area:"Cardio & Upper Body",equipment:"Mini Stepper",img:null,sets:"3 \u00d7 10\u201312 reps",tips:["Keep your stepping pace controlled.","Raise the band handles forward to about shoulder height.","Lower slowly while keeping your torso still."],sourceGroup:"Mini Stepper"},
{id:"stepper-lateral-raise",name:"Stepper Lateral Raise",area:"Cardio & Upper Body",equipment:"Mini Stepper",img:null,sets:"3 \u00d7 10\u201312 reps",tips:["Establish a steady stepping rhythm.","Raise the handles out to the sides with soft elbows.","Stop around shoulder height and lower under control."],sourceGroup:"Mini Stepper"},
{id:"stepper-upright-row",name:"Stepper Upright Row",area:"Cardio & Upper Body",equipment:"Mini Stepper",img:null,sets:"3 \u00d7 10\u201312 reps",tips:["Step steadily with your core braced.","Pull the handles upward with elbows leading.","Keep the movement controlled and within a comfortable shoulder range."],sourceGroup:"Mini Stepper"},
{id:"stepper-tricep-extension",name:"Stepper Tricep Extension",area:"Cardio & Upper Body",equipment:"Mini Stepper",img:null,sets:"3 \u00d7 10\u201312 reps",tips:["Maintain balance and a moderate stepping pace.","Position the resistance band securely for the extension.","Keep upper arms stable as you straighten your elbows."],sourceGroup:"Mini Stepper"},
{id:"stepper-row",name:"Stepper Row",area:"Cardio & Upper Body",equipment:"Mini Stepper",img:null,sets:"3 \u00d7 12\u201315 reps",tips:["Keep your stepping rhythm steady.","Pull the resistance-band handles toward your ribs.","Squeeze your shoulder blades and return slowly."],sourceGroup:"Mini Stepper"},
{id:"bike-easy",name:"Easy Cycling",area:"Cardio",equipment:"Stationary Bike",img:null,sets:"10\u201320 min \u00b7 easy pace",tips:["Adjust the seat so your knee remains slightly bent at the bottom of the pedal stroke.","Pedal at a comfortable cadence with light resistance.","Keep your shoulders relaxed and use this session for warm-up or recovery."],sourceGroup:"Stationary Bike"},
{id:"bike-moderate",name:"Moderate Steady-State Cycling",area:"Cardio",equipment:"Stationary Bike",img:null,sets:"15\u201330 min \u00b7 moderate pace",tips:["Warm up for a few minutes at easy resistance.","Settle into a sustainable cadence and resistance.","Keep your effort steady rather than repeatedly speeding up and slowing down."],sourceGroup:"Stationary Bike"},
{id:"bike-high-resistance",name:"High-Resistance Cycling",area:"Cardio & Lower Body",equipment:"Stationary Bike",img:null,sets:"6 \u00d7 60 sec",tips:["Warm up before increasing resistance.","Increase resistance enough to challenge your legs while maintaining smooth pedaling.","Recover at lighter resistance between work periods."],sourceGroup:"Stationary Bike"},
{id:"bike-low-resistance-speed",name:"Low-Resistance Speed Cycling",area:"Cardio",equipment:"Stationary Bike",img:null,sets:"8 \u00d7 45 sec",tips:["Use light-to-moderate resistance.","Increase cadence while keeping your hips stable on the seat.","Recover with slower pedaling between speed intervals."],sourceGroup:"Stationary Bike"},
{id:"bike-hill-climb",name:"Hill-Climb Simulation",area:"Cardio & Lower Body",equipment:"Stationary Bike",img:null,sets:"12\u201320 min",tips:["Begin with moderate resistance.","Gradually increase resistance to simulate climbing.","Maintain controlled cadence and reduce resistance periodically for recovery."],sourceGroup:"Stationary Bike"},
{id:"bike-sprint-intervals",name:"Sprint Intervals",area:"Cardio",equipment:"Stationary Bike",img:null,sets:"8 \u00d7 20\u201330 sec sprint / 60 sec easy",tips:["Warm up thoroughly before the first sprint.","Increase cadence strongly during each sprint while maintaining control.","Pedal easily during recovery intervals before repeating."],sourceGroup:"Stationary Bike"},
{id:"bike-resistance-intervals",name:"Resistance Intervals",area:"Cardio & Lower Body",equipment:"Stationary Bike",img:null,sets:"10 \u00d7 45 sec hard / 45 sec easy",tips:["Alternate challenging and easier resistance levels.","Keep cadence smooth during the higher-resistance periods.","Use the easy intervals for active recovery rather than stopping."],sourceGroup:"Stationary Bike"},
{id:"bike-recovery",name:"Recovery Ride",area:"Cardio",equipment:"Stationary Bike",img:null,sets:"10\u201320 min \u00b7 very easy",tips:["Use low resistance and an easy cadence.","Keep breathing relaxed and avoid turning the ride into a hard workout.","Focus on smooth pedaling and gentle movement."],sourceGroup:"Stationary Bike"},
{id:"mat-l-0",name:"Bodyweight Squat",area:"Lower Body",equipment:"Exercise Mat",img:null,sets:"3 sets \u00d7 12\u201315 reps",tips:["Set up on the mat with stable footing or contact points.","Keep your core engaged and move through a comfortable range.","Use controlled repetitions and maintain knee/hip alignment."],sourceGroup:"Exercise Mat \u2014 Bodyweight Lower Body"},
{id:"mat-l-1",name:"Sumo Squat",area:"Lower Body",equipment:"Exercise Mat",img:null,sets:"3 sets \u00d7 12\u201315 reps",tips:["Set up on the mat with stable footing or contact points.","Keep your core engaged and move through a comfortable range.","Use controlled repetitions and maintain knee/hip alignment."],sourceGroup:"Exercise Mat \u2014 Bodyweight Lower Body"},
{id:"mat-l-2",name:"Squat Pulse",area:"Lower Body",equipment:"Exercise Mat",img:null,sets:"3 sets \u00d7 12\u201315 reps",tips:["Set up on the mat with stable footing or contact points.","Keep your core engaged and move through a comfortable range.","Use controlled repetitions and maintain knee/hip alignment."],sourceGroup:"Exercise Mat \u2014 Bodyweight Lower Body"},
{id:"mat-l-3",name:"Jump Squat",area:"Lower Body",equipment:"Exercise Mat",img:null,sets:"3 sets \u00d7 12\u201315 reps",tips:["Set up on the mat with stable footing or contact points.","Keep your core engaged and move through a comfortable range.","Use controlled repetitions and maintain knee/hip alignment."],sourceGroup:"Exercise Mat \u2014 Bodyweight Lower Body"},
{id:"mat-l-4",name:"Reverse Lunge",area:"Lower Body",equipment:"Exercise Mat",img:null,sets:"3 sets \u00d7 12\u201315 reps",tips:["Set up on the mat with stable footing or contact points.","Keep your core engaged and move through a comfortable range.","Use controlled repetitions and maintain knee/hip alignment."],sourceGroup:"Exercise Mat \u2014 Bodyweight Lower Body"},
{id:"mat-l-5",name:"Forward Lunge",area:"Lower Body",equipment:"Exercise Mat",img:null,sets:"3 sets \u00d7 12\u201315 reps",tips:["Set up on the mat with stable footing or contact points.","Keep your core engaged and move through a comfortable range.","Use controlled repetitions and maintain knee/hip alignment."],sourceGroup:"Exercise Mat \u2014 Bodyweight Lower Body"},
{id:"mat-l-6",name:"Lateral Lunge",area:"Lower Body",equipment:"Exercise Mat",img:null,sets:"3 sets \u00d7 12\u201315 reps",tips:["Set up on the mat with stable footing or contact points.","Keep your core engaged and move through a comfortable range.","Use controlled repetitions and maintain knee/hip alignment."],sourceGroup:"Exercise Mat \u2014 Bodyweight Lower Body"},
{id:"mat-l-7",name:"Curtsy Lunge",area:"Lower Body",equipment:"Exercise Mat",img:null,sets:"3 sets \u00d7 12\u201315 reps",tips:["Set up on the mat with stable footing or contact points.","Keep your core engaged and move through a comfortable range.","Use controlled repetitions and maintain knee/hip alignment."],sourceGroup:"Exercise Mat \u2014 Bodyweight Lower Body"},
{id:"mat-l-8",name:"Glute Bridge",area:"Lower Body",equipment:"Exercise Mat",img:null,sets:"3 sets \u00d7 12\u201315 reps",tips:["Set up on the mat with stable footing or contact points.","Keep your core engaged and move through a comfortable range.","Use controlled repetitions and maintain knee/hip alignment."],sourceGroup:"Exercise Mat \u2014 Bodyweight Lower Body"},
{id:"mat-l-9",name:"Single-Leg Glute Bridge",area:"Lower Body",equipment:"Exercise Mat",img:null,sets:"3 sets \u00d7 12\u201315 reps",tips:["Set up on the mat with stable footing or contact points.","Keep your core engaged and move through a comfortable range.","Use controlled repetitions and maintain knee/hip alignment."],sourceGroup:"Exercise Mat \u2014 Bodyweight Lower Body"},
{id:"mat-l-10",name:"Frog Pump",area:"Lower Body",equipment:"Exercise Mat",img:null,sets:"3 sets \u00d7 12\u201315 reps",tips:["Set up on the mat with stable footing or contact points.","Keep your core engaged and move through a comfortable range.","Use controlled repetitions and maintain knee/hip alignment."],sourceGroup:"Exercise Mat \u2014 Bodyweight Lower Body"},
{id:"mat-l-11",name:"Donkey Kick",area:"Lower Body",equipment:"Exercise Mat",img:null,sets:"3 sets \u00d7 12\u201315 reps",tips:["Set up on the mat with stable footing or contact points.","Keep your core engaged and move through a comfortable range.","Use controlled repetitions and maintain knee/hip alignment."],sourceGroup:"Exercise Mat \u2014 Bodyweight Lower Body"},
{id:"mat-l-12",name:"Fire Hydrant",area:"Lower Body",equipment:"Exercise Mat",img:null,sets:"3 sets \u00d7 12\u201315 reps",tips:["Set up on the mat with stable footing or contact points.","Keep your core engaged and move through a comfortable range.","Use controlled repetitions and maintain knee/hip alignment."],sourceGroup:"Exercise Mat \u2014 Bodyweight Lower Body"},
{id:"mat-l-13",name:"Side-Lying Leg Raise",area:"Lower Body",equipment:"Exercise Mat",img:null,sets:"3 sets \u00d7 12\u201315 reps",tips:["Set up on the mat with stable footing or contact points.","Keep your core engaged and move through a comfortable range.","Use controlled repetitions and maintain knee/hip alignment."],sourceGroup:"Exercise Mat \u2014 Bodyweight Lower Body"},
{id:"mat-l-14",name:"Clamshell",area:"Lower Body",equipment:"Exercise Mat",img:null,sets:"3 sets \u00d7 12\u201315 reps",tips:["Set up on the mat with stable footing or contact points.","Keep your core engaged and move through a comfortable range.","Use controlled repetitions and maintain knee/hip alignment."],sourceGroup:"Exercise Mat \u2014 Bodyweight Lower Body"},
{id:"mat-l-15",name:"Calf Raise",area:"Lower Body",equipment:"Exercise Mat",img:null,sets:"3 sets \u00d7 12\u201315 reps",tips:["Set up on the mat with stable footing or contact points.","Keep your core engaged and move through a comfortable range.","Use controlled repetitions and maintain knee/hip alignment."],sourceGroup:"Exercise Mat \u2014 Bodyweight Lower Body"},
{id:"mat-l-16",name:"Wall Sit",area:"Lower Body",equipment:"Exercise Mat",img:null,sets:"3 sets \u00d7 12\u201315 reps",tips:["Set up on the mat with stable footing or contact points.","Keep your core engaged and move through a comfortable range.","Use controlled repetitions and maintain knee/hip alignment."],sourceGroup:"Exercise Mat \u2014 Bodyweight Lower Body"},
{id:"mat-u-0",name:"Push-Up",area:"Upper Body",equipment:"Exercise Mat",img:null,sets:"3 sets \u00d7 8\u201315 reps",tips:["Set your hands and body in a stable position.","Brace your core and keep your body aligned.","Move under control and adjust to a knee-supported variation if needed."],sourceGroup:"Exercise Mat \u2014 Upper Body"},
{id:"mat-u-1",name:"Knee Push-Up",area:"Upper Body",equipment:"Exercise Mat",img:null,sets:"3 sets \u00d7 8\u201315 reps",tips:["Set your hands and body in a stable position.","Brace your core and keep your body aligned.","Move under control and adjust to a knee-supported variation if needed."],sourceGroup:"Exercise Mat \u2014 Upper Body"},
{id:"mat-u-2",name:"Wide Push-Up",area:"Upper Body",equipment:"Exercise Mat",img:null,sets:"3 sets \u00d7 8\u201315 reps",tips:["Set your hands and body in a stable position.","Brace your core and keep your body aligned.","Move under control and adjust to a knee-supported variation if needed."],sourceGroup:"Exercise Mat \u2014 Upper Body"},
{id:"mat-u-3",name:"Close-Grip Push-Up",area:"Upper Body",equipment:"Exercise Mat",img:null,sets:"3 sets \u00d7 8\u201315 reps",tips:["Set your hands and body in a stable position.","Brace your core and keep your body aligned.","Move under control and adjust to a knee-supported variation if needed."],sourceGroup:"Exercise Mat \u2014 Upper Body"},
{id:"mat-u-4",name:"Incline Push-Up",area:"Upper Body",equipment:"Exercise Mat",img:null,sets:"3 sets \u00d7 8\u201315 reps",tips:["Set your hands and body in a stable position.","Brace your core and keep your body aligned.","Move under control and adjust to a knee-supported variation if needed."],sourceGroup:"Exercise Mat \u2014 Upper Body"},
{id:"mat-u-5",name:"Plank Shoulder Tap",area:"Upper Body",equipment:"Exercise Mat",img:"assets/plank-shoulder-tap.jpg",sets:"3 sets \u00d7 8\u201315 reps",tips:["Set your hands and body in a stable position.","Brace your core and keep your body aligned.","Move under control and adjust to a knee-supported variation if needed."],sourceGroup:"Exercise Mat \u2014 Upper Body"},
{id:"mat-u-6",name:"Plank Up-Down",area:"Upper Body",equipment:"Exercise Mat",img:null,sets:"3 sets \u00d7 8\u201315 reps",tips:["Set your hands and body in a stable position.","Brace your core and keep your body aligned.","Move under control and adjust to a knee-supported variation if needed."],sourceGroup:"Exercise Mat \u2014 Upper Body"},
{id:"mat-u-7",name:"Tricep Push-Up",area:"Upper Body",equipment:"Exercise Mat",img:null,sets:"3 sets \u00d7 8\u201315 reps",tips:["Set your hands and body in a stable position.","Brace your core and keep your body aligned.","Move under control and adjust to a knee-supported variation if needed."],sourceGroup:"Exercise Mat \u2014 Upper Body"},
{id:"mat-u-8",name:"Superman",area:"Upper Body",equipment:"Exercise Mat",img:null,sets:"3 sets \u00d7 8\u201315 reps",tips:["Set your hands and body in a stable position.","Brace your core and keep your body aligned.","Move under control and adjust to a knee-supported variation if needed."],sourceGroup:"Exercise Mat \u2014 Upper Body"},
{id:"mat-u-9",name:"Superman Pull-Down",area:"Upper Body",equipment:"Exercise Mat",img:null,sets:"3 sets \u00d7 8\u201315 reps",tips:["Set your hands and body in a stable position.","Brace your core and keep your body aligned.","Move under control and adjust to a knee-supported variation if needed."],sourceGroup:"Exercise Mat \u2014 Upper Body"},
{id:"mat-cb-0",name:"Crunch",area:"Core",equipment:"Exercise Mat",img:null,sets:"3 sets \u00d7 10\u201315 reps",tips:["Brace your abdomen before beginning the movement.","Keep your lower back and pelvis controlled.","Prioritize clean repetitions over speed."],sourceGroup:"Exercise Mat \u2014 Core \u00b7 Beginner/Intermediate"},
{id:"mat-cb-1",name:"Reverse Crunch",area:"Core",equipment:"Exercise Mat",img:null,sets:"3 sets \u00d7 10\u201315 reps",tips:["Brace your abdomen before beginning the movement.","Keep your lower back and pelvis controlled.","Prioritize clean repetitions over speed."],sourceGroup:"Exercise Mat \u2014 Core \u00b7 Beginner/Intermediate"},
{id:"mat-cb-2",name:"Bicycle Crunch",area:"Core",equipment:"Exercise Mat",img:null,sets:"3 sets \u00d7 10\u201315 reps",tips:["Brace your abdomen before beginning the movement.","Keep your lower back and pelvis controlled.","Prioritize clean repetitions over speed."],sourceGroup:"Exercise Mat \u2014 Core \u00b7 Beginner/Intermediate"},
{id:"mat-cb-3",name:"Dead Bug",area:"Core",equipment:"Exercise Mat",img:null,sets:"3 sets \u00d7 10\u201315 reps",tips:["Brace your abdomen before beginning the movement.","Keep your lower back and pelvis controlled.","Prioritize clean repetitions over speed."],sourceGroup:"Exercise Mat \u2014 Core \u00b7 Beginner/Intermediate"},
{id:"mat-cb-4",name:"Heel Tap",area:"Core",equipment:"Exercise Mat",img:null,sets:"3 sets \u00d7 10\u201315 reps",tips:["Brace your abdomen before beginning the movement.","Keep your lower back and pelvis controlled.","Prioritize clean repetitions over speed."],sourceGroup:"Exercise Mat \u2014 Core \u00b7 Beginner/Intermediate"},
{id:"mat-cb-5",name:"Toe Reach",area:"Core",equipment:"Exercise Mat",img:null,sets:"3 sets \u00d7 10\u201315 reps",tips:["Brace your abdomen before beginning the movement.","Keep your lower back and pelvis controlled.","Prioritize clean repetitions over speed."],sourceGroup:"Exercise Mat \u2014 Core \u00b7 Beginner/Intermediate"},
{id:"mat-cb-6",name:"Bird Dog",area:"Core",equipment:"Exercise Mat",img:null,sets:"3 sets \u00d7 10\u201315 reps",tips:["Brace your abdomen before beginning the movement.","Keep your lower back and pelvis controlled.","Prioritize clean repetitions over speed."],sourceGroup:"Exercise Mat \u2014 Core \u00b7 Beginner/Intermediate"},
{id:"mat-cb-7",name:"Knee Plank",area:"Core",equipment:"Exercise Mat",img:null,sets:"3 \u00d7 20\u201340 sec",tips:["Brace your abdomen before beginning the movement.","Keep your lower back and pelvis controlled.","Prioritize clean repetitions over speed."],sourceGroup:"Exercise Mat \u2014 Core \u00b7 Beginner/Intermediate"},
{id:"mat-cb-8",name:"Forearm Plank",area:"Core",equipment:"Exercise Mat",img:null,sets:"3 \u00d7 20\u201340 sec",tips:["Brace your abdomen before beginning the movement.","Keep your lower back and pelvis controlled.","Prioritize clean repetitions over speed."],sourceGroup:"Exercise Mat \u2014 Core \u00b7 Beginner/Intermediate"},
{id:"mat-cb-9",name:"High Plank",area:"Core",equipment:"Exercise Mat",img:null,sets:"3 \u00d7 20\u201340 sec",tips:["Brace your abdomen before beginning the movement.","Keep your lower back and pelvis controlled.","Prioritize clean repetitions over speed."],sourceGroup:"Exercise Mat \u2014 Core \u00b7 Beginner/Intermediate"},
{id:"mat-cb-10",name:"Side Plank",area:"Core",equipment:"Exercise Mat",img:null,sets:"3 \u00d7 20\u201340 sec",tips:["Brace your abdomen before beginning the movement.","Keep your lower back and pelvis controlled.","Prioritize clean repetitions over speed."],sourceGroup:"Exercise Mat \u2014 Core \u00b7 Beginner/Intermediate"},
{id:"mat-cb-11",name:"Seated Knee Tuck",area:"Core",equipment:"Exercise Mat",img:null,sets:"3 sets \u00d7 10\u201315 reps",tips:["Brace your abdomen before beginning the movement.","Keep your lower back and pelvis controlled.","Prioritize clean repetitions over speed."],sourceGroup:"Exercise Mat \u2014 Core \u00b7 Beginner/Intermediate"},
{id:"mat-ca-0",name:"Leg Raise",area:"Core",equipment:"Exercise Mat",img:null,sets:"3 sets \u00d7 10\u201315 reps",tips:["Brace your core firmly before each repetition.","Keep movement controlled and avoid using momentum.","Use the easier core variation if you cannot maintain position."],sourceGroup:"Exercise Mat \u2014 Core \u00b7 Intermediate/Advanced"},
{id:"mat-ca-1",name:"Flutter Kick",area:"Core",equipment:"Exercise Mat",img:null,sets:"3 sets \u00d7 10\u201315 reps",tips:["Brace your core firmly before each repetition.","Keep movement controlled and avoid using momentum.","Use the easier core variation if you cannot maintain position."],sourceGroup:"Exercise Mat \u2014 Core \u00b7 Intermediate/Advanced"},
{id:"mat-ca-2",name:"Scissor Kick",area:"Core",equipment:"Exercise Mat",img:null,sets:"3 sets \u00d7 10\u201315 reps",tips:["Brace your core firmly before each repetition.","Keep movement controlled and avoid using momentum.","Use the easier core variation if you cannot maintain position."],sourceGroup:"Exercise Mat \u2014 Core \u00b7 Intermediate/Advanced"},
{id:"mat-ca-3",name:"Russian Twist",area:"Core",equipment:"Exercise Mat",img:null,sets:"3 sets \u00d7 10\u201315 reps",tips:["Brace your core firmly before each repetition.","Keep movement controlled and avoid using momentum.","Use the easier core variation if you cannot maintain position."],sourceGroup:"Exercise Mat \u2014 Core \u00b7 Intermediate/Advanced"},
{id:"mat-ca-4",name:"V-Up",area:"Core",equipment:"Exercise Mat",img:null,sets:"3 sets \u00d7 10\u201315 reps",tips:["Brace your core firmly before each repetition.","Keep movement controlled and avoid using momentum.","Use the easier core variation if you cannot maintain position."],sourceGroup:"Exercise Mat \u2014 Core \u00b7 Intermediate/Advanced"},
{id:"mat-ca-5",name:"Plank Hip Dip",area:"Core",equipment:"Exercise Mat",img:null,sets:"3 \u00d7 30\u201345 sec",tips:["Brace your core firmly before each repetition.","Keep movement controlled and avoid using momentum.","Use the easier core variation if you cannot maintain position."],sourceGroup:"Exercise Mat \u2014 Core \u00b7 Intermediate/Advanced"},
{id:"mat-ca-6",name:"Plank Shoulder Tap",area:"Core",equipment:"Exercise Mat",img:null,sets:"3 \u00d7 30\u201345 sec",tips:["Brace your core firmly before each repetition.","Keep movement controlled and avoid using momentum.","Use the easier core variation if you cannot maintain position."],sourceGroup:"Exercise Mat \u2014 Core \u00b7 Intermediate/Advanced"},
{id:"mat-ca-7",name:"Mountain Climber",area:"Core",equipment:"Exercise Mat",img:null,sets:"3 \u00d7 30\u201345 sec",tips:["Brace your core firmly before each repetition.","Keep movement controlled and avoid using momentum.","Use the easier core variation if you cannot maintain position."],sourceGroup:"Exercise Mat \u2014 Core \u00b7 Intermediate/Advanced"},
{id:"mat-ca-8",name:"Cross-Body Mountain Climber",area:"Core",equipment:"Exercise Mat",img:null,sets:"3 \u00d7 30\u201345 sec",tips:["Brace your core firmly before each repetition.","Keep movement controlled and avoid using momentum.","Use the easier core variation if you cannot maintain position."],sourceGroup:"Exercise Mat \u2014 Core \u00b7 Intermediate/Advanced"},
{id:"mat-ca-9",name:"Plank Knee-to-Elbow",area:"Core",equipment:"Exercise Mat",img:null,sets:"3 \u00d7 30\u201345 sec",tips:["Brace your core firmly before each repetition.","Keep movement controlled and avoid using momentum.","Use the easier core variation if you cannot maintain position."],sourceGroup:"Exercise Mat \u2014 Core \u00b7 Intermediate/Advanced"},
{id:"mat-ca-10",name:"Hollow Body Hold",area:"Core",equipment:"Exercise Mat",img:null,sets:"3 \u00d7 30\u201345 sec",tips:["Brace your core firmly before each repetition.","Keep movement controlled and avoid using momentum.","Use the easier core variation if you cannot maintain position."],sourceGroup:"Exercise Mat \u2014 Core \u00b7 Intermediate/Advanced"},
{id:"mat-ca-11",name:"Bear Plank",area:"Core",equipment:"Exercise Mat",img:null,sets:"3 \u00d7 30\u201345 sec",tips:["Brace your core firmly before each repetition.","Keep movement controlled and avoid using momentum.","Use the easier core variation if you cannot maintain position."],sourceGroup:"Exercise Mat \u2014 Core \u00b7 Intermediate/Advanced"},
{id:"hiit-0",name:"Jumping Jacks",area:"Cardio",equipment:"Bodyweight / Exercise Mat",img:null,sets:"4 \u00d7 30\u201345 sec",tips:["Begin at a pace that lets you maintain good mechanics.","Land softly during jumping movements and keep your core braced.","Use the modified or low-impact version when needed."],sourceGroup:"Bodyweight Cardio / HIIT"},
{id:"hiit-1",name:"Step Jacks",area:"Cardio",equipment:"Bodyweight / Exercise Mat",img:null,sets:"4 \u00d7 30\u201345 sec",tips:["Begin at a pace that lets you maintain good mechanics.","Land softly during jumping movements and keep your core braced.","Use the modified or low-impact version when needed."],sourceGroup:"Bodyweight Cardio / HIIT"},
{id:"hiit-2",name:"High Knees",area:"Cardio",equipment:"Bodyweight / Exercise Mat",img:null,sets:"4 \u00d7 30\u201345 sec",tips:["Begin at a pace that lets you maintain good mechanics.","Land softly during jumping movements and keep your core braced.","Use the modified or low-impact version when needed."],sourceGroup:"Bodyweight Cardio / HIIT"},
{id:"hiit-3",name:"Butt Kicks",area:"Cardio",equipment:"Bodyweight / Exercise Mat",img:null,sets:"4 \u00d7 30\u201345 sec",tips:["Begin at a pace that lets you maintain good mechanics.","Land softly during jumping movements and keep your core braced.","Use the modified or low-impact version when needed."],sourceGroup:"Bodyweight Cardio / HIIT"},
{id:"hiit-4",name:"Mountain Climbers",area:"Cardio",equipment:"Bodyweight / Exercise Mat",img:null,sets:"4 \u00d7 30\u201345 sec",tips:["Begin at a pace that lets you maintain good mechanics.","Land softly during jumping movements and keep your core braced.","Use the modified or low-impact version when needed."],sourceGroup:"Bodyweight Cardio / HIIT"},
{id:"hiit-5",name:"Skaters",area:"Cardio",equipment:"Bodyweight / Exercise Mat",img:null,sets:"4 \u00d7 30\u201345 sec",tips:["Begin at a pace that lets you maintain good mechanics.","Land softly during jumping movements and keep your core braced.","Use the modified or low-impact version when needed."],sourceGroup:"Bodyweight Cardio / HIIT"},
{id:"hiit-6",name:"Squat to Knee Drive",area:"Cardio",equipment:"Bodyweight / Exercise Mat",img:null,sets:"4 \u00d7 30\u201345 sec",tips:["Begin at a pace that lets you maintain good mechanics.","Land softly during jumping movements and keep your core braced.","Use the modified or low-impact version when needed."],sourceGroup:"Bodyweight Cardio / HIIT"},
{id:"hiit-7",name:"Speed Squats",area:"Cardio",equipment:"Bodyweight / Exercise Mat",img:null,sets:"4 \u00d7 30\u201345 sec",tips:["Begin at a pace that lets you maintain good mechanics.","Land softly during jumping movements and keep your core braced.","Use the modified or low-impact version when needed."],sourceGroup:"Bodyweight Cardio / HIIT"},
{id:"hiit-8",name:"Jump Squats",area:"Cardio",equipment:"Bodyweight / Exercise Mat",img:null,sets:"4 \u00d7 30\u201345 sec",tips:["Begin at a pace that lets you maintain good mechanics.","Land softly during jumping movements and keep your core braced.","Use the modified or low-impact version when needed."],sourceGroup:"Bodyweight Cardio / HIIT"},
{id:"hiit-9",name:"Burpees",area:"Cardio",equipment:"Bodyweight / Exercise Mat",img:null,sets:"4 \u00d7 30\u201345 sec",tips:["Begin at a pace that lets you maintain good mechanics.","Land softly during jumping movements and keep your core braced.","Use the modified or low-impact version when needed."],sourceGroup:"Bodyweight Cardio / HIIT"},
{id:"hiit-10",name:"Modified Burpees",area:"Cardio",equipment:"Bodyweight / Exercise Mat",img:null,sets:"4 \u00d7 30\u201345 sec",tips:["Begin at a pace that lets you maintain good mechanics.","Land softly during jumping movements and keep your core braced.","Use the modified or low-impact version when needed."],sourceGroup:"Bodyweight Cardio / HIIT"},
{id:"hiit-11",name:"Lateral Shuffles",area:"Cardio",equipment:"Bodyweight / Exercise Mat",img:null,sets:"4 \u00d7 30\u201345 sec",tips:["Begin at a pace that lets you maintain good mechanics.","Land softly during jumping movements and keep your core braced.","Use the modified or low-impact version when needed."],sourceGroup:"Bodyweight Cardio / HIIT"},
{id:"hiit-12",name:"Fast Feet",area:"Cardio",equipment:"Bodyweight / Exercise Mat",img:null,sets:"4 \u00d7 30\u201345 sec",tips:["Begin at a pace that lets you maintain good mechanics.","Land softly during jumping movements and keep your core braced.","Use the modified or low-impact version when needed."],sourceGroup:"Bodyweight Cardio / HIIT"},
{id:"hiit-13",name:"Plank Jacks",area:"Cardio",equipment:"Bodyweight / Exercise Mat",img:null,sets:"4 \u00d7 30\u201345 sec",tips:["Begin at a pace that lets you maintain good mechanics.","Land softly during jumping movements and keep your core braced.","Use the modified or low-impact version when needed."],sourceGroup:"Bodyweight Cardio / HIIT"},
{id:"hiit-14",name:"Standing Mountain Climbers",area:"Cardio",equipment:"Bodyweight / Exercise Mat",img:null,sets:"4 \u00d7 30\u201345 sec",tips:["Begin at a pace that lets you maintain good mechanics.","Land softly during jumping movements and keep your core braced.","Use the modified or low-impact version when needed."],sourceGroup:"Bodyweight Cardio / HIIT"},
{id:"hiit-15",name:"Shadow Boxing",area:"Cardio",equipment:"Bodyweight / Exercise Mat",img:null,sets:"4 \u00d7 30\u201345 sec",tips:["Begin at a pace that lets you maintain good mechanics.","Land softly during jumping movements and keep your core braced.","Use the modified or low-impact version when needed."],sourceGroup:"Bodyweight Cardio / HIIT"},
{id:"warm-0",name:"Arm Circles",area:"Mobility & Warm-Up",equipment:"Exercise Mat",img:null,sets:"30\u201345 sec",tips:["Move gently through a comfortable range of motion.","Use the movement to prepare the relevant joints and muscles.","Do not force range or bounce into a stretch."],sourceGroup:"Dynamic Warm-Up"},
{id:"warm-1",name:"Shoulder Rolls",area:"Mobility & Warm-Up",equipment:"Exercise Mat",img:null,sets:"30\u201345 sec",tips:["Move gently through a comfortable range of motion.","Use the movement to prepare the relevant joints and muscles.","Do not force range or bounce into a stretch."],sourceGroup:"Dynamic Warm-Up"},
{id:"warm-2",name:"Hip Circles",area:"Mobility & Warm-Up",equipment:"Exercise Mat",img:null,sets:"30\u201345 sec",tips:["Move gently through a comfortable range of motion.","Use the movement to prepare the relevant joints and muscles.","Do not force range or bounce into a stretch."],sourceGroup:"Dynamic Warm-Up"},
{id:"warm-3",name:"Leg Swings",area:"Mobility & Warm-Up",equipment:"Exercise Mat",img:null,sets:"30\u201345 sec",tips:["Move gently through a comfortable range of motion.","Use the movement to prepare the relevant joints and muscles.","Do not force range or bounce into a stretch."],sourceGroup:"Dynamic Warm-Up"},
{id:"warm-4",name:"Walking Knee Hugs",area:"Mobility & Warm-Up",equipment:"Exercise Mat",img:null,sets:"30\u201345 sec",tips:["Move gently through a comfortable range of motion.","Use the movement to prepare the relevant joints and muscles.","Do not force range or bounce into a stretch."],sourceGroup:"Dynamic Warm-Up"},
{id:"warm-5",name:"Bodyweight Good Morning",area:"Mobility & Warm-Up",equipment:"Exercise Mat",img:null,sets:"30\u201345 sec",tips:["Move gently through a comfortable range of motion.","Use the movement to prepare the relevant joints and muscles.","Do not force range or bounce into a stretch."],sourceGroup:"Dynamic Warm-Up"},
{id:"warm-6",name:"Inchworm",area:"Mobility & Warm-Up",equipment:"Exercise Mat",img:null,sets:"30\u201345 sec",tips:["Move gently through a comfortable range of motion.","Use the movement to prepare the relevant joints and muscles.","Do not force range or bounce into a stretch."],sourceGroup:"Dynamic Warm-Up"},
{id:"warm-7",name:"World's Greatest Stretch",area:"Mobility & Warm-Up",equipment:"Exercise Mat",img:null,sets:"30\u201345 sec",tips:["Move gently through a comfortable range of motion.","Use the movement to prepare the relevant joints and muscles.","Do not force range or bounce into a stretch."],sourceGroup:"Dynamic Warm-Up"},
{id:"warm-8",name:"Cat-Cow",area:"Mobility & Warm-Up",equipment:"Exercise Mat",img:null,sets:"30\u201345 sec",tips:["Move gently through a comfortable range of motion.","Use the movement to prepare the relevant joints and muscles.","Do not force range or bounce into a stretch."],sourceGroup:"Dynamic Warm-Up"},
{id:"warm-9",name:"Bird Dog",area:"Mobility & Warm-Up",equipment:"Exercise Mat",img:null,sets:"30\u201345 sec",tips:["Move gently through a comfortable range of motion.","Use the movement to prepare the relevant joints and muscles.","Do not force range or bounce into a stretch."],sourceGroup:"Dynamic Warm-Up"},
{id:"warm-10",name:"Glute Bridge",area:"Mobility & Warm-Up",equipment:"Exercise Mat",img:null,sets:"30\u201345 sec",tips:["Move gently through a comfortable range of motion.","Use the movement to prepare the relevant joints and muscles.","Do not force range or bounce into a stretch."],sourceGroup:"Dynamic Warm-Up"},
{id:"warm-11",name:"Bodyweight Squat",area:"Mobility & Warm-Up",equipment:"Exercise Mat",img:null,sets:"30\u201345 sec",tips:["Move gently through a comfortable range of motion.","Use the movement to prepare the relevant joints and muscles.","Do not force range or bounce into a stretch."],sourceGroup:"Dynamic Warm-Up"},
{id:"warm-12",name:"Alternating Reverse Lunge",area:"Mobility & Warm-Up",equipment:"Exercise Mat",img:null,sets:"30\u201345 sec",tips:["Move gently through a comfortable range of motion.","Use the movement to prepare the relevant joints and muscles.","Do not force range or bounce into a stretch."],sourceGroup:"Dynamic Warm-Up"},
{id:"cool-0",name:"Hamstring Stretch",area:"Mobility & Recovery",equipment:"Exercise Mat",img:"assets/hamstring-stretch.jpg",sets:"30\u201360 sec",tips:["Ease into the position until you feel a gentle stretch.","Breathe slowly and avoid bouncing.","Reduce the range if you feel joint pain or sharp discomfort."],sourceGroup:"Cool-Down / Stretching"},
{id:"cool-1",name:"Quad Stretch",area:"Mobility & Recovery",equipment:"Exercise Mat",img:null,sets:"30\u201360 sec",tips:["Ease into the position until you feel a gentle stretch.","Breathe slowly and avoid bouncing.","Reduce the range if you feel joint pain or sharp discomfort."],sourceGroup:"Cool-Down / Stretching"},
{id:"cool-2",name:"Hip Flexor Stretch",area:"Mobility & Recovery",equipment:"Exercise Mat",img:null,sets:"30\u201360 sec",tips:["Ease into the position until you feel a gentle stretch.","Breathe slowly and avoid bouncing.","Reduce the range if you feel joint pain or sharp discomfort."],sourceGroup:"Cool-Down / Stretching"},
{id:"cool-3",name:"Figure-Four Glute Stretch",area:"Mobility & Recovery",equipment:"Exercise Mat",img:null,sets:"30\u201360 sec",tips:["Ease into the position until you feel a gentle stretch.","Breathe slowly and avoid bouncing.","Reduce the range if you feel joint pain or sharp discomfort."],sourceGroup:"Cool-Down / Stretching"},
{id:"cool-4",name:"Butterfly Stretch",area:"Mobility & Recovery",equipment:"Exercise Mat",img:null,sets:"30\u201360 sec",tips:["Ease into the position until you feel a gentle stretch.","Breathe slowly and avoid bouncing.","Reduce the range if you feel joint pain or sharp discomfort."],sourceGroup:"Cool-Down / Stretching"},
{id:"cool-5",name:"Child's Pose",area:"Mobility & Recovery",equipment:"Exercise Mat",img:null,sets:"30\u201360 sec",tips:["Ease into the position until you feel a gentle stretch.","Breathe slowly and avoid bouncing.","Reduce the range if you feel joint pain or sharp discomfort."],sourceGroup:"Cool-Down / Stretching"},
{id:"cool-6",name:"Cobra Stretch",area:"Mobility & Recovery",equipment:"Exercise Mat",img:null,sets:"30\u201360 sec",tips:["Ease into the position until you feel a gentle stretch.","Breathe slowly and avoid bouncing.","Reduce the range if you feel joint pain or sharp discomfort."],sourceGroup:"Cool-Down / Stretching"},
{id:"cool-7",name:"Chest Stretch",area:"Mobility & Recovery",equipment:"Exercise Mat",img:null,sets:"30\u201360 sec",tips:["Ease into the position until you feel a gentle stretch.","Breathe slowly and avoid bouncing.","Reduce the range if you feel joint pain or sharp discomfort."],sourceGroup:"Cool-Down / Stretching"},
{id:"cool-8",name:"Shoulder Stretch",area:"Mobility & Recovery",equipment:"Exercise Mat",img:"assets/shoulder-stretch.jpg",sets:"30\u201360 sec",tips:["Ease into the position until you feel a gentle stretch.","Breathe slowly and avoid bouncing.","Reduce the range if you feel joint pain or sharp discomfort."],sourceGroup:"Cool-Down / Stretching"},
{id:"cool-9",name:"Tricep Stretch",area:"Mobility & Recovery",equipment:"Exercise Mat",img:null,sets:"30\u201360 sec",tips:["Ease into the position until you feel a gentle stretch.","Breathe slowly and avoid bouncing.","Reduce the range if you feel joint pain or sharp discomfort."],sourceGroup:"Cool-Down / Stretching"},
{id:"cool-10",name:"Calf Stretch",area:"Mobility & Recovery",equipment:"Exercise Mat",img:null,sets:"30\u201360 sec",tips:["Ease into the position until you feel a gentle stretch.","Breathe slowly and avoid bouncing.","Reduce the range if you feel joint pain or sharp discomfort."],sourceGroup:"Cool-Down / Stretching"},
{id:"cool-11",name:"Cat-Cow",area:"Mobility & Recovery",equipment:"Exercise Mat",img:null,sets:"30\u201360 sec",tips:["Ease into the position until you feel a gentle stretch.","Breathe slowly and avoid bouncing.","Reduce the range if you feel joint pain or sharp discomfort."],sourceGroup:"Cool-Down / Stretching"},
{id:"warm-90-90-hamstring",name:"90/90 Hamstring",area:"Mobility & Warm-Up",equipment:"Exercise Mat",img:null,sets:"2 × 10 each side",tips:["Lie on your back with one leg straight and the other hip and knee bent to about 90 degrees.","Support the bent thigh if needed and slowly straighten that knee upward until you feel the hamstring lengthen.","Return with control and repeat before switching sides."],sourceGroup:"Pre-Workout Warm-Up"},
{id:"warm-standing-hip-circles",name:"Standing Hip Circles",area:"Mobility & Warm-Up",equipment:"Bodyweight / Exercise Mat",img:"assets/standing-hip-circles.jpg",sets:"8–10 each side",tips:["Stand tall and hold a stable support if needed.","Lift one knee toward hip height and slowly open it outward in a controlled circle.","Return to the start and repeat before switching legs."],sourceGroup:"Pre-Workout Warm-Up"},
{id:"warm-standing-hip-flexors",name:"Standing Hip Flexors",area:"Mobility & Warm-Up",equipment:"Bodyweight / Exercise Mat",img:null,sets:"20 sec each side",tips:["Stand in a short split stance with your torso upright.","Soften both knees and gently shift the rear hip forward until you feel the front of the hip lengthen.","Hold a mild stretch without forcing it, then switch sides."],sourceGroup:"Pre-Workout Warm-Up"},
{id:"warm-shoulder-stretch",name:"Shoulder Stretch",area:"Mobility & Warm-Up",equipment:"Bodyweight / Exercise Mat",img:null,sets:"20 sec each side",tips:["Stand tall and reach one arm straight across your chest.","Use the opposite arm to gently draw it closer without shrugging the shoulder.","Hold a comfortable stretch, then switch arms."],sourceGroup:"Pre-Workout Warm-Up"},
{id:"warm-knee-across-body",name:"Knee Across The Body",area:"Mobility & Warm-Up",equipment:"Exercise Mat",img:null,sets:"20 sec each side",tips:["Lie on your back with one leg straight and bend the opposite knee.","Guide the bent knee gently across your body while keeping your shoulders relaxed on the mat.","Hold a comfortable glute and lower-back stretch, then switch sides."],sourceGroup:"Pre-Workout Warm-Up"}
];

const treadmillBase={
 id:"treadmill-finisher",name:"Treadmill Finisher",area:"Cardio",equipment:"Treadmill",
 img:"assets/treadmill-finisher.jpg",
 tips:["Begin at an easy pace for 1 minute.","Use a brisk walk or run you can sustain with good form.","Reduce speed for the final minute to cool down."]
};

const librarySourceData={"warm-90-90-hamstring":{"image":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/90_90_Hamstring/0.jpg","instructions":["Lie on your back with one leg extended straight out.","Bend the other hip and knee to about 90 degrees and support the thigh if needed.","Straighten the raised knee until you feel the hamstring lengthen, pause briefly, then return with control.","Repeat on both sides."]},"warm-shoulder-stretch":{"image":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Shoulder_Stretch/0.jpg","instructions":["Bring one arm across your chest at shoulder height.","Use the opposite arm to gently draw it closer without shrugging.","Hold a comfortable stretch, then switch sides."]},"db-goblet-squat":{"image":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Goblet_Squat/0.jpg","instructions":["Hold one dumbbell vertically at your chest with both hands.","Stand with feet around shoulder width and brace your core.","Sit your hips down and back while keeping your chest tall and knees tracking over your toes.","Drive through your feet to stand and squeeze your glutes at the top."]},"db-rdl":{"image":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Stiff_Leg_Deadlift/0.jpg","instructions":["Hold the dumbbells in front of your thighs and soften your knees.","Push your hips backward while keeping your back neutral and the weights close to your legs.","Lower until you feel tension through the hamstrings without rounding your back.","Drive your hips forward to return to standing."]},"db-reverse-lunge":{"image":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Rear_Lunge/0.jpg","instructions":["Stand tall holding the dumbbells at your sides.","Step one foot backward and lower until both knees are comfortably bent.","Keep the front foot planted and torso upright.","Push through the front foot to return to standing, then repeat on the other side."]},"db-walking-lunge":{"image":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Walking_Lunge/0.jpg","instructions":["Stand tall holding a dumbbell in each hand.","Step forward and lower into a controlled lunge.","Push through the front foot and bring the rear leg forward into the next step.","Continue alternating while keeping your torso tall."]},"db-step-up":{"image":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Step_Ups/0.jpg","instructions":["Stand facing a stable step while holding dumbbells at your sides.","Place one whole foot on the step.","Drive through that foot to stand on the platform without pushing excessively from the trailing leg.","Step down under control and repeat, then switch sides."]},"db-chest-press":{"image":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Bench_Press/0.jpg","instructions":["Lie on your back with a dumbbell in each hand at chest level.","Brace your core and keep wrists stacked over elbows.","Press the dumbbells upward until your arms are extended without locking aggressively.","Lower under control until your upper arms gently approach the floor or your comfortable range."]},"db-floor-press":{"image":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Floor_Press/0.jpg","instructions":["Lie on the floor with knees bent and a dumbbell in each hand.","Position the weights over the chest with elbows resting lightly on the floor.","Press the dumbbells upward until the arms are extended.","Lower slowly until the upper arms touch the floor, then repeat."]},"db-shoulder-press":{"image":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Shoulder_Press/0.jpg","instructions":["Hold the dumbbells at shoulder height with your core braced.","Press the weights overhead while keeping your ribs controlled.","Finish with the weights over your shoulders rather than drifting forward.","Lower slowly to shoulder height."]},"db-arnold-press":{"image":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Arnold_Dumbbell_Press/0.jpg","instructions":["Start with dumbbells in front of your shoulders and palms facing you.","Press upward while rotating your palms forward.","Finish overhead with control and without over-arching your lower back.","Reverse the rotation as you lower."]},"db-front-raise":{"image":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Dumbbell_Raise/0.jpg","instructions":["Stand tall with dumbbells in front of your thighs.","Keep a slight bend in the elbows and brace your torso.","Raise the weights forward to about shoulder height without swinging.","Lower slowly to the starting position."]},"db-lateral-raise":{"image":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Side_Lateral_Raise/0.jpg","instructions":["Hold dumbbells at your sides with elbows slightly bent.","Raise your arms out to the sides until around shoulder height.","Keep shoulders down and avoid using momentum.","Lower the weights slowly."]},"db-bent-row":{"image":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Two-Dumbbell_Row/0.jpg","instructions":["Hinge at the hips with a neutral back and dumbbells hanging below your shoulders.","Brace your core and pull the dumbbells toward your ribs.","Squeeze your shoulder blades without shrugging.","Lower the weights under control."]},"db-one-arm-row":{"image":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Dumbbell_Row/0.jpg","instructions":["Support one hand on a stable surface and hinge forward with a neutral spine.","Let the dumbbell hang from the working arm.","Pull the weight toward your hip while keeping your shoulder down.","Lower slowly and complete the set before switching sides."]},"db-bicep-curl":{"image":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Bicep_Curl/0.jpg","instructions":["Stand tall with dumbbells at your sides and elbows close to your torso.","Curl the weights upward without swinging your upper arms.","Squeeze the biceps briefly at the top.","Lower under control until the elbows are extended."]},"db-hammer-curl":{"image":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hammer_Curls/0.jpg","instructions":["Hold dumbbells with palms facing each other.","Keep your elbows close to your torso.","Curl the weights toward your shoulders while maintaining the neutral grip.","Lower slowly without swinging."]},"db-concentration-curl":{"image":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Concentration_Curls/0.jpg","instructions":["Sit with your working elbow supported against the inside of your thigh.","Start with the arm extended and palm facing forward.","Curl the dumbbell toward your shoulder while keeping the upper arm still.","Lower slowly and repeat before changing arms."]},"db-tricep-kickback":{"image":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Triceps_Kickback/0.jpg","instructions":["Hinge forward with your upper arm held close to your torso.","Bend the elbow so the forearm starts roughly perpendicular to the floor.","Extend the elbow until the arm is straight, squeezing the triceps.","Return slowly without moving the upper arm."]},"barbell-back-squat":{"image":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Full_Squat/0.jpg","instructions":["Set the bar securely across your upper back, not your neck.","Brace your core and stand with feet in a comfortable squat stance.","Sit down between your hips while keeping knees aligned with your toes.","Drive through your feet to return to standing."]},"barbell-front-squat":{"image":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Barbell_Squat/0.jpg","instructions":["Hold the bar across the front of your shoulders with elbows lifted.","Brace your torso and keep your chest tall.","Squat down under control while keeping the bar balanced over mid-foot.","Drive upward through your feet to stand."]},"barbell-deadlift":{"image":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Deadlift/0.jpg","instructions":["Stand with the bar over mid-foot and hinge down to grip it.","Brace your core, flatten your back and keep the bar close to your shins.","Push the floor away and extend your hips and knees together.","Stand tall without leaning backward, then lower the bar under control."]},"barbell-bent-row":{"image":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Barbell_Row/0.jpg","instructions":["Hold the bar and hinge forward with a neutral back.","Brace your core and let the bar hang beneath your shoulders.","Pull the bar toward your lower ribs while drawing the shoulder blades back.","Lower under control without changing your torso angle."]},"barbell-overhead-press":{"image":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Military_Press/0.jpg","instructions":["Hold the bar around upper-chest height with wrists stacked over forearms.","Brace your glutes and core.","Press the bar overhead while moving your head slightly back then through as the bar passes.","Lower to the starting position under control."]},"barbell-bicep-curl":{"image":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Curl/0.jpg","instructions":["Stand tall holding the bar with palms forward.","Keep elbows close to your sides and upper arms still.","Curl the bar toward your shoulders without leaning back.","Lower slowly to full comfortable extension."]},"kettlebell-swing":{"image":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Kettlebell_Swings/0.jpg","instructions":["Start with the kettlebell slightly in front of you and hinge at the hips.","Hike the bell back between your legs while keeping your spine neutral.","Drive your hips forward powerfully so the bell floats upward; do not lift it primarily with your arms.","Let the bell return naturally into the next hip hinge."]},"kettlebell-clean":{"image":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Kettlebell_Clean/0.jpg","instructions":["Start with the kettlebell between your feet and hinge at the hips.","Drive through the hips and guide the bell upward close to your body.","Rotate your hand around the bell so it lands softly in the rack position rather than slamming the forearm.","Reverse the movement under control."]},"kettlebell-thruster":{"image":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kettlebell_Thruster/0.jpg","instructions":["Hold the kettlebell securely in the rack position.","Squat down with your torso controlled and knees tracking over your toes.","Drive up powerfully from the legs.","Use the upward momentum to press the kettlebell overhead, then return it to the rack."]},"band-chest-press":{"image":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Band_Chest_Press/0.jpg","instructions":["Anchor the resistance band securely behind you at chest height.","Hold the handles and step forward until there is light tension.","Press your hands forward from chest level while keeping your ribs controlled.","Return slowly without letting the band snap back."]},"band-squat":{"image":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Band_Squat/0.jpg","instructions":["Stand on or inside the band according to its design and create even tension.","Set your feet in a comfortable squat stance and brace your core.","Lower into a squat while keeping knees aligned with your toes.","Drive through your feet to stand against the band's resistance."]},"band-good-morning":{"image":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Band_Good_Morning/0.jpg","instructions":["Position the band securely so it provides resistance as you hinge.","Keep a soft bend in the knees and brace your core.","Push your hips backward with a neutral spine until you feel the hamstrings load.","Drive your hips forward to stand tall."]},"bodyweight-squat":{"image":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bodyweight_Squat/0.jpg","instructions":["Stand with feet around shoulder width and brace your core.","Sit your hips down and back while keeping your chest tall.","Keep your knees tracking in line with your toes.","Drive through your whole foot to stand."]},"wall-sit":{"image":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Wall_Sit/0.jpg","instructions":["Stand with your back against a wall and step your feet forward.","Slide down until your knees are comfortably bent and your back remains supported.","Keep your feet flat and knees aligned over your feet.","Hold the position while breathing steadily."]},"push-up":{"image":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pushups/0.jpg","instructions":["Start in a high plank with hands slightly wider than shoulder width.","Brace your core so your body stays in a straight line.","Lower your chest toward the floor while keeping elbows at a comfortable angle.","Press the floor away to return to the top."]},"reverse-crunch":{"image":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Reverse_Crunch/0.jpg","instructions":["Lie on your back with hips and knees bent.","Brace your abdominals and gently curl your pelvis toward your ribs.","Lift the hips only as far as you can without swinging.","Lower slowly and keep the movement controlled."]},"russian-twist":{"image":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Russian_Twist/0.jpg","instructions":["Sit with knees bent and lean back slightly while keeping your spine long.","Brace your core and hold your hands together or a light weight.","Rotate your torso from side to side without simply swinging your arms.","Move under control and keep breathing."]},"mountain-climber":{"image":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Mountain_Climbers/0.jpg","instructions":["Start in a strong high-plank position.","Drive one knee toward your chest while keeping your hips controlled.","Return that foot and switch legs.","Continue alternating at a pace that lets you maintain plank form."]},"jumping-jacks":{"image":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Jumping_Jack/0.jpg","instructions":["Stand tall with feet together and arms at your sides.","Jump your feet apart while raising your arms overhead.","Land softly with knees slightly bent.","Jump back to the starting position and repeat rhythmically."]},"burpees":{"image":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Burpee/0.jpg","instructions":["Stand tall, then squat and place your hands on the floor.","Step or jump your feet back into a plank.","Return your feet toward your hands.","Stand or jump up, land softly, and repeat."]},"warm-arm-circles":{"image":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Arm_Circles/0.jpg","instructions":["Stand tall and extend your arms out to the sides at shoulder height.","Make small controlled circles while keeping your shoulders relaxed.","Gradually increase the circle size if comfortable.","Reverse direction after several repetitions."]}};
const librarySourceImagesByName={"90/90 Hamstring":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/90_90_Hamstring/0.jpg","Arm Circles":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Arm_Circles/0.jpg","Dumbbell Goblet Squat":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Goblet_Squat/0.jpg","Dumbbell Romanian Deadlift":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Stiff_Leg_Deadlift/0.jpg","Dumbbell Reverse Lunge":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Rear_Lunge/0.jpg","Dumbbell Walking Lunge":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Walking_Lunge/0.jpg","Dumbbell Step-Up":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Step_Ups/0.jpg","Dumbbell Chest Press":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Bench_Press/0.jpg","Dumbbell Floor Press":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Floor_Press/0.jpg","Dumbbell Shoulder Press":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Shoulder_Press/0.jpg","Dumbbell Arnold Press":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Arnold_Dumbbell_Press/0.jpg","Dumbbell Front Raise":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Dumbbell_Raise/0.jpg","Dumbbell Lateral Raise":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Side_Lateral_Raise/0.jpg","Dumbbell Bent-Over Row":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Two-Dumbbell_Row/0.jpg","Dumbbell Single-Arm Row":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Dumbbell_Row/0.jpg","Dumbbell Bicep Curl":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Bicep_Curl/0.jpg","Dumbbell Hammer Curl":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hammer_Curls/0.jpg","Dumbbell Concentration Curl":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Concentration_Curls/0.jpg","Dumbbell Tricep Kickback":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Triceps_Kickback/0.jpg","Barbell Back Squat":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Full_Squat/0.jpg","Barbell Front Squat":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Barbell_Squat/0.jpg","Barbell Deadlift":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Deadlift/0.jpg","Barbell Bent-Over Row":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Barbell_Row/0.jpg","Barbell Overhead Press":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Military_Press/0.jpg","Barbell Bicep Curl":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Curl/0.jpg","Kettlebell Swing":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Kettlebell_Swings/0.jpg","Kettlebell Clean":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Kettlebell_Clean/0.jpg","Kettlebell Thruster":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kettlebell_Thruster/0.jpg","Resistance Band Chest Press":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Band_Chest_Press/0.jpg","Resistance Band Squat":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Band_Squat/0.jpg","Resistance Band Good Morning":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Band_Good_Morning/0.jpg","Bodyweight Squat":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bodyweight_Squat/0.jpg","Wall Sit":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Wall_Sit/0.jpg","Push-Up":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pushups/0.jpg","Reverse Crunch":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Reverse_Crunch/0.jpg","Russian Twist":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Russian_Twist/0.jpg","Mountain Climber":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Mountain_Climbers/0.jpg","Jumping Jacks":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Jumping_Jack/0.jpg","Burpees":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Burpee/0.jpg"};

const exerciseImages={"pushup":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pushups/0.jpg","dbsquat":null,"kbswing":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Kettlebell_Swings/0.jpg","bandrow":null,"jumprope":null,"glutebridge":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Butt_Lift_Bridge/0.jpg","climbers":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Mountain_Climbers/0.jpg","stepups":null,"sliders":null,"dbpress":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Shoulder_Press/0.jpg","bentrow":null,"rdl":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Romanian_Deadlift_With_Dumbbells/0.jpg","bike":null,"bandwalk":null,"deadbug":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dead_Bug/0.jpg","sliderlunge":null,"bandpress":null,"db-goblet-squat":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Goblet_Squat/0.jpg","db-front-squat":null,"db-sumo-squat":null,"db-rdl":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Stiff_Leg_Deadlift/0.jpg","db-stiff-leg-deadlift":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Stiff_Leg_Deadlift/0.jpg","db-reverse-lunge":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Lunges/0.jpg","db-forward-lunge":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Lunges/0.jpg","db-walking-lunge":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Lunges/0.jpg","db-lateral-lunge":null,"db-bulgarian-split-squat":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Split_Squat/0.jpg","db-step-up":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Step_Ups/0.jpg","db-glute-bridge":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Glute_Bridge/0.jpg","db-hip-thrust":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Hip_Thrust/0.jpg","db-calf-raise":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Dumbbell_Calf_Raise/0.jpg","db-single-leg-rdl":null,"db-chest-press":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Bench_Press/0.jpg","db-floor-press":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Floor_Press/0.jpg","db-chest-fly":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Flyes/0.jpg","db-shoulder-press":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Shoulder_Press/0.jpg","db-arnold-press":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Arnold_Dumbbell_Press/0.jpg","db-front-raise":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Dumbbell_Raise/0.jpg","db-lateral-raise":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Side_Lateral_Raise/0.jpg","db-bent-over-row":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Two-Dumbbell_Row/0.jpg","db-single-arm-row":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Dumbbell_Row/0.jpg","db-reverse-fly":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Reverse_Flyes/0.jpg","db-pullover":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent-Arm_Dumbbell_Pullover/0.jpg","db-bicep-curl":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Bicep_Curl/0.jpg","db-hammer-curl":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hammer_Curls/0.jpg","db-concentration-curl":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Concentration_Curls/0.jpg","db-tricep-extension":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Dumbbell_Triceps_Extension/0.jpg","db-tricep-kickback":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Tricep_Dumbbell_Kickback/0.jpg","db-skull-crusher":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_One-Arm_Triceps_Extension/0.jpg","db-thruster":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Squat_To_A_Shoulder_Press/0.jpg","db-squat-to-press":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Squat_To_A_Shoulder_Press/0.jpg","db-clean-press":null,"db-deadlift-row":null,"db-renegade-row":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Renegade_Row/0.jpg","db-farmers-carry":null,"db-reverse-lunge-curl":null,"db-rdl-row":null,"bb-back-squat":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Squat/0.jpg","bb-front-squat":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Barbell_Squat/0.jpg","bb-sumo-squat":null,"bb-rdl":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Romanian_Deadlift_With_Dumbbells/0.jpg","bb-conventional-deadlift":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Deadlift/0.jpg","bb-good-morning":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Good_Morning/0.jpg","bb-reverse-lunge":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Lunge/0.jpg","bb-hip-thrust":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Hip_Thrust/0.jpg","bb-glute-bridge":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Glute_Bridge/0.jpg","bb-calf-raise":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Barbell_Calf_Raise/0.jpg","bb-bent-over-row":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Barbell_Row/0.jpg","bb-overhead-press":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Military_Press/0.jpg","bb-floor-press":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Floor_Press/0.jpg","bb-bicep-curl":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Curl/0.jpg","bb-upright-row":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Upright_Barbell_Row/0.jpg","bb-close-grip-floor-press":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Close-Grip_Barbell_Bench_Press/0.jpg","bb-deadlift":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Deadlift/0.jpg","bb-clean-press":null,"bb-thruster":null,"bb-squat-to-press":null,"kb-goblet-squat":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Goblet_Squat/0.jpg","kb-sumo-squat":null,"kb-deadlift":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kettlebell_Deadlift/0.jpg","kb-rdl":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kettlebell_Deadlift/0.jpg","kb-reverse-lunge":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kettlebell_Pass_Between_The_Legs/0.jpg","kb-lateral-lunge":null,"kb-single-leg-deadlift":null,"kb-swing":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Kettlebell_Swings/0.jpg","kb-clean":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Kettlebell_Clean/0.jpg","kb-clean-press":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Kettlebell_Clean_And_Jerk/0.jpg","kb-thruster":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kettlebell_Thruster/0.jpg","kb-high-pull":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kettlebell_Pirate_Ships/0.jpg","kb-deadlift-high-pull":null,"kb-squat-press":null,"kb-farmers-carry":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Farmers_Walk/0.jpg","kb-figure-eight":null,"loop-0":null,"loop-1":null,"loop-2":null,"loop-3":null,"loop-4":null,"loop-5":null,"loop-6":null,"loop-7":null,"loop-8":null,"loop-9":null,"loop-10":null,"loop-11":null,"loop-12":null,"loop-13":null,"loop-14":null,"loop-15":null,"loop-16":null,"loop-core-0":null,"loop-core-1":null,"loop-core-2":null,"loop-core-3":null,"tube-u-0":null,"tube-u-1":null,"tube-u-2":null,"tube-u-3":null,"tube-u-4":null,"tube-u-5":null,"tube-u-6":null,"tube-u-7":null,"tube-u-8":null,"tube-u-9":null,"tube-u-10":null,"tube-u-11":null,"tube-u-12":null,"tube-u-13":null,"tube-l-0":null,"tube-l-1":null,"tube-l-2":null,"tube-l-3":null,"tube-l-4":null,"tube-l-5":null,"tube-c-0":null,"tube-c-1":null,"tube-c-2":null,"tube-c-3":null,"slider-c-0":null,"slider-c-1":null,"slider-c-2":null,"slider-c-3":null,"slider-c-4":null,"slider-c-5":null,"slider-c-6":null,"slider-c-7":null,"slider-l-0":null,"slider-l-1":null,"slider-l-2":null,"slider-l-3":null,"slider-l-4":null,"slider-l-5":null,"slider-l-6":null,"slider-f-0":null,"slider-f-1":null,"slider-f-2":null,"rope-0":null,"rope-1":null,"rope-2":null,"rope-3":null,"rope-4":null,"rope-5":null,"rope-6":null,"rope-7":null,"rope-8":null,"rope-9":null,"rope-int-0":null,"rope-int-1":null,"rope-int-2":null,"rope-int-3":null,"rope-int-4":null,"tm-w-0":null,"tm-w-1":null,"tm-w-2":null,"tm-w-3":null,"tm-w-4":null,"tm-w-5":null,"tm-r-0":null,"tm-r-1":null,"tm-r-2":null,"tm-r-3":null,"tm-r-4":null,"stepper-regular":null,"stepper-fast":null,"stepper-slow-resistance":null,"stepper-interval":null,"stepper-deep":null,"stepper-half-squat":null,"stepper-bicep-curl":null,"stepper-hammer-curl":null,"stepper-shoulder-press":null,"stepper-front-raise":null,"stepper-lateral-raise":null,"stepper-upright-row":null,"stepper-tricep-extension":null,"stepper-row":null,"bike-easy":null,"bike-moderate":null,"bike-high-resistance":null,"bike-low-resistance-speed":null,"bike-hill-climb":null,"bike-sprint-intervals":null,"bike-resistance-intervals":null,"bike-recovery":null,"mat-l-0":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bodyweight_Squat/0.jpg","mat-l-1":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bodyweight_Squat/0.jpg","mat-l-2":null,"mat-l-3":null,"mat-l-4":null,"mat-l-5":null,"mat-l-6":null,"mat-l-7":null,"mat-l-8":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Butt_Lift_Bridge/0.jpg","mat-l-9":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Single_Leg_Glute_Bridge/0.jpg","mat-l-10":null,"mat-l-11":null,"mat-l-12":null,"mat-l-13":null,"mat-l-14":null,"mat-l-15":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Calf_Raises/0.jpg","mat-l-16":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Wall_Squat/0.jpg","mat-u-0":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pushups/0.jpg","mat-u-1":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pushups/0.jpg","mat-u-2":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Wide-Grip_Push-Up/0.jpg","mat-u-3":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Close-Grip_Push-Up/0.jpg","mat-u-4":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Push-Up/0.jpg","mat-u-5":null,"mat-u-6":null,"mat-u-7":null,"mat-u-8":null,"mat-u-9":null,"mat-cb-0":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Crunches/0.jpg","mat-cb-1":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Reverse_Crunch/0.jpg","mat-cb-2":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Air_Bike/0.jpg","mat-cb-3":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dead_Bug/0.jpg","mat-cb-4":null,"mat-cb-5":null,"mat-cb-6":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bird_Dog/0.jpg","mat-cb-7":null,"mat-cb-8":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Plank/0.jpg","mat-cb-9":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Plank/0.jpg","mat-cb-10":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Side_Bridge/0.jpg","mat-cb-11":null,"mat-ca-0":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Flat_Bench_Lying_Leg_Raise/0.jpg","mat-ca-1":null,"mat-ca-2":null,"mat-ca-3":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Russian_Twist/0.jpg","mat-ca-4":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/V-Ups/0.jpg","mat-ca-5":null,"mat-ca-6":null,"mat-ca-7":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Mountain_Climbers/0.jpg","mat-ca-8":null,"mat-ca-9":null,"mat-ca-10":null,"mat-ca-11":null,"hiit-0":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Jumping_Jack/0.jpg","hiit-1":null,"hiit-2":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/High_Knees/0.jpg","hiit-3":null,"hiit-4":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Mountain_Climbers/0.jpg","hiit-5":null,"hiit-6":null,"hiit-7":null,"hiit-8":null,"hiit-9":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Burpee/0.jpg","hiit-10":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Burpee/0.jpg","hiit-11":null,"hiit-12":null,"hiit-13":null,"hiit-14":null,"hiit-15":null,"warm-0":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Arm_Circles/0.jpg","warm-1":null,"warm-2":null,"warm-3":null,"warm-4":null,"warm-5":null,"warm-6":null,"warm-7":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Worlds_Greatest_Stretch/0.jpg","warm-8":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cat_Stretch/0.jpg","warm-9":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bird_Dog/0.jpg","warm-10":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Butt_Lift_Bridge/0.jpg","warm-11":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bodyweight_Squat/0.jpg","warm-12":null,"cool-0":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Hamstring_And_Calf_Stretch/0.jpg","cool-1":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Quadriceps/0.jpg","cool-2":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kneeling_Hip_Flexor/0.jpg","cool-3":null,"cool-4":null,"cool-5":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Childs_Pose/0.jpg","cool-6":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cobra/0.jpg","cool-7":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Doorway_Chest_Stretch/0.jpg","cool-8":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cross_Body_Shoulder_Stretch/0.jpg","cool-9":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Triceps_Stretch/0.jpg","cool-10":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Calf_Stretch_Hands_Against_Wall/0.jpg","cool-11":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cat_Stretch/0.jpg","warm-90-90-hamstring":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/90_90_Hamstring/0.jpg","warm-standing-hip-circles":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Hip_Circles/0.jpg","warm-standing-hip-flexors":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Hip_Flexors/0.jpg","warm-shoulder-stretch":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Shoulder_Stretch/0.jpg","warm-knee-across-body":"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Knee_Across_The_Body/0.jpg"};

const defaults={bodyMetrics:[],bodyMetricUnit:"lb",measurementUnit:"in",swapChoices:{},exercisePerformance:{},exerciseProfiles:{},workoutRatings:{},activeWorkout:null,todayOrder:{},planSeed:0,
 theme:"dark",workoutDays:4,duration:45,difficulty:"Moderate",restDays:[0,6],
 equipment:["Adjustable Dumbbells","Barbell","Kettlebell","Skipping Rope","Disc Sliders","Treadmill","Mini Stepper","Resistance Loop Bands","Resistance/Toning Tubes","Stationary Bike","Exercise Mat"],
 history:[],selectedDay:new Date().getDay(),restSeconds:45,setProgress:{},restLogs:{}
};
let state=Object.assign({},defaults,JSON.parse(localStorage.getItem("homefit-state")||"{}"));
const view=document.getElementById("view"),modal=document.getElementById("modal"),toast=document.getElementById("toast");


const muscleGroups=["shoulders","chest","upperBack","biceps","triceps","core","glutes","quads","hamstrings","calves","cardio"];
function musclesFor(ex){
 const s=(ex.name+" "+ex.area).toLowerCase(), m=new Set();
 if(/shoulder|overhead|lateral raise|front raise|arnold|upright row/.test(s)) m.add("shoulders");
 if(/chest|press|push-up|push up|fly|pullover/.test(s)) m.add("chest");
 if(/row|pulldown|face pull|reverse fly|superman/.test(s)) m.add("upperBack");
 if(/bicep|curl|hammer/.test(s)) m.add("biceps");
 if(/tricep|skull|close-grip/.test(s)) m.add("triceps");
 if(/core|plank|crunch|dead bug|bird dog|mountain|russian|v-up|leg raise|flutter|scissor|hollow|bear|pallof|wood chop|rotation/.test(s)) m.add("core");
 if(/glute|hip thrust|bridge|donkey|kickback|fire hydrant|clamshell/.test(s)) m.add("glutes");
 if(/squat|lunge|step-up|step up|thruster|wall sit/.test(s)) m.add("quads");
 if(/deadlift|rdl|romanian|good morning|hamstring/.test(s)) m.add("hamstrings");
 if(/calf/.test(s)) m.add("calves");
 if(/cardio|treadmill|bike|cycling|stepper|skipping|jump|burpee|high knees|fast feet|shadow boxing/.test(s)) m.add("cardio");
 if(!m.size){
   if(ex.area.includes("Upper Body"))["shoulders","chest","upperBack","biceps","triceps"].forEach(x=>m.add(x));
   if(ex.area.includes("Lower Body"))["glutes","quads","hamstrings","calves"].forEach(x=>m.add(x));
   if(ex.area.includes("Core"))m.add("core");
 }
 return [...m];
}
function heatScores(plan){
 const scores={};muscleGroups.forEach(m=>scores[m]=0);
 plan.forEach(ex=>musclesFor(ex).forEach(m=>scores[m]+=1));
 const max=Math.max(1,...Object.values(scores));
 Object.keys(scores).forEach(k=>scores[k]=scores[k]/max);
 return scores;
}
function heatColor(v){
 if(v<=0)return "var(--surface3)";
 const alpha=.2+.8*v;
 return `color-mix(in srgb, #ff3b67 ${Math.round(alpha*100)}%, var(--surface3))`;
}


function femaleHeatmap(plan){
 const h=heatScores(plan);
 const level=v=>v<=0?"none":v<0.34?"light":v<0.67?"moderate":v<0.9?"high":"primary";
 const fill=(m)=>`heat-${level(h[m]||0)}`;
 const title=(m,label)=>`${label}: ${Math.round((h[m]||0)*100)}% relative focus`;

 return `<div class="dynamic-heatmap-wrap">
   <div class="heatmap-title">
     <strong>Today's Muscle Heat Map</strong>
     <small>Calculated from the exercises scheduled for today.</small>
   </div>

   <svg class="female-muscle-map" viewBox="0 0 620 610" role="img" aria-label="Dynamic front and back female body muscle heat map">
     <defs>
       <filter id="heatGlow" x="-40%" y="-40%" width="180%" height="180%">
         <feGaussianBlur stdDeviation="4" result="blur"/>
         <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
       </filter>
     </defs>

     <!-- FRONT FEMALE BODY -->
     <g class="body-figure front-body" transform="translate(48 20)">
       <text x="120" y="575" text-anchor="middle" class="body-view-label">FRONT</text>

       <!-- head / neck -->
       <ellipse class="body-neutral" cx="120" cy="44" rx="30" ry="37"/>
       <path class="body-neutral" d="M103 75 L137 75 L143 104 L97 104 Z"/>

       <!-- torso silhouette -->
       <path class="body-outline" d="M76 105
         C61 111 49 128 45 151
         L55 243
         C59 271 69 293 82 309
         L76 356
         L88 501
         C90 526 99 548 108 559
         L120 559
         L120 342
         L120 559
         L132 559
         C141 548 150 526 152 501
         L164 356
         L158 309
         C171 293 181 271 185 243
         L195 151
         C191 128 179 111 164 105
         C147 97 138 94 120 94
         C102 94 93 97 76 105 Z"/>

       <!-- shoulders -->
       <path class="muscle ${fill("shoulders")}" title="${title("shoulders","Shoulders")}" d="M75 105 C55 111 45 126 44 148 C57 143 70 140 83 143 C90 128 95 113 98 102 Z"/>
       <path class="muscle ${fill("shoulders")}" title="${title("shoulders","Shoulders")}" d="M165 105 C185 111 195 126 196 148 C183 143 170 140 157 143 C150 128 145 113 142 102 Z"/>

       <!-- chest -->
       <path class="muscle ${fill("chest")}" title="${title("chest","Chest")}" d="M87 119 C97 108 108 106 119 114 L118 162 C103 162 91 156 82 147 Z"/>
       <path class="muscle ${fill("chest")}" title="${title("chest","Chest")}" d="M153 119 C143 108 132 106 121 114 L122 162 C137 162 149 156 158 147 Z"/>

       <!-- biceps -->
       <path class="muscle ${fill("biceps")}" title="${title("biceps","Biceps")}" d="M49 150 C36 160 31 181 33 207 C35 227 41 245 49 254 C58 243 61 225 60 204 L62 166 Z"/>
       <path class="muscle ${fill("biceps")}" title="${title("biceps","Biceps")}" d="M191 150 C204 160 209 181 207 207 C205 227 199 245 191 254 C182 243 179 225 180 204 L178 166 Z"/>

       <!-- triceps/forearm side emphasis -->
       <path class="muscle ${fill("triceps")}" title="${title("triceps","Triceps")}" d="M34 210 C28 232 27 258 33 280 C38 294 44 305 51 312 C58 292 59 270 53 249 Z"/>
       <path class="muscle ${fill("triceps")}" title="${title("triceps","Triceps")}" d="M206 210 C212 232 213 258 207 280 C202 294 196 305 189 312 C182 292 181 270 187 249 Z"/>

       <!-- abs/core -->
       <path class="muscle ${fill("core")}" title="${title("core","Core")}" d="M89 160 C101 165 109 166 118 166 L118 279 C105 277 94 274 84 267 C78 233 79 195 89 160 Z"/>
       <path class="muscle ${fill("core")}" title="${title("core","Core")}" d="M151 160 C139 165 131 166 122 166 L122 279 C135 277 146 274 156 267 C162 233 161 195 151 160 Z"/>

       <!-- quads -->
       <path class="muscle ${fill("quads")}" title="${title("quads","Quadriceps")}" d="M81 300 C95 290 106 292 116 304 L113 401 C105 426 94 444 83 453 C75 428 73 398 76 365 Z"/>
       <path class="muscle ${fill("quads")}" title="${title("quads","Quadriceps")}" d="M159 300 C145 290 134 292 124 304 L127 401 C135 426 146 444 157 453 C165 428 167 398 164 365 Z"/>

       <!-- calves -->
       <path class="muscle ${fill("calves")}" title="${title("calves","Calves")}" d="M83 420 C94 430 103 438 111 450 L108 526 C101 542 94 549 88 551 C80 528 78 501 80 471 Z"/>
       <path class="muscle ${fill("calves")}" title="${title("calves","Calves")}" d="M157 420 C146 430 137 438 129 450 L132 526 C139 542 146 549 152 551 C160 528 162 501 160 471 Z"/>
     </g>

     <!-- BACK FEMALE BODY -->
     <g class="body-figure back-body" transform="translate(353 20)">
       <text x="120" y="575" text-anchor="middle" class="body-view-label">BACK</text>

       <ellipse class="body-neutral" cx="120" cy="44" rx="30" ry="37"/>
       <path class="body-neutral" d="M103 75 L137 75 L143 104 L97 104 Z"/>
       <path class="body-outline" d="M76 105
         C61 111 49 128 45 151
         L55 243
         C59 271 69 293 82 309
         L76 356
         L88 501
         C90 526 99 548 108 559
         L120 559
         L132 559
         C141 548 150 526 152 501
         L164 356
         L158 309
         C171 293 181 271 185 243
         L195 151
         C191 128 179 111 164 105
         C147 97 138 94 120 94
         C102 94 93 97 76 105 Z"/>

       <!-- rear shoulders -->
       <path class="muscle ${fill("shoulders")}" title="${title("shoulders","Rear shoulders")}" d="M75 105 C55 111 45 126 44 148 C57 143 70 140 83 143 C90 128 95 113 98 102 Z"/>
       <path class="muscle ${fill("shoulders")}" title="${title("shoulders","Rear shoulders")}" d="M165 105 C185 111 195 126 196 148 C183 143 170 140 157 143 C150 128 145 113 142 102 Z"/>

       <!-- upper back / lats -->
       <path class="muscle ${fill("upperBack")}" title="${title("upperBack","Upper Back")}" d="M84 116 C98 106 110 105 118 113 L118 210 C102 207 90 198 80 182 C75 157 76 134 84 116 Z"/>
       <path class="muscle ${fill("upperBack")}" title="${title("upperBack","Upper Back")}" d="M156 116 C142 106 130 105 122 113 L122 210 C138 207 150 198 160 182 C165 157 164 134 156 116 Z"/>

       <!-- triceps -->
       <path class="muscle ${fill("triceps")}" title="${title("triceps","Triceps")}" d="M49 150 C36 160 31 181 33 207 C35 227 41 245 49 254 C58 243 61 225 60 204 L62 166 Z"/>
       <path class="muscle ${fill("triceps")}" title="${title("triceps","Triceps")}" d="M191 150 C204 160 209 181 207 207 C205 227 199 245 191 254 C182 243 179 225 180 204 L178 166 Z"/>

       <!-- lower back/core -->
       <path class="muscle ${fill("core")}" title="${title("core","Core / Lower Back")}" d="M91 207 C101 212 109 214 118 214 L118 282 C104 280 92 274 83 265 Z"/>
       <path class="muscle ${fill("core")}" title="${title("core","Core / Lower Back")}" d="M149 207 C139 212 131 214 122 214 L122 282 C136 280 148 274 157 265 Z"/>

       <!-- glutes -->
       <path class="muscle ${fill("glutes")}" title="${title("glutes","Glutes")}" d="M82 273 C96 264 108 266 118 278 L117 337 C102 345 88 340 78 326 C73 306 75 287 82 273 Z"/>
       <path class="muscle ${fill("glutes")}" title="${title("glutes","Glutes")}" d="M158 273 C144 264 132 266 122 278 L123 337 C138 345 152 340 162 326 C167 306 165 287 158 273 Z"/>

       <!-- hamstrings -->
       <path class="muscle ${fill("hamstrings")}" title="${title("hamstrings","Hamstrings")}" d="M80 337 C95 343 106 345 114 353 L112 429 C103 443 93 452 83 456 C76 428 74 397 77 367 Z"/>
       <path class="muscle ${fill("hamstrings")}" title="${title("hamstrings","Hamstrings")}" d="M160 337 C145 343 134 345 126 353 L128 429 C137 443 147 452 157 456 C164 428 166 397 163 367 Z"/>

       <!-- calves -->
       <path class="muscle ${fill("calves")}" title="${title("calves","Calves")}" d="M83 420 C94 430 103 438 111 450 L108 526 C101 542 94 549 88 551 C80 528 78 501 80 471 Z"/>
       <path class="muscle ${fill("calves")}" title="${title("calves","Calves")}" d="M157 420 C146 430 137 438 129 450 L132 526 C139 542 146 549 152 551 C160 528 162 501 160 471 Z"/>
     </g>
   </svg>

   <div class="dynamic-heat-legend">
     <span><i class="heat-none"></i>Not targeted</span>
     <span><i class="heat-light"></i>Light</span>
     <span><i class="heat-moderate"></i>Moderate</span>
     <span><i class="heat-high"></i>High</span>
     <span><i class="heat-primary"></i>Primary</span>
   </div>

   <div class="muscle-focus-list">
     ${muscleGroups
       .filter(m=>(h[m]||0)>0)
       .sort((a,b)=>h[b]-h[a])
       .map(m=>`<div><span>${m.replace(/([A-Z])/g," $1")}</span><b>${Math.round(h[m]*100)}%</b></div>`)
       .join("")}
   </div>
 </div>`;
}




const REPDB_DATA_URL="https://exercise-dataset.com/exercises.json";
const REPDB_MEDIA_BASE="https://exercise-dataset.com/";
const repdbImageIndex=new Map();
const repdbRecords=[];
const repdbMatchCache=new Map();
let repdbIndexLoaded=false;

function repdbKey(value){
 return String(value||"").toLowerCase()
   .replace(/['’]/g,"")
   .replace(/&/g," and ")
   .replace(/\bpushups?\b/g,"push up")
   .replace(/\bpullups?\b/g,"pull up")
   .replace(/\bdb\b/g,"dumbbell")
   .replace(/\bkb\b/g,"kettlebell")
   .replace(/\brdl\b/g,"romanian deadlift")
   .replace(/\bconfiguration\b/g,"")
   .replace(/\bfinisher\b/g,"")
   .replace(/\s+/g," ")
   .replace(/[^a-z0-9 ]+/g," ")
   .replace(/\s+/g," ")
   .trim();
}

const REPDB_STOPWORDS=new Set(["standing","seated","lying","alternating","alternate","single","one","two","arm","leg","with","and","the","bodyweight"]);
function repdbTokens(value){
 return repdbKey(value).split(" ").filter(t=>t && !REPDB_STOPWORDS.has(t));
}
function tokenScore(a,b){
 const A=new Set(repdbTokens(a)), B=new Set(repdbTokens(b));
 if(!A.size||!B.size) return 0;
 let common=0;
 A.forEach(t=>{if(B.has(t)) common++;});
 return (2*common)/(A.size+B.size);
}
function equipmentKey(value){
 const v=repdbKey(value);
 if(v.includes("dumbbell")) return "dumbbell";
 if(v.includes("barbell")) return "barbell";
 if(v.includes("kettlebell")) return "kettlebell";
 if(v.includes("loop band")) return "loop_band";
 if(v.includes("resistance band")||v==="band"||v.includes("toning tube")) return "resistance_band";
 if(v.includes("treadmill")) return "treadmill";
 if(v.includes("stationary bike")||v.includes("bike")) return "stationary_bike";
 if(v.includes("jump rope")||v.includes("skipping rope")) return "jump_rope";
 if(v.includes("slider")) return "slider";
 if(v.includes("mat")||v.includes("bodyweight")||v==="none") return "";
 return "";
}

function repdbImageUrls(record){
 const flat=record?.images?.flat||{};
 const paths=[flat.peak,flat.main,flat.start].filter(Boolean);
 return [...new Set(paths.map(path=>new URL(path,REPDB_MEDIA_BASE).href))];
}

function indexRepdbRecord(record){
 const urls=repdbImageUrls(record);
 if(!urls.length) return;
 const keys=[
   repdbKey(record.name_en),
   repdbKey(record.id),
   repdbKey(String(record.name_en||"").replace(/\bmachine\b/gi,"")),
 ].filter(Boolean);
 keys.forEach(key=>repdbImageIndex.set(key,urls));
 repdbRecords.push({record,urls,key:repdbKey(record.name_en)});
}

const REPDB_REVIEWED_IMAGE_ALIASES={
 "Skipping Rope":"jump-rope",
 "Bent-Over Dumbbell Row":"bent-over-dumbbell-row",
 "Dumbbell Sumo Squat":"db-sumo-squat",
 "Dumbbell Stiff-leg Deadlift":"dumbbell-romanian-deadlift",
 "Dumbbell Lateral Lunge":"dumbbell-lunge",
 "Kettlebell Sumo Squat":"goblet-squat",
 "Resistance Band Squat":"banded-squat",
 "Banded Standing Kickback":"glute-kickback",
 "Slider Single-Leg Lunge":"reverse-lunge",
 "Quad Stretch":"standing-quad-stretch",
 "Figure-Four Glute Stretch":"bench-figure-4-glute-stretch",
 "Plank with Sliders":"mountain-climbers",
 "Mini Stepper Intervals":"stair-climber",
 "Dumbbell Thruster":"dumbbell-push-press",
 "Dumbbell Squat to Press":"dumbbell-push-press",
 "Dumbbell Clean and Press":"dumbbell-clean-and-press",
 "Dumbbell Farmer's Carry":"dumbbell-farmers-walk",
 "Dumbbell Reverse Lunge to Curl":"dumbbell-reverse-lunge",
 "Barbell Clean and Press":"barbell-clean-and-press",
 "Barbell Thruster":"barbell-push-press",
 "Barbell Squat to Press":"barbell-push-press",
 "Kettlebell Clean and Press":"double-kettlebell-clean-and-press",
 "Kettlebell Deadlift to High Pull":"kettlebell-high-pull",
 "Kettlebell Squat to Press":"kettlebell-push-press",
 "Kettlebell Figure Eight":"kettlebell-around-the-body",
 "Banded Squat":"banded-squat",
 "Banded Sumo Squat":"banded-squat",
 "Banded Squat Pulses":"banded-squat",
 "Banded Lateral Walk":"banded-lateral-walk"
};

function repdbCandidates(ex){
 if(!repdbIndexLoaded) return [];
 const cacheKey=String(ex.id||ex.name);
 if(repdbMatchCache.has(cacheKey)) return repdbMatchCache.get(cacheKey);

 // Reviewed aliases are explicit mappings for Home Workout names that differ from RepDB.
 const reviewedId=REPDB_REVIEWED_IMAGE_ALIASES[ex.name];
 if(reviewedId){
   const reviewed=repdbImageIndex.get(repdbKey(reviewedId));
   if(reviewed?.length){
     repdbMatchCache.set(cacheKey,reviewed);
     return reviewed;
   }
 }

 const keys=[
   repdbKey(ex.name),
   repdbKey(ex.id),
   repdbKey(String(ex.name||"").replace(/\bconfiguration\b/gi,"")),
 ].filter(Boolean);

 // Exact normalized match first.
 for(const key of keys){
   const found=repdbImageIndex.get(key);
   if(found?.length){
     repdbMatchCache.set(cacheKey,found);
     return found;
   }
 }

 // Then find a conservative near-match. This handles naming differences such as
 // "Bent-Over Dumbbell Row" vs "Dumbbell Bent Over Row" without guessing media paths.
 const wantedEquip=equipmentKey(ex.equipment);
 let best=null,bestScore=0;
 for(const item of repdbRecords){
   let score=tokenScore(ex.name,item.record.name_en);
   const recordEquip=String(item.record.equipment||"");
   if(wantedEquip && recordEquip===wantedEquip) score+=0.12;
   else if(wantedEquip && recordEquip && recordEquip!==wantedEquip) score-=0.18;

   // Strongly prefer the same broad movement words.
   const wanted=repdbTokens(ex.name);
   const got=new Set(repdbTokens(item.record.name_en));
   const movementWords=["squat","lunge","row","press","curl","deadlift","raise","plank","crunch","bridge","stretch","walk","swing","clean","thruster","climber","burpee","jack"];
   const core=wanted.find(t=>movementWords.includes(t));
   if(core && !got.has(core)) score-=0.25;

   if(score>bestScore){bestScore=score;best=item;}
 }
 const result=(best && bestScore>=0.72)?best.urls:[];
 repdbMatchCache.set(cacheKey,result);
 return result;
}

async function loadRepdbIndex(){
 try{
   const controller=new AbortController();
   const timer=setTimeout(()=>controller.abort(),5000);
   const response=await fetch(REPDB_DATA_URL,{signal:controller.signal,cache:"force-cache"});
   clearTimeout(timer);
   if(!response.ok) throw new Error(`RepDB ${response.status}`);
   const data=await response.json();
   repdbImageIndex.clear();
   repdbRecords.length=0;
   repdbMatchCache.clear();
   (data.exercises||[]).forEach(indexRepdbRecord);
   repdbIndexLoaded=true;

   // Refresh only views whose exercise cards contain imagery.
   const active=document.querySelector(".nav-item.active")?.dataset.route;
   if(active==="library") renderLibrary();
   else if(active==="week") renderWeek();
   else if(active==="today" && !document.querySelector("#activeWorkoutModal:not(.hidden)")) renderToday();
 }catch(err){
   // Existing local/external fallbacks keep the app functional offline.
   console.info("RepDB index unavailable; using existing image fallbacks.");
 }
}

function imageCandidates(ex){
 const list=[];

 // Exact image selected by the user remains first priority.
 if(ex.img) list.push(ex.img);

 // Use only image paths explicitly supplied by the RepDB JSON dataset.
 // Do not guess filenames from Home Workout exercise names.
 if(!ex.img) list.push(...repdbCandidates(ex));

 // Existing library sources remain as fallbacks.
 const sourced=librarySourceData[String(ex.id)];
 if(sourced?.image) list.push(sourced.image);
 if(librarySourceImagesByName[ex.name]) list.push(librarySourceImagesByName[ex.name]);
 if(exerciseImages[ex.id]) list.push(exerciseImages[ex.id]);

 return [...new Set(list.filter(Boolean))];
}
function exerciseImageMarkup(ex,cls=""){
 const candidates=imageCandidates(ex);
 if(!candidates.length) return `<div class="image-placeholder">Exercise guide</div>`;
 const encoded=encodeURIComponent(JSON.stringify(candidates));
 return `<img class="${cls}" src="${candidates[0]}" data-image-candidates="${encoded}" data-image-index="0" alt="${ex.name}" loading="lazy">`;
}
function bindExerciseImages(){
 document.querySelectorAll("img[data-image-candidates]").forEach(img=>{
   if(img.dataset.boundImageFallback==="1") return;
   img.dataset.boundImageFallback="1";
   img.addEventListener("error",()=>{
     let candidates=[];
     try{candidates=JSON.parse(decodeURIComponent(img.dataset.imageCandidates||"%5B%5D"));}catch(e){}
     let index=Number(img.dataset.imageIndex||0)+1;
     if(index<candidates.length){
       img.dataset.imageIndex=String(index);
       img.src=candidates[index];
     }else{
       const parent=img.parentElement;
       if(parent){
         parent.classList.add("missing");
         parent.innerHTML='<div class="image-placeholder">Image unavailable<br><small>Instructions are available below.</small></div>';
       }
     }
   });
 });
}

function save(){localStorage.setItem("homefit-state",JSON.stringify(state))}
function showToast(msg){toast.textContent=msg;toast.classList.remove("hidden");setTimeout(()=>toast.classList.add("hidden"),1900)}
function isoDate(d=new Date()){
 const y=d.getFullYear();
 const m=String(d.getMonth()+1).padStart(2,"0");
 const day=String(d.getDate()).padStart(2,"0");
 return `${y}-${m}-${day}`;
}

function dateForWeekday(day){
 const now=new Date();
 const sunday=new Date(now.getFullYear(),now.getMonth(),now.getDate()-now.getDay(),12,0,0,0);
 const target=new Date(sunday);
 target.setDate(sunday.getDate()+day);
 return isoDate(target);
}

function allowed(ex){return state.equipment.includes(ex.equipment)}
function isRest(day){return state.restDays.includes(day)}
function workoutType(day){
 const types=["Full Body","Upper Body & Core","Lower Body","Core & Cardio","Full Body","Upper Body","Lower Body & Core"];
 return isRest(day)?"Rest / Active Recovery":types[day];
}
function roundSpeed(v){
 return Math.max(0.6,Math.min(6.2,Math.round(v/0.2)*0.2));
}
function treadmillPlanForDay(day,strengthPlan=[]){
 const focus=workoutType(day);
 const cardioCount=strengthPlan.filter(ex=>ex.area.includes("Cardio")).length;
 const lowerCount=strengthPlan.filter(ex=>ex.area.includes("Lower Body")).length;
 const fullCount=strengthPlan.filter(ex=>ex.area.includes("Full Body")).length;
 const hardLegDay=lowerCount>=Math.max(2,Math.ceil(strengthPlan.length*.45));
 const cardioHeavy=cardioCount>=2;
 const longSession=state.duration>=60;
 const advanced=state.difficulty==="Advanced";

 let intensity="Moderate", minutes=12, mode="Intervals", reason="Balanced conditioning finish.";

 if(hardLegDay || cardioHeavy || longSession){
   intensity="Light";
   minutes=10;
   mode="Steady Walk";
   reason=hardLegDay?"Lower-body work is already demanding, so the finisher stays recovery-focused.":
          cardioHeavy?"Your workout already contains substantial cardio, so the finisher stays easy.":
          "The main workout is long, so the finisher is kept light.";
 }else if((focus.includes("Upper Body")||focus.includes("Core")) && advanced){
   intensity="High";
   minutes=15;
   mode="Run/Walk Intervals";
   reason="Today leaves the legs relatively fresh, so a stronger conditioning finish is appropriate.";
 }else if(focus.includes("Upper Body")||focus.includes("Core")){
   intensity="Moderate";
   minutes=12;
   mode="Run/Walk Intervals";
   reason="Upper-body/core emphasis allows a moderate conditioning finish.";
 }else if(fullCount>=2){
   intensity="Moderate";
   minutes=12;
   mode="Walk/Run Intervals";
   reason="Full-body training gets a controlled conditioning finish without overloading recovery.";
 }else{
   intensity="Light";
   minutes=10;
   mode="Steady Walk";
   reason="A simple walk is enough to close out today's workout.";
 }

 let segments=[];
 if(intensity==="Light"){
   const pace=roundSpeed(state.difficulty==="Beginner"?2.0:2.4);
   segments=[
     {minutes:2,speed:roundSpeed(pace-0.4),label:"Easy warm-up walk"},
     {minutes:minutes-4,speed:pace,label:"Steady walk"},
     {minutes:2,speed:roundSpeed(pace-0.4),label:"Cool-down walk"}
   ];
 }else if(intensity==="Moderate"){
   const walk=roundSpeed(state.difficulty==="Beginner"?2.4:2.8);
   const run=roundSpeed(state.difficulty==="Beginner"?3.4:3.8);
   segments=[
     {minutes:2,speed:walk,label:"Warm-up walk"},
     {minutes:2,speed:run,label:"Run / fast walk"},
     {minutes:2,speed:walk,label:"Recovery walk"},
     {minutes:2,speed:run,label:"Run / fast walk"},
     {minutes:2,speed:walk,label:"Recovery walk"},
     {minutes:2,speed:roundSpeed(walk-0.4),label:"Cool-down walk"}
   ];
 }else{
   const walk=roundSpeed(2.8);
   const run=roundSpeed(state.difficulty==="Advanced"?5.0:4.4);
   segments=[
     {minutes:2,speed:walk,label:"Warm-up walk"},
     {minutes:2,speed:run,label:"Run interval"},
     {minutes:1,speed:walk,label:"Recovery"},
     {minutes:2,speed:roundSpeed(run+0.4),label:"Strong run interval"},
     {minutes:1,speed:walk,label:"Recovery"},
     {minutes:2,speed:run,label:"Run interval"},
     {minutes:1,speed:walk,label:"Recovery"},
     {minutes:2,speed:roundSpeed(run+0.2),label:"Final run interval"},
     {minutes:2,speed:roundSpeed(walk-0.4),label:"Cool-down walk"}
   ];
 }
 return {minutes,intensity,mode,reason,segments};
}
function treadmillMinutes(day=new Date().getDay(),strengthPlan=[]){
 return treadmillPlanForDay(day,strengthPlan).minutes;
}
function strengthMinutes(){return Math.max(10,state.duration-12)}
function strengthExerciseCount(){
 return Math.max(2,Math.min(9,Math.round(strengthMinutes()/6)));
}
function treadmillExercise(day=new Date().getDay(),strengthPlan=[]){
 const p=treadmillPlanForDay(day,strengthPlan);
 return {
   ...treadmillBase,
   sets:`${p.minutes} min · ${p.intensity} · ${p.mode}`,
   minutes:p.minutes,
   intensity:p.intensity,
   mode:p.mode,
   reason:p.reason,
   segments:p.segments,
   isFinisher:true,
   tips:[
     p.reason,
     "Use the suggested speeds as a starting point and adjust down if needed.",
     "All suggested speeds stay within your treadmill range of 0.6–6.2 and use 0.2 increments."
   ]
 };
}
function planForDay(day){
 if(isRest(day)) return [];
 const focus=workoutType(day);
 const filtered=exercises.filter(x=>x && allowed(x) && x.id!=="bike" && !x.area.includes("Mobility"));
 const matches=x=>focus.includes(x.area.split(" & ")[0])||x.area.includes(focus.split(" & ")[0])||(focus.includes("Full Body")&&x.area.includes("Full Body"));
 const rotate=(arr,n)=>arr.length?[...arr.slice(n%arr.length),...arr.slice(0,n%arr.length)]:arr;
 const seed=Number(state.planSeed||0);
 let ranked=rotate(filtered.filter(matches),day*7+seed*3);
 const families=["Adjustable Dumbbells","Barbell","Kettlebell","Resistance Loop Bands","Resistance/Toning Tubes","Disc Sliders","Skipping Rope","Mini Stepper","Stationary Bike"];
 let buckets=families.map((e,i)=>rotate(ranked.filter(x=>x.equipment===e),day*(i+2)+seed*(i+1)));
 let other=rotate(ranked.filter(x=>!families.includes(x.equipment)),day+seed*2);
 let pool=[],more=true;
 while(more){
   more=false;
   for(const b of buckets){if(b.length){pool.push(b.shift());more=true}}
   if(other.length){pool.push(other.shift());more=true}
 }
 pool=[...pool,...rotate(filtered.filter(x=>!ranked.includes(x)),day*3+seed*5)];
 const strength=pool.slice(0,strengthExerciseCount());
 return [...strength,treadmillExercise(day,strength)];
}
function themeApply(){
 document.documentElement.dataset.theme=state.theme==="system"?(matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"):state.theme;
}
themeApply();

function route(name){
 document.querySelectorAll(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.route===name));
 ({today:renderToday,week:renderWeek,library:renderLibrary,history:renderHistory,body:renderBodyTracker,settings:renderSettings}[name]||renderToday)();
}
document.querySelectorAll(".nav-item").forEach(b=>b.addEventListener("click",()=>{
 if(b.dataset.route==="week") state.selectedDay=new Date().getDay();
 route(b.dataset.route);
}));
document.getElementById("themeQuick").onclick=()=>{state.theme=(document.documentElement.dataset.theme==="dark"?"light":"dark");save();themeApply();route(document.querySelector(".nav-item.active").dataset.route)};

function todayLabel(day){return DAY_NAMES[day]}
function durationControl(){
 return `<div class="duration-control">
   <div><strong>Workout Duration</strong><small>Total time includes the treadmill finisher</small></div>
   <div class="duration-input-wrap">
     <button class="duration-step" data-delta="-5">−</button>
     <input id="todayDuration" type="number" min="20" max="90" step="5" value="${state.duration}">
     <span>min</span>
     <button class="duration-step" data-delta="5">+</button>
   </div>
 </div>`;
}
function bindDurationControls(renderFn){
 const input=document.getElementById("todayDuration");
 if(input){
   input.onchange=()=>{state.duration=Math.max(20,Math.min(90,Math.round((Number(input.value)||45)/5)*5));save();renderFn();};
 }
 document.querySelectorAll(".duration-step").forEach(b=>b.onclick=()=>{
   state.duration=Math.max(20,Math.min(90,state.duration+Number(b.dataset.delta)));
   save();renderFn();
 });
}


function workoutCompletedOn(date=isoDate()){
 return state.history.some(h=>h.date===date);
}
function markAllSetsComplete(plan,trackingDate=isoDate()){
 state.setProgress=state.setProgress||{};
 plan.forEach(ex=>{
   const key=progressKey(ex,trackingDate), count=parseSetPlan(ex).count;
   state.setProgress[key]=state.setProgress[key]||{};
   for(let i=0;i<count;i++) state.setProgress[key][i]=true;
 });
}
function saveCompletedWorkout(plan){
 clearActiveWorkout();
 if(workoutCompletedOn()){showToast("Today's workout is already marked complete");return;}
 markAllSetsComplete(plan);
 const day=new Date().getDay(), treadmill=plan.find(x=>x.isFinisher);
 const record={
   date:isoDate(),focus:workoutType(day),minutes:state.duration,exercises:plan.length,
   restSeconds:totalLoggedRest(),restSessions:restEntries().length,treadmillMinutes:treadmill?.minutes||0,
   setsCompleted:plan.reduce((sum,ex)=>sum+parseSetPlan(ex).count,0),
   setsPlanned:plan.reduce((sum,ex)=>sum+parseSetPlan(ex).count,0),
   manuallyCompleted:true
 };
 state.history.push(record);
 const suggestions=evaluateProgressionForWorkout(plan,record.date);
 save();
 showWorkoutSummary(record,suggestions);
}


let todayRestTimer=null;
let todayRestStartedAt=Number(state.todayRestStartedAt||0)||null;
let todayRestElapsed=0;

function restEntries(date=isoDate()){
 state.restLogs=state.restLogs||{};
 return state.restLogs[date]||[];
}
function totalLoggedRest(date=isoDate()){
 return restEntries(date).reduce((sum,r)=>sum+(r.seconds||0),0);
}
function formatRestClock(sec){
 sec=Math.max(0,Math.floor(sec||0));
 return `${String(Math.floor(sec/60)).padStart(2,"0")}:${String(sec%60).padStart(2,"0")}`;
}
function currentRestSeconds(){
 return todayRestStartedAt ? Math.floor((Date.now()-todayRestStartedAt)/1000) : todayRestElapsed;
}
function renderRestTracker(){
 const box=document.getElementById("todayRestTracker");
 if(!box) return;
 const entries=restEntries();
 const running=!!todayRestStartedAt;
 const current=currentRestSeconds();
 box.innerHTML=`
   <div class="rest-tracker-head">
     <div><span class="eyebrow">REST TRACKER</span><strong>${formatRestClock(current)}</strong></div>
     <div class="rest-tracker-actions">
       <button type="button" class="${running?"rest-stop":"rest-start"}" id="restToggle">${running?"Stop & Save":"Start Rest"}</button>
     </div>
   </div>
   <div class="rest-tracker-summary">
     <span><b>${entries.length}</b> rests captured</span>
     <span><b>${formatRestClock(totalLoggedRest())}</b> total rest</span>
   </div>
   ${entries.length?`<div class="rest-captures">${entries.slice(-4).reverse().map((r,i)=>`<span>Rest ${entries.length-i}: <b>${formatRestClock(r.seconds)}</b></span>`).join("")}</div>`:
   `<div class="rest-empty">Start and stop whenever you rest. Each stop saves that rest and resets the timer for the next one.</div>`}
 `;
 const btn=document.getElementById("restToggle");
 if(btn) btn.onclick=()=>{
   if(todayRestStartedAt){
     const seconds=Math.max(1,Math.floor((Date.now()-todayRestStartedAt)/1000));
     state.restLogs=state.restLogs||{};
     state.restLogs[isoDate()]=state.restLogs[isoDate()]||[];
     state.restLogs[isoDate()].push({seconds,endedAt:new Date().toISOString()});
     todayRestStartedAt=null;
     state.todayRestStartedAt=null;
     todayRestElapsed=0;
     if(todayRestTimer){clearInterval(todayRestTimer);todayRestTimer=null;}
     save();
     renderRestTracker();
     showToast(`Rest saved: ${formatRestClock(seconds)}`);
   }else{
     todayRestElapsed=0;
     todayRestStartedAt=Date.now();
     state.todayRestStartedAt=todayRestStartedAt;
     save();
     todayRestTimer=setInterval(renderRestTracker,1000);
     renderRestTracker();
   }
 };
}
function completedSetsForPlan(plan,date=isoDate()){
 return plan.reduce((sum,ex)=>{
   const values=Object.values((state.setProgress||{})[progressKey(ex,date)]||{});
   return sum+values.filter(Boolean).length;
 },0);
}
function plannedSetsForPlan(plan){
 return plan.reduce((sum,ex)=>sum+parseSetPlan(ex).count,0);
}
function treadmillPlanMarkup(ex){
 if(!ex?.isFinisher || !Array.isArray(ex.segments)) return "";
 return `<div class="treadmill-dynamic-plan">
   <div class="treadmill-plan-head">
     <div><span>${ex.intensity} finish</span><strong>${ex.minutes} min · ${ex.mode}</strong></div>
     <small>${ex.reason}</small>
   </div>
   <div class="treadmill-segments">
     ${ex.segments.map(s=>`<div><b>${s.minutes} min</b><span>${s.label}</span><em>Speed ${Number(s.speed).toFixed(1)}</em></div>`).join("")}
   </div>
 </div>`;
}



function todayOrderKey(date=isoDate()){
 return date;
}
function orderedTodayPlan(plan,date=isoDate()){
 const finisher=plan.find(ex=>ex.isFinisher);
 const work=plan.filter(ex=>!ex.isFinisher);
 state.todayOrder=state.todayOrder||{};
 const saved=state.todayOrder[todayOrderKey(date)]||[];

 const byId=new Map(work.map(ex=>[String(ex.id),ex]));
 const ordered=[];
 saved.forEach(id=>{
   if(byId.has(String(id))){
     ordered.push(byId.get(String(id)));
     byId.delete(String(id));
   }
 });
 work.forEach(ex=>{
   if(byId.has(String(ex.id))){
     ordered.push(ex);
     byId.delete(String(ex.id));
   }
 });

 return finisher?[...ordered,finisher]:ordered;
}
function saveTodayOrder(plan,date=isoDate()){
 state.todayOrder=state.todayOrder||{};
 state.todayOrder[todayOrderKey(date)]=plan.filter(ex=>!ex.isFinisher).map(ex=>String(ex.id));
 save();
}
function moveTodayExercise(plan,index,direction,date=isoDate()){
 const ordered=orderedTodayPlan(plan,date);
 const work=ordered.filter(ex=>!ex.isFinisher);
 const target=index+direction;
 if(index<0||index>=work.length||target<0||target>=work.length) return;
 [work[index],work[target]]=[work[target],work[index]];
 saveTodayOrder(work,date);
 renderToday();
}
function resetTodayOrder(){
 state.todayOrder=state.todayOrder||{};
 delete state.todayOrder[todayOrderKey()];
 save();
 renderToday();
 showToast("Today's exercise order reset");
}
function todayReorderRow(ex,i,total,trackingDate=isoDate()){
 if(ex.isFinisher){
   return `<div class="reorder-exercise-card finisher-card">
     <div class="reorder-main" data-ex="${ex.id}" role="button" tabindex="0">
       <span class="reorder-number">${i+1}</span>
       <div><strong>${ex.name}</strong><small>${ex.sets} · ${ex.equipment}</small></div>
       <span class="finisher-lock">Finish</span>
     </div>
     ${setTracker(ex,trackingDate)}
   </div>`;
 }
 return `<div class="reorder-exercise-card" draggable="true" data-drag-id="${ex.id}" data-drag-index="${i}">
   <div class="reorder-main" data-ex="${ex.id}" role="button" tabindex="0">
     <span class="reorder-number">${i+1}</span>
     <div><strong>${ex.name}</strong><small>${ex.sets} · ${ex.equipment}</small></div>
     <span class="drag-handle" aria-hidden="true">≡</span>
   </div>
   <div class="reorder-controls three">
     <button type="button" class="move-btn" data-move-index="${i}" data-move-dir="-1" ${i===0?"disabled":""}>↑ Up</button>
     <button type="button" class="move-btn" data-swap-ex="${ex.id}">⇄ Swap</button>
     <button type="button" class="move-btn" data-move-index="${i}" data-move-dir="1" ${i===total-1?"disabled":""}>↓ Down</button>
   </div>
   ${setTracker(ex,trackingDate)}
 </div>`;
}
function bindTodayReordering(plan){
 const date=isoDate();
 const ordered=orderedTodayPlan(plan,date);
 const work=ordered.filter(ex=>!ex.isFinisher);

 document.querySelectorAll("[data-move-index]").forEach(btn=>{
   btn.onclick=(e)=>{
     e.preventDefault();
     e.stopPropagation();
     moveTodayExercise(plan,Number(btn.dataset.moveIndex),Number(btn.dataset.moveDir),date);
   };
 });

 let draggedIndex=null;
 document.querySelectorAll(".reorder-exercise-card[draggable='true']").forEach(card=>{
   card.addEventListener("dragstart",(e)=>{
     draggedIndex=Number(card.dataset.dragIndex);
     card.classList.add("dragging");
     if(e.dataTransfer) e.dataTransfer.effectAllowed="move";
   });
   card.addEventListener("dragend",()=>{
     card.classList.remove("dragging");
     draggedIndex=null;
   });
   card.addEventListener("dragover",(e)=>{
     e.preventDefault();
     card.classList.add("drag-over");
   });
   card.addEventListener("dragleave",()=>card.classList.remove("drag-over"));
   card.addEventListener("drop",(e)=>{
     e.preventDefault();
     card.classList.remove("drag-over");
     const dropIndex=Number(card.dataset.dragIndex);
     if(draggedIndex===null||draggedIndex===dropIndex) return;
     const next=[...work];
     const [moved]=next.splice(draggedIndex,1);
     next.splice(dropIndex,0,moved);
     saveTodayOrder(next,date);
     renderToday();
   });
 });
}

function findExerciseByName(name){
 return exercises.find(ex=>ex && ex.name===name)||null;
}
function preWorkoutWarmup(day){
 const focus=workoutType(day).toLowerCase();
 let names=["Arm Circles","Standing Hip Circles"];

 if(focus.includes("lower")){
   names.push("90/90 Hamstring","Standing Hip Flexors","World's Greatest Stretch");
 }else if(focus.includes("upper")){
   names.push("Shoulder Stretch","World's Greatest Stretch","Cat-Cow");
 }else if(focus.includes("core") && focus.includes("cardio")){
   names.push("World's Greatest Stretch","Knee Across The Body","Cat-Cow");
 }else if(focus.includes("core")){
   names.push("Cat-Cow","Knee Across The Body","World's Greatest Stretch");
 }else{
   names.push("World's Greatest Stretch","Shoulder Stretch","Standing Hip Flexors");
 }

 return [...new Set(names)]
   .map(findExerciseByName)
   .filter(Boolean)
   .slice(0,5)
   .map(ex=>({...ex,isWarmup:true}));
}
function warmupMarkup(warmup){
 return `<section class="card preworkout-card">
   <div class="section-title">
     <div>
       <div class="eyebrow">PRE-WORKOUT</div>
       <h2>Warm-Up & Mobility</h2>
       <small>About 4–6 minutes · selected for today's workout</small>
     </div>
     <span class="warmup-badge">${warmup.length} moves</span>
   </div>
   <p class="warmup-note">Keep the movements gentle and controlled. You should feel warmer and more mobile—not tired before the workout starts.</p>
   <div class="warmup-list">
     ${warmup.map((ex,i)=>`
       <button type="button" class="warmup-guide" data-ex="${ex.id}">
         <span class="warmup-number">${i+1}</span>
         <div><strong>${ex.name}</strong><small>${ex.sets} · Tap for instructions</small></div>
         <span class="chev">›</span>
       </button>`).join("")}
   </div>
 </section>`;
}


function equipmentPriority(ex){
 const order=[
   "Adjustable Dumbbells","Barbell","Kettlebell","Resistance Loop Bands",
   "Resistance/Toning Tubes","Disc Sliders","Exercise Mat","Bodyweight / Exercise Mat",
   "Mini Stepper","Skipping Rope","Stationary Bike","Treadmill"
 ];
 const idx=order.indexOf(ex.equipment);
 return idx===-1?99:idx;
}
function autoOptimizePlan(plan){
 const finisher=plan.filter(ex=>ex.isFinisher);
 const work=plan.filter(ex=>!ex.isFinisher);
 return [...work].sort((a,b)=>{
   const ea=equipmentPriority(a), eb=equipmentPriority(b);
   if(ea!==eb) return ea-eb;
   return String(a.name).localeCompare(String(b.name));
 }).concat(finisher);
}
function autoOptimizeTodayOrder(){
 const day=new Date().getDay();
 const base=planForDay(day);
 const optimized=autoOptimizePlan(base);
 saveTodayOrder(optimized);
 showToast("Today's workout reordered by equipment");
 renderToday();
}
function swapCandidates(ex){
 const sameArea=ex.area;
 const excluded=new Set([String(ex.id)]);
 const sameEquipment=exercises.filter(x=>x && !excluded.has(String(x.id)) && allowed(x) && x.area===sameArea && x.equipment===ex.equipment && !x.area.includes("Mobility"));
 const sameAreaAny=exercises.filter(x=>x && !excluded.has(String(x.id)) && allowed(x) && x.area===sameArea && !x.area.includes("Mobility"));
 const ranked=[...sameEquipment,...sameAreaAny];
 const unique=[];
 const seen=new Set();
 for(const item of ranked){
   if(seen.has(item.id)) continue;
   seen.add(item.id);
   unique.push(item);
   if(unique.length>=8) break;
 }
 return unique;
}
function openSwapModal(exId,trackingDate=isoDate()){
 const ex=getExercise(exId);
 if(!ex){showToast("Exercise could not be loaded");return;}
 const candidates=swapCandidates(ex);
 modal.innerHTML=`<div class="modal-card">
   <div class="modal-head"><div><div class="eyebrow">Swap Exercise</div><h2>${ex.name}</h2></div><button class="close">×</button></div>
   <p class="swap-note">Choose a replacement targeting the same workout area. Matches using the same equipment are shown first.</p>
   <div class="swap-list">
     ${candidates.length?candidates.map(c=>`<button type="button" class="swap-option" data-swap-to="${c.id}">
       <div><strong>${c.name}</strong><small>${c.equipment} · ${c.sets}</small></div><span>›</span>
     </button>`).join(""):`<div class="empty">No suitable swap found with your selected equipment.</div>`}
   </div>
 </div>`;
 modal.classList.remove("hidden");
 modal.querySelector(".close").onclick=closeModal;
 modal.querySelectorAll("[data-swap-to]").forEach(btn=>btn.onclick=()=>{
   const replacement=getExercise(btn.dataset.swapTo);
   const day=new Date().getDay();
   const current=orderedTodayPlan(planForDay(day),trackingDate);
   const next=current.map(item=>String(item.id)===String(ex.id)?replacement:item);
   saveTodayOrder(next,trackingDate);
   closeModal();
   renderToday();
   showToast(`${ex.name} swapped for ${replacement.name}`);
 });
}
function weekDateRangeForMonth(year,month){
 const first=new Date(year,month,1,12);
 const last=new Date(year,month+1,0,12);
 const days=[];
 for(let d=1;d<=last.getDate();d++) days.push(new Date(year,month,d,12));
 return days;
}
function calendarMonthMarkup(year,month){
 const first=new Date(year,month,1,12);
 const days=weekDateRangeForMonth(year,month);
 const leading=first.getDay();
 const historyDates=new Set((state.history||[]).map(h=>h.date));
 let cells="";
 for(let i=0;i<leading;i++) cells+=`<div class="calendar-cell empty-cell"></div>`;
 for(const d of days){
   const date=isoDate(d);
   const done=historyDates.has(date);
   const rest=isRest(d.getDay());
   const past=d < new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate(),12);
   cells+=`<button type="button" class="calendar-cell ${done?"done":rest?"rest":past?"missed":""}" data-history-date="${date}">
     <span>${d.getDate()}</span>
     <i>${done?"✓":rest?"☾":past?"•":""}</i>
   </button>`;
 }
 return `<div class="history-calendar">
   <div class="calendar-weekdays">${["S","M","T","W","T","F","S"].map(x=>`<span>${x}</span>`).join("")}</div>
   <div class="calendar-grid">${cells}</div>
   <div class="calendar-legend">
     <span><i class="done"></i>Completed</span><span><i class="rest"></i>Rest</span><span><i class="missed"></i>Missed</span>
   </div>
 </div>`;
}
function markPastWorkoutCompleted(date){
 if((state.history||[]).some(h=>h.date===date)){
   showToast("That day is already marked complete");
   return;
 }
 const d=localDateFromISO(date);
 if(d>new Date()){showToast("Future dates cannot be marked complete");return;}
 const day=d.getDay();
 if(isRest(day)){
   showToast("That date is currently a rest day");
   return;
 }
 const plan=planForDay(day);
 const treadmill=plan.find(x=>x.isFinisher);
 state.history.push({
   date,
   focus:workoutType(day),
   minutes:state.duration,
   exercises:plan.length,
   restSeconds:0,
   restSessions:0,
   treadmillMinutes:treadmill?.minutes||0,
   setsCompleted:plan.reduce((sum,ex)=>sum+parseSetPlan(ex).count,0),
   setsPlanned:plan.reduce((sum,ex)=>sum+parseSetPlan(ex).count,0),
   retroactive:true
 });
 markAllSetsComplete(plan,date);
 save();
 showToast(`${new Date(date+"T12:00").toLocaleDateString(undefined,{weekday:"short",month:"short",day:"numeric"})} marked complete`);
 renderHistory();
}
function openPastCompletionPicker(){
 const today=new Date();
 const options=[];
 for(let i=1;i<=21;i++){
   const d=new Date(today.getFullYear(),today.getMonth(),today.getDate()-i,12);
   const date=isoDate(d);
   if(isRest(d.getDay())) continue;
   const done=(state.history||[]).some(h=>h.date===date);
   options.push({date,done,label:d.toLocaleDateString(undefined,{weekday:"short",month:"short",day:"numeric"})});
 }
 modal.innerHTML=`<div class="modal-card">
   <div class="modal-head"><div><div class="eyebrow">Past Workout</div><h2>Mark a Previous Day Complete</h2></div><button class="close">×</button></div>
   <p class="swap-note">Use this if you completed a workout but forgot to mark it on that day.</p>
   <div class="past-day-list">
     ${options.map(o=>`<button type="button" class="past-day-option ${o.done?"done":""}" data-past-date="${o.date}" ${o.done?"disabled":""}>
       <span>${o.label}</span><b>${o.done?"Completed":"Mark Complete"}</b>
     </button>`).join("")}
   </div>
 </div>`;
 modal.classList.remove("hidden");
 modal.querySelector(".close").onclick=closeModal;
 modal.querySelectorAll("[data-past-date]").forEach(btn=>btn.onclick=()=>{
   const date=btn.dataset.pastDate;
   closeModal();
   markPastWorkoutCompleted(date);
 });
}


function postWorkoutCooldown(day){
 const focus=workoutType(day);
 const names=focus.includes("Lower")?[
   "Hip Flexor Stretch","Hamstring Stretch","Quad Stretch","Figure-Four Glute Stretch","Calf Stretch"
 ]:focus.includes("Upper")?[
   "Chest Stretch","Shoulder Stretch","Tricep Stretch","Child's Pose","Cat-Cow"
 ]:focus.includes("Core")?[
   "Child's Pose","Cobra Stretch","Hip Flexor Stretch","Figure-Four Glute Stretch","Cat-Cow"
 ]:[
   "Hamstring Stretch","Hip Flexor Stretch","Child's Pose","Shoulder Stretch","Calf Stretch"
 ];
 const picked=names.map(name=>exercises.find(x=>x && x.name===name)).filter(Boolean).slice(0,5);
 return {minutes:5,items:picked};
}
function recoverySectionMarkup(title,subtitle,items,kind){
 return `<details class="recovery-section ${kind}">
   <summary><div><strong>${title}</strong><small>${subtitle}</small></div><span>⌄</span></summary>
   <div class="recovery-body">
     ${items.map(ex=>`<button type="button" class="recovery-row" data-recovery-ex="${ex.id}">
       <div><b>${ex.name}</b><small>${ex.sets||"30–45 sec"}</small></div><span>Instructions ›</span>
     </button>`).join("")}
   </div>
 </details>`;
}
function bindRecoveryInstructions(){
 document.querySelectorAll("[data-recovery-ex]").forEach(btn=>btn.onclick=(e)=>{
   e.preventDefault();
   e.stopPropagation();
   preview(btn.dataset.recoveryEx);
 });
}

function renderToday(){
 const day=new Date().getDay();
 const basePlan=planForDay(day);
 const plan=orderedTodayPlan(basePlan,isoDate());
 const warmup=preWorkoutWarmup(day);
 const cooldown=postWorkoutCooldown(day);
 const sessionPlan=[...warmup,...plan];
 const focus=workoutType(day);
 const finisher=plan.find(x=>x.isFinisher);
 const doneSets=completedSetsForPlan(plan), totalSets=plannedSetsForPlan(plan);
 const movableCount=plan.filter(ex=>!ex.isFinisher).length;

 view.innerHTML=`
 <section class="hero today-dashboard-hero">
   <div class="hero-content">
     <div class="eyebrow">${todayLabel(day)} · ${new Date().toLocaleDateString(undefined,{month:"long",day:"numeric"})}</div>
     <h1>${focus}</h1>
     <p>${isRest(day)?"Recovery is part of the program.":"Your equipment-based workout is ready."}</p>
     <div class="stats">
       <div class="stat"><b>${isRest(day)?"—":state.duration}</b><span>Total Min</span></div>
       <div class="stat"><b>${plan.length}</b><span>Exercises</span></div>
       <div class="stat"><b>${state.difficulty}</b><span>Intensity</span></div>
     </div>
   </div>
 </section>

 ${isRest(day)?"":`
   <section class="card heatmap-card">
   ${femaleHeatmap(plan)}</section>
   <section class="card">${durationControl()}
     <div class="duration-note">Changing the time automatically adds or removes strength exercises. Today's treadmill finish remains last.</div>
   </section>
   ${warmupMarkup(warmup)}
   <section class="card rest-tracker-card"><div id="todayRestTracker"></div></section>
 `}

 <section class="card today-workout-card">
  <div class="section-title">
    <div>
      <h2>${isRest(day)?"Active Recovery":"Today's Workout"}</h2>
      ${!isRest(day)?`<small class="set-progress-text">${doneSets}/${totalSets} sets completed</small>`:""}
    </div>
    <small>${plan.length} exercises</small>
  </div>

  ${isRest(day)?
    `<div class="empty">Take an easy walk, stretch, or use the bike at a recovery pace. You can change rest days in Settings.</div>`:
    `<div class="today-order-toolbar">
       <div>
         <strong>Arrange your workout</strong>
         <small>Drag exercises or use Move Up/Down so your equipment setup works for you.</small>
       </div>
       <div class="today-order-buttons"><button type="button" class="secondary compact" id="autoArrangeToday">Auto Arrange</button><button type="button" class="secondary compact" id="resetTodayOrder">Reset order</button></div>
     </div>

     <div class="reorder-workout-list">
       ${plan.map((ex,i)=>todayReorderRow(ex,i,movableCount,isoDate())).join("")}
     </div>

     ${finisher?`<div class="today-finisher-details">${treadmillPlanMarkup(finisher)}</div>`:""}

     <div style="height:12px"></div>
     ${workoutCompletedOn()?
       `<div class="workout-complete-banner"><span>✓</span><div><strong>Workout Completed</strong><small>Saved in History for today.</small></div></div>`:
       `<div class="workout-actions today-fixed-actions">
          ${hasActiveWorkoutToday()
            ?`<button class="primary resume-workout-btn" id="resumeWorkout">▶ Resume Workout</button>
               <button class="secondary" id="restartWorkout">Restart Workout</button>`
            :`<button class="primary" id="startWorkout">Start Workout</button>`}
          <button class="complete-workout-btn" id="markWorkoutComplete">✓ Mark Workout Complete</button>
        </div>`
     }`
  }
 </section>
 ${isRest(day)?"":recoverySectionMarkup("Cool-Down","5 min · Recovery stretches",cooldown.items,"cooldown")}`;

 bindDurationControls(renderToday);
 bindExerciseRows();
 bindExerciseImages();
 if(!isRest(day)){
   renderRestTracker();
   bindTodayReordering(basePlan);
   const resetBtn=document.getElementById("resetTodayOrder");
   const autoBtn=document.getElementById("autoArrangeToday");
   if(resetBtn) resetBtn.onclick=resetTodayOrder;
   if(autoBtn) autoBtn.onclick=autoOptimizeTodayOrder;
   document.querySelectorAll("[data-swap-ex]").forEach(btn=>btn.onclick=(e)=>{e.preventDefault();e.stopPropagation();openSwapModal(btn.dataset.swapEx,isoDate());});
 }
 if(!isRest(day) && !workoutCompletedOn()){
   const startBtn=document.getElementById("startWorkout");
   const resumeBtn=document.getElementById("resumeWorkout");
   const restartBtn=document.getElementById("restartWorkout");
   const completeBtn=document.getElementById("markWorkoutComplete");
   if(startBtn) startBtn.onclick=()=>startWorkout(sessionPlan);
   if(resumeBtn) resumeBtn.onclick=resumeActiveWorkout;
   if(restartBtn) restartBtn.onclick=()=>{
     if(confirm("Restart today's workout from the beginning? Your completed set checkmarks will remain.")){
       clearActiveWorkout();
       startWorkout(sessionPlan);
     }
   };
   if(completeBtn) completeBtn.onclick=()=>saveCompletedWorkout(sessionPlan);
 }
 bindRecoveryInstructions();
}


function parseSetPlan(ex){
 const text=ex.sets||"";
 let m=text.match(/(\d+)\s*sets?\s*[×x]\s*(.+)/i);
 if(m) return {count:Number(m[1]),label:m[2].trim()};
 m=text.match(/^(\d+)\s*[×x]\s*(.+)/i);
 if(m) return {count:Number(m[1]),label:m[2].trim()};
 // Timed single-block activities (treadmill, continuous cardio, etc.)
 return {count:1,label:text};
}
function progressKey(ex,trackingDate=isoDate()){return `${trackingDate}::${ex.id}`}
function setDone(ex,index,trackingDate=isoDate()){
 const p=state.setProgress||{};
 return !!(p[progressKey(ex,trackingDate)]&&p[progressKey(ex,trackingDate)][index]);
}
function toggleSet(ex,index,trackingDate=isoDate()){
 state.setProgress=state.setProgress||{};
 const key=progressKey(ex,trackingDate);
 state.setProgress[key]=state.setProgress[key]||{};
 state.setProgress[key][index]=!state.setProgress[key][index];
 save();
}
function setTracker(ex,trackingDate=isoDate()){
 const plan=parseSetPlan(ex);
 return `<div class="set-tracker" data-tracker="${ex.id}" data-tracking-date="${trackingDate}">
   ${Array.from({length:plan.count},(_,i)=>`
     <button type="button" class="set-check ${setDone(ex,i,trackingDate)?"done":""}" data-set-ex="${ex.id}" data-set-index="${i}" data-set-date="${trackingDate}">
       <span class="set-box">${setDone(ex,i,trackingDate)?"✓":""}</span>
       <span><strong>${plan.count===1?"Complete":"Set "+(i+1)}</strong><small>${plan.label}</small></span>
     </button>`).join("")}
 </div>`;
}

function updateTodaySetProgress(){
 const label=document.querySelector(".set-progress-text");
 if(!label) return;
 const plan=planForDay(new Date().getDay());
 label.textContent=`${completedSetsForPlan(plan)}/${plannedSetsForPlan(plan)} sets completed`;
}

function bindSetTrackers(){
 document.querySelectorAll("[data-set-ex]").forEach(btn=>{
   btn.onclick=(e)=>{
     e.preventDefault();
     e.stopPropagation();
     const ex=getExercise(btn.dataset.setEx);
     const trackingDate=btn.dataset.setDate||isoDate();
     toggleSet(ex,Number(btn.dataset.setIndex),trackingDate);
     const parent=btn.closest(".set-tracker");
     if(parent) parent.outerHTML=setTracker(ex,trackingDate);
     bindSetTrackers();
     if(trackingDate===isoDate()) updateTodaySetProgress();
   };
 });
}

function exerciseRow(ex,i,trackingDate=isoDate()){
 if(typeof trackingDate!=="string") trackingDate=isoDate();
 return `<div class="exercise-block ${ex.isFinisher?"finisher":""}">
   <div class="exercise-row text-only" data-ex="${ex.id}" role="button" tabindex="0" aria-label="Open instructions for ${ex.name}">
     <div class="exercise-number">${i!=null?i+1:""}</div>
     <div><h3>${ex.name}${ex.isFinisher?` <span class="finisher-label">FINISHER</span>`:""}</h3><p>${ex.equipment} · Tap for instructions</p></div><div class="chev">›</div>
   </div>
   ${setTracker(ex,trackingDate)}
 </div>`;
}
function bindExerciseRows(){
 document.querySelectorAll("[data-ex]").forEach(el=>{
   el.onclick=(e)=>{
     if(e.target.closest("[data-set-ex]")) return;
     e.preventDefault();
     e.stopPropagation();
     preview(el.dataset.ex);
   };
   el.onkeydown=(e)=>{
     if((e.key==="Enter"||e.key===" ") && !e.target.closest("[data-set-ex]")){
       e.preventDefault();
       preview(el.dataset.ex);
     }
   };
 });
}


function defaultInstructionsFor(ex){
 const n=(ex.name||"").toLowerCase();
 const area=(ex.area||"").toLowerCase();
 const equipment=ex.equipment||"Bodyweight";

 if(n.includes("treadmill")){
   return [
     "Start at the first listed speed and allow your stride to settle before increasing pace.",
     "Follow the listed walk/run intervals in order, using the exact speed shown for each segment.",
     "Finish with the cool-down interval and step off only after the belt has slowed safely."
   ];
 }
 if(n.includes("bike")||n.includes("cycling")||n.includes("ride")){
   return [
     "Adjust the seat so your knee stays slightly bent at the bottom of the pedal stroke.",
     "Pedal smoothly at the listed resistance or effort level without rocking your hips.",
     "Use the easier interval or cool-down pace before stopping."
   ];
 }
 if(n.includes("stepper")||n.includes("stepping")){
   return [
     "Stand tall with your core braced and place your full feet securely on the pedals.",
     "Press each pedal smoothly while keeping your knees tracking forward.",
     "Keep a controlled rhythm and reduce speed if your posture starts to break down."
   ];
 }
 if(n.includes("squat")){
   return [
     `Set your stance securely and position the ${equipment.toLowerCase()} as required.`,
     "Brace your core, sit your hips down and back, and keep your knees tracking in line with your toes.",
     "Drive through your feet to stand tall without locking your knees aggressively."
   ];
 }
 if(n.includes("lunge")){
   return [
     `Hold or position the ${equipment.toLowerCase()} securely and start tall.`,
     "Step in the required direction, lower with control, and keep the front knee aligned with the foot.",
     "Push through the working foot to return to the starting position."
   ];
 }
 if(n.includes("deadlift")||n.includes("romanian")||n.includes("good morning")){
   return [
     "Brace your core and begin from a neutral-spine hip-hinge position.",
     "Push your hips backward while keeping the load close to your body and your back flat.",
     "Squeeze your glutes to return to standing without overextending your lower back."
   ];
 }
 if(n.includes("row")){
   return [
     `Set the ${equipment.toLowerCase()} securely and maintain a stable torso.`,
     "Pull your elbow or elbows toward your ribs while keeping your shoulders away from your ears.",
     "Squeeze your shoulder blades briefly, then return slowly to the start."
   ];
 }
 if(n.includes("press")||n.includes("push-up")||n.includes("push up")){
   return [
     "Set your hands or weight position securely and brace your core.",
     "Lower with control while keeping your shoulders stable and elbows in a comfortable path.",
     "Press away smoothly until your arms are extended without losing body alignment."
   ];
 }
 if(n.includes("curl")){
   return [
     `Hold the ${equipment.toLowerCase()} securely with your elbows close to your sides.`,
     "Curl through a controlled range without swinging your torso.",
     "Lower slowly until your arms return to the starting position."
   ];
 }
 if(n.includes("plank")||n.includes("mountain climber")){
   return [
     "Set your shoulders over your hands or elbows and form a straight line through your body.",
     "Brace your core and keep your hips level while performing the movement.",
     "Move with control and stop the set if your lower back begins to sag."
   ];
 }
 if(n.includes("bridge")||n.includes("hip thrust")){
   return [
     "Set your feet securely and brace your abdomen before lifting.",
     "Drive through your heels and raise your hips by squeezing your glutes.",
     "Pause briefly at the top, then lower with control without over-arching your back."
   ];
 }
 if(area.includes("core")){
   return [
     "Brace your abdomen before beginning the repetition.",
     "Move slowly while keeping your pelvis and lower back controlled.",
     "Use a smaller range or easier variation if you cannot maintain position."
   ];
 }
 if(area.includes("cardio")){
   return [
     "Begin at a comfortable pace and establish a steady rhythm.",
     "Increase effort only while you can maintain safe, controlled form.",
     "Use the final portion to gradually reduce intensity and recover."
   ];
 }
 return [
   `Set up the ${equipment.toLowerCase()} securely and begin in the exercise's starting position.`,
   "Move through the working range with control while keeping your core engaged.",
   "Return slowly to the starting position and repeat for the listed reps or time."
 ];
}

function instructionSteps(ex){
 const sourced=librarySourceData[String(ex.id)];
 if(sourced?.instructions?.length) return sourced.instructions;
 const supplied=Array.isArray(ex?.tips)?ex.tips.filter(Boolean):[];
 const fallback=defaultInstructionsFor(ex);
 // Keep useful exercise-specific tips, then fill to at least 3 actionable steps.
 const result=[...supplied];
 for(const step of fallback){
   if(result.length>=3) break;
   if(!result.includes(step)) result.push(step);
 }
 return result.slice(0,5);
}

function exerciseRegistry(){
 const map=new Map();
 exercises.forEach(ex=>map.set(String(ex.id),ex));
 return map;
}

function getExercise(id){
 if(id==="treadmill-finisher"){
   const day=state.selectedDay??new Date().getDay();
   return treadmillExercise(day,[]);
 }
 return exerciseRegistry().get(String(id))||null;
}

function preview(id){
 const ex=getExercise(id);
 if(!ex){showToast("Exercise instructions could not be loaded");return;}
 const steps=instructionSteps(ex);
 let imageHtml="";
 try{
   imageHtml=`<div class="detail-single-image">${exerciseImageMarkup(ex)}</div>`;
 }catch(err){
   imageHtml="";
 }
 modal.innerHTML=`<div class="modal-card exercise-detail">
   <div class="modal-head">
     <div><div class="eyebrow">Exercise Instructions</div><h2>${ex.name}</h2></div>
     <button class="close" type="button">×</button>
   </div>
   ${imageHtml}
   <div class="tags" style="margin:12px 0">
     <span class="tag">${ex.area}</span>
     <span class="tag">${ex.equipment}</span>
     <span class="tag">${ex.sets}</span>
   </div>
   <div class="instruction-block">
     <h3>How to do it</h3>
     <ol class="instruction-list">${steps.map(t=>`<li>${t}</li>`).join("")}</ol>
   </div>
   <div class="instruction-block">
     <h3>Form reminders</h3>
     <p>Move with control, keep your core engaged, and use a load or pace that lets you maintain good technique through the full set. Stop if you feel sharp pain.</p>
   </div>
   <button class="primary close2" type="button">Close Guide</button>
 </div>`;
 modal.classList.remove("hidden");
 try{bindExerciseImages();}catch(err){}
 modal.querySelector(".close").onclick=closeModal;
 modal.querySelector(".close2").onclick=closeModal;
}
function closeModal(){modal.classList.add("hidden");modal.innerHTML=""}


function weekExerciseRow(ex,i){
 return `<button type="button" class="week-exercise-row" data-ex="${ex.id}" aria-label="Open instructions for ${ex.name}">
   <span class="week-exercise-number">${i+1}</span>
   <span class="week-exercise-copy"><strong>${ex.name}</strong><small>${ex.sets}</small></span>
   <span class="chev">›</span>
 </button>`;
}

const weekBannerImages={
 lower:"https://images.pexels.com/photos/8846119/pexels-photo-8846119.jpeg?auto=compress&cs=tinysrgb&w=900",
 upper:"https://images.pexels.com/photos/36917053/pexels-photo-36917053.jpeg?auto=compress&cs=tinysrgb&w=900",
 core:"https://images.pexels.com/photos/4267359/pexels-photo-4267359.jpeg?auto=compress&cs=tinysrgb&w=900",
 coreCardio:"https://c.pxhere.com/photos/b7/78/core_training_fitness_abdominal_exercise_fit_core_exercise_training_workout-435628.jpg!d",
 full:"https://images.pexels.com/photos/8033076/pexels-photo-8033076.jpeg?auto=compress&cs=tinysrgb&w=900"
};
function genericWeekBannerImage(focus){
 const f=focus.toLowerCase();
 if(f.includes("core") && f.includes("cardio")) return weekBannerImages.coreCardio;
 if(f.includes("lower")) return weekBannerImages.lower;
 if(f.includes("upper")) return weekBannerImages.upper;
 if(f.includes("core")) return weekBannerImages.core;
 return weekBannerImages.full;
}

function weekBanner(selected,plan){
 const focus=workoutType(selected);
 if(isRest(selected)){
   return `<section class="week-day-banner rest-banner">
     <div class="rest-banner-icon">☾</div>
     <div>
       <span class="eyebrow">${DAY_NAMES[selected]}</span>
       <h2>Rest Day</h2>
       <p>Keep it easy: gentle stretching or mobility, a relaxed walk, light foam rolling if available, and good hydration. The goal is recovery, not another hard workout.</p>
     </div>
   </section>`;
 }
 const bannerImage=genericWeekBannerImage(focus);
 return `<section class="week-day-banner">
   <div class="week-banner-image"><img src="${bannerImage}" alt="${focus} workout banner" loading="lazy" onerror="this.parentElement.innerHTML='<div class=&quot;image-placeholder&quot;>Workout Day</div>'"></div>
   <div class="week-banner-copy">
     <span class="eyebrow">${DAY_NAMES[selected]}</span>
     <h2>${focus}</h2>
     <p>${state.duration} min planned · ${plan.length} exercises</p>
   </div>
 </section>`;
}

function renderWeek(){
 const selected=state.selectedDay??new Date().getDay();
 const plan=planForDay(selected);
 const selectedDate=dateForWeekday(selected);
 const dayLetters=["S","M","T","W","T","F","S"];

 view.innerHTML=`
 <div class="section-title">
   <div><div class="eyebrow">Weekly Schedule</div><h1 style="margin-bottom:3px">Week</h1></div>
   <button class="secondary" id="regen">Regenerate</button>
 </div>
 <p class="week-subtext">Select a day to preview what is planned. The current day opens automatically when you enter Week.</p>

 <div class="week-grid week-grid-letters">
   ${dayLetters.map((letter,i)=>`
     <button class="day-chip letter-chip ${i===selected?"active":""} ${isRest(i)?"rest":""}" data-day="${i}" aria-label="${DAY_NAMES[i]}">
       <strong>${letter}</strong>
       <span>${dateForWeekday(i).slice(-2)}</span>
     </button>`).join("")}
 </div>

 ${weekBanner(selected,plan)}

 <section class="card week-plan-card">
   <div class="section-title">
     <h2>${DAY_NAMES[selected]}</h2>
     <small>${isRest(selected)?"Recovery":new Date(selectedDate+"T12:00:00").toLocaleDateString(undefined,{month:"short",day:"numeric"})}</small>
   </div>
   ${isRest(selected)?
     `<div class="rest-day-detail">
        <strong>Recovery focus</strong>
        <p>Stretch the areas that feel tight, do 5–10 minutes of gentle mobility, take an easy walk, foam roll if you have one, and prioritize hydration and sleep.</p>
      </div>`:
     `<div class="week-compact-list">${plan.map((ex,i)=>weekExerciseRow(ex,i)).join("")}</div>`
   }
 </section>`;

 document.querySelectorAll("[data-day]").forEach(b=>b.onclick=()=>{
   state.selectedDay=Number(b.dataset.day);
   save();
   renderWeek();
 });
 document.getElementById("regen").onclick=()=>{
   state.planSeed=(Number(state.planSeed||0)+1)%1000;
   save();
   showToast("Weekly plan regenerated");
   renderWeek();
 };
 document.querySelectorAll(".week-exercise-row[data-ex]").forEach(row=>{
   row.onclick=(e)=>{
     e.preventDefault();
     e.stopPropagation();
     preview(row.dataset.ex);
   };
 });
 bindExerciseImages();
}


function renderLibrary(){
 const categories=["All","Upper Body","Lower Body","Core","Cardio","Full Body","Mobility","Warm-Up"];
 const equipmentFilters=["All Equipment","Adjustable Dumbbells","Barbell","Kettlebell","Resistance Loop Bands","Resistance/Toning Tubes","Exercise Mat","Disc Sliders","Mini Stepper","Skipping Rope","Stationary Bike","Treadmill","Bodyweight / Exercise Mat"];
 const selected=state.libraryCategory||"All", selectedEquipment=state.libraryEquipment||"All Equipment";
 const allItems=[...exercises.filter(x=>x.id!=="bike"),treadmillExercise()];
 const shown=allItems.filter(ex=>{
   const c=selected==="All"|| (selected==="Upper Body"&&ex.area.includes("Upper Body")) || (selected==="Lower Body"&&ex.area.includes("Lower Body")) || (selected==="Core"&&ex.area.includes("Core")) || (selected==="Cardio"&&(ex.area.includes("Cardio")||ex.isFinisher)) || (selected==="Full Body"&&ex.area.includes("Full Body")) || (selected==="Mobility"&&ex.area.includes("Mobility")) || (selected==="Warm-Up"&&ex.area.includes("Warm-Up"));
   return c && (selectedEquipment==="All Equipment"||ex.equipment===selectedEquipment);
 });
 view.innerHTML=`<div class="library-header"><div><div class="eyebrow">Exercise Reference</div><h1>Workout Library</h1><p>Browse by body area or equipment. Tap any exercise for instructions.</p></div></div>
 <div class="library-filter-label">Body Area</div><div class="library-filters">${categories.map(c=>`<button class="library-filter ${c===selected?"active":""}" data-cat="${c}">${c}</button>`).join("")}</div>
 <div class="library-filter-label">Equipment</div><div class="library-filters">${equipmentFilters.map(e=>`<button class="library-filter ${e===selectedEquipment?"active":""}" data-equipment-filter="${e}">${e}</button>`).join("")}</div>
 ${selectedEquipment==="Adjustable Dumbbells"?`<section class="library-summary"><strong>Adjustable Dumbbells</strong><span>${shown.length} exercises</span><p>Lower-body, upper-body and full-body dumbbell movements are included in the automatic workout generator.</p></section>`:selectedEquipment==="Barbell"?`<section class="library-summary"><strong>Barbell Configuration</strong><span>${shown.length} exercises</span><p>Lower-body, upper-body and full-body barbell movements are available in the workout generator.</p></section>`:selectedEquipment==="Kettlebell"?`<section class="library-summary"><strong>Kettlebell Configuration</strong><span>${shown.length} exercises</span><p>Lower-body and full-body/cardio kettlebell movements are included in the automatic workout generator.</p></section>`:""}
 <div class="library-grid">${shown.map(ex=>`<button class="library-card" data-ex="${ex.id}">
   <div class="library-single-image">${exerciseImageMarkup(ex)}</div><div class="library-card-body"><strong>${ex.name}</strong><span>${ex.area}</span><small>${ex.equipment}</small><em>${ex.sets}</em><span class="instruction-available">Tap for instructions</span></div>
 </button>`).join("")}</div>
 <div class="image-credit">Exercise imagery: Free Exercise DB (public domain) and RepDB free exercise dataset where available.</div>`;
 document.querySelectorAll("[data-cat]").forEach(b=>b.onclick=()=>{state.libraryCategory=b.dataset.cat;save();renderLibrary()});
 document.querySelectorAll("[data-equipment-filter]").forEach(b=>b.onclick=()=>{state.libraryEquipment=b.dataset.equipmentFilter;save();renderLibrary()});
 bindExerciseRows();bindExerciseImages();
}


function localDateFromISO(dateStr){
 const [y,m,d]=dateStr.split("-").map(Number);
 return new Date(y,m-1,d,12,0,0,0);
}
function startOfCalendarWeek(date=new Date()){
 const d=new Date(date);
 d.setHours(0,0,0,0);
 d.setDate(d.getDate()-d.getDay());
 return d;
}
function endOfCalendarWeek(date=new Date()){
 const d=startOfCalendarWeek(date);
 d.setDate(d.getDate()+7);
 return d;
}
function historyForWeek(weekStart){
 const end=new Date(weekStart);
 end.setDate(end.getDate()+7);
 return state.history.filter(h=>{
   const d=localDateFromISO(h.date);
   return d>=weekStart && d<end;
 });
}
function uniqueWorkoutDays(entries){
 return new Set(entries.map(h=>h.date)).size;
}
function weekStreak(){
 const now=new Date();
 const currentStart=startOfCalendarWeek(now);
 const currentEntries=historyForWeek(currentStart);

 // If the user has already completed a workout this week, count from this week.
 // Otherwise, the current week is still in progress, so count backward from last week.
 let cursor=new Date(currentStart);
 if(currentEntries.length===0) cursor.setDate(cursor.getDate()-7);

 let streak=0;
 while(true){
   const entries=historyForWeek(cursor);
   if(entries.length===0) break;
   streak++;
   cursor.setDate(cursor.getDate()-7);
 }
 return streak;
}


function bodyMetricRows(){
 return [...(state.bodyMetrics||[])].sort((a,b)=>a.date.localeCompare(b.date));
}
function bodyMetricLatest(){
 const rows=bodyMetricRows();
 return rows.length?rows[rows.length-1]:null;
}
function bodyMetricPrevious(){
 const rows=bodyMetricRows();
 return rows.length>1?rows[rows.length-2]:null;
}
function metricDelta(current,previous,key){
 if(!current||!previous||current[key]==null||previous[key]==null) return null;
 const d=Number(current[key])-Number(previous[key]);
 return Number.isFinite(d)?d:null;
}
function formatMetricDelta(d,unit=""){
 if(d==null) return "—";
 const sign=d>0?"+":"";
 return `${sign}${d.toFixed(1)}${unit?` ${unit}`:""}`;
}
function bodyTrendChart(key,label,unit){
 const rows=bodyMetricRows().filter(r=>r[key]!=null).slice(-12);
 if(rows.length<2) return `<div class="empty">Add at least two ${label.toLowerCase()} entries to see a trend.</div>`;
 const values=rows.map(r=>Number(r[key]));
 const min=Math.min(...values),max=Math.max(...values),span=Math.max(0.1,max-min);
 const W=300,H=120,P=18;
 const points=values.map((v,i)=>{
   const x=P+(i*(W-P*2))/Math.max(1,values.length-1);
   const y=H-P-((v-min)/span)*(H-P*2);
   return `${x.toFixed(1)},${y.toFixed(1)}`;
 }).join(" ");
 return `<div class="body-chart-card">
   <div class="body-chart-head"><strong>${label}</strong><small>${values[values.length-1]} ${unit}</small></div>
   <svg class="body-chart" viewBox="0 0 ${W} ${H}" aria-label="${label} trend" role="img">
     <polyline points="${points}" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></polyline>
     ${values.map((v,i)=>{
       const x=P+(i*(W-P*2))/Math.max(1,values.length-1);
       const y=H-P-((v-min)/span)*(H-P*2);
       return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3.5" fill="currentColor"></circle>`;
     }).join("")}
   </svg>
   <div class="body-chart-dates"><span>${rows[0].date}</span><span>${rows[rows.length-1].date}</span></div>
 </div>`;
}
function saveBodyMetricsEntry(){
 const value=id=>{
   const raw=document.getElementById(id)?.value;
   return raw===""||raw==null?null:Number(raw);
 };
 const entry={
   date:document.getElementById("bodyMetricDate")?.value||isoDate(),
   weight:value("metricWeight"),
   waist:value("metricWaist"),
   hips:value("metricHips"),
   chest:value("metricChest"),
   thigh:value("metricThigh"),
   arm:value("metricArm")
 };
 if(["weight","waist","hips","chest","thigh","arm"].every(k=>entry[k]==null)){
   showToast("Enter at least one value");
   return;
 }
 state.bodyMetrics=state.bodyMetrics||[];
 const idx=state.bodyMetrics.findIndex(r=>r.date===entry.date);
 if(idx>=0) state.bodyMetrics[idx]={...state.bodyMetrics[idx],...entry};
 else state.bodyMetrics.push(entry);
 state.bodyMetrics.sort((a,b)=>a.date.localeCompare(b.date));
 save();
 showToast("Body measurements saved");
 renderBodyTracker();
}

function editBodyMetricsEntry(date){
 const entry=(state.bodyMetrics||[]).find(r=>r.date===date);
 if(!entry){showToast("Measurement entry could not be found");return;}
 const set=(id,value)=>{
   const input=document.getElementById(id);
   if(input) input.value=value==null?"":value;
 };
 set("bodyMetricDate",entry.date);
 set("metricWeight",entry.weight);
 set("metricWaist",entry.waist);
 set("metricHips",entry.hips);
 set("metricChest",entry.chest);
 set("metricThigh",entry.thigh);
 set("metricArm",entry.arm);

 const saveBtn=document.getElementById("saveBodyMetric");
 if(saveBtn) saveBtn.textContent="Update Entry";

 const form=document.querySelector(".body-form-grid");
 if(form) form.closest(".card")?.scrollIntoView({behavior:"smooth",block:"start"});
 showToast(`Editing ${date}`);
}

function deleteBodyMetricsEntry(date){
 if(!confirm(`Delete measurements for ${date}?`)) return;
 state.bodyMetrics=(state.bodyMetrics||[]).filter(r=>r.date!==date);
 save();
 renderBodyTracker();
}
function renderBodyTracker(){
 const latest=bodyMetricLatest();
 const previous=bodyMetricPrevious();
 const mUnit=state.measurementUnit||"in";
 const wUnit=state.bodyMetricUnit||"lb";
 view.innerHTML=`
 <div class="eyebrow">Progress</div>
 <div class="body-title-row"><h1>Body Tracker</h1><small>${(state.bodyMetrics||[]).length} entries</small></div>

 ${latest?`<section class="card">
   <div class="section-title"><h2>Latest</h2><small>${latest.date}</small></div>
   <div class="body-summary-grid">
     <div><b>${latest.weight??"—"}</b><span>Weight (${wUnit})</span><small>${formatMetricDelta(metricDelta(latest,previous,"weight"),wUnit)}</small></div>
     <div><b>${latest.waist??"—"}</b><span>Waist (${mUnit})</span><small>${formatMetricDelta(metricDelta(latest,previous,"waist"),mUnit)}</small></div>
     <div><b>${latest.hips??"—"}</b><span>Hips (${mUnit})</span><small>${formatMetricDelta(metricDelta(latest,previous,"hips"),mUnit)}</small></div>
     <div><b>${latest.chest??"—"}</b><span>Chest (${mUnit})</span><small>${formatMetricDelta(metricDelta(latest,previous,"chest"),mUnit)}</small></div>
     <div><b>${latest.thigh??"—"}</b><span>Thigh (${mUnit})</span><small>${formatMetricDelta(metricDelta(latest,previous,"thigh"),mUnit)}</small></div>
     <div><b>${latest.arm??"—"}</b><span>Upper Arm (${mUnit})</span><small>${formatMetricDelta(metricDelta(latest,previous,"arm"),mUnit)}</small></div>
   </div>
 </section>`:""}

 <section class="card">
   <div class="section-title"><h2>Add / Update Entry</h2><small>${wUnit} / ${mUnit}</small></div>
   <div class="body-form-grid">
     <label>Date<input id="bodyMetricDate" type="date" value="${isoDate()}"></label>
     <label>Weight (${wUnit})<input id="metricWeight" type="number" step="0.1" inputmode="decimal"></label>
     <label>Waist (${mUnit})<input id="metricWaist" type="number" step="0.1" inputmode="decimal"></label>
     <label>Hips (${mUnit})<input id="metricHips" type="number" step="0.1" inputmode="decimal"></label>
     <label>Chest (${mUnit})<input id="metricChest" type="number" step="0.1" inputmode="decimal"></label>
     <label>Thigh (${mUnit})<input id="metricThigh" type="number" step="0.1" inputmode="decimal"></label>
     <label>Upper Arm (${mUnit})<input id="metricArm" type="number" step="0.1" inputmode="decimal"></label>
   </div>
   <button type="button" class="primary" id="saveBodyMetric" style="width:100%;margin-top:10px">Save Entry</button>
 </section>

 <section class="card">
   <div class="section-title"><h2>Trends</h2><small>Last 12 entries</small></div>
   ${bodyTrendChart("weight","Weight",wUnit)}
   ${bodyTrendChart("waist","Waist",mUnit)}
   ${bodyTrendChart("hips","Hips",mUnit)}
 </section>

 <section class="card">
   <div class="section-title"><h2>Measurement History</h2><small>${(state.bodyMetrics||[]).length} entries</small></div>
   ${(state.bodyMetrics||[]).length?`<div class="body-history-list">
     ${bodyMetricRows().reverse().map(r=>`<div class="body-history-row">
       <div>
         <strong>${r.date}</strong>
         <small>
           ${r.weight!=null?`Weight ${r.weight} ${wUnit}`:""}
           ${r.waist!=null?` · Waist ${r.waist} ${mUnit}`:""}
           ${r.hips!=null?` · Hips ${r.hips} ${mUnit}`:""}
           ${r.chest!=null?` · Chest ${r.chest} ${mUnit}`:""}
           ${r.thigh!=null?` · Thigh ${r.thigh} ${mUnit}`:""}
           ${r.arm!=null?` · Arm ${r.arm} ${mUnit}`:""}
         </small>
       </div>
       <div class="body-history-actions">
         <button type="button" class="edit" data-edit-metric="${r.date}">Edit</button>
         <button type="button" data-delete-metric="${r.date}">Delete</button>
       </div>
     </div>`).join("")}
   </div>`:`<div class="empty">Add your first entry to start tracking trends.</div>`}
 </section>`;

 document.getElementById("saveBodyMetric").onclick=saveBodyMetricsEntry;
 document.querySelectorAll("[data-edit-metric]").forEach(btn=>btn.onclick=()=>editBodyMetricsEntry(btn.dataset.editMetric));
 document.querySelectorAll("[data-delete-metric]").forEach(btn=>btn.onclick=()=>deleteBodyMetricsEntry(btn.dataset.deleteMetric));
}

function renderHistory(){
 const weekStart=startOfCalendarWeek(new Date());
 const thisWeek=historyForWeek(weekStart);
 const completedDays=uniqueWorkoutDays(thisWeek);
 const requiredDays=Math.max(1,7-state.restDays.length);
 const streak=weekStreak();
 const totalMin=thisWeek.reduce((s,h)=>s+(h.minutes||0),0);
 const totalRest=thisWeek.reduce((s,h)=>s+(h.restSeconds||0),0);

 view.innerHTML=`
 <div class="eyebrow">Progress</div>
 <div class="history-title-row"><h1>History</h1><button class="secondary compact" id="markPastWorkout">+ Past Workout</button></div>

 <section class="card history-summary-card">
   <div class="history-summary-grid">
     <div class="history-summary-stat">
       <span class="summary-icon">🔥</span>
       <div><b>${streak}</b><small>Week Streak</small></div>
     </div>
     <div class="history-summary-stat">
       <span class="summary-icon">✓</span>
       <div><b>${completedDays}/${requiredDays}</b><small>Workout Days</small></div>
     </div>
   </div>
   <p class="streak-note">${streak===0?"Complete at least one workout this week to start your streak.":`You have completed at least one workout for ${streak} consecutive week${streak===1?"":"s"}.`}</p>
 </section>

 <section class="card">
   <div class="section-title">
     <h2>This Week</h2>
     <small>${completedDays}/${requiredDays} workout days</small>
   </div>
   <div class="progress-row">
     ${DAYS.map((d,i)=>{
       const date=dateForWeekday(i);
       const done=thisWeek.some(h=>h.date===date);
       const rest=isRest(i);
       return `<div class="history-day">
         <div class="dot ${done?"done":rest?"rest":""}">${done?"✓":rest?"☾":d[0]}</div>
         <small>${d}</small>
       </div>`;
     }).join("")}
   </div>
 </section>

 <section class="card">
   <div class="metrics">
     <div class="metric"><b>${completedDays}</b><span>Workout Days</span></div>
     <div class="metric"><b>${totalMin}</b><span>Workout Min</span></div>
     <div class="metric"><b>${formatShort(totalRest)}</b><span>Rest Time</span></div>
   </div>
 </section>
 <section class="card">
   <div class="section-title"><h2>Training Records</h2><small>Current tracked loads</small></div>
   ${bestLoads().length?`<div class="record-list">${bestLoads().map(r=>`<div><span>${r.name}</span><b>${r.load} ${r.unit}</b></div>`).join("")}</div>`:`<div class="empty">Enter weights during workouts to start building your training records.</div>`}
 </section>


 <section class="card">
   <div class="section-title"><h2>${new Date().toLocaleDateString(undefined,{month:"long",year:"numeric"})}</h2><small>Monthly activity</small></div>
   ${calendarMonthMarkup(new Date().getFullYear(),new Date().getMonth())}
 </section>

 <section class="card">
   <div class="section-title"><h2>Recent Workouts</h2><small>${state.history.length} saved</small></div>
   ${state.history.length?
     state.history.slice().reverse().map(h=>`
       <div class="history-row">
         <div class="history-check">✓</div>
         <div>
           <h3>${h.focus}</h3>
           <p>${new Date(h.date+"T12:00").toLocaleDateString(undefined,{month:"short",day:"numeric"})} · ${h.minutes} min · ${h.exercises} exercises</p>
           <p>Sets: ${h.setsCompleted??0}/${h.setsPlanned??0} completed · Rest: ${formatShort(h.restSeconds||0)} across ${h.restSessions||0} rest periods · Treadmill: ${h.treadmillMinutes||0} min</p>
         </div>
       </div>`).join(""):
     `<div class="empty">Complete a workout and it will appear here.</div>`}
 </section>`;
 const pastBtn=document.getElementById("markPastWorkout");
 if(pastBtn) pastBtn.onclick=openPastCompletionPicker;
 document.querySelectorAll("[data-history-date]").forEach(btn=>btn.onclick=()=>{
   const date=btn.dataset.historyDate;
   const d=localDateFromISO(date);
   if(d>new Date()) return;
   if((state.history||[]).some(h=>h.date===date)){showToast("Workout already completed");return;}
   if(isRest(d.getDay())){showToast("Rest day");return;}
   if(confirm(`Mark ${d.toLocaleDateString(undefined,{weekday:"long",month:"short",day:"numeric"})} as completed?`)) markPastWorkoutCompleted(date);
 });
}

function renderSettings(){
 const equipment=defaults.equipment;
 view.innerHTML=`<div class="eyebrow">Preferences</div><h1>Settings</h1>
 <section class="card"><div class="section-title"><h2>Appearance</h2></div>
 <div class="setting-row"><div><label>Theme</label><small>Dark, light, or system</small></div><select id="themeSel"><option value="dark">Dark</option><option value="light">Light</option><option value="system">System</option></select></div></section>
 <section class="card"><div class="section-title"><h2>Workout Preferences</h2></div>
 <div class="setting-row"><div><label>Workout days per week</label><small>Minimum 4</small></div><input id="days" type="number" min="4" max="7" value="${state.workoutDays}"></div>
 <div class="setting-row"><div><label>Default workout duration</label><small>20–90 minutes in 5-minute steps</small></div><input id="durationSetting" type="number" min="20" max="90" step="5" value="${state.duration}"></div>
 <div class="setting-row"><div><label>Treadmill finisher</label><small>Included in total workout time</small></div><strong>${treadmillMinutes()} min</strong></div>
 <div class="setting-row"><div><label>Difficulty</label><small>Controls pacing guidance</small></div><select id="difficulty">${["Beginner","Moderate","Advanced"].map(x=>`<option ${x===state.difficulty?"selected":""}>${x}</option>`).join("")}</select></div>
 <div class="setting-row"><div><label>Default rest between sets</label><small>Actual rest time is recorded during workouts</small></div><select id="restSec">${[30,45,60,90].map(n=>`<option value="${n}" ${n===state.restSeconds?"selected":""}>${n} sec</option>`).join("")}</select></div></section>
 <section class="card"><div class="section-title"><h2>Choose Rest Days</h2><small>${state.restDays.length} selected</small></div><div class="rest-days">${DAYS.map((d,i)=>`<button class="rest-day ${isRest(i)?"selected":""}" data-rest="${i}">${d}</button>`).join("")}</div><p style="font-size:11px;color:var(--muted);margin:12px 0 0">The app will keep at least 4 workout days per week.</p></section>
 <section class="card"><div class="section-title"><h2>Body Tracker Units</h2></div>
 <div class="setting-row"><div><label>Weight unit</label><small>Used in Body Tracker</small></div><select id="bodyWeightUnit"><option value="lb" ${state.bodyMetricUnit==="lb"?"selected":""}>lb</option><option value="kg" ${state.bodyMetricUnit==="kg"?"selected":""}>kg</option></select></div>
 <div class="setting-row"><div><label>Measurement unit</label><small>Used for waist, hips, chest, thigh and arm</small></div><select id="bodyMeasurementUnit"><option value="in" ${state.measurementUnit==="in"?"selected":""}>inches</option><option value="cm" ${state.measurementUnit==="cm"?"selected":""}>cm</option></select></div>
 </section>
 <section class="card"><div class="section-title"><h2>Your Equipment</h2></div><div class="equipment-grid">${equipment.map(e=>`<label class="equip"><input type="checkbox" data-equip="${e}" ${state.equipment.includes(e)?"checked":""}>${e}</label>`).join("")}</div></section>
 <section class="card"><div class="section-title"><h2>Exercise Media Credits</h2></div>
 <p style="font-size:12px;color:var(--muted);line-height:1.5;margin:0">Missing exercise illustrations are matched against RepDB's free exercise dataset when an exact user-selected image is not available. <a href="https://repdb.co" target="_blank" rel="noopener noreferrer">Exercise data by RepDB (repdb.co)</a>.</p>
 </section>
 <section class="card"><div class="section-title"><h2>Data & Backup</h2><small>v67</small></div>
 <button class="secondary" id="backup" style="width:100%">Export Full Backup</button><div style="height:8px"></div>
 <label class="secondary import-label" style="width:100%;box-sizing:border-box;text-align:center">Import Backup<input id="importBackup" type="file" accept="application/json" hidden></label><div style="height:8px"></div>
 <button class="secondary" id="exportCsv" style="width:100%">Export History CSV</button><div style="height:8px"></div>
 <button class="secondary" id="export" style="width:100%">Export History JSON</button><div style="height:8px"></div>
 <button class="secondary" id="reset" style="width:100%;color:var(--danger)">Reset App Data</button>
 </section>`;
 const themeSel=document.getElementById("themeSel");themeSel.value=state.theme;themeSel.onchange=e=>{state.theme=e.target.value;save();themeApply()};
 document.getElementById("days").onchange=e=>{state.workoutDays=Math.max(4,Math.min(7,Number(e.target.value)||4)); if(7-state.restDays.length<state.workoutDays) state.restDays=state.restDays.slice(0,7-state.workoutDays); save();renderSettings()};
 document.getElementById("durationSetting").onchange=e=>{state.duration=Math.max(20,Math.min(90,Math.round((Number(e.target.value)||45)/5)*5));save();showToast(`Workout duration: ${state.duration} min`);renderSettings()};
 document.getElementById("difficulty").onchange=e=>{state.difficulty=e.target.value;save()};
 document.getElementById("restSec").onchange=e=>{state.restSeconds=Number(e.target.value);save()};
 const bodyWeightUnit=document.getElementById("bodyWeightUnit");
 if(bodyWeightUnit) bodyWeightUnit.onchange=e=>{state.bodyMetricUnit=e.target.value;save()};
 const bodyMeasurementUnit=document.getElementById("bodyMeasurementUnit");
 if(bodyMeasurementUnit) bodyMeasurementUnit.onchange=e=>{state.measurementUnit=e.target.value;save()};
 document.querySelectorAll("[data-rest]").forEach(b=>b.onclick=()=>{const day=Number(b.dataset.rest);const chosen=isRest(day);if(chosen){state.restDays=state.restDays.filter(x=>x!==day)}else{if(7-(state.restDays.length+1)<4){showToast("At least 4 workout days are required");return}state.restDays.push(day)}state.workoutDays=Math.max(4,7-state.restDays.length);save();renderSettings()});
 document.querySelectorAll("[data-equip]").forEach(c=>c.onchange=()=>{state.equipment=[...document.querySelectorAll("[data-equip]:checked")].map(x=>x.dataset.equip);save()});
 document.getElementById("backup").onclick=exportFullBackup;
 document.getElementById("exportCsv").onclick=exportHistoryCSV;
 document.getElementById("importBackup").onchange=e=>{
   const file=e.target.files?.[0]; if(!file)return;
   const reader=new FileReader();
   reader.onload=()=>{
     try{
       const parsed=JSON.parse(reader.result);
       const incoming=parsed.state||parsed;
       if(!incoming || typeof incoming!=="object") throw new Error("Invalid backup");
       if(confirm("Import this backup and replace current app data?")){
         state=Object.assign({},defaults,incoming);save();location.reload();
       }
     }catch(err){showToast("Backup file could not be imported");}
   };
   reader.readAsText(file);
 };
 document.getElementById("reset").onclick=()=>{if(confirm("Reset all Home Workout data?")){localStorage.removeItem("homefit-state");location.reload()}};
 document.getElementById("export").onclick=()=>{const blob=new Blob([JSON.stringify(state.history,null,2)],{type:"application/json"});const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="homefit-history.json";a.click();URL.revokeObjectURL(a.href)};
}


function hasActiveWorkoutToday(){
 return !!(state.activeWorkout && state.activeWorkout.date===isoDate());
}
function clearActiveWorkout(){
 state.activeWorkout=null;
 save();
}
function saveActiveWorkoutSession(session){
 state.activeWorkout={
   date:isoDate(),
   plan:session.plan,
   idx:session.idx,
   elapsed:session.elapsed,
   phase:session.phase,
   restRemaining:session.restRemaining,
   running:false,
   totalRest:session.totalRest,
   restSessions:session.restSessions
 };
 save();
}
function resumeActiveWorkout(){
 if(!hasActiveWorkoutToday()){
   showToast("No paused workout to resume");
   return;
 }
 startWorkout(state.activeWorkout.plan,state.activeWorkout);
}


function isStrengthExercise(ex){
 const a=(ex.area||"").toLowerCase(), e=(ex.equipment||"").toLowerCase();
 if(ex.isFinisher || a.includes("cardio") || a.includes("mobility")) return false;
 return !["treadmill","stationary bike","skipping rope","mini stepper"].includes(e);
}
function repRangeFor(ex){
 const s=String(ex.sets||"");
 const range=s.match(/(\d+)\s*[–-]\s*(\d+)/);
 if(range) return {min:Number(range[1]),max:Number(range[2])};
 const one=s.match(/(?:×|x)\s*(\d+)\s*(?:reps?)?/i) || s.match(/(\d+)\s*reps?/i);
 return one?{min:Number(one[1]),max:Number(one[1])}:null;
}
function performanceKey(ex,date=isoDate()){return `${date}::${ex.id}`}
function performanceFor(ex,date=isoDate()){
 state.exercisePerformance=state.exercisePerformance||{};
 return state.exercisePerformance[performanceKey(ex,date)]||{};
}
function profileFor(ex){
 state.exerciseProfiles=state.exerciseProfiles||{};
 return state.exerciseProfiles[ex.id]||{};
}
function defaultLoadUnit(ex){
 const e=(ex.equipment||"").toLowerCase();
 if(e.includes("band")) return "level";
 if(e.includes("dumbbell")||e.includes("barbell")||e.includes("kettlebell")) return "lb";
 return "";
}
function loadControlMarkup(ex,date=isoDate()){
 if(!isStrengthExercise(ex)) return "";
 const perf=performanceFor(ex,date), profile=profileFor(ex), unit=profile.unit||defaultLoadUnit(ex);
 const previous=profile.load??"";
 if(unit==="level"){
   return `<div class="load-entry">
     <label>Resistance</label>
     <select data-load-ex="${ex.id}" data-load-unit="level">
       ${["","Light","Medium","Heavy","Extra Heavy"].map(v=>`<option value="${v}" ${String(previous)===v?"selected":""}>${v||"Select"}</option>`).join("")}
     </select>
   </div>`;
 }
 return `<div class="load-entry">
   <label>Weight</label>
   <div class="load-input-wrap"><input type="number" min="0" step="0.5" inputmode="decimal" data-load-ex="${ex.id}" data-load-unit="lb" value="${previous}"><span>lb</span></div>
 </div>`;
}
function repsEntryMarkup(ex,date=isoDate()){
 const range=repRangeFor(ex);
 if(!isStrengthExercise(ex)||!range) return "";
 const count=parseSetPlan(ex).count, perf=performanceFor(ex,date), reps=perf.reps||[];
 return `<div class="actual-reps">
   <div class="actual-reps-title"><span>Actual reps</span><small>Target ${range.min}${range.max!==range.min?`–${range.max}`:""}</small></div>
   <div class="actual-reps-grid">
     ${Array.from({length:count},(_,i)=>`<label>Set ${i+1}<input type="number" min="0" max="100" inputmode="numeric" data-reps-ex="${ex.id}" data-reps-set="${i}" value="${reps[i]??""}" placeholder="${range.max}"></label>`).join("")}
   </div>
 </div>`;
}
function bindPerformanceInputs(){
 document.querySelectorAll("[data-load-ex]").forEach(input=>{
   const saveLoad=()=>{
     const ex=getExercise(input.dataset.loadEx); if(!ex) return;
     state.exerciseProfiles=state.exerciseProfiles||{};
     const unit=input.dataset.loadUnit||"lb";
     const value=unit==="lb"?(input.value===""?null:Number(input.value)):input.value;
     state.exerciseProfiles[ex.id]={...(state.exerciseProfiles[ex.id]||{}),load:value,unit};
     const key=performanceKey(ex);
     state.exercisePerformance[key]={...(state.exercisePerformance[key]||{}),load:value,unit};
     save();
   };
   input.oninput=saveLoad;
   input.onchange=saveLoad;
 });
 document.querySelectorAll("[data-reps-ex]").forEach(input=>{
   const saveReps=()=>{
     const ex=getExercise(input.dataset.repsEx); if(!ex) return;
     const key=performanceKey(ex), current=state.exercisePerformance[key]||{}, reps=[...(current.reps||[])];
     reps[Number(input.dataset.repsSet)]=input.value===""?null:Number(input.value);
     state.exercisePerformance[key]={...current,reps};
     save();
   };
   input.oninput=saveReps;
   input.onchange=saveReps;
 });
}
function evaluateProgressionForWorkout(plan,date=isoDate()){
 state.exerciseProfiles=state.exerciseProfiles||{};
 const suggestions=[];
 plan.filter(isStrengthExercise).forEach(ex=>{
   const range=repRangeFor(ex); if(!range) return;
   const count=parseSetPlan(ex).count;
   const perf=performanceFor(ex,date);
   const reps=(perf.reps||[]).slice(0,count);
   const allSetsDone=Array.from({length:count},(_,i)=>setDone(ex,i,date)).every(Boolean);
   const reachedTop=allSetsDone && reps.length===count && reps.every(r=>Number(r)>=range.max);
   const belowMin=allSetsDone && reps.length===count && reps.some(r=>Number(r)<range.min);
   const profile={...(state.exerciseProfiles[ex.id]||{})};
   profile.qualifyingSessions=Number(profile.qualifyingSessions||0);
   profile.struggleSessions=Number(profile.struggleSessions||0);

   if(reachedTop){
     profile.qualifyingSessions+=1;
     profile.struggleSessions=0;
   }else if(belowMin){
     profile.struggleSessions+=1;
     profile.qualifyingSessions=0;
   }else if(allSetsDone){
     profile.struggleSessions=0;
   }

   if(profile.qualifyingSessions>=2){
     suggestions.push({id:ex.id,name:ex.name,type:"increase",load:profile.load,unit:profile.unit||defaultLoadUnit(ex)});
     profile.qualifyingSessions=0;
   }else if(profile.struggleSessions>=3){
     suggestions.push({id:ex.id,name:ex.name,type:"review",load:profile.load,unit:profile.unit||defaultLoadUnit(ex)});
     profile.struggleSessions=0;
   }
   state.exerciseProfiles[ex.id]=profile;
 });
 save();
 return suggestions;
}
function progressionSuggestionMarkup(suggestions){
 if(!suggestions.length) return "";
 return `<div class="progression-suggestions">
   <h3>Progression Suggestions</h3>
   ${suggestions.map(s=>s.type==="increase"
     ?`<div class="progression-item"><strong>${s.name}</strong><p>You reached the top of the rep range in 2 qualifying sessions. Next time, consider increasing by your smallest available weight/resistance increment and return toward the lower end of the rep range.</p></div>`
     :`<div class="progression-item"><strong>${s.name}</strong><p>This exercise has been below the minimum rep target across 3 completed sessions. Keep the load the same or reduce it slightly until the target range feels controlled again.</p></div>`
   ).join("")}
 </div>`;
}
function bestLoads(){
 const rows=[];
 Object.entries(state.exerciseProfiles||{}).forEach(([id,p])=>{
   if(typeof p.load==="number" && p.load>0){
     const ex=getExercise(id); if(ex) rows.push({name:ex.name,load:p.load,unit:p.unit||"lb"});
   }
 });
 return rows.sort((a,b)=>b.load-a.load).slice(0,5);
}
function saveWorkoutRating(date,rating,treadmillRating){
 state.workoutRatings=state.workoutRatings||{};
 state.workoutRatings[date]={rating,treadmillRating};
 const record=[...state.history].reverse().find(h=>h.date===date);
 if(record){record.rating=rating;record.treadmillRating=treadmillRating;save();}
}
function showWorkoutSummary(record,suggestions=[]){
 modal.innerHTML=`<div class="modal-card workout-summary-modal">
   <div class="modal-head"><div><div class="eyebrow">Workout Complete</div><h2>${record.focus}</h2></div><button class="close">×</button></div>
   <div class="summary-grid">
     <div><b>${record.minutes}</b><span>Minutes</span></div>
     <div><b>${record.exercises}</b><span>Exercises</span></div>
     <div><b>${record.setsCompleted}/${record.setsPlanned}</b><span>Sets</span></div>
     <div><b>${record.treadmillMinutes||0}</b><span>Treadmill</span></div>
     <div><b>${formatShort(record.restSeconds||0)}</b><span>Rest</span></div>
   </div>
   ${progressionSuggestionMarkup(suggestions)}
   <div class="rating-block"><h3>How did the workout feel?</h3>
     <div class="rating-buttons">${["Easy","Good","Hard","Too Hard"].map(x=>`<button type="button" data-workout-rating="${x}">${x}</button>`).join("")}</div>
   </div>
   ${(record.treadmillMinutes||0)>0?`<div class="rating-block"><h3>Treadmill finisher</h3>
     <div class="rating-buttons">${["Too Easy","Good","Too Hard"].map(x=>`<button type="button" data-treadmill-rating="${x}">${x}</button>`).join("")}</div>
   </div>`:""}
   <button class="primary" id="summaryDone">Done</button>
 </div>`;
 modal.classList.remove("hidden");
 let workoutRating="", treadmillRating="";
 document.querySelectorAll("[data-workout-rating]").forEach(b=>b.onclick=()=>{workoutRating=b.dataset.workoutRating;document.querySelectorAll("[data-workout-rating]").forEach(x=>x.classList.toggle("selected",x===b));});
 document.querySelectorAll("[data-treadmill-rating]").forEach(b=>b.onclick=()=>{treadmillRating=b.dataset.treadmillRating;document.querySelectorAll("[data-treadmill-rating]").forEach(x=>x.classList.toggle("selected",x===b));});
 const finish=()=>{saveWorkoutRating(record.date,workoutRating,treadmillRating);closeModal();route("history");};
 modal.querySelector(".close").onclick=finish;
 modal.querySelector("#summaryDone").onclick=finish;
}
function exportFullBackup(){
 const blob=new Blob([JSON.stringify({version:"v50",exportedAt:new Date().toISOString(),state},null,2)],{type:"application/json"});
 const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=`home-workout-backup-${isoDate()}.json`;a.click();URL.revokeObjectURL(a.href);
}
function exportHistoryCSV(){
 const rows=[["Date","Focus","Minutes","Exercises","Sets Completed","Sets Planned","Rest Seconds","Treadmill Minutes","Rating"]];
 state.history.forEach(h=>rows.push([h.date,h.focus,h.minutes,h.exercises,h.setsCompleted??"",h.setsPlanned??"",h.restSeconds??0,h.treadmillMinutes??0,h.rating??""]));
 const csv=rows.map(r=>r.map(v=>`"${String(v).replace(/"/g,'""')}"`).join(",")).join("\n");
 const blob=new Blob([csv],{type:"text/csv"}),a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=`home-workout-history-${isoDate()}.csv`;a.click();URL.revokeObjectURL(a.href);
}

function startWorkout(plan,resumeState=null){
 let idx=resumeState?.idx??0;
 let elapsed=resumeState?.elapsed??0;
 let phase=resumeState?.phase??"work";
 let restRemaining=resumeState?.restRemaining??state.restSeconds;
 let running=resumeState?.running!==false;
 let tick;
 let workStartedAt=resumeState?.workStartedAt??(running && phase==="work"?Date.now():null);
 let restStart=resumeState?.restStart??(running && phase==="rest"?Date.now():null);
 let totalRest=resumeState?.totalRest??0;
 let restSessions=resumeState?.restSessions??0;
 let closed=false;

 const effectiveElapsed=()=>{
   if(running && phase==="work" && workStartedAt!==null){
     return elapsed+Math.max(0,Math.floor((Date.now()-workStartedAt)/1000));
   }
   return elapsed;
 };
 const effectiveRestRemaining=()=>{
   if(running && phase==="rest" && restStart!==null){
     return Math.max(0,restRemaining-Math.max(0,Math.floor((Date.now()-restStart)/1000)));
   }
   return Math.max(0,restRemaining);
 };
 const effectiveTotalRest=()=>{
   if(running && phase==="rest" && restStart!==null){
     const spent=Math.max(0,Math.floor((Date.now()-restStart)/1000));
     return totalRest+Math.min(restRemaining,spent);
   }
   return totalRest;
 };

 const session=()=>({
   plan,idx,elapsed,phase,restRemaining,totalRest,restSessions,running,
   workStartedAt,restStart,savedAt:Date.now()
 });

 function saveRunningSnapshot(){
   saveActiveWorkoutSession(session());
 }

 function commitWorkTime(){
   if(workStartedAt!==null){
     elapsed=effectiveElapsed();
     workStartedAt=null;
   }
 }

 function commitRestTime(){
   if(restStart!==null){
     const spent=Math.max(0,Math.floor((Date.now()-restStart)/1000));
     const counted=Math.min(restRemaining,spent);
     totalRest+=counted;
     restRemaining=Math.max(0,restRemaining-spent);
     restStart=null;
   }
 }

 function persistPaused(){
   if(phase==="work") commitWorkTime();
   else commitRestTime();
   running=false;
   saveActiveWorkoutSession(session());
 }

 function syncBackgroundTime(){
   if(!running || phase!=="rest" || restStart===null) return;
   const endAt=restStart+(restRemaining*1000);
   if(Date.now()>=endAt){
     // Rest completed even if JavaScript was suspended while the screen/app was inactive.
     totalRest+=restRemaining;
     restRemaining=state.restSeconds;
     restStart=null;
     phase="work";
     // Work begins at the actual instant the rest countdown ended, not when the app wakes up.
     workStartedAt=endAt;
   }
 }

 function enterRest(){
   if(phase==="work") commitWorkTime();
   phase="rest";
   restRemaining=state.restSeconds;
   restStart=running?Date.now():null;
   workStartedAt=null;
   restSessions++;
   saveRunningSnapshot();
 }

 function leaveRest(){
   if(phase==="rest") commitRestTime();
   phase="work";
   restRemaining=state.restSeconds;
   workStartedAt=running?Date.now():null;
   saveRunningSnapshot();
 }

 function updateTimerDisplay(){
   syncBackgroundTime();
   const currentElapsed=effectiveElapsed();
   const currentRestRemaining=effectiveRestRemaining();
   const currentTotalRest=effectiveTotalRest();
   const ring=modal.querySelector(".timer-ring");
   const center=modal.querySelector(".timer-center");
   const restSummary=modal.querySelector(".rest-summary");
   if(ring){
     const pct=phase==="rest"
       ?Math.max(0,100-(currentRestRemaining/state.restSeconds*100))
       :Math.min(100,(currentElapsed/60)*100);
     ring.style.setProperty("--p",pct);
   }
   if(center){
     const spans=center.querySelectorAll("span");
     if(spans[0]) spans[0].textContent=phase==="rest"?"REST":"MOVE";
     const timer=center.querySelector("b");
     if(timer) timer.textContent=phase==="rest"?format(currentRestRemaining):format(currentElapsed);
   }
   if(restSummary){
     const total=restSummary.querySelector("strong");
     if(total) total.textContent=formatShort(currentTotalRest);
     const spans=restSummary.querySelectorAll("span");
     if(spans[1]) spans[1].textContent=`${restSessions} period${restSessions===1?"":"s"}`;
   }
 }

 function cleanupLifecycleListeners(){
   if(closed) return;
   closed=true;
   document.removeEventListener("visibilitychange",onVisibilityChange);
   window.removeEventListener("pagehide",onPageHide);
 }

 function onVisibilityChange(){
   if(document.visibilityState==="hidden"){
     // Keep the running timestamps intact; only save them.
     saveRunningSnapshot();
   }else{
     syncBackgroundTime();
     saveRunningSnapshot();
     updateTimerDisplay();
   }
 }

 function onPageHide(){
   // iOS may suspend the page immediately after this event.
   // Persist the wall-clock anchors so elapsed time can be reconstructed on return/relaunch.
   saveRunningSnapshot();
 }

 document.addEventListener("visibilitychange",onVisibilityChange);
 window.addEventListener("pagehide",onPageHide);

 function draw(){
   syncBackgroundTime();
   const ex=plan[idx];
   if(!ex){
     clearInterval(tick);
     cleanupLifecycleListeners();
     clearActiveWorkout();
     closeModal();
     return;
   }
   const currentElapsed=effectiveElapsed();
   const currentRestRemaining=effectiveRestRemaining();
   const currentTotalRest=effectiveTotalRest();

   modal.innerHTML=`<div class="modal-card">
     <div class="modal-head">
       <div><div class="eyebrow">Workout in Progress</div><h2>${ex.name}</h2></div>
       <button class="close" aria-label="Pause and close workout">×</button>
     </div>

     <div class="resume-note">The timer keeps running if your screen turns off or you switch apps. Closing this workout window manually pauses and saves it.</div>

     <div class="modal-set-tracker">
       <div class="set-tracker-title">SETS / REPS</div>
       ${loadControlMarkup(ex,isoDate())}
       ${setTracker(ex,isoDate())}
       ${repsEntryMarkup(ex,isoDate())}
     </div>

     <div class="timer-ring" style="--p:${phase==="rest"?Math.max(0,100-(currentRestRemaining/state.restSeconds*100)):Math.min(100,(currentElapsed/60)*100)}">
       <div class="timer-center">
         <span>${phase==="rest"?"REST":"MOVE"}</span>
         <b>${phase==="rest"?format(currentRestRemaining):format(currentElapsed)}</b>
         <span>${ex.sets}</span>
       </div>
     </div>

     <div class="rest-summary">
       <span>Recorded rest</span>
       <strong>${formatShort(currentTotalRest)}</strong>
       <span>${restSessions} period${restSessions===1?"":"s"}</span>
     </div>

     <div class="timer-controls">
       <button id="prev">◀ Prev</button>
       <button id="pause">${running?"Pause":"Resume"}</button>
       <button id="next">${idx===plan.length-1?"Finish":"Next ▶"}</button>
     </div>

     <div style="height:12px"></div>
     <button class="secondary" id="restBtn" style="width:100%">${phase==="rest"?"End Rest":"Start Rest ("+state.restSeconds+"s)"}</button>
     <p style="text-align:center;color:var(--muted);font-size:11px;margin:12px 0 0">
       Exercise ${idx+1} of ${plan.length}${ex.isFinisher?" · Treadmill finisher":""}
     </p>
   </div>`;

   modal.querySelector(".close").onclick=()=>{
     clearInterval(tick);
     persistPaused();
     cleanupLifecycleListeners();
     closeModal();
     renderToday();
     showToast("Workout paused and saved");
   };

   modal.querySelector("#pause").onclick=()=>{
     if(running){
       if(phase==="work") commitWorkTime();
       else commitRestTime();
       running=false;
     }else{
       running=true;
       if(phase==="work") workStartedAt=Date.now();
       else restStart=Date.now();
     }
     saveRunningSnapshot();
     draw();
   };

   modal.querySelector("#prev").onclick=()=>{
     if(phase==="rest") leaveRest();
     else commitWorkTime();
     idx=Math.max(0,idx-1);
     elapsed=0;
     workStartedAt=running?Date.now():null;
     saveRunningSnapshot();
     draw();
   };

   modal.querySelector("#next").onclick=()=>next();

   modal.querySelector("#restBtn").onclick=()=>{
     phase==="rest"?leaveRest():enterRest();
     draw();
   };

   bindSetTrackers();bindPerformanceInputs();
 }

 function next(){
   syncBackgroundTime();
   if(phase==="rest") leaveRest();
   else commitWorkTime();

   if(idx<plan.length-1){
     idx++;
     elapsed=0;
     phase="work";
     restRemaining=state.restSeconds;
     workStartedAt=running?Date.now():null;
     saveRunningSnapshot();
     draw();
   }else{
     clearInterval(tick);
     totalRest=effectiveTotalRest();
     cleanupLifecycleListeners();
     clearActiveWorkout();
     completeWorkout(plan,totalRest,restSessions);
   }
 }

 // Save timestamps immediately so background suspension/reloads can reconstruct elapsed time.
 saveRunningSnapshot();

 tick=setInterval(()=>{
   if(!running) return;
   syncBackgroundTime();
   saveRunningSnapshot();
   // The display is derived from Date.now(), so missing interval callbacks while backgrounded
   // do not lose elapsed time.
   updateTimerDisplay();
 },1000);

 modal.classList.remove("hidden");
 draw();
}
function format(sec){const m=Math.floor(sec/60),s=sec%60;return `${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`}
function formatShort(sec){const m=Math.floor(sec/60),s=sec%60;return m?`${m}m ${s}s`:`${s}s`}
function completeWorkout(plan,totalRest,restSessions){
 clearActiveWorkout();
 if(workoutCompletedOn()){closeModal();showToast("Today's workout is already marked complete");route("history");return;}
 const day=new Date().getDay(), treadmill=plan.find(x=>x.isFinisher);
 const record={
   date:isoDate(),focus:workoutType(day),minutes:state.duration,exercises:plan.length,
   restSeconds:totalRest+totalLoggedRest(),restSessions:restSessions+restEntries().length,treadmillMinutes:treadmill?.minutes||0,
   setsCompleted:plan.reduce((sum,ex)=>sum+Object.values((state.setProgress||{})[progressKey(ex,isoDate())]||{}).filter(Boolean).length,0),
   setsPlanned:plan.reduce((sum,ex)=>sum+parseSetPlan(ex).count,0)
 };
 state.history.push(record);
 const suggestions=evaluateProgressionForWorkout(plan,record.date);
 save();
 showWorkoutSummary(record,suggestions);
}

if("serviceWorker" in navigator){window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}))}
document.addEventListener("click",(e)=>{
 const recovery=e.target.closest("[data-recovery-ex]");
 if(recovery){
   e.preventDefault();
   e.stopPropagation();
   preview(recovery.dataset.recoveryEx);
 }
});
route("today");
loadRepdbIndex();
