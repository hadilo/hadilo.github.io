const DB_NAME = "football";
const VERSION = 1;

var dbPromise = idb.open(DB_NAME, VERSION, function(upgradeDb) {
    if (!upgradeDb.objectStoreNames.contains("team")) {
        upgradeDb.createObjectStore("team", {
            keyPath: 'id',
            unique: true
        });
    }
});

//create
function saveDb(obj){
    var team = JSON.parse(obj);
    console.log('depan', team);
    dbPromise.then(function(db) {
        var tx = db.transaction('team', 'readwrite');
        var store = tx.objectStore('team');

        store.add(team);
        return tx.complete;
    
    }).then(function() {
        console.log('Buku berhasil disimpan.');
    
    }).catch(function() {
        console.log('Buku gagal disimpan.')
    })
}

//get All
function getDbAll(){
    dbPromise.then(function(db) {
        var tx = db.transaction('team', 'readonly');
        var store = tx.objectStore('team');
        return store.getAll();
    
    }).then(function(items) {
        console.log('Data yang diambil: ');
        console.log(items);
        hideLoading();
        showAllTeamFavorites(items);
    });
}

//delete
function deleteDb(id){
    dbPromise.then(function(db) {
        var tx = db.transaction('team', 'readwrite');
        var store = tx.objectStore('team');
        store.delete(id);
        return tx.complete;
      
    }).then(function() {
        console.log('Item deleted');
        getDbAll();
    }).catch(function() {
        console.log('Buku gagal disimpan.')
    });
}

const showAllTeamFavorites = (teams) => {
    const element = document.querySelector("#favorite");
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
                    <a class="waves-effect waves-light btn button-remove" id='${team.id}'>Hapus Favorite</a>
                </div>
            </div>
            </div>
        </div>
        `;
    });

    const btnRemove = document.querySelectorAll(".button-remove");
    btnRemove.forEach(button => {
        button.addEventListener("click", event => {
            const id = event.target.id;
            deleteDb(parseInt(id));
        })
    })
};