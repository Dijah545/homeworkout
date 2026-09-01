# HomeFit Pro — Updated Version

This version includes:

- Adjustable workout duration from **20 to 90 minutes**, in 5-minute steps.
- The workout plan automatically **adds or removes strength exercises** when the duration changes.
- A **treadmill finisher is automatically placed last on every workout day**:
  - 10 minutes for workouts under 45 minutes.
  - 15 minutes for workouts of 45 minutes or longer.
  - The treadmill session is included inside the selected total workout duration.
- A live **rest-between-sets timer** with configurable 30, 45, 60, or 90 second default rest.
- Actual rest time is recorded, including the number of rest periods.
- Workout History displays workout minutes, treadmill minutes, total rest time, and rest-period count.
- Exercise preview images have been resized/padded and now use `object-fit: contain` so the full exercise image stays centered inside each box.
- Dark/light/system theme, selectable rest days, minimum four workout days, offline mode, local history storage, and GitHub Pages/PWA support remain included.

## GitHub Pages
Upload all files in this ZIP to the root of your GitHub repository. If replacing the previous version, overwrite the existing files. The service-worker cache version has been changed so the updated app will replace the older cached version.


## v3 Image Update
Exercise previews were replaced with more realistic human exercise examples, standardized to consistent aspect ratios, and the app image containers were adjusted to prevent stretching or misalignment. The offline cache is now v3.

## v4 Workout Library
- Exercise thumbnails were removed from the Today and Week workout lists to make the schedule cleaner.
- A dedicated **Library** tab was added to the bottom navigation.
- The library uses consistent 4:3 image cards so examples are correctly sized and aligned.
- Exercises can be filtered by Upper Body, Lower Body, Core, Cardio, and Full Body.
- Tapping any library exercise opens a larger image with its equipment, sets/reps, step-by-step instructions, and form reminders.
- Workout entries remain tappable and open the same guide.


## v5 Adjustable Dumbbell Expansion
Added 40 adjustable-dumbbell exercises: 15 lower-body, 17 upper-body and 8 full-body movements. The Workout Library now supports body-area and equipment filters. The automatic workout generator rotates through the larger dumbbell library to reduce repetition.


## v6 Barbell Configuration Expansion
Added 20 barbell exercises:
- 10 Lower Body
- 6 Upper Body
- 4 Full Body

The Workout Library now includes a **Barbell** equipment filter, and barbell movements are incorporated into the automatic workout generator alongside adjustable-dumbbell and other equipment-based exercises.


## v7 Kettlebell Configuration
Added 16 kettlebell exercises:
- 7 Lower Body
- 9 Full Body / Cardio

The Workout Library now includes a Kettlebell equipment filter. Kettlebell exercises are also a distinct rotation family in the daily workout generator alongside adjustable dumbbells, barbell exercises, and the rest of the user's available equipment.


## v8 Expanded Equipment Library
Added:
- 21 Resistance Loop Band exercises
- 24 Resistance/Toning Tube exercises
- 18 Disc Slider exercises
- 10 skipping-rope movements plus 5 skipping interval formats
- 11 treadmill walking/running formats

The workout generator now rotates across all major equipment families so the much larger exercise library remains varied. The treadmill remains the mandatory 10/15-minute end-of-workout finisher on workout days.


## v9 Mini Stepper Expansion
Added 14 Mini Stepper exercises:
- 6 cardio/lower-body stepping variations
- 8 stepper + resistance-band upper-body combinations

Mini Stepper is now an explicit equipment family in the workout rotation so it receives balanced representation in generated workouts.


## v10 Stationary Bike Expansion
Added 8 Stationary Bike cardio workouts:
- Easy Cycling
- Moderate Steady-State Cycling
- High-Resistance Cycling
- Low-Resistance Speed Cycling
- Hill-Climb Simulation
- Sprint Intervals
- Resistance Intervals
- Recovery Ride

Stationary Bike is now an explicit equipment family in the automatic workout rotation. The treadmill remains the required 10/15-minute finisher on generated workout days.


## v11 Exercise Mat, Bodyweight, HIIT & Mobility Expansion
Added 92 entries:
- 17 bodyweight lower-body exercises
- 10 upper-body mat exercises
- 24 core exercises across beginner/intermediate and intermediate/advanced groups
- 16 bodyweight cardio/HIIT exercises
- 13 dynamic warm-up movements
- 12 cool-down/stretching movements

The Library now includes a Mobility category. Warm-up and recovery exercises remain available in the Library but are intentionally excluded from the normal strength/cardio exercise pool so they do not displace the main workout movements.


## v12 Set-by-Set Tracking
- Exercises with multiple sets now display each set separately.
- Example: `3 sets × 10–12 reps` becomes Set 1, Set 2 and Set 3, each with its own checkbox and rep target.
- Set completion is saved locally while the workout is in progress.
- The live workout screen also shows the set checklist.
- Workout History records completed sets versus planned sets.
- Timed/continuous exercises are represented as a single completion item where a normal multi-set pattern is not present.


## v14 Adjustable Dumbbell Image Rebuild
The Adjustable Dumbbell group has been rebuilt from a newly generated realistic exercise catalog and stored under `assets/exercises/adjustable-dumbbells/`. Each dumbbell exercise now has an individual image path. The included `adjustable-dumbbell-image-manifest.json` distinguishes exact generated poses from the small number of closest-pose fallbacks that still need a dedicated generation pass.


## v15 Barbell Image Rebuild
The Barbell Configuration group now has individual 640×480 image files under `assets/exercises/barbell/`. The included `barbell-image-manifest.json` marks which movements have an exact generated barbell pose and which still use the closest available generated barbell pose pending a dedicated follow-up image pass.


## v16 Kettlebell Image Rebuild
The Kettlebell group now has individual 640×480 image files under `assets/exercises/kettlebell/`. The included `kettlebell-image-manifest.json` distinguishes exact generated kettlebell poses from closest-pose fallbacks that still need a dedicated generation pass.


## Consolidated Image Build v17
This package consolidates the rebuilt Adjustable Dumbbell, Barbell and Kettlebell groups and adds separated image files for the remaining equipment groups from the latest generated catalog. 212 additional exercise records are mapped to individual image files in group-specific folders under `assets/exercises/`.

The application, workout library, set tracking, rest tracking, treadmill finisher, duration controls, history and offline support are all included in this single package.


## v18 Image-Free Workout Library
All exercise demonstration images have been removed.

The Workout Library is now text-based and shows:
- Exercise name
- Body area
- Equipment
- Sets/reps or duration
- Step-by-step instructions
- Form reminders

Today and Week remain image-free, and tapping an exercise opens its instruction guide. This version is much smaller and easier to upload to GitHub while keeping the full workout library and tracking features.


## v19 Workout Completion Fix
A dedicated **Mark Workout Complete** button has been added to Today. This allows a workout to be recorded as completed without having to run the workout timer all the way through. When used, all planned sets are marked complete and the workout is saved to History. Once completed, Today shows a green Workout Completed confirmation and duplicate completion records are prevented.


## v20 Workout Library Images & Female Body Heat Map
- Workout Library now supports a single centered image per exercise.
- Exercise detail guides show one centered demonstration image followed by instructions and form reminders.
- Where an exact conventional movement was confidently mapped, the image is loaded from the public-domain Free Exercise DB (`yuhonas/free-exercise-db`, Unlicense).
- No exercise deliberately reuses another exercise's URL. Exercises without a confident exact mapping show a text placeholder rather than an incorrect or duplicated image.
- Remote library images are cached by the service worker after they have loaded successfully once.
- Today now includes a front/back female-body heat map. Target regions are calculated from that day's actual exercise names and body-area classifications. Darker regions indicate heavier targeting.
- Heat-map regions include shoulders, chest, upper back, biceps, triceps, core, glutes, quadriceps, hamstrings and calves.

Image source: Free Exercise DB — https://github.com/yuhonas/free-exercise-db (Unlicense / public domain dataset).


## v21 Complete Library Image Coverage
Every exercise in the 296-entry Workout Library now has its own unique image source URL.

Image priority:
1. Exact public-domain Free Exercise DB image where a confident mapping exists.
2. Exercise-specific internet image search for specialized movements that are not represented in the public-domain database.

No two exercises are deliberately assigned the same image URL. If an external image provider fails to load, the app displays a clean fallback rather than a broken-image icon.

`exercise-image-sources.json` records the image source used for every exercise.


## v22 Day-Specific Set Tracking Fix
- Set completion is now keyed by both the calendar date and exercise ID.
- The Treadmill Finisher can be completed separately on Monday, Tuesday, Wednesday, etc.; completing it on one day no longer marks it completed on other days.
- Each individual set checkbox now saves immediately when tapped.
- Week view passes the selected day's actual calendar date to the set tracker.
- Today uses today's date; the active workout timer also records set completion only for today.
- Mark Workout Complete still marks all sets for today only.


## v23 Exercise Image Reliability + Anatomical Heat Map
- Removed Bing thumbnail/search URLs that could return text-only cards instead of exercise demonstrations.
- Exact Free Exercise DB image mappings remain the first priority.
- Unmatched exercises now try RepDB's direct 512px exercise illustration paths based on the exercise name (`start`, `main`, then `peak`).
- If none of those exact image files exist, the app shows a clean "Image unavailable" message instead of an incorrect or text-only image.
- Added visible attribution for RepDB imagery.
- Replaced the simplified body-shape heat map with a more anatomical female front/back body reference.
- Heat intensity is still calculated dynamically from the actual exercises scheduled for that day.


## v24 Fully Dynamic Female Body Heat Map
The Today heat map no longer uses a photograph or anatomy image from the internet.

- The female front/back body is drawn directly in the app as an SVG vector.
- Muscle regions are independent SVG shapes and are colored dynamically from that day's actual workout plan.
- Shoulders, chest, upper back, biceps, triceps, core/lower back, glutes, quadriceps, hamstrings and calves are mapped separately.
- Intensity levels are calculated relative to the day's workout: Not Targeted, Light, Moderate, High and Primary.
- A percentage-style relative focus score is shown under the body map for each targeted region.
- Because the anatomy is vector-based, it remains sharp offline and does not depend on an external anatomy image.


## v25 Today Tab Update
Only the Today experience was redesigned; Week, Library, History and Settings functionality remain in place.

### Rest Tracker
- A dedicated Rest Tracker now appears immediately above Today's Workout.
- Start Rest begins a free-running rest timer.
- Stop & Save captures that individual rest period and resets the timer to 00:00 for the next rest.
- Today shows the number of captured rests, total accumulated rest time, and the most recent rest periods.
- Captured rest totals are included when today's workout is saved to History.

### Individual Set Completion
- Every set remains independently tappable.
- A live `completed / planned sets` counter appears above Today's Workout.
- Tapping one set updates only that set for today's calendar date and updates the counter immediately.
- Mark Workout Complete remains available as a convenience but is not required to check individual sets.

### Dynamic Treadmill Finisher
- The finisher is generated from the actual workout composition, duration and difficulty for the day.
- It ranges from 10–15 minutes.
- Lower-body-heavy, cardio-heavy, or long sessions receive a light 10-minute finish.
- Upper-body/core sessions can receive moderate 12-minute or high 15-minute walk/run intervals.
- Speeds are always rounded to 0.2 increments and clamped within 0.6–6.2.
- The exact interval sequence, time, speed, intensity and reason are shown under Today's Workout.


## v26 Today Instructions + Safe Area
- Exercises on Today now show **Tap for instructions**.
- Tapping an exercise opens its step-by-step Exercise Instructions and form reminders.
- Exercise rows also support Enter/Space for accessibility.
- The app now respects the iPhone top safe area so the header stays below the clock, signal, Wi‑Fi and battery indicators.
- The sticky app header remains visible while scrolling without overlapping the phone status bar.
- Bottom navigation continues to respect the iPhone home-indicator safe area.


## v27 Week Tab Update
- Week now opens automatically on the current weekday whenever the Week tab is selected.
- Weekly schedule buttons are compact single-letter day buttons: S M T W T F S.
- Users can tap any other day to preview what is coming.
- Selecting a workout day displays a banner immediately below the schedule with a related exercise image and the day's workout focus (for example, Lower Body).
- Rest days display a recovery banner and brief guidance for stretching, mobility, easy walking, optional foam rolling, hydration and sleep.
- The exercise list is now compact: only the exercise name and its sets/reps or duration are shown.
- Week no longer expands individual set trackers. Tapping a compact exercise row still opens its instructions.
- Other tabs and their functionality remain unchanged.

## v28 Week Banner Images
- Week banners no longer reuse individual exercise-library demonstration images.
- Workout-day banners use separate generic female fitness/home-workout stock photography selected by workout focus.
- Lower Body, Upper Body, Core and general/full-body focuses have banner imagery independent of the exercise library.
- Rest-day recovery guidance remains unchanged.
- Stock banner photography is sourced from Pexels and is used only as visual context for the weekly schedule.

## v29 Week Fixes
- Fixed Week exercise instruction opening. The app was missing the `getExercise()` lookup used by the instruction modal, which caused Week exercise taps to fail at runtime.
- Week exercise rows now bind directly to the instruction modal.
- Added a dedicated generic **Core & Cardio** banner image so Wednesday no longer falls back to a missing Core image.
- The Core & Cardio banner uses a free stock fitness image from PxHere, separate from the exercise-library demonstration images.

## v30 Core Fixes
- Today and Week exercise rows now reliably open the Exercise Instructions modal.
- Set checkboxes remain independent and do not trigger the instruction modal.
- Regenerate now changes the exercise rotation using a persistent plan seed.
- iPhone standalone status-bar mode no longer uses `black-translucent`.
- Safe-area padding is applied directly to the sticky top bar so HomeFit Pro stays below the time, signal, Wi‑Fi and battery area while scrolling.

## v31 Complete Exercise Instructions
- All 296 Workout Library exercises now resolve through one instruction registry.
- Today, Week and Library all use the same instruction source.
- Existing exercise-specific tips are preserved.
- If an exercise has fewer than three detailed tips, the app automatically adds movement-specific setup, execution and return instructions based on the exercise name, body area and equipment.
- Instruction rendering no longer depends on the exercise image loading successfully.
- Every Library card now states **Tap for instructions**.

## v32 Today Equipment Grouping
Today's workout is now grouped by equipment to reduce unnecessary setup changes.

- All Adjustable Dumbbell exercises are kept together.
- All Barbell exercises are kept together.
- Kettlebell and other equipment types are also grouped into their own blocks.
- The suggested order intentionally keeps each configuration together so adjustable weights only need to be converted after that equipment block is complete.
- Each block includes a short setup note.
- Individual set tracking, instructions, rest tracking, treadmill finisher, heat map, and workout completion remain unchanged.
- The Week, Library, History and Settings tabs remain unchanged.

## v33 User-Controlled Today Order
- Removed the equipment "Block 1 / Block 2" layout.
- Today is a single exercise list again.
- Each exercise has a normal sequence number only.
- Exercises can be reordered manually using Move Up / Move Down.
- Desktop browsers can also drag and drop exercises.
- The chosen order is saved for that calendar day.
- Reset Order restores the generated order.
- Treadmill Finisher remains locked to the end of the workout.
- Set tracking, instructions, rest tracker, heat map and workout completion remain available.

## v34 History Tab
- Added a Week Streak counter. Completing at least one workout in a calendar week counts that week toward the streak.
- If a full week passes with no completed workout, the streak resets.
- The current week does not reset an existing streak until the week has actually been missed.
- Added Workout Days progress using the selected rest days, e.g. 3/4 or 3/5.
- This Week now uses unique completed workout days rather than raw history entries.
- Rest days use a crescent moon instead of a red X.
- Completed-day ticks and Recent Workout check marks now use the app's accent gradient for consistent styling.

## v35 Local Date Fix
- Fixed completed workouts appearing under the wrong weekday in History.
- The app previously generated date keys with `toISOString()`, which converts the phone's local time to UTC before taking the date.
- Workout dates, set progress, Today ordering and weekly date matching now use the phone's local calendar date instead.
- A workout completed on Tuesday therefore remains Tuesday throughout Today, Week and History.

## v36 Branding Update
- App renamed to **Home Workout**.
- Slogan updated to **Your Fitness. Your Home. Your Power.**
- Supplied Home Workout artwork is now used for the PWA/app icon and in-app branding.
- Added 192×192, 512×512 and Apple touch icons.
- Interface changed to a cyan-blue gradient theme while preserving existing workout functionality.

## v38 Cyan Design Restored
- Restored the full cyan-blue gradient redesign from v36.
- Removed only the extra generated header logo; the original in-app logo remains.
- Corrected the visible slogan to **Your Fitness. Your Home. Your Power.**
- Added cache-busting version parameters to CSS and JavaScript so GitHub Pages/PWA installs do not keep serving the older design.
- Updated theme/background colors for the cyan branding.

## v39 Phone/PWA Refresh Fix
- Added aggressive service-worker update handling for installed phone apps.
- JavaScript, CSS, manifest and navigation requests now use a network-first strategy so the installed PWA receives newer GitHub Pages files instead of staying on an old cached design.
- Old Home Workout caches are deleted on service-worker activation.
- The service worker uses `skipWaiting()` and `clients.claim()` so updates take control sooner.
- CSS/JS filenames are cache-busted with `?v=39`.
- The app requests a service-worker update whenever it launches.

## v40 Stability Fix
- Removed the automatic `controllerchange` page reload introduced in v39. That forced reload could make the installed iPhone PWA visibly flash/reload or appear to glitch while a service-worker update took control.
- The service worker still checks for updates, but it now updates in the background without forcing the current screen to reload.
- App CSS and JavaScript are versioned as v40 to prevent old/new asset mismatches.
- Navigation remains network-first; versioned app assets use a stable cache-first strategy.
- Failed image requests no longer fall back to the app's HTML page.
- Cyan branding and all workout functionality from the previous build are preserved.

## v41 Resumable Workout Sessions
- Closing the active workout with **X** now pauses and saves the workout instead of discarding progress.
- Current exercise, elapsed exercise time, rest phase, remaining rest time, recorded rest periods, and workout position are persisted.
- Individual set checkmarks were already stored separately and remain intact.
- Today shows **Resume Workout** whenever a paused workout exists for the current date.
- A **Restart Workout** option is available if the user intentionally wants to begin again; completed set checkmarks are not erased.
- The active session is saved every second, so an app interruption or accidental close should lose at most about one second of timer progress.

## v43 Stable Warm-Up Repair
- Rebuilt this version from the known-stable v41 resumable-workout build instead of continuing from the broken v42 build.
- Added the dynamic 4–6 minute pre-workout Warm-Up & Mobility card on workout days.
- The warm-up is included at the beginning of Start Workout and is preserved in resumable workout sessions.
- Added five warm-up exercises to the Workout Library with instructions.
- Added only image URLs that were directly verified to exist in Free Exercise DB; no speculative global image-host changes are included in this build.
- Broader missing-image cleanup is intentionally separated from this stability repair so it cannot break the app again.

## v46 Today Stability Repair
This build returns to the proven v43 Today rendering and state logic.

- No custom Today rendering engine or new collapse JavaScript is used.
- The requested cyan dashboard appearance is applied through CSS to the stable existing Today screen.
- Start/Resume Workout and Mark Complete are fixed above the bottom navigation.
- Warm-up, exercise instructions, set completion, manual exercise ordering, duration control, dynamic heat map, rest tracker, treadmill finisher, workout pause/resume, History and other tabs remain on the stable v43 implementation.


## v47 Complete Consolidated Build
Single GitHub upload package containing the requested Home Workout features.

- Home Workout branding and “Your Fitness. Your Home. Your Power.” slogan.
- Supplied app/PWA icon and cyan-blue gradient theme.
- iPhone safe-area spacing.
- Today: daily focus, duration control, warm-up, female SVG heat map, rest tracker, individual set tracking, manual exercise reordering, dynamic treadmill finisher, fixed Start/Resume + Mark Complete controls, and resumable workout sessions.
- Week: compact S M T W T F S selector, automatic current-day selection, generic workout-focus banners, rest-day guidance, compact exercise list, working instructions, and functional Regenerate.
- Library: full exercise catalogue, shared instructions for Library/Today/Week, warm-up exercises, and retained internet exercise-image mappings from the stable build.
- History: local-date tracking, workout-days count, weekly streak, crescent-moon rest days, cyan completion ticks, recent workout details.
- Settings, dark/light mode, offline/PWA support, service worker, and installed app icons retained.

## v48 Today Blank-Screen Fix
- Fixed the actual runtime cause of the blank Today tab: the exercise array contained a sparse/undefined entry created by an accidental double comma.
- The warm-up lookup attempted to read `.name` from that undefined entry, which stopped `renderToday()` before any Today content could display.
- Removed the malformed array slot.
- Added defensive checks to exercise lookup and workout-plan filtering so one malformed exercise entry cannot blank the Today tab again.
- Passed both JavaScript syntax validation and a runtime smoke test that confirms Today renders content.

## v49 Missing Workout Images & Instructions
- Expanded exercise-specific image coverage using the public-domain Free Exercise DB.
- Added/strengthened instructions for common dumbbell, barbell, kettlebell, resistance-band, bodyweight, core, cardio and warm-up movements.
- The existing image fallback system remains active for custom movements that do not have a safe exact source match.
- Today, Week and Library continue to use the same shared exercise instruction system.
- Source: Free Exercise DB — https://github.com/yuhonas/free-exercise-db (Unlicense/public domain).

## v50 Progressive Training & Data Safety
- Weight/resistance tracking is available during strength exercises.
- Actual reps can be recorded per set for rep-based strength movements.
- Progression is intentionally gradual: an increase suggestion appears only after reaching the top of the rep range for all sets on 2 qualifying appearances of that exercise.
- A single good workout never changes the programmed load automatically.
- After a progression suggestion, the user remains in control and can keep the current load or use the smallest available increment.
- Repeated under-performance must occur across 3 completed sessions before the app suggests reviewing/reducing load.
- Completed workouts now show a summary with minutes, exercises, sets, treadmill time and rest.
- Workout and treadmill difficulty feedback can be recorded.
- History includes tracked-load records.
- Settings now provide Full Backup export/import, History CSV export, History JSON export, and visible build version.

## v51 Next Suggested Features
- Added **Swap Exercise** from Today. Replacements prioritize the same workout area and the same equipment, then fall back to other selected equipment targeting the same area.
- Added **Auto Arrange** to Today. It groups the generated workout by equipment configuration to reduce repeated dumbbell/barbell/kettlebell setup changes while keeping the treadmill finisher last.
- Manual Up/Down reordering remains available after auto-arranging.
- Added a **monthly History calendar** showing completed workout days, rest days and past scheduled days that were not marked complete.
- Added **Past Workout** entry in History so a previous workout day can be marked completed if it was forgotten at the time.
- A previous-day completion creates a proper History record and marks the planned sets for that date complete.
- The past-workout picker covers the previous 21 days and excludes rest days.

## v52 Warm-Up + Cool-Down
- Retains the existing dynamic pre-workout warm-up.
- Adds a compact dynamic **Cool-Down · 5 min** section to Today.
- Cool-down stretches change according to the day's focus: Lower Body, Upper Body, Core/Cardio, or Full Body.
- Cool-down uses exercises already in the Workout Library, so tapping a stretch opens its shared instructions.
- The cool-down is collapsed by default to avoid crowding Today.
- No set tracking, weight progression, rest tracking, or ratings were added to warm-up/cool-down; those remain reserved for the main workout.
- Intended workout flow: Warm-Up → Main Workout → Treadmill Finisher → Cool-Down.

## v53 Cool-Down Flow Fix
Cool-Down is now positioned at the end of the workout flow:
Warm-Up → Main Workout → Treadmill Finisher → Cool-Down.

## v54 Cool-Down Position Correction
The prior version still rendered Cool-Down inside the upper heat-map card. v54 removes that placement and renders Cool-Down only once, after the complete Today's Workout card and treadmill finisher.

## v55 Cool-Down Instruction Fix
- Fixed Cool-Down instruction buttons.
- The recovery section was calling a non-existent `openExercise()` function.
- Cool-Down now uses the same shared `preview()` instruction modal as Today, Week and the Workout Library.
- Exercise images, instructions and form reminders therefore load from the same source everywhere.

## v56 Reps / Weight Input Focus Fix
- Fixed the reps and weight/resistance fields jumping out while typing.
- The workout modal previously rebuilt itself every second to refresh the timer, which destroyed input focus.
- The timer now updates only its timer/rest text and progress ring without rebuilding the exercise form.
- Weight and reps are saved while typing (`input`) as well as on change, reducing the risk of losing an entry.

## v57 Body Weight & Measurement Tracker
- Added a dedicated **Body** tab.
- Track weight, waist, hips, chest, thigh and upper-arm measurements by date.
- Saving the same date updates that entry rather than creating a duplicate.
- Latest values show change from the previous measurement entry.
- Trend charts show the last 12 entries for Weight, Waist and Hips.
- Full measurement history is retained and entries can be deleted.
- Settings allows lb/kg for body weight and inches/cm for measurements.
- Body-tracker data is included automatically in the existing full backup because it is stored in the main app state.

## v58 Body Tab Route Fix
- Fixed the Body tab not rendering.
- The Body button existed in the navigation, but the central route map did not include `body: renderBodyTracker`.
- Selecting Body now properly replaces the Today content with the Body Tracker screen.

## v59 Editable Body Measurements
- Added **Edit** beside every Body Tracker history entry.
- Edit loads the selected date and all saved values back into the form.
- The button changes to **Update Entry** while editing.
- You can change only the values that need correcting and save them back to that date.
- Existing Delete functionality remains available.

## v60 Dumbbell Squat Image
Added the supplied Dumbbell Squat demonstration image to the shared exercise record in the Workout Library. It will also appear wherever the app opens Dumbbell Squat instructions from Today or Week.

## v61 Resistance Band Row Image
- Added the user-supplied image to **Resistance Band Row** (`bandrow`).
- Retains the prior Dumbbell Squat image and all v60 functionality.
- The image is available offline and through the shared Library/Today/Week exercise record.

## v62 Bent-Over Dumbbell Row Image
- Added the supplied image to **Dumbbell Bent-Over Row** (`db-bent-over-row`).
- Retains the Dumbbell Squat and Resistance Band Row images from prior builds.
- Image is available through the shared Library/Today/Week exercise record and offline cache.

## v63 Barbell Romanian Deadlift Image
- Added the user-supplied image to **Barbell Romanian Deadlift** (`rdl`).
- Retains the previously supplied Dumbbell Squat, Resistance Band Row, and Dumbbell Bent-Over Row images.
- The image is available in the shared Workout Library/Today/Week exercise record and offline cache.

## v64 Library Image Batch
Added 9 exact user-supplied workout images queued after v63; prior images and functionality retained.


## v65 – RepDB Image Fallback
- Existing user-selected exercise images are preserved and remain first priority.
- Exercises without a selected local image now try lightweight RepDB WebP illustrations first.
- Existing external image sources remain as fallbacks.
- Visible RepDB attribution added in Settings.
- Successfully loaded cross-origin images can be cached by the service worker for later reuse.
- Exercise data by RepDB: https://repdb.co


## v66 – RepDB Rendering Fix
The v65 RepDB implementation incorrectly guessed image filenames from Home Workout exercise names.
RepDB image filenames must come from the official `exercises.json` record for each exercise.

v66 now:
- loads the official RepDB free-tier JSON index at runtime;
- uses only the actual `images.flat.start`, `peak`, or `main` paths returned by RepDB;
- matches Home Workout exercises to RepDB by normalized exercise name/ID;
- preserves all user-selected local images as first priority;
- keeps the existing Free Exercise DB / legacy image sources as fallbacks;
- does not add the RepDB image library to the ZIP, keeping the repository small;
- keeps the app usable when RepDB is unavailable or the device is offline.


## v67 – Body Tracker Latest Measurements
- Latest now displays Weight, Waist, Hips, Chest, Thigh, and Upper Arm.
- Delta vs previous entry is shown for all six measurements.
- Existing Body Tracker history/edit/delete/trends and all other app functionality are retained.


## v68 – Background-Safe Timers
- Active workout timer now uses wall-clock timestamps instead of relying on one JavaScript interval callback per second.
- Workout timing continues accurately when the phone screen turns off or the browser/PWA is backgrounded.
- Active rest countdown also catches up after background suspension. If the rest period expires while the app is inactive, the workout timer resumes from the actual rest-end time.
- Running workout timestamps are persisted on visibility/page-hide events so timing can be reconstructed after returning to the app.
- The standalone Today Rest Tracker start timestamp is also persisted, so it continues across backgrounding and app reloads.
- Manually pressing Pause or closing the active workout window still pauses the workout intentionally.

## v69 – Exercise Image Library Refresh
- Refreshed RepDB integration against the current free dataset (601 exercises as of September 2026).
- Added conservative normalized/fuzzy exercise matching so naming differences no longer leave as many blank cards.
- RepDB media paths still come only from RepDB's official JSON; the app does not invent image filenames.
- User-selected local exercise images remain first priority.
- Existing Free Exercise DB / legacy URLs remain fallback sources.
- No bulk image files were added, keeping the ZIP small.
- All v68 background-safe timer behavior is retained.

## v70 – Missing Image Batch 1
Added reviewed RepDB image mappings for the 13 exercises supplied by the user:
Skipping Rope, Mini Stepper Intervals, Plank with Sliders, Bent-Over Dumbbell Row,
Dumbbell Sumo Squat, Dumbbell Stiff-leg Deadlift, Dumbbell Lateral Lunge,
Kettlebell Sumo Squat, Resistance Band Squat, Banded Standing Kickback,
Slider Single-Leg Lunge, Quad Stretch, and Figure-Four Glute Stretch.

These are URL-based mappings to RepDB's licensed in-app illustrations; no generated images were created.
Where RepDB does not have the exact equipment-specific movement, the closest reviewed movement illustration is used.

## v71 – Missing Image Batch 2
Added reviewed RepDB image mappings for:
Dumbbell Thruster, Dumbbell Squat to Press, Dumbbell Clean and Press, Dumbbell Farmer's Carry,
Dumbbell Reverse Lunge to Curl, Barbell Clean and Press, Barbell Thruster, Barbell Squat to Press,
Kettlebell Clean and Press, Kettlebell Deadlift to High Pull, Kettlebell Squat to Press,
Kettlebell Figure Eight, Banded Squat, Banded Sumo Squat, Banded Squat Pulses,
and Banded Lateral Walk.

No generated or recreated images were added. Where RepDB lacks the exact compound variation,
the closest reviewed movement/equipment illustration is used instead of leaving the card blank.
