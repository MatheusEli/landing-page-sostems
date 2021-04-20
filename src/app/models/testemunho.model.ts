import { Model } from '../core/model';
export class Testemunho extends Model {
    nome:string;
    email: string;
    celular: number;
    pais: string;
    UF: string;
    cidade: string;
    dadosAutorizados: boolean;
    depoimento?: string;
    depoimentoVideo?: string;
}
