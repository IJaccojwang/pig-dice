# Pig Dice
#### This game is a two player game consisting of rounds and a final score. Players roll the dice a number of times, provided they don't land on 1 and get a cumulative round score which they can "hold" to add to their game score. The first player to reach the specified points(usually 100) wins, 0/2019
#### By **Ian Jaccojwang**
## Description
The users load the website and get instructions on how to play the game. They enter their names, or in the case of one player, a single name to play against the computer. They will roll the dice, starting from player 1, with the option of holding their score at each round, provided a 1 is not rolled. The users can decide to restart the game which resets all scores.
## Setup/Installation Requirements
* Go to the deployed site on: https://ijaccojwang.github.io/pig-dice/
* Play either as single user(against computer) or as two players(against a friend)
* Roll the dice and have fun!
## Future Improvemnts
I would li
## Technologies Used
This project was coded in:
* Html
* CSS
* JavaScript
Bootsrtap and Jquery were used to integrate more functionality.
## Behaviour driven development/ input and output checking
* The users will load the page and get a log in form to chose single or two player then enter their details.
* Each player will get their turn to roll the dice according to the rules
* The program will calculate the player's scores continuously and alert immediately when one player gets 100 points.

| Behaviour                                                           | Sample input                   | Expected output                                                    |
|---------------------------------------------------------------------|--------------------------------|--------------------------------------------------------------------|
| Players click roll to roll dice and get random number               | Click Roll                     | Display random number in roll and add to player's round            |
| If one is rolled, round scores reset                                | Click roll(get 1)              | Reset's current players round score and passed turn to next player |
| Players can hold their score to add it to total and avoid losing it | Click hold                     | Accumulated score is added to player's game score                  |
| Once one player is at 100, the game shows winner and stops          | Click hold(reaches/passes 100) | Winner is announced, roll/hold disabled                            |
## Support and contact details
For any questions, troubleshooting or contributions,  find me on:
* Mobile: +254702178825
* Email: danolago@gmail.com
### License
MIT License
Copyright (c) {2019} **Ian Olago Jaccojwang**
