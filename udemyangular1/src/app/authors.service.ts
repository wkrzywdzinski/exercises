import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthorsService {
  getAuthors() {
    return ["name1", "name2", "name3"];
  }
}
