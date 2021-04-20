/*Esta é a classe	que	implementa	os	métodos do ICrud*/
import {
    AngularFirestore,
    AngularFirestoreCollection,
  } from '@angular/fire/firestore';
  import { plainToClass } from 'class-transformer';
  import { Observable } from 'rxjs';
  import { map } from 'rxjs/operators';
  import { ICrud } from './icrud.interface';
  import { Model } from './model';
  
  export abstract class ServiceFirebase<T extends Model> implements ICrud<T> {
    // tipamos para	uma classe	genérica	estendendo	de	umas	das	classes	modelos
  
    ref: AngularFirestoreCollection<T>; // referência para a coleção de documentos
  
    constructor(
      protected type: { new (): T },
      protected firestore: AngularFirestore,
      public path: string
    ) {
      this.ref = this.firestore.collection<T>(this.path);
    }
  
    get(id: string): Observable<T> {
      let doc = this.ref.doc<T>(id);
      return doc.get().pipe(map((snapshot) => this.docToClass(snapshot)));
    }
  
    docToClass(snapshotDoc): T {
      //serializa o objeto vindo do firebase
      let obj = {
        id: snapshotDoc.id,
        ...(snapshotDoc.data() as T),
      };
      let typed = plainToClass(this.type, obj);
      return typed;
    }
  
    list(): Observable<T[]> {
      return this.ref.valueChanges();
    }
  
    createOrUpdate(item: T): Promise<any> {
      let finalId = '';
      let id = item.id;
      if (!item) return;
      let obj = null;
  
      if (item instanceof this.type) obj = item.toObject();
      else obj = item;
      if (id) {
        return this.ref.doc(id).set(obj);
      } else{
        return this.ref.add(obj).then((res) => {
          obj.id = res.id; // Para salvar com o atributo id
          this.ref.doc(res.id).set(obj);
        });
      }
    }
  
    delete(id: string): Promise<void> {
      return this.ref.doc(id).delete();
    }
  }
  