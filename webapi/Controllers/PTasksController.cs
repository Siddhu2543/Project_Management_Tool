using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webapi.Models;
using webapi.ViewModels;
namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PTasksController : ControllerBase
    {
        private readonly AppDbContext _context;

        public PTasksController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/PTasks
        [HttpGet("project/{id}")]
        public async Task<ActionResult<IEnumerable<PTask>>> GetPTasks(int id)
        {
          if (_context.PTasks == null)
          {
              return NotFound();
          }
            return await _context.PTasks.Include(t=>t.Team).Where(t => t.Team.ProjectId==id).ToListAsync();
        }

        [HttpPut("toggleStatus/{id}")]
        public async Task<ActionResult> ToggleStatus(int id)
        {
            if (_context.PTasks == null)
            {
                return NotFound();
            }
            var pTask = await _context.PTasks.FindAsync(id);
            pTask.IsCompleted = !pTask.IsCompleted;
            _context.Entry(pTask).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return Ok();
        }

        // GET: api/PTasks/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PTask>> GetPTask(int id)
        {
          if (_context.PTasks == null)
          {
              return NotFound();
          }
            var pTask = await _context.PTasks.FindAsync(id);

            if (pTask == null)
            {
                return NotFound();
            }

            return pTask;
        }

        // PUT: api/PTasks/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPTask(int id, PTask pTask)
        {
            if (id != pTask.Id)
            {
                return BadRequest();
            }

            _context.Entry(pTask).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PTaskExists(id))
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

        // POST: api/PTasks
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PTask>> PostPTask(PTaskDTO pTaskdto)
        {
          if (_context.PTasks == null)
          {
              return Problem("Entity set 'AppDbContext.PTasks'  is null.");
          }
          var pTask=new PTask()
          {
              Name = pTaskdto.Name,
              StartDate= pTaskdto.StartDate,
              Description= pTaskdto.Description,
              EndDate= pTaskdto.EndDate,
              PhaseId = pTaskdto.PhaseId,
              TeamId= pTaskdto.TeamId,
              Tasks = pTaskdto.Tasks
          };
            _context.PTasks.Add(pTask);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPTask", new { id = pTask.Id }, pTask);
        }

        // DELETE: api/PTasks/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePTask(int id)
        {
            if (_context.PTasks == null)
            {
                return NotFound();
            }
            var pTask = await _context.PTasks.FindAsync(id);
            if (pTask == null)
            {
                return NotFound();
            }

            _context.PTasks.Remove(pTask);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PTaskExists(int id)
        {
            return (_context.PTasks?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
