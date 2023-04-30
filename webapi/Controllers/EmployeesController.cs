using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using NuGet.Common;
using webapi.Models;
using webapi.ViewModels;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IConfiguration _config;

        public EmployeesController(AppDbContext context, IConfiguration config)
        {
            _context = context;
            _config = config;
        }

        // GET: api/Employees
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Employee>>> GetEmployees()
        {
          if (_context.Employees == null)
          {
              return NotFound();
          }
            return await _context.Employees.ToListAsync();
        }

        [HttpGet("tasks")]
        [Authorize]
        public async Task<ActionResult<IEnumerable<PTask>>> GetTasks()
        {
            var employee = await GetEmployeeFromToken();

            var alltasks = await _context.PTasks.Include(p => p.Team).ThenInclude(t => t.Employees).ToListAsync();
            var tasks = alltasks.Where(t => t.Team.Employees.Any(e => e.Id == employee.Id)).ToList();

            return Ok(tasks);
        }


        // GET: api/Employees/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Employee>> GetEmployee(int id)
        {
          if (_context.Employees == null)
          {
              return NotFound();
          }
            var employee = await _context.Employees.FindAsync(id);

            if (employee == null)
            {
                return NotFound();
            }

            return employee;
        }

        // PUT: api/Employees/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        [Authorize]
        public async Task<IActionResult> PutEmployee(int id, Employee employee)
        {
            if (id != employee.Id)
            {
                return BadRequest();
            }
            _context.Entry(employee).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeExists(id))
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

        // POST: api/Employees
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Employee>> PostEmployee(Employee employee)
        {
          if (_context.Employees == null)
          {
              return Problem("Entity set 'AppDbContext.Employees'  is null.");
          }
            _context.Employees.Add(employee);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEmployee", new { id = employee.Id }, employee);
        }

        // DELETE: api/Employees/5
        [HttpDelete("{id}")]
        [Authorize]
        public async Task<IActionResult> DeleteEmployee(int id)
        {
            if (_context.Employees == null)
            {
                return NotFound();
            }
            var employee = await _context.Employees.FindAsync(id);
            var req_employee = await GetEmployeeFromToken();

            if (employee == null)
            {
                return NotFound();
            }
            if(employee.Id != req_employee.Id)
            {
                return BadRequest();
            }

            _context.Employees.Remove(employee);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EmployeeExists(int id)
        {
            return (_context.Employees?.Any(e => e.Id == id)).GetValueOrDefault();
        }

        [AllowAnonymous]
        [HttpGet("DoesEmailExist/{email}")]
        public async Task<ActionResult<bool>> DoesEmailExist(string email)
        {
            var email_exist = await _context.Employees.AnyAsync(e => e.Email == email);
            return Ok(email_exist);
        }

        [AllowAnonymous]
        [HttpPost("Login")]
        public async Task<ActionResult<string>> Login(Login login)
        {
            var employee = await _context.Employees.Where(e => e.Email == login.Email && e.Password == login.Password).FirstOrDefaultAsync();
            if (employee == null)
            {
                return NotFound("Invalid Login Credentials!");
            }
            var token = GenerateToken(employee.Email, login.RememberMe);
            return Ok(token);
        }

        [HttpGet("FindByToken")]
        [Authorize]
        public async Task<ActionResult<Employee>> FindByToken()
        {
            return await GetEmployeeFromToken();
        }

        private string GenerateToken(string email, bool rememberMe)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var creds = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim(ClaimTypes.Email, email),
            };

            if (rememberMe)
            {
                var token = new JwtSecurityToken(_config["Jwt:Issuer"],
                    _config["Jwt:Audience"],
                    claims,
                    expires: DateTime.Now.AddMonths(12),
                    signingCredentials: creds);
                return new JwtSecurityTokenHandler().WriteToken(token);
            }
            else
            {
                var token = new JwtSecurityToken(_config["Jwt:Issuer"],
                    _config["Jwt:Audience"],
                    claims,
                    expires: DateTime.Now.AddHours(1),
                    signingCredentials: creds);
                return new JwtSecurityTokenHandler().WriteToken(token);
            }
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

        [HttpGet("ConnectionRequests")]
        [Authorize]
        public async Task<ActionResult<IEnumerable<Employee>>> Received()
        {
            var employee = await GetEmployeeFromToken();
            var employeewithconnections = await _context.Employees.Include(e => e.ConnectionRequestReceived).Where(e => e.Id == employee.Id).FirstOrDefaultAsync();
            if (employee == null)
            {
                return NotFound();
            }

            var connectionRequestsReceived = employeewithconnections.ConnectionRequestReceived.ToList();

            return connectionRequestsReceived;
        }

        [HttpGet("search/{name}")]
        [Authorize]
        public async Task<ActionResult<IEnumerable<Employee>>> Search(string name)
        {
            var curremployee = await GetEmployeeFromToken();
            var employee = await _context.Employees.Where(e=>e.Name.Contains(name) && e.Id != curremployee.Id).ToListAsync();
            return Ok(employee);
        }

        [Authorize]
        [HttpGet("addConnection/{id}")]
        public async Task<ActionResult> AddConnenction(int Id)
        {
            var employee = await _context.Employees.FindAsync(Id);
            var curremp = await GetEmployeeFromToken();
            curremp.ConnectionRequestSent.Add(employee);

            _context.Entry(curremp).State = EntityState.Modified;
            await _context.SaveChangesAsync();  
           

            return Ok();
        }

        [Authorize]
        [HttpGet("acceptConnection/{id}/{res}")]
        public async Task<ActionResult> AcceptConnection(int id,bool res)
        {
            var employee = await _context.Employees.FindAsync(id);
            var curremp = await GetEmployeeFromToken();
            var newemp = await _context.Employees.Include(e => e.ConnectionRequestReceived).Where(e => e.Id == curremp.Id).FirstOrDefaultAsync();
            bool isdeleted=curremp.ConnectionRequestReceived.Remove(employee);
            await _context.SaveChangesAsync(); 
            if (res)
            { 
                newemp.Connections.Add(employee);
                employee.Connections.Add(curremp);
                _context.Entry(newemp).State = EntityState.Modified;
                await _context.SaveChangesAsync();
                _context.Entry(employee).State = EntityState.Modified;
                await _context.SaveChangesAsync();
            }

            return Ok();
        }

        [HttpGet("Connections")]
        [Authorize]
        public async Task<ActionResult<IEnumerable<Employee>>> GetConnections()
        {
            var employee = await GetEmployeeFromToken();
            var employeewithconnections = await _context.Employees.Include(e => e.Connections).Where(e => e.Id == employee.Id).FirstOrDefaultAsync();
            if (employee == null)
            {
                return NotFound();
            }

            var connections= employeewithconnections.Connections.ToList();

            return connections;
        }
    }
}
