using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace foodComparisonServer.Services.Comman.JWT.v1
{
    public class Jwt
    {
        private IConfiguration Configuration;
        private IHostingEnvironment HostingEnvironment;
        public Jwt(IHostingEnvironment _HostingEnvironment, IConfiguration _Configuration)
        {
            HostingEnvironment = _HostingEnvironment;
            Configuration = _Configuration;
        }

        public string GenerateWebToken(List<Claim> _Claims)
        {

            #region FETCH ENVIRONMENT WISE JWT DETAILS
            string JWTIssuer = Configuration["JWTSetting:Issuer"];
            string JWTAudiance = Configuration["JWTSetting:Audience"];
            string JWTSecret = Configuration["JWTSetting:Key"];
            string JWTExpiry = Configuration["JWTSetting:ExpiryInMins"];
            #endregion

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(JWTSecret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(_Claims),
                Expires = DateTime.Now.AddMinutes(Convert.ToDouble(JWTExpiry)),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature),
                Issuer = JWTIssuer,
                Audience = JWTAudiance
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
