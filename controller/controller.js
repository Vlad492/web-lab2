   if(document.getElementById('add-contact')){
    document.getElementById('add-contact').addEventListener('click', (e) => {
        contactsStore.dispatch({
            type: 'ADD_CONTACT',
            name: document.getElementById('exampleInputEmail3').value,
            number: document.getElementById('exampleInputPassword3').value
        })
        document.getElementById('exampleInputEmail3').value = ''
        document.getElementById('exampleInputPassword3').value = ''
    })
   }
document.getElementById('register-button').addEventListener('click', (e) => {
    usersStore.dispatch({
        type: 'ADD_USER',
        email: document.getElementById('register-email').value,
        password: document.getElementById('register-password').value
    })
    document.getElementById('register-email').value = ''
    document.getElementById('register-password').value = ''
})
document.getElementById('login-button').addEventListener('click', (e) => {
    const data = usersStore.getState()
    let email = document.getElementById('login-email').value
    let password = document.getElementById('login-password').value
    let logged = data.find((elem) => elem.email === email && elem.password === password)
    if (logged) {
        localStorage.setItem('login',logged.email)
        localStorage.setItem('password',logged.password)
        Login.successfullLogin()
    }
    document.getElementById('login-email').value = ''
    document.getElementById('login-password').value = ''
})

