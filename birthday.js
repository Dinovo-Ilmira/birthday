function calculateDays() {
    const birthdayInput = document.getElementById('birthday');
    const errorMessage = document.getElementById('error-message');
    const resultMessage = document.getElementById('result');
    
    if (!birthdayInput.value) {
      errorMessage.style.display = 'block';
      resultMessage.textContent = '';
    } else {
      errorMessage.style.display = 'none';
      const birthday = new Date(birthdayInput.value);
      const today = new Date();
      const differenceInTime = birthday.getTime() - today.getTime();
      const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
      const daysString = getDaysString(differenceInDays);
      resultMessage.textContent = `До вашего дня рождения осталось ${differenceInDays} ${daysString}`;
    }
  }
  
  function getDaysString(days) {
    if (days % 10 === 1 && days % 100 !== 11) {
      return 'день';
    } else if ([2, 3, 4].includes(days % 10) && ![12, 13, 14].includes(days % 100)) {
      return 'дня';
    } else {
      return 'дней';
    }
  }
  