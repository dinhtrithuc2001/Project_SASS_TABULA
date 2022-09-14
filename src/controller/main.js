var service = new Service();

function getEle(id){
    return document.getElementById(id);
}

function fetchData(){
    // pending
    getEle("loader").style.display = "block";
    service
    .getListTeachers()
    .then((result) => {
        renderHTML(result.data);
        getEle("loader").style.display = "none";
    })
    .catch((error) => {
        console.log(error);
    })

}

fetchData();

function renderHTML(data){
    var content ="";
    data.forEach((item) => {
        content += `<div class="teachers__item col-lg-3 col-12 col-md-4 col-sm-6">
        <div class="teachers__card">
          <div class="teachers__card__img">
            <img class="img-fluid" src="./img/${item.hinhAnh}" alt="">
          </div>
          <div class="teachers__card__text">
            <h4>${item.nation}</h4>
            <h2>${item.name}</h2>
            <p>${item.info}</p>
          </div>
        </div>
      </div>`
    })

    getEle("teachers").innerHTML = content;

}