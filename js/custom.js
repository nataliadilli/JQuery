$(document).ready(function () {

   $('.owl-carousel').owlCarousel();

   //TAG NOVO

   $('.featured-item a').addClass('btn btn-dark stretch-link');
   $('.featured-item:first h4').append('<span class="badge bg-secondary" style="margin-left: 10px">Novo</span>')

   //EVENTOS
   $('.featured-item h4').dblclick(function () {
      //TODO: lIMPAR CSS DOS DEMAIS. 
      $(this).css({
         'font-weight': '100',
         'font-size': '30px'
      });

   });

   $('.featured-item a').on('blur', function (event) {

      event.preventDefault();

      alert('Produto esgotado');

   })


   $('#botao-pesquisa').click(function (event) {
      let valorPesquisa = $('#pesquisa')[0].value
      if (valorPesquisa == "") {
         alert('Por favor digite informacoes validas na caixa de pesquisa')
      }
      else {
         alert('Produto ' + valorPesquisa + ' esgotado!')
      }
   })

   $(".burger-menu ").on("click", ".bar", function () {

      $(".menu").slideToggle();
      $(".bar").toggleClass('change');
      $(".menu li").slideRight();

   });











})
