# Aula 1

## Estrutura de um arquivo .html

    - HTML (HyperText Markup Language)
    - Linguagem de marcação
    - Marcamos onde e como queremos que nossos elementos se comportem
    - Utilização de Tags

## Tags

````
Representações usadas para alterações como negrito, italico, sublinhado, etc.
    Representando por <></>
    Exemplo: <b>texto</b> = negrito
````` 
<b>texto</b>

## Exercícios
````
<!DOCTYPE html>                             -Tipo de documento
<html>                                      -Página
    <head>                                  -Cabeçalho                  
        <meta charset="UTF-8">
        <meta name="description" content="Aula de HTML">
        <meta name="keywords" content="HTML, CSS, JavaScript">
        <meta name="author" content="Vinicius Teixeira">
        <meta name="viewport" content="width=device-width, initial-scale">

        <title> Aula de HTML </title>       -Titulo da aba

    </head>                                 -Fecha cabeçalho
    
    <body>                                  -Corpo (conteúdo) da página
        
        <!--                                -Comentário que não aparece na página
            Este é um comentário
            h1 serve para título
        -->                                 -Fim do comentário

        <h1>Titulo Principal</h1>           -h1 Titulo da página

        <script>
            texto = prompt("Digite alguma coisa");
            alert(texto);
        </script>

        <p>                                 -Inicia um paragráfo
            Este é o primeiro parágrafo.
        </p>                                -Encerra um parágrafo

        <p>                                 -Inicia um paragráfo
            Este é o segundo parágrafo
        </p>                                -Encerra um parágrafo
        
        Este texto está fora da marcação
        <br>                                -Escreve na linha abaixo
        Hoje é nossa primeira aula.    

    </body>                                 -Fecha parte do corpo da página

   
</html>                                     -Fim da página
````
 ## Meta tags
```` 
<meta charset="UTF-8">                                    
- caracteres permitidos pt br

<meta name="description" content="Aula de HTML">          
- Conteúdo do site

<meta name="keywords" content="HTML, CSS, JavaScript">   
 - Palavras chave

<meta name="author" content="Vinicius Teixeira">          
- Autor da página

<meta name="viewport" content="width=device-width, initial-scale"> 
- Escala conforme aparelho usado (mobile, pc, etc)

````

## Link Tags

````
<script>
    alert("Olá mundo!!");
</script>
Executa um programa, nesse caso pop up na tela ao entrar no site
````

````
<script>
    prompt("Digite alguma coisa");
</script>
Executa um programa, nesse caso pede para usuário digitar algo
````
````
<script>
    texto = prompt("Digite alguma coisa");
    alert(texto);
</script>
Executa um programa que pede para o usuário digitar algo, e em seguida mostra o que foi lançado.
````

````
<script>
    texto = prompt("Digite alguma coisa");
    //alert(texto);
    document.write(texto)
</script>
Executa programa, joga o texto no começo da página
````

## Elementos de formatação
````
<b>                     - Texto em negrito

<strong>                - Texto em negrito html 5

<i>                     - Itálico

<em>                    - Itálico HTML5

<mark>                  - Texto marcado

<small>                 - Texto menor

<del>                   - Texto excluido (riscado)

<ins>                   - Texto sublinhado

<sub>                   - Texto abaixo Ex: H2O (colocar o 2 abaixo)

<sup>                   - Texto acima Ex: 2²

<font size="32">        - Altera tamanho da fonte
````
## Titulos

````
Cabeçalhos HTML são definidos com as tags <h1> a <h6>
````
## Imagens

````
<img src="IMG/estu.png" width="10%" height="10%" alt="foto de estudante">

width="X%"                  - largura pra redimensionar

height="Y%"                 - altura pra redimensionar

alt="foto de estudante"     - caso a imagem seja deletada ou renomeada, aparece a msg
````

## Links

````
<a href="sobre.html">Página Sobre</a>

<a href="local da página">Texto escrito que leva a nova página</a>

<a href="https://www.google.com">Google</a>
Redirecionando para página da web (Google)

<a href="https://www.google.com" target="_blank">Google</a>
Abre em uma nova aba
````
## Listas 

````
Lista não ordenada
<ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
    <li>item 4</li>
</ul>

Lista ordenada
<ol>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
    <li>item 4</li>
</ol>
````

Site com ajuda e dicas:

Aulas online de [HTML e CSS](https://www.w3schools.com/)

# Aula 2

## Tabelas

````
<!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <title>Tabelas</title>
            <link rel="stylesheet" href="estilo.css">
        </head>

        <body>
            <h1>Tabelas</h1>
            <table border="1">
                
                <tr>
                    <th>Linha 1 Coluna 1</th>
                    <th>Linha 1 Coluna 2</th>
                    <th>Linha 1 Coluna 3</th>
                </tr>
                <tr>
                    <td>Linha 2 Coluna 1</td>
                    <td>Linha 2 Coluna 2</td>
                    <TD>Linha 2 Coluna 3</TD>
                </tr>
                <tr>
                    <td>Linha 3 Coluna 1</td>
                    <td>Linha 3 Coluna 2</td>
                    <TD>Linha 3 Coluna 3</TD>
                </tr>
            </table>
        </body>

    </html>
````

## Configurações no arquivo .css para editar a tabela
````
html {
    background-color: black;
}

table, th, td {
    border: 2px groove rgb(0, 0, 255);
    border-radius: 10px;
    text-align: center;
    background-color: blue;
    }

h1 {    
    font-size: 30px;
    text-align: center;
    color: whitesmoke;
    }

th {
    background-color: black;
    color: gold;
    }

td {
    background-color: gray;
    color: aliceblue;
}
````

## Mesclar cédulas

### Colunas
````
            <table border="1">
                
                <tr>
                    <th colspan="2">Linha 1 Coluna 1/2</th>
                    
                    <th>Linha 1 Coluna 3</th>
                </tr>
                <tr>
                    <td>Linha 2 Coluna 1</td>
                    <td>Linha 2 Coluna 2</td>
                    <TD>Linha 2 Coluna 3</TD>
                </tr>
                <tr>
                    <td>Linha 3 Coluna 1</td>
                    <td>Linha 3 Coluna 2</td>
                    <TD>Linha 3 Coluna 3</TD>
                </tr>
            </table>
````
### Linhas
````
<table border="1">
                
                <tr>
                    <th>Linha 1 Coluna 1</th>
                    <th>Linha 1 Coluna 2</th>
                    <th>Linha 1 Coluna 3</th>
                </tr>
                <tr >
                    <td rowspan="2">Linha 2/3 Coluna 1</td>
                    <td>Linha 2 Coluna 2</td>
                    <TD>Linha 2 Coluna 3</TD>
                </tr>
                <tr>
                    
                    <td>Linha 3 Coluna 2</td>
                    <TD>Linha 3 Coluna 3</TD>
                </tr>
            </table>
````

## Formulário

````
      
            <form>
                <!--Caixa de texto simples-->
                <label>Primeiro nome:</label>
                <br>
                <input type="text" name="nome">
                <br>
                <label>Segundo nome:</label>
                <br>
                <input type="text" name="sobrenome">
                <br>
                <br>
                <h4> O que você achou do site?</h4>
                <!-- Radio button-->
                <input type="radio" name="opcao" checked> Muito Bom
                <input type="radio" name="opcao"> Bom
                <input type="radio" name="opcao"> Regular
                <input type="radio" name="opcao"> Ruim
                <input type="radio" name="opcao"> Muito Ruim
                <!-- mesmo name para ser do mesmo grupo****-->
                <br>
                <h4>Como está o clima hoje?</h4>
                
                <input type="radio" name="clima" value="sol"> Sol
                <input type="radio" name="clima" value="chuva" checked> Chuva
                <input type="radio" name="clima" value="neve"> Neve
                <input type="radio" name="clima" value="granizo"> Granizo
                <input type="radio" name="clima" value="nublado"> Nublado
                <!--select box-->
                <br>
                <br>
                <h4>Qual o status do filme?</h4>
                <select name="secao">
                    <option value="" selected></option>
                    <option value="cartaz">Em cartaz</option>
                    <option value="em breve">Em Breve</option>
                    <option value="terminado">Terminado</option>
                </select>
                    <label>Outra opção:</label>
                    <input type="text" name="outra">
                <br>
                <br>
                <!--Texto longo-->
                <h4>Escreva aqui:</h4>
                <textarea   
                            placeholder="Digite aqui"
                            name="areatexto" 
                            maxlength="180" 
                            cols="80" 
                            rows="10"
                            style="resize:none"></textarea>
                <br>
                <br>
                <!--Tabela com textos curtos-->
                <h4>Informações:</h4>
                <table>
                    <tr>
                        <td>Nome:</td>
                        <td><input type="text" name="nome2"></td>
                    </tr>
                    <tr>
                        <td>E-mail:</td>
                        <td><input type="email" name="email"></td>
                    </tr>
                    <tr>
                        <td>Telefone:</td>
                        <td><input type="text" name="fone"></td>
                    </tr>
                </table>
                <br>
                <br>
                <!--checkbox-->
                <input type="checkbox">Ler e aceitar todos os termos e condições
                <br>
                <br>
                <br>
                <br>
                <input type="button" name="botao" value="Botão">
                <input type="submit" name="Enviar" value="Enviar">
                <input type="reset" name="reset" value="Apagar tudo">

````