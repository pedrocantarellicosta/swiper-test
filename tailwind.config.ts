import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

export default <Partial<Config>>{
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        pink: '#AA045B',
        blue: {
          DEFAULT: '#344FA5',
          2: '#344FA5',
          3: '#3459DC'
        },
        coral: {
          DEFAULT: '#E25352',
          light: '#FAE3E3',
          2: '#e97e7e',
          3: '#D04C4C',
          4: '#B54242',
          5: '#601B2B'
        }
      },
      aux: {
        black: '#263238',
        gray: '#5D7A89',
        coral: '#e25352',
        red: {
          light: '#FDF2F2',
          2: '#FAE3E3'
        },
        green: {
          light: '#DBF0DC',
          2: '#E4FFD2'
        },
        blue: {
          light: '#CBE4FB'
        }
      },
      neutral: {
        black: '#000000',
        lightPink: '#FDF2F2',
        white: {
          DEFAULT: '#FFFFFF',
          hover: '#F2F2F2',
          pressed: '#C9C9C9'
        },
        lines: '#C6C9CA',
        gray: {
          1: '#263238',
          2: '#546E7A',
          3: '#90A4AE',
          4: '#CFD8DC',
          6: '#5D7A89',
          7: 'rgba(0,0,0,0.15)',
          8: '#C6C9CA',
          9: '#303030',
          10: '#D9D9D9',
          11: '#5a5a5a',
          12: '#979DA0',
          13: '#F3F3F3',
          14: '#ECEFF1',
          15: '#7F8A94',
          16: '#CAD4D8',
          lightGray: 'rgba(0, 0, 0, 0.15)',
          superLight: '#f0f0f0',
          overlay: 'rgba(1, 7, 31, 0.6)',
          tooltipOverlay: '#01071F99',
          disabled: '#B5B9BA'
        },
        yellow: {
          1: '#F5DE00'
        }
      },
      status: {
        success: {
          DEFAULT: '#43A047',
          hover: '#39883C',
          pressed: '#327835'
        },
        warning: '#F9A825',
        error: {
          DEFAULT: '#ED3A3B',
          hover: '#D63435',
          pressed: '#B22B2C'
        },
        informative: {
          DEFAULT: '#1284ED'
        }
      },
      background: '#ECEFF1',
      brands: {
        dealtalk: {
          1: '#2A9CB5',
          2: '#DEF3F7',
          3: '#227D91',
          4: '#1C6A7B'
        }
      },
      svg: {
        graybg: '#263238',
        orange: '#E25352;'
      }
    },
    // borderColor: theme => ({
    //   ...theme('colors')
    // }),
    backgroundImage: {
      'ad-fatalmodel': "url('/seo-k8s/static/img/bg-ad-fatalmodel-left.webp'),url('/seo-k8s/static/img/bg-ad-fatalmodel-right.webp')",
      'ad-routine-gradient': 'linear-gradient(180deg, #263238 19.47%, rgba(38, 50, 56, 0) 33.05%, rgba(38, 50, 56, 0) 56.17%, #263238 92.13%)',
      'ad-routine-gradient-bg': 'linear-gradient(180deg, #5D788E 0%, #EBAD4B 100%)',
      'ad-routine-gradient-desktop': 'linear-gradient(180deg, #263238 4.47%, rgba(38, 50, 56, 0) 33.05%, rgba(38, 50, 56, 0) 56.17%, #263238 92.13%)',
      'ad-routine-gradient-extra':
        'linear-gradient(to top, #181818 1%, transparent 10%), linear-gradient(90deg, #181818 0%, transparent 4%), linear-gradient(-90deg, #181818 0%, transparent 4%)',
      'ad-routine-gradient-extra-desktop':
        'linear-gradient(to top, #181818 1%, transparent 10%), linear-gradient(90deg, #181818 1%, transparent 5%), linear-gradient(-90deg, #181818 1%, transparent 5%)',
      'ambassadors-fm-radial-gradient': 'radial-gradient(80% 65% at 40% 40%, rgba(0, 0, 0, 0) 0.19%, rgba(0, 0, 0, 0) 40%, #181818 80%)',
      'ambassadors-fm-radial-gradient-desktop': 'radial-gradient(50% 53% at 30% 55%, rgba(0, 0, 0, 0) 0.19%, rgba(0, 0, 0, 0) 45%, #181818 80%)',
      'ambassadors-fm-second-fold-gradient': 'linear-gradient(180deg, #181818 0%, #1b2022 100%)',
      'ambassadors-fm-second-fold-gradient-desktop': 'linear-gradient(180deg, #181818 31.44%, #263238 90.01%)',
      'ambassadors-fm-third-fold-gradient': 'linear-gradient(180deg, #1b2022 0%, #20282c 100%)',
      'ambassadors-fm-fourth-fold-gradient': 'linear-gradient(180deg, #20282c 0%, #263238 100%)',
      'ambassadors-fm-last-fold-gradient': 'linear-gradient(180deg, #263238 10%, #fff 93%)',
      'ambassadors-fm-last-fold-gradient-desktop': 'linear-gradient(180deg, #263238 0%, #fff 93%)',
      'earnings-calculator-second-fold-gradient': 'linear-gradient(180deg, #263238 0%, #eceff1 63%)',
      'earnings-calculator-second-fold-gradient-desktop': 'linear-gradient(180deg, #263238 0%, #eceff1 100%)',
      'earnings-calculator-third-fold-gradient': 'linear-gradient(180deg, #eceff1 0%, #fff 31.5%)',
      'earnings-calculator-third-fold-gradient-desktop': 'linear-gradient(180deg, #eceff1 0%, #fff 61.5%)',
      'private-profile-conversion-gradient': 'linear-gradient(180deg, #e25352 0%, #7c2e2d 100%)',
      'review-section-mobile': "url('/seo-k8s/static/img/review-premium/review-bg-mobile.webp')",
      'review-section-desktop': "url('/seo-k8s/static/img/review-premium/review-bg-desktop.webp')",
      'review-modal-blur': "url('/seo-k8s/static/img/review-premium//review-bg-modal-blur.svg')",
      'spot-premium-modal': "url('/seo-k8s/static/img/profile/spot-premium-modal.svg')",
      'ad-description-gradient': 'linear-gradient(0deg, #fff, hsla(0, 0%, 100%, 0) 100%)',
      'icon-age': 'url("/seo-k8s/static/svg/icon-age.svg")',
      'blog-section': "url('/seo-k8s/static/img/blog-section-bg.png')",
      'icon-distance': 'url("/seo-k8s/static/svg/icon-distance.svg")',
      'icon-no-place': 'url("/seo-k8s/static/svg/icon-no-place.svg")',
      'icon-place': 'url("/seo-k8s/static/svg/icon-place.svg")',
      'icon-age-white': 'url("/seo-k8s/static/svg/icon-age-white.svg")',
      'icon-distance-white': 'url("/seo-k8s/static/svg/icon-distance-white.svg")',
      'icon-no-place-white': 'url("/seo-k8s/static/svg/icon-no-place-white.svg")',
      'icon-place-white': 'url("/seo-k8s/static/svg/icon-place-white.svg")',
      'cache-bar-payment-gradient': 'linear-gradient(270deg, #eceff1 0%, rgba(236, 239, 241, 0.845088) 32.18%, rgba(236, 239, 241, 0) 92.5%)',
      'stories-gradient': 'linear-gradient(180deg,rgba(0, 0, 0, 0.4) 0%,rgba(98, 98, 98, 0) 100%)',
      'view-media-header-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%)',
      'view-media-footer-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.517708) 53.12%, rgba(0, 0, 0, 0.7) 100%)',
      'view-media-text-gradient': 'linear-gradient(360deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.517708) 65.62%, rgba(0, 0, 0, 0) 100%)',
      'premium-gradient':
        'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.95) 104.44%), linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))',
      'premium-full-overlay-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.35) 0%, #fff 80%)',
      'premium-half-overlay-gradient-1': 'linear-gradient(180deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.5) 100%)',
      'premium-half-overlay-gradient-2': 'linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, #fff 80%)',
      'comparison-media-overlay-gradient': 'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.51))',
      'popup-modal-gradient': 'linear-gradient(360deg, rgba(1, 7, 31, 0.35) 0%, rgba(1, 7, 31, 0) 22.4%)',
      'score-bg-gray-gradient': 'linear-gradient(132.26deg, #263238 30.58%, #5D7A89 223.3%)',
      'gallery-gradient':
        'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.4464) 45.83%, rgba(255, 255, 255, 0.8075) 63.02%, #fff 100%)',
      'icon-badges-contact': 'url("/seo-k8s/static/img/profile/badges-contact.svg")',
      'icon-badges-verified': 'url("/seo-k8s/static/img/profile/badges-verified.svg")',
      'mdc-publicity-background': 'linear-gradient(180deg, rgba(0,0,0,.7),rgba(0,0,0,.52) 65.62%,transparent)',
      'icon-bg-card-home': 'url("/seo-k8s/static/img/home/card/bg-card-home.svg")',
      'icon-bg-card-home-video': 'url("/seo-k8s/static/img/home/card/bg-card-home-video.svg")',
      'icon-bg-card-home-reviews': 'url("/seo-k8s/static/img/home/card/bg-card-home-reviews.svg")',
      'security-left': 'url("/seo-k8s/static/img/home/security/bg-security-left.svg")',
      'security-right': 'url("/seo-k8s/static/img/home/security/bg-security-right.svg")',
      'section-embed-conversion-modal-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgb(0 0 0) 100%)',
      'section-ad-audio-transcrition-gradient': 'linear-gradient(to top, white, transparent)',
      'hashtags-list-gradient': 'linear-gradient(270deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);',
      'home-information': 'url("/seo-k8s/static/img/home-v2/bg-nina-nova-foto.webp")',
      'review-section-left': 'url("/seo-k8s/static/img/home-v2/bg-butterflies-left.webp")',
      'review-section-right': 'url("/seo-k8s/static/img/home-v2/bg-butterflies-right.webp")',
      'home-information-tablet': 'url("/seo-k8s/static/img/home-v2/bg-nina-nova-foto-tablet.webp")',
      'home-information-desktop': 'url("/seo-k8s/static/img/home-v2/bg-nina-nova-foto-desktop.webp")',
      'shot-to-bottom': 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
      'shot-to-top': 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
      'empowerment-section-gradient': 'linear-gradient(0deg, #ECEFF1, rgba(255, 255, 255, 0) 100%)',
      'white-top-to-bottom-gradient': 'linear-gradient(to bottom, #ffffff40, #ffffff30)',
      'coral-right-to-left-gradient': 'linear-gradient(90deg, #FD9190 0%, #E62524 100%)',
      'gradient-video-controls': 'linear-gradient(360deg, #000000 0.29%, rgba(0, 0, 0, 0) 100%)',
      'view-media-footer': 'linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))',
      'view-media-header': 'linear-gradient(180deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))'
    },
    maxWidth: {
      'screen-2xl': '1440px',
      'screen-xl': '1280px',
      '1/2': '50%',
      8: '8.5rem',
      11: '11.688rem',
      13: '13rem',
      17: '17.375rem',
      16: '16.75rem',
      19: '19rem',
      21: '21rem',
      25: '25rem',
      32: '32.875rem',
      36: '36rem',
      60: '60.625rem',
      62: '62.5rem',
      63: '63.125rem',
      71: '71.875rem',
      75: '75rem',
      80: '20rem'
    },
    extend: {
      fontSize: {
        tiny: '.625rem',
        small: '.75rem',
        2: '2rem',
        13: '0.8125rem',
        15: '0.9375rem',
        22: '1.375rem'
      },
      width: {
        21: '21.75rem',
        17: '17.5rem',
        49: '49%'
      },
      zIndex: {
        1: '1',
        2: '2',
        100: '100'
      },
      lineClamp: {
        8: '8'
      },
      dropShadow: {
        primary: '0 1px 2px rgba(0, 0, 0, 0.25)',
        secondary: '0 4px 12px rgba(43, 53 , 80, 0.24)',
        third: '1px 1px 1px #000'
      },
      backgroundPosition: {
        'logo-fatalmodel': '0 calc(100% - 118px), 100% calc(100% - 117px)',
        'state-mesoregions': '0 100%, 100% 100%'
      },
      screens: {
        smh: { raw: '(max-height: 694px)' },
        mdh: { raw: '(min-height: 768px)' },
        xs: '360px',
        xxs: '320px',
        lg: '1024px',
        xxl: '1440px'
      },
      animation: {
        'fade-in-stories': '0.3s fadeInStories forwards',
        'fade-in-left-stories': 'fadeInLeftStories 0.3s forwards',
        'fade-in-out-stories': 'fadeInOutStories 3s forwards',
        'like-stories': '1s likeStories linear',
        'pop-up': 'popUp 5s ease-in-out',
        'fill-progress': 'fillProgress 10s forwards',
        'slide-up': 'slideUp 0.5s ease forwards',
        'slide-left-infinite': 'slideLeftInfinite 60s linear infinite',
        'banner-left-infinite': 'bannerLeftInfinite 20s linear infinite',
        'banner-right-infinite': 'bannerRightInfinite 20s linear infinite'
      },
      keyframes: {
        likeStories: {
          '10%': {
            opacity: '1',
            transform: 'rotate(-1deg)'
          },

          '20%': {
            transform: 'rotate(2deg)'
          },

          '30%': {
            transform: 'rotate(-4deg)'
          },

          '40%': {
            transform: 'rotate(4deg)'
          },

          '50%': {
            transform: 'rotate(-4deg)'
          },

          '60%': {
            transform: 'rotate(4deg)'
          },

          '70%': {
            transform: 'rotate(-4deg)'
          },

          '80%': {
            transform: 'rotate(2deg)'
          },

          '90%': {
            opacity: '1',
            transform: 'rotate(-1deg)'
          }
        },
        fadeInStories: {
          '0%': {
            transform: 'translateY(200px)'
          },
          '100%': {
            transform: 'translateY(0)'
          }
        },
        fadeInOutStories: {
          '0%': {
            opacity: '0'
          },
          ' 50%': {
            opacity: '1'
          },
          '100%': {
            opacity: '0'
          }
        },
        fadeInLeftStories: {
          '0%': {
            transform: 'translateX(-200px)'
          },
          '100%': {
            transform: 'translateX(0)'
          }
        },
        popUp: {
          '0%': {
            transform: 'translateY(100px)',
            opacity: '1'
          },
          '10%': {
            transform: 'translateY(0)',
            opacity: '1'
          },
          '70%': {
            transform: 'translateY(0)',
            opacity: '1'
          },
          '100%': {
            transform: 'translateY(200px)',
            opacity: '0'
          }
        },
        fillProgress: {
          '0%': {
            width: '0'
          },
          '100%': {
            width: '100%'
          }
        },
        slideUp: {
          '0%': {
            transform: 'translateY(100%)'
          },
          '100%': {
            transform: 'translateY(0)'
          }
        },
        slideLeftInfinite: {
          '0%': {
            transform: 'translateX(0)'
          },
          '100%': {
            transform: 'translateX(-1059px)'
          }
        },
        bannerLeftInfinite: {
          '0%': {
            transform: 'translateX(100%)'
          },
          '100%': {
            transform: 'translateX(-100%)'
          }
        },
        bannerRightInfinite: {
          '0%': {
            transform: 'translateX(-100%)'
          },
          '100%': {
            transform: 'translateX(100%)'
          }
        },
        flip: {
          '0%, 100%': { transform: 'scaleX(1)' },
          '50%': { transform: 'scaleX(-1)' }
        }
      },
      transitionProperty: {
        top: 'top'
      },
      backgroundImage: {
        'coral-gradient': 'linear-gradient(90deg, #FD9190 0%, #E62524 100%)'
      }
    },
    placeholderColor: {
      primary: '#2B695B'
    },
    boxShadow: {
      primary: '0 0 4px rgba(0, 0, 0, 0.25)',
      line: '0 1px 1px rgba(0, 0, 0, 0.25)',
      'listing-cards': '0px 12px 20px rgba(43, 53, 80, 0.2)',
      secondary: '0 4px 8px rgba(0, 0, 0, 0.25)',
      quaternary: '0 0 8px rgba(0, 0, 0, 0.36)',
      five: '0 4px 8px rgba(0,0,0,0.14)',
      open: '0 2px 10px 0 rgb(0 0 0 / 0.4)',
      inner: '0px 0px 4px rgba(0, 0, 0, 0.4)',
      switch: '0 1px 1px rgba(0, 0, 0, 0.14), 0 2px 1px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.2)',
      none: 'none',
      modal: '0px 0px 4px 0px rgba(0, 0, 0, 0.24);',
      'profile-card': '0px 0px 8px rgba(0, 0, 0, 0.15)'
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.text-shadow-primary': {
          'text-shadow': '0 0 4px rgba(0, 0, 0, 0.25);'
        },
        '.text-shadow-secondary': {
          'text-shadow': '0 0 4px rgba(0, 0, 0, 0.25)'
        },
        '.text-shadow-quaternary': {
          'text-shadow': '1px 1px 2px black'
        }
      }
      addUtilities(newUtilities)
    })
  ],
  content: ['components/**/*.{vue,js}', 'layouts/**/*.vue', 'pages/**/*.vue', 'modules/**/*.vue', 'plugins/**/*.{js,ts}']
}
