let myArray = [
  {
    info: `1. CSS imports`,
    code: `
&ltlink rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/&gt`,
  },
  {
    info: `2. JS imports`,
    code: `
&ltscript type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"&gt&lt/script&gt`,
  },
  {
    info: `3. JS `,
    code: `
$('.slick-product-slider').slick({
  dots: false,
  arrows: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  nextArrow:"<img class='img img-fluid img-slider-2' src='https://cdn.shopify.com/s/files/1/0523/5972/5212/files/one.png?v=1612263397' >",
  prevArrow:"<img class='img img-fluid  img-slider-1' src='https://cdn.shopify.com/s/files/1/0523/5972/5212/files/two.png?v=1612263397' >",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots : false,
        arrows: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false,
      arrows: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
      }
    }
  ]
});`,
  },
  {
    info: `3. CSS styling`,
    code: `
.img-slider-2{
  width: 50px;
  position: absolute;
  right: 2%;
}
.img-slider-1{
  width: 50px;
}`,
  },
];
