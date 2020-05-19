using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace foodComparisonServer.Models.Admin.MasterDataManagement.Geograpnhy.States.v1
{
    public class SelectStatesModel
    {
        public string Select_By { get; set; }
        public string Select_Param { get; set; }
        public bool Is_Active { get; set; }
    }
}
