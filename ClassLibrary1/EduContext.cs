using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity
{
    public class EduContext : DbContext
    {
        public EduContext() : base("dbMAS")
        {
            Database.Connection.ConnectionString = @"server=(localdb)\mssqllocaldb; database=dbMAS;Integrated Security=true";
        }
        public DbSet<Admins> Admins { get; set; }
        public DbSet<Users> Users { get; set; }
    }
}
