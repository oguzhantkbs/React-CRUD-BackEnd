using Microsoft.EntityFrameworkCore;

namespace WebAPI.Models
{
    public class EfDbContext : DbContext
    {
        public EfDbContext(DbContextOptions<EfDbContext> options) : base(options)
        {

        }
        public DbSet<DCandidate> dCandidates { get; set; }
    }
}
