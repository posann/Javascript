// membuat program pengecekan user

// function untuk melakukan pengecekan user berdasarkan data user
function CekUser(data_username, data_password){
    let user = [
        ['admin', 'admin123'],
        ['santri', 'santri123'],
        ['hasan', 'hasanganteng']
    ]

    for (user of user){
        let u = user[0] // ini adalah username
        let p = user[1] // ini adalah password

        if (u == data_username && p == data_password) 
        {
            window.location = "home.html"
        }
    }
}

// function untuk melakukan pengecekan inputan user
function Login(){
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value

    if (username.length < 1 || password.length < 1) 
    {
        alert("Isi username atau password terlebih dahulu")
    }

    else if (password.length < 8)
    {
        alert("Password minimal 8 karakter")
    }

    else {
        CekUser(username, password)
    }

}

document.getElementById('simpan').addEventListener('click', Login)