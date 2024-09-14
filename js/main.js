function showMenu(){
  let menuList = document.getElementById("menu");
  let btn = document.getElementById("btn");
  if (menuList.style.display == 'none') {
    menuList.style.display = 'block'
    menuList.style.animation = "fadeinList 1s ease";
    btn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  } 
  else{
    btn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    menuList.style.display = 'none'
};
}
let menuItems = document.querySelectorAll('.list-item')
menuItems.forEach((x)=>{
  let item = x.innerHTML;
  console.log(item);
})
document.getElementById('about-link').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default link behavior
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('skills-link').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default link behavior
  document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('project-link').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default link behavior
  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});