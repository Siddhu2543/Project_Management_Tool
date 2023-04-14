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
    [Authorize]
    [ApiController]
    public class TodoesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TodoesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Todoes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Todo>>> GetTodos()
        {
          if (_context.Todos == null)
          {
              return NotFound();
          }
            return await _context.Todos.ToListAsync();
        }

        // GET: api/Todoes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Todo>> GetTodo(int id)
        {
          if (_context.Todos == null)
          {
              return NotFound();
          }
            var todo = await _context.Todos.FindAsync(id);

            if (todo == null)
            {
                return NotFound();
            }

            return todo;
        }

        // PUT: api/Todoes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTodo(int id, TodoDto todoDto)
        {
            if (id != todoDto.Id)
            {
                return BadRequest();
            }
            var todo = await _context.Todos.FindAsync(id);
            todo.DueDate = todoDto.DueDate;
            todo.Title = todoDto.Title;
            _context.Entry(todo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TodoExists(id))
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

        // POST: api/Todoes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Todo>> PostTodo(TodoDto todoDto)
        {
          if (_context.Todos == null)
          {
              return Problem("Entity set 'AppDbContext.Todos'  is null.");
          }
            var employee = await GetEmployeeFromToken();
            var todo = new Todo()
            {
                Title = todoDto.Title,
                DueDate = todoDto.DueDate,
                EmployeeId = employee.Id,
            };
            _context.Todos.Add(todo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTodo", new { id = todo.Id }, todo);
        }

        // DELETE: api/Todoes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTodo(int id)
        {
            if (_context.Todos == null)
            {
                return NotFound();
            }
            var todo = await _context.Todos.FindAsync(id);
            if (todo == null)
            {
                return NotFound();
            }

            _context.Todos.Remove(todo);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpGet("Employee")]
        [Authorize]
        public async Task<ActionResult<IEnumerable<Todo>>> GetEmployeeTodoes()
        {
            if (_context.Todos == null)
            {
                return NotFound();
            }

            var employee = await GetEmployeeFromToken();
            var todos = await _context.Todos.Where(t => t.EmployeeId == employee.Id).ToListAsync();
            return todos;
        }

        [HttpGet("ToggleStatus/{id}")]
        [Authorize]
        public async Task<ActionResult> ToggleStatus(int id)
        {
            if (_context.Todos == null)
            {
                return NotFound();
            }

            var employee = await GetEmployeeFromToken();
            var todo = await _context.Todos.FindAsync(id);
            if(todo.EmployeeId != employee.Id)
            {
                return BadRequest();
            }
            todo.IsCompleted = !todo.IsCompleted;
            _context.Entry(todo).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return Ok();
        }

        private bool TodoExists(int id)
        {
            return (_context.Todos?.Any(e => e.Id == id)).GetValueOrDefault();
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
