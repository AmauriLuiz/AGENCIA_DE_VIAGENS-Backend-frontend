
using Agencia_de_Viagens_App.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace Agencia_de_Viagens_App.Data
{
    public class DataContext : DbContext
    {
        public static void Main()
        {
            Console.WriteLine(1);
        }
        protected readonly IConfiguration _configuration;

        public DataContext(IConfiguration configuration)
        {
            _configuration = configuration;


        }



        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionString = _configuration.GetConnectionString("DefaultConnection");
            optionsBuilder.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString));

        }
        public DbSet<User> User { get; set; }
        public DbSet<Destiny> Destiny { get; set; }
        public DbSet<Package> Package { get; set; }
    }
}
