export interface IFoto {
    titulo: string;
    url: string;
    descricao: string;
    _id: string;
}

export class Foto implements IFoto {
    titulo: '';
    url: '';
    descricao: '';
    _id: string;
}
