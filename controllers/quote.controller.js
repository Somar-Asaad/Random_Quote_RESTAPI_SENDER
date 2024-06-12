const Quote = require("../models/quote.model");

async function getRandomQuote(req, res, next) {
  try {
    let quote = await Quote.getRandomQuotes();
    res.json({
      quote: quote,
    });
  } catch (e) {
    console.log(e);
    return next(e);
  }
}

module.exports = { getRandomQuote: getRandomQuote };
