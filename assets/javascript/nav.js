function openNav(id){
    let navElement = document.getElementById(id);
    navElement.style.width = '100vw';
    navElement.style.height = '100vh';
}

function closeNav(id){
    let navElement = document.getElementById(id);
    navElement.style.width = '0vw';
    navElement.style.height = '0vh';
}