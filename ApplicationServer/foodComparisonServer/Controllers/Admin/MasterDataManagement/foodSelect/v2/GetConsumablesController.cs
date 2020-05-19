using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using foodComparisonServer.Models.Admin.MasterDataManagement.foodSelect.v1;
using foodComparisonServer.Models.Admin.MasterDataManagement.foodSelect.V2;
using foodComparisonServer.Models.Common.ResponseModels.v1;
using foodComparisonServer.Services.Common.Helpers.v1;
using foodComparisonServer.Services.SQLGateway.v1;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace foodComparisonServer.Controllers.Admin.MasterDataManagement.foodSelect.v2
{
    [Route("api/mdm/foodSelect/v2")]
    [ApiController]
    public class GetConsumablesController : ControllerBase
    {
        #region GLOBAL VARIABLES
        private readonly IHostingEnvironment HostingEnvironment;
        private readonly IHttpContextAccessor HttpContextAccessor;
        private IConfiguration Configurations;
        private SQLGateway ObjSqlGateway;
        private Helper ObjHelper;
        private ApplicationResponseModel ObjResponse;
        private ApiResponse ObjApiReponse;
        #endregion

        #region CONSTRUCTOR
        public GetConsumablesController(IHostingEnvironment _HostingEnvironment, IConfiguration _Configuration, IHttpContextAccessor _HttpContextAccessor)
        {
            HostingEnvironment = _HostingEnvironment;
            Configurations = _Configuration;
            HttpContextAccessor = _HttpContextAccessor;
            ObjSqlGateway = new SQLGateway(HostingEnvironment, Configurations);
            ObjHelper = new Helper(HostingEnvironment, Configurations);
            ObjResponse = new ApplicationResponseModel();
            ObjApiReponse = new ApiResponse();
        }
        #endregion

        #region SELECT CONSUMABLES
        [HttpPost]
        [Route("get-consumables")]
        public IActionResult GetFood(consumableSelectModel InputModel)
        {
            SqlParameter[] parameters =
            {
                new SqlParameter("@Location", InputModel.Location),
                new SqlParameter("@Consumable_Name", InputModel.Consumable_Name),
                new SqlParameter("@Select_By", InputModel.Select_By),
                new SqlParameter("@Select_Param", InputModel.Select_Param)
            };
            DataTable dtResponse = ObjSqlGateway.bindDataTableParam("MD_get_Consumables_Details", parameters);

            if (ObjHelper.CheckDBNullResponse(dtResponse))
            {
                ObjResponse.Response = 1;
                ObjResponse.Data = ObjHelper.ConvertTableToDictionary(dtResponse);
            }
            else
            {
                ObjResponse = ObjApiReponse.ResolveDbNullResponse();
            }
            return Ok(ObjResponse);
            #endregion
        }
    }
}