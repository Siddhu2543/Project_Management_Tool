﻿using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace webapi.Models
{
    public class Attachment
    {
        public int Id { get; set; }
        [Required]
        public string FileName { get; set; }
        [Required]
        public string FilePath { get; set; }
        [Required]
        public string FileType { get; set; }
        [Required]
        public string FileSize { get; set; }
        [Required]
        public int AddedBy { get; set; }
        [Required]
        public int ProjectId { get; set; }
        [JsonIgnore]
        public Project Project { get; set; }
        public DateTime AddedDate { get; set; } = DateTime.Now;
    }
}
