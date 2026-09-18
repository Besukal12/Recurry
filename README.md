# Recurrly

Recurrly is a mobile subscription-tracking experience built with Expo and React Native. It gives users a calm, visual way to understand recurring spending, review active subscriptions, and keep renewal habits in view.

The project currently focuses on the product experience and screen flow. Data is local mock data, and authentication is represented by validated UI flows rather than a connected identity provider or API.

## Product Highlights

- Home dashboard with balance, next renewal, upcoming subscriptions, and the full subscription list
- Horizontal upcoming-renewal rail with reusable subscription cards
- Expandable subscription cards with plan, category, renewal, payment, and status details
- Subscriptions library with category filters for Design, Developer Tools, and AI Tools
- Insights dashboard with monthly recurring spend, category breakdowns, and quick metrics
- Settings screen with profile details, notification toggles, weekly digest preference, and app preferences
- Sign-in and sign-up screens with custom font loading, local validation, password visibility controls, and route navigation
- Consistent visual system built around a warm background, coral accent, mint subscription state, and Plus Jakarta Sans typography

## Tech Stack

- Expo SDK 57
- React Native 0.86
- React 19
- TypeScript
- Expo Router
- NativeWind 5 RC with Tailwind CSS 4
- `expo-font` with Plus Jakarta Sans font files
- `react-native-safe-area-context`
- Day.js for subscription date formatting
- pnpm for package management

## Requirements

- Node.js compatible with the installed Expo SDK
- pnpm
- Expo CLI through the local project command
- Android Studio and an Android emulator for Android development, or Xcode and an iOS simulator for iOS development
- Expo Go or a development build for device testing

## Getting Started

Install dependencies:

```bash
pnpm install
```

Start the Expo development server:

```bash
pnpm start
```

Open the project on a platform:

```bash
pnpm android
pnpm ios
pnpm web
```

If Metro appears to use stale styles or assets, restart with a cleared cache:

```bash
pnpm exec expo start -c
```

## Project Structure

```text
app/
  _layout.tsx                 Root navigation, splash screen, and font loading
  (auth)/
    _layout.tsx               Authentication stack
    sign-in.tsx               Sign-in form and local validation
    sign-up.tsx               Account creation form and local validation
  (tabs)/
    _layout.tsx               Bottom tab navigation
    index.tsx                 Home dashboard
    subscriptions.tsx         Filterable subscription library
    insights.tsx              Spending insights dashboard
    settings.tsx              Preferences and account settings
  subscriptions/
    [id].tsx                  Subscription detail route

components/
  ListHeading.tsx              Shared list heading
  SubscriptionCard.tsx         Expandable subscription card
  UpcomingSubscriptionCard.tsx Upcoming subscription card

constants/
  data.ts                     Local subscription and tab data
  icon.ts                     Icon asset registry
  images.ts                   Image asset registry
  theme.ts                    Shared color and spacing tokens

assets/
  fonts/                      Plus Jakarta Sans font files
  icons/                      Product and tab icons
  images/                     Avatar and visual assets

global.css                    NativeWind theme and reusable component styles
lib/utils.ts                  Currency, date, and status formatting helpers
app.json                      Expo application configuration
metro.config.js               NativeWind Metro integration
postcss.config.mjs            Tailwind CSS PostCSS integration
```

## Navigation

The application uses Expo Router with route groups:

- `/(auth)/sign-in` and `/(auth)/sign-up` provide the authentication flow
- `/(tabs)` is the main application shell
- `/(tabs)/index` is the home tab
- `/(tabs)/subscriptions` is the subscription library
- `/(tabs)/insights` is the spending insights tab
- `/(tabs)/settings` is the settings tab
- `/subscriptions/[id]` is reserved for subscription detail navigation

The root layout loads all six Plus Jakarta Sans weights before rendering the navigation stack and hides the splash screen after fonts are ready. NativeWind font aliases such as `font-sans-semibold` map to those registered families in `global.css`.

## Data and Authentication Scope

The current app uses local constants in `constants/data.ts` for demonstration data. There is no persistence layer, remote API, database, or authentication provider connected yet.

The auth forms provide:

- Required-field validation for sign-in
- Name, email, and minimum password validation for sign-up
- Password visibility toggles
- Navigation to the main tab experience after a valid local submission

For production use, replace the local submit handlers with an authentication service, persist the session, and protect the tab routes with a session-aware layout.

## Design System

Recurrly uses a compact visual system defined in `global.css` and `constants/theme.ts`:

- Warm cream background for the main canvas
- Ink navy for primary text and navigation surfaces
- Coral for actions and balance emphasis
- Mint for subscription states and positive signals
- Card and border tokens for quiet grouping without dense decoration
- Reusable semantic classes for home, auth, subscription, insights, and settings surfaces

The interface is designed for scanning: large financial figures, restrained labels, clear section rhythm, and expandable detail only when needed.

## Development Commands

Check TypeScript without emitting files:

```bash
pnpm exec tsc --noEmit
```

Run lint and formatting checks:

```bash
pnpm lint
```

Apply the configured formatting and ESLint fixes:

```bash
pnpm format
```

Generate native projects when required by a platform workflow:

```bash
pnpm prebuild
```

## Adding a Subscription

Add a new item to `HOME_SUBSCRIPTIONS` in `constants/data.ts` with the `Subscription` shape:

```ts
{
  id: 'example-service',
  icon: icons.example,
  name: 'Example Service',
  plan: 'Pro Plan',
  category: 'Developer Tools',
  paymentMethod: 'Visa ending in 1234',
  status: 'active',
  startDate: '2026-01-01T10:00:00.000Z',
  price: 12.99,
  currency: 'USD',
  billing: 'Monthly',
  renewalDate: '2026-02-01T10:00:00.000Z',
  color: '#e8def8',
}
```

Add matching image imports to `constants/icon.ts` when the service needs a new icon asset.

## Known Limitations

- Subscription data is static and resets when the app restarts.
- Sign-in and sign-up are UI-only flows and do not create or verify accounts.
- Settings controls currently manage local screen state only.
- The Google sign-in action is visual and is not connected to OAuth.
- Insights are calculated from the local sample data and are not historical analytics.
- The subscription detail route is present for future detail-page work.

## Next Steps

1. Add a persistence layer for subscriptions and preferences.
2. Connect authentication and session management.
3. Protect the main tab routes behind an authenticated session.
4. Add create, edit, pause, and delete subscription workflows.
5. Replace sample insight calculations with historical transaction data.
6. Add unit and component tests for formatting, validation, filtering, and expansion behavior.
7. Add platform builds and release configuration through EAS when the backend is ready.

## License

No license has been specified for this project yet.
