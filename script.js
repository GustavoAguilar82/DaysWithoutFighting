const firstDate = new Date("03/27/2022");
let diferencia = new Date().getTime() - firstDate.getTime();
let diasSinPelear = Math.ceil(diferencia /1000/60/60/24);
document.getElementById("diasSinPelear_number").innerHTML = diasSinPelear;

const tomorrow = new Date().setDate(new Date().getDate() + 1)
const countToDate =  new Date(tomorrow).setHours(0,0,0,0)//contar hasta mañana

console.log(new Date(countToDate));
let previousTimeBetweenDates

setInterval(() => {   //me cuenta los segundos
  const currentDate = new Date(); //fecha actual
  const timeBetweenDates = Math.ceil(new Date(countToDate - currentDate) /1000) //tiempo entre fechas en horas
  flipAllCards(timeBetweenDates)
  previousTimeBetweenDates = timeBetweenDates
}, 250)

function flipAllCards(time) {
  const seconds = time % 60
  const minutes = Math.floor(time / 60) % 60
  const hours = Math.floor(time / 3600)

  flip(document.querySelector("[data-hours-tens]"), Math.floor(hours / 10))
  flip(document.querySelector("[data-hours-ones]"), hours % 10)
  flip(document.querySelector("[data-minutes-tens]"), Math.floor(minutes / 10))
  flip(document.querySelector("[data-minutes-ones]"), minutes % 10)
  flip(document.querySelector("[data-seconds-tens]"), Math.floor(seconds / 10))
  flip(document.querySelector("[data-seconds-ones]"), seconds % 10)
}

function flip(flipCard, newNumber) {
  const topHalf = flipCard.querySelector(".top")
  const startNumber = parseInt(topHalf.textContent)
  if (newNumber === startNumber) return

  const bottomHalf = flipCard.querySelector(".bottom")
  const topFlip = document.createElement("div")
  topFlip.classList.add("top-flip")
  const bottomFlip = document.createElement("div")
  bottomFlip.classList.add("bottom-flip")

  top.textContent = startNumber
  bottomHalf.textContent = startNumber
  topFlip.textContent = startNumber
  bottomFlip.textContent = newNumber

  topFlip.addEventListener("animationstart", e => {
    topHalf.textContent = newNumber
  })
  topFlip.addEventListener("animationend", e => {
    topFlip.remove()
  })
  bottomFlip.addEventListener("animationend", e => {
    bottomHalf.textContent = newNumber
    bottomFlip.remove()
  })
  flipCard.append(topFlip, bottomFlip)
}
