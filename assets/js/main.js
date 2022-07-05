console.log('%c Crafted by Insight Creative, Inc. Coded by Justin Parsons', 'background: #1d1d1d; color: white; padding: 5px 10px;')

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const mobileMenu = document.querySelector('.site-header__mobile-nav')
const hamburger = document.querySelector('.hamburger')
const siteHeader = document.querySelector('.site-header')
const linkHasSubMenu = document.querySelectorAll('.has-sub-menu')
const locationsButton = document.querySelector('.site-header__locations')
const mobileLocationsButton = document.querySelector('.site-header__locations--mobile')
const closeLocationsButton = document.querySelector('.mt-locations__close')
const locations = document.querySelector('.mt-locations')

linkHasSubMenu.forEach((link) => {
    link.addEventListener('mouseover', function() {
        link.classList.add('active')
        const activeLink = document.querySelector('.active')
        const activeSubMenu = activeLink.querySelector('.sub-menu')
        const activeSubMenuContainer = activeSubMenu.querySelector('.sub-menu__inner').getBoundingClientRect().height
        activeSubMenu.style.height = activeSubMenuContainer + 'px'
    })
    link.addEventListener('mouseout', function() {
        link.classList.remove('active')
        const subMenuToHide = link.querySelector('.sub-menu')
        subMenuToHide.removeAttribute('style')
    })
})

const mobileMenuHeight = mobileMenu.getBoundingClientRect().height

mobileMenu.style.height = 0

let scrollState = 0;

var scrollTop = function() {
  return window.scrollY;
};

var scrollDetect = function(collapse, expand) {
  var currentScroll = scrollTop();
  if (currentScroll > scrollState) {
    collapse();
  } else {
    expand();
  }
  scrollState = scrollTop();
};

function collapseNav() {
  siteHeader.classList.remove('expand');
  siteHeader.classList.add('collapse');
}

function expandNav() {
  siteHeader.classList.remove('collapse');
  siteHeader.classList.add('expand');
}

window.addEventListener("scroll", function() {
  scrollDetect(collapseNav, expandNav);
});

hamburger.addEventListener('click', toggleMobileMenu)

function toggleMobileMenu() {
    const mobileMenuWrapper = document.querySelector('.site-header__mobile-nav-inner')
    const mobileMenuWrapperHeight = mobileMenuWrapper.getBoundingClientRect().height

    mobileMenu.style.height = 0

    if(mobileMenu.classList.contains('nav-open')) {
        this.setAttribute('aria-expanded', 'false')
        this.setAttribute('aria-label', 'open mobile menu')
        mobileMenu.classList.remove('nav-open')
        mobileMenu.style.height = 0
        hamburger.classList.remove('is-active')
    } else {
        mobileMenu.classList.add('nav-open')
        mobileMenu.style.height = mobileMenuWrapperHeight + 'px'
        hamburger.classList.add('is-active')
        this.setAttribute('aria-expanded','true')
        this.setAttribute('aria-label', 'close mobile menu')
    }
}

locationsButton.addEventListener('click', toggleLocations)
mobileLocationsButton.addEventListener('click', toggleLocations)
closeLocationsButton.addEventListener('click', toggleLocations)

function toggleLocations() {
    if(locations.classList.contains('show-locations')) {
        this.setAttribute('aria-expanded', 'false')
        this.setAttribute('aria-label', 'open locations search tool')
        locations.classList.remove('show-locations')
        document.body.classList.remove('has-open-modal')
    } else {
        locations.classList.add('show-locations')
        document.body.classList.add('has-open-modal')
        this.setAttribute('aria-expanded','true')
        this.setAttribute('aria-label', 'close locations search tool')
    }
}

function fadeInContent() {
    const introSection = document.querySelector(".intro-section");
    const fadeWrapper = document.querySelector(".fade-wrapper .container");
    const fadeUp = document.querySelectorAll(".fade-up");
    const blog = document.querySelector(".blog-container");

    gsap.utils.toArray(fadeUp).forEach((fade) => {
        gsap.from(fade, {
            opacity: 0,
            y: 20,
            duration: .5,
            ease: 'Power2.in',
            scrollTrigger: {
                trigger: fade,
                toggleActions: "play none none reset",
            }
        })
    });
    if (document.body.contains(fadeWrapper)) {
        gsap.from(fadeWrapper, {
            opacity: 0,
            y: 20,
            duration: .5,
            ease: 'Power2.in',
            delay: .5,
            scrollTrigger: {
                trigger: fadeWrapper,
                start: "top bottom-=25",
                toggleActions: "play none none reset",
            }
        });
    }
}

function initZoom() {
    const zoomImages = document.querySelectorAll(".zoom-image");
    gsap.utils.toArray(zoomImages).forEach((section) => {
        const image = section.querySelector('img');
        gsap.to(image, {
            scale: 1.1,
            scrollTrigger: {
                trigger: section,
                scrub: true,
            }
        })
    });
}

function homepageAnimations() {
    fadeInContent();
    initZoom();
}