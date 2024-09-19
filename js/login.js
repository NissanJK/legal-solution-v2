document.getElementById('Login-btn')
    .addEventListener('click', function(event){
        event.preventDefault();

        const loginName = document.getElementById('Login-name').value;
        const loginPass = document.getElementById('Login-pass').value;

        if((loginName === 'user1' && loginPass === '1111')||(loginName === 'user2' && loginPass === '2222')||(loginName === 'user3' && loginPass === '3333')||(loginName === 'user4' && loginPass === '4444')){
            window.location.href = './home_page.html';
        }
        else if(loginName === 'admin' && loginPass === '1234'){
            window.location.href = './admin_page.html';
        }
        else{
            alert('Wrong Name or Password.')
        }
});
