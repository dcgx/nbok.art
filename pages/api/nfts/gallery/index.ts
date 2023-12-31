import { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        res.redirect("/")
    } catch (e) {
        console.error(e)
    }
}

export default handler
