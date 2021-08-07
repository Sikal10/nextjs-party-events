import cookie from "cookie";


const handler = async (req, res) => {
    if (req.method !== "POST") {
        return res.status(405).json({message: `Method ${req.method} is not allowed.`});
    }

    const options = {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'production',
        expires: new Date(0),
        sameSite: "strict",
        path: "/"
    }

    // @todo - Destroy cookie
    res.setHeader('Set-Cookie', cookie.serialize("token","", options));

    res.status(200).json({message: "Success"})

}


export default handler;