using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace webapi.Models
{
    public class Project
    {
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public string Priority { get; set; }
        [Required]
        public DateTime StartDate { get; set; }
        [Required]
        public DateTime EndDate { get; set; }
        [Required]
        public string Image { get; set; }
        [Required]
        public int CreatorId { get; set; }
        [JsonIgnore]
        public Employee Creator { get; set; }
        public bool IsChatCreated { get; set; } = false;
        public int? ChatId { get; set; } = null;
        [JsonIgnore]
        public Chat? Chat { get; set; } = null;
        public ICollection<Phase> Phases { get; set; } = new List<Phase>();
        public ICollection<Team> Teams { get; set; } = new List<Team>();
        public ICollection<Attachment> Attachments { get; set; } = new List<Attachment>();
        public ICollection<EmployeeSection> EmployeeSections { get; set; } = new List<EmployeeSection>();
    }
}
