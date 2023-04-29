using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace webapi.Migrations
{
    /// <inheritdoc />
    public partial class Mig6 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "EmployeeEmployee1",
                columns: table => new
                {
                    ConnectionsId = table.Column<int>(type: "int", nullable: false),
                    ConnectionsSelfId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EmployeeEmployee1", x => new { x.ConnectionsId, x.ConnectionsSelfId });
                    table.ForeignKey(
                        name: "FK_EmployeeEmployee1_Employees_ConnectionsId",
                        column: x => x.ConnectionsId,
                        principalTable: "Employees",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_EmployeeEmployee1_Employees_ConnectionsSelfId",
                        column: x => x.ConnectionsSelfId,
                        principalTable: "Employees",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_EmployeeEmployee1_ConnectionsSelfId",
                table: "EmployeeEmployee1",
                column: "ConnectionsSelfId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EmployeeEmployee1");
        }
    }
}
