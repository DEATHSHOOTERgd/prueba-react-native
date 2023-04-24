export interface CuestionarioResponse {
    id: string;
    username: string;
    token:   string;
}

export interface Cuestionario {
    id: string;
    tema: string;
    estado: string;
    preguntas: Pregunta[];
}

export interface Pregunta {
    id: string;
    pregunta: string;
    estado: string;
    opciones: Opcion[];
}

export interface Opcion {
    id: string;
    opcion: string;
    codOpcion: string;
    estado: string;
}