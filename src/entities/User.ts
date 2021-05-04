import { Entity, PrimaryColumn, Column, CreateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
@Entity("users")
class User {
  @PrimaryColumn()
  id: string;

  @Column()
  email: string;

  @CreateDateColumn()
  create_at: Date;

  constructor(parameters) {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { User };
