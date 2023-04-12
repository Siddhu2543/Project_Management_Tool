using System.ComponentModel.DataAnnotations;

namespace webapi.Models
{
    public class PTask
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public string Tasks { get; set; }
        [Required]
        public int TeamId { get; set; }
        public Team Team { get; set; }
        [Required]
        public int PhaseId { get; set; }
        public Phase Phase { get; set; }
        [Required]
        public DateTime StartDate { get; set; }
        [Required]
        public DateTime EndDate { get; set; }
        public bool IsCompleted { get; set; } = false;
    }
}
