const BASE_URL = "https://api.football-data.org/v2/";
const API_TOKEN = "346f694325944b17920a24df2805220e";

function status (response) {
    if (response.status !== 200) {
        console.log('Error : ' + response.status);
        // Method reject() akan membuat blok catch terpanggil
        return Promise.reject(new Error(response.statusText));
    } else {
        // Mengubah suatu objek menjadi Promise agar bisa "di-then-kan"
        return Promise.resolve(response);
    }
}

function json (response) {
    // Mengembalikan sebuah Promise berupa objek/array JavaScript
    // yang diubah dari teks JSON. 
    return response.json();
}

function text (response) {
    // Mengembalikan sebuah Promise berupa objek/array JavaScript
    // yang diubah dari teks JSON. 
    return response.text();
}

function error (error) {
    // Parameter error berasal dari Promise.reject() 
    console.log('Error : ' + error);
}

const headers = new Headers();
// headers.append('Content-Type', 'application/json');
headers.append('X-Auth-Token', API_TOKEN);

function getAllTeams(){

    const ENDPOINT_ALLTEAM = `${BASE_URL}teams`;

    if ("caches" in window) {
        caches.match(ENDPOINT_ALLTEAM).then(function (response) {
            if (response) {
                response.json().then(function (data) {
                    console.log("All Team Data: " + data);
                    hideLoading();
                    showAllTeams(data.teams);
                })
            }
        })
    }

    fetch(ENDPOINT_ALLTEAM, {
        method: 'GET',
        headers: headers,
    })
    .then(status)
    .then(json)
    .then(function(data) {
        console.log(data);
        hideLoading();
        showAllTeams(data.teams);
    }).catch(error);
}

function getTeamDetail(id_team){

    const ENDPOINT_DETAIL_TEAM = `${BASE_URL}teams/${id_team}`;

    if ("caches" in window) {
        caches.match(ENDPOINT_DETAIL_TEAM).then(function (response) {
            if (response) {
                response.json().then(function (data) {
                    console.log("Detail Data: " + data);
                    hideLoading();
                    showDetailTeam(data);
                })
            }
        })
    }

    fetch(ENDPOINT_DETAIL_TEAM, {
        method: 'GET',
        headers: headers,
    })
    .then(status)
    .then(json)
    .then(function(data) {
        // Objek/array JavaScript dari response.json() masuk lewat data.
        console.log(data);
        hideLoading();
        showDetailTeam(data)
    }).catch(error);
}

//====================== View Handling =======================

const showAllTeams = (teams) => {
    const element = document.querySelector("#listMeals");
    element.innerHTML = "";
    
    teams.forEach(team => {
        console.log(team);
        element.innerHTML += `
        <div class="col s12 l4">
            <div class="card" >
            <div class="card-image">
                <img src="${team.crestUrl}" alt="${team.name}" style="height: 5em;width: auto;display: block;margin-left: auto;margin-right: auto;"/>
            </div>
            <div class="card-stacked">
                <div class="card-content">
                    <h5>${team.name}</h5>
                    <p>Founded: ${team.founded}</p>
                    <p>Venue: ${team.venue}</p>
                </div>
                <div class="card-action">
                    <a href='#detail?id=${team.id}' class="waves-effect waves-light btn button-detail">Baca Selengkapnya</a>
                    <a class="waves-effect waves-light btn button-favorite" id='${JSON.stringify(team)}'>Favorite</a>
                </div>
            </div>
            </div>
        </div>
        `;
    });
    
    const btnFavorite = document.querySelectorAll(".button-favorite");
    btnFavorite.forEach(button => {
        button.addEventListener("click", event => {
            var obj = event.target.id;
            saveDb(obj);
        })
    })
};

const showDetailTeam = (team) => {
    
        const element = document.querySelector("#detail");
        element.innerHTML += `
            <div class="col-sm-12" style="margin-top: 12px;">
                <div class="card">
                    <div class="card-body">
                        
                        <h2>${team.name}</h2>
                        <h5>Short Name: ${team.shortName}</h5>
                        <h5>Area: ${team.area.name}</h5>
                        <h5>Venue: ${team.venue}</h5>
                        <h5>Address: ${team.address}</h5>
                        <h5>Email: ${team.email}</h5>
                    </div>
                </div>
            </div>
        `;

        team.squad.forEach(squad => {
            element.innerHTML += `
            <div class="col s12 l4">
                <div class="card" >
                <div class="card-stacked">
                    <div class="card-content">
                        <h5>${squad.name}</h5>
                        <p>Position: ${squad.position}</p>
                        <p>Role: ${squad.role}</p>
                    </div>
                </div>
                </div>
            </div>
            `;
        });
};

function hideLoading() {
    var loading = document.getElementById("loading");
    loading.className = loading.className.replace(" active", "");
}