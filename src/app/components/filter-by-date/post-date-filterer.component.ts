import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { State } from "src/app/store/models/state.model";
import { map } from "rxjs/operators";
import { Post } from "src/app/store/models/Post.model";
import {
  FilterPostsByDateDescendingAction,
  FilterPostsByDateAscendingAction
} from "src/app/store/actions/pictresque.actions";

@Component({
  selector: "app-post-date-filterer",
  templateUrl: "./post-date-filterer.component.html",
  styleUrls: ["./post-date-filterer.component.scss"]
})
export class PostDateFiltererComponent implements OnInit {
  constructor(private _store: Store<State>) {}

  filterByDateAscending() {
    this._store.dispatch(new FilterPostsByDateAscendingAction());
  }

  filterByDateDescending() {
    this._store.dispatch(new FilterPostsByDateDescendingAction());
  }

  ngOnInit() {}
}