import { Subject } from "rxjs";

export class AppareilService {
	
	appareilSubject = new Subject();

	private appareils = [
		{
			id: 1,
			name: 'Machine à laver',
			status: 'allumé'
		},
		{
			id: 2,
			name: 'Télévision',
			status: 'allumé'
		},
		{
			id: 3,
			name: 'Ordinateur',
			status: 'éteint'
		},
	]

	emitAppareilSubject() {
		this.appareilSubject.next(this.appareils.slice());
	}

	getAppareilById(id: number) {
		const appareil = this.appareils.find(
			(appareilObject) => {
				return appareilObject.id === id;
			}
		)
		if (appareil) {
			return appareil;
		}
		else {
			return this.appareils['0'];
		}
	}
	switchOnAll() {
		for(let appareils of this.appareils) {
			appareils.status = 'allumé'
		}
		this.emitAppareilSubject();
	}
	switchOffAll() {
		for(let appareils of this.appareils) {
			appareils.status = 'éteint'
		}
		this.emitAppareilSubject();
	}
	switchOnOne(index: number) {
		this.appareils[index].status = "allumé"
		this.emitAppareilSubject();
	}
	switchOffOne(index: number) {
		this.appareils[index].status = "éteint"
		this.emitAppareilSubject();
	}
	addAppareil(name: string, status:string) {
		const appareilObject = {
			id: 0,
			name: '',
			status: ''
		};
		appareilObject.name = name;
		appareilObject.status = status;
		appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
		this.appareils.push(appareilObject);
		this.emitAppareilSubject();
	}
}
