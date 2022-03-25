$(function () {
    $(document).ready(function () {
        $('.drawer').drawer();
    });

    AOS.init();

    $('.main-visual').vegas({
      overlay: false,
      transition: 'blur', 
      transitionDuration: 2000,
      delay: 10000,
      animation: 'kenburns',
      animationDuration: 10000,
      slides: [
        { src: './img/photo01.jpg' },
        { src: './img/photo011.jpg' },
        { src: './img/photo012.jpg' },
      ]
    });
})

// vegasの元々のデータ
// // $("#example, body").vegas({
//   slides: [
//     { src: "/img/slide1.jpg" },
//     { src: "/img/slide2.jpg" },
//     { src: "/img/slide3.jpg" },
//     { src: "/img/slide4.jpg" }
// ]
// });