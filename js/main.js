/*const menu = ['Slide 1', 'Slide 2', 'Slide 3'];*/

const swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // renderBullet: function (index, className) {
    //     return '<span class="' + className + '">' + (menu[index]) + '</span>';
    // },
});
