using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Northwind.Core.Entities;
using Northwind.Data;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System.Threading;

namespace Northwind.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly NorthwindContext _context;

        public OrdersController(NorthwindContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Order>> Get()
        {
            var orders = _context
            .Orders
            .AsNoTracking()
            .ToList();
            return Ok(orders);
        }

        [HttpGet("{id}")]
        public ActionResult<Order> Get(int id)
        {
            var order = _context
            .Orders
            .AsNoTracking()
            .Include(c => c.Customer)
            .Include(c => c.Employee)
            .Include(c => c.OrderDetails)
            .ThenInclude(x => x.Product)
            .Include(c => c.ShipViaNavigation)
            .FirstOrDefault(c => c.OrderId == id);
            order.OrderDetails = order.OrderDetails.OrderByDescending(c => c.Quantity).ToList();
            if (order == null)
                return NoContent();

            order.Employee.Photo = null;
            var res = JsonConvert.SerializeObject(order, Formatting.Indented, new JsonSerializerSettings
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Ok(res);
        }
    }
}
