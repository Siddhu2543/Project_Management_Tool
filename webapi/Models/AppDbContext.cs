using Microsoft.EntityFrameworkCore;

namespace webapi.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Attachment> Attachments { get; set; }
        public DbSet<Chat> Chats { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<EmployeeSection> EmployeeSections { get; set; }
        public DbSet<Message> Messages { get; set; }
        public DbSet<Note> Notes { get; set; }
        public DbSet<Phase> Phases { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<PTask> PTasks { get; set; }
        public DbSet<Team> Teams { get; set; }
        public DbSet<Todo> Todos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Employee>().HasMany(e => e.Todos).WithOne(t => t.Employee).HasForeignKey(t => t.EmployeeId);
            modelBuilder.Entity<Employee>().HasMany(e => e.Notes).WithOne(n => n.Employee).HasForeignKey(n => n.EmployeeId);
            modelBuilder.Entity<Employee>().HasMany(e => e.ConnectionRequestReceived).WithMany(e => e.ConnectionRequestSent);
            modelBuilder.Entity<Employee>().HasMany(e => e.ProjectsCreated).WithOne(p => p.Creator).HasForeignKey(p => p.CreatorId);
            modelBuilder.Entity<Employee>().HasMany(e => e.ConnectionsSelf).WithMany(e => e.Connections);
            modelBuilder.Entity<Project>().HasMany(p => p.Phases).WithOne(p => p.Project).HasForeignKey(p => p.ProjectId);
            modelBuilder.Entity<Project>().HasMany(p => p.Teams).WithOne(t => t.Project).HasForeignKey(t => t.ProjectId);
            modelBuilder.Entity<Team>().HasMany(t => t.Employees).WithOne(e => e.Team).HasForeignKey(e => e.TeamId);
            modelBuilder.Entity<Project>().HasMany(p => p.Attachments).WithOne(a => a.Project).HasForeignKey(a => a.ProjectId);
            modelBuilder.Entity<Project>().HasMany(p => p.EmployeeSections).WithOne(e => e.Project).HasForeignKey(p => p.ProjectId);
            modelBuilder.Entity<Project>().HasOne(p => p.Chat).WithOne(c => c.Project).HasForeignKey<Chat>(c => c.ProjectId);
            modelBuilder.Entity<PTask>().HasOne(t => t.Phase).WithMany(p => p.PTasks).HasForeignKey(t => t.PhaseId).OnDelete(DeleteBehavior.Restrict);
            modelBuilder.Entity<PTask>().HasOne(t => t.Team).WithMany(t => t.PTasks).HasForeignKey(t => t.PhaseId).OnDelete(DeleteBehavior.Restrict);
            modelBuilder.Entity<Employee>().HasMany(e => e.Chats).WithMany(c => c.Employees);
            modelBuilder.Entity<Chat>().HasMany(c => c.Messages).WithOne(m => m.Chat).HasForeignKey(m => m.ChatId);
        }
    }
}
