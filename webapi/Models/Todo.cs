using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace webapi.Models
{
    public class Todo
    {
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        public DateTime CreationDate { get; set; } = DateTime.Now;
        [Required]
        public DateTime DueDate { get; set; }
        [Required]
        public int EmployeeId { get; set; }
        [JsonIgnore]
        public Employee Employee { get; set; }
        public bool IsCompleted { get; set; } = false;
    }
}
