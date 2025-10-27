import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"
import mongoClientPromise from "./database/mongoClientPromise";
import { userMoidel } from "./models/user-model";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut

} = NextAuth({
    adapter: MongoDBAdapter(mongoClientPromise, { databaseName: process.env.ENVIRONMENT }),
    session: {
        strategy: "jwt"
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: {},
                password: {}
            },

            async authorize(credentials) {
                if (credentials == null) return null;

                try {
                    const user = await userMoidel.findOne({ email: credentials.email });

                    if (user) {
                        const isMatch = user.email === credentials.email;

                        if (isMatch) {
                            return user;
                        } else {
                            throw new Error("Email or Passwor not mismatch")
                        }
                    }
                    else {
                        throw new Error("User not found")
                    }

                } catch (err) {
                    throw new Error(err)
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ]
})