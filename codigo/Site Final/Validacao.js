function submitInterests() {
    var selectedCategories = document.getElementsByClassName('selected');
  
    if (selectedCategories.length >= 3) {
      window.location.href = 'Index.html';
    } else {
      alert('Selecione pelo menos 3 categorias antes de enviar.');
    }
  }
  