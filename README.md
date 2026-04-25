# AuthApp

A simple **React Native** authentication demo app featuring **Sign Up**, **Login**, and **Home** screens. All accounts and sessions are persisted locally using AsyncStorage — no backend required.

## Tech Stack

- **React Native 0.85** + **React 19** + **TypeScript**
- **React Navigation v7** (native stack) — handles `AuthNavigator` (Login/SignUp) and `AppNavigator` (Home)
- **Context API** (`AuthProvider`) — global auth state
- **AsyncStorage** — local persistence for account list & session
- **react-native-linear-gradient** — gradient backgrounds
- **react-native-safe-area-context** & **react-native-screens** — safe areas & native screens
- **react-native-responsive-dimensions** — responsive sizing
- **@tabler/icons-react-native** — icons
- **ESLint**, **Prettier**, **Jest** — tooling

## Installation (Android)

> iOS setup will be added later.

**Prerequisites:** Node ≥ 22.11, Yarn, Android Studio with an emulator or a connected device. Make sure you have completed the [React Native environment setup](https://reactnative.dev/docs/set-up-your-environment).

```sh
# 1. Install dependencies
yarn install

# 2. Start Metro
yarn start

# 3. In a new terminal, run the app on Android
yarn android
```

## Features

### Sign Up
- Fields: **username**, **email**, **password** (with show/hide toggle).
- Client-side validation: required fields, valid email format, password ≥ 6 characters.
- Rejects duplicate emails.
- On success, the new account is appended to the local account list and the user is redirected to Login.

### Login
- Fields: **email**, **password** (with show/hide toggle).
- Same client-side validation as Sign Up.
- Matches credentials against the saved account list.
- On success, saves the session and navigates to Home.

### Home
- Shows the logged-in user's **username** and **email**.
- **Logout** button clears the session and returns to Login.

## How It Works

The app uses **AsyncStorage** with three keys:

| Key | Purpose |
| --- | --- |
| `ACCOUNT_LIST` | Array of all registered accounts |
| `USER_INFO` | Currently logged-in user (username + email) |
| `IS_AUTHENTICATED` | Session flag (`'true'` when logged in) |

**Sign Up flow**

1. Read `ACCOUNT_LIST` from AsyncStorage (default `[]`).
2. Check whether the email already exists — if yes, throw an error.
3. Append the new `{ username, email, password }` to the list and save it back.

**Login flow**

1. Read `ACCOUNT_LIST` from AsyncStorage.
2. Use `.find()` to match an account where both `email` and `password` are equal to the input.
3. If no match → show "Invalid email or password".
4. If matched → save `USER_INFO` and `IS_AUTHENTICATED='true'`, update context, and the navigator switches to the Home stack.

**Session restore**

On app launch, `AuthProvider` reads `USER_INFO` and `IS_AUTHENTICATED` from storage so the user stays logged in across restarts.

**Logout**

Removes `USER_INFO` and `IS_AUTHENTICATED` (the account list is preserved so the user can log in again later).

## Project Structure

```
src/
├── components/    # Reusable UI (Button, FormInput, HeaderScreen, ...)
├── constans/      # Colors and constants
├── context/Auth/  # AuthContext + AuthProvider (login, signUp, logout)
├── navigation/    # AuthNavigator, AppNavigator, root index
├── pages/         # Login, SignUp, Home screens
└── utils/         # storage helpers (AsyncStorage wrapper)
```
