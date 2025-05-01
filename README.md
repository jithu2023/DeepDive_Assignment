# 🚀 DeepDive Auth App — Next.js 13 + TypeScript + Material UI

A modern, responsive authentication app built with **Next.js 13 (App Router)**, **TypeScript**, and **Material UI**, featuring Google OAuth integration via **NextAuth.js**. This application includes:

- `/landing-page`: A public landing page with a Google sign-in option.
- `/personal-page`: A protected user dashboard displaying profile information post-login.

---

## 📌 Features

- ✅ **Next.js 13 with App Router**: Utilizing the latest routing capabilities.
- ✅ **TypeScript**: Ensuring type safety and better developer experience.
- ✅ **Material UI (MUI)**: For a consistent and responsive UI design.
- ✅ **Google OAuth Login**: Seamless authentication using NextAuth.js.
- ✅ **Protected Routes**: Restricting access to authenticated users.
- ✅ **Responsive Design**: Optimized for various screen sizes.
- ✅ **Custom Footer**: Includes services, help sections, newsletter signup, and social/payment icons.
- ✅ **Clean Folder Structure**: Organized using the `src/` directory.

---

## 📷 Preview

### Landing Page

- Google Sign-In button.
- Branded welcome section with an image.
- Newsletter signup form.
- Footer with services, help, social media, and payment icons.

### Personal Page

- User avatar.
- Personalized welcome message.
- Sign-out button.

---

## 🔐 Google OAuth Setup

The application uses the following Google OAuth credentials:

- **Client ID**: `167946801263-sjrtd421s1mvctiolac7eos9gihrc08m.apps.googleusercontent.com`
- **Client Secret**: `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`
- **Redirect URI**: `http://localhost:3000/api/auth/callback/google`

Ensure these are correctly set in your environment variables.

---

## 🧑‍💻 Technologies Used

| Technology      | Purpose                             |
|-----------------|-------------------------------------|
| Next.js 13      | React framework with App Router     |
| TypeScript      | Type safety and developer tooling   |
| Material UI     | UI components and styling           |
| NextAuth.js     | Authentication with Google OAuth    |
| React Icons     | Social and payment icons            |
| MUI Grid/Box    | Layout and spacing                  |

---

## 📁 Folder Structure

```
src/
├── app/
│   ├── landing-page/
│   ├── personal-page/
│   └── layout.tsx
├── components/
│   ├── Navbar.tsx
│   └── Footer.tsx
├── styles/
│   └── globals.css
├── lib/
│   └── auth.ts (NextAuth configuration)
├── pages/
│   └── api/
│       └── auth/
│           └── [...nextauth].ts
```

---

## 🛠 Installation and Running Locally

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/deepdive-auth-app.git
   cd deepdive-auth-app
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env.local` file in the root directory with the following content:

   ```
   GOOGLE_CLIENT_ID=167946801263-sjrtd421s1mvctiolac7eos9gihrc08m.apps.googleusercontent.com
   GOOGLE_CLIENT_SECRET=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
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-random-secret
   ```

4. **Run the development server**:

   ```bash
   npm run dev
   ```

5. **Access the application**:

   Open [http://localhost:3000/landing-page](http://localhost:3000/landing-page) in your browser.

---

## 🧪 Testing the Application

- Navigate to `/landing-page`.
- Click on **Sign in with Google**.
- Upon successful login, you'll be redirected to `/personal-page`.
- View your profile information and a personalized welcome message.
- Click **Sign Out** to return to the landing page.
- Attempting to access `/personal-page` without authentication will redirect you back to `/landing-page`.

---

## ✨ Highlights for Interviewers

This project demonstrates:

- **Modern Next.js 13 features**: Utilizing the App Router and `src/` directory structure.
- **TypeScript proficiency**: Ensuring type safety across components and pages.
- **Material UI expertise**: Implementing responsive and accessible UI components.
- **Authentication flows**: Securely handling login and protected routes with NextAuth.js.
- **Clean code architecture**: Organized folder structure and reusable components.
- **Responsive design**: Ensuring usability across various devices and screen sizes.

---

## 📦 Dependencies

- `next` `13+`
- `react`, `react-dom`
- `@mui/material`, `@mui/icons-material`
- `next-auth`
- `react-icons`

---

## 🤝 Author

Built with ❤️ by **Jithumon Jacob**  
[GitHub Profile](https://github.com/jithumonjacob)

---

```

Feel free to customize this `README.md` further to match your project's specifics or personal preferences. Let me know if you need assistance with any other part of your project! 