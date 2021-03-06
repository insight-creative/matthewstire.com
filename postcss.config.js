const autoprefixer = require('autoprefixer')
const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: [
        './layouts/**/*.html',
        './layouts/**/*.svg',
        './content/**/*.md',
      ],
      safelist: [
        'is-active',
        'nav-open',
        'collapse',
        'expand',
        'services-sub-menu',
        'about-sub-menu',
        'has-open-modal',
        'modal-open',
        'show-locations',
        'home-hero',
        'locations-list-open',
        'mt-location--appleton-east',
        'mt-location--appleton-west',
        'mt-location--commercial',
        'mt-location--fond-du-lac',
        'mt-location--green-bay',
        'mt-location--menasha',
        'mt-location--waupaca',
        'mt-swoosh',
        'marker-active',
        'services-hero',
        'swiper-pagination-bullet',
        'swiper-pagination-bullet-active',
        'find-tires',
        'locations',
        'appleton-auto-shops',
        'contact-us',
        'community',
        'leadership',
      ],
    }),
  ],
}