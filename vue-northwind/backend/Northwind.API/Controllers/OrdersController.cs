using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Northwind.Core.Entities;
using Northwind.Data;

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
            var orders = _context.Orders.ToList();
            return Ok(orders);
        }

        [HttpGet("{id}")]
        public ActionResult<Order> Get(int id)
        {
            var order = _context.Orders.FirstOrDefault(c => c.OrderId == id);
            if (order == null)
                return NoContent();
            return Ok(order);
        }
    }
}
