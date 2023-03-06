using Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Services.Description;

namespace UI.Controllers
{
    public class HomeController : Controller
    {
        EduContext db = new EduContext();

        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Contact() 
        {
            return View();
        }
        public ActionResult Services() 
        {
            return View();
        } 
        public ActionResult Gallery() 
        {
            return View();
        }
        public JsonResult AddUser(string FirstName, string LastName, string Email,  string Phone,string Message)
        {
            Users user=new Users()
            {
                FirstName = FirstName,
                LastName = LastName,
                Email = Email,
                Phone = Phone,
                CreatedTime = DateTime.Now,
                Message=Message,
                userStatus= UserStatus.Waiting
            };
            db.Users.Add(user);
            db.SaveChanges();
     
            string result = "Başarılı Şekilde Gönderildi...";
            return Json(result, JsonRequestBehavior.AllowGet);
        }
    }
}