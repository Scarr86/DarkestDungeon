import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export default abstract class FireBase<T> {
  itemsRef: AngularFireList<T>;
  items: Observable<T[]>;
  constructor(private path: string, rtdb: AngularFireDatabase) {
    this.itemsRef = rtdb.list(path);

    this.items = this.itemsRef
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({ key: c.key, ...c.payload.val() }))
        )
      );
  }

  addItem(obj: T) {
    this.itemsRef.push(obj);
  }
  updateItem(key: string, obj: T) {
    this.itemsRef.update(key, obj);
  }
  deleteItem(key: string) {
    this.itemsRef.remove(key);
  }
  deleteEverything() {
    this.itemsRef.remove();
  }
}
