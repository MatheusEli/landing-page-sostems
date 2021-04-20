import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { ServiceFirebase } from "../core/iservice.service";
import { Testemunho } from "../models/testemunho.model";

@Injectable({
    providedIn: 'root'
})
export class TestemunhoService extends ServiceFirebase<Testemunho> {
    constructor(firestore: AngularFirestore) {
        super(Testemunho, firestore, 'testemunhos');
    }
}