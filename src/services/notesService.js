const mysqlDB = require('../lib/mysql');

class notesService {
    async getNotes({ user }){
        return [];
    }

    async updateNote({ note } = {}){
        const query = '';
        mysqlDB.update(query, note);
    }

    async deleteNote({ noteId }){
        const query = ''
        mysqlDB.delete(query, note);
    }

}