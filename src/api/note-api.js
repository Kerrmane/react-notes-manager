import axios from "axios"
BASE_URL="http://localhost:3200/notes"

export class NoteApi{

    static async create(note){
        return (await axios.post('${BASE_URL}' , note)).data

    }
    static async fetchAll(){
        return (await axios.get('${BASE_URL}' )).data
    }
    static async fetchById(noteId){
        return (await axios.get('${BASE_URL}'/noteId)).data
    }
    static async deletById(noteId){
        return (await delete.post('${BASE_URL}'/noteId)).data
    }
    static async update(note){
        return (await axios.patch('${BASE_URL}' , note)).data
    }
}