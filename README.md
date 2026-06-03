# Cozy Pixel Art Todo List

A charming pixel art themed todo list app built with **React + Vite + Tailwind CSS v4**. Manage your daily tasks in a cozy, nostalgic pixel aesthetic with persistent storage so your tasks are never lost.

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-v4-38BDF8?style=flat&logo=tailwindcss)

---

## Features

- **Add Tasks** — Type and add tasks with a pixel art input box
- **Complete Tasks** — Click the button on a task to mark it as done with a checkmark and strikethrough
- **Filter Views** — Switch between All, Completed, and Trash
- **Trash System** — Cleared tasks go to trash instead of being permanently deleted
- **Clear Options** — Clear all tasks, clear only completed, or empty the trash
- **Persistent Storage** — Tasks and trash survive page refreshes via `localStorage`
- **Pixel Art UI** — Custom pixel fonts, beveled shadows, and a cozy background
- **Animations** — Smooth slide-in animation when a new task is added

---

## Preview

> A pixel art themed board with a decorative image frame, sidebar navigation, and a cozy brown/beige color palette.

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourfriend8P/cozy-pixel-todo.git

# Navigate into the project
cd cozy-pixel-todo

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Project Structure

```
src/
├── assets/
│   ├── background.png       # Background image
│   ├── Title.png            # App title image
│   ├── Vector.png            # App title image
│   └── ToDoListBox.png      # Decorative todo board frame
├── components/
│   ├── TodoBoard.jsx        # Main task board
│   ├── ItemBox.jsx          # Individual task item
│   ├── InputBox.jsx         # Task input + add button
│   ├── Sidebar.jsx          # Filter navigation panel
│   └── SideBarButton.jsx    # Reusable sidebar button
├── index.css                # Global styles + Tailwind theme
├── App.jsx                  # Root component, global state
└── main.jsx
```

---

## Tech Stack

| Tool                 | Purpose                 |
| -------------------- | ----------------------- |
| React 19             | UI framework            |
| Vite                 | Build tool & dev server |
| Tailwind CSS v4      | Utility-first styling   |
| localStorage         | Data persistence        |
| Google Fonts (VT323) | Pixel art typography    |

---

## Color Palette

| Color        | Hex       | Usage                   |
| ------------ | --------- | ----------------------- |
| Warm Beige   | `#E8CFA7` | Item backgrounds        |
| Caramel      | `#C3996D` | Sidebar, borders        |
| Dark Brown   | `#926454` | Borders, accents        |
| Muted Gold   | `#9b7333` | Circle buttons          |
| Active State | `#BAA686` | Selected sidebar button |

---

## Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

---

## License

# MIT — feel free to use and modify for your own projects.

# cozy-pixel-todo
