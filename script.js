function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Dark / light mode

const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2");
const themeIcons = document.querySelectorAll(".icon");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  setDarkMode();
}

btn.addEventListener("click", function () {
  btn.classList.toggle("active");
  setTheme();
});

btn2.addEventListener("click", function () {
  btn2.classList.toggle("active");
  setTheme();
});

function setTheme() {
  const currentTheme = document.body.getAttribute("theme");

  if (currentTheme === "dark") {
    setLightMode();
  } else {
    setDarkMode();
  }
}

function setDarkMode() {
  document.body.setAttribute("theme", "dark");
  localStorage.setItem("theme", "dark");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-dark");
  });

  updateBackground("profile", "./assets/grid-dark.png");
  updateBackground("experience-container", "./assets/we-dark.png");
  updateBackground("works-container", "./assets/digits-dark.png");
}

function setLightMode() {
  document.body.removeAttribute("theme");
  localStorage.setItem("theme", "light");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-light");
  });

  updateBackground("profile", "./assets/grid-light.png");
  updateBackground("experience-container", "./assets/we-light.png");
  updateBackground("works-container", "./assets/digits-light.png");
}

function updateBackground(elementId, imageUrl) {
  const element = document.getElementById(elementId);
  if (element) {
    element.style.backgroundImage = `url("${imageUrl}")`;
  }
}


const languages = {
  tr: {
    language: "EN",
    idea__1: "Fikirlerinizi",
    idea__2: "Gerçeğe",
    idea__3: "Dönüştürüyoruz",

  },
  en: {
    language: "TR",
    idea__1: "We Bring",
    idea__2: "Your Ideas",
    idea__3: "To Life",

  },
};


document.addEventListener("DOMContentLoaded", function () {
  const currentLanguage = localStorage.getItem("language") || "tr";
  setLanguage(currentLanguage);
});


function toggleLanguage() {
  const currentLanguage = localStorage.getItem("language") || "tr";
  const newLanguage = currentLanguage === "tr" ? "en" : "tr";
  setLanguage(newLanguage);
}


function setLanguage(language) {
  localStorage.setItem("language", language);

  Object.keys(languages[language]).forEach(function (key) {
    const elements = document.querySelectorAll(`[data-translate="${key}"]`);
    elements.forEach(function (element) {
      element.textContent = languages[language][key];
    });
  });
}


function changeText(mode) {
  const bt_text = document.getElementById('bt-text');
  const tj_text = document.getElementById('tj-text');

  if (mode === 1) {
    bt_text.innerHTML = "Bu uygulama sayesinde bireysel bütçenizi veya ticari hesaplarınızı kontrol altında tutabilirsiniz." +
        "Gelir veya giderlerinizi kaydederek işlemlerinizi kolayca takip edebilirsiniz.<br><br>Bütçe Takip ile gelir ve giderlerinizi" +
        "kategorilere göre kaydederek anlık olarak istatiksel analizini yapabilir, işlemleri karşılaştırabilir ve bu sayede paranızın" +
        "cebinizde kalmasını sağlayabilirsiniz.";
  } else if(mode === 2) {
    bt_text.innerHTML = "Bu uygulama sayesinde bireysel bütçenizi veya ticari hesaplarınızı kontrol altında tutabilirsiniz.";
  } else{
    bt_text.innerHTML = "Bu mobil uygulama sayesinde bireysel bütçenizi veya ticari hesaplarınızı kontrol altında tutabilirsiniz.";
  }
}

function changeIconVisible(mode) {
  const icon_1 = document.getElementById('icon1');
  const icon_2 = document.getElementById('icon2');
  const icon_3 = document.getElementById('icon3');

  if (mode === 2) {
    icon_2.style.display = 'none';
    icon_1.style.display = 'flex';
    icon_3.style.display = 'flex';

  } else if(mode === 1){
    icon_2.style.display = 'flex';
    icon_3.style.display = 'flex';
    icon_1.style.display = 'none';
  } else {
    icon_1.style.display = 'flex';
    icon_3.style.display = 'none';
    icon_2.style.display = 'flex';
  }
}




function changeClass(mode) {
  const box1 = document.getElementById('box1');
  const box2 = document.getElementById('box2');
  const box3 = document.getElementById('box3');
  if (mode === 1) {
    changeText(1);

    if(box1.classList.contains('products-container-color-2')){
      box1.classList.remove('products-container-color-2');
      box1.classList.add('products-container-color-1');
    }

    if(box2.classList.contains('products-container-color-1')){
      box2.classList.remove('products-container-color-1');
      box2.classList.add('products-container-color-2');
    }

    if(box3.classList.contains('products-container-color-1')){
      box3.classList.remove('products-container-color-1');
      box3.classList.add('products-container-color-2');
    }

    changeIconVisible(1);
  }else if (mode === 2) {//2 yi büyültür
    changeText(2);

    if(box1.classList.contains('products-container-color-1')){
      box1.classList.remove('products-container-color-1');
      box1.classList.add('products-container-color-2');
    }

    if(box2.classList.contains('products-container-color-2')){
      box2.classList.remove('products-container-color-2');
      box2.classList.add('products-container-color-1');
    }

    if(box3.classList.contains('products-container-color-1')){
      box3.classList.remove('products-container-color-1');
      box3.classList.add('products-container-color-2');
    }

    changeIconVisible(2);
  }else {
    changeText(3);

    if(box1.classList.contains('products-container-color-1')){
      box1.classList.remove('products-container-color-1');
      box1.classList.add('products-container-color-2');
    }

    if(box2.classList.contains('products-container-color-1')){
      box2.classList.remove('products-container-color-1');
      box2.classList.add('products-container-color-2');
    }

    if(box3.classList.contains('products-container-color-2')){
      box3.classList.remove('products-container-color-2');
      box3.classList.add('products-container-color-1');
    }


    changeIconVisible(3);
  }
}