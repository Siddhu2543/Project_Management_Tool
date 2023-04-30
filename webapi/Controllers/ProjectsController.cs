using System;
using System.Collections.Generic;
using System.Diagnostics;
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
    public class ProjectsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ProjectsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Projects
        [HttpGet]
        [Authorize]
        public async Task<ActionResult<IEnumerable<Project>>> GetProjects()
        {
          if (_context.Projects == null)
          {
              return NotFound();
          }
          var employee = await GetEmployeeFromToken();
          var p1 = await _context.Projects.Include(p => p.Teams).ThenInclude(t => t.Employees).ToListAsync();
            var p2 = p1.Where(p => p.Teams.Any(t => t.Employees.Any(e => e.Id == employee.Id))).ToList();
            var p3 = p1.Where(p => p.CreatorId == employee.Id).ToList();
            var projects = p3.Union(p2).ToList();
            return projects;
        }

        // GET: api/Projects/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Project>> GetProject(int id)
        {
          if (_context.Projects == null)
          {
              return NotFound();
          }
            var project = await _context.Projects.FindAsync(id);

            if (project == null)
            {
                return NotFound();
            }

            return project;
        }

        // PUT: api/Projects/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProject(int id, ProjectDto projectdto)
        {
            if (id != projectdto.Id)
            {
                return BadRequest();
            }
            var project = await _context.Projects.FindAsync(id);
           
            project.Title=projectdto.Title;
            project.Description=projectdto.Description;
            project.StartDate=projectdto.StartDate;
            project.EndDate=projectdto.EndDate;
            project.Image=projectdto.Image;
            project.Priority=projectdto.Priority;
            _context.Entry(project).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProjectExists(id))
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

        // POST: api/Projects
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [Authorize]
        public async Task<ActionResult<Project>> PostProject(ProjectDto projectdto)
        {
          if (_context.Projects == null)
          {
              return Problem("Entity set 'AppDbContext.Projects'  is null.");
          }
            var employee = await GetEmployeeFromToken();
            Project project = new Project()
            {
                Title = projectdto.Title,
                Description = projectdto.Description,
                Priority = projectdto.Priority,
                StartDate = projectdto.StartDate,
                EndDate = projectdto.EndDate,
                Image = projectdto.Image,
                CreatorId = employee.Id
            };
            _context.Projects.Add(project);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProject", new { id = project.Id }, project);
        }

        // DELETE: api/Projects/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProject(int id)
        {
            if (_context.Projects == null)
            {
                return NotFound();
            }
            var project = await _context.Projects.FindAsync(id);
            if (project == null)
            {
                return NotFound();
            }

            _context.Projects.Remove(project);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProjectExists(int id)
        {
            return (_context.Projects?.Any(e => e.Id == id)).GetValueOrDefault();
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

        [HttpGet("Employee")]
        [Authorize]
        public async Task<ActionResult<List<Project>>> GetEmployeeProjects()
        {
            var employee = await GetEmployeeFromToken();
            var projects = await _context.Projects.Where(n => n.CreatorId == employee.Id).ToListAsync();
            projects.ForEach(project => { project.Creator = null; });
            return projects;
        }

    }
}
