using System.ComponentModel.DataAnnotations;

namespace webapi.Models
{
    public class Message
    {
        public int Id { get; set; }
        [Required]
        public int ChatId { get; set; }
        public Chat Chat { get; set; }
        [Required]
        public int SenderId { get; set; }
        public Employee Sender { get; set; }
        [Required]
        public string Msg { get; set; }
        public DateTime SentTime { get; set; } = DateTime.Now;
    }
}
