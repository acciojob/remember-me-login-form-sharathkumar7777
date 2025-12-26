function renderQuestions() {
  questionsDiv.innerHTML = "";

  questions.forEach((q, qIndex) => {
    const qDiv = document.createElement("div");

    const p = document.createElement("p");
    p.textContent = q.question;
    qDiv.appendChild(p);

    q.options.forEach((opt, optIndex) => {
      const label = document.createElement("label");
      const radio = document.createElement("input");

      radio.type = "radio";
      radio.name = `question-${qIndex}`;
      radio.value = optIndex;

      // Restore checked state (ATTRIBUTE + PROPERTY)
      if (savedProgress[qIndex] == optIndex) {
        radio.checked = true;
        radio.setAttribute("checked", "true");
      }

      radio.addEventListener("change", () => {
        // Update progress
        savedProgress[qIndex] = optIndex;

        // 🔴 ALWAYS call setItem (Cypress spy requirement)
        sessionStorage.setItem(
          "progress",
          JSON.stringify(savedProgress)
        );

        // Sync checked attribute for Cypress
        document
          .querySelectorAll(`input[name="question-${qIndex}"]`)
          .forEach(r => r.removeAttribute("checked"));

        radio.checked = true;
        radio.setAttribute("checked", "true");
      });

      label.appendChild(radio);
      label.appendChild(document.createTextNode(opt));

      qDiv.appendChild(label);
      qDiv.appendChild(document.createElement("br"));
    });

    questionsDiv.appendChild(qDiv);
  });
}
