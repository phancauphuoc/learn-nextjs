// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxy from 'http-proxy'

type Data = {
    name: string
};

const proxy = httpProxy.createProxyServer();

// se khong parser nua, ma chuyen thang len sever luong
export const config = {
    api: {
        bodyParser: false,
    },
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    //don't send cookies to API sever
    req.headers.cookie = ''

    // /api/students
    // https://js-post-api.herokuapp.com/api/students

    proxy.web(req, res, {
        target: process.env.API_URL,
        changeOrigin: true,
        selfHandleResponse: false
    })

    // res.status(200).json({ name: 'PATH - AT all here' })
}
