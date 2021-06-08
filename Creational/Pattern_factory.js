class Entree {
  constructor(name) {
    this.name = name;
    this.type = "Entree";
  }
}

class MainCourse {
  constructor(name) {
    this.name = name;
    this.type = "Main Course";
  }
}

class Dessert {
  constructor(name) {
    this.name = name;
    this.type = "Dessert";
  }
}

export class DishFactory {
  createDish(name, type) {
    switch (type.toLowerCase()) {
      case "entree":
        return new Entree(name);
        break;
      case "main course":
        return new MainCourse(name);
        break;
      case "dessert":
        return new Dessert(name);
        break;
    }
  }
}
