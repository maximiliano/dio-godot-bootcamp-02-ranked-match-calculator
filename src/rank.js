const readline = require("node:readline/promises");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function rankVictories(wins, losses) {
  const netWins = calculateNetWins(wins, losses);
  const rank = calculateRank(wins);
  showResults(netWins, rank);
}

function calculateNetWins(wins, losses) {
  if (wins <= losses) {
    return 0;
  }
  return wins - losses;
}

function calculateRank(wins) {
  if (wins <= 10) {
    return "Iron";
  } else if (wins >= 11 && wins <= 20) {
    return "Bronze";
  } else if (wins >= 21 && wins <= 50) {
    return "Silver";
  } else if (wins >= 51 && wins <= 80) {
    return "Gold";
  } else if (wins >= 81 && wins <= 90) {
    return "Diamond";
  } else if (wins >= 91 && wins <= 100) {
    return "Legendary";
  } else if (wins >= 101) {
    return "Immortal";
  }
  return "Iron";
}

function showResults(netWins, rank) {
  const message = `The hero has [${netWins}] net wins and is Rank ${rank}!`;
  console.log("=".repeat(message.length));
  console.log(message);
  console.log("=".repeat(message.length));
}

async function getMatchesInfo() {
  const wins = await rl.question(`Please enter the number of wins: `);
  const losses = await rl.question(`Please enter the number of losses: `);
  rl.close();
  return { wins, losses };
}

async function execute() {
  if (process.argv.length === 2) {
    // We've got no arguments, ask user for the values
    const info = await getMatchesInfo();
    rankVictories(info.wins, info.losses);
  } else if (process.argv.length === 4) {
    // We've got 2 arguments: wins and losses
    wins = parseInt(process.argv[2]);
    losses = parseInt(process.argv[3]);

    rankVictories(wins, losses);
  } else {
    // We've got an invalid number of arguments
    console.log("Heeey, you should pass two arguments: wins and losses");
    console.log("Like this: rank.js 33 12");
  }
}

execute();
