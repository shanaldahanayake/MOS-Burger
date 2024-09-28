const burgerItems=["Classic Burger(Large)","Classic Burger(Regular)","Turkey Burger","Chicken Burger(Large)","Chicken Burger(Regular)","Cheese Burger(Regular)","Cheese Burger(Large)","Bacon Burger","Shawarma Burger","Olive Burger","Double-Cheese Burger","Crispy Chicken Burger(Regular)","Crispy Chicken Burger(Large)","Panner Burger"];

const dropdownMenuBurger=document.getElementById("drop-down-menu-burger");

burgerItems.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.classList.add('dropdown-item');
    a.href = "#"; 
    a.innerHTML = item;
    li.appendChild(a);
    dropdownMenuBurger.appendChild(li);
  });


const subItems=["Crispy Chicken Submarine(Large)","Crispy Chicken Submarine(Regular)","Chicken Submarine(Large)","Chicken Submarine(Regular)","Grinder Submarine","Cheese Burger","Double Cheese and Chicken Submarine","Special Horgie Submarine","MOS Special Submarine"];

const dropdownMenuSub=document.getElementById("drop-down-menu-sub");

subItems.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.classList.add('dropdown-item');
    a.textContent = item;
    li.appendChild(a);
    dropdownMenuSub.appendChild(li);
  });

const fryItems=["Steak Fries(Large)","Steak Fries(Medium)","French Fries(Large)","French Fries(Medium)","French Fries(Small)","Sweet Potato Fries(Large)"];
const dropdownMenuFries=document.getElementById("drop-down-menu-fries");

fryItems.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.classList.add('dropdown-item');
    a.href = "#"; 
    a.textContent = item;
    li.appendChild(a);
    dropdownMenuFries.appendChild(li);
  });

  const pastaItems=["Chicken and Cheese Pasta","Chicken Penne Pasta","Ground Turkey Pasta Bake","Creamy Shrimp Pasta","Lemon Butter pasta","Tagliatella Pasta","Baked Ravioli"];
  const dropdownMenuPasta=document.getElementById("drop-down-menu-pasta");

  pastaItems.forEach(item => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.classList.add('dropdown-item');
      a.href = "#"; 
      a.textContent = item;
      li.appendChild(a);
      dropdownMenuPasta.appendChild(li);
    });


  const chickenItems=["Fried Chicken(Small)","Fried Chicken(Regular)","Fried Chicken(Large)","Hot Wings(Large)","Devilled Chicken(Large)","BBQ Chicken(Regular)"];
  const dropdownMenuChicken=document.getElementById("drop-down-menu-chicken");

  chickenItems.forEach(item => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.classList.add('dropdown-item');
      a.href = "#"; 
      a.textContent = item;
      li.appendChild(a);
      dropdownMenuChicken.appendChild(li);
    });

  const  beveragesItems=["Pepsi(330ml)","Coca-Cola(330ml)","Sprite(330ml)","Mirinda(330ml)"];
  const dropdownMenuBeverages=document.getElementById("drop-down-menu-beverages");

  beveragesItems.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.classList.add('dropdown-item');
    a.href = "#"; 
    a.textContent = item;
    li.appendChild(a);
    dropdownMenuBeverages.appendChild(li);
  });