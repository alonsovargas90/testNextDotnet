using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Pomelo.EntityFrameworkCore.MySql;

public class Startup
{
    public IConfiguration Configuration { get; }

    public Startup(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    public void ConfigureServices(IServiceCollection services)
    {
        services.AddControllers();

        // Configure your database connection using the connection string from appsettings.json
        string connectionString = Configuration.GetConnectionString("DefaultConnection");

        services.AddDbContext<AppDbContext>(options =>
        {
            options.UseMySql(
                connectionString,  // Your connection string
                new MySqlServerVersion(new Version(8, 0, 25))  // Specify your MySQL server version
            );
        });

        services.AddCors(options =>
        {
            options.AddDefaultPolicy(builder =>
            {
                builder
                    .AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader();
            });
        });

        // Add other services and configuration as needed
    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        if (env.IsDevelopment())
        {
            app.UseDeveloperExceptionPage();
        }
        else
        {
            // Configure production-specific options here
        }

        app.UseRouting();
        app.UseCors();

        app.UseEndpoints(endpoints =>
         {
             endpoints.MapControllerRoute(
                 name: "api",
                 pattern: "api/{controller=Home}/{action=Index}/{id?}"
             );

             endpoints.MapControllers();
         });
    }
}