module.exports = {
    fetchData: (db, callback) => {
        db.query("SELECT * FROM datatable", callback);
    },
    getById: (db, id, callback) => {
        db.query("SELECT * FROM datatable WHERE id = 1", id, callback);
    },
    insertData: (db, data, callback) => {
        db.query("INSERT INTO datatable SET ?", data, callback);
    },
    editData: (db, id, callback)=>{
        db.query("SELECT * FROM datatable WHERE id = " + id, callback);
    },
    updateData: (db, id, data, callback) => {
        console.log(data)
        db.query("UPDATE datatable SET ? WHERE id = " + id, data, callback);
    },
    deleteData: (db, id, callback) => {
        db.query("DELETE FROM datatable WHERE id = ?", id, callback)
    },
}