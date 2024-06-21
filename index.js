document.addEventListener("DOMContentLoaded", () => {
    const ul = document.createElement("ul");
    ul.className = "container";
    const main = document.querySelector("main");
    const buttonsArea = document.createElement("ul");
    const filtro = document.querySelector("svg");
    buttonsArea.className = "buttonsArea";
  
    const urlSearchParams = new URLSearchParams(location.search);
    let page = !isNaN(urlSearchParams.get("page")) ? parseInt(urlSearchParams.get("page")) : 1;
  
    let itemsPerPage = 10;
    let currentPage = page;
    let totalPages = 1;
    let noticias = [];
    let jsonData;
  
    filtro.setAttribute("onclick", 'openModal()');
  
    function openModal() {
      const urlSearchParams = new URLSearchParams(location.search);
      const modal = document.querySelector('main #modal');
      const type = document.querySelector("#type");
      const quantidade = document.querySelector("#quantidade");
      const de = document.querySelector("#de");
      const ate = document.querySelector("#ate");
  
      type.value = urlSearchParams.get('tipo');
      quantidade.value = urlSearchParams.get('qtd');
      de.value = urlSearchParams.get('de');
      ate.value = urlSearchParams.get('ate');
  
      modal.showModal();
    }
  
    const close_modal = document.querySelector("#close_modal");
    close_modal.addEventListener('click', () => {
      const modal = document.querySelector("main #modal");
      modal.close();
    });
  
    async function API(query) {
      try {
        const data = await fetch(`https://servicodados.ibge.gov.br/api/v3/noticias/?${query}`);
        jsonData = await data.json();
        noticias = jsonData.items;
        totalPages = jsonData.totalPages;
        displayItems(currentPage);
      } catch (error) {
        console.error(error);
        console.log("Algo de errado");
      }
    }
  
    function displayItems(page) {
      ul.innerHTML = ''; // Limpar os itens existentes
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const items = noticias.slice(startIndex, endIndex);
  
      items.forEach(element => {
        const li = document.createElement("li");
        li.className = "newsitem";
  
        const div = document.createElement("div");
  
        const titulo = document.createElement("h2");
        titulo.textContent = element.titulo;
        const introducao = document.createElement("p");
        introducao.textContent = element.introducao;
        const editora = document.createElement("p");
        editora.textContent = `#${element.editorias}`;
  
        let urlBase = "https://agenciadenoticias.ibge.gov.br/";
        const image = JSON.parse(element.imagens);
        const urlImage = urlBase + image.image_intro;
        const foto = document.createElement("img");
        foto.setAttribute("src", urlImage);
  
        const leiaMais = document.createElement("a");
        leiaMais.textContent = "Leia mais";
        leiaMais.setAttribute("href", `${element.link}`);
  
        li.appendChild(foto);
        div.appendChild(titulo);
        div.appendChild(introducao);
        div.appendChild(editora);
        div.appendChild(leiaMais);
        li.appendChild(div);
  
        ul.appendChild(li);
      });
  
      main.appendChild(ul);
      updateQueryString(page);
      createPaginationButtons();
    }
  
    function createPaginationButtons() {
      buttonsArea.innerHTML = ''; // Limpar os botões existentes
      let startPage = 1;
      const maxButtons = 10;
  
      const urlSeachParam = new URLSearchParams(location.search);
      const atualPage = parseInt(urlSeachParam.get("page"));
  
      if (atualPage > 6) {
        startPage = atualPage - 5;
      }
  
      for (let i = startPage; i < startPage + maxButtons && i <= totalPages; i++) {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.className = "pageButton";
        button.textContent = i;
        button.addEventListener('click', () => {
          currentPage = i;
          updateQueryString(currentPage);
          API(urlSeachParam.toString());
        });
  
        if (i === atualPage) {
          button.className = "activeButton";
        }
  
        li.appendChild(button);
        buttonsArea.appendChild(li);
      }
  
      main.appendChild(buttonsArea);
    }
  
    function updateQueryString(page) {
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.set('page', page);
      window.history.pushState({}, '', newUrl);
    }
  
    function checkQueryString() {
      const urlParams = new URLSearchParams(window.location.search);
      let page = parseInt(urlParams.get('page'));
      if (isNaN(page) || page < 1) {
        page = 1;
        updateQueryString(page);
      }
      currentPage = page;
      API(urlParams.toString());
    }
  
    checkQueryString();
  
    function filterNews(event) {
      event.preventDefault();
      const form = document.querySelector("#form_modal");
      let formData = new FormData(form);
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.set('tipo', formData.get("type"));
      newUrl.searchParams.set('qtd', formData.get("quantidade"));
      newUrl.searchParams.set('de', formData.get("de"));
      newUrl.searchParams.set('ate', formData.get("ate"));
      window.history.pushState({}, '', newUrl);
  
      itemsPerPage = formData.get("quantidade");
      displayItems(currentPage);
    }
  
    function SearchNews(event) {
      event.preventDefault();
      const form = document.querySelector("#main_form");
      let formData = new FormData(form);
      const newUrl = new URL(window.location.href);
  
      if (formData.get("main_input")) {
        newUrl.searchParams.set('busca', formData.get("main_input"));
        window.history.pushState({}, '', newUrl);
        document.querySelector("#main_input").value = '';
      }
    }
  });
  