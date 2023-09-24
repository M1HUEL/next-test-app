import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github";

const handler = NextAuth({
    // Configuración de autenticación
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
    ],
    pages: {
      signIn: '/',
      signOut: '/'
    },
    callbacks: {
        async signIn(user, account, profile) {
            // Tu lógica para manejar el inicio de sesión aquí
            return true; // Devuelve true para permitir el inicio de sesión o false para denegarlo
        },
        async onError(error, context) {
            // Tu lógica para manejar errores aquí
            console.error('Error de autenticación:', error)
        }
    },
    session: {
        // ...
    },
    // Otras configuraciones personalizadas aquí
})

export { handler as GET, handler as POST }