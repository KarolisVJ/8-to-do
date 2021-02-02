class Todo {
    constructor(pavadinimas) {
        this.name = pavadinimas;
        this.list = [];
    }

    summary() {
        const text = `${this.name} sarase yra ${this.list.length} uzduociu.`;
        console.log(text);
    }

    add(text) {
        this.list.push({
            text: text,
            completed: false
        });
    }

    edit(index, newText) {
        this.list[index].text = newText;
    }

    remove(index) {
        if (index < 0 ||
            index >= this.list.length) {
            console.error('EROROR');
            return;
        }

        const filtered = [];

        for (let i = 0; i < this.list.length; i++) {
            if (i !== index) {
                filtered.push(this.list[i]);
            }
        }

        this.list = filtered;
    }

    print(list = this.list) {
        console.table(list);
    }

    taskCompleted(index) {
        this.list[index].completed = true;
    }

    printCompletedOnly() {
        const completed = [];

        for (const task of this.list) {
            if (task.completed) {
                completed.push(task);
            }
        }

        this.print(completed);
    }

    printNotCompletedOnly() {
        const notCompleted = [];

        for (const task of this.list) {
            if (!task.completed) {
                notCompleted.push(task);
            }
        }

        this.print(notCompleted);
    }
}


    



export { Todo }