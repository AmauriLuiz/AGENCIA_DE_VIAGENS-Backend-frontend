using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace namespace Agencia_de_Viagens_App.Migrations
  
{
    public partial class Agencia_de_Viagens_App : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Destiny",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    country = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    state = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    municipality = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    valueDaily = table.Column<double>(type: "float", nullable: false),
                    promotion = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Destiny", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CPF = table.Column<string>(type: "nvarchar(11)", maxLength: 11, nullable: false),
                    phone = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    administrator = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Package",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    origin = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    destinyid = table.Column<int>(type: "int", nullable: false),
                    userid = table.Column<int>(type: "int", nullable: false),
                    kids = table.Column<int>(type: "int", nullable: false),
                    adults = table.Column<int>(type: "int", nullable: false),
                    payment = table.Column<double>(type: "float", nullable: false),
                    dateGoing = table.Column<DateTime>(type: "datetime2", nullable: false),
                    dateReturn = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Package", x => x.id);
                    table.ForeignKey(
                        name: "FK_Package_Destiny_destinyid",
                        column: x => x.destinyid,
                        principalTable: "Destiny",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Package_User_userid",
                        column: x => x.userid,
                        principalTable: "User",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Package_destinyid",
                table: "Package",
                column: "destinyid");

            migrationBuilder.CreateIndex(
                name: "IX_Package_userid",
                table: "Package",
                column: "userid");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Package");

            migrationBuilder.DropTable(
                name: "Destiny");

            migrationBuilder.DropTable(
                name: "User");
        }
    }
}