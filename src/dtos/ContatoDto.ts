import { Expose } from "class-transformer";

class ContatoDto {
  @Expose({ name: "id" })
  public Id?: number;

  @Expose({ name: "nome" })
  public Nome?: string;

  @Expose({ name: "email" })
  public Email?: string;

  @Expose({ name: "celular" })
  public Celular?: string;

  @Expose({ name: "telefone" })
  public Telefone?: string;

  @Expose({ name: "ativo" })
  public readonly Ativo?: boolean;

  // timestamps!
  @Expose({ name: "createdAt" })
  public readonly CreatedAt?: Date;

  @Expose({ name: "updatedAt" })
  public readonly UpdatedAt?: Date;

  @Expose({ name: "deletedAt" })
  public readonly DeletedAt?: Date;
}

export default ContatoDto;
