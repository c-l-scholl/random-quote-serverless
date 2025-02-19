// import { VercelRequest, VercelResponse } from "@vercel/node";
import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/quote", (req: Request, res: Response) => {
	const quotes = [
		{
			quote:
				"The only limit to our realization of tomorrow is our doubts of today.",
			author: "Franklin D. Roosevelt",
		},
		{
			quote: "In the middle of every difficulty lies opportunity.",
			author: "Albert Einstein",
		},
		{
			quote:
				"Success is not final, failure is not fatal: it is the courage to continue that counts.",
			author: "Winston Churchill",
		},
		{
			quote: "Do what you can, with what you have, where you are.",
			author: "Theodore Roosevelt",
		},
		{ quote: "Happiness depends upon ourselves.", author: "Aristotle" },
	];

	const randomIndex = Math.floor(Math.random() * quotes.length);
	res.json(quotes[randomIndex]);
});
