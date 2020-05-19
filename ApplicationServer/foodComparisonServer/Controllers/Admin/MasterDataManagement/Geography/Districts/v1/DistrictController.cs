using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using foodComparisonServer.Models.Common.ResponseModels.v1;
using foodComparisonServer.Services.Common.Helpers.v1;
using foodComparisonServer.Services.SQLGateway.v1;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace foodComparisonServer.Controllers.Admin.MasterDataManagement.Geography.Districts.v1
{
    [Route("api/[controller]")]
    [ApiController]
    public class DistrictController : ControllerBase
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
            public DistrictController(IHostingEnvironment _HostingEnvironment, IConfiguration _Configuration, IHttpContextAccessor _HttpContextAccessor)
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

        }
}