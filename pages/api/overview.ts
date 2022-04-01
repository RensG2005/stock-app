import { getSession } from "next-auth/react"
import alpha from "../../lib/alphavantage";

const handler = async (req, res) => {
    if(req.method === "GET") {
        const session = getSession({ req });
        if(!session) res.status(500).json({ error: "Not signed in" })
        const data = await alpha.experimental("OVERVIEW", {
            symbol: "AAPL",
        })
        res.json(data)
    } else {
        res.status(500).json({error: "this endpoint only accepts GET requests"})
    }
}


export default handler