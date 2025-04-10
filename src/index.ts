import { Faker } from "./faker";

const faker = new Faker();

export { faker };

export type { Faker };

export type { PersonModule } from "./modules/person";
export type { PersonalNumberModule } from "./modules/personal_number";
export type { PhoneNumberModule } from "./modules/phone_number";
