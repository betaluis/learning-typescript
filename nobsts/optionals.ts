function printIngredient(quanity: string, ingredient: string, extra?: string) {
  console.log(`${quanity} ${ingredient} ${extra ? extra : ''}`);
}

printIngredient('1 cup', 'flour');
printIngredient('1 cup', 'flour', 'something more');

// optional fields

interface User {
  id: string;
  info?: {
    email?: string;
  }
}

function getEmail(user: User): string {
  return user?.info?.email ?? '';
}

function addWithCallback(x: number, y: number, callback?: () => void) {
  console.log([x, y]);
  // Optional callback
 left: callback?.();
}
