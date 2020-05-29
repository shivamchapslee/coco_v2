using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using foodComparisonServer.Models.Admin.MasterDataManagement.foodSelect.V2;
using foodComparisonServer.Models.Common.ResponseModels.v1;
using foodComparisonServer.Services.Common.Helpers.v1;
using foodComparisonServer.Services.SQLGateway.v1;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using foodComparisonServer.Models.Users.ConsumableSelection.ActionSubmittion.v1;

namespace foodComparisonServer.Controllers.Users.ConsumableSelection.ActionSubmittion.v1
{
    [Route("api/cs/actionsubmittion/v1")]
    [ApiController]
    public class ConsumableDetailsController : ControllerBase
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
        public ConsumableDetailsController(IHostingEnvironment _HostingEnvironment, IConfiguration _Configuration, IHttpContextAccessor _HttpContextAccessor)
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
        [Route("get-cardDetails")]
        public IActionResult GetFood(ConsumableDetailsModel InputModel)
        {
            SqlParameter[] parameters =
            {
                new SqlParameter("@Location", InputModel.Location),
                new SqlParameter("@Consumable_Name", InputModel.Consumable_Name),
                new SqlParameter("@Select_By", InputModel.Select_By),
                new SqlParameter("@Select_Param", InputModel.Select_Param)
            };
            DataTable dtResponse = ObjSqlGateway.bindDataTableParam("App_User_Consumable_Card_Details", parameters);

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