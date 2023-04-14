using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace webapi.Models
{
    public class Message
    {
        public int Id { get; set; }
        [Required]
        public int ChatId { get; set; }
        [JsonIgnore]
        public Chat Chat { get; set; }
        [Required]
        public int SenderId { get; set; }
        [JsonIgnore]
        public Employee Sender { get; set; }
        [Required]
        public string Msg { get; set; }
        public DateTime SentTime { get; set; } = DateTime.Now;
    }
}
