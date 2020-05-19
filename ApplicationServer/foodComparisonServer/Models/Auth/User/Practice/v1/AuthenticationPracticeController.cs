using foodComparisonServer.Models.Auth.User.Practice.v1;
using foodComparisonServer.Models.Common.ResponseModels.v1;
using foodComparisonServer.Services.Comman.JWT.v1;
using foodComparisonServer.Services.Common.Helpers.v1;
using foodComparisonServer.Services.SQLGateway.v1;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Security.Claims;

namespace foodComparisonServer.Models.Auth.User.Practice.v1
{
    [Route("api/auth/user/v2")]
    [ApiController]
    public class AuthenticationPracticeController : ControllerBase
    {
        #region GLOBAL VARIABLES
        private readonly IHostingEnvironment HostingEnvironment;
        private readonly IHttpContextAccessor HttpContextAccessor;
        private IConfiguration Configurations;
        private SQLGateway ObjSqlGateway;
        private Helper ObjHelper;
        private ApplicationResponseModel ObjResponse;
        //private Encryptor ObjEncryption;
        private ApiResponse ObjApiReponse;
        //private string Language;
        #endregion

        #region CONSTRUCTOR
        public AuthenticationPracticeController(IHostingEnvironment _HostingEnvironment, IConfiguration _Configuration, IHttpContextAccessor _HttpContextAccessor)
        {
            HostingEnvironment = _HostingEnvironment;
            Configurations = _Configuration;
            HttpContextAccessor = _HttpContextAccessor;
            ObjSqlGateway = new SQLGateway(HostingEnvironment, Configurations);
            ObjHelper = new Helper(HostingEnvironment, Configurations);
            ObjResponse = new ApplicationResponseModel();
            //ObjEncryption = new Encryptor(HostingEnvironment, Configurations);
            ObjApiReponse = new ApiResponse();
        }
        #endregion

        #region AUTHENTICATE
        [HttpPost]
        [Route("authenticate")]
        [IgnoreAntiforgeryToken]
        public IActionResult Authenticate([FromBody]PasswordLogin InputModel)
        {
            SqlParameter[] parameters =
            {
                new SqlParameter("@User_Password", InputModel.User_Password),
                new SqlParameter("@User_Name", InputModel.User_Name)
            };            
            DataTable dtResponse = ObjSqlGateway.bindDataTableParam("App_User_Login_Authentication", parameters);
            if (ObjHelper.CheckDBNullResponse(dtResponse))
            {
                //DataTable dtResponse = dsResponse.Tables[0];
                DataRow drResponseRow = dtResponse.Rows[0];
                if (drResponseRow["Response"] != null)
                {
                    if (drResponseRow["Response"].ToString() == "1")
                    {
                        List<Claim> loginClaims = new List<Claim>
                        {
                            new Claim("eid", drResponseRow["User_Name"].ToString())
                        };

                        Jwt ObjJWT = new Jwt(HostingEnvironment, Configurations);
                        //Remove Employee Id FROM Response DATA
                        //dsResponse.Tables[0].Columns.Remove("User_Name");

                        //DataTable dtToken = new DataTable();
                        //dtToken.Columns.Add("Token", typeof(string));
                        //dtToken.Rows.Add(ObjJWT.GenerateWebToken(loginClaims));
                        //dtResponse.Rows.Add(dtToken);
                        //dsResponse.Tables.Add(dtResponse);

                        dtResponse.Columns.Add("Token", typeof(string));
                        //dtResponse.Rows.Add(ObjJWT.GenerateWebToken(loginClaims));
                        drResponseRow["Token"] = (ObjJWT.GenerateWebToken(loginClaims)).ToString();

                        ObjResponse.Response = 1;
                        ObjResponse.Data = ObjHelper.ConvertTableToDictionary(dtResponse);
                    }
                    else
                    {
                        ObjResponse = ObjApiReponse.ResolveDbException(drResponseRow);
                    }
                }
                else
                {
                    ObjResponse = ObjApiReponse.ResolveDbNullResponse();
                }
            }
            else
            {
                ObjResponse = ObjApiReponse.ResolveDbNullResponse();
            }
            return Ok(ObjResponse);
        }
        #endregion    
    }
}