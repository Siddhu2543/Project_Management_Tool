using System.ComponentModel.DataAnnotations;

namespace webapi.ViewModels
{
    public class TodoDto
    {
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public DateTime DueDate { get; set; }

    }
}
