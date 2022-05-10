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