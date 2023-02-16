import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column ({ type: 'text'})
    name: string

    @Column ({ type: 'text'})
    email: string

    @Column ({type: 'number'})
    cep : number

    @Column ({type: 'text' })
    logradouro : string

    @Column ({type: 'text'})
    localidade: string

    @Column ({type: 'text'})
    bairro: string

    @Column ({type: 'text' })
    uf: string
}