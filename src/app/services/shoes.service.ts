import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IShoe, IShoesCollection } from '../types/shoes.type';
import { generateSlug } from '../utils/url.utils';

@Injectable({
  providedIn: 'root',
})
export class ShoesService {
  private readonly SHOES_URL = 'assets/data/shoes.json';

  private localShoeArray!: IShoe[];

  private selectedShoeSubject = new BehaviorSubject<IShoe | null>(null);
  selectedShoe$ = this.selectedShoeSubject.asObservable();

  constructor(private readonly http: HttpClient) {}

  // SLUG SNIPPET
  findShoeBySlug(slug: string | null): IShoe | null {
    const foundShoes = this.localShoeArray.filter(
      (shoe) => generateSlug(shoe.name) === slug
    );
    return foundShoes.length ? foundShoes[0] : null;
  }

  getShoes(): Observable<IShoesCollection> {
    return this.http.get<IShoesCollection>(this.SHOES_URL).pipe(
      tap((data: IShoesCollection) => {
        this.localShoeArray = data.shoes;
      })
    );
  }

  selectShoe(shoe: IShoe): void {
    this.selectedShoeSubject.next(shoe);
  }
}
