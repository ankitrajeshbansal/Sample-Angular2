using Angular2MVC.DBContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace Angular2MVC.Controllers
{
    public class AuthApiController : BaseAPIController
    {
        public HttpResponseMessage Post([FromBody] TblAuth value)
        {
            return ToJson(UserDB.TblAuths.Any(x => x.Username == value.Username && x.Password == value.Password));
        }
    }
}