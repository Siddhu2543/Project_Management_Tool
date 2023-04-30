using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace webapi.Migrations
{
    /// <inheritdoc />
    public partial class Mig9 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PTasks_Teams_PhaseId",
                table: "PTasks");

            migrationBuilder.CreateIndex(
                name: "IX_PTasks_TeamId",
                table: "PTasks",
                column: "TeamId");

            migrationBuilder.AddForeignKey(
                name: "FK_PTasks_Teams_TeamId",
                table: "PTasks",
                column: "TeamId",
                principalTable: "Teams",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PTasks_Teams_TeamId",
                table: "PTasks");

            migrationBuilder.DropIndex(
                name: "IX_PTasks_TeamId",
                table: "PTasks");

            migrationBuilder.AddForeignKey(
                name: "FK_PTasks_Teams_PhaseId",
                table: "PTasks",
                column: "PhaseId",
                principalTable: "Teams",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
