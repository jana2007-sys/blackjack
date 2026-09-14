# 🃏 Blackjack Game

A simple **Blackjack game** built using **HTML, CSS, and JavaScript**.

The player can start a game, receive cards, calculate the card sum, and draw additional cards while trying to get as close to **21** as possible without going over.


## ✨ Features

* 🃏 Start a new Blackjack game
* ➕ Automatically calculate the card sum
* 🎴 Draw additional cards
* 💥 Detect when the player goes over 21
* 🏆 Detect Blackjack
* ❌ Detect when the player is no longer alive
* 💬 Display game messages dynamically
* 👤 Display player information
* 🎨 Simple and responsive user interface

## 🛠️ Technologies Used

* **HTML5** – Website structure
* **CSS3** – Styling and layout
* **JavaScript** – Game logic and user interaction

## 📂 Project Structure

```text
blackjack-game/
│
├── index.html
├── index.css
├── index.js
└── README.md
```

## 🎯 How to Play

1. Open the game.
2. Click **START GAME**.
3. You will receive two cards.
4. The cards are added together to calculate the sum.
5. If the sum is less than 21, you can click **NEW CARD** to draw another card.
6. Try to get as close to **21** as possible.
7. If your sum goes above 21, you lose.
8. If your sum reaches exactly 21 with the starting cards, you get **Blackjack!**

## 🧠 Game Logic

The game uses JavaScript variables to keep track of the player's game state.

```javascript
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
```

### Variables

| Variable       | Purpose                                    |
| -------------- | ------------------------------------------ |
| `cards`        | Stores the cards received by the player    |
| `sum`          | Stores the total value of the cards        |
| `hasBlackJack` | Checks whether the player has Blackjack    |
| `isAlive`      | Checks whether the player is still playing |

## 🔄 Game Flow

```text
START GAME
     ↓
Get two cards
     ↓
Calculate sum
     ↓
Is sum = 21?
   ↙       ↘
 YES       NO
  ↓         ↓
Blackjack  Is sum < 21?
             ↙    ↘
           YES    NO
            ↓      ↓
       Draw card   Bust
            ↓
       Calculate sum
```

## 📚 What I Learned

This project helped me practice important JavaScript concepts such as:

* Variables
* Arrays
* Functions
* `if...else` conditions
* `for` loops
* DOM manipulation
* `getElementById()`
* `textContent`
* Event handling
* Updating HTML using JavaScript
* Basic game logic

## 🚀 How to Run

### Option 1 — Open directly

Download or clone the repository and open:

```text
index.html
```

in your browser.

### Option 2 — VS Code

1. Open the project folder in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

## 🔮 Future Improvements

* 🃏 Add a complete 52-card deck
* 👤 Add a dealer
* 🤖 Add dealer AI
* 💰 Add betting and chips
* 🏆 Add win/loss statistics
* 🔊 Add sound effects
* 🎨 Improve card animations
* 📱 Improve mobile responsiveness
* 🔄 Add a restart/new-game button

## 👨‍💻 Author

**Janarthanan**

This project was created as part of my journey learning **JavaScript and Full-Stack Web Development**.

---

⭐ If you enjoyed this project, consider giving the repository a star!
