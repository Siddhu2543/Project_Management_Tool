using System.ComponentModel.DataAnnotations;

namespace webapi.ViewModels
{
    public class PTaskDTO
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

        [Required]
        public int PhaseId { get; set; }
        [Required]
        public DateTime StartDate { get; set; }
        [Required]
        public DateTime EndDate { get; set; }

    }
}
