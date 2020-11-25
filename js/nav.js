document.addEventListener("DOMContentLoaded", function() {
  
    // Activate sidebar nav
    const elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems);
    loadNav();
    
   
    function loadNav() {
      
      const xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState === 4) {
          if (this.status != 200) return;
     
          // Muat daftar tautan menu
          document.querySelectorAll(".topnav, .sidenav").forEach(function(elm) {
            elm.innerHTML = xhttp.responseText;
          });
     
          // Daftarkan event listener untuk setiap tautan menu
          document.querySelectorAll(".sidenav a, .topnav a").forEach(function(elm) {
            elm.addEventListener("click", function(event) {
              // Tutup sidenav
              const sidenav = document.querySelector(".sidenav");
              M.Sidenav.getInstance(sidenav).close();
     
              // Muat konten halaman yang dipanggil
              page = event.target.getAttribute("href").substr(1);
              loadPage(page);
            });
          });
        }
      };
      xhttp.open("GET", "nav.html", true);
      xhttp.send();
    }

    // Load page content
    var page = window.location.hash.substr(1);
    if (page === "") page = "home";
    loadPage(page);
});

function hashHandler() {
  console.log('The hash has changed!');

  var page = window.location.hash.substr(1);
  if (page === "") page = "home";
  loadPage(page);
}
  
window.addEventListener('hashchange', hashHandler, false);

function loadPage(page) {
  var id_team = "";
  pageSplit = page.split("?id=");
  page = pageSplit[0];
  if(pageSplit[1] !== undefined){
    id_team = pageSplit[1];
  }

  fetch(`pages/${page}.html`, {
    method: 'GET'
  })
  .then(status)
  .then(text)
  .then(function(innerHTML) {
      const content = document.querySelector("#body-content");
      content.innerHTML = innerHTML;

      if(page === "home"){
        getAllTeams();
      }
      else if(page === "favorite"){
        getDbAll();
      }
      else if(page === "detail"){
        console.log('detail ', id_team);
        getTeamDetail(id_team);
      }
  }).catch(error);
}