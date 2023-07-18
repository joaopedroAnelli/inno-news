# Inno News

Este repositório contém um blog fictício criado como parte de um estudo sobre os conceitos de Service Workers e Web Notifications Push. O objetivo é demonstrar a implementação de notificações push em um projeto Next.js na versão 13.

## Como Rodar o Projeto

Para rodar o projeto em sua máquina local, siga as instruções abaixo:

Certifique-se de ter o Node.js instalado em sua máquina.

Clone este repositório usando o comando:

`$ git clone https://github.com/joaopedroAnelli/inno-news.git`

Navegue até o diretório do projeto:

`$ cd inno-news`

Instale as dependências do projeto:

`$ npm install`

Inicie o servidor de desenvolvimento:

`$ npm run dev`

## Funcionamento do Inno News

Este blog fictício possui um back office no Hygraph (Headless CMS com GrapQL Language) onde é possível criar novos posts. Ao criar um novo post, um webhook dispara uma requisição HTTP POST é enviada para a rota /api/notifications, enviando os dados desse novo post. Em seguida, uma notificação é exibida para os usuários que se inscreveram para receber as notificações do blog.

## Contribuição

Contribuições são bem-vindas! Se você deseja contribuir com este projeto, siga as etapas abaixo:

Fork este repositório.

Crie uma branch para sua contribuição:

`$ git checkout -b minha-contribuicao`

Faça as alterações desejadas.

Commit suas alterações:

`$ git commit -m "Minha contribuição"`

Push a branch para o seu repositório fork:

`$ git push origin minha-contribuicao`

Abra um Pull Request neste repositório.

Este projeto foi desenvolvido como parte de um estudo sobre Service Workers e Web Notifications Push. Se você tiver alguma dúvida ou feedback, sinta-se à vontade para entrar em contato.
