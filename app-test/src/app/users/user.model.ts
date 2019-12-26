import { EmailValidator } from '@angular/forms';

// modelo para user
    export interface User {
        id: number;
        email: string;
        first_name: string;
        last_name: string;
        avatar: string;
    }

    export interface ResponseUsers {
        page: number;
        per_page: number;
        total: number;
        total_pages: number;
        data: User[];
    }
// Modelos para a criação
    export interface RequestCreate {
            nome: string;
            sobrenome: string;
            email: string;
            job: string;
            sexo: string;
            estado: string;
            data: string;
            formacao: string;
            profissao: string;           
    }

    export interface ResponseCreate {
        nome: string;
        sobrenome: string;
        email: string;
        job: string;
        sexo: string;
        estado: string;
        data: string;
        formacao: string;
        profissao: string; 
    }

    // Modelos para o get User
    export interface ResponseUser {
        data: User 
    }

    export interface RequestUpdate {
        name: string;
        job: string;
    }

    export interface ResponseUpdate {
        name: string;
        job: string;
        updatedAt: Date;
}


    
    