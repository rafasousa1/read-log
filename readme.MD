README.md

# App

ReadLog.

## Requisitos Funcionais

- [x] Deve ser possível se registrar;
- [x] Deve ser possível se autenticar (email e senha);
- [ ] Deve ser possível obter o perfil de um usuário logado;
- [ ] Deve ser possível cadastrar um livro; !
- [ ] Deve ser possível o usuários buscar um livro pelo nome;
- [ ] Deve ser possível o usuário visualizar os livros já lidos;
- [ ] Deve ser possível permitir que um usuário registre o início da leitura de um livro;
- [ ] Deve ser possível marcar a leitura de um livro como concluída;
- [ ] Deve ser possível ver o histórico de leituras (livros que começou ou terminou de ler);
- [ ] Deve ser possível ver o número total de livros concluídos;

## Regras de Negócio

- [x] O usuário não deve se cadastrar com um e-mail existente;
- [ ] O usuário não pode registrar a mesma leitura duas vezes;
- [ ] Um livro deve ter pelo menos 1 página;
 
## Requisitos não funcionais

- [ ] A senha do usuário precisa estar criptografada;
- [ ] Os dados precisam estar persistidos em um banco PostgreSQL;
- [ ] O usuário deve ser identificado por um JWT; !
