using Entity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using System.Windows.Forms;

namespace Admin.Controllers
{
    public class UsersController : Controller
    {
        EduContext db = new EduContext();


        // GET: Users
        public ActionResult Index()
        {
            return View();
        }
        public JsonResult AllUser()
        {
            object list = Query.AllUser();
            return Json(list, JsonRequestBehavior.AllowGet);
        }
        public JsonResult UserCount()
        {
            object list = Query.UserCount();
            return Json(list, JsonRequestBehavior.AllowGet);
        }
        public JsonResult MonthlyDataForAllUserCount()
        {
            object list = Query.MonthlyDataForAllUserCount();
            return Json(list, JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult UpdateStatusForUser(int UsersRequestID, int Status)
        {
            string result = "";
            try
            {
                Users users = db.Users.Where(q => q.ID == UsersRequestID).FirstOrDefault();


                if (Status == 1)
                {
                    users.userStatus = UserStatus.Success;
                    db.SaveChanges();
                    result = "Kurs Öğrenciye Tanımlandı...";
                }
                else
                {
                    users.userStatus = UserStatus.Rejection;
                    db.SaveChanges();
                    result = "Kurs red edildi...";
                }
            }
            catch (Exception)
            {
                result = "Bir hata ile karşılaşıldı.";
            }
            return Json(result, JsonRequestBehavior.AllowGet);
        }
    }
}