import { BaseEntity } from './baseEntity.model';

export class User implements BaseEntity {
  readonly id: number;
  protected name: string;
  protected email: string;
  protected phone: string;

  constructor(id: number, name: string, email: string, phone: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}
