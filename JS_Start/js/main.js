const tabs = document.getElementById('animal'),
      abouts = document.getElementById('abouts');

const changeClass = el => {
    for(let i = 0; i < tabs.children.length; i++) {
        tabs.children[i].classList.remove('active');
    }
    el.classList.add('active')
}

tabs.addEventListener('click', e => {
    const currTab = e.target.dataset.btn;
    changeClass(e.target);
    for(let i = 0; i < abouts.children.length; i++){
        abouts.children[i].classList.remove('active');
        if(abouts.children[i].dataset.about == currTab) {
            abouts.children[i].classList.add('active');
        }
    }
})

const btnOpen = document.getElementById('btn-open'),
      overlay = document.getElementById('overlay'),
      modal = document.getElementById('wrapper-modal');

btnOpen.addEventListener('click', () => {
    modal.classList.add('active')
})

overlay.addEventListener('click', () => {
    modal.classList.remove('active')
})

const next = document.getElementById('btn-next'),
      prev = document.getElementById('btn-prev'),
      dots = document.querySelectorAll('.dot'),
      slides = document.querySelectorAll('.slide');

let index = 1;

const changeSlide = n => {
    for(slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}
const changeDot = n => {
    for(dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const prepareCurrentSlide = ind => {
    changeDot(ind);
    changeSlide(ind);
}

const nextSlide = () => {
    if(index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index ++;
        prepareCurrentSlide(index);
    }
}
const prevSlide = () => {
    if(index == 0) {
        index = slides.length - 1;
        prepareCurrentSlide(index);
    } else {
        index --;
        prepareCurrentSlide(index);
    }
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
    })
})
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);