const container = document.querySelector('.container');
const loginlink = document.querySelector('.loginlink');
const registerLink = document.querySelector('.registerlink');

loginlink.addEventListener('click', () =>
{
     container.classList.add('active');
   
})
registerLink.addEventListener('click', () =>{
    container.classList.remove('active');
})