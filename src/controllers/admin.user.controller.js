const pool = require('../lib/database')

class UserController {

    //Listar los usuarios
    async List(req, res) {
        const usuario = await pool.query('select * from user where fk_rol = 1')
        res.render('users/user', { usuario });
    }

    //Renderizar el formulario para editar usuarios
    async RenderEditUser(req, res) {
        const { id } = req.params;
        const user = await pool.query('select * from user where id_user = ?', [id]);
        res.render('users/editUser', { user: user[0] });
    }

    //Editar usuario
    async EditUser(req, res) {
        const { id } = req.params;
        const { user, fullname, email, fk_rol } = req.body;

        try {
            if (user !== "" && fullname !== "" && email !== "" && fk_rol !== "") {
                const newUser = {
                    user,
                    fullname,
                    email,
                    fk_rol
                }

                console.log(newUser)

                await pool.query('update user set ? where id_user = ?', [newUser, id]);
                req.flash('success', 'Usuario actualizado con éxito');
                res.redirect('/admin/users');
            } else {
                req.flash('message', 'Dejaste un campo vacio');
                res.redirect(`/admin/users/edit/${id}`);
            }
        } catch (error) {
            req.flash('message', 'No se pudo editar el usuario' + error);
            res.redirect(`/admin/users/edit/${id}`);
        }
    }

    //Eliminar usuario
    async DeleteUser(req, res) {
        try {
            const { id } = req.params;
            await pool.query('delete from user where id_user = ?', [id])
            req.flash('success', 'Usuario eliminado con éxito');
            res.redirect('/admin/users');
        } catch (error) {
            req.flash('message', 'No se pudo eliminar el usuario' + error);
            res.redirect('/admin/users');
        }
    }
}

module.exports = new UserController();