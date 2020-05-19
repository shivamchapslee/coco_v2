using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using foodComparisonServer.Models.Admin.MasterDataManagement.Geograpnhy.States.v1;
using foodComparisonServer.Models.Common.ResponseModels.v1;
using foodComparisonServer.Services.Common.Helpers.v1;
using foodComparisonServer.Services.SQLGateway.v1;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace foodComparisonServer.Controllers.Admin.MasterDataManagement.Geography.States.v1
{
    //[Route("api/[controller]")]
    [Route("api/admin/mdm/geography/v1")]
    [ApiController]
    public class StatesController : ControllerBase
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
        public StatesController(IHostingEnvironment _HostingEnvironment, IConfiguration _Configuration, IHttpContextAccessor _HttpContextAccessor)
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

        #region SELECT STATES
        [HttpPost]
        [Route("get-states")]
        public IActionResult GetFood(SelectStatesModel InputModel)
        {
            SqlParameter[] parameters =
            {
                new SqlParameter("@Select_By", InputModel.Select_By),
                new SqlParameter("@Select_Param", InputModel.Select_Param),
                new SqlParameter("@Is_Active", InputModel.Is_Active)
            };
            DataTable dtResponse = ObjSqlGateway.bindDataTableParam("Md_Geo_State_Select", parameters);

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