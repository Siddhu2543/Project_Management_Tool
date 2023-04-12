using System.ComponentModel.DataAnnotations;

namespace webapi.Models
{
    public class Team
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public int ProjectId { get; set; }
        public Project Project { get; set; }
        public ICollection<Employee> Employees { get; set; } = new List<Employee>();
        public ICollection<PTask> PTasks { get; set; } = new List<PTask>();
    }
}
