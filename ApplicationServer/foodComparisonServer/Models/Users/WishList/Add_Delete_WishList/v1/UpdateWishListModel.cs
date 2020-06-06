using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace foodComparisonServer.Models.Users.WishList.Add_Delete_WishList.v1
{
    public class UpdateWishListModel
    {
        public string IpAddress { get; set; }
        public int Consumable_ID { get; set; }
        public int User_ID { get; set; }
        public int Session_ID { get; set; }
        public string Select_By { get; set; }
        public string Select_Param { get; set; }
    }
}
