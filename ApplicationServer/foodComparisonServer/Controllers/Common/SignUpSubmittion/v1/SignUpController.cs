using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using foodComparisonServer.Models.Common.ResponseModels.v1;
using foodComparisonServer.Services.Common.Helpers.v1;
using foodComparisonServer.Services.SQLGateway.v1;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using foodComparisonServer.Models.Common.SignUpSubmittion.v1;

namespace foodComparisonServer.Controllers.Common.SignUpSubmittion.v1
{
    [Route("api/common/SignUpSubmittion/v1")]
    [ApiController]
    public class SignUpController : ControllerBase
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
        public SignUpController(IHostingEnvironment _HostingEnvironment, IConfiguration _Configuration, IHttpContextAccessor _HttpContextAccessor)
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
        [Route("insert-userDetails")]
        public IActionResult GetFood(SignUpModel InputModel)
        {
            SqlParameter[] parameters =
            {
                new SqlParameter("@First_Name", InputModel.First_Name),
                new SqlParameter("@Last_Name", InputModel.Last_Name),
                new SqlParameter("@EMAIL_Address", InputModel.EMAIL_Address),
                new SqlParameter("@Phone_Number", InputModel.Phone_Number),
                new SqlParameter("@Gender", InputModel.Gender),
                new SqlParameter("@User_Name", InputModel.User_Name),
                new SqlParameter("@Password", InputModel.Password),
                new SqlParameter("@First_Login_Flag", InputModel.First_Login_Flag)
            };
            DataTable dtResponse = ObjSqlGateway.bindDataTableParam("MD_User_Insert", parameters);

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