// <!-- 
// Wskazówki

//     Zastanów się jakich elementów będziesz potrzebował/a (jakie elementy będziesz musiał/a pobrać za pomocą np. querySelectora).
//     Stwórz funkcję, która będzie się odpalała, kiedy wpiszemy coś do inputa.
//     Funkcja ma porównywać to, co wpisaliśmy w inputa z każdym napojem na liście.
//     Za pomocą instrukcji warunkowej sprawdź, czy dane z inputa pokrywają się z nazwą napoju. Jeśli nie, ukryj taki napój.
//     Żeby aplikacja działała poprawnie, musimy się zabezpieczyć. Użytkownik może podać nazwę napoju dużymi lub małymi literami. Musimy więc sprowadzić to, co wpisuje użytkownik do np. małych liter (tak samo trzeba zrobić z listą napojów).


// Podpowiedzi do wskazówek

//     Trzeba będzie stworzyć 2 zmienne, które będą przechowywały inputa oraz listę napojów (wszystkie <li>).
//     addEventListener na event 'keyup'.
//     Chcemy przeszukać całą listę napojów i na każdym z nich wykonać dokładnie tę samą funkcję. Brzmi jak zadanie dla pętli, prawda? ;)
//     Warto też zauważyć, że skoro pobraliśmy wszystkie <li> do jednej zmiennej, to mamy obiekt tablico podobny – idealnie! Pętle z tablicami się przecież bardzo lubią. :)
//     Co więcej, mamy taką metodę (coś z indeksem w nazwie), która sprawdza, czy jakiś znak / jakieś znaki są w danym stringu. Jeśli nie ma, to zwraca wartość -1.
//     Jeśli coś zwróci -1 to taki napój należy ukryć. display: none; robi robotę. ;)
//     Mamy takie dwie fajne metody – toUpperCase lub toLowerCase. :) -->



const search = document.querySelector(".search")
const li = document.querySelectorAll("li")

const searchEngine = e => {
	const text = e.target.value.toLowerCase()
	

   li.forEach(el => {     
      if (el.textContent.toLowerCase().indexOf(text) !== -1) {
         el.style.display = 'block'
      } else {
         el.style.display = 'none'
      }

   })
}

search.addEventListener('keyup', searchEngine)




// 1. Listener nasluchuje na zmiany w Inpucie
// 2. e.target wskazuje na input .e.target.value wskazuje na wartość inputa, cyzli TextTrackList, który wpisujemy.
// 3. Zmienna li przechowuje wszystkie napoje.
// 4. el odnosi sie do kazdego li na liście.