const btn = document.querySelector('#send')

btn.addEventListener('click', e => {
  e.preventDefault()
  validarForm()
})

function validarForm() {
  const nome = document.querySelector('#nome')
  const mensagem = document.getElementById('mensagem')
  const value = nome.value

  const email = document.querySelector('#email')
  const mensagemEmail = document.getElementById('mensagemEmail')
  const value_email = email.value

  const telefone = document.querySelector('#telefone')
  const mensagemTel = document.getElementById('mensagemTel')
  const value_tel = telefone.value

  const textarea = document.querySelector('#textarea')
  const mensagemTextarea = document.getElementById('mensagemTextarea')
  const value_text = textarea.value

  if (value === '') {
    nome.classList.add('invalid')
    mensagem.classList.add('error')
  }
  if (value_email === '') {
    email.classList.add('invalid')
    mensagemEmail.classList.add('error')
  }
  if (value_tel === '') {
    telefone.classList.add('invalid')
    mensagemTel.classList.add('error')
  }
  if (value_text === '') {
    textarea.classList.add('invalid')
    mensagemTextarea.classList.add('error')
  }
}
document.addEventListener('keydown', e => {
  const nome = document.querySelector('#nome')
  const mensagem = document.getElementById('mensagem')
  const value = nome.value
  if (value != '') {
    mensagem.classList.remove('error')
    nome.classList.add('valid')
  }
  const email = document.querySelector('#email')
  const mensagemEmail = document.getElementById('mensagemEmail')
  const value_email = email.value
  if (value_email != '') {
    mensagemEmail.classList.remove('error')
    email.classList.add('valid')
  }
  const telefone = document.querySelector('#telefone')
  const mensagemTel = document.getElementById('mensagemTel')
  const value_telefone = telefone.value
  if (value_telefone != '') {
    mensagemTel.classList.remove('error')
    telefone.classList.add('valid')
  }
  const textarea = document.querySelector('#textarea')
  const mensagemTextarea = document.getElementById('mensagemTextarea')
  const value_textarea = textarea.value
  if (value_textarea != '') {
    mensagemTextarea.classList.remove('error')
    textarea.classList.add('valid')
  }
})
