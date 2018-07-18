export class Coracao{
    constructor(public cheio: boolean, 
        public coracaoCheioCss: string = 'fas fa-heart fa-3x text-danger',
        public coracaoVazioCss: string = 'far fa-heart fa-3x text-danger'
    ){}

    public ExibeCoracao(): string{
        if(this.cheio){
            return this.coracaoCheioCss;
        }else{
            return this.coracaoVazioCss;
        }
    }
}