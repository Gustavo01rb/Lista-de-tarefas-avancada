# Documentação do Projeto - Software de Gerenciamento de Tarefas

## Introdução
Esta documentação foi desenvolvida como parte de uma atividade da disciplina de "Contexto Social da Engenharia de Computação" e tem como objetivo apresentar o projeto de Software de Gerenciamento de Tarefas, bem como fornecer informações detalhadas sobre as tecnologias utilizadas, padrões de projeto, organização de código e como instalar e executar o projeto.

## Tecnologias Utilizadas
O projeto de Software de Gerenciamento de Tarefas foi desenvolvido utilizando as seguintes tecnologias e frameworks:

### 1. Meteor.js
O framework Meteor.js foi escolhido para o desenvolvimento deste projeto devido à sua capacidade de construir aplicativos web em tempo real de forma eficiente. Ele oferece recursos como integração de banco de dados, gerenciamento de pacotes, autenticação de usuário e muito mais, tornando-o uma escolha ideal para aplicativos web robustos e escaláveis.

### 2. React
O React é uma biblioteca JavaScript de código aberto amplamente utilizada para criar interfaces de usuário interativas e reativas. Ele foi integrado ao Meteor.js para fornecer uma experiência de usuário dinâmica e responsiva.

### 3. Outras Tecnologias
* HTML5 e CSS3 foram utilizados para a estruturação e estilização das páginas web.
* Banco de dados MongoDB foi escolhido como o banco de dados principal para armazenar dados do aplicativo.
* JavaScript ES6+ foi a linguagem de programação principal utilizada no desenvolvimento.
* Material UI foi um framework utilizado para auxiliar a estilização.

## Como Instalar e Executar o Projeto

Para instalar e executar o projeto em seu ambiente de desenvolvimento, siga os passos abaixo:

### Pré-requisitos:
* Certifique-se de ter o Node.js instalado em sua máquina. Você pode fazer o download em [https://nodejs.org/](https://nodejs.org/).
> É necessário ter a versão do node >10 e < 14
* Certifique-se também de ter instalado o Meteor.js: [https://guide.meteor.com/](https://guide.meteor.com/)

### Passos de Instalação
1. Clone o repositório do projeto para o seu computador:

~~~bash
git clone https://github.com/Gustavo01rb/Lista-de-tarefas-avancada.git
~~~

1. Navegue até o diretório do projeto:

~~~bash
cd Lista-de-tarefas-avancada
~~~

1. Instale as dependências do servidor Meteor:

~~~bash
meteor npm install
~~~


1. Inicie o servidor Meteor:

~~~bash
meteor
~~~

Isso iniciará o servidor Meteor e o aplicativo estará disponível em http://localhost:3000 no seu navegador.

## Padrões de Projeto
Para garantir a manutenibilidade e escalabilidade do projeto, foram adotados os seguintes padrões de projeto:

### 1. Estrutura de Diretórios
A estrutura de diretórios do projeto segue uma organização lógica que facilita a localização de arquivos e componentes. Os principais diretórios incluem:

* client: Contém os arquivos relacionados à interface do usuário.
* imports: Armazena arquivos JavaScript e componentes reutilizáveis.
* server: Contém o código relacionado ao servidor Meteor.
* public: Armazena arquivos públicos, como imagens e ícones.
* tests: Contém os testes automatizados do aplicativo.

### 2. Componentização
O projeto utiliza o conceito de componentização, onde os elementos da interface do usuário são divididos em componentes reutilizáveis. Isso facilita a manutenção e a extensão do aplicativo.

### 3. Gerenciamento de Estado
O estado do aplicativo é gerenciado principalmente através do React Context API e do Meteor Data, permitindo uma comunicação eficiente entre componentes e atualizações em tempo real.

### 4. Rotas e Navegação
As rotas e a navegação entre as diferentes páginas do aplicativo são controladas pelo pacote react-router-dom, garantindo uma experiência de usuário fluida.

### 5. Estilização
A estilização é feita utilizando CSS combinado com bibliotecas de estilo, como Material-UI, para criar uma interface moderna e agradável.

## Organização de Código
O código do projeto é organizado de forma a manter a coesão e a separação de responsabilidades. Cada diretório possui um propósito específico, e os principais componentes estão agrupados logicamente. Além disso, foram adotadas convenções de nomenclatura para facilitar a leitura do código.

