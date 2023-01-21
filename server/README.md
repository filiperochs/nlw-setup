# Projeto Server (backend) - NLW SETUP

Para a instalação executar `yarn install` na pasta raíz do projeto, ou seja, na pasta `server`.

Criar arquivo `.env` na raíz também com o conteúdo `PORT=3334`

Executar a migration com o prisma utilizando o comando `npx prisma migrate dev`

Provavelmente a database já será populada pelo arquivo seed na pasta prisma, mas caso não aconteça execute: `npx prisma seed`

Caso queira visualizar a database, o prisma disponibiliza uma interface web, utilizando `npx prisma studio`

E para a inicialização executar `yarn dev`