const comparator_info = [
  {
      button_name: "Je sélectionne mes besoins",
      information: "Choose your play here"
  },
  {
      button_name: "Je sélectionne mes usages",
      information: "Choose your usage here"
  },
  {
      button_name: "Mon code postal et ma commune",
      information: "Input your postal code and commune here"
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
];

const select_usage = [
  {
    usage: "Moins de 5 GB"
  },
  {
    usage: "5 à 20 GB"
  },
  {
    usage: "20 à 50 GB"
  },
  {
    usage: "Plus de 50 GB"
  }
];


const accordionContainer = document.getElementById('accordion-container');

let firstPanel;
let secondPanel;
let thirdPanel;


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
  } else if (index === 1) {
    secondPanel = div_panel;
  } else if (index === 2) {
    thirdPanel = div_panel;
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

// first panel content
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

// second panel content
const selectUsage = document.createElement('select');
selectUsage.classList.add('select');

select_usage.forEach((item) => {
  const option = document.createElement('option');
  option.textContent = item.usage;
  option.value = item.usage; // Set the value attribute for the option
  selectUsage.appendChild(option);
});


if (secondPanel) {
  secondPanel.appendChild(selectUsage);
}

// third panel content
const postal_code = document.createElement('input');
postal_code.type = 'text';
postal_code.placeholder = 'Code postal';

if (thirdPanel) {
  thirdPanel.appendChild(postal_code);
}