class Names {
  static name() {
    const russianAmericanAndItalianNames = ["Aleksandr", "Aleksey", "Alex", "Alexander", "Alexandr", "Alexandra", "Alexey", "Alexis", "Alper", "Andrej", "Andrew", "Andrey", "Anton", "Anya", "Artem", "Arthur", "Artur", "Artym", "Artyom", "Aytal", "Baldan", "Borislav", "Collosus", "Dan", "Daniel", "Daniil", "Danilov", "Dave", "Denis", "Dima", "Dmitrii", "Dmitriy", "Dmitry", "Dominique", "Donatien", "Edward", "Fabrice", "Fayad", "Gena", "Gleb", "Grairik", "Grechihckin", "Hamza", "Igor", "Ilushka", "Ilya", "Ivan", "Kirill", "Kirill", "Nikonov", "Kolya", "Konstantin", "Kostya", "Lex", "Max", "Maxim", "Maximka", "Mikhail", "Murad", "Nastya", "Nick", "Nicky", "Nike", "Nikita", "Oleg", "Omer", "Ostin", "Pasha", "Paul", "Pavel", "Pawel", "Philip", "Raoul", "Rodion", "Roma", "Roman", "Ruslan", "Sacha", "Samuele", "Sasha", "Sebastian", "Serge", "Sergei", "Sergey", "Stas", "Thierry", "Tseden", "Uche", "Vadim", "Vadmas", "Valera", "Vanya", "Vasiliy", "Vlad", "Vladimir", "Vladislav", "Vova", "Will", "Yegor", "Yura", "Yuri", "Aigul", "Aleksandra", "Alena", "Alex", "Alexandra", "Alice", "Alina", "Alisa", "Alla", "Alyona", "Anastasia", "Anastasiya", "Ann", "Anna", "Anny", "Anya", "Arina", "Catherine", "Chimita", "Christine", "Daria", "Darya", "Dasha", "Diana", "Dinara", "Ekaterina", "Elena", "Evgenia", "Galina", "Galya", "Gulnaz", "Guzel", "Helen", "Inna", "Irene", "Irina", "Jane", "Julia", "Julie", "Karina", "Kate", "Katerina", "Katia", "Katy", "Katya", "Kristina", "Ksenia", "Kseniya", "Ksusha", "Lana", "Lena", "Lera", "Liliya", "Lina", "Lisa", "Liza", "Luba", "Lyuba", "Margarita", "Maria", "Marie", "Marina", "Mariya", "Mary", "Masha", "Nadya", "Nastia", "Nastya", "Natalia", "Natalie", "Nataly", "Natalya", "Natasha", "Nina", "Oksana", "Olesya", "Olga", "Olya", "Pauline", "Polina", "Regina", "Sasha", "Sofia", "Sonya", "Sveta", "Svetlana", "Tanya", "Tatiana", "Tatyana", "Valentina", "Valeria", "Valerie", "Varya", "Vera", "Veronika", "Victoria", "Vika", "Yana", "Yulia", "Zhanna", "Sophia", "Jackson", "Olivia", "Liam", "Emma", "Noah", "Ava", "Aiden", "Isabella", "Lucas", "Mia", "Caden", "Aria", "Grayson", "Riley", "Mason", "Zoe", "Elijah", "Amelia", "Logan", "Layla", "Oliver", "Charlotte", "Ethan", "Aubrey", "Jayden", "Lily", "Muhammad", "Chloe", "Carter", "Harper", "Michael", "Evelyn", "Sebastian", "Adalyn", "Alexander", "Emily", "Jacob", "Abigail", "Benjamin", "Madison", "James", "Aaliyah", "Ryan", "Avery", "Matthew", "Ella", "Daniel", "Scarlett", "Jayce", "Maya", "Mateo", "Mila", "Caleb", "Nora", "Luke", "Camilla", "Julian", "Arianna", "Jack", "Eliana", "William", "Hannah", "Wyatt", "Leah", "Gabriel", "Ellie", "Connor", "Kaylee", "Henry", "Kinsley", "Isaiah", "Hailey", "Isaac", "Madelyn", "Owen", "Paisley", "Levi", "Elizabeth", "Cameron", "Addison", "Nicholas", "Isabelle", "Josiah", "Anna", "Lincoln", "Sarah", "Dylan", "Brooklyn", "Samuel", "Mackenzie", "John", "Victoria", "Nathan", "Luna", "Leo", "Penelope", "David", "Grace", "Adam", "Davy"]
    russianAmericanAndItalianNames.concat("Patrizio", "Sergio", "Gian", "Leonardo", "Dante", "Fabrizio", "Angelo", "Rocco", "Matteo", "Giorgio", "Vincenzio", "Marco", "Alessandro", "Antonio", "Luca", "Giovanni", "Roberto", "Mario", "Girls", "Fabiana", "Beatrice", "Donatella", "Emilia", "Violetta", "Carina", "Donna", "Angelina", "Gabriella Gabriela", "Bianca", "Liliana", "Annabella", "Marisa", "Viviana", "Gianna", "Sofia", "Andrea", "StellaVera", "Patrizio", "Sergio", "Caprice", "Bellissa", "Donatello Emilia", "Gian", "Stefano", "Massimo", "Carina", "Sistine Donna", "Antonia", "Montay", "Bellance", "Aleksandra", "Pia")
    const randomNumber = Math.floor(Math.random() * russianAmericanAndItalianNames.length)
    return russianAmericanAndItalianNames[randomNumber]
  }
}
export default Names