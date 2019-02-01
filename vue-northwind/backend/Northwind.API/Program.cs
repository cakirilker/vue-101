using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Configuration.CommandLine;
namespace Northwind.API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateWebHostBuilder(args).Build().Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args)
        {
            var configuration = new ConfigurationBuilder()
            .AddCommandLine(args)
            .Build();
            var hostUrl = configuration["hosturl"];
            if (string.IsNullOrEmpty(hostUrl))
                hostUrl = "http://0.0.0.0:5000";

            return WebHost.CreateDefaultBuilder(args)
            .UseKestrel()
            .UseUrls(hostUrl)
            .UseIISIntegration()
            .UseStartup<Startup>();
        }
    }
}
