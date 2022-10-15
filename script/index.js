const todoForm = document.getElementById('todo-form')
const todos = []
let importante 
let medio
let facil
let selectedSize = []
let icone

todoForm.addEventListener('submit', function(evento) {
    importante = document.querySelector(".importante")
    medio = document.querySelector(".medio")
    facil = document.querySelector(".facil")

    evento.preventDefault()
    evento.stopPropagation()

   const todoInput = document.querySelector('#todo')
        if(importante.checked) {
            icone = document.createElement('span')
            icone.classList.add('material-symbols-outlined', 'iconeVermelho')
            icone.innerText = '😱'
            selectedSize.push(icone)
        } else if (medio.checked){
            icone = document.createElement('span')
            icone.classList.add('material-symbols-outlined', 'iconeAmarelo')
            icone.innerText = '😰'
            selectedSize.push(icone)
        } else{
            icone = document.createElement('span')
            icone.classList.add('material-symbols-outlined', 'iconeVerde')
            icone.innerText = '😐'
            selectedSize.push(icone)
        }   
   todos.push(todoInput.value)
   todoInput.value = ''
   renderizarTodos()
})

function renderizarTodos() {
    const todosListSection = document.querySelector('#todos-list')
    todosListSection.innerHTML = '' 
    for (let i = 0; i<todos.length;i++) {
        const divCard = document.createElement('div')
        divCard.classList.add('card', 'bg-pink')

        const divCardBody = document.createElement('div')
        divCardBody.classList.add('card-body', 'd-flex', 'align-items-center')

        const pTodoText = document.createElement('p')
        pTodoText.classList.add('todo-text', 'flex-grow-1', 'text-truncate')
        pTodoText.innerText = todos[i]

        const marcador = document.createElement('span')

        const btnDelete = document.createElement('button')
        btnDelete.classList.add('btn', 'delete-todo')
        
        btnDelete.addEventListener('click', () => {      
         
           const index = i
        
           todos.splice(index, 1)
           selectedSize.splice(index, 1)
           renderizarTodos()
        })

        const spanIcon = document.createElement('span')
        spanIcon.classList.add('material-symbols-outlined')
        spanIcon.innerText = 'delete'

        btnDelete.appendChild(spanIcon) 
        divCardBody.append(pTodoText, selectedSize[i], btnDelete) 
        divCard.appendChild(divCardBody)
        todosListSection.appendChild(divCard)
    }
    for (let index = 0; index< selectedSize.length; index++){
        selectedSize[i]
    }
    
}

