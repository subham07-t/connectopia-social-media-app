
# Welcome to Connectopia messenger app 👋
![Screenshot 2023-11-06 220329](https://github.com/subham07-t/connectopia-social-media-app/assets/82716446/24179125-98a9-4d24-b1e0-2cd192a994fa)

Introducing our real-time messaging and chat application, designed for seamless communication. 

Our app offers features like message notifications, sleek design with Tailwind, full responsiveness, multiple authentication options, file/image uploads, read receipts, user status tracking, group chats, message attachments, user profile customization, and more.

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


## Tech Stack

- **Framework:** [﻿Next.js](https://nextjs.org/)
- **Styling:** [﻿Tailwind CSS](https://tailwindcss.com/)
- **State Management:** [zustand](https://zustand-demo.pmnd.rs/)
- **Form Handle:** [﻿React Hook Form](https://react-hook-form.com/) 
- **File Uploads:** [Cloudinary](https://cloudinary.com/)
- **ORM:** [Prisma](https://www.prisma.io/)
- **Database:** [MongoDB](https://www.mongodb.com/)

## Features

- [x] Authentication with NextAuth , enhancing security with Google and GitHub OAuth authentication layers.
- [x] Implementing real-time data update for instant messaging using **Pusher**.
- [x] Enable users to chat individually or in groups effectively, while keeping track of their online status and message read receipts for better communication.
- [x] Effortlessly handle file uploads using **Cloudinary** CDN, and easily share attachments within messages.
- [x] Deliver comprehensive user profiles and chat room management for an exceptional chat experience.
  
## Author

👤 **Subham haldar**

* Github: [@Subham07-t](https://github.com/Subham07-t   )
* LinkedIn: https://linkedin.com/in/subham-haldar

