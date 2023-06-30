import { NextApiRequest, NextApiResponse } from "next"
import { createPagesServerClient } from "@supabase/auth-helpers-nextjs"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { code } = req.query
        console.log({ code })
        if (code) {
            const supabase = createPagesServerClient({ req, res })
            await supabase.auth.exchangeCodeForSession(String(code))
        }

        res.redirect("/")
    } catch (e) {
        console.error(e)
    }
}

export default handler
