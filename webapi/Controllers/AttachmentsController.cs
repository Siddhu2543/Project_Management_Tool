using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webapi.Models;
using webapi.ViewModels;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AttachmentsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AttachmentsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Attachments
        [HttpGet("project/{id}")]
        public async Task<ActionResult<IEnumerable<Attachment>>> GetAttachments(int id)
        {
          if (_context.Attachments == null)
          {
              return NotFound();
          }
            return await _context.Attachments.Where(a => a.ProjectId == id).ToListAsync();
        }

        // GET: api/Attachments/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Attachment>> GetAttachment(int id)
        {
          if (_context.Attachments == null)
          {
              return NotFound();
          }
            var attachment = await _context.Attachments.FindAsync(id);

            if (attachment == null)
            {
                return NotFound();
            }

            return attachment;
        }

        // PUT: api/Attachments/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAttachment(int id, Attachment attachment)
        {
            if (id != attachment.Id)
            {
                return BadRequest();
            }

            _context.Entry(attachment).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AttachmentExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Attachments
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [Authorize]
        public async Task<ActionResult<Attachment>> PostAttachment(AttachmentDto attachmentDto)
        {
          if (_context.Attachments == null)
          {
              return Problem("Entity set 'AppDbContext.Attachments'  is null.");
          }
            var employee = await GetEmployeeFromToken();
          var attachment = new Attachment()
          {
              FileName= attachmentDto.FileName,
              FilePath= attachmentDto.FilePath,
              AddedBy=employee.Name,
              ProjectId=attachmentDto.ProjectId
          };
            _context.Attachments.Add(attachment);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAttachment", new { id = attachment.Id }, attachment);
        }

        // DELETE: api/Attachments/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAttachment(int id)
        {
            if (_context.Attachments == null)
            {
                return NotFound();
            }
            var attachment = await _context.Attachments.FindAsync(id);
            if (attachment == null)
            {
                return NotFound();
            }

            _context.Attachments.Remove(attachment);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AttachmentExists(int id)
        {
            return (_context.Attachments?.Any(e => e.Id == id)).GetValueOrDefault();
        }

        private async Task<Employee> GetEmployeeFromToken()
        {
            var identity = HttpContext.User.Identity as ClaimsIdentity;
            if (identity != null)
            {
                var userClaims = identity.Claims;
                var email = userClaims.FirstOrDefault(u => u.Type == ClaimTypes.Email)?.Value;
                var employee = await _context.Employees.FirstOrDefaultAsync(e => e.Email == email);
                return employee;
            }
            return null;
        }
    }
}
