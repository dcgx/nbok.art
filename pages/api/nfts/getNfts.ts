// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    nfts: any[] // Add the 'nfts' property to the Data interface
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const nfts = []
    res.status(200).json({ nfts })
}
