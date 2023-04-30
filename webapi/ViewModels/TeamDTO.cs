using System.ComponentModel.DataAnnotations;

namespace webapi.ViewModels
{
    public class TeamDTO
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public int ProjectId { get; set; }
    }
}
