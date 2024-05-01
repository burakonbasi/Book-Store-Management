import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('bookstore')
export class Bookstore {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
