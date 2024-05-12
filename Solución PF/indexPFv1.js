
function storeInput() {
    const inputArray = [];

    const input1 = document.getElementById("question1");
    const input1a = document.getElementById("optionAquestion1");
    const input1b = document.getElementById("optionBquestion1");
    const input1c = document.getElementById("optionCquestion1");
    const input1d = document.getElementById("optionDquestion1");
    const input1correct = document.getElementById("correctOptionquestion1");
    const input2 = document.getElementById("question2");
    const input2a = document.getElementById("optionAquestion2");
    const input2b = document.getElementById("optionBquestion2");
    const input2c = document.getElementById("optionCquestion2");
    const input2d = document.getElementById("optionDquestion2");
    const input2correct = document.getElementById("correctOptionquestion2");
    const input3 = document.getElementById("question3");
    const input3a = document.getElementById("optionAquestion3");
    const input3b = document.getElementById("optionBquestion3");
    const input3c = document.getElementById("optionCquestion3");
    const input3d = document.getElementById("optionDquestion3");
    const input3correct = document.getElementById("correctOptionquestion3");
    const input4 = document.getElementById("question4");
    const input4a = document.getElementById("optionAquestion4");
    const input4b = document.getElementById("optionBquestion4");
    const input4c = document.getElementById("optionCquestion4");
    const input4d = document.getElementById("optionDquestion4");
    const input4correct = document.getElementById("correctOptionquestion4");
    const input5 = document.getElementById("question5");
    const input5a = document.getElementById("optionAquestion5");
    const input5b = document.getElementById("optionBquestion5");
    const input5c = document.getElementById("optionCquestion5");
    const input5d = document.getElementById("optionDquestion5");
    const input5correct = document.getElementById("correctOptionquestion5");
    const input6 = document.getElementById("question6");
    const input6a = document.getElementById("optionAquestion6");
    const input6b = document.getElementById("optionBquestion6");
    const input6c = document.getElementById("optionCquestion6");
    const input6d = document.getElementById("optionDquestion6");
    const input6correct = document.getElementById("correctOptionquestion6");
    const input7 = document.getElementById("question7");
    const input7a = document.getElementById("optionAquestion7");
    const input7b = document.getElementById("optionBquestion7");
    const input7c = document.getElementById("optionCquestion7");
    const input7d = document.getElementById("optionDquestion7");
    const input7correct = document.getElementById("correctOptionquestion7");
    const input8 = document.getElementById("question8");
    const input8a = document.getElementById("optionAquestion1");
    const input8b = document.getElementById("optionBquestion1");
    const input8c = document.getElementById("optionCquestion1");
    const input8d = document.getElementById("optionDquestion1");
    const input8correct = document.getElementById("correctOptionquestion1");

    const Question1 = {
        question: input1.value,
        optionA: input1a.value,
        optionB: input1b.value,
        optionC: input1c.value,
        optionD: input1d.value,
        optionCorrect: input1correct.value,
    };
    const Question2 = {
        question: input2.value,
        optionA: input2a.value,
        optionB: input2b.value,
        optionC: input2c.value,
        optionD: input2d.value,
        optionCorrect: input2correct.value
    };
    const Question3 = {
        question: input3.value,
        optionA: input3a.value,
        optionB: input3b.value,
        optionC: input3c.value,
        optionD: input3d.value,
        optionCorrect: input3correct.value
    };
    const Question4 = {
        question: input4.value,
        optionA: input4a.value,
        optionB: input4b.value,
        optionC: input4c.value,
        optionD: input4d.value,
        optionCorrect: input4correct.value
    };
    const Question5 = {
        question: input5.value,
        optionA: input5a.value,
        optionB: input5b.value,
        optionC: input5c.value,
        optionD: input5d.value,
        optionCorrect: input5correct.value
    };
    const Question6 = {
        question: input6.value,
        optionA: input6a.value,
        optionB: input6b.value,
        optionC: input6c.value,
        optionD: input6d.value,
        optionCorrect: input6correct.value
    };
    const Question7 = {
        question: input7.value,
        optionA: input7a.value,
        optionB: input7b.value,
        optionC: input7c.value,
        optionD: input7d.value,
        optionCorrect: input7correct.value
    };
    const Question8 = {
        question: input8.value,
        optionA: input8a.value,
        optionB: input8b.value,
        optionC: input8c.value,
        optionD: input8d.value,
        optionCorrect: input8correct.value
    };
   

    inputArray.push(Question1, Question2, Question3, Question4, Question5, Question6, Question7, Question8)
    console.log(inputArray)
        
}
  //*creacion funcion asign user answer:
  