# 19 — A Little Universe Called Srija

A completely new, vanilla HTML/CSS/JavaScript birthday experience for Srija's 19th birthday.

## Structure

- index.html — semantic story structure
- style.css — responsive cinematic art direction
- script.js — story interactions, memories, letter, music control, candles and motion fallback
- assets/photos/ — personal memories
- assets/audio/city-of-stars.mp3 — supplied soundtrack

## Personal photo filenames expected

The current build references these 14 personal photo files:

1000271541.jpg, 1000271542.jpg, 1000271543.jpg, 1000271546.jpg, 1000271548.jpg, 1000271549.jpg, 1000271550.jpg, 1000271551.jpg, 1000271552.jpg, 1000271553.jpg, 1000271554.jpg, 1000271555.jpg, 1000271556.jpg, 1000271557.jpg

I inspected the available Library assets and these are the original personal couple/memory photos that were available as usable photo assets. The repository itself was empty when this build began.

The supplied City of Stars audio was not available as an accessible audio asset during the build, so the custom music control is wired to the expected path and fails gracefully until the file is added.

## GitHub Pages

Enable Pages from Settings → Pages and publish the main branch from / (root).

No backend or build step is required.

## Interaction notes

- Intro is intentionally paced rather than dumping the page immediately.
- Music never autoplays.
- The letter opens from an envelope and reveals paragraph-by-paragraph.
- 19 reasons advance individually.
- 19 candles can be extinguished with a button; DeviceMotion can also trigger the interaction when motion data is available.
- prefers-reduced-motion is respected.
- Hidden stars/heart reveal small messages.