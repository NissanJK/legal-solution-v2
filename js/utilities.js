function showSectionById(id) {
    document.getElementById('admin-login').classList.add('hidden');
    document.getElementById('user-login').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}

function changeColorById(id) {
    document.getElementById('user-login-panel').classList.add('btn-outline');
    document.getElementById('admin-login-panel').classList.add('btn-outline');
    document.getElementById(id).classList.remove('btn-outline');
}
function showSectionByIdTwo(id) {
    document.getElementById('index').classList.add('hidden');
    document.getElementById('home-page').classList.add('hidden');
    document.getElementById('admin-page').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}
function showSectionByIdThree(name) {
    document.getElementById('home-container').classList.add('hidden');
    document.getElementById('services-container').classList.add('hidden');
    document.getElementById('cases-container').classList.add('hidden');
    document.getElementById('blog-container').classList.add('hidden');
    document.getElementById('inbox-container').classList.add('hidden');
    document.getElementById(name).classList.remove('hidden');
}

function changeColorByIdTwo(id) {
    document.getElementById('home').classList.remove('underline');
    document.getElementById('services').classList.remove('underline');
    document.getElementById('cases').classList.remove('underline');
    document.getElementById('blog').classList.remove('underline');
    document.getElementById('inbox').classList.remove('underline');
    document.getElementById(id).classList.add('underline');
}
function showSectionByIdFour(name) {
    document.getElementById('faqs-container-1').classList.add('hidden');
    document.getElementById('cases-container-1').classList.add('hidden');
    document.getElementById('blog-container-1').classList.add('hidden');
    document.getElementById('inbox-container-1').classList.add('hidden');
    document.getElementById(name).classList.remove('hidden');
}

function changeColorByIdThree(id) {
    document.getElementById('faqs-3').classList.remove('underline');
    document.getElementById('cases-3').classList.remove('underline');
    document.getElementById('blog-3').classList.remove('underline');
    document.getElementById('inbox-3').classList.remove('underline');
    document.getElementById(id).classList.add('underline');
}