using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webapi.Models;

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
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PTask>>> GetPTasks()
        {
          if (_context.PTasks == null)
          {
              return NotFound();
          }
            return await _context.PTasks.ToListAsync();
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
        public async Task<ActionResult<PTask>> PostPTask(PTask pTask)
        {
          if (_context.PTasks == null)
          {
              return Problem("Entity set 'AppDbContext.PTasks'  is null.");
          }
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
