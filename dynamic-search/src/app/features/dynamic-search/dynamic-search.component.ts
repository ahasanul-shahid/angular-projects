import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  Subject,
  takeUntil,
  tap,
} from 'rxjs';
import { SEARCH_ITEMS } from '../../core/data/search-items';

@Component({
  selector: 'app-dynamic-search',
  imports: [ReactiveFormsModule],
  templateUrl: './dynamic-search.component.html',
  styleUrl: './dynamic-search.component.scss',
})
export class DynamicSearchComponent implements OnInit, OnDestroy {
  searchText!: FormControl;
  filteredSearchItems: string[] = [];
  private _destroy$ = new Subject<void>();
  private readonly _searchItems = SEARCH_ITEMS;
  private _fb = inject(FormBuilder);
  constructor() {}
  ngOnInit(): void {
    this.filteredSearchItems = this._searchItems;
    this.searchText = this._fb.control('');
    this.searchText.valueChanges
      .pipe(
        debounceTime(300),
        map((value) => value.trim()),
        distinctUntilChanged(),
        tap((value) => {
          this._filterSearchList(value);
        }),
        takeUntil(this._destroy$)
      )
      .subscribe();
  }
  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
  private _filterSearchList(term: string) {
    if (term === '') {
      this.filteredSearchItems = this._searchItems;
    } else {
      this.filteredSearchItems = this._searchItems.filter((item) =>
        item.toLowerCase().includes(term.toLowerCase())
      );
    }
  }
}
