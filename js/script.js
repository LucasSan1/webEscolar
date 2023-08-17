let aluno1 = [0, 0, 0, 0]
let aluno2 = [0, 0, 0, 0]
let aluno3 = [0, 0, 0, 0]
let aluno4 = [0, 0, 0, 0]
let aluno5 = [0, 0, 0, 0]

// Modal 2 
const openModal2Button1 = document.querySelector("#open-modal-2-1")
const openModal2Button2 = document.querySelector("#open-modal-2-2")
const openModal2Button3 = document.querySelector("#open-modal-2-3")
const openModal2Button4 = document.querySelector("#open-modal-2-4")
const openModal2Button5 = document.querySelector("#open-modal-2-5")
const closeModal2Button = document.querySelector("#close-modal-2")
const fade1 = document.querySelector("#fade-1")
const modal2 = document.querySelector("#modal-2")
const saveGrades = document.querySelector("#saveGrades")
let indice = 0

const toggleModal2 = () => {
    [modal2, fade1].forEach((el) => el.classList.toggle("hide"))
}

function indice1(){
    indice = 1
    
    document.querySelector("#input-nota-1").value = 0
    document.querySelector("#input-nota-2").value = 0
    document.querySelector("#input-nota-3").value = 0
    document.querySelector("#input-nota-4").value = 0
}

function indice2(){
    indice = 2

    document.querySelector("#input-nota-1").value = 0
    document.querySelector("#input-nota-2").value = 0
    document.querySelector("#input-nota-3").value = 0
    document.querySelector("#input-nota-4").value = 0
}

function indice3(){
    indice = 3
    
    document.querySelector("#input-nota-1").value = 0
    document.querySelector("#input-nota-2").value = 0
    document.querySelector("#input-nota-3").value = 0
    document.querySelector("#input-nota-4").value = 0
}

function indice4(){
    indice = 4

    document.querySelector("#input-nota-1").value = 0
    document.querySelector("#input-nota-2").value = 0
    document.querySelector("#input-nota-3").value = 0
    document.querySelector("#input-nota-4").value = 0
}

function indice5(){
    indice = 5
    
    document.querySelector("#input-nota-1").value = 0
    document.querySelector("#input-nota-2").value = 0
    document.querySelector("#input-nota-3").value = 0
    document.querySelector("#input-nota-4").value = 0
}

openModal2Button1.addEventListener("mouseover", () => indice1())
openModal2Button2.addEventListener("mouseover", () => indice2())
openModal2Button3.addEventListener("mouseover", () => indice3())
openModal2Button4.addEventListener("mouseover", () => indice4())
openModal2Button5.addEventListener("mouseover", () => indice5())

openModal2Button1.addEventListener("click", () => toggleModal2())
openModal2Button2.addEventListener("click", () => toggleModal2())
openModal2Button3.addEventListener("click", () => toggleModal2())
openModal2Button4.addEventListener("click", () => toggleModal2())
openModal2Button5.addEventListener("click", () => toggleModal2())
closeModal2Button.addEventListener("click", () => toggleModal2())
saveGrades.addEventListener("click", () => editGrades(indice))
// Modal 2 

function editGrades(numeroAluno) {
    if (numeroAluno == 1) {

        aluno1[0] = document.querySelector("#input-nota-1").value
        aluno1[1] = document.querySelector("#input-nota-2").value
        aluno1[2] = document.querySelector("#input-nota-3").value
        aluno1[3] = document.querySelector("#input-nota-4").value
        
        let media = (parseFloat(aluno1[0]) + parseFloat(aluno1[1]) + parseFloat(aluno1[2]) + parseFloat(aluno1[3])) / 4

        document.querySelector('#aluno-1 #nota-1').innerHTML = parseFloat(aluno1[0]).toFixed(2)
        document.querySelector('#aluno-1 #nota-2').innerHTML = parseFloat(aluno1[1]).toFixed(2)
        document.querySelector('#aluno-1 #nota-3').innerHTML = parseFloat(aluno1[2]).toFixed(2)
        document.querySelector('#aluno-1 #nota-4').innerHTML = parseFloat(aluno1[3]).toFixed(2)
        document.querySelector('#aluno-1 .media').innerHTML = media.toFixed(2)
        
        if (media >= 70) {
            document.getElementById('situacao-1').classList.remove('reprovado')
            document.getElementById('situacao-1').classList.add('aprovado')
            document.getElementById('situacao-1').innerHTML = 'Aprovado'
            document.getElementById('aluno-abaixo-media-1').innerHTML = null
        }
        else if (media >= 50 && media < 70) {
            document.getElementById('situacao-1').classList.remove('reprovado')
            document.getElementById('situacao-1').classList.add('recuperacao')
            document.getElementById('situacao-1').innerHTML = 'Recuperação'
            document.getElementById('aluno-abaixo-media-1').innerHTML = 'Samuel Leite'
        }
        else {
            document.getElementById('situacao-1').classList.remove('reprovado')
            document.getElementById('situacao-1').classList.add('reprovado')
            document.getElementById('situacao-1').innerHTML = 'Reprovado'
            document.getElementById('aluno-abaixo-media-1').innerHTML = 'Samuel Leite'
        }
    }

    if (numeroAluno == 2) {
        aluno2[0] = document.querySelector("#input-nota-1").value
        aluno2[1] = document.querySelector("#input-nota-2").value
        aluno2[2] = document.querySelector("#input-nota-3").value
        aluno2[3] = document.querySelector("#input-nota-4").value

        let media = (parseFloat(aluno2[0]) + parseFloat(aluno2[1]) + parseFloat(aluno2[2]) + parseFloat(aluno2[3])) / 4

        document.querySelector('#aluno-2 #nota-1').innerHTML = parseFloat(aluno2[0]).toFixed(2)
        document.querySelector('#aluno-2 #nota-2').innerHTML = parseFloat(aluno2[1]).toFixed(2)
        document.querySelector('#aluno-2 #nota-3').innerHTML = parseFloat(aluno2[2]).toFixed(2)
        document.querySelector('#aluno-2 #nota-4').innerHTML = parseFloat(aluno2[3]).toFixed(2)
        document.querySelector('#aluno-2 .media').innerHTML = media.toFixed(2)
        
        if (media >= 70) {
            document.getElementById('situacao-2').classList.remove('reprovado')
            document.getElementById('situacao-2').classList.add('aprovado')
            document.getElementById('situacao-2').innerHTML = 'Aprovado'
            document.getElementById('aluno-abaixo-media-2').innerHTML = null
        }
        else if (media >= 50 && media < 70) {
            document.getElementById('situacao-2').classList.remove('reprovado')
            document.getElementById('situacao-2').classList.add('recuperacao')
            document.getElementById('situacao-2').innerHTML = 'Recuperação'
            document.getElementById('aluno-abaixo-media-2').innerHTML = 'João Nishikawa'
        }
        else {
            document.getElementById('situacao-2').classList.remove('reprovado')
            document.getElementById('situacao-2').classList.add('reprovado')
            document.getElementById('situacao-2').innerHTML = 'Reprovado'
            document.getElementById('aluno-abaixo-media-2').innerHTML = 'João Nishikawa'
        }
    }

    if (numeroAluno == 3) {
        aluno3[0] = document.querySelector("#input-nota-1").value
        aluno3[1] = document.querySelector("#input-nota-2").value
        aluno3[2] = document.querySelector("#input-nota-3").value
        aluno3[3] = document.querySelector("#input-nota-4").value
        
        let media = (parseFloat(aluno3[0]) + parseFloat(aluno3[1]) + parseFloat(aluno3[2]) + parseFloat(aluno3[3])) / 4

        document.querySelector('#aluno-3 #nota-1').innerHTML = parseFloat(aluno3[0]).toFixed(2)
        document.querySelector('#aluno-3 #nota-2').innerHTML = parseFloat(aluno3[1]).toFixed(2)
        document.querySelector('#aluno-3 #nota-3').innerHTML = parseFloat(aluno3[2]).toFixed(2)
        document.querySelector('#aluno-3 #nota-4').innerHTML = parseFloat(aluno3[3]).toFixed(2)
        document.querySelector('#aluno-3 .media').innerHTML = media.toFixed(2)
        
        if (media >= 70) {
            document.getElementById('situacao-3').classList.remove('reprovado')
            document.getElementById('situacao-3').classList.add('aprovado')
            document.getElementById('situacao-3').innerHTML = 'Aprovado'
            document.getElementById('aluno-abaixo-media-3').innerHTML = null
        }
        else if (media >= 50 && media < 70) {
            document.getElementById('situacao-3').classList.remove('reprovado')
            document.getElementById('situacao-3').classList.add('recuperacao')
            document.getElementById('situacao-3').innerHTML = 'Recuperação'
            document.getElementById('aluno-abaixo-media-3').innerHTML = 'Laiza Barbosa'
        }
        else {
            document.getElementById('situacao-3').classList.remove('reprovado')
            document.getElementById('situacao-3').classList.add('reprovado')
            document.getElementById('situacao-3').innerHTML = 'Reprovado'
            document.getElementById('aluno-abaixo-media-3').innerHTML = 'Laiza Barbosa'
        }
    }

    if (numeroAluno == 4) {
        aluno4[0] = document.querySelector("#input-nota-1").value
        aluno4[1] = document.querySelector("#input-nota-2").value
        aluno4[2] = document.querySelector("#input-nota-3").value
        aluno4[3] = document.querySelector("#input-nota-4").value
        
        let media = (parseFloat(aluno4[0]) + parseFloat(aluno4[1]) + parseFloat(aluno4[2]) + parseFloat(aluno4[3])) / 4

        document.querySelector('#aluno-4 #nota-1').innerHTML = parseFloat(aluno4[0]).toFixed(2)
        document.querySelector('#aluno-4 #nota-2').innerHTML = parseFloat(aluno4[1]).toFixed(2)
        document.querySelector('#aluno-4 #nota-3').innerHTML = parseFloat(aluno4[2]).toFixed(2)
        document.querySelector('#aluno-4 #nota-4').innerHTML = parseFloat(aluno4[3]).toFixed(2)
        document.querySelector('#aluno-4 .media').innerHTML = media.toFixed(2)
        
        if (media >= 70) {
            document.getElementById('situacao-4').classList.remove('reprovado')
            document.getElementById('situacao-4').classList.add('aprovado')
            document.getElementById('situacao-4').innerHTML = 'Aprovado'
            document.getElementById('aluno-abaixo-media-4').innerHTML = null
        }
        else if (media >= 50 && media < 70) {
            document.getElementById('situacao-4').classList.remove('reprovado')
            document.getElementById('situacao-4').classList.add('recuperacao')
            document.getElementById('situacao-4').innerHTML = 'Recuperação'
            document.getElementById('aluno-abaixo-media-4').innerHTML = 'Lucas Evangelista'
        }
        else {
            document.getElementById('situacao-4').classList.remove('reprovado')
            document.getElementById('situacao-4').classList.add('reprovado')
            document.getElementById('situacao-4').innerHTML = 'Reprovado'
            document.getElementById('aluno-abaixo-media-4').innerHTML = 'Lucas Evangelista'
        }
    }

    if (numeroAluno == 5) {
        aluno5[0] = document.querySelector("#input-nota-1").value
        aluno5[1] = document.querySelector("#input-nota-2").value
        aluno5[2] = document.querySelector("#input-nota-3").value
        aluno5[3] = document.querySelector("#input-nota-4").value
        
        let media = (parseFloat(aluno5[0]) + parseFloat(aluno5[1]) + parseFloat(aluno5[2]) + parseFloat(aluno5[3])) / 4

        document.querySelector('#aluno-5 #nota-1').innerHTML = parseFloat(aluno5[0]).toFixed(2)
        document.querySelector('#aluno-5 #nota-2').innerHTML = parseFloat(aluno5[1]).toFixed(2)
        document.querySelector('#aluno-5 #nota-3').innerHTML = parseFloat(aluno5[2]).toFixed(2)
        document.querySelector('#aluno-5 #nota-4').innerHTML = parseFloat(aluno5[3]).toFixed(2)
        document.querySelector('#aluno-5 .media').innerHTML = media.toFixed(2)
        
        if (media >= 70) {
            document.getElementById('situacao-5').classList.remove('reprovado')
            document.getElementById('situacao-5').classList.add('aprovado')
            document.getElementById('situacao-5').innerHTML = 'Aprovado'
            document.getElementById('aluno-abaixo-media-5').innerHTML = null
        }
        else if (media >= 50 && media < 70) {
            document.getElementById('situacao-5').classList.remove('reprovado')
            document.getElementById('situacao-5').classList.add('recuperacao')
            document.getElementById('situacao-5').innerHTML = 'Recuperação'
            document.getElementById('aluno-abaixo-media-5').innerHTML = 'Atila Oliv'
        }
        else {
            document.getElementById('situacao-5').classList.remove('reprovado')
            document.getElementById('situacao-5').classList.add('reprovado')
            document.getElementById('situacao-5').innerHTML = 'Reprovado'
            document.getElementById('aluno-abaixo-media-5').innerHTML = 'Atila Oliv'
        }
    }
    
    let notasTurma = 0
    for(let i = 0; i < 4; i++) {
        notasTurma += parseFloat(aluno1[i])
    }
    for(let i = 0; i < 4; i++) {
        notasTurma += parseFloat(aluno2[i])
    }
    for(let i = 0; i < 4; i++) {
        notasTurma += parseFloat(aluno3[i])
    }
    for(let i = 0; i < 4; i++) {
        notasTurma += parseFloat(aluno4[i])
    }
    for(let i = 0; i < 4; i++) {
        notasTurma += parseFloat(aluno5[i])
    }
    
    let mediaTurma = parseFloat(notasTurma / 20)
    document.getElementById('media-turma').innerHTML = mediaTurma.toFixed(2)
    
    if (mediaTurma < 50) {
        document.getElementById('media-turma').classList.remove('recuperacao-media-turma')
        document.getElementById('media-turma').classList.remove('aprovado-media-turma')
        document.getElementById('media-turma').classList.add('reprovado-media-turma')
    }
    
    else if (mediaTurma >= 50 && mediaTurma < 70) {
        document.getElementById('media-turma').classList.remove('reprovado-media-turma')
        document.getElementById('media-turma').classList.remove('aprovado-media-turma')
        document.getElementById('media-turma').classList.add('recuperacao-media-turma')
    }
    
    else {
        document.getElementById('media-turma').classList.remove('reprovado-media-turma')
        document.getElementById('media-turma').classList.remove('recuperacao-media-turma')
        document.getElementById('media-turma').classList.add('aprovado-media-turma')
    }
}

// Modal
const openModal1Button = document.querySelector("#open-modal-1")
const closeModal1Button = document.querySelector("#close-modal-1")
const fade = document.querySelector("#fade")
const modal1 = document.querySelector("#modal-1")

const toggleModal1 = () => {
    [modal1, fade].forEach((el) => el.classList.toggle("hide"))
}

[openModal1Button, closeModal1Button].forEach((el) => {
    el.addEventListener("click", () => toggleModal1())
})

// Modal

// PDF Generate
const btnPDFGenerate = document.querySelector("#pdf button")

btnPDFGenerate.addEventListener("click", () => {

    const content = document.querySelector("#alunos-abaixo-media")

    const options = {
        margin: [50, 50, 50, 50],
        filename: "abaixodamedia.pdf",
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
    }

    html2pdf().set(options).from(content).save()
})

// PDF Generate

// pop up de salvamento
const mostrar = document.getElementById('open-modal-1');
const popup = document.getElementById('popup');
const preenchimento = document.getElementById('preencher');

mostrar.addEventListener('click', () => {
  popup.style.display = 'flex';
  abrirPop();
});

function abrirPop() {
  let progress = 0;
  const intervalo = setInterval(() => {  
    progress += 10;
    preenchimento.style.width = `${progress}%`;

    if (progress >= 100) {
      clearInterval(intervalo);
      setTimeout(() => {
        popup.style.display = 'none';
        preenchimento.style.width = '0%';
      }, 1000);
    }
  }, 300);
}