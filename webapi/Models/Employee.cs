﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace webapi.Models
{
    public class Employee
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public long Mobile { get; set; }
        [Required]
        public DateTime Dob { get; set; }
        [Required]
        public string Address { get; set; }
        [Required]
        public string Image { get; set; }
        [Required]
        public string Password { get; set; }
        public bool IsOnLeave { get; set; } = false;
        public bool IsAssigned { get; set; } = false;
        public bool IsGoogleSignIn { get; set; } = false;
        public string Website { get; set; } = "";
        public string GitHub { get; set; } = "";
        public string Instagram { get; set; } = "";
        public string Facebook { get; set; } = "";
        public string Twitter { get; set; } = "";

        public ICollection<Todo> Todos { get; set; } = new List<Todo>();
        public ICollection<Note> Notes { get; set; } = new List<Note>();
        [NotMapped]
        [JsonIgnore]
        public ICollection<Employee> ConnectionsSelf { get; set; } = new List<Employee>();
        [JsonIgnore]
        public ICollection<Employee> Connections { get; set; } = new List<Employee>();
        [JsonIgnore]
        public ICollection<Employee> ConnectionRequestSent = new List<Employee>();
        [JsonIgnore]
        public ICollection<Employee> ConnectionRequestReceived = new List<Employee>();
        [JsonIgnore]
        public ICollection<Project> ProjectsCreated { get; set; } = new List<Project>();
        [JsonIgnore]
        public ICollection<Chat> Chats { get; set; } = new List<Chat>();
        [JsonIgnore]
        public ICollection<Team> Teams { get; set; } = new List<Team>();
    }
}
