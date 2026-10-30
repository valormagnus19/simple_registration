# Student Registration Tracker

A clean web application built using vanilla JavaScript that validates user text inputs, manages a live student registry list, tracks student numbers dynamically, and allows item removal.

## 🚀 Features

* **Real-time Live Validation:** Monitors input values on every keystroke, warning users if an entry is structurally invalid (too short or too long).
* **Parallel UI Row Layout:** Dynamically groups student names and their respective control items together horizontally inside single list blocks.
* **Safe Form Interception:** Prevents invalid payloads or empty strings from entering the structural list tree using an automated layout block gate.
* **Dynamic Record Totals:** Automatically increments and decrements registration counters as items are added to or deleted from the DOM.

---

## 📂 Project Structure

This application runs entirely on two front-end configuration paths:

```text
├── index.html   # Main structural page setup containing the DOM target hooks
└── script.js    # Decoupled validation rules and registration engine logic
```

---

## 🛠️ System Architecture & Logic

The system divides events into two separate, non-nested functional streams to maintain clean state changes:

### 1. Live Validation Window (`input` event)
Continuously tracks text length metrics inside the input node:
* Values matching lengths $\le$ 2 display `"Enter valid name please!"` highlighted in **red**.
* Values matching lengths $\ge$ 15 display `"Enter only your full name please!"` highlighted in **red**.
* Valid inputs print standard character counts safely highlighted in **black**.

### 2. Registration Engine (`submit` event)
Triggers once the workspace form element registers an execution:
* **`event.preventDefault()`** drops automatic window reloads.
* Reads color styling tags on the error element. If flagged as **red** or empty, it blocks the code loop from firing.
* Spawns a list row (`<li>`) element and immediately nests a delete button *inside* it to maintain alignment.
* Increases registration statistics upon successful list item delivery, and drops them back down when an item's specific `.remove()` handler runs.

---

## 📝 Quick Start

1. Create a workspace folder on your machine.
2. Save your HTML structure inside `index.html` and your event handlers inside `script.js`.
3. Open `index.html` within your preferred web browser to execute and test the tracking logic.
