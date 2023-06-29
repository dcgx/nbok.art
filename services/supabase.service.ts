import { createClient } from "@supabase/supabase-js"

type Provider = "google" | "github"

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

export const signInWithProvider = async (provider: Provider) => {
    try {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: provider,
        })
        if (error) throw new Error("An error ocurred during authentication")
        return data
    } catch (err) {
        console.log(err)
    }
}

export const logout = async () => {
    try {
        const { error } = await supabase.auth.signOut()
        if (error) throw new Error("An error ocurred during logout")
    } catch (error) {
        console.error(error)
    }
}
