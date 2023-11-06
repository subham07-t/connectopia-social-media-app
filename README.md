
# Welcome to Connectopia messenger app 👋
![Screenshot 2023-11-06 220329](https://github.com/subham07-t/campus-keeper-UMS-app/assets/82716446/c152a814-4c66-463e-84d1-d200894dbf7e)

Introducing our real-time messaging and chat application, designed for seamless communication. Our app offers features like message notifications, sleek design with Tailwind, animations, full responsiveness, multiple authentication options, file/image uploads, client form validation, error handling, read receipts, user status tracking, group chats, message attachments, user profile customization, and more.

What sets us apart is the ability to directly access the database from server React components, eliminating the need for a separate API layer. We've also streamlined chat room and channel management, making it easy to organize your conversations.

Experience a robust and feature-rich messaging platform with us.


### ✨ [Demo](https://connectopia-social-media-app.vercel.app)


## Run Locally

Clone the project

```sh
  https://github.com/subham07-t/connectopia-social-media-app.git
```

Go to the project directory

```sh
  cd connectopia-social-media-app
```

Install dependencies

```sh
  npm install
```

Setup .env file

```sh
  DATABASE_URL=
  NEXTAUTH_SECRET=
  GITHUB_ID=
  GITHUB_SECRET=
  GOOGLE_CLIENT_ID=
  GOOGLE_CLIENT_SECRET=
  NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
  PUSHER_APP_ID=
  NEXT_PUBLIC_PUSHER_KEY=
  PUSHER_SECRET=
```

Setup Prisma

```sh
  npx prisma db push
```

Start the server

```sh
  npm run dev
```


## Tools used

- Next 13
- TypeScript
- NextAuth
- zustand
- react-hook-form
- Cloudinary
- Node JS
- Prisma
- MongoDB
- Pusher

## Features

- Enabling real-time messaging with Pusher, reinforced by multi-tier authentication through Google and GitHub OAuth.
- Seamlessly manage file uploads with Cloudinary CDN, including the sharing of attachments within messages.
- Empower users with robust group and one-on-one chat capabilities.
- Monitor user online/offline status and message read receipts for effective communication.
-   Deliver comprehensive user profiles and chat room management for an exceptional chat experience
  
## Lessons Learned

- How to use the NextAuth
- How to use react-hook-form and cloudinary
- How to use the Pusher and zustand  


## Author

👤 ** Subham haldar  **

* Github: [@Subham07-t   ](https://github.com/Subham07-t   )
* LinkedIn: https://linkedin.com/in/subham-haldar-a8367221

