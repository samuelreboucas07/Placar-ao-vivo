

# Placar ao vivo

* [Overview](#overview)

* [Operation](#operation)

* [Technologies](#technologies)

* [How to use](#How-to-use)

* [Note](#note)

# Overview

In this project an application was developed that is based on the free course provided by the platform [DevPleno](https://devpleno.com/), which exemplifies the use of the JavaScript library [Socket.io](https://socket.io/) to allow two-way communication between web applications in real time.

## Operation
The execution of this project is divided into three main parts.

Team management is performed so that it is possible to change the score of the match.

![management](https://github.com/samuelreboucas07/Placar-ao-vivo/blob/master/assets/gerenciamento.gif)

From the moment the score is changed, users who had the main screen running will see the result change in real time.

![home](https://github.com/samuelreboucas07/Placar-ao-vivo/blob/master/assets/main.gif)

The same will occur with users who are on the screen for following a specific match, as soon as the score is changed it will be updated both in the top bar and in the title of the page where the result is expressed.o.

![details](https://github.com/samuelreboucas07/Placar-ao-vivo/blob/master/assets/detalhes.gif)

This real-time update of the scoreboard occurs thanks to the Socket.io library.

## Technologies

* [Angular](https://angular.io/)
* [NodeJs](https://nodejs.org/en/)
* [Socket.io](https://socket.io/)
* [Lowdb](https://github.com/typicode/lowdb)

## How to use

Initially it is necessary to clone the present repository:

``` https://github.com/samuelreboucas07/Placar-ao-vivo.git ```

**Start server** 
```
cd back-end
npm install 
npm start
```
**Initial Web Project**
```
cd front-end
npm install 
ng serve
```

## Note

The course held by DevPleno used the EJS language to develop the front-ent application, however, in order to address another technology, the present project used version 7 of the angular framework.
