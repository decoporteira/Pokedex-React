# 📖 Pokédex - React & PokeAPI  

## 📌 Sobre o Projeto  
Esta é uma **Pokédex interativa** desenvolvida em **React**, que consome os dados da [PokeAPI](https://pokeapi.co/) para listar e exibir informações sobre os Pokémon. O projeto foi criado como parte de um desafio técnico.  

## ✨ Funcionalidades  
- 📜 **Listagem de Pokémon** na ordem da Pokédex.  
- ⚡ **Carregamento dinâmico**: a lista inicial exibe 10 Pokémon e, ao clicar no botão "Carregar mais", mais 10 são adicionados progressivamente.  
- 🌐 **Consumo da API PokeAPI** para exibição dos dados em tempo real.  

## 🛠️ Tecnologias Utilizadas  
- **React** → Escolhido pela facilidade na construção de interfaces dinâmicas e escaláveis.  
- **Vite** → Utilizado para criação do projeto devido à sua velocidade e eficiência no desenvolvimento.  
- **Context API** → Para gerenciamento de estado global sem necessidade de prop drilling.  
- **Styled-Components** → Para estilização dinâmica, permitindo componentes reutilizáveis e estilizados.  
- **React Router** → Para navegação entre páginas de forma eficiente e declarativa.  

## 📌 Decisões de Desenvolvimento  
- **Uso de carregamento progressivo**: Optamos por carregar os Pokémon em blocos de 10 para melhorar a performance e evitar sobrecarga na API.  
- **Gerenciamento de estado com Context API**: Escolhido em vez de Redux para manter o código mais simples e eficiente.  
- **Utilização do Vite**: Para acelerar o desenvolvimento e otimizar o build final.  
- **Styled-Components**: Facilitou a estilização e a organização dos estilos, evitando conflitos globais de CSS.  

## 🚀 Como Rodar o Projeto?  
Siga os passos abaixo para executar o projeto localmente:  

### 1️⃣ Clonar o repositório:  
```sh  
git clone https://github.com/seu-usuario/seu-repositorio.git  
cd seu-repositorio  
```

### 2️⃣ Instalar as dependências:  
```sh  
npm install  
```

### 3️⃣ Rodar o projeto em ambiente de desenvolvimento:  
```sh  
npm run dev  
```

A aplicação estará disponível em `http://localhost:5173/` (ou outra porta definida pelo Vite).  
