const swiper = new Swiper('.indicator-swiper', {
	slidesPerView: 3,
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},
	loop: true,
	spaceBetween: 30,
	grabCursor: true,
	freeMode: true,
	breakpoints: {
	  // when window width is >= 320px
	  320: {
	    slidesPerView: 1,
	    spaceBetween: 10,
	  },
	  // when window width is >= 640px
	  640: {
	    slidesPerView: 2,
	    spaceBetween: 10,
	  },
	  // when window width is >= 900px
	  900: {
	    slidesPerView: 3,
	    spaceBetween: 10,
	  },
	},
});
