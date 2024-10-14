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