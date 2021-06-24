import events from "./data.json";

const handler = (req, res) => {
    if (req.method !== "GET") {
        res.status(405).json({message: `Method ${req.method} is not allowed.`});
        return;
    }

    res.status(200).json(events);
}

export default handler;