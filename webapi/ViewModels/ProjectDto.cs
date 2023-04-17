namespace webapi.ViewModels;
using System.ComponentModel.DataAnnotations;
using webapi.Models;
using System.Text.Json.Serialization;


public class ProjectDto
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
}

