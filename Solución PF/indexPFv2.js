
var inputArray = [];

var correctAnswersarray = [];

var userAnswerarray = [];

function storeInput() {
    
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
//*storing inputvalues in array of question objects
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
   
//*Storing Question Objects in inputArray:
    inputArray.push(Question1, Question2, Question3, Question4, Question5, Question6, Question7, Question8)
    console.log(inputArray)

//*storing correct ansers on separate array
    userAnswerarray.push(input1correct, input2correct, input3correct, input4correct, input5correct, input6correct, input7correct, input8correct)

//*asigning user inputs as Quiz questions:
    //*Question 1:
    const Question1print = document.getElementById("Question1print")
    Question1print.textContent = input1.value;
    const Question1printa = document.getElementById("Question1printa")
    Question1printa.textContent = input1a.value;
    const  Question1printb = document.getElementById("Question1printb")
    Question1printb.textContent = input1b.value;
    const Question1printc = document.getElementById("Question1printc")
    Question1printc.textContent = input1c.value;
    const Question1printd = document.getElementById("Question1printd")
    Question1printd.textContent = input1d.value;

    //*Question 2:
    const Question2print = document.getElementById("Question2print")
    Question2print.textContent = input2.value;
    const Question2printa = document.getElementById("Question2printa")
    Question2printa.textContent = input2a.value;
    const  Question2printb = document.getElementById("Question2printb")
    Question2printb.textContent = input2b.value;
    const Question2printc = document.getElementById("Question2printc")
    Question2printc.textContent = input2c.value;
    const Question2printd = document.getElementById("Question2printd")
    Question2printd.textContent = input2d.value;

    //*Question 3:
    const Question3print = document.getElementById("Question3print")
    Question3print.textContent = input3.value;
    const Question3printa = document.getElementById("Question3printa")
    Question3printa.textContent = input3a.value;
    const  Question3printb = document.getElementById("Question3printb")
    Question3printb.textContent = input3b.value;
    const Question3printc = document.getElementById("Question3printc")
    Question3printc.textContent = input3c.value;
    const Question3printd = document.getElementById("Question3printd")
    Question3printd.textContent = input3d.value;

    //*Question 4:
    const Question4print = document.getElementById("Question4print")
    Question4print.textContent = input4.value;
     const Question4printa = document.getElementById("Question4printa")
    Question4printa.textContent = input4a.value;
    const  Question4printb = document.getElementById("Question4printb")
    Question4printb.textContent = input4b.value;
    const Question4printc = document.getElementById("Question4printc")
    Question4printc.textContent = input4c.value;
    const Question4printd = document.getElementById("Question4printd")
    Question4printd.textContent = input4d.value;

    //*Question 5:
    const Question5print = document.getElementById("Question5print")
    Question5print.textContent = input5.value;
    const Question5printa = document.getElementById("Question5printa")
    Question5printa.textContent = input5a.value;
    const  Question5printb = document.getElementById("Question5printb")
    Question5printb.textContent = input5b.value;
    const Question5printc = document.getElementById("Question5printc")
    Question5printc.textContent = input5c.value;
    const Question5printd = document.getElementById("Question5printd")
    Question5printd.textContent = input5d.value;

    //*Question 6:
    const Question6print = document.getElementById("Question6print")
    Question2print.textContent = input6.value;
    const Question6printa = document.getElementById("Question6printa")
    Question6printa.textContent = input6a.value;
    const  Question6printb = document.getElementById("Question6printb")
    Question6printb.textContent = input6b.value;
    const Question6printc = document.getElementById("Question6printc")
    Question6printc.textContent = input6c.value;
    const Question6printd = document.getElementById("Question6printd")
    Question6printd.textContent = input6d.value;

    //*Question 7:
    const Question7print = document.getElementById("Question7print")
    Question7print.textContent = input7.value;
    const Question7printa = document.getElementById("Question7printa")
    Question7printa.textContent = input7a.value;
    const Question7printb = document.getElementById("Question7printb")
    Question7printb.textContent = input7b.value;
    const Question7printc = document.getElementById("Question7printc")
    Question7printc.textContent = input7c.value;
    const Question7printd = document.getElementById("Question7printd")
    Question7printd.textContent = input7d.value;

    //*Question 8:
    const Question8print = document.getElementById("Question8print")
    Question8print.textContent = input8.value;
    const Question8printa = document.getElementById("Question8printa")
    Question8printa.textContent = input8a.value;
    const  Question8printb = document.getElementById("Question8printb")
    Question8printb.textContent = input8b.value;
    const Question8printc = document.getElementById("Question8printc")
    Question8printc.textContent = input8c.value;
    const Question8printd = document.getElementById("Question8printd")
    Question8printd.textContent = input8d.value;

    

    function checkCorrectanswer()
}
