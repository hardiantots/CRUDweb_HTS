let content = require('../models/contentModel');

module.exports = {
    index: (req, res) => {
        content.fetchData(req.db, (err, rows) => {
            if (err){
                req.flash('error', `${error.message}`);
                res.render('content/index', { data: ''});
            } else {
                res.render('content/index', { data: rows, message: req.flash('success')})
            }
        })
    },

    store: (req, res) => { 
        const { name, username, birthplace } = req.body;
        var form_data = {
            name,
            username,
            birthplace,
        }

        content.insertData(req.db, form_data, (err, result) => {
            if (err){
                req.flash('error', `${error.message}`);
                res.redirect('/');
            } else {
                req.flash('success', 'Data berhasil dimasukkan ke database')
                res.redirect('/');
            }
        })
    },

    edit:(req, res) =>{
        let id = req.params.id;

        content.editData(req.db, id, (err, rows)=>{
            if(err) throw err;

            if(rows.length <= 0) {
                req.flash('error', 'Data Post Dengan ID ' + id + " Tidak Ditemukan")
                res.redirect('/')
            } else {
                res.render('content/edit_page', {
                    id: rows[0].id,
                    name: rows[0].name,
                    username: rows[0].username,
                    birthplace: rows[0].birthplace,
                })
            }
        })
    },

    update:(req, res) => {
        let id          = req.params.id;
        let name        = req.body.name;
        let username    = req.body.username;
        let birthplace  = req.body.birthplace;

        let formData = {
            name        : name,
            username    : username,
            birthplace  : birthplace
        }
        console.log(formData);
            // update query
        content.updateData(req.db, id, formData, (err, result) => {
            if (err) {
                req.flash('error', err)
                res.render('content/edit_page', {
                    id          : id,
                    name        : formData.name,
                    username    : formData.username,
                    birthplace  : formData.birthplace
                })
                } else {
                    req.flash('success', 'Data Berhasil Diupdate!');
                    res.redirect('/');
                }
            })
        },

    delete: (req, res) => {
        let id  = req.params.id;
        content.deleteData(req.db, id, (err, result) => {
            if(err){
                req.flash('error', `${error.message}`);
                res.redirect('/');
            } else {
                req.flash('success', 'Data berhasil dihapus')
                res.redirect('/');
            }
        })
    }
}