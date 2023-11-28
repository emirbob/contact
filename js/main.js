document.addEventListener("DOMContentLoaded", function () {
  const showBlock = document.getElementById("button2");
  const hiddenBlock = document.getElementById("hiddenBlock");

  showBlock.addEventListener("click", function () {
    hiddenBlock.style.display = "block";
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const showBlock = document.getElementById("button1");
  const hiddenBlock = document.getElementById("hiddenBlock2");

  showBlock.addEventListener("click", function () {
    hiddenBlock.style.display = "block";
  });
});

let contacts = [];

function addContact() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;

  if (name && phone) {
    const contact = { name, phone };

    contacts.push(contact);

    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";

    displayContacts();
  } else {
    alert("Please fill in both name and phone fields.");
  }
}

function deleteContact(index) {
  contacts.splice(index, 1);

  displayContacts();
}

function displayContacts() {
  const contactList = document.getElementById("contactList");
  contactList.innerHTML = "";

  contacts.forEach((contact, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${contact.name} - ${contact.phone}`;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => deleteContact(index));

    listItem.appendChild(deleteButton);
    contactList.appendChild(listItem);
  });
}
