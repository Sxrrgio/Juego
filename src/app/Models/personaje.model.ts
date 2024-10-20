export class Personaje{
    imagen:string="";
    nombre:string="";
    descripcion:string="";

    constructor(id:number){
        if(id==1){
            this.imagen="/assets/loki.png";
            this.nombre="Loki";
            this.descripcion="Loki es el dios del engaño y las travesuras, conocido por su astucia, ingenio y capacidad para cambiar de forma. Aunque no es malvado por naturaleza, su comportamiento impredecible y sus constantes bromas a menudo causan caos entre dioses y mortales."
        }else if(id==2){
            this.imagen="/assets/thor.png";
            this.nombre="Thor";
            this.descripcion="Thor es el dios del trueno, la fuerza y el combate, venerado por su valentía y sentido del deber. Hijo de Odín, es uno de los dioses más poderosos de Asgard y protector de los humanos y los dioses contra gigantes y otras amenazas.";
        }else if(id==3){
            this.imagen="/assets/odin.png";
            this.nombre="Odín";
            this.descripcion="Odín es el dios supremo de la mitología nórdica, conocido como el 'Padre de Todos'. Es el dios de la sabiduría, la guerra, la muerte, la poesía y la magia.";
        }else if(id==4){
            this.imagen="/assets/heimdall.png";
            this.nombre="Heimdall";
            this.descripcion="Heimdall es el dios encargado de vigilar el puente Bifrost, que conecta Asgard con el mundo de los mortales. Conocido como el 'Guardián de los dioses', tiene una vista y oído extraordinarios, capaces de detectar cualquier peligro desde grandes distancias, incluso escuchando el crecimiento de la hierba.";
        }else if(id==5){
            this.imagen="/assets/hela.png";
            this.nombre="Hela";
            this.descripcion="Hela es la diosa de la muerte y gobernante de Helheim, el reino de los muertos donde van aquellos que no murieron en batalla. Hija de Loki, Hela es una figura poderosa y temida, con un aspecto sombrío que refleja su dominio sobre el inframundo.";
        }else{
            this.imagen="";
            this.nombre="";
            this.descripcion="";
        }
    }
}