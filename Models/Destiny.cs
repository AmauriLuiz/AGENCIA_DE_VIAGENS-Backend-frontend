using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Agencia_de_Viagens_App.Models
{
    [Table("Destiny")]
    public class Destiny
    {
        [Key]
        public int id { get; set; }
        public string title { get; set; }
        [Required(ErrorMessage = "Informe o  País! ")]
        public string country { get; set; }
        [Required(ErrorMessage = "Informe Estado! ")]
        public string state { get; set; }
        public string municipality { get; set; }
        [Required(ErrorMessage = "Informe o valor da diária! ")]
        public double valueDaily { get; set; }
        public bool promotion { get; set; }
    }
}
