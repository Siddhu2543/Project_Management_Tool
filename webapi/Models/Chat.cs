using System.Text.Json.Serialization;

namespace webapi.Models
{
    public class Chat
    {
        public int Id { get; set; }
        public bool IsGroupChat { get; set; } = false;
        public string GroupName { get; set; } = string.Empty;
        public int? ProjectId { get; set; } = null;
        [JsonIgnore]
        public Project? Project { get; set; } = null;
        [JsonIgnore] 
        public ICollection<Employee> Employees { get; set;} = new List<Employee>();
        [JsonIgnore] 
        public ICollection<Message> Messages { get; set; } = new List<Message>();
    }
}
