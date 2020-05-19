using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace foodComparisonServer.Services.Comman.Helpers.v1
{
    public class ResponseMessage
    {
        public ResponseMessage()
        {

        }
        public const string SessionUserId = "_UserId";
        public const string SessionKeyToken = "_Token";
        public const string SessionUsername = "_Username";
        public const string SessionFirstLogin = "False";
        public const string SessionEmpId = "_EmpId";

        public const string AccountBlock = "Your account has been blocked by admin.";
        public const string InvalidCredentials = "Invalid credentials.";
        public const string CaptchaError = "Please enter captcha.";
        public const string EmailDoesnotExist = "This email doesn't exists in our system.";
        public const string InvalidEmail = "Please enter a valid email.";
        public const string PasswordSuccess = "Password updated successfully.";
        public const string InvalidOldPassword = "Please check old password.";
        public const string InvalidPasswordClause = "You can't use last three passwords.";
        public const string PasswordandConfirmPasswordNotMatch = "Password and Confirm Password doesn't match.";
        public const string LinkExpired = "Reset Password link has expired.";
        public const string UserStatus = "User is not valid.";
        public const string LinkReuse = "Link has already used.";
        public const string SetPassword = "Password has been set now.";
        public const string ApiSuccessMessage = "success";
        public const string ApiErrorMessage = "Error";

    }
        
    
}
