import {API_URL} from "../../../config";
import cookie from "cookie";


const handler = async (req, res) => {
    if (req.method !== "POST") {
        res.status(405).json({message: `Method ${req.method} is not allowed.`});
        return;
    }

    const {identifier, password} = req.body

    const strapiRes = await fetch(`${API_URL}/auth/local`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            identifier,
            password,
        }),
    })

    const data = await strapiRes.json()
    const options = {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'production',
        maxAge: 60 * 60 * 24 * 7,
        sameSite: "strict",
        path: "/"
    }

    if (strapiRes.ok) {
        // @todo - Set cookie
        res.setHeader('Set-Cookie', cookie.serialize("token", data.jwt, options))

        res.status(200).json({user: data.user})
    } else {
        res.status(data.statusCode).json({message: data.message[0].messages[0].message})
    }
}


export default handler;