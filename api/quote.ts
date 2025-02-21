import { VercelRequest, VercelResponse } from "@vercel/node";

const quotes = [
	{
		quote: "The only limit to our realization of tomorrow is our doubts of today.",
		author: "Franklin D. Roosevelt",
	},
	{
		quote: "In the middle of every difficulty lies opportunity.",
		author: "Albert Einstein",
	},
	{
		quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
		author: "Winston Churchill",
	},
	{
		quote: "Do what you can, with what you have, where you are.",
		author: "Theodore Roosevelt",
	},
	{ quote: "Happiness depends upon ourselves.", author: "Aristotle" },
];

export default function handler(req: VercelRequest, res: VercelResponse) {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET");

	// this will show up in Vercel logs
	console.log("Request received:", req.url);

	const randomIndex = Math.floor(Math.random() * quotes.length);
	const selectedQuote = quotes[randomIndex];

	res.status(200).json(selectedQuote);
}
