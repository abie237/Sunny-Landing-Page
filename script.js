let navBtn = document.querySelector('.nav-btn');
console.log(navBtn);
let navvMenu = document.querySelector('.responsive-navbar-container');
console.log(navvMenu)

navBtn.addEventListener('click', e=>{
   navvMenu.classList.toggle('visible');

   if(navBtn.classList.contains('fa-bars')){
    navBtn.classList.remove('fa-bars');
    navBtn.classList.add('fa-xmark');
   }else{
    navBtn.classList.remove('fa-xmark');
    navBtn.classList.add('fa-bars');
   }
});

/*end*/