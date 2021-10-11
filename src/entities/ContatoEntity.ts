import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class ContatoEntity {
  @PrimaryGeneratedColumn("increment")
  public Id!: number;

  @Column()
  public Nome!: string;

  @Column({
    nullable: true
  })
  public Email!: string;

  @Column({
    nullable: true
  })
  public Celular!: string;

  @Column({
    nullable: true
  })
  public Telefone!: string;

  @Column({
    default: true
  })
  public readonly Ativo!: boolean;

  // timestamps!
  @Column({
    default: "NOW()"
  })
  public readonly CreatedAt!: Date;

  @Column({
    default: "NOW()"
  })
  public readonly UpdatedAt!: Date;

  @Column({
    nullable: true
  })
  public DeletedAt!: Date;
}
