# Banco de dados

```
Tabela Categoria:
id: int - Primary Key
nome: string

Tabela Produto:
id: int - Primary Key
nome: string
idCategoria: int - Foreign Key de Categoria

Tabela Cargo:
id: int - Primary Key
nome: string

Tabel Usuario:
id: int - Primary Key
nome: string
email: string
idCargo: int - Foreign Key de Cargo

---------------------------------

Usuarios criados:
[
    {
        email: 'carlos@gmail.com',
        senha: '123123'
        cargo: 1  // admin
    },
    {
        email: 'cleiton@gmail.com',
        senha: '123123',
        cargo: 2  // funcionario
    }
]
```

# Rotas

## Rota de Session:

```
1 - post : /session : faz login para acessar rotas privadas

Entrada:
{
    email: "admin@gmail.com",
    senha: "123123"
}

Retorno:
{
    token: "dahsj38chw4hr8f7fhd87"
}

Exemplo de autenticação necessaria nas rotas privadas:
{
    headers: { Authorization: `Bearer ${token}` }
}

2 - get : /verificarToken : verifica se o token informado é válido

Retorno de erro:
{
    error: 'Token inválido'
}

Retorno de sucesso:
{
    auth: true
}
```

## Todas as rotas abaixo são privadas

## Rotas de Categoria:

```
1 - get : /categorias : retorna todas as categorias
2 - get : /categoria/:id : retorna uma categoria pelo id

// ROTAS DE ADMIN
3 - put : /atualizarNomeCategoria : atualiza o nome de uma categoria pelo id

Entrada:
{
    categoria: id da categoria,
    nome: nome novo da categoria
}

4 - delete : /categoria/:id : deleta uma categoria pelo id
```

## Rotas de Produto:

```
1 - get : /produtos : retorna todos os produtos
2 - get : /produto/:id : retorna um produto pelo id
3 - get : /searchProduto : retorna no máximo 3 produtos que contenham tal nome

Entrada:
{
    nome: string de procura
}

// ROTAS DE ADMIN
4 - put : /atualizarCategoriaProduto : atualiza a categoria de algum produto especifico

Entrada:
{
    produto: id do produto,
    categoria: id da nova categoria
}

5 - put : /atualizarNomeProduto : atualiza o nome de um produto pelo id

Entrada:
{
    produto: id do produto,
    nome: nome novo da categoria
}

6 - delete : /produto/:id : deleta uma categoria pelo id
```
