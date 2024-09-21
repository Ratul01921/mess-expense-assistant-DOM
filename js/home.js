
// assistant section
document.getElementById('calculate').addEventListener('click', function () {
    const baperTk = document.getElementById('baper-tk').value;
    const millCost = document.getElementById('mill-cost').value;
    const tuitionFees = document.getElementById('tuition-fees').value;
    const internet = document.getElementById('internet').value;
    const otherCost = document.getElementById('other-cost').value;

    const totalExpense = parseFloat(millCost) + parseFloat(tuitionFees) + parseFloat(internet) + parseFloat(otherCost);
    const balance = parseFloat(baperTk) - totalExpense;

    // history
    const totalExpensesElement = document.getElementById("total-expenses");
    totalExpensesElement.innerText = totalExpense.toFixed(2);

    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = balance.toFixed(2);

    const result = document.getElementById("results");
    result.classList.remove("hidden");


})

// saving button click
document.getElementById('calculate-savings')
    .addEventListener('click', function () {
        const baperTk = document.getElementById('baper-tk').value;
        const millCost = document.getElementById('mill-cost').value;
        const tuitionFees = document.getElementById('tuition-fees').value;
        const internet = document.getElementById('internet').value;
        const otherCost = document.getElementById('other-cost').value;

        const totalExpense = parseFloat(millCost) + parseFloat(tuitionFees) + parseFloat(internet) + parseFloat(otherCost);
        const balance = parseFloat(baperTk) - totalExpense;

        const savingPresentence = document.getElementById('savings').value;
        const savingsAmount = (parseFloat(savingPresentence) * balance) / 100;
        const remainingBalance = balance - savingsAmount;
        console.log(remainingBalance)

        const savingElement = document.getElementById('savings-amount');
        savingElement.innerText = savingsAmount.toFixed(2);

        const remainingElement = document.getElementById('remaining-balance');
        remainingElement.innerText = remainingBalance.toFixed(2);



    })

// History Tab Functionality

const historyTab = document.getElementById('history-tab');
const assistantTab = document.getElementById('assistant-tab')
historyTab.addEventListener('click', function () {
    historyTab.classList.add(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600"
    )

    assistantTab.classList.remove(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600"
    )
    document.getElementById('expense-form').classList.add('hidden')
    document.getElementById('history-section').classList.remove('hidden')




})


assistantTab.addEventListener("click", function () {
    assistantTab.classList.add(
      "text-white",
      "bg-gradient-to-r",
      "from-blue-500",
      "to-purple-600"
    );
    historyTab.classList.remove(
      "text-white",
      "bg-gradient-to-r",
      "from-blue-500",
      "to-purple-600"
    );
    document.getElementById("expense-form").classList.remove("hidden");
    document.getElementById("history-section").classList.add("hidden");
  });

  