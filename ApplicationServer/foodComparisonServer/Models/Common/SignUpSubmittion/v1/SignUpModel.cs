using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace foodComparisonServer.Models.Common.SignUpSubmittion.v1
{
    public class SignUpModel
    {
        public string First_Name { get; set; }
        public string Last_Name { get; set; }
        public string EMAIL_Address { get; set; }
        public string Phone_Number { get; set; }
        public string Gender { get; set; }
        public string User_Name { get; set; }
        public string Password { get; set; }
        public Boolean First_Login_Flag { get; set; }
    }
}
