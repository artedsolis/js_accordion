const comparator_info = [
  {
      button_name: "Je sélectionne mes besoins",
      information: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
  },
  {
      button_name: "Je sélectionne mes usages",
      information: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
  },
  {
      button_name: "Mon code postal et ma commune",
      information: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
  }
];

const select_info = [
  {
    play: "mobile"
  },
  {
    play: "tv"
  },
  {
    play: "Internet"
  },
  {
    play: "fixe"
  }
]

const accordionContainer = document.getElementById('accordion-container');

let firstPanel;

comparator_info.map((item, index) => {
  // Create the button element
  const button = document.createElement('button');
  button.textContent = item.button_name;
  button.classList.add('accordion');
  accordionContainer.appendChild(button);
  
  // Create the panel div element
  const div_panel = document.createElement('div');
  div_panel.textContent = item.information;
  div_panel.classList.add('panel');
  accordionContainer.appendChild(div_panel);

  if (index === 0) {
    firstPanel = div_panel;
  }

  // Add event listener to toggle the panel
  button.addEventListener('click', function() {
      this.classList.toggle('active');
      const panel = this.nextElementSibling;
      const select = this.nextElementSibling;
      if (panel.style.display === "block") {
          panel.style.display = "none";
      } else {
          panel.style.display = "block";
      }
  });
});

const select = document.createElement('select');
select.classList.add('select');

select_info.map((item) => {
  accordionContainer.appendChild(select);
  const option = document.createElement('option');
  option.textContent = item.play;
  select.appendChild(option);
});

if (firstPanel) {
  firstPanel.appendChild(select);
}