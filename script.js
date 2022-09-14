const app = new Vue({
    el: " #todosection ",
    data: {
        toDoItem: [
            {
                text: "Fare la spesa",
                done: false,
            },
            {
                text: "Pulire casa",
                done: true,
            },
            {
                text: "Prenotare ristorante",
                done: false,
            },
            {
                text: "Leggere un libro",
                done: false,
            },
            {
                text: "Portare a passeggio il cane",
                done: true,
            }
        ],
        inputToDo: ""
    },
    methods: {
        changeDoneProp: function (index) {
            this.toDoItem[index].done = !this.toDoItem[index].done
        },
        addToList: function () {
            let action = this.inputToDo.trim();
            action = action.toLowerCase()
            const actionToDo = action[0].toUpperCase() + action.slice(1);
            let newItme = {
                text: actionToDo,
                done: false
            }
            this.inputToDo = ""
            this.toDoItem.push(newItme)
        },
        deleteItem(position) {
            const newToDO = this.toDoItem.filter((element) => {
                return element !== this.toDoItem[position]
            })
            this.toDoItem = newToDO
            // this.toDoItem.splice(position, 1) -------altro metodo!
        }
    }
})


