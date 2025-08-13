# 🦇 Bat Chat

<p align="center">
  <img src="/favicon.png" alt="Bat Chat Logo" width="80" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/build-passing-brightgreen" alt="Build Status"/>
  <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License"/>
  <img src="https://img.shields.io/badge/made%20with-React-blue" alt="React"/>
  <img src="https://img.shields.io/badge/Powered%20by-Firebase-orange" alt="Firebase"/>
</p>

---

## ✨ Features

- 🔒 User authentication (sign up, sign in)
- 💬 Real-time chat with instant updates
- 🖼️ Profile image upload and avatar support
- 📱 Responsive and modern UI
- 🔔 Toast notifications for feedback
- 😀 Emoji picker for messages
- ⚡ Service worker and PWA-ready (optional)
- 🧩 Modular component structure
- 🗂️ State management with Zustand

---

## 🚀 Tech Stack

- **React 18**
- **Vite**
- **Firebase** (Auth, Firestore, Storage)
- **Zustand** (state management)
- **React Toastify**
- **Emoji Picker React**

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- npm

### Installation

```sh
# Clone the repository
$ git clone <your-repo-url>
$ cd bat-chat

# Install dependencies
$ npm install
```

### Running Locally

```sh
$ npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

### Building for Production

```sh
$ npm run build
```

The production-ready files will be in the `dist/` folder.

---

## 📝 Usage

- **Sign up** with your email, username, and password.
- **Upload a profile image** (avatar) during registration.
- **Start chatting** with other users in real time.
- **Use emojis** and enjoy instant notifications.
- **Sign in/out** anytime to manage your account.

---

## 📁 Project Structure

```text
├── public/           # Static assets (images, icons, screenshots)
├── src/
│   ├── components/   # React components (chat, login, list, etc.)
│   ├── lib/          # Firebase config, stores, upload helpers
│   ├── App.jsx       # Main app component
│   ├── main.jsx      # Entry point
│   └── index.css     # Global styles
├── index.html        # Main HTML file
├── package.json      # Project metadata and scripts
├── vite.config.js    # Vite configuration
└── README.md         # Project documentation
```

---

## 🔥 Firebase Setup

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
2. Enable **Authentication** (Email/Password), **Firestore Database**, and **Storage**.
3. Copy your Firebase config and update `src/lib/firebase.js`.

---

## 🎨 Customization

- Update `public/favicon.png` and `public/avatar.png` for your branding.
- Add your own screenshots to `public/` and update the links in this README.
- Modify styles in `src/index.css` and component CSS files for a unique look.
- Add or update images in the `public/` folder as needed.

---

## 🧩 Troubleshooting

- **Blank screen or errors?**
  - Make sure you have run `npm install` and are using the correct Node.js version.
  - Check the browser console for errors.
  - Ensure your Firebase configuration is correct in `src/lib/firebase.js`.
- **Images not loading?**
  - Confirm the image files exist in the `public/` folder and paths are correct.
- **Build issues?**
  - Delete the `dist/` folder and run `npm run build` again.

---

## ❓ FAQ

**Q: Can I use this project for my own chat app?**  
A: Yes! Feel free to fork, modify, and use it for your own projects.

**Q: How do I deploy this app?**  
A: Build the app with `npm run build` and deploy the contents of the `dist/` folder to your preferred static hosting (e.g., Vercel, Netlify, Firebase Hosting).

**Q: How do I add more features?**  
A: You can add new components in `src/components/` and update the state management in `src/lib/` as needed.

---

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

---

## 🙏 Credits

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Firebase](https://firebase.google.com/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [Emoji Picker React](https://github.com/ealush/emoji-picker-react)

---

## 📄 License

This project is licensed under the MIT License.
