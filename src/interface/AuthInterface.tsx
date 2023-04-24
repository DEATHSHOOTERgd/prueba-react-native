export interface LoginData {
    email:   string;
    password: string;
}

export interface RegisterData {
    email:   string;
    password: string;
    nombre:   string;
}


export interface LoginResponse {
    usuario: Usuario;
    token:   string;
}

export interface Usuario {
    estado: string;
    nombre: string;
    email: string;
    id:    string;
}