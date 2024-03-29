let wishes = JSON.parse(localStorage.getItem('wishes'));

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
                  <button name="product_like" class="like">DisLike</button>
         </div>
       </div>
        
        `
        fragment.appendChild(div)
    });
    wrapper.appendChild(fragment)
}

createCard(wishes);
const removWishe = (id) => {
    let filterData = wishes.filter(el => el.id !== +id);
    localStorage.setItem('wishes', JSON.stringify(filterData));
    createCard(filterData)
    window.location.reload();
}

wrapper.addEventListener('click', (e) => {
    if (e.target.name === 'product_like') {
        let id = e.target.closest("[data-id]").dataset.id;
        removWishe(id);
    }
})


let islogin = localStorage.getItem('token');


    const chechlogin = () => {
        if (!islogin) {
            window.location.replace('/page/login.html', '_self')
        }
    }
    chechlogin()

