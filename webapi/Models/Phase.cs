using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace webapi.Models
{
    public class Phase
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public int Number { get; set; }
        [Required]
        public int ProjectId { get; set; }
        [JsonIgnore]
        public Project Project { get; set; }
        [JsonIgnore]
        public ICollection<PTask> PTasks { get; set; } = new List<PTask>();
    }
}
