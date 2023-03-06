using Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity
{
    public class Query
    {

        public static object AllUser()
        {
            EduContext myDbContext = new EduContext();

            var list = new
            {
                data = from User in myDbContext.Users.OrderByDescending(q => q.CreatedTime)
                       select new
                       {
                           Name = User.FirstName + " " + User.LastName,
                           Mail = User.Email,
                           ID = User.ID,
                           Phone = User.Phone,
                           CreatedTime = User.CreatedTime,
                           Message = User.Message,
                           userStatus = User.userStatus
                       },
            };
            return list;
        }

        public static object MonthlyDataForAllUserCount()
        {
            EduContext db = new EduContext();
            DateTime time = DateTime.Now;
            var List = new
            {
                January = db.Users.Where(q => q.CreatedTime.Year == time.Year && q.CreatedTime.Month == 1).Count(),
                February = db.Users.Where(q => q.CreatedTime.Year == time.Year && q.CreatedTime.Month == 2).Count(),
                March = db.Users.Where(q => q.CreatedTime.Year == time.Year && q.CreatedTime.Month == 3).Count(),
                April = db.Users.Where(q => q.CreatedTime.Year == time.Year && q.CreatedTime.Month == 4).Count(),
                May = db.Users.Where(q => q.CreatedTime.Year == time.Year && q.CreatedTime.Month == 5).Count(),
                June = db.Users.Where(q => q.CreatedTime.Year == time.Year && q.CreatedTime.Month == 6).Count(),
                July = db.Users.Where(q => q.CreatedTime.Year == time.Year && q.CreatedTime.Month == 7).Count(),
                August = db.Users.Where(q => q.CreatedTime.Year == time.Year && q.CreatedTime.Month == 8).Count(),
                September = db.Users.Where(q => q.CreatedTime.Year == time.Year && q.CreatedTime.Month == 9).Count(),
                October = db.Users.Where(q => q.CreatedTime.Year == time.Year && q.CreatedTime.Month == 10).Count(),
                November = db.Users.Where(q => q.CreatedTime.Year == time.Year && q.CreatedTime.Month == 11).Count(),
                December = db.Users.Where(q => q.CreatedTime.Year == time.Year && q.CreatedTime.Month == 12).Count()
            };
            return List;
        }

        public static object UserCount()
        {
            EduContext myDbContext = new EduContext();

            DateTime input = DateTime.Now;
            var list = new
            {
                data = myDbContext.Users.Count(),
                data2 = myDbContext.Users.Where(q => q.CreatedTime.Day == input.Day).Count(),

            };
            return list;
        }


    }
}
