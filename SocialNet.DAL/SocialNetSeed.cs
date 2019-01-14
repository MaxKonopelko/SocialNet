using System;
using System.Collections.Generic;
using System.Text;

namespace SocialNet.DAL
{
    public static class SocialNetSeed
    {
        public static void Seed(SocialNetContext context)
        {
            CreateUsers(context);
        }

        private static void CreateUsers(SocialNetContext context)
        {
            //context.Users.Add(new User
            //{
            //    Name = "Test1s"
            //});

            //context.SaveChanges();
        }
    }
}
