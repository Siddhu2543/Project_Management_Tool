using System.ComponentModel.DataAnnotations;

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
        public Employee Employee { get; set; }
    }
}
