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
    public class TeamsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TeamsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Teams
        [HttpGet("project/{id}")]
        public async Task<ActionResult<IEnumerable<Team>>> GetTeams(int id)
        {
          if (_context.Teams == null)
          {
              return NotFound();
          }
            return await _context.Teams.Where(t => t.ProjectId == id).ToListAsync();
        }

        // GET: api/Teams/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Team>> GetTeam(int id)
        {
          if (_context.Teams == null)
          {
              return NotFound();
          }
            var team = await _context.Teams.FindAsync(id);

            if (team == null)
            {
                return NotFound();
            }

            return team;
        }

        // PUT: api/Teams/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTeam(int id, Team team)
        {
            if (id != team.Id)
            {
                return BadRequest();
            }

            _context.Entry(team).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TeamExists(id))
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

        // POST: api/Teams
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Team>> PostTeam(TeamDTO teamDto)
        {
          if (_context.Teams == null)
          {
              return Problem("Entity set 'AppDbContext.Teams'  is null.");
          }
            var team = new Team()
            {
                Name = teamDto.Name,
                Description = teamDto.Description,
                ProjectId = teamDto.ProjectId
            };
            _context.Teams.Add(team);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTeam", new { id = team.Id }, team);
        }

        // DELETE: api/Teams/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTeam(int id)
        {
            if (_context.Teams == null)
            {
                return NotFound();
            }
            var team = await _context.Teams.FindAsync(id);
            if (team == null)
            {
                return NotFound();
            }

            _context.Teams.Remove(team);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TeamExists(int id)
        {
            return (_context.Teams?.Any(e => e.Id == id)).GetValueOrDefault();
        }

        [HttpPut("addMember/{id}/{empId}")]
        public async Task<ActionResult> AddTeamMembers(int id, int empId)
        {
            if (_context.Teams == null)
            {
                return Problem("Entity set 'AppDbContext.Teams'  is null.");
            }

            var team = await _context.Teams.FindAsync(id);
            var emp = await _context.Employees.FindAsync(empId);
            team.Employees.Add(emp);
            _context.Entry(team).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            emp.IsAssigned = true;
            _context.Entry(emp).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpGet("members/{id}")]
        public async Task<ActionResult<IEnumerable<Employee>>> GetMembers(int id)
        {
            if (_context.Teams == null)
            {
                return NotFound();
            }
            var members = await _context.Teams.Include(t => t.Employees).Where(t => t.Id == id).FirstOrDefaultAsync();
            return Ok(members.Employees);
        }
    }
}
