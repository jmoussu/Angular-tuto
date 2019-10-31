import { User } from "../models/user.model"
import { Subject } from "rxjs";

export class UserService {
	private user: User[] = [
		{
			firstname: 'James',
			lastname: 'Smith',
			email: 'james.smith@gmail.com',
			drinkPreference: 'Coca',
			hobbies: [
				'coder',
				'dégustation de café'
			]
		}
	];
	userSubject = new Subject<User[]>();

	emitUsers() {
		this.userSubject.next(this.user.slice());
	}

	addUser(user: User) {
		this.user.push(user);
		this.emitUsers();
	}
}
