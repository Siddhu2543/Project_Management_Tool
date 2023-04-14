using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace webapi.Models
{
    public class EmployeeSection
    {
        public int Id { get; set; }
        [Required]
        public int EmployeeId { get; set; }
        [Required]
        public string Request { get; set; }
        public DateTime PostDate { get; set; } = DateTime.Now;
        public bool IsAccepted { get; set; } = false;
        public bool IsRead { get; set; } = false;
        [Required]
        public int ProjectId { get; set; }
        [JsonIgnore]
        public Project Project { get; set; }
    }
}
