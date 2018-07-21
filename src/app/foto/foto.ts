export interface IFoto {
    titulo: string;
    url: string;
    descricao: string;
}

export class Foto implements IFoto {
    titulo: '';
    url: '';
    descricao: '';
}
