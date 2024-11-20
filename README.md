
# Real-Time Messaging and Collaboration Platform

This project is a fully functional real-time messaging and collaboration platform, designed for seamless communication and team management. Built with modern web technologies, it offers features like text, audio, and video channels, real-time message handling, and extensive customization options, all wrapped in a responsive and intuitive UI.

---

## Features

### Messaging
- **Real-time Messaging:** Send and receive messages instantly using Socket.io.
- **Attachments:** Share files, images, and other attachments via UploadThing.
- **Edit & Delete Messages:** Modify or remove messages in real time, updated across all users.

### Channels
- **Text Channels:** Communicate with your team in dedicated text channels.
- **Audio/Video Channels:** Host group audio and video calls seamlessly.

### 1:1 Communication
- **Direct Messaging:** Private conversations between members.
- **1:1 Video Calls:** Conduct one-on-one video calls.

### Member Management
- **User Roles:** Assign roles like Guest or Moderator to members.
- **Kick Members:** Remove disruptive members from servers or channels.

### Invite System
- **Unique Invite Links:** Generate unique links for server invitations.
- **Full Invite Workflow:** Supports link sharing, usage tracking, and membership management.

### Performance & UX
- **Infinite Scrolling:** Load messages in batches of 10 using `@tanstack/query` for optimized performance.
- **WebSocket Fallback:** Polling with alerts ensures smooth communication even in case of WebSocket failure.

### Customization
- **Server Customization:** Create and personalize servers with unique names, images, and settings.
- **Themes:** Switch between Light and Dark modes for an enhanced user experience.

### Responsive Design
- **Mobile Friendly:** Fully responsive UI that adapts to all screen sizes.
- **Modern Styling:** Beautiful design powered by TailwindCSS and ShadcnUI.

---

## Tech Stack

### Frontend
- **Next.js**: Framework for server-rendered and statically-generated applications.
- **React**: Library for building user interfaces.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **ShadcnUI**: Pre-styled components for building sleek interfaces.

### Backend
- **Socket.io**: Enables real-time, bi-directional communication.
- **Prisma**: ORM for efficient and type-safe database interactions.
- **PostgreSQL**: Reliable relational database hosted on Neon.

### Services
- **UploadThing**: For handling file uploads securely and efficiently.
- **Clerk**: User authentication and session management.

### Others
- **WebSockets**: Primary protocol for real-time communication.
- **Polling Alerts**: Fallback for WebSocket connection issues.

---

## Getting Started

### Prerequisites
- **Node.js**: Ensure you have the latest stable version installed.
- **PostgreSQL Database**: Set up your database and update the Prisma configuration.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env` file in the root directory and set up the required variables:
   ```env
   DATABASE_URL=your-postgresql-connection-url
   NEXT_PUBLIC_CLERK_FRONTEND_API=your-clerk-frontend-api
   CLERK_API_KEY=your-clerk-api-key
   ```

4. Apply database migrations:
   ```bash
   npx prisma migrate dev
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open your browser and navigate to `http://localhost:3000`.

---

## Usage

- **Create a Server:** Customize your server with a name, logo, and settings.
- **Start Messaging:** Send text messages, attachments, or initiate calls in channels.
- **Invite Members:** Generate invite links and grow your community.
- **Manage Roles:** Assign roles and moderate your server effortlessly.

---

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ShadcnUI](https://shadcn.dev/)
- [Socket.io](https://socket.io/)
- [UploadThing](https://uploadthing.com/)
- [Prisma](https://www.prisma.io/)
- [Clerk](https://clerk.dev/)
- [Neon](https://neon.tech/)
