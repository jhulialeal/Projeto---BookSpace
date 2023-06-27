class Livro 
{
    constructor(titulo, autor, data_publicacao) {
      this.titulo = titulo;
      this.autor = autor;
      this.data_publicacao = data_publicacao;
    }
  
    toString() 
    {
      return `${this.titulo} - ${this.autor} (${this.data_publicacao})`;
    }
  }
  
  class Biblioteca 
  {
    constructor() {
      this.livros = [];
    }
  
    adicionar_livro(livro) 
    {
      this.livros.push(livro);
    }
  
    remover_livro(titulo) 
    {
      const index = this.livros.findIndex(livro => livro.titulo === titulo);
      if (index !== -1) 
      {
        this.livros.splice(index, 1);
        return true;
      }
      return false;
    }
  
    listar_livros(ordenar = "titulo") 
    {
      const livrosOrdenados = this.livros.slice().sort((a, b) => {
        if (ordenar === "titulo") 
        {
          return a.titulo.localeCompare(b.titulo);
        } else if (ordenar === "dataPublicacao") 
        {
          return new Date(a.dataPublicacao) - new Date(b.dataPublicacao);
        }
      });
  
      livrosOrdenados.forEach(livro => console.log(livro.toString()));
    }
  
    alterar_livro(titulo, novoTitulo = null, novoAutor = null, novaDataPublicacao = null) 
    {
      const livro = this.livros.find(l => l.titulo === titulo);
      if (livro) {
        if (novoTitulo) livro.titulo = novoTitulo;
        if (novoAutor) livro.autor = novoAutor;
        if (novaDataPublicacao) livro.dataPublicacao = novaDataPublicacao;
        return true;
      }
      return false;
    }
  }
  


const biblioteca = new Biblioteca();

    const adicionar_livro = document.getElementById("form-adicionar-livro");
    const book_list = document.getElementById("tabela-livros");

    adicionar_livro.addEventListener("submit", (event) => {
      event.preventDefault();

      const titulo = event.target.titulo.value;
      const autor = event.target.autor.value;
      const dataPublicacao = event.target.dataPublicacao.value;

      const livro = new Livro(titulo, autor, dataPublicacao);
      biblioteca.adicionar_livro(livro);
      atualizar_tabelas();

      event.target.reset();
    });

    function atualizar_tabelas() 
    {
      const tbody = book_list.querySelector("tbody");
      tbody.innerHTML = "";

      biblioteca.livros.forEach((livro, index) => {
        const tr = document.createElement("tr");

        const tdTitulo = document.createElement("td");
        tdTitulo.textContent = livro.titulo;
        tr.appendChild(tdTitulo);

        const tdAutor = document.createElement("td");
        tdAutor.textContent = livro.autor;
        tr.appendChild(tdAutor);

        const tdDataPublicacao = document.createElement("td");
        tdDataPublicacao.textContent = livro.dataPublicacao;
        tr.appendChild(tdDataPublicacao);

        const btnRemover = document.createElement("button");
        btnRemover.textContent = "Remover";
        btnRemover.addEventListener("click", () => {
          biblioteca.remover_livro(livro.titulo);
          atualizar_tabelas();
        });
        tdAcoes.appendChild(btnRemover);
        tr.appendChild(tdAcoes);

        tbody.appendChild(tr);
      });
    }
 