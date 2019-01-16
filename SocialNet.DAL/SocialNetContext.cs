using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Text;

namespace SocialNet.DAL
{
    public class SocialNetContext : DbContext
    {
        public SocialNetContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
    }

    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
    }
}
