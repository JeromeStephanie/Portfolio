// Get the modal
var modal = document.getElementById('myModal')
var loginModal = document.getElementById('login')
var toDoModal = document.getElementById('todo')
const faders = document.querySelectorAll('.fade-in')
var LandingModal = document.getElementById('landing')
var CalModal = document.getElementById('cal')
var EcomModal = document.getElementById('ecom')

function hideElements (className) {
  var elements = document.getElementsByClassName(className)
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = 'none'
  }
}

function showElements (className) {
  var elements = document.getElementsByClassName(className)
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = 'flex'
  }
}

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg')
var modalImg = document.getElementById('img01')
var captionText = document.getElementById('caption')

img.onclick = function () {
  // Hide the elements with class "as" when the image is clicked
  hideElements('as')

  modal.style.display = 'block'
  modalImg.src = this.src
  captionText.innerHTML = this.alt
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0]

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none'
  // Show the elements with class "as" when the modal is closed
  showElements('as')
}

// Get the image and insert it inside the login modal - use its "alt" text as a caption
var img2 = document.getElementById('myImg2')
var modalImg2 = document.getElementById('img02')
var captionText2 = document.getElementById('caption2')

img2.onclick = function () {
  // Hide the elements with class "as" when the image is clicked
  hideElements('as')

  loginModal.style.display = 'block'
  modalImg2.src = this.src
  captionText2.innerHTML = this.alt
}

// Get the <span> element that closes the login modal
var spanLogin = loginModal.getElementsByClassName('close')[0]

// When the user clicks on <span> (x), close the login modal
spanLogin.onclick = function () {
  loginModal.style.display = 'none'
  // Show the elements with class "as" when the login modal is closed
  showElements('as')
}

// Get the image and insert it inside the to-do modal - use its "alt" text as a caption
var img3 = document.getElementById('myImg3')
var modalImg3 = document.getElementById('img03')
var captionText3 = document.getElementById('caption3')

img3.onclick = function () {
  // Hide the elements with class "as" when the image is clicked
  hideElements('as')

  toDoModal.style.display = 'block'
  modalImg3.src = this.src
  captionText3.innerHTML = this.alt
}

// Get the <span> element that closes the login modal
var spantoDo = toDoModal.getElementsByClassName('close')[0]

// When the user clicks on <span> (x), close the login modal
spantoDo.onclick = function () {
  toDoModal.style.display = 'none'
  // Show the elements with class "as" when the login modal is closed
  showElements('as')
}

var img4 = document.getElementById('myImg4')
var modalImg4 = document.getElementById('img04')
var captionText4 = document.getElementById('caption4')

img4.onclick = function () {
  // Hide the elements with class "as" when the image is clicked
  hideElements('as')

  LandingModal.style.display = 'block'
  modalImg4.src = this.src
  captionText4.innerHTML = this.alt
}

// Get the <span> element that closes the login modal
var spanLanding = LandingModal.getElementsByClassName('close')[0]

// When the user clicks on <span> (x), close the login modal
spanLanding.onclick = function () {
  LandingModal.style.display = 'none'
  // Show the elements with class "as" when the login modal is closed
  showElements('as')
}

var img5 = document.getElementById('myImg5')
var modalImg5 = document.getElementById('img05')
var captionText5 = document.getElementById('caption5')

img5.onclick = function () {
  // Hide the elements with class "as" when the image is clicked
  hideElements('as')

  CalModal.style.display = 'block'
  modalImg5.src = this.src
  captionText5.innerHTML = this.alt
}

// Get the <span> element that closes the login modal
var spanCal = CalModal.getElementsByClassName('close')[0]

// When the user clicks on <span> (x), close the login modal
spanCal.onclick = function () {
  CalModal.style.display = 'none'
  // Show the elements with class "as" when the login modal is closed
  showElements('as')
}

var img6 = document.getElementById('myImg6')
var modalImg6 = document.getElementById('img06')
var captionText6 = document.getElementById('caption6')

img6.onclick = function () {
  // Hide the elements with class "as" when the image is clicked
  hideElements('as')

  EcomModal.style.display = 'block'
  modalImg6.src = this.src
  captionText6.innerHTML = this.alt
}

// Get the <span> element that closes the login modal
var spanEcom = EcomModal.getElementsByClassName('close')[0]

// When the user clicks on <span> (x), close the login modal
spanEcom.onclick = function () {
  EcomModal.style.display = 'none'
  // Show the elements with class "as" when the login modal is closed
  showElements('as')
}

/*====================== Typing Animation ================== */
var typed = new Typed('.typing', {
  strings: [
    '',
    'Software Engineer',
    'Frontend Developer',
    'Backend Developer',
    'Web Developer',
    'Python Developer',
    'Software Developer',
    'React Developer'
  ],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true
})

var typed = new Typed('.typing2', {
  strings: [
    '',
    'Software Engineer',
    'Frontend Developer',
    'Backend Developer',
    'Web Developer',
    'Python Developer',
    'Software Developer',
    'React Developer'
  ],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true
})

/*========================= Aside ========================*/
const nav = document.querySelector('.nav'),
  navList = nav.querySelectorAll('li'),
  totalNavList = navList.length,
  allSection = document.querySelectorAll('.section'),
  totalSection = allSection.length

for (let i = 0; i < totalNavList; i++) {
  // console.log(navList[i])
  const a = navList[i].querySelector('a')
  // console.log(a)

  a.addEventListener('click', function () {
    // for (let i = 0; i < totalSection; i++) {
    //   allSection[i].classList.remove("back-section");
    // }
    removeBackSection()
    // console.log(this)
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector('a').classList.contains('active')) {
        addBackSection(j)
        // console.log("back-section" + navList[j].querySelector("a"))
        // allSection[j].classList.add("back-section");
      }
      navList[j].querySelector('a').classList.remove('active')
    }
    this.classList.add('active')
    showSection(this)

    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn()
    }
  })
}

function removeBackSection () {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove('back-section')
  }
}

function addBackSection (num) {
  allSection[num].classList.add('back-section')
}

function showSection (element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove('active')
  }
  //console.log(element.getAttribute("href").split("#"))
  const target = element.getAttribute('href').split('#')[1]
  //target = href[1];
  //console.log(target)
  document.querySelector('#' + target).classList.add('active')
}

function updateNav (element) {
  // console.log(element.getAttribute("href").split("#")[1])
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector('a').classList.remove('active')
    const target = element.getAttribute('href').split('#')[1]

    if (
      target ===
      navList[i].querySelector('a').getAttribute('href').split('#')[1]
    ) {
      navList[i].querySelector('a').classList.add('active')
    }
  }
}
document.querySelector('.hire-me').addEventListener('click', function () {
  // console.log(this)
  const sectionIndex = this.getAttribute('data-section-index')
  // console.log(sectionIndex);
  showSection(this)
  updateNav(this)
  removeBackSection()
  addBackSection(sectionIndex)
})
const navTogglerBtn = document.querySelector('.nav-toggler'),
  aside = document.querySelector('.aside')
navTogglerBtn.addEventListener('click', () => {
  asideSectionTogglerBtn()
})

function asideSectionTogglerBtn () {
  aside.classList.toggle('open')
  navTogglerBtn.classList.toggle('open')

  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle('open')
  }
}

const appearOptions = {
  threshold: 1,
  // rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return
    } else {
      entry.target.classList.add('appear')
      appearOnScroll.unobserve(entry.target)
    }
  })
},
appearOptions)

faders.forEach(fader => {
  appearOnScroll.observe(fader);
})
