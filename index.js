const phoneBook = {
  contacts: [
    { name: "Alex", number: +380671112233, email: "alex@gmail.com" },
    { name: "John", number: +380672223344, email: "john@gmail.com" },
    { name: "Bob", number: +380673334455, email: "bob@gmail.com" },
  ],
  foundName: function (name) {
    return this.contacts.find((contact) => contact.name === name);
  },
  addContact: function (name, number, email) {
    const newContact = {
      name: name,
      number: number,
      email: email
    };
    this.contacts.push(newContact);
  },
};
phoneBook.addContact("James", +380672333331, "james@gmail.com");
console.log(phoneBook.foundName("John"));
console.log(phoneBook.contacts);
