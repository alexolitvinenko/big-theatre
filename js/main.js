$(document).ready(function() {
	// Открытие мобильного меню при нажатии на бургер
	$('.navbar-toggler').on('click', function() {
		$('#navbar-small').animate({
			left: 0
		}, 500);
	});
	// Закрытие мобильного меню при нажатии на крестик
	$('#close').on('click', function() {
		$('#navbar-small').animate({
			left: -300
		}, 500);
	});

	// Горизонтальный скролл слайдера колесиком
	$('.projects-slider').on('mousewheel DOMMouseScroll', function(event){
        event.preventDefault();
        var delta = Math.max(-1, Math.min(1, (event.originalEvent.wheelDelta || -event.originalEvent.detail)));

        this.scrollLeft -= (delta * 40);
    });

	// Переменные позиций курсора
	let posInit = 0,	// при первом нажатии
		posX1 = 0,	// при перемещении
		posX2 = 0;	// смещение
	
	// Горизонтальный скролл слайдера touch-ем
	$('.projects-slider').on('mousedown', function(event) {
		event.preventDefault();
		this.style.cursor = "grab";
		posInit = event.clientX;

		$('.projects-slider').on('mousemove', function(event) {
			event.preventDefault();
			posX1 = event.clientX;
			posX2 = posInit - posX1;
			this.scrollLeft += posX2;
		});

		$('.projects-slider').on('mouseup', function(event) {
			event.preventDefault();
			$('.projects-slider').off('mousemove');
			this.style.cursor = "default";
			posX1 = event.clientX;
			posX2 = posInit - posX1;
			this.scrollLeft += posX2;
		});
	});

	// Перехват submit формы мецената и появление окошка об успехе
	$('#contacts-form').submit(function(event) {
		event.preventDefault();
		let name = $('#contacts-form-name').val();
		$('#result-form-text').text(`${name}, ваша заявка отправлена! Ожидайте ответа по указанному телефону.`)
		$('#contacts-form input, #contacts-form textarea').val('');
		$('#result-form').fadeIn();
	});

	// Закрытие окошка при клике на крестик и кнопку
    $('#result-close, #result-assent').on('click', function() {
		$('#result-form').fadeOut();
	});

	// Сообщение для неактивных функций
    $('.js-no-complete').on('click', function() {
		$(this).toggleClass('show-box')
	});
});