using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MyUserService.Migrations
{
    public partial class AddSampleUsers : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "FirstName", "LastName", "Email" },
                values: new object[] { "John", "Doe", "john.doe@example.com" }
            );

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "FirstName", "LastName", "Email" },
                values: new object[] { "Jane", "Smith", "jane.smith@example.com" }
            );
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValues: new object[] { /* Use the primary key(s) to identify the row to delete */ }
            );
        }
    }
}
