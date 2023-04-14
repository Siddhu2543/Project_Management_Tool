using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace webapi.Models
{
    public class Note
    {
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Description { get; set; }
        public DateTime CreationDate { get; set; } = DateTime.Now;
        [Required]
        public int EmployeeId { get; set; }
        [JsonIgnore]
        public Employee Employee { get; set; }
    }
}
