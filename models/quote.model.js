const dataBase = require("../data/database");

class Quote {
  static async getRandomQuotes() {
    const quotes = await dataBase.getDB().collection("quotes").find().toArray();
    const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomQuoteIndex];
    console.log(randomQuote);
    return randomQuote.text;
  }
}

module.exports = Quote;
