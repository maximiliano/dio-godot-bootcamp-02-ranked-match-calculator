*(Disclaimer: For anyone wondering here, this is just a silly starting project for a bootcamp, don't mind this and move along)*

# Ranked Match Calculator

You can use the super duper ranked match calculator to get the net wins and rank of a player!

## Requirements
You must `node` properly installed and configured.

## How to use

### Passing arguments in command line

Pass the hero wins and losses as two numbers separated by space:

    # node src/rank.js 31 12

Output:

    ==============================================
    The hero has [19] net wins and is Rank Silver!
    ==============================================

### Answering prompt

Run the command line without arguments and the program will prompt the user for the matches information:

    # node src/classify.js

Output:

    Please enter the number of wins: 55
    Please enter the number of losses: 18
    ============================================
    The hero has [37] net wins and is Rank Gold!
    ============================================

Now go and test this to discover all the ranks!
