using System;
using System.Collections.Generic;

namespace Northwind.Core.Entities
{
    public partial class EmployeeTerritories
    {
        public int EmployeeId { get; set; }
        public string TerritoryId { get; set; }

        public virtual Employee Employee { get; set; }
        public virtual Territories Territory { get; set; }
    }
}
