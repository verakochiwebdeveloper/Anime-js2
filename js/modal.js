const modalSearch = document.querySelector(".search-model");
const modalSearchOpen = document.querySelector(".search-switch");
const modalSearchClose = modalSearch.querySelector(".search-close-switch");
const modalSearchInput = modalSearch.querySelector("#search-input");

/*
почему не работает не знаю

function modalSearchAnime() {
  modalSearchOpen.addEventListener("click", () => {
    if (modalSearch.style.display === "none") {
      modalSearch.style.display = "block";
    } else if (modalSearch.style.display === "block") {
      modalSearch.style.display = "none";
    }
  });
}


modalSearchAnime(); */

function modalSearchopen() {
  modalSearchOpen.addEventListener("click", () => {
    modalSearch.style.display = "block";
  });
}

modalSearchClose.addEventListener("click", () => {
  modalSearch.style.display = "none";
});

modalSearchopen();

function SearchInput() {
  modalSearchInput.addEventListener("input", () => {
    console.log(modalSearchInput.value);
  });
}

SearchInput();
