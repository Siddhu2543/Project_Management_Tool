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
    public class NotesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public NotesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Notes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Note>>> GetNotes()
        {
          if (_context.Notes == null)
          {
              return NotFound();
          }
            return await _context.Notes.ToListAsync();
        }

        // GET: api/Notes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Note>> GetNote(int id)
        {
          if (_context.Notes == null)
          {
              return NotFound();
          }
            var note = await _context.Notes.FindAsync(id);
            if (note == null)
            {
                return NotFound();
            }
            note.Employee = null;
            return note;
        }

        // PUT: api/Notes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        [Authorize]
        public async Task<IActionResult> PutNote(int id, NoteDto noteDto)
        {
            if (id != noteDto.Id)
            {
                return BadRequest();
            }
            var employee = await GetEmployeeFromToken();
            var note = await _context.Notes.FindAsync(id);
            if(note.EmployeeId != employee.Id)
            {
                return BadRequest();
            }
            note.Title = noteDto.Title;
            note.Description = noteDto.Description;
            _context.Entry(note).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NoteExists(id))
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

        // POST: api/Notes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [Authorize]
        public async Task<ActionResult<Note>> PostNote(NoteDto noteDto)
        {
          if (_context.Notes == null)
          {
              return Problem("Entity set 'AppDbContext.Notes'  is null.");
          }
            var employee = await GetEmployeeFromToken();
            var note = new Note()
            {
                Title = noteDto.Title,
                Description = noteDto.Description,
                EmployeeId = employee.Id,
            };
            _context.Notes.Add(note);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetNote), new { id = note.Id }, note);
        }

        // DELETE: api/Notes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNote(int id)
        {
            if (_context.Notes == null)
            {
                return NotFound();
            }
            var note = await _context.Notes.FindAsync(id);
            if (note == null)
            {
                return NotFound();
            }

            _context.Notes.Remove(note);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpGet("Employee")]
        [Authorize]
        public async Task<ActionResult<IEnumerable<Note>>> GetEmployeeNotes()
        {
            if (_context.Notes == null)
            {
                return NotFound();
            }

            var employee = await GetEmployeeFromToken();
            var notes = await _context.Notes.Where(n => n.EmployeeId ==  employee.Id).ToListAsync();
            notes.ForEach(note => { note.Employee = null; });
            return notes;
        }

        private bool NoteExists(int id)
        {
            return (_context.Notes?.Any(e => e.Id == id)).GetValueOrDefault();
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
