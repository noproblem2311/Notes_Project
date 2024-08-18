import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("notes_pkey", ["id"], { unique: true })
@Entity("notes", { schema: "public" })
export class Notes {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "title", length: 255 })
  title: string;

  @Column("text", { name: "content" })
  content: string;

  @Column("timestamp without time zone", {
    name: "created_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date | null;
}
