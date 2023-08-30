const balanceElement = document.getElementById('balance'),
	withdrawInput = document.getElementById('withdraw-input'),
	withdrawBtn = document.getElementById('withdraw-btn'),
	depositInput = document.getElementById('deposit-input'),
	depositBtn = document.getElementById('deposit-btn');


let balance = 180000,
	counter = 0,
	totalWithdrawn = 0,
	totalDeposit = 0;



withdrawBtn.addEventListener('click', function(event) {

	// 1. Prevenir que se recargue la pagina al enviar el formulario
	event.preventDefault();

	const withdrawInputValue = withdrawInput.value.trim(); // Eliminar espacios en blanco al inicio y al final
    
    if (withdrawInputValue === "") {
        console.log('Por favor ingresa una cantidad válida');
        return;
    }

	// 2. Obtener el valor numerico del input
	const withdrawAmount = parseFloat(withdrawInput.value);

	// 3. Verificar si se supera el limite de transferencias por dia y que no se rebase la cantidad maxima permitida de retiro
	if (totalWithdrawn  + withdrawAmount > 30000 || counter >= 5 || withdrawAmount > balance) {
        console.log('No se puede realizar el retiro:');
        

        if (totalWithdrawn  + withdrawAmount > 30000 ) {
            console.log(' - Solo se permite retirar $30,000 por dia');
        }

        if (counter >= 5) {
            console.log(' - Excediste la cantidad de retiros en el día');
        }

        if (withdrawAmount > balance) {
            console.log(' - Fondos insuficientes');
        }

        withdrawBtn.disabled = true;
        return;
    }

	totalWithdrawn += withdrawAmount;
	console.log(`Retiraste en total ${totalWithdrawn}`)
	balance -= withdrawAmount;
	console.log(`Nuevo saldo: ${balance}`);
	console.log('-------------------------')
	counter++;
	
	balanceElement.textContent= balance.toLocaleString();
	withdrawInput.value = '';
});



depositBtn.addEventListener('click', function(event) {

	// 1. Prevenir que se recargue la pagina al enviar el formulario
	event.preventDefault();

	const depositInputValue = depositInput.value.trim(); // Eliminar espacios en blanco al inicio y al final
    
    if (depositInputValue === "") {
        console.log('Por favor ingresa una cantidad válida');
        return;
    }

	// 2. Obtener el valor numerico del input
	const depositAmount = parseFloat(depositInput.value);

	// 3. Verificar si se supera el limite de depositos por dia y que no se rebase la cantidad maxima permitida de deposito
	if (totalDeposit  + depositAmount > 50000 || counter >= 4) {
        console.log('No se puede realizar el retiro:');
        

        if (totalDeposit  + depositAmount > 50000 ) {
            console.log(' - Solo se permite depositar $50,000 por dia');
        }

        if (counter >= 4) {
            console.log(' - Excediste la cantidad de depositos en el día');
        }

        if (depositAmount > balance) {
            console.log(' - Fondos insuficientes');
        }

        depositBtn.disabled = true;
        return;
    }

	totalDeposit += depositAmount;
	console.log(`Depositaste en total ${totalDeposit}`)
	balance += depositAmount;
	console.log(`Nuevo saldo: ${balance}`);
	console.log('-------------------------')
	counter++;
	
	balanceElement.textContent= balance.toLocaleString();
	depositInput.value = '';
});



