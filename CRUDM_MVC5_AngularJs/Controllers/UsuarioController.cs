using CRUDM_MVC5_AngularJs.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CRUDM_MVC5_AngularJs.Controllers
{
    public class UsuarioController : Controller
    {
        #region Método para Listar Usuario = READ

        // GET Usuario/GetUsuario
        public JsonResult GetUsuarios()
        {
            using (var db = new UsuarioEntities())
            {
                List<usuario> listarUsuario = db.usuarios.ToList();

                return Json(listarUsuario, JsonRequestBehavior.AllowGet);
            }
        }

        #endregion

        #region Método para adicionar usuarios - CREATE

        // POST Usuario/AdicionarUsuario
        [HttpPost]
        public JsonResult AdicionarUsuario(usuario usuario)
        {
            if(usuario!= null)
            {
                using (var db = new UsuarioEntities())
                {
                    db.usuarios.Add(usuario);
                    db.SaveChanges();

                    return Json(new { success = true });
                }

            }
            return Json(new { success = false });
        }
        #endregion
    }
}