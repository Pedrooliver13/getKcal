// vamos pegar os event do submit e pegar os values;
const form = document.querySelector("#form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  // vamos pegar os numeros;
  const age = getNumberValues("age");
  const height = getNumberValues("height");
  const weight = getNumberValues("weight");

  const gender = getSelectedValues("#gender");
  const activityLevel = getSelectedValues("#activity_level");

  const tmb = Math.round(// taxa metabolica basal
    gender === "female"
    ? 655 + 9.6 * weight + 1.8 * height - 4.7 * age
    : 66 + 13.7 * weight + 5 * height - 6.8 * age
  );

  const maintenance = Math.round(tmb * activityLevel); // Math.round -> aredonda o valor ;
  const loseWeight = maintenance - 450;
  const gainWeight = maintenance + 450;


  const layout = `
  <h2>Aqui está o resultado:</h2>

        <div class="result-content">
          <ul>
            <li>
              Seu metabolismo basal é de <strong>${tmb} calorias</strong>.
            </li>
            <li>
              Para manter o seu peso você precisa consumir em média <strong>${maintenance} calorias</strong>.
            </li>
            <li>
              Para perder peso você precisa consumir em média <strong>${loseWeight} calorias</strong>.
            </li>
            <li>
              Para ganhar peso você precisa consumir em média <strong>${gainWeight} calorias</strong>.
            </li>
          </ul>
        </div>
  `;

  const results = document.querySelector(".result-container");

  results.innerHTML = layout;

}

function getNumberValues(id) {
  return Number(document.getElementById(id).value); // para pegar um valor de um input
}

function getSelectedValues(id) {
  const select = document.querySelector(id);

  return select.options[select.selectedIndex].value;
}
