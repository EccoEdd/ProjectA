const plugin = require("tailwindcss/plugin");
let colors = require("tailwindcss/colors");

delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];
colors = { ...colors, ...{ transparent: 'transparent' } };

module.exports = {
  content: [
    "./**/*.html",
    "./*.html",
    "./**/*.js",
    "./*.js",
    "./**/*.ts",
    "./*.ts",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./node_modules/flowbite/**/*.js"
  ],
  options: {
    safelist: [
      'pl-1',
      'pl-2',
      'pl-3',
      'pl-4',
      'pl-5',
      'pl-6',
      'pl-7',
      'pl-8',
      'pl-7',
      'pl-10',
      'pl-11',
      'pl-12',
      'mx-4',
      'mx-8',
      'my-6',
      'w-2/3',
      'w-1/4',
      'basis-3/12',
      'basis-3/4',
      'basis-1/4',
      'basis-1/2',
      'basis-2/5',
      'opacity-25',
      'z-70',
      'max-h-[450px]',
      'min-h-400',
      'ml-1.5',
      'mr-1.5',
      'mb-1.5',
      'w-[340px]',
      'h-[98rem]'
    ],
  },
  theme: {
    extend: {
      colors: {
        ...colors,
        green: colors.emerald,
        yellow: colors.amber,
        purple: colors.violet,
        gray: colors.neutral,
      },

      minHeight: {
        "screen-75": "75vh",
      },
      fontSize: {
        55: "55rem",
      },
      opacity: {
        80: ".8",
      },
      zIndex: {
        2: 2,
        3: 3,
      },
      inset: {
        "-100": "-100%",
        "-225-px": "-225px",
        "-160-px": "-160px",
        "-150-px": "-150px",
        "-94-px": "-94px",
        "-50-px": "-50px",
        "-29-px": "-29px",
        "-20-px": "-20px",
        "25-px": "25px",
        "40-px": "40px",
        "95-px": "95px",
        "145-px": "145px",
        "195-px": "195px",
        "210-px": "210px",
        "260-px": "260px",
      },
      height: {
        "95-px": "95px",
        "70-px": "70px",
        "350-px": "350px",
        "500-px": "500px",
        "600-px": "600px",
        '98': '98rem',
      },
      width: {
        '340': '340px',
      },
      maxHeight: {
        "860-px": "860px",
      },
      maxWidth: {
        "100-px": "100px",
        "120-px": "120px",
        "150-px": "150px",
        "180-px": "180px",
        "200-px": "200px",
        "210-px": "210px",
        "580-px": "580px",
      },
      minWidth: {
        "140-px": "140px",
        48: "12rem",
      },
      backgroundSize: {
        full: "100%",
      },
    },

  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      const screens = theme("screens", {});
      addComponents([
        {
          ".container": { width: "100%" },
        },
        {
          ".cdk-drag-preview": {
            "box-sizing": theme('boxBorder'),
            "border-radius": theme('rounded'),
            "box-shadow": theme('boxShadow.xl')
          }
        },
        {
          ".cdk-drag-placeholder": {
            "opacity": "0"
          }
        },
        {
          ".cdk-drag-animating": {
            "transition": "transform 250ms cubic-bezier(0, 0, 0.2, 1)"
          }
        },
        {
          ".cdk-list.cdk-drop-list-dragging .cdk-box:not(.cdk-drag-placeholder)": {
            "transition": "transform 250ms cubic-bezier(0, 0, 0.2, 1)"
          }
        },
        {
          "datatable-body-cell-label": {
            height: theme('hFull')
          }
        },
        {
          [`@media (min-width: ${screens.sm})`]: {
            ".container": {
              "max-width": "640px",
            },
          },
        },
        {
          [`@media (min-width: ${screens.md})`]: {
            ".container": {
              "max-width": "768px",
            },
          },
        },
        {
          [`@media (min-width: ${screens.lg})`]: {
            ".container": {
              "max-width": "1024px",
            },
          },
        },
        {
          [`@media (min-width: ${screens.xl})`]: {
            ".container": {
              "max-width": "1280px",
            },
          },
        },
        {
          [`@media (min-width: ${screens["2xl"]})`]: {
            ".container": {
              "max-width": "1280px",
            },
          },
        },
      ]);
    }),
    require('@tailwindcss/forms'),
    require('flowbite/plugin')
  ],
};
