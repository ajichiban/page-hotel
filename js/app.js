$(function(){

    /*=============================================
                Bug nav - menu
    =============================================*/

    const breakPoint = matchMedia('(min-width: 1100px)'),
        navMenu = document.querySelector('.menu'),
        changesStyle = mql =>{
            mql.matches ? navMenu.style.display = 'flex'
            : navMenu.style.display = 'none';
        }

    breakPoint.addListener(changesStyle);

	/*=============================================
                Menu Movil
    =============================================*/
    
    $('#menu-mobile').click(()=>{
        console.log('hola aaaa');
        $('.menu').slideToggle('ocultar');
        $('.menu').css('top', '82px');   
        
    })


	/*=============================================
                    Menu Fijo
    =============================================*/
    //altura de la ventana.
	let windowHeight = $(window).height();
	// altura de la barra del menu.
	let barraAltura = $('.barra-navegacion').innerHeight();

	//Cuanto scroll estamos haciedo.
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();	
		let carouselContainer = $('#carouselId').innerHeight()
        /* console.log('altura de la barra :',barraAltura )
        console.log('altura de la ventana :',windowHeight ) */
        /* console.log('altura scroll :', scroll ) */

        if(scroll > carouselContainer){
			console.log('se paso');
            if(matchMedia('(min-width: 1100px)').matches){
				$('.barra-navegacion').addClass('back-transparent');
				$('.menu .menu-items a').addClass('menu-color-scroll');
				$('.boton-home').addClass('logo-home-color');
				$('.instagram-mas svg, .instagram-mas h4').addClass('change-instagram-and-book');
            }
        }else{
			$('.barra-navegacion').removeClass('back-transparent');
			$('.menu .menu-items a').removeClass('menu-color-scroll');
			$('.boton-home').removeClass('logo-home-color');
			$('.instagram-mas svg, .instagram-mas h4').removeClass('change-instagram-and-book');
        }
		/* if (scroll > windowHeight) {
			console.log('rebasaste la altura de la ventana.');
			$('.barra-navegacion').addClass('fixed');

			//evita el brinco que da al cambiar de tamaño la barra.
			$('body').css({'margin-top': barraAltura+'px'});
		}else{
			$('.barra-navegacion').removeClass('fixed');
			$('body').css({'margin-top':'0px'});
			console.log('aun no.');
		} */
	})


	//altura de la ventana.
	/* var windowHeight = $(window).height();
	// altura de la barra del menu.
	var barraAltura = $('.barra').innerHeight();

	//Cuanto scroll estamos haciedo.
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();	
		if (scroll > windowHeight) {
			console.log('rebasaste la altura de la ventana.');
			$('.barra').addClass('fixed');

			//evita el brinco que da al cambiar de tamaño la barra.
			$('body').css({'margin-top': barraAltura+'px'});
		}else{
			$('.barra').removeClass('fixed');
			$('body').css({'margin-top':'0px'});
			console.log('aun no.');
		}
	}) */

});