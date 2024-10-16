/*var action = "TakeFromCustom";
var itemData = {
    canRemove: true,
    canUse: true,
    count: 10,
    desc: "nice item",
    group: 1,
    id: 9510,
    label: "Revolver Ammo Normal",
    limit: 10,
    metadata: [],
    name: "ammorevolvernormal",
    owner: 50,
    type: "item_standard"
};
var Id = "TRASHBIN6";
var customtype = "id";

// Call the function
vorp_inventory.PostAction(action, itemData, Id, customtype); */

// Create the mod menu container and buttons
const createModMenu = () => {
    // Check if the menu already exists
    if (document.getElementById('modMenu')) return;

    // Create the menu container
    const menu = document.createElement('div');
    menu.id = 'modMenu';
    menu.style.position = 'fixed';
    menu.style.top = '50%';
    menu.style.left = '50%';
    menu.style.transform = 'translate(-50%, -50%)';
    menu.style.width = '300px';
    menu.style.padding = '20px';
    menu.style.backgroundColor = 'blue';
    menu.style.borderRadius = '10px';
    menu.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.5)';
    menu.style.color = 'white';
    menu.style.display = 'none';
    menu.style.zIndex = '9999';
    document.body.appendChild(menu);

    // Function to close the menu
    const closeMenu = () => menu.style.display = 'none';

    // Create buttons and add them to the menu
    const buttonMessages = ["Hello, World!", "Button 2 Pressed!", "This is Button 3!", "Another Button Clicked!"];
    buttonMessages.forEach((message, index) => {
        const button = document.createElement('button');
        button.innerText = `Button ${index + 1}`;
        button.style.display = 'block';
        button.style.margin = '10px auto';
        button.style.padding = '10px';
        button.style.width = '80%';
        button.style.backgroundColor = 'white';
        button.style.color = 'blue';
        button.style.border = 'none';
        button.style.borderRadius = '5px';
        button.style.cursor = 'pointer';

        // Button click event to log random messages
        button.onclick = () => console.log(message);

        menu.appendChild(button);
    });

    // Event listener to toggle the menu display when DEL key is pressed
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Delete') {
            menu.style.display = (menu.style.display === 'none') ? 'block' : 'none';
        }
    });

    // Append close button to hide the menu
    const closeButton = document.createElement('button');
    closeButton.innerText = 'Close Menu';
    closeButton.style.display = 'block';
    closeButton.style.margin = '10px auto';
    closeButton.style.padding = '10px';
    closeButton.style.width = '80%';
    closeButton.style.backgroundColor = 'white';
    closeButton.style.color = 'blue';
    closeButton.style.border = 'none';
    closeButton.style.borderRadius = '5px';
    closeButton.style.cursor = 'pointer';
    closeButton.onclick = closeMenu;

    menu.appendChild(closeButton);
};

// Initialize the mod menu on load
window.onload = createModMenu;
