namespace webapi.Models
{
    public class Chat
    {
        public int Id { get; set; }
        public bool IsGroupChat { get; set; } = false;
        public string GroupName { get; set; } = string.Empty;
        public int? ProjectId { get; set; } = null;
        public Project? Project { get; set; } = null;
        public ICollection<Employee> Employees { get; set;} = new List<Employee>();
        public ICollection<Message> Messages { get; set; } = new List<Message>();
    }
}
