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

document.getElementById('home')
    .addEventListener('click', function () {
        event.preventDefault();
        showSectionByIdThree('home-container');
        changeColorByIdTwo('home');
    });
document.getElementById('services')
    .addEventListener('click', function () {
        event.preventDefault();
        showSectionByIdThree('services-container');
        changeColorByIdTwo('services');
    });
document.getElementById('cases')
    .addEventListener('click', function () {
        event.preventDefault();
        showSectionByIdThree('cases-container');
        changeColorByIdTwo('cases');
    });
document.getElementById('blog')
    .addEventListener('click', function () {
        event.preventDefault();
        showSectionByIdThree('blog-container');
        changeColorByIdTwo('blog');
    });
document.getElementById('inbox')
    .addEventListener('click', function () {
        event.preventDefault();
        showSectionByIdThree('inbox-container');
        changeColorByIdTwo('inbox');
    });
document.getElementById('home2')
    .addEventListener('click', function () {
        event.preventDefault();
        showSectionByIdThree('home-container');
    });
document.getElementById('services2')
    .addEventListener('click', function () {
        event.preventDefault();
        showSectionByIdThree('services-container');
    });
document.getElementById('cases2')
    .addEventListener('click', function () {
        event.preventDefault();
        showSectionByIdThree('cases-container');
    });
document.getElementById('blog2')
    .addEventListener('click', function () {
        event.preventDefault();
        showSectionByIdThree('blog-container');
    });
document.getElementById('inbox2')
    .addEventListener('click', function () {
        event.preventDefault();
        showSectionByIdThree('inbox-container');
    });

    document.getElementById('faqs-3')
    .addEventListener('click', function () {
        event.preventDefault();
        showSectionByIdFour('faqs-container-1');
        changeColorByIdThree('faqs-3');
    });
document.getElementById('cases-3')
    .addEventListener('click', function () {
        event.preventDefault();
        showSectionByIdFour('cases-container-1');
        changeColorByIdThree('cases-3');
    });
document.getElementById('blog-3')
    .addEventListener('click', function () {
        event.preventDefault();
        showSectionByIdFour('blog-container-1');
        changeColorByIdThree('blog-3');
    });
document.getElementById('inbox-3')
    .addEventListener('click', function () {
        event.preventDefault();
        showSectionByIdFour('inbox-container-1');
        changeColorByIdThree('inbox-3');
    });

    document.getElementById('faqs-4')
    .addEventListener('click', function () {
        event.preventDefault();
        showSectionByIdThree('faqs-container-1');
    });
document.getElementById('cases-4')
    .addEventListener('click', function () {
        event.preventDefault();
        showSectionByIdThree('cases-container-1');
    });
document.getElementById('blog-4')
    .addEventListener('click', function () {
        event.preventDefault();
        showSectionByIdThree('blog-container-1');
    });
document.getElementById('inbox-4')
    .addEventListener('click', function () {
        event.preventDefault();
        showSectionByIdThree('inbox-container-1');
    });