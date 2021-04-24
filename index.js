var readlineSync = require('readline-sync');
const chalk = require('chalk');



var userName = readlineSync.question(chalk.red("Please enter Your Name: "));
console.log(chalk.green("Welcome ")+chalk.yellow(userName)+chalk.green("!"));
console.log(chalk.red("In the upcoming section, we will be asking You some simple questions. You have to answer those questions in yes or no format. "));

var score=0;

function qa(questions, answers){
   console.log("\n");
  console.log(chalk.magenta("QUESTION: "));
  var userAnswer = readlineSync.question(chalk.blue(questions)+chalk.magenta("\nYOUR ANSWER: "));
  console.log("\n");
  if(userAnswer === answers)
  {
    score = score+1;
  }
  
}

qa("Are you overweight or underweight?", "yes");
console.log("Being overweight can predispose you to type 2 diabetes, so having excess weight may make you more likely to have the condition. Conversely, unexplained weight loss can be a symptom of type 1 diabetes. This is because the body is unable to metabolise sugar and may start breaking down fat.");

qa("Have you felt thirstier, or found yourself drinking more than usual in recent weeks or months?", "yes");
console.log("Whilst thirst can be a symptom of diabetes, this symptom can come on gradually. With type 2 diabetes, you don’t lose the ability to process sugar overnight, meaning the onset of excess thirst may be so gradual that you don’t notice it.");

qa("Are you peeing more than usual?", "yes");
console.log("More frequent peeing is a symptom of diabetes, but not everyone experiences the same symptoms. In addition, this symptom can come on gradually, meaning you might not notice the increase.");

qa("Have you noticed that any cuts and grazes you might have seem to be taking longer to heal than usual?", "yes");
console.log("Diabetes causes levels of blood glucose to rise, which can lead to poor circulation. This means if you cut yourself, it can be harder for the blood to reach the area affected in order to repair it. However, slow wound healing can also happen as a result of ageing, or of other conditions including zinc deficiency.");

qa("Have you noticed any changes to your vision?", "yes");
console.log("Diabetes can cause problems with vision; however, early stage diabetic retinopathy may be asymptomatic.If you get a sudden increase in 'floaters', you should seek urgent medical help as there are other possible causes that could threaten your eyesight if untreated.");

qa("Have you experienced recent tingling or a pins and needles sensation in the hands or feet?", "yes");
console.log("As well as affecting the vessels in the eyes, high levels of glucose in the bloodstream can lead to an inflammatory response. As this frequently occurs in the smaller vessels, it can cause diabetic neuropathy – tingling in the hands and feet. This inflammatory response may also lead to cardiovascular disease, so if you have any concerns make sure you get checked out. However, as with many symptoms, there can be other causes of tingling in the extremities, including poor circulation, vitamin or mineral deficiency and panic attacks.");

qa("Have you been experiencing excessive tiredness or fatigue?", "yes");
console.log("Slow circulation in diabetes can mean that your body isn’t delivering sufficient oxygen to your cells, making you feel more tired. Tiredness can also occur due to inflammation may cause monocytes – large white blood cells - to enter the brain. However, feeling tired can be a symptom of many conditions, including having an underactive thyroid, depression and poor sleep.", "yes");

qa("Do you experience dizziness?", "yes");
console.log(chalk.green("Your score is : "+score));
if(score >= 8)
{
  console.log(chalk.red("You are at a higher risk of having Diabetes. Please consult a Doctor"));
}
else if(score >=5 && score < 8)
{
  console.log(chalk.green("You are at a moderate risk of having Diabetes.If symptoms persist, it is highly advisable to consult a Doctor."));
}
else{
  console.log(chalk.yellow("You are at almost no risk of having Diabetes."))
}

console.log(chalk.cyanBright("Thank You for Visiting!\nWishing You Health and Happiness "+userName));
