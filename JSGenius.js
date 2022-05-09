		const cores = ["blue", "red", "yellow", "green"]; /*"purple", "cyan", "black", "magenta"];*/
		let length = cores.length;
		var sequence = [];
		contador = 0;
		final = 1;
		let timer;
		//var texto = document.getElementById('array');
		var btn;
		let pos = 0;


		function generateSequence()
		{
			if(contador < final)
			{
				var position = parseInt(Math.floor(Math.random() * length));
				var btn = document.getElementById(cores[position]);
				btn.style.backgroundColor = '' + cores[position];
				setTimeout(whiteButton, 500, cores[position]);
				sequence.push(cores[position])
				contador++;
				//texto = document.getElementById('array');
				//texto.innerHTML = contador;
			}
			else
			{	
				clearInterval(timer);
				contador = 0;
				//texto.innerHTML = contador;	
			}			
		}

		function clearCounter()
		{
			contador = 0
		}

		function iniciaSequencia()
		{
			if (sequence == 0) 
			{
				timer = setInterval(generateSequence, 1000);
			}
			else
			{
				alert("JOGO EM ANDAMENTO");
			}
		}

		function incremento()
		{
			if(pos == final)
			{
				sequence = [];
				pos = 0;
				final++;
				setTimeout(iniciaSequencia, 1500);
			}
		}

		function comparador(id, cor)
		{
			/*setTimeout(whiteButton, 500, clicked_id);
			btn.style.backgroundColor = 'blue';
			texto.innerHTML = clicked_id;
			pos++;
			incremento()*/
			setTimeout(whiteButton, 500, id);
			btn.style.backgroundColor = cor;
			pos++;
			incremento()
		}

		/*
		O SETTIMEOUT NAO ACEITA PARAMETRO, NÃO PODE CHAMAR A FUNÇÃO SENÃO ELE EXECUTA EM CONJUNTO COM AS OUTRAS
		TEM QUE PASSAR O PARAMETRO DEPOIS DO TEMPO CASO PRECISE RECEBER UM PARAMETRO
		*/
		function whiteButton(clicked_id)
		{
			btn = document.getElementById(clicked_id);
			btn.style.backgroundColor = 'white';
		}

		function reply_click(clicked_id)
		{
			btn = document.getElementById(clicked_id);
			if(clicked_id == 'blue' && sequence[pos] == 'blue')
			{	
				comparador(clicked_id, 'blue');
			}
			else 
				if(clicked_id == 'red'  && sequence[pos] == 'red')
					{
						comparador(clicked_id, 'red');
					}
					else
						if(clicked_id == 'yellow'  && sequence[pos] == 'yellow')
							{
								comparador(clicked_id, 'yellow');
							}
							else
								if (clicked_id == 'green'  && sequence[pos] == 'green')
									{
										comparador(clicked_id, 'green');
									}
									else
										{
											if(sequence.length == 0)
												{
													alert("CLIQUE EM INICIAR");
												}
												else
													{
														alert("GAME OVER");
														final = 1
														pos = 0
														sequence = [];
													}
										}
		}

