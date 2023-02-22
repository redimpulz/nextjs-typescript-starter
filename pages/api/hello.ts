// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const text = await (
    await fetch('https://colonista.official.ec/blog/feed')
  ).text()
  res.setHeader('Content-Type', 'application/xml')
  res.end(text)
}
