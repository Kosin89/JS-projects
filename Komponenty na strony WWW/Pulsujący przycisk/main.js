const btn = document.querySelector(".btn")
// odwłoanie do jednego przycisku jeżeli jest na stronie
const btns = document.querySelectorAll(".btn")
// tutaj pobieramy wszystkie przyciski które są z klasa btn i będziemy odwoływać się do wszystkich

const btnAnimation = e => {
   const top = e.clientY
   const left = e.clientX
   // pozycja w którą klikamy
   
   const btnTopPosition = e.target.offsetTop
   const btnLeftPosition = e.target.offsetLeft
   // Pozycja przycisku
   
   const insideBtnTop = top - btnTopPosition
   const insideBtnLeft = left - btnLeftPosition
   
   const circle = document.createElement("span")
   circle.classList.add("circle")
   e.target.append(circle)
   // tworzymy klase i dodajemy do przycisku, klasa circle jest ostylowana w CSS
   
   circle.style.top = insideBtnTop + "px"
   circle.style.left = insideBtnLeft + "px"
   // przypisujemy pozycje do przycisku za pomoca styli musimy dodac na końcu "px"

   setTimeout(() => {
      circle.remove()
   }, 300);
   // na koncu usuwamy klase, musimy dodac setTimeout, bez tego zaraz po dodaniu klasy zostanie ona usunięta więc nie bedziemy widzieli w ogole efektu bo robi to się szybko. Dodajemy 300ms bo tyle trwa nasza animacja dodana w css i jest to wszystko płynne i wystarczające żeby klasa mogła się pokazać i żeby nie wpływało to źle na wyświetlenie

}


btn.addEventListener("click", btnAnimation)
// nasluchujemy na jeden przycisk

btns.forEach(btn => {
   btn.addEventListener("click", btnAnimation)
});
//nasluchujemy na wszystkie przyciski przez pętle