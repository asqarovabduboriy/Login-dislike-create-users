const form = document.querySelector('.form');
const Inputusername = document.querySelector('.username');
const userpasword = document.querySelector('.userpasword');
const error = document.querySelector('.error');
const errorclose = document.querySelector('.error__close');
const succses = document.querySelector('.success');
const successclose =document.querySelector('.success__close');
const LOGIN_URL = 'https://fakestoreapi.com/auth/login';




form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let user = {
        username: Inputusername.value,
        password: userpasword.value
    }
    await fetch(LOGIN_URL, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(user)
    })

        .then(res => res.json())
        .then(res => {
            console.log(res.token),
                localStorage.setItem('token', res.token)
                succses.style.display = 'flex';
        })

        .catch(err => {
            error.style.display = 'flex'
        }
        )
})


errorclose.addEventListener('click', () => {
    error.style.display = 'none'
})

successclose.addEventListener('click', () => {
    succses.style.display = 'none'
})






const navbarCollection = document.querySelector(".navbar__collection")
const navbarMenu = document.querySelector(".navbar__menu")

navbarMenu.addEventListener("click", () => {
    navbarCollection.classList.toggle('show')
})