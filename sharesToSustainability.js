const fundamentus = require("fundamentus-unofficial-api");

const twoDecimalPlaces = (number) => Math.round(number * 100) / 100;

const getInfo = async ({ ticker }) => {
  const {
    divYield: dividendYield,
    cotacao: sharePrice,
  } = await fundamentus.fetch(ticker);

  const dividendsPerShare = twoDecimalPlaces(sharePrice * dividendYield);

  const numeroExatoDeCotasAteSustentabilidade = sharePrice / dividendsPerShare;
  const sharesToSustainability = Math.ceil(
    numeroExatoDeCotasAteSustentabilidade
  );

  console.log({
    sharePrice,
    dividendYield,
    dividendsPerShare,
    sharesToSustainability,
  });
};

const ticker = process.argv[2];

getInfo({
  ticker: ticker,
}).catch(console.log);
