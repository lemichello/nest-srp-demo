export type ConditionsClause<T> = Partial<
  {
    [K in keyof T]: T[K];
  }
>;

export interface IRepository<T> {
  findById(id: string): Promise<T | null>;

  findOne(conditions: ConditionsClause<T>): Promise<T | null>;

  create(data: Partial<T>): Promise<T>;
}
