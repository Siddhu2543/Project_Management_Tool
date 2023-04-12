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
    public class EmployeeSectionsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public EmployeeSectionsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/EmployeeSections
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EmployeeSection>>> GetEmployeeSections()
        {
          if (_context.EmployeeSections == null)
          {
              return NotFound();
          }
            return await _context.EmployeeSections.ToListAsync();
        }

        // GET: api/EmployeeSections/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EmployeeSection>> GetEmployeeSection(int id)
        {
          if (_context.EmployeeSections == null)
          {
              return NotFound();
          }
            var employeeSection = await _context.EmployeeSections.FindAsync(id);

            if (employeeSection == null)
            {
                return NotFound();
            }

            return employeeSection;
        }

        // PUT: api/EmployeeSections/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmployeeSection(int id, EmployeeSection employeeSection)
        {
            if (id != employeeSection.Id)
            {
                return BadRequest();
            }

            _context.Entry(employeeSection).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeSectionExists(id))
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

        // POST: api/EmployeeSections
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<EmployeeSection>> PostEmployeeSection(EmployeeSection employeeSection)
        {
          if (_context.EmployeeSections == null)
          {
              return Problem("Entity set 'AppDbContext.EmployeeSections'  is null.");
          }
            _context.EmployeeSections.Add(employeeSection);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEmployeeSection", new { id = employeeSection.Id }, employeeSection);
        }

        // DELETE: api/EmployeeSections/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployeeSection(int id)
        {
            if (_context.EmployeeSections == null)
            {
                return NotFound();
            }
            var employeeSection = await _context.EmployeeSections.FindAsync(id);
            if (employeeSection == null)
            {
                return NotFound();
            }

            _context.EmployeeSections.Remove(employeeSection);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EmployeeSectionExists(int id)
        {
            return (_context.EmployeeSections?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
