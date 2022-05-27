# Aula 1

## Banco de dados:

-Modelagem de banco de dados para aplicações web

-Modelo entidade e relacionamento: tabelas, visão, atributos, etc.

-Linguagem SQL: utilização de comandos para consulta, alteração, etc.

# Conceitos
Banco de dados é um conjunto de informações relacionadas entre si, sobre um determinado assunto ou entidade que é armazenado por meio que permita a recuperação posterior.

## Sistema gerenciador de banco de dados (SGBD) 

````
é o conjunto de softwares responsáveis pelo gerenciamento de um banco de dados.
Interface para:
-incluir
-Alterar
-Consultar
-Apagar os dados previamente armazenados.
 
Exemplos: SQL server, MySQL, Oracle (certificado =$$$)(mais seguro, mais completo), SQLite, Microsoft Access.
````

## Dados
````
São informações isoladas, são parte de uma informação.
Ex: Ana, Joinville, Pizza, Casa, etc.
````

## Campos
````
São categorias de informações

Ex: Cidade, Nome, Cargo, Endereço, etc.
````
## Registro
````
Linha de campos organizado.
````

## Tabela

````
São conjuntos lógicos de registros, chamados também de entidades, cadastro ou arquivos. 
Cada tabela deve ser nomeada separadamente, evitar acentuação e caracteres especiais.
````
Bancos de dados são um conjunto de tabelas relacionadas entre si.


### Informações/Dicas
````
Campo data de nascimento, não idade (idade não altera)
Gerar um campo como ID, Código, Chave (Chave Primária)

````

# Aula 2

## Temas:

    Revisão
    Pesquisa Rápida
    Modelo conceitual Vs Modelo lógico Vs Modelo físico
    Tipos de chaves
    Tipos de Relacionamentos
### Pesquisa rápida

Quanto ganha trabalhar com:

    Banco de dados -- 4,600 Junior

    Analista -- 3,600 Junior

    Desenvolvedor WEB -- 4500 Junior

    Desenvolvedor Mobile -- 5,600 Junior

    Qual maior salário na área -- 13,000 +

## Modelo conceitual (modelo abstrato) --> Modelo lógico (camada intermediária) --> Modelo físico (camada de sistema)

Modelo conceitual é uma camada mais filosófica (conversar mais com o cliente), os requisitos direto com cliente (cores, posições de botões)

Modelo Lógico define regras e tecnologia (definições de dados, funções e projeto de regras)

Modelo Físico implementação

## Relacionamentos entre tabelas

Existem quatro tipos de relacionamentos:

    UM para UM (1-1)
    UM para várias (1-N)
    Várias para UM (N-1)
    Várias para Várias(N-N)


### Tabelas
````
Médico (#CRM,nome,dt_nasc,telefone,email,foto,sexo)

Profissão ((criar chave noma: #idProfissao)nome,descricao,salario,carga_horaria)

Comida ((criar chave: #codComida)nome,preco,dt_validade,peso,caloria,qtd_sodio,qtd_gluten...)

Hobby ((criar chave: #iD)nome,descriçao,finalidade,frequencia,qtd_calorias)

Namorado(a) ((criar chave: #matricula) nome,descricao,nota,sexo,altura,dt_nasc,dt_inicio,dt_fim,investimento,telemovel)

chave primária (algum campo que nunca se repete, Ex: CPF, CRM, etc...)

# ou @ = chave primária

Paciente (#idPaciente,nome,dt_nasc,CPF,RG,alergia?,descricao_alergia,endereco)
````

### Tipos de relacionamentos:

````
Médico   	    N - N   Paciente

Empregado   	N - N   Cargo

Animal   	    N - 1   Raça

Aluno    	    N - N   Disciplina

Nota Fiscal  	N - 1  	Cliente

Nota Fiscal 	N - N 	Produto

Filme  		    N - N   Gênero (pode ser 1 - N, mais de um gênero vira nova categoria)

Produto    	    N - 1   Tipo de produto   (tipo é sempre 1)

Médico    	    N - N   Especialidade
````

# Tipos de chave

## Chave primária (# ou @ ou PK)

Chave com id ou código para organizar a tabela

    **** REGRA 1- Chave primária do lado 1 deve estar na tabela do lado N
````    
Ex: Animal          N  -  1       Raça
    #CodAnimal                    #iDRaca **
    Nome                          Nome
    Peso                          Descricao
    DtNasc
    &idRaca **
````
## Chave estrangeira (& ou FK) 

Chave serve para interligar tabelas



========================================================================


### Exemplos


Aplicando a primeira regra de relacionamento

Chave primária do lado 1 deve sempre estar no lado N da tabela.

````
Nota Fiscal  	N - 1  	Cliente

Cliente (#CPF, nome, endereço, dt_nasc, email, telefone, .......)

Nota Fiscal (#Nr_nota, dt, valor_nt, tributos, &CPF)
`````

````
Estado         1 - N    Cidade

Cidade (#iDcity, nome, descrição, &UF)

Estado (#UF, estado)
````
````
lucid.app

DrawIO
````

# Aula 3

    **** REGRA 2 para relacionamento N PARA N devemos:
    1º "Quebrar" o relacionamento
    2º Criar uma nova tabela (Associativa)
    3º Aplicar a 1º Regra

# Aula 4

## SQL

### XAMPP


    -Iniciar Apache e Mysql
    -Abrir host local: (http://localhost/phpmyadmin/)


## Comandos mysql
    
### SELECT

````
SELECT campo1, campo2, campo3 ... 
FROM nome_da_tabela
WHERE condição_desejada;
````

````
    SELECT * // Seleciona todas colunas da tabela
    FROM aluno; // nome da tabela
    WHERE 
    advertencia >= 4 // condição de pesquisa, 4 ou mais advertências
    nome LIKE "X%" // procurar nome começando com letra X.
    OR mensalidade <2; // segunda condição, advertência >= 4 OU mensalidade > 2, mostra.
    AND mensalidade <2; // segunda condição, advertência >= 4 E mensalidade > 2, mostra.
    ````
Exemplo:

````
SELECT * 

FROM aluno

WHERE nome LIKE "B%" 

AND (mensalidade <=3

OR advertencia >2);

````
procurar pessoas com nome começando com B + (mensalidade <=3 ou advertência > 2)
````
````
SELECT AVG (mensalidade) 

FROM aluno; 
```` 
````mostra a média das mensalidades````

### UPDATE

````Atualizar ( incluir informações)````

````
UPDATE nome_da_tabela
SET o_que_deseja_altera
WHERE condição_desejada
````
````
UPDATE aluno
SET mensalidade = mensalidade + 400
WHERE mensalidade <5;
````
````Aumento de 400 na mensalidade de quem tem mensalidade de menos de 5.````

````
UPDATE aluno 
SET mensalidade = mensalidade *1.3
WHERE mensalidade <400;
````
````aumenta em 30% a mensalidade de quem paga menos de 400````

````
UPDATE aluno 
SET nome = "Novo_nome"
WHERE nome = "Velho_nome";
````
````altera nome no banco de dados de quem tem o "Velho_Nome"````
````
UPDATE aluno
SET advertencia = 0
WHERE advertencia > 30;
````

````Quem tem mais de 30 advertencias, zera````


### DELETE

````
DELETE *
FROM nome_da_tabela
WHERE condição_desejada;
````
````Apagar ( remover informações)````
.
