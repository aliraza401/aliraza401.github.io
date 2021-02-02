let myArray = [
  {
    info: `1. CSS imports`,
    code: `
&ltlink rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" /&gt`,
  },
  {
    info: `2. init`,
    code: `
&ltscript src="https://unpkg.com/aos@next/dist/aos.js"&gt&lt/script&gt
&ltscript&gt
  AOS.init();
&lt/script&gt`,
  },
  {
    info: `3. Example`,
    code: `
  &ltdiv
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"
  &gt
  &lt/div&gt`,
  },
];
