document.getElementById('user-Login-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const loginName = document.getElementById('user-Login-name').value;
        const loginPass = document.getElementById('user-Login-pass').value;

        if ((loginName === 'user1' && loginPass === '1111')/*||(loginName === 'user2' && loginPass === '2222')||(loginName === 'user3' && loginPass === '3333')||(loginName === 'user4' && loginPass === '4444')*/) {
            showSectionByIdTwo('home-page');
        }
        else {
            alert('Wrong Name or Password.')
        }
    });
document.getElementById('admin-Login-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const loginName = document.getElementById('admin-Login-name').value;
        const loginPass = document.getElementById('admin-Login-pass').value;

        if (loginName === 'admin' && loginPass === '1234') {
            showSectionByIdTwo('admin-page');
        }
        else {
            alert('Wrong Name or Password.')
        }
    });

document.getElementById('user-login-panel')
    .addEventListener('click', function () {
        event.preventDefault();
        showSectionById('user-login');
        changeColorById('user-login-panel');
    });
document.getElementById('admin-login-panel')
    .addEventListener('click', function () {
        event.preventDefault();
        showSectionById('admin-login');
        changeColorById('admin-login-panel');
    });
document.getElementById('user-logout')
    .addEventListener('click', function () {
        event.preventDefault();
        showSectionById('index');
    })
document.getElementById('admin-logout')
    .addEventListener('click', function () {
        event.preventDefault();
        showSectionById('index');
    })