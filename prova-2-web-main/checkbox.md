Estrutura de Grid na Página, Cor do Header, Main e Footer:

Utilize um sistema de grid, como o CSS Grid para estruturar a página.
<!-- Utilize a cor #4682b4 para o background do <header> e <footer>, a cor #f0f0f0 para o background do <main>. -->
<!-- Defina 100ch como tamanho máximo do conteúdo principal. para garantir uma boa experiência de leitura. -->

Form de busca:

<!-- Crie um formulário (<form>) para o campo de busca, no header. -->
<!-- Deixe o input centralizado. -->
<!-- Adicione um botão dentro do input de busca, para ser o submit. Utilize o ícone 🔍. Adicionar cursor pointer. -->
<!-- Alinhe o botão dentro do campo de busca utilizando position: absolute. -->

Filtro:

<!-- Utilize a tag <svg> com o código SVG fornecido para criar o ícone de filtro. -->
<!-- Alinhe o ícone de filtro à direita do header. -->
<!-- O ícone deve ser clicável e abrir um modal (<dialog>) com os filtros. Adicionar cursor pointer. -->
Exiba o número de filtros ativos, baseado na query string, ao lado do ícone de filtro (não contar page e busca). Alinhe com position: absolute.
Caso exista filtros na querystring, eles deverão ser aplicados nos inputs. Ex: url.com?busca=IBGE, o input de busca deverá ter o value "IBGE"

Filtros em um Dialog HTML:

<!-- Utilize a tag <dialog> do HTML para criar o modal de filtros. -->
<!-- Inclua os campos de filtro "Tipo", "Quantidade", "De" e "Até" dentro do dialog. -->
<!-- Os filtros deverão ficar em um form. -->
<!-- Inicie sempre a quantidade com 10, e as options sendo múltiplos de 5. -->
<!-- Adiciona um ícone de "X" no canto superior direito do modal para fechá-lo. -->
<!-- Adicione um botão "Aplicar" para aplicar os filtros e fechar o modal. -->
<!-- Ao aplicar, os filtros devem ser refletidos na URL da página, com query string, e os dados devem ser atualizados (nova chamada na API). -->

Buscar as Notícias da API do IBGE:

<!-- Utilize a API http://servicodados.ibge.gov.br/api/v3/noticias para buscar as notícias. -->
Utilize a documentação https://servicodados.ibge.gov.br/api/docs/noticias?versao=3, atualize o input de "Tipo" para os valores possíveis.
<!-- Por padrão, busque somente 10 notícias. -->
<!-- A api deve ser chamada com os filtros da query string, filtrados pelo usuário. -->

<!-- Listar as Notícias Dentro de uma <ul> <li>: -->

<!-- Após obter os dados das notícias da API, itere sobre esses dados e crie elementos <li> para cada notícia. -->
<!-- Liste esses elementos dentro de uma <ul>. -->
<!-- Cada notícia deve conter a imagem da noticia, o título em um h2, introdução em um parágrafo. -->
<!-- A imagem fica em um objeto stringified, e precisa ser concatenada com a url de noticias do IBGE https://agenciadenoticias.ibge.gov.br/ -->
<!-- Mostrar as editorias da notícia com prefixo #. -->
<!-- Mostrar a quanto tempo a notícia foi publicada, com base na data de publicação. Ex possíveis: "Publicado há 2 dias", "Publicado hoje", "Publicado ontem". -->
<!-- Adicione um botão "Leia Mais" ao final de cada notícia, que ao ser clicado, abre a página da notícia no site do IBGE, em uma nova aba. -->

<!-- Botoes de Paginacao no Final das Noticias em uma <ul> <li>: -->

<!-- Crie botões de paginação no final das notícias utilizando elementos <button> dentro de <ul> <li>. -->
<!-- Implemente a lógica para mostrar no máximo 10 botões de páginas. Sempre mostrando a página atual no meio. Ex: Caso o usuário esteja na página 10, mostre as páginas 5, 6, 7, 8, 9, 10, 11, 12, 13, 14. Mesmo comportamento do site do IBGE -->
<!-- Indique visualmente a página atual com uma cor de fundo #4682b4. -->
Atualizar a querystring da página ao clicar em um botão de paginação. Também carregar novos dados da API com base na página selecionada.
<!-- Remover Todos os Bullet Points de <ul> <li>: -->

Utilize CSS para remover os bullet points padrão de listas não ordenadas (<ul>).

Responsividade:

Garanta que a página seja responsiva e não quebre em resoluções menores.
Utilize CSS Grid para organizar os campos de filtro em duas colunas em resoluções maiores que 760px e em uma coluna em resoluções menores.
