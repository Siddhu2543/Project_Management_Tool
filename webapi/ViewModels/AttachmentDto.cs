using System.ComponentModel.DataAnnotations;

namespace webapi.ViewModels
{
    public class AttachmentDto
    {
        public int Id { get; set; }
        [Required]
        public string FileName { get; set; }
        [Required]
        public string FilePath { get; set; }
        [Required]
        public int ProjectId { get; set; }
    }
}
