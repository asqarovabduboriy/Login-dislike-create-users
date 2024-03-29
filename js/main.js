const API_URL = ' https://fakestoreapi.com/users';

async function users(api) {
    let data = await fetch(api);
    data
        .json()
        .then((res) => {
            createCard(res)
            console.log(res)
        })
        .catch(err => console.log(err))

    console.log(data);
}

users(API_URL)

const wrapper = document.querySelector('.wrapper');


function createCard(data) {
    while (wrapper.firstChild) {
        wrapper.firstChild.remove()
    }

    let fragment = document.createDocumentFragment();
    data.forEach((el) => {
        let div = document.createElement('div');
        div.classList.add('card')
        div.innerHTML = `
        <div data-id=${el.id}>
        <div class="card__img_content">
            <img src="https://pibig.info/uploads/posts/2023-11/1699046065_pibig-info-p-golova-na-belom-fone-vkontakte-1.png" alt="" width="100px">
        </div>
         <div class="card__text__content">
            <h1>Adress: ${el.address.city}</h1>
            <p>Adress-Number:${el.address.number} </p>
            <p>Email:${el.email} </p>
            <p>FiestNmae:${el.name.firstname}</p>
            <p>LastName: ${el.name.lastname}</p>
            <div class="span">Phone: ${el.phone}</div>
         </div>
         <div class="card__btn_content">
                  <button name="product_like" class="like">Like</button>
         </div>
       </div>
        
        `
        fragment.appendChild(div)
    });
    wrapper.appendChild(fragment)
}

const switchId = async (id) => {
    let data = await fetch(`${API_URL}/${id}`);
    data
        .json()
        .then(res => {
            let wishes = JSON.parse(localStorage.getItem('wishes')) || []
            let index = wishes.findIndex(el => el.id === +id);
            if (index < 0) {
                localStorage.setItem('wishes', JSON.stringify([...wishes, res]))
            }

        })
        .catch(err => console.log(err))

}
wrapper.addEventListener('click', (e) => {
    if (e.target.name === 'product_like') {
        let id = e.target.closest("[data-id").dataset.id;
        switchId(id)
    }


})




const navbarCollection = document.querySelector(".navbar__collection")
const navbarMenu = document.querySelector(".navbar__menu")

navbarMenu.addEventListener("click", () => {
    navbarCollection.classList.toggle('show')
})