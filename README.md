# Tic Tac Toe Game

A classic Tic Tac Toe game built with vanilla HTML, CSS, and JavaScript. Play against an opponent and try to get three in a row!

## 📋 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [How to Play](#how-to-play)
- [Game Rules](#game-rules)
- [File Descriptions](#file-descriptions)

## ✨ Features

- **Interactive Gameplay**: Click on any empty cell to place your mark
- **Turn-Based System**: Alternates between Player X and Player O
- **Winner Detection**: Automatically detects winning combinations
- **Game Reset**: Reset the game to clear the board and start fresh
- **New Game Button**: Start a new game at any time
- **Responsive Design**: Works on various screen sizes with flexible viewport dimensions
- **User Feedback**: Displays congratulatory message when a winner is found

## 🛠️ Technologies Used

- **HTML5**: Semantic markup for game structure
- **CSS3**: Responsive styling with Flexbox and viewport units
- **JavaScript (ES6)**: Game logic and interactivity
  - Event listeners for player interactions
  - DOM manipulation
  - Win condition checking algorithm

## 📁 Project Structure

```
Tic tac toe/
├── tac.html        # Main HTML file with game board structure
├── app.js          # JavaScript game logic
├── style.css       # Styling and layout
├── app,js.txt      # Backup/notes file (unused)
└── README.md       # Project documentation
```

## 🚀 Installation

1. **Clone or Download** the project files to your local machine
2. **No dependencies required** - This is a standalone vanilla JavaScript project
3. Open `tac.html` in your web browser
4. Start playing!

## 🎮 How to Play

1. Open the game in your web browser
2. The game board displays a 3x3 grid
3. **Player X** goes first
4. Click on any empty cell to place your mark
5. Players alternate turns automatically
6. The first player to get three marks in a row (horizontally, vertically, or diagonally) wins
7. A congratulatory message displays when someone wins
8. Click **"Reset game"** or **"Start New game"** to play again

## 📐 Game Rules

- The game board is a 3x3 grid with 9 cells
- Player X and Player O take turns placing their marks
- A player wins by placing three of their marks in a straight line:
  - **Horizontally**: Top, Middle, or Bottom row
  - **Vertically**: Left, Middle, or Right column
  - **Diagonally**: Top-left to bottom-right or Top-right to bottom-left
- Once a winner is determined, all cells are locked until a new game is started
- Players can reset or start a new game at any time

## 📄 File Descriptions

### `tac.html`
The main HTML file containing the page structure:
- Document head with meta tags for responsiveness and charset
- Page title set to "Tic Tac Toe Game"
- Container with a 3x3 grid of interactive buttons
- Message display area for winner announcements
- Reset and New Game buttons
- Script reference to `app.js`

### `app.js`
Contains all game logic:
- **Event Setup**: Attaches click listeners to game board cells
- **Turn Management**: Tracks whose turn it is (X or O)
- **Win Patterns**: Array of 8 possible winning combinations
- **Game Functions**:
  - `checkwinner()`: Checks all winning patterns after each move
  - `showwinner()`: Displays winner and disables board
  - `resetgame()`: Clears board and resets game state
  - `disablebtn()`: Locks all cells when game ends

### `style.css`
Provides responsive styling:
- **Reset**: Removes default margins and padding
- **Grid Layout**: Uses Flexbox for responsive 3x3 board
- **Responsive Units**: Uses viewport units (vmin) for scaling across devices
- **Buttons**: Styled with rounded corners and shadows
- **Layout**: Centered game container with proper spacing

## 💡 Future Enhancement Ideas

- Add difficulty levels (vs. AI)
- Score tracking for multiple games
- Dark/Light theme toggle
- Sound effects for moves and wins
- Multiplayer over network
- Game history/statistics

## 📝 License

This project is open source and available for educational purposes.

---

**Enjoy your game!** 🎯
