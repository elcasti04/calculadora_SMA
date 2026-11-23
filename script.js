const nota1 = document.getElementById('nota1')
const nota2 = document.getElementById('nota2')
const nota3 = document.getElementById('nota3')
const notaMin = document.getElementById('notaMin')
const acumulado = document.getElementById('acumulado')
const calcular = document.getElementById('calcular')
const nota = document.getElementById('nota')
const mensaje = document.getElementById('mensaje')

calcular.addEventListener('click', () => {
    const n1 = Number(nota1.value) * 0.20
    const n2 = Number(nota2.value) * 0.20
    const n3 = Number(nota3.value) * 0.20
    const nN = Number(notaMin.value)

    const prom = n1 + n2 + n3

    acumulado.innerText = prom.toFixed(2)

    const notaMinima = Number(nN) - prom

    const res = notaMinima / 0.40

    nota.innerText = res.toFixed(2)


if (res >= 2.90) {
    mensaje.innerText = 'Uyyyy loco esa materia está perdida 😭';

} else if (res >= 2.10) {
    mensaje.innerText = 'Uy zona esa materia está casi perdida 😓';

} else {
    mensaje.innerText = 'Mi llave esa materia está casi ganada 😎';
}
 
})
