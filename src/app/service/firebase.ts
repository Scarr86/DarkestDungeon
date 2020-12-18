import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import {
  map,
  tap,
  share,
  publishReplay,
  refCount,
  shareReplay,
} from 'rxjs/operators';
import { LogService } from './logger.service';

export default abstract class FireBase<T> {
  itemsRef: AngularFireList<T>;
  items: Observable<T[]>;
  constructor(
    private path: string,
    rtdb: AngularFireDatabase,
    private logService: LogService
  ) {
    this.itemsRef = rtdb.list(path);

    this.items = this.itemsRef.snapshotChanges().pipe(
      map((changes) =>
        changes.map((c) => ({ key: c.key, ...c.payload.val() }))
      ),
      tap(() => this.log('fetched')),
      shareReplay()
    );
  }

  addItem(obj: T) {
    return this.itemsRef.push(obj).then((v) => {
      this.log(`add ${v.key}`);
      return v.key;
    });
  }
  updateItem(key, obj: T) {
    return this.itemsRef
      .update(key, obj)
      .then(() => this.log(`update ${key}`));
  }
  setItem(key, obj: T) {
    return this.itemsRef.set(key, obj).then(() => this.log(`set ${key}`));
  }
  deleteItem(key: string) {
    return this.itemsRef.remove(key).then(() => this.log(`delete ${key}`));
  }
  deleteEverything() {
    return this.itemsRef.remove().then(() => this.log(`delete ${this.path}`));
  }

  log(msg) {
    this.logService.add(`${this.path}: ${msg}`);
  }
}
