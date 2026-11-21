# 📦 Estoque Fácil

Sistema web para **cadastro e gerenciamento de produtos**, desenvolvido com **HTML, CSS e JavaScript**, com interface responsiva e integração com banco de dados **Supabase**.

O projeto foi desenvolvido com o objetivo de aplicar, na prática, conceitos de desenvolvimento web, manipulação do DOM, operações CRUD e integração de uma aplicação front-end com um banco de dados na nuvem.

---

## 🚀 Sobre o Projeto

O **Estoque Fácil** é uma aplicação web que permite ao usuário realizar o gerenciamento de produtos de um estoque.

A aplicação possui uma interface simples e responsiva, permitindo realizar operações de:

- 🔐 Login do usuário
- 📋 Listagem de produtos
- ➕ Cadastro de produtos
- ✏️ Atualização de produtos
- 🗑️ Exclusão de produtos
- 🔎 Consulta dos produtos cadastrados
- ☁️ Armazenamento dos dados no Supabase

O projeto utiliza **JavaScript** para controlar a lógica da aplicação e realizar a comunicação com o banco de dados.

---

## 🛠️ Tecnologias Utilizadas

### Front-end

- **HTML5** — estrutura das páginas
- **CSS3** — estilização e responsividade
- **JavaScript** — lógica da aplicação e manipulação do DOM

### Banco de Dados

- **Supabase**
- **PostgreSQL**

### Ferramentas

- Visual Studio Code
- Git
- GitHub
- Navegador Web

---

## 🗂️ Estrutura do Projeto

```text
Estoque-Facil/
│
├── index.html
├── login.html
├── listar.html
├── cadastrar.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── conectar.js
│   ├── login.js
│   ├── listar.js
│   └── cadastrar.js
│
└── README.md
```

> A estrutura pode variar de acordo com a organização utilizada durante o desenvolvimento do projeto.

---

## 💻 Funcionalidades

### 🔐 Autenticação

O sistema possui uma tela de login para acesso à aplicação.

Após a autenticação, o usuário pode acessar as funcionalidades relacionadas ao gerenciamento do estoque.

### 📋 Listagem de Produtos

Permite visualizar os produtos cadastrados no banco de dados.

### ➕ Cadastro

O usuário pode cadastrar novos produtos informando os dados necessários.

Os registros são enviados diretamente para o banco de dados do Supabase.

### ✏️ Atualização

Permite alterar as informações de produtos já cadastrados.

### 🗑️ Exclusão

Permite remover produtos do estoque.

### ☁️ Banco de Dados

Os dados são armazenados em uma tabela no **PostgreSQL**, disponibilizado pelo Supabase.

---

## 🔄 Operações CRUD

O projeto utiliza o conceito de **CRUD**:

| Operação | Ação | Descrição |
|---|---|---|
| **C** | Create | Cadastrar produtos |
| **R** | Read | Listar/consultar produtos |
| **U** | Update | Atualizar produtos |
| **D** | Delete | Excluir produtos |

Essas operações são realizadas através da integração entre **JavaScript e Supabase**.

---

## 🗄️ Banco de Dados

O projeto utiliza o **Supabase** como serviço de banco de dados.

A tabela principal utilizada pela aplicação é:

```text
produtos
```

Exemplo de informações armazenadas:

| Campo | Descrição |
|---|---|
| id | Identificador do produto |
| nome | Nome do produto |
| quantidade | Quantidade disponível |
| preco | Preço do produto |
| user_id | Identificador do usuário |

A utilização do `user_id` permite relacionar os produtos ao usuário autenticado.

---

## 🔒 Segurança

O projeto utiliza recursos de autenticação e políticas de segurança do Supabase.

As regras de acesso podem utilizar o **Row Level Security (RLS)** para garantir que o usuário autenticado tenha acesso somente aos registros permitidos.

Exemplo de regra utilizada:

```sql
auth.uid() = user_id
```

Dessa forma, o identificador do usuário autenticado pode ser utilizado para controlar o acesso aos seus respectivos produtos.

> ⚠️ Nunca publique no GitHub chaves privadas ou credenciais sensíveis do seu projeto Supabase.

---

## 📱 Responsividade

A interface foi desenvolvida utilizando **CSS responsivo**, permitindo que o sistema seja utilizado em diferentes tamanhos de tela.

O projeto pode ser acessado através de:

- 💻 Computadores
- 💻 Notebooks
- 📱 Smartphones
- 📲 Tablets

---

## 🔗 Integração com o Supabase

A aplicação utiliza a biblioteca JavaScript do Supabase para realizar a comunicação com o banco de dados.

Fluxo simplificado:

```text
Usuário
   │
   ▼
Interface HTML/CSS
   │
   ▼
JavaScript
   │
   ▼
Supabase
   │
   ▼
PostgreSQL
```

---

## ⚙️ Como Executar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/SEU-USUARIO/Estoque-Facil.git
```

### 2. Acesse a pasta

```bash
cd Estoque-Facil
```

### 3. Abra o projeto no Visual Studio Code

```bash
code .
```

### 4. Execute utilizando um servidor local

O projeto deve ser executado através de um servidor local para que as páginas e os arquivos JavaScript funcionem corretamente.

Uma opção é utilizar a extensão **Live Server** no Visual Studio Code.

Depois:

```text
Clique com o botão direito em index.html
        ↓
Open with Live Server
```

O navegador abrirá o projeto através de um endereço local, como:

```text
http://localhost:5500
```

---

## 🌐 Configuração do Supabase

Para utilizar o projeto com seu próprio banco de dados:

1. Crie um projeto no Supabase.
2. Crie a tabela `produtos`.
3. Configure os campos necessários.
4. Configure a autenticação.
5. Configure as políticas de **RLS**.
6. Configure a conexão da aplicação com o Supabase.
7. Execute o projeto através de um servidor local.

---

## 🎯 Objetivos de Aprendizagem

Este projeto foi desenvolvido para colocar em prática conceitos como:

- Estruturação de páginas com HTML5
- Estilização com CSS3
- Design responsivo
- JavaScript
- Manipulação do DOM
- Eventos
- Funções
- Arrays e objetos
- Operações CRUD
- Autenticação
- Banco de dados relacional
- SQL
- Integração com APIs
- Supabase
- PostgreSQL
- Git e GitHub

---

## 📚 Conceitos Aplicados

O projeto representa a integração de diferentes conhecimentos do desenvolvimento web:

```text
HTML
  +
CSS
  +
JavaScript
  +
Banco de Dados
  +
Supabase
  +
Git/GitHub
      ↓
Estoque Fácil
```

---

## 🔮 Possíveis Evoluções

O projeto pode futuramente receber novas funcionalidades, como:

- 🔎 Pesquisa de produtos
- 📊 Dashboard de estoque
- 📈 Relatórios
- 🔔 Alertas de estoque baixo
- 📷 Cadastro de imagens dos produtos
- 📦 Controle de entrada e saída
- 👥 Gerenciamento de usuários
- 📱 Melhorias para dispositivos móveis

---

## 👨‍💻 Autor

**Seu Nome**

Projeto desenvolvido para fins **educacionais e de aprendizagem em desenvolvimento web, banco de dados e integração com serviços em nuvem.**

---

## 📄 Licença

Este projeto está disponível para fins educacionais e de estudo.

---
