document.getElementById('user-Login-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const loginName = document.getElementById('user-Login-name').value;
        const loginPass = document.getElementById('user-Login-pass').value;
        const storedUser = JSON.parse(localStorage.getItem(loginName));

        if (storedUser && storedUser.password === loginPass) {
            showSectionByIdTwo('home-page');
        }
        else {
            alert('Wrong Name or Password.')
        }
        document.getElementById('user-Login-name').value = '';
        document.getElementById('user-Login-pass').value = '';
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
        document.getElementById('admin-Login-name').value = '';
        document.getElementById('admin-Login-pass').value = '';

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
        showSectionByIdTwo('index');
    })
document.getElementById('admin-logout')
    .addEventListener('click', function () {
        event.preventDefault();
        showSectionByIdTwo('index');
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
        showSectionByIdFour('faqs-container-1');
    });
document.getElementById('cases-4')
    .addEventListener('click', function () {
        event.preventDefault();
        showSectionByIdFour('cases-container-1');
    });
document.getElementById('blog-4')
    .addEventListener('click', function () {
        event.preventDefault();
        showSectionByIdFour('blog-container-1');
    });
document.getElementById('inbox-4')
    .addEventListener('click', function () {
        event.preventDefault();
        showSectionByIdFour('inbox-container-1');
    });

document.getElementById('send-message')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const clientName = document.getElementById('client-name').value;
        const clientEmail = document.getElementById('client-email').value;
        const requestType = document.getElementById('request-type').value;
        const clientRequest = document.getElementById('client-request').value;

        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card bg-neutral text-neutral-content w-11/12 mx-auto">
  <div class="p-3 font-semibold">
    <p class="mb-5">Name: ${clientName}</p>
    <p>Email: ${clientEmail}</p>
    <p class="my-5">Type of request: ${requestType}</p>
    <p class="mb-5">Request details: ${clientRequest}</p>
    <div class="flex justify-around items-center">
      <button class="btn btn-primary" id="${clientName}">Accept</button>
      <button class="btn btn-primary" id="${clientName}-1">Deny</button>
    </div>
  </div>
</div>
        `
        document.getElementById('inbox-container-2').appendChild(div);
        document.getElementById('client-name').value = '';
        document.getElementById('client-email').value = '';
        document.getElementById('request-type').value = '';
        document.getElementById('client-request').value = '';
    });

document.getElementById('post-blog')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const blogPost = document.getElementById('blog-post').value;
        const blogTitle = document.getElementById('blog-title').value;
        const div2 = document.createElement('div');
        div2.innerHTML = `
<div class="card bg-neutral text-neutral-content mb-8">
  <div class="p-3 font-semibold">
    <p class="mb-3 font-bold">${blogTitle}</p>
    <p class="">${blogPost}</p>
  </div>
</div>
`
        const div3 = document.createElement('div');
        div3.innerHTML = `
<div class="card bg-neutral text-neutral-content mb-8">
  <div class="p-3 font-semibold">
    <p class="mb-3 font-bold">${blogTitle}</p>
    <p class="">${blogPost}</p>
  </div>
</div>
`
        document.getElementById('blog-container-9').appendChild(div3);
        document.getElementById('blog-container-4').appendChild(div2);
        document.getElementById('blog-post').value = '';
        document.getElementById('blog-title').value = '';
    });

document.getElementById('toggle-to-login')
    .addEventListener('click', function (event) {
        event.preventDefault();

        toggleForms('login-form')
    });
document.getElementById('toggle-to-reg')
    .addEventListener('click', function (event) {
        event.preventDefault();

        toggleForms('register-form')
    });

document.getElementById('user-register-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const username = document.getElementById('register-username').value;
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('register-confirm-password').value;

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }
        const user = { username, password };
        localStorage.setItem(username, JSON.stringify(user));
        alert("Registration successful!");
        document.getElementById('register-username').value = '';
        document.getElementById('register-password').value = '';
        document.getElementById('register-confirm-password').value = '';
        toggleForms('login-form');
    });