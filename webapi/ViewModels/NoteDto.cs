using System.ComponentModel.DataAnnotations;

namespace webapi.ViewModels
{
    public class NoteDto
    {
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Description { get; set; }
    }
}
