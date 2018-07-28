export interface IMensagem {
    tipo: string;
    texto: string;
    show: boolean;
}

export class Mensagem implements IMensagem {
    tipo: string;
    texto: string;
    show = false;
}
