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
    public class PhasesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public PhasesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Phases
        [HttpGet("project/{id}")]
        public async Task<ActionResult<IEnumerable<Phase>>> GetPhases(int id)
        {
          if (_context.Phases == null)
          {
              return NotFound();
          }
            return await _context.Phases.Where(p => p.ProjectId == id).OrderBy(p => p.Number).ToListAsync();
        }

        // GET: api/Phases/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Phase>> GetPhase(int id)
        {
          if (_context.Phases == null)
          {
              return NotFound();
          }
            var phase = await _context.Phases.FindAsync(id);

            if (phase == null)
            {
                return NotFound();
            }

            return phase;
        }

        // PUT: api/Phases/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPhase(int id, Phase phase)
        {
            if (id != phase.Id)
            {
                return BadRequest();
            }

            _context.Entry(phase).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PhaseExists(id))
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

        // POST: api/Phases
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Phase>> PostPhase(Phase phase)
        {
          if (_context.Phases == null)
          {
              return Problem("Entity set 'AppDbContext.Phases'  is null.");
          }
          var project = await _context.Projects.FindAsync(phase.ProjectId);
            phase.Project = project;
            _context.Phases.Add(phase);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPhase", new { id = phase.Id }, phase);
        }

        // DELETE: api/Phases/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePhase(int id)
        {
            if (_context.Phases == null)
            {
                return NotFound();
            }
            var phase = await _context.Phases.FindAsync(id);
            if (phase == null)
            {
                return NotFound();
            }

            _context.Phases.Remove(phase);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PhaseExists(int id)
        {
            return (_context.Phases?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
