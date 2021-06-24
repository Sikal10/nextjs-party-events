const events = require("./data.json");

const handler = (req, res) => {
    if (req.method !== "GET") {
        res.status(403).json({message: `The method ${req.method} is not allowed.`});
        return;
    }

    const {slug} = req.query;

    const event = events.filter(event => event.slug === slug);

    res.status(200).json(event)
};

export default handler;