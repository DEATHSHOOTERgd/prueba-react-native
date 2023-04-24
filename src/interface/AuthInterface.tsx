export interface LoginData {
    username:   string;
    password: string;
}

export interface RegisterData {
    username:   string;
    password: string;
}


export interface LoginResponse {
    id: string;
    username: string;
    token:   string;
}

export interface Usuario {
    username: string;
    id: string;
}