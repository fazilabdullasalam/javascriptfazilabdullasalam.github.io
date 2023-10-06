$(document).ready(function () {
   // Initial page load
   loadPage('index');

   // Navigation click event handler
   $('nav a').click(function (e) {
       e.preventDefault();
       const target = $(this).attr('href').replace('#', '');
       loadPage(target);
   });

   async function loadPage(pageName)
   {
      console.log(pageName)
      content.innerHTML = await (await fetch(`${pageName}`)).text();
   }

});
