﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace foodComparisonServer.Models.Admin.MasterDataManagement.foodSelect.V2
{
    public class consumableSelectModel
    {
        public int Location { get; set; }
        public string Consumable_Name { get; set; }
        public string Select_By { get; set; }
        public string Select_Param { get; set; }
    }
}
