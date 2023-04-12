using System.ComponentModel.DataAnnotations;

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
        public Employee Employee { get; set; }
    }
}
