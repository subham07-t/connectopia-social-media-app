import bcrypt from "bcrypt"
import NextAuth,{NextAuthOptions} from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"


import prisma from "@/app/libs/prismadb"




export const authOptions:NextAuthOptions = {
    adapter:PrismaAdapter(prisma),
    providers:[
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }), 
         GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
          }),
          CredentialsProvider({
            name: "credentials",
            credentials: {
              username: { label: "email", type: "text"},
              password: { label: "password", type: "password" }
            },
            async authorize(credentials:any) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error('Invalid credentials');
                  }
        
                  const user = await prisma.user.findUnique({
                    where: {
                      email: credentials.email
                    }
                  });

                  if (!user || !user?.password) {
                    throw new Error('Invalid credentials');
                  }

                  const isCorrectPassword = await bcrypt.compare(
                    credentials.password,
                    user.password
                  );

                  if (!isCorrectPassword) {
                    throw new Error('Invalid credentials');
                  }

                  return user;
              
            }
          })
    ],
    debug: process.env.NODE_ENV === 'development',
    session: {
      strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
}


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };