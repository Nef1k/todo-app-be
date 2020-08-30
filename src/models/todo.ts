export default class ToDo {

    id: string;
    title: string;
    is_completed: boolean = false;

    constructor(id: string, title: string, is_completed: boolean = false) {
        this.id = id;
        this.title = title;
        this.is_completed = is_completed;
    }

}
