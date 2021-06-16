	let buttonLogin = document.getElementById('button-login');
	
	function welcomeTrybe(){
		let valLogin = document.getElementById('login').value;
		let valSenha = document.getElementById('senha').value;
		
		if(valLogin !== ('tryber@teste.com' || valSenha !== '12345')){
			alert('Login ou senha inválidos.')
		}else{
			alert( 'Olá, Tryber!');
		}
	}

	buttonLogin.addEventListener('click', welcomeTrybe);