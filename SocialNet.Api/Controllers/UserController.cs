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

        [HttpGet("get-all")]
        public List<User> GetAll()
        {
            var images = _context.Users.ToList();

            return images;
        }

        [HttpGet("get-by-id/{id}")]
        public User GetById(int id)
        {
            var image = _context.Users.First(x => x.Id == id);
            return image;
        }

        [HttpPost("add")]
        public int Add([FromBody] User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();

            return user.Id;
        }
    }
}