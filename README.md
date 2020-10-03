
# Aplicação Socket.io

No presente projeto foi desenvolvido uma aplicação que tem como base o curso gratuito disponibilizado pela plataforma [DevPleno](https://devpleno.com/), o qual exemplifica o uso da bibliotexa JavaScript [Socket.io](https://socket.io/) para permitir a comunicação bidirecional entre aplicações web em tempo real.

## Funcionamento
A execução do presente projeto se divide em três partes principais.

O gerenciamento do time é realizado de modo que seja possível alterar o placar da partida.

![gerenciamento](https://github.com/samuelreboucas07/Placar-ao-vivo/blob/master/assets/gerenciamento.gif)

A partir do momento que o placar é alterado os usuários que estiveram com a tela principal aberta verá a alteração do resultado em tempo real.

![home](https://github.com/samuelreboucas07/Placar-ao-vivo/blob/master/assets/main.gif)

O mesmo irá ocorrer com os usuários que estivem na tela de acompanhamento de uma partida específica, assim que placar for alterado o mesmo será atualizado tanto na barra superior como no titulo da página onde expressa o resultado.

![detalhes](https://github.com/samuelreboucas07/Placar-ao-vivo/blob/master/assets/detalhes.gif)

Essa atualização em tempo real do placar ocorre graças a biblioteca Socket.io.

## Tecnologias

* [Angular](https://angular.io/)
* [NodeJs](https://nodejs.org/en/)
* [Socket.io](https://socket.io/)
* [Lowdb](https://github.com/typicode/lowdb)
## Como usar

Inicialmente é necessário clonar o presente repositório:

``` https://github.com/samuelreboucas07/Aplica-o-Socket.io.git ```

**Iniciar servidor** 
```
cd back-end
npm install 
npm start
```
**Inicial Projeto Web**
```
cd front-end
npm install 
ng serve
```

## Observação

O curso ministrado pela DevPleno utilizou da linguagem EJS para desenvolver a aplicação front-ent, entretanto, com o intuito de abordar novas tecnologias o presente projeto utilizou a versão 7 do framework angular.