// let fs = require('fs')


// 4 - Gerenciador de livros
// Desenvolva um programa que permita cadastrar, listar e remover livros de uma biblioteca.
// Cada livro cadastrado deve ter: título, autor, data de publicação.
// O aplicativo deve permitir a listagem de livros ordenados por título ou data de publicação.
// O aplicativo deve permitir que o usuário altere ou remova um livro cadastrado.

const readlineSync = require("readline-sync");

let continua = true;

const biblioteca = [];

console.log(`
==========================================
  Bem vindo ao gerenciador de livros
  Aluna: Jhulia ? (?)
==========================================
`);

while (continua) {
  const pergunta = readlineSync.question(
    `O que deseja fazer?
1 - Cadastrar livro
2 - Listar livros
3 - Remover livro
4 - Sair\n
Digite sua opção: `
  );

  switch (pergunta) {
    case "1":
      const titulo = readlineSync.question("Digite o título do livro: ");

      const autor = readlineSync.question("Digite o autor do livro: ");

      const data = readlineSync.question(
        "Digite a data de publicação do livro: "
      );

      const livro = {
        titulo,
        autor,
        data,
      };

      biblioteca.push(livro);

      break;
      
    case "2":
      const ordenacao = readlineSync.question(
        `Como deseja ordenar?
1 - Título
2 - Data de publicação\n`
      );

      switch (ordenacao) {
        case "1":
          biblioteca.sort((a, b) => {
            if (a.titulo < b.titulo) {
              return -1;
            } else if (a.titulo > b.titulo) {
              return 1;
            } else {
              return 0;
            }
          });
          break;

          case "2":
          biblioteca.sort((a, b) => {
            if (a.data < b.data) {
              return -1;
            } else if (a.data > b.data) {
              return 1;
            } else {
              return 0;
            }
          });
          break;
        default:
          console.log("Opção inválida");
      }

      if (biblioteca.length === 0) {
        console.log(`
==========================================
        Não há livros cadastrados
==========================================
`);
      }

      biblioteca.forEach((livro) => {
        console.log(`Título: ${livro.titulo}
Autor: ${livro.autor}
Data de publicação: ${livro.data}\n`);
      });

      break;

    case "4":
      continua = false;
      break;

    default:
      console.log("Opção inválida");
  }
}
