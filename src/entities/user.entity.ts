import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 45 })
  name: string;

  @Column({ length: 45, unique: true })
  email: string;

  @Column({ length: 120 })
  password: string;

  @Column({ length: 11 })
  cpf: string;
  @Column({ length: 25 })
  sex: string;
  @Column({ length: 25 })
  cellphone: string;
}

export { User };
