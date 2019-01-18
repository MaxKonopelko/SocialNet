using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SocialNet.DAL;


namespace SocialNet.Api.Controllers
{
    [Route("api/User")]
    public class UserController : Controller
    {
        private readonly SocialNetContext _context;

        public UserController(SocialNetContext context)
        {
            _context = context;
        }

        [HttpPost("add")]
        public bool Add([FromBody] User user)
        {
            if (_context.Users.Any(x => x.Email == user.Email))
            {
                return false;
            }

            _context.Users.Add(user);
            _context.SaveChanges();
            return true;
        }

        [HttpPost("login")]
        public bool Login([FromBody] User user)
        {
            return _context.Users.Any(x => x.Email == user.Email && x.Password == user.Password);
        }      
    }
}