import { observable } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import 'rxjs/add/observable/from';

describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService(null);

    beforeEach( () => {
        componente = new MedicosComponent(servicio);
    });


    it('Init: Debe de cargar los médicos', () => {

        spyOn( servicio, 'getMedicos' ).and.callFake( () => {

            return observable.from( [] );

        });

        componente.ngOnInit();
        
        expect( componente.medicos.length ).toBeGreaterThan(0);

    });


});
