import { Sort } from '@angular/material/sort';
import { User } from '../models/user.model';

export function sortTableData(
  data: User[] | any[],
  sort: Sort
) {
  return data.sort((a, b) => {
    const isAsc = sort.direction === 'asc';

    return compare(a[sort.active] ?? 0, b[sort.active] ?? 0, isAsc);
  });
}

export function compare(
  a: number | string | any,
  b: number | string | any,
  isAsc: boolean = true
) {
  const newA = typeof a === 'string' ? applyTextNormalization(a) : a;
  const newB = typeof b === 'string' ? applyTextNormalization(b) : b;
  return (newA < newB ? -1 : 1) * (isAsc ? 1 : -1);
}

export function applyTextNormalization(text: any = ''): string {
  return String(text ?? '')
    .trim()
    .normalize('NFD')
    ?.replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}
