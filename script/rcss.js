/************************** html5 ******************/
		var config_html5 = {
			type: 'doughnut',
			data: {datasets: [{
					data: [
						50,
						70
					],
					backgroundColor: [
						'rgba(255,255,255,0)',
						'#FF4500'
					],
					borderColor: ['rgba(255,255,255,0)', 'rgba(255,255,255,0)']					
				}]
			},
			options: {
				responsive: true,
				title: {
					display: true,
					text: 'HTML5',
					fontSize: 20,
					fontColor: '#FF4500',
					position: 'bottom'
				},
			}
		};



/************************** css3 ******************/

		var config_css3 = {
			type: 'doughnut',
			data: {datasets: [{
					data: [
						50,
						200
					],
					backgroundColor: [
						'rgba(255,255,255,0)',
						'#1E90FF'
					],
					borderColor: ['rgba(255,255,255,0)', 'rgba(255,255,255,0)']					
				}]
			},
			options: {
				responsive: true,
				title: {
					display: true,
					text: 'CSS3',
					fontSize: 20,
					fontColor: '#1E90FF',
					position: 'bottom'
				},
			}
		};
		
		
/************************** php ******************/

		var config_php = {
			type: 'doughnut',
			data: {datasets: [{
					data: [
						50,
						300
					],
					backgroundColor: [
						'rgba(255,255,255,0)',
						'#483D8B'
					],
					borderColor: ['rgba(255,255,255,0)', 'rgba(255,255,255,0)']					
				}]
			},
			options: {
				responsive: true,
				title: {
					display: true,
					text: 'PHP',
					fontSize: 20,
					fontColor: '#483D8B',
					position: 'bottom'
				},
			}
		};			
		
/************************** mysql ******************/

		var config_mysql = {
			type: 'doughnut',
			data: {
				datasets: [{
					data: [
						50,
						50
					],
					backgroundColor: [
						'rgba(255,255,255,0)',
						'#319099'
					],
					borderColor: ['rgba(255,255,255,0)', 'rgba(255,255,255,0)']					
				}]
				},
			options: {
				responsive: true,
				title: {
					display: true,
					text: 'MYSQL',
					fontSize: 20,
					fontColor: '#319099',
					position: 'bottom'
				}			
			}
		};

		// Chart options
		Chart.defaults.global.legend.display = false;
		Chart.defaults.global.tooltips.enabled = false;
  
		window.onload = function() {
			var ctx = document.getElementById('html5').getContext('2d');
			var ctx_css3 = document.getElementById('css3').getContext('2d');
			var ctx_php = document.getElementById('php').getContext('2d');
			var ctx_mysql = document.getElementById('mysql').getContext('2d');
			window.myDoughnut = new Chart(ctx, config_html5);
			window.myDoughnut = new Chart(ctx_css3, config_css3);
			window.myDoughnut = new Chart(ctx_php, config_php);
			window.myDoughnut = new Chart(ctx_mysql, config_mysql);
		};		
		
		$(document).on('scroll', function(){
			var opacity = ($(this).scrollTop() / $(window).height());
			$('#topo').css('background-color', 'rgba(255,255,255,' + opacity + ')');
		})		
		
		$(document).ready(function(){
			$("#btn_whatsapp").click(function(){
				$("#whatsapp").toggle();
			});
		});
