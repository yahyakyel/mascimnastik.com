using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity
{
    public enum UserStatus
    {
        Waiting,
        Success,
        Rejection
    }
    public class Users : BaseEntity
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public DateTime CreatedTime { get; set; }
        public UserStatus? userStatus { get; set; }
        public string Message { get; set; }
    }
}
