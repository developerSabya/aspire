
# Aspire Business Financial Dashboard

Aspire is a responsive business financial dashboard built with Vue 3, Quasar Framework, and Pinia. It provides a modern UI for managing company cards, payments, credit, and settings, with a seamless experience on both desktop and mobile devices.

## Features

- **Dashboard Home:** Company balance, cards summary, recent transactions, and spend overview chart.
- **Cards Management:** View, create, and manage personal and company cards with carousel and actions (freeze, set limit, add to GPay, replace, cancel).
- **Payments:** Manage payees, make payments, view recent payments, and see payment summary charts.
- **Credit:** View credit limits, available credit, recent credit activity, and utilization charts.
- **Settings:** Profile, company info, notification preferences, and security options.
- **Navigation:**
	- Desktop: Sidebar navigation (NavSection)
	- Mobile: Bottom navigation bar (MobileBottomNav)
- **Fully Responsive:** Optimized layouts for desktop and mobile screens.
- **Mock Data:** All data is simulated for demo purposes.

## Tech Stack

- Vue 3 + Composition API
- Quasar Framework (UI components, layout, responsiveness)
- Pinia (state management)
- Vue Router

## Project setup

```bash
npm install
```

### Compiles and hot-reloads for development

```bash
npm run serve
```

### Compiles and minifies for production

```bash
npm run build
```

### Run your unit tests

```bash
npm run test:unit
```

## Folder Structure

- `src/components/` — UI components (cards, navigation, forms, etc.)
- `src/views/` — Main pages (Home, Cards, Payments, Credit, Settings)
- `src/stores/` — Pinia stores for cards, transactions, etc.
- `src/assets/` — SVGs and images

## Customization

You can easily adapt the mock data and UI to fit your business needs. For more details, see the Quasar and Vue documentation.

---

See [Configuration Reference](https://cli.vuejs.org/config/).
