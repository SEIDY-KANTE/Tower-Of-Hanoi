# <img src="https://github.com/SEIDY-KANTE/tower-of-hanoi/blob/main/public/tower-of-hanoi.ico" width="50" height="50" title="Icon" alt="Icon">  Tower of Hanoi Visualizer


An interactive and educational **Tower of Hanoi visualizer** built with **React 19**, **TypeScript**, **Framer Motion**, **React DnD**, and **Tailwind CSS**. It supports **auto-solve animations**, **step-by-step manual solving**, **drag-and-drop gameplay** and **sound effects**. all wrapped in a modern and responsive UI.

---

## 🎮 What Is Tower of Hanoi? <a href="https://en.wikipedia.org/wiki/Tower_of_Hanoi">Wikipedia</a>

The **Tower of Hanoi** is a classic mathematical puzzle consisting of three pegs and a number of discs of different sizes. The puzzle starts with all discs stacked in ascending order (largest on bottom) on a single peg. The goal is to move the entire stack to another peg following these rules:

### 📏 Rules

1. You have 3 pegs and a set of discs.
2. You can only move one disc at a time.
3. You can only place a smaller disc on top of a larger one.
4. Move all discs from the first peg (A) to the last one (C).

---

## 📐 Algorithm Explanation

The Tower of Hanoi problem has a well-known **recursive solution**:

- Move `n - 1` discs from source to auxiliary.
- Move the largest disc to destination.
- Move `n - 1` discs from auxiliary to destination.

### ⌛️ Optimal Number of Moves

For `n` discs, the **minimum number of moves** is `2ⁿ - 1`.

---
## Screenshots

![screenshot-1](https://github.com/SEIDY-KANTE/tower-of-hanoi/blob/main/public/Screenshot-1.png)
![screenshot-2](https://github.com/SEIDY-KANTE/tower-of-hanoi/blob/main/public/Screenshot-2.png)
![screenshot-2](https://github.com/SEIDY-KANTE/tower-of-hanoi/blob/main/public/Screenshot-3.png)

---

## ⚙️ Features

- ✅ Drag-and-drop gameplay with rule validation
- ✅ Animated discs and pegs
- ✅ Auto-solve animation
- ✅ Step-by-step solve mode
- ✅ Sound toggle and dark mode
- ✅ Fully responsive

---

## 🛠️ Tech Stack

| Tech                  | Purpose                          |
|-----------------------|----------------------------------|
| **React 19**          | UI framework                     |
| **TypeScript**        | Type safety and developer tooling|
| **Framer Motion**     | Smooth animations                |
| **React DnD (v16)**   | Drag-and-drop disc movement      |
| **Tailwind CSS**      | Utility-first CSS styling        |
| **Vite**              | Fast dev server and bundling     |

---



## ✅ Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18+ recommended)

---

## 🚀 Getting Started


#### 1. Clone the repository
```bash
git clone https://github.com/SEIDY-KANTE/tower-of-hanoi.git
cd tower-of-hanoi
```


#### 2. Install dependencies
```bash
npm install
```


#### 3. Start the development server
```bash
npm run dev
```

---
## LICENSE

[![Static Badge](https://img.shields.io/badge/UNLICENSE-UNLICENSE_green?logo=unlicense&label=LICENSE&link=https%3A%2F%2Fgithub.com%2FSEIDY-KANTE%2Ftower-of-hanoi%2Fblob%2Fmain%2FLICENSE)](https://img.shields.io/badge/UNLICENSE-UNLICENSE_yellow?logo=unlicense&label=LICENSE&link=https%3A%2F%2Fgithub.com%2FSEIDY-KANTE%2Ftower-of-hanoi%2Fblob%2Fmain%2FLICENSE
)

Distributed under the MIT License. See [```LICENSE```](#https://github.com/SEIDY-KANTE/tower-of-hanoi/blob/main/LICENSE) for more information.

---
## DEMO LINK  [Click here 🎮](#https://tower-of-hanoi-0vqn.onrender.com)
  <!-- <a href="https://tower-of-hanoi-0vqn.onrender.com">```Click here 🎮```</a> -->
