import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', {
        unique: true,
    })
    email: string;
    
    @Column('text', {
        select: false
    })
    password: string;
    
    @Column('text')
    nombreCompleto: string;

    @Column('bool', {
        default: true,
    })
    isActive: boolean;

    @Column('timestamp',{
        default: () => 'CURRENT_TIMESTAMP'
    })
    fechaActualizacion: Date;

    @Column('text', {
        array: true,
        default: ['user']
    })
    roles: string[];

    @BeforeInsert()
    checkFieldsBeforeInsert(){
        this.email = this.email.toLowerCase().trim();
    }

    @BeforeUpdate()
    checkFieldsBeforeUpdate(){
        this.checkFieldsBeforeInsert();
    }
}
