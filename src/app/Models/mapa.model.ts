export class Mapa{
    imagen:string="";
    nombre:string="";
    descripcion:string="";

    constructor(id:number){
        if(id==1){
            this.imagen="/assets/alfheim.jpg";
            this.nombre="Alfheim";
            this.descripcion ="Es el reino de los elfos de la luz (Ljósálfar), seres luminosos y etéreos que están asociados con la luz y la belleza. Se encuentra en los niveles superiores del cosmos, justo por debajo de Asgard, el reino de los dioses Aesir.";
        }else if(id==2){
            this.imagen="/assets/helheim.jpg";
            this.nombre="Helheim";
            this.descripcion ="Es el reino de los muertos, gobernado por la diosa Hela, hija de Loki. Es un lugar oscuro y frío donde van las almas de aquellos que murieron por enfermedades, vejez o de manera deshonrosa, sin morir en combate.";
        }else if(id==3){
            this.imagen="/assets/jottunheim.jpg";
            this.nombre="Jottunheim";
            this.descripcion ="Es el reino de los gigantes, conocidos como Jötnar o gigantes de escarcha. Se caracteriza por ser un lugar salvaje y caótico, en contraposición a los reinos de los dioses, como Asgard.";
        }else if(id==4){
            this.imagen="/assets/midgard.jpg";
            this.nombre="Midgard";
            this.descripcion ="Es el reino de los humanos. Es un lugar intermedio entre los otros reinos y está conectado a Asgard por el Bifröst, el puente arcoíris. Es el equivalente a la Tierra.";
        }else if(id==5){
            this.imagen="/assets/muspelheim.jpg";
            this.nombre="Muspelheim";
            this.descripcion ="Es el reino del fuego y el calor abrasador. Es el hogar de los gigantes de fuego, conocidos como los Muspelli o Jötnar de Fuego, y su gobernante es Surtur, un gigante imponente y feroz que desempeña un papel clave en el Ragnarök, el fin del mundo en la mitología nórdica.";
        }else{
            this.imagen="";
            this.nombre="";
            this.descripcion ="";
        }
    }
}