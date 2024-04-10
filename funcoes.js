function listarPacientes(containerId, pacientes)
{
	let container = document.getElementById(containerId);
	for (let i = 0; i < pacientes.length; i++)
	{
		let paciente  = pacientes[i];
		let linha = "<tr>";
		linha += `<td>${paciente.numero_leito}</td>`;
		linha += `<td>${paciente.nome}</td>`;
		
		if(parseFloat(paciente.oximetria) >= 75.00)
			linha += `<td>${paciente.oximetria} %</td>`;
		else
			linha += `<td style="background-color:red; color:white">${paciente.oximetria} %</td>`;

		if(parseFloat(paciente.sistole) > 130 || parseFloat(paciente.sistole) < 100)
		{
			linha += `<td style="background-color:red; color:white">${paciente.sistole} mmHg</td>`;
			linha += `<td style="background-color:red; color:white">${paciente.diastole} mmHg</td>`;
		}
		else if (parseFloat(paciente.diastole) > 90 || parseFloat(paciente.sistole) < 70)
		{
			linha += `<td style="background-color:red; color:white">${paciente.sistole} mmHg</td>`;
			linha += `<td style="background-color:red; color:white">${paciente.diastole} mmHg</td>`;
		}
		else
		{
			linha += `<td>${paciente.sistole} mmHg</td>`;
			linha += `<td>${paciente.diastole} mmHg</td>`;
		}

		if(parseInt(paciente.frequencia_cardiaca) >= 50 && parseInt(paciente.frequencia_cardiaca) <= 90)
			linha += `<td>${paciente.frequencia_cardiaca} bpm</td>`;
		else if (parseInt(paciente.frequencia_cardiaca) < 10)
			linha += `<td style="background-color:red; color:white"> FIBRILANDO!!! </td>`;
		else
			linha += `<td style="background-color:red; color:white">${paciente.frequencia_cardiaca} bpm</td>`;

		linha += "</tr>";
		container.innerHTML += linha;
	}
}