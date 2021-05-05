using Microsoft.EntityFrameworkCore;
using ProductApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductApi.Infrastructure
{
    public class ProductContext : DbContext
    {
        public DbSet<Product> products { get; set; }
        public ProductContext(DbContextOptions<ProductContext> options) : base(options)
        {

        }
    }
}
