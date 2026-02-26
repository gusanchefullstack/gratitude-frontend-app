# Gratitude App - Frontend

A React + TypeScript frontend for the Gratitude App, a fullstack application that helps users record and manage their daily gratitudes. Built with Vite, TailwindCSS, and a component-driven architecture.

## Overview

The frontend communicates with the [Gratitude Backend API](../gratitude-backend-app) to provide a full CRUD interface for gratitude entries with user authentication (login/register) and a responsive, card-based UI.

## Tech Stack

- **Framework:** React 19.2.0
- **Language:** TypeScript 5.9.3
- **Build Tool:** Vite 7.2.4
- **Styling:** TailwindCSS 4.1.18
- **Icons:** react-icons 5.5.0
- **Linting:** ESLint 9 + typescript-eslint

## Project Structure

```
src/
├── main.tsx                          # React entry point
├── App.tsx                           # Root component
├── components/
│   ├── mainUI.tsx                    # Root layout — composes all sections
│   ├── headerContainer.tsx           # App header / nav bar area
│   ├── searchBarContainer.tsx        # Search bar wrapper with max-width constraint
│   ├── searchInput.tsx               # Controlled text input with FiSearch icon
│   ├── searchText.tsx                # Search section heading + subtitle
│   ├── gratitudesContainer.tsx       # Responsive grid of gratitude cards
│   ├── gratitudeCard.tsx             # Individual gratitude card with edit/delete actions
│   ├── addGratitudeButton.tsx        # Floating/inline "add" action button
│   ├── tagsContainer.tsx             # Horizontal list of unique tags from all gratitudes
│   ├── loginForm.tsx                 # Login form UI (username + password)
│   └── registerForm.tsx              # Registration form UI (firstName, lastName, email, username, password)
└── context/
    └── gratitudListContext.tsx       # React context — fetches gratitude list, provides it to the tree
```

## Components

### `mainUI.tsx`
Root layout component. Wraps all child components inside `GratitudeListContextProvider` so the whole tree has access to the gratitude list state.

### `gratitudesContainer.tsx`
Renders a responsive CSS grid of `GratitudeCard` components:
- 1 column on mobile
- 2 columns on `sm` (≥640px)
- 3 columns on `lg` (≥1024px)
- 4 columns on `xl` (≥1280px)

### `gratitudeCard.tsx`
Displays a single gratitude entry. Features:
- Text truncation for title (50 chars) and details (120 chars) to keep consistent card height
- Edit (`FiEdit2`) and delete (`FiTrash2`) icon buttons from `react-icons/fi`
- Tag chips rendered with `key` prop for React reconciliation
- Fixed card dimensions (`w-72 h-80`) for a uniform grid

### `searchInput.tsx`
Search text field styled with TailwindCSS, using `FiSearch` icon from `react-icons/fi`. Supports focus ring feedback via `focus-within:ring-2`.

### `searchText.tsx`
Section heading rendered as an `<h2>` with a descriptive subtitle below it.

### `loginForm.tsx`
Standalone login form UI with username and password fields, a "Sign In" button, and a link to registration. Not yet wired to the auth API.

### `registerForm.tsx`
Standalone registration form UI with first name, last name, email, username, and password fields. Not yet wired to the auth API.

### `GratitudeListContext`
React context (`gratitudListContext.tsx`) that:
- Fetches all gratitude entries from `GET /api/v1/gratitudes` on mount
- Passes a JWT token in the `Authorization: Bearer` header
- Exposes `myGratitude` array to all consumers

> **Note:** The JWT token is currently hardcoded as a development convenience. It will be replaced by dynamic token storage (localStorage/context) once auth forms are connected.

## Setup Instructions

### Prerequisites

- Node.js v22 (use nvm: `nvm use`)
- The [backend API](../gratitude-backend-app) running on `http://localhost:3000`

### Installation

1. Navigate to the frontend directory:
   ```bash
   cd gratitude-frontend-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file if needed for environment-specific config:
   ```bash
   cp .env.example .env   # if .env.example exists
   ```

### Development

Start the Vite dev server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173` (Vite default).

### Build

Compile TypeScript and bundle for production:
```bash
npm run build
```

Output is written to `dist/`.

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Backend Integration

The frontend connects to the backend at `http://localhost:3000/api/v1`.

### Current API usage

| Endpoint | Method | Used by |
|----------|--------|---------|
| `/api/v1/gratitudes` | GET | `gratitudListContext.tsx` |

### Planned API usage

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/v1/auth/register` | POST | `registerForm.tsx` |
| `/api/v1/auth/login` | POST | `loginForm.tsx` |
| `/api/v1/gratitudes` | POST | Add gratitude form |
| `/api/v1/gratitudes/:id` | PATCH | Edit gratitude inline |
| `/api/v1/gratitudes/:id` | DELETE | Delete button on card |

### Authentication

All gratitude API calls require a `Authorization: Bearer <token>` header. The token is obtained from `/api/v1/auth/login` and should be stored in `localStorage` or an auth context.

## Current Implementation Status

### ✅ Completed

- **UI Components:**
  - Responsive gratitude card grid (1 → 4 columns based on viewport)
  - Gratitude card with text truncation, icon buttons, tag chips
  - Search bar with icon and focus ring feedback
  - Tag cloud showing unique tags across all entries
  - Add gratitude placeholder button
  - Login form UI
  - Register form UI

- **State Management:**
  - `GratitudeListContext` fetches and exposes gratitude data to child components
  - Context provider pattern isolates fetch logic from presentation components

- **Infrastructure:**
  - Vite + React + TypeScript scaffold
  - TailwindCSS v4 with custom theme colors
  - `react-icons` for consistent icon usage (Feather icon set)
  - `.env` added to `.gitignore`

### ⚠️ In Progress / Known Limitations

1. **Hardcoded JWT token** in `gratitudListContext.tsx` — needs to be replaced with dynamic token from login flow
2. **Login/Register forms not connected** to backend auth API
3. **Edit/Delete buttons** on cards are UI-only — no API calls wired
4. **Add gratitude button** is UI-only — no form or API call
5. **Search input** is UI-only — no filtering logic implemented
6. **Tag filter** is UI-only — clicking a tag does nothing

### 🔮 Future Enhancements

- Auth context with login/register/logout flows
- Token storage in `localStorage` with expiry handling
- Edit gratitude modal or inline form
- Delete confirmation dialog
- Search filtering by title/details/tags
- Tag-based filtering of the gratitude grid
- Error boundary and loading states
- Toast notifications for CRUD feedback
- Pagination or infinite scroll

## Development Roadmap

### ✅ Phase 1: Basic UI
- [x] Card-based gratitude grid
- [x] Search bar and tag cloud
- [x] Component architecture with context provider

### ✅ Phase 2: UI Polish
- [x] Responsive grid layout (mobile → desktop)
- [x] Text truncation for consistent card height
- [x] react-icons integration (Feather set)
- [x] Focus ring on search input
- [x] Subtitles and semantic heading tags

### 🚧 Phase 3: Authentication (Current)
- [x] Login form UI
- [x] Register form UI
- [ ] Connect forms to backend `/api/v1/auth/*`
- [ ] Store JWT token in localStorage
- [ ] Auth context with `isAuthenticated`, `user`, `login`, `logout`
- [ ] Redirect to login when token is missing or expired
- [ ] Pass dynamic token in all API requests

### 📋 Phase 4: Full CRUD
- [ ] Add gratitude form (modal or page)
- [ ] Wire add form to `POST /api/v1/gratitudes`
- [ ] Edit gratitude (inline or modal) → `PATCH /api/v1/gratitudes/:id`
- [ ] Delete with confirmation → `DELETE /api/v1/gratitudes/:id`
- [ ] Optimistic UI updates after mutation

### 📋 Phase 5: Search & Filtering
- [ ] Client-side search filtering by title/details
- [ ] Tag-based filter toggle
- [ ] Loading and empty states

### 🧪 Phase 6: Testing & Quality
- [ ] Unit tests for context and utility functions (Vitest)
- [ ] Component tests (React Testing Library)
- [ ] E2E tests (Playwright or Cypress)
- [ ] CI/CD pipeline

## Scripts

```json
{
  "dev": "vite",
  "build": "tsc -b && vite build",
  "lint": "eslint .",
  "preview": "vite preview"
}
```

## License

Private project — All rights reserved

---

**Last Updated:** 2026-02-25
**Status:** Auth UI built — Backend integration in progress
**Version:** 0.3.0
